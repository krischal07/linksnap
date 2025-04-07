import { nanoid } from "nanoid";
import connectDB from "@/lib/mongodb";
import Link from "@/models/Link";

export async function POST(req) {
  await connectDB();

  const { originalUrl, userId } = await req.json();

  const shortCode = nanoid(6);
  const link = await Link.create({
    originalUrl,
    shortCode,
    userId,
  });

  return new Response(JSON.stringify({ shortCode }), { status: 201 });
}
