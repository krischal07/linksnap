import connectDB from "@/lib/mongodb";
import Link from "@/models/Link";
import { redirect } from "next/navigation";


export default async function RedirectPage({ params }) {
    const resolvedParams = await params
    
  await connectDB();    
  const link = await Link.findOne({ shortCode: resolvedParams. shortCode });
  console.log("linkFound",link)

  if (!link) return <div>Link not found</div>;
  redirect(link.originalUrl);
}


