import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";
import mongoose from "mongoose";

export const GET = async (req) => {
  try {
    mongoose.set("strictQuery", true);
    await connect();

    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error!", error, { status: 500 });
  }
};
