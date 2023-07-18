import { NextResponse } from "next/server";

export const GET = async (req) => {
  return new NextResponse("it works!", { status: 200 });
};
