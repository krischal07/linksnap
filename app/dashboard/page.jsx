

// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";
// import { redirect } from "next/navigation";
// import ClientForm from "@/components/dashboard/ClientForm"

// export default async function Dashboard() {
//   const session = await getServerSession(authOptions);
//   if (!session) redirect("/api/auth/signin");

//   console.log("session userid:", session.user.id)

//   return (
//     <div className="min-h-screen p-4">
//       <h1>Dashboard</h1>
//       <p>Welcome, {session.user.name}!</p>
//       <ClientForm userId = {session.user.id}/>
//     </div>
//   );
// }


import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import ClientForm from "@/components/dashboard/ClientForm";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/api/auth/signin");

  console.log("session userid:", session.user.id);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        {/* Dashboard Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Welcome to your Dashboard</h1>
          <p className="text-lg text-gray-500 mt-2">Hello, {session.user.name}!</p>
        </header>
        <ClientForm />
        {/* Dashboard Content Section */}
        
      </div>
    </div>
  );
}
