import { Navbar } from "@/components/home/Navbar";
import { Hero } from "@/components/home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans relative">
      <Navbar />
      <Hero />
    </main>
  );
}
