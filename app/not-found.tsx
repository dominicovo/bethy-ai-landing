"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="relative w-full min-h-screen bg-[#030303] flex flex-col items-center justify-center overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] z-0" />

      {/* ── CINEMATIC BLUR CIRCLE ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[35vw] md:text-[20vw] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 select-none">
            404
          </h1>
        </motion.div>

        {/* Info & Error Code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-6 mt-[1vw]"
        >
          {/* Badge Terminal Error */}
          <div className="flex items-center gap-3 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/20">
            <Terminal size={14} className="text-white" />
            <span className="font-mono text-[10px] md:text-xs text-white/70 uppercase tracking-widest mt-0.5">
              ERR_PROPERTY_NOT_FOUND
            </span>
          </div>

          <p className="text-neutral-400 font-light max-w-md text-sm md:text-base leading-relaxed">
            This page went out on a job and hasn&apos;t come back yet. It may
            have been moved, renamed, or never existed.
          </p>

          <Link href="/">
            <Button variant="white" className="mt-4">
              Back To Bethy
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
