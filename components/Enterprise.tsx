"use client";

import { motion } from "framer-motion";
import {
  Component,
  ArrowRight,
  ShieldCheck,
  Fingerprint,
  Lock,
  ServerCrash,
} from "lucide-react";
import Button from "./Button";
import Link from "next/link";

export default function Enterprise() {
  // --- DATA FOR ECOSYSTEM ---
  const frameworks = [
    { name: "Xero", desc: "Sync invoices & payments" },
    { name: "GoCardless", desc: "Direct Debit rent collection" },
    { name: "EPC Register", desc: "Compliance certificates" },
    { name: "OpenRent", desc: "Import listings & applicants" },
    { name: "Rightmove", desc: "Sync your rental listings" },
    { name: "SpareRoom", desc: "Paste your listing URL to import" },
  ];

  // --- DATA FOR SECURITY ---
  const pillars = [
    {
      icon: <Fingerprint size={24} className="text-black" />,
      title: "Your Data, Your Workspace",
      desc: "Bethy answers using only the portfolio data you've given it — it never invents a tenant, property, or figure, and your workspace is never visible to any other landlord or agency on Bethy.",
    },
    {
      icon: <Lock size={24} className="text-black" />,
      title: "Encrypted In Transit And At Rest",
      desc: "Calls, messages, and tenant records are encrypted end-to-end. Payment details never touch Bethy — GoCardless and Xero handle money directly.",
    },
    {
      icon: <ServerCrash size={24} className="text-black" />,
      title: "Every Workspace Isolated",
      desc: "Each agency or landlord's data lives in its own workspace, hardware-isolated from every other account on Bethy — no shared visibility, ever.",
    },
  ];

  return (
    <>
      {/* =========================================
          SECTION 1: UNIVERSAL ECOSYSTEM
      ========================================= */}
      <section className="relative w-full bg-white py-14 md:py-22 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-black/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          {/* LEFT: TEXT & CTA */}
          <div className="lg:col-span-5 pr-0 lg:pr-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-[10px] text-black tracking-[0.2em] uppercase mb-4 block flex items-center gap-2"
            >
              <Component size={12} />
              Connected To Your Stack
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-medium tracking-tighter text-black leading-[1.1] mb-6"
            >
              Plug into the tools <br /> you already use.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-neutral-500 font-light leading-relaxed mb-10"
            >
              Don't rip out your accounting or rent collection. Bethy connects
              directly to Xero, GoCardless, and the tools landlords and
              letting agents already run their business on.
            </motion.p>

            {/* TEMP: pricing page disabled — was href="/pricing" */}
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
                <Button variant="black">Start Free Trial</Button>
              </motion.div>
            </Link>
          </div>

          {/* RIGHT: FRAMEWORK GRID */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/10 border border-black/10 shadow-xl">
              {frameworks.map((fw, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="bg-white p-8 group hover:bg-neutral-50 transition-colors flex flex-col justify-between min-h-[140px] cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-medium text-black">
                      {fw.name}
                    </h4>
                    <ArrowRight
                      size={16}
                      className="text-black/0 -translate-x-2 group-hover:text-black group-hover:translate-x-0 transition-all duration-300"
                    />
                  </div>
                  <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                    {fw.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: ENTERPRISE SECURITY
      ========================================= */}
      <section className="relative w-full bg-white py-14 md:py-22 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-2 md:gap-4">
          {/* HEADER */}
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-[10px] text-black tracking-[0.2em] uppercase mb-4 block flex items-center gap-2"
            >
              <ShieldCheck size={12} />
              Built On Trust
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-medium tracking-tighter text-black leading-[1.1] mb-6"
            >
              Your data stays yours. <br className="hidden md:block" />
              Your money stays with you.
            </motion.h2>
          </div>

          {/* 3 PILLARS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10 shadow-xl">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="bg-white p-10 md:p-14 group hover:bg-neutral-50 transition-colors flex flex-col justify-between min-h-[320px]"
              >
                <div className="mb-12 opacity-50 group-hover:opacity-100 transition-opacity">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-black mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-neutral-500 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* COMPLIANCE BADGES (BOTTOM BAR) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-8 md:gap-16 pt-8 "
          >
            {[
              "GDPR Aligned",
              "Workspace Data Isolation",
              "Encrypted Calls & Messages",
              "Payments Via GoCardless & Xero",
            ].map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-3 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all cursor-default"
              >
                <ShieldCheck size={16} className="text-black" />
                <span className="text-xs font-mono uppercase tracking-widest text-black font-semibold">
                  {badge}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
