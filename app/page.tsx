import Hero from "@/components/Hero";
import Core from "@/components/Core";
import Developer from "@/components/Developer";
import HowItWorks from "@/components/HowItWorks";
import Solutions from "@/components/Solutions";
import Performance from "@/components/Performance";
import About from "@/components/About";
import Enterprise from "@/components/Enterprise";
// import Pricing from "@/components/Pricing"; // TEMP: pricing section disabled
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-qbg text-qtext">
      {/* Background global indicator */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02]" />

      {/* Komponen Utama */}

      <Hero />
      <Core />
      <Developer />
      <Enterprise />
      <HowItWorks />
      <Solutions />
      <Performance />
      <About />
      {/* <Pricing /> */} {/* TEMP: pricing section disabled */}
      <Faq />
    </main>
  );
}
