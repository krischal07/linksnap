// "use client";

// import axios from "axios";
// import { redirect, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// export default async function RedirectPage({ params }) {
//   const[loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const router = useRouter();
//   const resolvedParams = await params;

//   useEffect(() => {
//     async function fetchAndIncerement() {
//       try {
//         const res = await axios.get(
//           `/api/redirect/${resolvedParams.shortCode}`
//         );
//         const data = await res.json();
//         if (!res.ok) {
//           throw new Error(data.message || "Link not found");
//         }

//         await axios.patch(`/api/links/${resolvedParams.shortCode}/click`);
//         router.replace(data.originalUrl);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchAndIncerement();
//   }, [resolvedParams.shortCode, router]);
//   if (loading) return <div className="p-8">Loading your link...</div>;
//   if (error) return <div className="p-8">{error}</div>;
//   return null;
// }




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

  redirect(link.originalUrl); // Server-side redirect
}