"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Activity, Globe2, Zap, Server, Cpu, Network } from "lucide-react";
import Button from "./Button";
import Link from "next/link";

const AnimatedCounter = ({
  end = 100,
  suffix = "",
  prefix = "",
  duration = 2000,
  decimals = 0,
}) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const updateCounter = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(easeProgress * end);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums tracking-tighter">
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default function Performance() {
  return (
    <section className="relative w-full bg-white py-14 md:py-22 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-black/5">
      {/* ── HEADER SECTION ── */}
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] text-black tracking-[0.2em] uppercase mb-4 block flex items-center justify-center gap-2"
        >
          <Activity size={12} />
          What Bethy Covers
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-medium tracking-tighter text-black leading-[1.1]"
        >
          Coverage that <br className="hidden md:block" />
          doesn&apos;t clock off.
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* ── 1. METRICS GRID (2x2) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10 shadow-xl mb-24">
          {/* Metric 1: Latency */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 flex flex-col justify-between group hover:bg-neutral-50 transition-colors min-h-[260px]"
          >
            <Zap
              size={24}
              className="text-black/40 mb-12 group-hover:text-black transition-colors"
            />
            <div>
              <div className="text-5xl md:text-6xl font-medium text-black mb-3 flex items-center">
                <AnimatedCounter end={24} />
                <span className="text-2xl md:text-3xl ml-2 text-black/30 font-light">
                  /7
                </span>
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 group-hover:text-black transition-colors">
                Calls Answered, Day Or Night
              </p>
            </div>
          </motion.div>

          {/* Metric 2: Maintenance Pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-10 flex flex-col justify-between group hover:bg-neutral-50 transition-colors min-h-[260px]"
          >
            <Activity
              size={24}
              className="text-black/40 mb-12 group-hover:text-black transition-colors"
            />
            <div>
              <div className="text-5xl md:text-6xl font-medium text-black mb-3 flex items-center">
                <AnimatedCounter end={5} />
                <span className="text-2xl md:text-3xl ml-2 text-black/30 font-light">
                  stages
                </span>
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 group-hover:text-black transition-colors">
                Every Repair Tracked, Stage By Stage
              </p>
            </div>
          </motion.div>

          {/* Metric 3: Integrations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 flex flex-col justify-between group hover:bg-neutral-50 transition-colors min-h-[260px]"
          >
            <Server
              size={24}
              className="text-black/40 mb-12 group-hover:text-black transition-colors"
            />
            <div>
              <div className="text-5xl md:text-6xl font-medium text-black mb-3 flex items-center">
                <AnimatedCounter end={4} />
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 group-hover:text-black transition-colors">
                Integrations Built In
              </p>
            </div>
          </motion.div>

          {/* Metric 4: Free Trial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-10 flex flex-col justify-between group hover:bg-neutral-50 transition-colors min-h-[260px]"
          >
            <Cpu
              size={24}
              className="text-black/40 mb-12 group-hover:text-black transition-colors"
            />
            <div>
              <div className="text-5xl md:text-6xl font-medium text-black mb-3 flex items-center">
                <AnimatedCounter end={14} />
                <span className="text-2xl md:text-3xl ml-2 text-black/30 font-light">
                  days
                </span>
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 group-hover:text-black transition-colors">
                Free Trial, No Card Required
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── 2. STANDALONE LARGE BOX (EDGE NODES) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-6 ml-2">
            <Network size={16} className="text-black" />
            <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-black">
              How A Repair Moves Through Bethy
            </h3>
          </div>

          <div className="relative bg-white border border-black/10 shadow-2xl p-10 md:p-16 flex flex-col md:flex-row md:items-end justify-between group min-h-[400px] overflow-hidden">
            {/* Map Visualization */}
            <div className="absolute right-0 top-0 w-full md:w-[75%] h-full opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-700 pointer-events-none">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1651964723487-722c8acc07d6?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-multiply mask-image:linear-gradient(to_left,white,transparent)" />
            </div>

            {/* Left Description */}
            <div className="relative z-10 mb-8 md:mb-0">
              <Globe2
                size={28}
                className="text-black/40 mb-16 group-hover:text-black transition-colors"
              />
              <div className="text-7xl md:text-8xl font-medium text-black mb-4 flex items-center">
                <AnimatedCounter end={5} />
              </div>
              <p className="text-sm font-mono uppercase tracking-widest text-neutral-500 group-hover:text-black transition-colors">
                Reported → Scouting → Approval → In Progress → Complete
              </p>
            </div>

            {/* Right Description */}
            <div className="relative z-10 max-w-sm text-neutral-600 text-sm leading-relaxed font-light md:pb-2">
              Every maintenance ticket in Bethy moves through the same five
              stages, so you always know exactly where a job stands — and
              nothing gets booked without your approval.
            </div>
          </div>
        </motion.div>
        <Link href="/performance">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <Button
              variant="black"
              onClick={() => console.log("Clicked!")}
              className="flex mt-16 md:mt-24 items-center mx-auto"
            >
              See The Full Platform
            </Button>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
