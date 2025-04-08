

import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";

export default function Hero() {

  return (
    <section className="flex-1 flex items-center justify-center p-8 text-center">
      <div>
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">Shorten. Share. Track.</h2>
        <p className="text-lg mb-6">Create short URLs and QR codes in seconds!</p>
        <Button variant="destructive" size="lg">
          <a href="/dashboard" className="flex gap-2">
            
            Shorten Now
            <Scissors />
          </a>

          
          
          </Button>
      </div>
    </section>
  );
}