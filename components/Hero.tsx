"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Landmark,
  BadgePoundSterling,
  ShieldCheck,
  Home,
  Building2,
  Users,
} from "lucide-react";
import TalkToBethy from "./TalkToBethy";

export default function Hero() {
  // --- DATA: MARQUEE BRANDS ---
  const brands = [
    { name: "XERO", icon: Landmark },
    { name: "GOCARDLESS", icon: BadgePoundSterling },
    { name: "EPC REGISTER", icon: ShieldCheck },
    { name: "OPENRENT", icon: Home },
    { name: "RIGHTMOVE", icon: Building2 },
    { name: "SPAREROOM", icon: Users },
  ];

  return (
    <section className="relative w-full h-auto min-h-[780px] md:h-[850px] lg:h-[920px] flex flex-col justify-center bg-[#030303] overflow-hidden border-b border-white/5">
      {/* --- BACKGROUND & MASKS --- */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 bg-[#111]"
          src="/property-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/20 via-[#030303]/75 to-[#030303] w-full md:bg-gradient-to-r md:from-[#030303]/80 md:via-[#030303]/50 md:to-transparent md:w-[75%]" />
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#030303] to-transparent" />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 flex flex-col justify-center grow pt-32 pb-32 md:pt-0 md:pb-16">
        <div className="max-w-2xl mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-[#FAFAFA] leading-[1.05] mb-6"
          >
            Meet Bethy, <br />
            Your Property Copilot.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#888888] text-base md:text-lg max-w-lg leading-relaxed mb-10 font-light"
          >
            Bethy is your AI employee that does the boring stuffs, like answering your
            phone, triages repairs, sources tradespeople, so you can focus on growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          >
            {/* --- ACTION BUTTONS --- */}
            <TalkToBethy className="w-full sm:w-auto" />

            <Link
              href="https://calendly.com/dom9ovo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full px-8 py-4 bg-white text-[#030303] hover:text-[#ffffff] rounded-none text-xs font-semibold uppercase tracking-widest hover:bg-white/5 transition-colors border border-white/20 hover:border-white/50 duration-300">
                Book A Demo
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* --- BRAND MARQUEE --- */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-[#030303]/80 backdrop-blur-md border-t border-white/5 flex items-center overflow-hidden z-20">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap items-center w-max animate-marquee">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-3 mx-10 md:mx-16 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <brand.icon size={20} className="text-white" />
              <span className="font-mono font-medium text-xs tracking-[0.2em] text-white">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
