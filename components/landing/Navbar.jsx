
"use client"; 
import { useRouter } from "next/navigation";
import { Button } from "../ui/button"; 
import { signIn, signOut } from "next-auth/react";

export default function Navbar({ session }) {
  const router = useRouter()

  const handleSignOut = async() => {
    console.log("singout clicked")
    const confirmSignOut = window.confirm("Do you really want to sign out?");
    
    if (confirmSignOut) {
     await signOut({ callbackUrl:"/"});
     window.location.href = "/";
      // router.push("/")
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/">
              <div className="flex-shrink-0 flex items-center">
                <div className="h-8 w-8 mr-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full"
                  >
                    <circle cx="7" cy="7" r="3" fill="#0EA5E9" />
                    <circle cx="17" cy="7" r="3" fill="#1E293B" />
                    <circle cx="7" cy="17" r="3" fill="#1E293B" />
                    <circle cx="17" cy="17" r="3" fill="#1E293B" />
                  </svg>
                </div>
                <span className="font-bold text-xl text-gray-900">LinkSnap</span>
              </div>
            </a>
          </div>
          <div className="flex items-center">
            {session ? (
              <Button
                onClick={handleSignOut}
                className="ml-4"
              >
                Sign Out
              </Button>
            ) : (
              <Button
                className="ml-4"
                onClick={() => signIn(undefined, { callbackUrl: "/dashboard" })}
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}