"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Quote, Users } from "lucide-react";
import Button from "@/components/Button";

// --- HELPER: COUNT UP ANIMATION ---
function CounterAnimate({
  value,
  duration = 2,
}: {
  value: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    if (start === value) return;

    const totalDuration = duration * 1000;
    const startTime = new Date().getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const elapsed = now - startTime;

      if (elapsed >= totalDuration) {
        setCount(value);
        clearInterval(timer);
      } else {
        const progress = elapsed / totalDuration;
        setCount(Math.floor(start + (value - start) * progress));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

export default function AboutAndClientsPage() {
  // --- DATA: IMPACT METRICS ---
  const caseStudies = [
    {
      client: "Every Call, Answered",
      prefix: "",
      value: 0,
      suffix: "",
      title: "Missed calls while you're at work",
      desc: "Bethy answers as your AI property manager any time you can't get to the phone.",
    },
    {
      client: "Maintenance Pipeline",
      prefix: "",
      value: 5,
      suffix: "",
      title: "Stages, every repair tracked",
      desc: "REPORTED to COMPLETED — nothing falls through the cracks in between.",
    },
    {
      client: "Fee Approval",
      prefix: "",
      value: 100,
      suffix: "%",
      title: "Of fees approved by you first",
      desc: "Bethy proposes the tradesperson and the price. You decide before it's booked.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* --- SECTION: GLOBAL HEADER --- */}
      <section className="relative w-full pt-32 md:pt-40 pb-24 md:pb-32 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center overflow-hidden bg-[#030303]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030303]/30 z-0" />

        <div className="relative z-10 flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[10px] text-white tracking-[0.2em] uppercase mb-6 flex items-center gap-2 bg-white/10 px-4 py-2 border border-white/20 backdrop-blur-md"
          >
            <Users size={12} /> About Us
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-medium tracking-tighter text-white leading-[1.1] mb-8 max-w-4xl"
          >
            Built so landlords <br className="hidden md:block" />
            get their evenings back.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-300 text-lg font-light leading-relaxed max-w-2xl"
          >
            Property management shouldn't feel like a second job. Learn why we
            built Bethy, and who it's for.
          </motion.p>
        </div>
      </section>

      {/* --- SECTION: ABOUT & MANIFESTO --- */}
      <section className="relative w-full pt-24 md:pt-32 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
            <div className="lg:col-span-4 flex flex-col">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-mono text-[10px] text-black tracking-[0.2em] uppercase mb-4 flex items-center gap-2"
              >
                <Quote size={12} />
                The Manifesto
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-2xl font-medium tracking-tight text-black mb-8"
              >
                Property management shouldn't feel like a second job.
              </motion.h3>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-5xl font-light text-neutral-400 leading-[1.2] tracking-tight"
              >
                <span className="text-black font-medium">
                  We believe landlords shouldn't lose their evenings to
                  ringing phones.
                </span>{" "}
                Bethy exists so property management stops eating into your
                evenings and weekends.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-lg text-neutral-500 font-light leading-relaxed max-w-3xl"
              >
                Our mission is simple: give landlords and agents their time
                back. A missed call turns into a missed viewing or an
                unhappy tenant; an unanswered maintenance report turns into a
                bigger, costlier problem. So we built the AI property
                manager we wished existed — one that answers every call,
                triages every repair, and only ever asks you to approve the
                money that actually matters.
              </motion.p>
            </div>
          </div>

          {/* --- SUB-SECTION: IMPACT METRICS --- */}
          <div className="flex flex-col">
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-black uppercase tracking-widest mb-6"
            >
              The Impact
            </motion.h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10">
              {caseStudies.map((study, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="bg-white p-8 md:p-10 flex flex-col justify-between min-h-[250px]"
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-6">
                      {study.client}
                    </span>
                    <div className="text-4xl md:text-5xl font-medium text-black tracking-tighter mb-4 flex items-center">
                      {study.prefix}
                      <CounterAnimate value={study.value} />
                      {study.suffix}
                    </div>
                    <h4 className="text-base font-medium text-black mb-2">
                      {study.title}
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed">
                    {study.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
