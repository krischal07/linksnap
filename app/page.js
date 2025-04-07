import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Linksnap</h1>
      <Button>Snap It!</Button>
      <Button variant="outline"> Outline Snap!</Button>
    </div>
  );
}
