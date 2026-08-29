"use client";

import { motion } from "framer-motion";
import { Phone, ShieldCheck, LayoutGrid } from "lucide-react";

export default function Features() {
  return (
    <section className="relative w-full bg-[#030303] py-14 md:py-22 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* ── SECTION HEADER ── */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] text-[#888888] tracking-[0.2em] uppercase mb-4 block"
          >
            // Your AI Property Manager
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium tracking-tighter text-[#FAFAFA] leading-[1.1]"
          >
            Not just a phone line. <br className="hidden md:block" />
            <span className="text-[#888888]">
              An AI that actually runs your portfolio.
            </span>
          </motion.h2>
        </div>

        {/* ── 3-GRID LAYOUT ── */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full">
          {/* ── CARD 1: TOP LEFT (Staggered Layout) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#0A0A0A] group overflow-hidden flex flex-col justify-between p-8 md:p-12 min-h-[650px]"
          >
            {/* Cinematic Background */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-all duration-[1.5s] ease-out z-0"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1766066014237-00645c74e9c6?q=80&w=1200&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/90 via-[#030303]/20 to-transparent z-0" />

            {/* Top Left Icon */}
            <div className="relative z-10 w-12 h-12 flex items-center justify-center">
              <Phone size={36} strokeWidth={1.5} className="text-[#FAFAFA]" />
            </div>

            {/* Bottom Freestyle Alignment */}
            <div className="relative z-10 mt-auto flex flex-col w-full">
              <h3 className="text-2xl md:text-3xl font-medium text-[#FAFAFA] tracking-tight mb-12 md:mb-20">
                Answers Every Tenant Call
              </h3>
              <p className="text-[#888888] group-hover:text-white/90 text-sm leading-relaxed font-light transition-colors duration-500 w-full md:w-3/5 self-end">
                Forward your business line to a dedicated Bethy number.
                It's just one part of the job — tenants get a real
                conversation, day or night, answered with the details of
                their actual tenancy.
              </p>
            </div>
          </motion.div>

          {/* ── CARD 2: TOP RIGHT (Staggered Layout) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative bg-[#0A0A0A] group overflow-hidden flex flex-col justify-between p-8 md:p-12 min-h-[650px]"
          >
            {/* Cinematic Background */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-all duration-[1.5s] ease-out z-0"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?q=80&w=1200&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/90 via-[#030303]/20 to-transparent z-0" />

            {/* Top Left Icon */}
            <div className="relative z-10 w-12 h-12 flex items-center justify-center">
              <ShieldCheck
                size={36}
                strokeWidth={1.5}
                className="text-[#FAFAFA]"
              />
            </div>

            {/* Bottom Freestyle Alignment */}
            <div className="relative z-10 mt-auto flex flex-col w-full">
              <h3 className="text-2xl md:text-3xl font-medium text-[#FAFAFA] tracking-tight mb-12 md:mb-20">
                Maintenance, Sourced And Scheduled
              </h3>
              <p className="text-[#888888] group-hover:text-white/90 text-sm leading-relaxed font-light transition-colors duration-500 w-full md:w-3/5 self-end">
                Every report is triaged by category and urgency, matched to a
                vetted tradesperson, and scheduled — you just approve the fee
                before anything is booked.
              </p>
            </div>
          </motion.div>

          {/* ── CARD 3: BOTTOM WIDE  ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 relative bg-[#0A0A0A] group overflow-hidden flex flex-col justify-between p-8 md:p-12 min-h-[650px]"
          >
            {/* Cinematic Wide Background */}
            <div
              className="absolute inset-0 bg-cover bg-[center_top_20%] opacity-50 group-hover:scale-105 group-hover:opacity-80 transition-all duration-[2s] ease-out z-0"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1604166167486-af78ebd50897?q=80&w=1600&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/90 via-[#030303]/20 to-transparent z-0" />

            {/* Top Left Icon */}
            <div className="relative z-10 w-12 h-12 flex items-center justify-center">
              <LayoutGrid
                size={36}
                strokeWidth={1.5}
                className="text-[#FAFAFA]"
              />
            </div>

            {/* Bottom Alignment  */}
            <div className="relative z-10 mt-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-end w-full">
              <h3 className="text-3xl md:text-4xl font-medium text-[#FAFAFA] tracking-tight">
                One Home For Your Whole Portfolio
              </h3>
              <p className="text-[#888888] group-hover:text-white/90 text-sm md:text-base leading-relaxed font-light transition-colors duration-500 md:max-w-md md:justify-self-end">
                Properties, tenants, rent, viewings, and repairs live in one
                dashboard — with an AI assistant that can tell you what needs
                your attention before you ask.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
