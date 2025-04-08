

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import ClientForm from "@/components/dashboard/ClientForm"

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");

  console.log("session userid:", session.user.id)

  return (
    <div className="min-h-screen p-4">
      <h1>Dashboard</h1>
      <p>Welcome, {session.user.name}!</p>
      <ClientForm userId = {session.user.id}/>
    </div>
  );
}
