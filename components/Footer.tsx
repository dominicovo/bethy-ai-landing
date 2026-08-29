"use client"; // Wajib ditambahkan karena kita pakai hooks

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Logo from "./Logo";

export default function Footer() {
  // ── Animation Scroll Settings ──
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  // Structure Menu
  const footerLinks = [
    {
      title: "Directory",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Performance", href: "/performance" },
        { name: "Pricing", href: "/pricing" },
        { name: "Solutions", href: "/solutions" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="relative w-full bg-[#030303] pt-24 px-6 md:px-12 lg:px-24 overflow-hidden font-sans border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[60vh]">
        {/* ── TOP SECTION (Brand & Links) ── */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-16">
          {/* Left: Brand & Newsletter */}
          <div className="flex flex-col gap-8 md:w-1/2 lg:w-1/3">
            <Link href="/" className="w-fit">
              <Logo className="h-9 w-auto" />
            </Link>
            <p className="text-white/50 text-sm font-light leading-relaxed max-w-xs">
              The AI property manager for landlords and letting agents.
              Answers the phone, triages the issue, books the fix.
            </p>
          </div>

          {/* Right: Links Grid */}
          <div className="flex justify-start lg:justify-end md:w-1/2 lg:w-2/3">
            <div className="grid grid-cols-2 gap-12 lg:gap-24 w-full max-w-md">
              {footerLinks.map((column, i) => (
                <div key={i} className="flex flex-col gap-6">
                  <h4 className="text-white text-xs font-mono uppercase tracking-[0.2em] font-semibold">
                    {column.title}
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {column.links.map((link, j) => (
                      <li key={j}>
                        <Link
                          href={link.href}
                          className="text-white/50 hover:text-white text-sm font-light transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── MIDDLE SECTION (Copyright & Legal) ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8 border-t border-white/10 text-[11px] font-mono tracking-widest text-white/40 uppercase z-10">
          <span>
            &copy; {new Date().getFullYear()} Bethy. All rights reserved.
          </span>
        </div>

        {/* ── BOTTOM SECTION ── */}
        <div
          ref={containerRef}
          className="w-full flex justify-center mt-auto pointer-events-none select-none overflow-hidden"
        >
          <motion.h1
            style={{
              scale,
              opacity,
              transformOrigin: "bottom center", // Memastikan teks membesar dari bawah, bukan dari tengah
            }}
            className="text-[17vw] leading-[1] font-bold tracking-tighter text-[#FAFAFA] -mb-[3vw]"
          >
            BETHY
          </motion.h1>
        </div>
      </div>
    </footer>
  );
}
