import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function POST(request: Request) {
  let client;

  try {
    const body = await request.json();
    const { email } = body;

    // Validate data
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Connect to MongoDB with proper error handling
    try {
      client = new MongoClient(process.env.MONGODB_URI || "");
      await client.connect();
    } catch (connectionError) {
      console.error("MongoDB connection error:", connectionError);
      return NextResponse.json(
        { error: "Database connection failed" },
        { status: 500 }
      );
    }

    const db = client.db("portfolio");
    const collection = db.collection("subscribers");

    // Check if email already exists
    try {
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
    } catch (dbOperationError) {
      console.error("Database operation error:", dbOperationError);
      return NextResponse.json(
        { error: "Database operation failed" },
        { status: 500 }
      );
    }
  } catch (error) {
    // Close MongoDB connection if it exists
    if (client) {
      try {
        await client.close();
      } catch (closeError) {
        console.error("Error closing MongoDB connection:", closeError);
      }
    }

    console.error("Error in newsletter subscription:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again later." },
      { status: 500 }
    );
  }
}
