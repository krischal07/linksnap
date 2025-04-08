import { Button } from "../ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="p-4 bg-slate-800 text-white flex justify-between items-center flex-col sm:flex-row">
      <h1 className="text-xl font-bold">
        <a href="/">LinkSnap</a>
      </h1>
      <div>
        {session ? (
          <Button asChild>
            <a href="/api/auth/signout">Sign Out</a>
          </Button>
        ) : (
          <>
            <Button className="text-white" variant="ghost" asChild>
              <a href="/api/auth/signin">Login</a>
            </Button>
            <Button className="ml-2" asChild>
              <a href="/api/auth/signin">Sign Up</a>
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}
