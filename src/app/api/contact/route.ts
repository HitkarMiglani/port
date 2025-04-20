import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function POST(request: Request) {
  let client;

  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate data
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
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
    const collection = db.collection("contacts");

    // Insert the document
    try {
      const result = await collection.insertOne({
        name,
        email,
        subject,
        message,
        createdAt: new Date(),
      });

      await client.close();

      return NextResponse.json(
        {
          message: "Message sent successfully",
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

    console.error("Error in contact form submission:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
