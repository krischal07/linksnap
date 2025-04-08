import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LinkSnap",
  description: "LinkSnap | URL Shortener & QR Code Generator",
  icons: {
    icon: "/logo.svg",
  },
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions); // Fetch session server-side

  return (
    // <SessionProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar session={session}/>
          {children}
          <Footer />
        </body>
      </html>

  );
}
