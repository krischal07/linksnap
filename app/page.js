import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
     <Navbar />
     <Hero />
     <Footer />
    </div>
  );
}
