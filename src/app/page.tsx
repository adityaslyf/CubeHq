import { Navbar } from "@/components/home/Navbar";
import { Hero } from "@/components/home/Hero";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { Collection } from "@/components/home/Collection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans relative">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <Collection />
    </main>
  );
}
