// import { Button } from "../ui/button";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// export default async function Navbar() {
//   const session = await getServerSession(authOptions);

//   return (
//     <>

// <nav className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <a href="/">

//               <div className="flex-shrink-0 flex items-center">
//                 <div className="h-8 w-8 mr-2">
//                   <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
//                     <circle cx="7" cy="7" r="3" fill="#0EA5E9" />
//                     <circle cx="17" cy="7" r="3" fill="#1E293B" />
//                     <circle cx="7" cy="17" r="3" fill="#1E293B" />
//                     <circle cx="17" cy="17" r="3" fill="#1E293B" />
//                   </svg>
//                 </div>
//                 <span className="font-bold text-xl text-gray-900">LinkSnap</span>
//               </div>
//               </a>
//             </div>
//             {/* <div className="flex items-center">
//               <div className="hidden md:ml-6 md:flex md:space-x-8">
//                 <a href="#features" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Features</a>
//                 <a href="#solutions" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Solutions</a>
//                 <a href="#resources" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Resources</a>
//                 <a href="#pricing" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Pricing</a>
//               </div>
//             </div> */}
//             <div className="flex items-center">

//             <div>
//           {session ? (
//             <Button asChild>
//               <a href="/api/auth/signout">Sign Out</a>
//             </Button>
//           ) : (
//             <>
//               {/* <Button  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900" variant="ghost" asChild>
//                 <a href="/api/auth/signin">Login</a>
//               </Button> */}
//               <Button className="ml-4 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600" asChild>
//                 <a href="/api/auth/signin">Sign Up</a>
//               </Button>
//             </>
//           )}
//         </div>
//             </div>
//           </div>
//         </div>
//       </nav>



//       {/* <nav className="p-4 bg-slate-800 text-white flex justify-between items-center flex-col sm:flex-row">
//         <h1 className="text-xl font-bold">
//           <a href="/">LinkSnap</a>
//         </h1>
//         <div>
//           {session ? (
//             <Button asChild>
//               <a href="/api/auth/signout">Sign Out</a>
//             </Button>
//           ) : (
//             <>
//               <Button className="text-white" variant="ghost" asChild>
//                 <a href="/api/auth/signin">Login</a>
//               </Button>
//               <Button className="ml-2" asChild>
//                 <a href="/api/auth/signin">Sign Up</a>
//               </Button>
//             </>
//           )}
//         </div>
//       </nav> */}
//     </>
//   );
// }


// "use client"; // Required for client-side hooks

// import { Button } from "../ui/button";
// import { signIn, signOut } from "next-auth/react";
// import { useSession } from "next-auth/react";

// export default function Navbar() {
//   const { data: session } = useSession();

//   return (
//     <nav className="bg-white shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <a href="/">
//               <div className="flex-shrink-0 flex items-center">
//                 <div className="h-8 w-8 mr-2">
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-full w-full"
//                   >
//                     <circle cx="7" cy="7" r="3" fill="#0EA5E9" />
//                     <circle cx="17" cy="7" r="3" fill="#1E293B" />
//                     <circle cx="7" cy="17" r="3" fill="#1E293B" />
//                     <circle cx="17" cy="17" r="3" fill="#1E293B" />
//                   </svg>
//                 </div>
//                 <span className="font-bold text-xl text-gray-900">LinkSnap</span>
//               </div>
//             </a>
//           </div>
//           <div className="flex items-center">
//             {session ? (
//               <Button
//                 onClick={() => signOut({ callbackUrl: "/" })}
//                 className="ml-4"
//               >
//                 Sign Out
//               </Button>
//             ) : (
//               <>
//                 <Button
//                   className="ml-4"
//                   onClick={() => signIn(undefined, { callbackUrl: "/dashboard" })}
//                 >
//                   Sign In
//                 </Button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }



"use client"; // Still client-side for interactivity

import { useRouter } from "next/navigation";
import { Button } from "../ui/button"; // Adjust path
import { signIn, signOut } from "next-auth/react";

export default function Navbar({ session }) { // Accept session prop
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