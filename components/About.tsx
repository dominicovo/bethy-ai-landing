"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";
import Button from "./Button";
import Link from "next/link";

export default function About() {
  // ── DATA METRIC ──
  const caseStudies = [
    {
      client: "Independent Landlord",
      metric: "0",
      title: "Missed calls while you're at your day job",
      desc: "Forward your number once. Bethy picks up every call your tenants make, any time, and gives you the details when you're free.",
    },
    {
      client: "Letting Agency",
      metric: "1",
      title: "Dashboard for every property, tenant, and repair",
      desc: "Properties, tenants, rent, viewings, and maintenance — all in one place, with Ask Bethy on hand to tell you what needs attention.",
    },
    {
      client: "Property Management Co.",
      metric: "£",
      title: "No surprise repair bills",
      desc: "You approve the fee before Bethy books any tradesperson — every time, across every property in the portfolio.",
    },
  ];

  return (
    <section className="relative w-full bg-white py-14 md:py-22 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {/* ── ABOUT US ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-mono text-[10px] text-black tracking-[0.2em] uppercase mb-4 block flex items-center gap-2"
              >
                <Quote size={12} />
                The Manifesto
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-2xl font-medium tracking-tight text-black"
              >
                Property management shouldn&apos;t feel like a second job.
              </motion.h3>
            </div>

            <Link href="/about">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="hidden lg:flex w-full justify-start mt-4 md:mt-1"
              >
                <Button variant="black">Read Our Story</Button>
              </motion.div>
            </Link>
          </div>

          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-light text-neutral-400 leading-[1.2] tracking-tight"
            >
              <span className="text-black font-medium">
                We believe landlords shouldn&apos;t lose evenings to ringing
                phones.
              </span>{" "}
              Bethy was built to sit between the tenant's call and your inbox
              — doing the first 90% of the work, and asking you to approve
              the part that actually costs money.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="block lg:hidden mt-12 w-fit"
            >
              <Button variant="black">Read Our Story</Button>
            </motion.div>
          </div>
        </div>

        {/* ── Middle Section, Metrics ── */}
        <div className="pt-24 border-t border-black/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10">
            {caseStudies.map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="bg-white p-8 md:p-10 group hover:bg-neutral-50 transition-colors flex flex-col justify-between min-h-[320px] relative overflow-hidden"
              >
                <div className="absolute top-8 right-8 opacity-0 -translate-y-4 translate-x-4 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowUpRight size={24} className="text-black" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-8">
                    {study.client}
                  </span>
                  <div className="text-5xl md:text-6xl font-medium text-black tracking-tighter mb-4">
                    {study.metric}
                  </div>
                  <h4 className="text-lg font-medium text-black mb-4 pr-8">
                    {study.title}
                  </h4>
                </div>
                <p className="text-sm text-neutral-500 font-light leading-relaxed">
                  {study.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
