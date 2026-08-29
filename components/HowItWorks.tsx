"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Stethoscope, CheckCircle2, Cpu, ArrowRight } from "lucide-react";
import Button from "./Button";
import Link from "next/link";

const steps = [
  {
    num: "01.",
    title: "Forward Your Number",
    desc: "Pick a plan and forward your existing business line to your new Bethy number. Takes minutes — no new hardware, and nothing for tenants to install.",
    icon: Phone,
  },
  {
    num: "02.",
    title: "Bethy Answers And Triages",
    desc: "Every call and maintenance report is understood in context — category, urgency, and a safety note — using the details you've given Bethy about each property.",
    icon: Stethoscope,
  },
  {
    num: "03.",
    title: "You Approve, Bethy Executes",
    desc: "Bethy sources a tradesperson, proposes a fee and schedule, and books the job the moment you tap approve — then follows up with the tenant to confirm it's done.",
    icon: CheckCircle2,
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const IconStep1 = steps[0].icon;
  const IconStep2 = steps[1].icon;
  const IconStep3 = steps[2].icon;

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#030303] py-14 md:py-22 px-6 md:px-12 lg:px-24 overflow-hidden "
    >
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="max-w-3xl mb-20 md:mb-32">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] text-blue-500 tracking-[0.2em] uppercase mb-4 flex items-center gap-2"
          >
            <Cpu size={12} />
            How Bethy Works
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium tracking-tighter text-[#FAFAFA] leading-[1.1] mb-6"
          >
            From a ringing phone <br className="hidden md:block" />
            <span className="text-[#888888]">to a finished repair.</span>
          </motion.h2>
        </div>

        {/* --- TIMELINE CONTAINER --- */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2" />

          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 md:left-1/2 top-0 w-[2px] md:-translate-x-1/2 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,1)] origin-top z-10"
          />

          <div className="flex flex-col gap-16 md:gap-32 relative z-20">
            {/* STEP 1 */}
            <div className="flex flex-col md:flex-row items-center w-full">
              <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-16 text-left md:text-right flex justify-start md:justify-end order-2 md:order-1 mt-8 md:mt-0">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="max-w-sm"
                >
                  <span className="text-2xl md:text-3xl font-mono font-medium text-blue-500 mb-4 block">
                    {steps[0].num}
                  </span>
                  <h3 className="text-xl md:text-2xl font-medium text-[#FAFAFA] mb-4">
                    {steps[0].title}
                  </h3>
                  <p className="text-[#888888] font-light text-sm md:text-base leading-relaxed">
                    {steps[0].desc}
                  </p>
                </motion.div>
              </div>
              <div className="w-full md:w-1/2 pl-16 md:pl-16 flex justify-start items-center order-1 md:order-2 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-blue-600/20 blur-[50px] rounded-full" />
                  <IconStep1
                    size={100}
                    strokeWidth={1}
                    className="text-[#FAFAFA] relative z-10 opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="flex flex-col md:flex-row items-center w-full">
              <div className="w-full md:w-1/2 pl-16 md:pr-16 flex justify-start md:justify-end items-center order-1 md:order-1 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-purple-600/20 blur-[50px] rounded-full" />
                  <IconStep2
                    size={100}
                    strokeWidth={1}
                    className="text-[#FAFAFA] relative z-10 opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              </div>
              <div className="w-full md:w-1/2 pl-16 md:pl-16 text-left flex justify-start order-2 md:order-2 mt-8 md:mt-0">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="max-w-sm"
                >
                  <span className="text-2xl md:text-3xl font-mono font-medium text-purple-500 mb-4 block">
                    {steps[1].num}
                  </span>
                  <h3 className="text-xl md:text-2xl font-medium text-[#FAFAFA] mb-4">
                    {steps[1].title}
                  </h3>
                  <p className="text-[#888888] font-light text-sm md:text-base leading-relaxed">
                    {steps[1].desc}
                  </p>
                </motion.div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="flex flex-col md:flex-row items-center w-full">
              <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-16 text-left md:text-right flex justify-start md:justify-end order-2 md:order-1 mt-8 md:mt-0">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="max-w-sm"
                >
                  <span className="text-2xl md:text-3xl font-mono font-medium text-emerald-500 mb-4 block">
                    {steps[2].num}
                  </span>
                  <h3 className="text-xl md:text-2xl font-medium text-[#FAFAFA] mb-4">
                    {steps[2].title}
                  </h3>
                  <p className="text-[#888888] font-light text-sm md:text-base leading-relaxed">
                    {steps[2].desc}
                  </p>
                </motion.div>
              </div>
              <div className="w-full md:w-1/2 pl-16 md:pl-16 flex justify-start items-center order-1 md:order-2 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-emerald-600/20 blur-[50px] rounded-full" />
                  <IconStep3
                    size={100}
                    strokeWidth={1}
                    className="text-[#FAFAFA] relative z-10 opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        {/* --- CTA BUTTON MORE WORKFLOW --- */}
        <Link href="solutions">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Button className="flex mt-16 md:mt-24 items-center mx-auto ">
              See It In The Dashboard
            </Button>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
