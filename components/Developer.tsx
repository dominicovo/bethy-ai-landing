"use client";

import { motion, useInView } from "framer-motion";
import { ListChecks, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Link from "next/link";

const steps = [
  {
    title: "Choose your plan",
    desc: "Pro, Business, or Enterprise — pick the one that matches the size of your portfolio.",
  },
  {
    title: "Name your AI agent",
    desc: "Give Bethy a name and a tone — friendly, professional, or direct.",
  },
  {
    title: "Forward your number",
    desc: "Forward your existing business line — missed calls only, or everything.",
  },
  {
    title: "Test the line",
    desc: "Give it a call yourself and hear Bethy answer in your agent's voice.",
  },
];

export default function Integration() {
  const [activeStep, setActiveStep] = useState(-1);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "-20% 0px -20% 0px" });

  useEffect(() => {
    if (!isInView) {
      setActiveStep(-1);
      return;
    }

    let isCancelled = false;
    const wait = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    const runSequence = async () => {
      while (!isCancelled) {
        setActiveStep(-1);
        await wait(700);
        if (isCancelled) break;

        for (let i = 0; i < steps.length; i++) {
          if (isCancelled) break;
          setActiveStep(i);
          await wait(900);
        }
        if (isCancelled) break;

        await wait(2500);
      }
    };

    runSequence();

    return () => {
      isCancelled = true;
    };
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#030303] py-14 md:py-22 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/10"
    >
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
        {/* ── LEFT: TEXT CONTENT ── */}
        <div className="w-full lg:w-1/2">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] text-blue-500 tracking-[0.2em] uppercase mb-4 flex items-center gap-2"
          >
            <ListChecks size={12} />
            Set Up Once
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium tracking-tighter text-[#FAFAFA] leading-[1.1] mb-6"
          >
            Activate Bethy <br className="hidden md:block" />
            in an afternoon.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#888888] text-base leading-relaxed max-w-md font-light mb-10"
          >
            No new hardware, no app for tenants to install. Pick a plan, name
            your agent, forward your existing number, and Bethy is answering
            calls the same day.
          </motion.p>

          <Link
            href="https://calendly.com/dom9ovo/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-fit"
            >
              <Button className="flex mt-16 md:mt-24 items-left mx-0">
                Book A Demo
              </Button>
            </motion.div>
          </Link>
        </div>

        {/* ── RIGHT: ACTIVATION CHECKLIST ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-full lg:w-1/2 relative group"
        >
          <div className="relative bg-[#0A0A0A] border border-white/10 rounded-none overflow-hidden h-[420px] flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#050505] shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <span className="text-[10px] font-mono text-[#888888] uppercase tracking-widest">
                Activate Bethy
              </span>
              <div className="w-4" />
            </div>

            <div className="relative p-6 md:p-8 grow flex flex-col justify-center gap-6">
              {steps.map((step, i) => {
                const isDone = i < activeStep;
                const isCurrent = i === activeStep;
                return (
                  <div key={step.title} className="flex items-start gap-4">
                    <div
                      className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center mt-0.5 transition-colors duration-300 ${
                        isDone || isCurrent
                          ? "bg-blue-500 border-blue-500"
                          : "border-white/20"
                      }`}
                    >
                      {(isDone || isCurrent) && (
                        <Check size={14} className="text-white" />
                      )}
                    </div>
                    <div>
                      <p
                        className={`text-sm font-medium transition-colors duration-300 ${
                          isDone || isCurrent ? "text-white" : "text-white/40"
                        }`}
                      >
                        {step.title}
                      </p>
                      <p
                        className={`text-xs leading-relaxed mt-1 transition-colors duration-300 ${
                          isDone || isCurrent
                            ? "text-[#888888]"
                            : "text-white/20"
                        }`}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
