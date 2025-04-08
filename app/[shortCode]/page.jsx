import connectDB from "@/lib/mongodb";
import Link from "@/models/Link";
import { redirect } from "next/navigation";

export default async function RedirectPage({ params }) {
    const resolvedParams = await params
    console.log("shortcode",resolvedParams.shortCode)
  await connectDB();
  const link = await Link.findOneAndUpdate(
    { shortCode: resolvedParams.shortCode },
    { $inc: { clicks: 1 } }, // Increment clicks
    { new: true }
  );
console.log("found and update link",link)
  if (!link) {
    return <div className="p-8">Link not found</div>;
  }

  redirect(link.originalUrl); 
}