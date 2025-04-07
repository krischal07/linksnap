

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import ClientForm from "@/components/dashboard/ClientForm"

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {session.user.name}!</p>
      <ClientForm userid = {session.user.id}/>
    </div>
  );
}
