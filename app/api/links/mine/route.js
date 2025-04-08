// import { getServerSession } from "next-auth";
// import { authOptions } from "../../auth/[...nextauth]/route";
// import connectDB from "@/lib/mongodb";
// import Link from "@/models/Link";
// import mongoose from "mongoose";

// export async function GET(req){
//     const session = await getServerSession(authOptions)
//     console.log("user id:",session.user.id)
//     if(!session){
//         return new Response(JSON.stringify({
//             message:"Unauthorized"
//         }),{status:401})
//     }
//     try{

//         await connectDB()
//         const links = await Link.findOne({
//             userId: new mongoose.Types.ObjectId(session.user.id)
//         }).sort({createdAt:-1})
//         console.log("Api links",links)
//         return new Response(JSON.stringify(links),{status:200})
//     }catch(error){
//         console.log(error)
//     }

// }



import connectDB from "@/lib/mongodb";
import Link from "@/models/Link";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET(req) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
  }
  await connectDB();
  const links = await Link.find({ userId: session.user.id }).sort({ createdAt: -1 });
  console.log("API links:", links); 
  return new Response(JSON.stringify(links), { status: 200 });
}