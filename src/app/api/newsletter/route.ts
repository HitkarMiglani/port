import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate data
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Connect to MongoDB
    const client = new MongoClient(process.env.MONGODB_URI || "");
    await client.connect();

    const db = client.db("portfolio");
    const collection = db.collection("subscribers");

    // Check if email already exists
    const existingSubscriber = await collection.findOne({ email });
    if (existingSubscriber) {
      await client.close();
      return NextResponse.json(
        { message: "You're already subscribed!" },
        { status: 200 }
      );
    }

    // Insert the document
    const result = await collection.insertOne({
      email,
      subscribed: true,
      createdAt: new Date(),
    });

    await client.close();

    return NextResponse.json(
      {
        message: "Subscribed successfully",
        id: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in newsletter subscription:", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
