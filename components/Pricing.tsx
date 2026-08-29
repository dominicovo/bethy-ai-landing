"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import Button from "./Button";
import Link from "next/link";

export default function Pricing() {
  return (
    <>
      {/* =========================================
          SECTION 1: PRICING TIERS (DARK MODE)
      ========================================= */}
      <section className="relative w-full bg-[#030303] py-14 md:py-22 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-[10px] text-white tracking-[0.2em] uppercase mb-4 flex items-center gap-2"
            >
              <Zap size={12} className="text-white" />
              Pricing Plans
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-medium tracking-tighter text-white leading-[1.1] mb-6"
            >
              Simple plans. <br /> No per-call charges.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-neutral-400 text-sm md:text-base font-light leading-relaxed max-w-xl"
            >
              A managing agent takes 10–15% of your rent, every month, for
              every property. Bethy handles the calls, the repairs, and the
              admin for one flat fee — whatever the size of your portfolio.
            </motion.p>
          </div>

          {/* PRICING GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 shadow-2xl">
            {/* TIER 1: PRO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0A0A0A] p-10 md:p-12 flex flex-col justify-between group hover:bg-[#111111] transition-colors"
            >
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Pro</h3>
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-8">
                  For small portfolios
                </p>
                <div className="mb-8">
                  <span className="text-5xl font-medium text-white">£10</span>
                  <span className="text-sm text-neutral-400 font-light">
                    {" "}
                    / month
                  </span>
                </div>

                <ul className="flex flex-col gap-4 mb-12">
                  {[
                    "Up to 10 units",
                    "Up to 2 team members",
                    "AI Assistant (Bethy)",
                    "Maintenance automation",
                  ].map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-neutral-300 font-light"
                    >
                      <Check size={16} className="text-white shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full py-4 border border-white/20 text-xs font-semibold text-white uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                Start Free Trial
              </button>
            </motion.div>

            {/* TIER 2: BUSINESS (POPULAR) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#0A0A0A] p-10 md:p-12 flex flex-col justify-between group hover:bg-[#111111] transition-colors relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-1 text-[10px] font-mono uppercase tracking-widest font-semibold">
                Most Popular
              </div>

              <div>
                <h3 className="text-xl font-medium text-white mb-2">
                  Business
                </h3>
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-8">
                  For growing portfolios
                </p>
                <div className="mb-8">
                  <span className="text-5xl font-medium text-white">£25</span>
                  <span className="text-sm text-neutral-400 font-light">
                    {" "}
                    / month
                  </span>
                </div>

                <ul className="flex flex-col gap-4 mb-12">
                  {[
                    "Up to 100 units",
                    "Up to 5 team members",
                    "Everything in Pro",
                    "Priority support",
                  ].map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-neutral-300 font-light"
                    >
                      <Check size={16} className="text-white shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full">
                <Button className="w-full">Start Free Trial</Button>
              </div>
            </motion.div>

            {/* TIER 3: ENTERPRISE (WHITE INVERTED) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 md:p-12 flex flex-col justify-between group hover:bg-neutral-50 transition-colors"
            >
              <div>
                <h3 className="text-xl font-medium text-black mb-2">
                  Enterprise
                </h3>
                <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-8">
                  For large, multi-team operations
                </p>
                <div className="mb-8">
                  <span className="text-5xl font-medium text-black">
                    Custom
                  </span>
                </div>

                <ul className="flex flex-col gap-4 mb-12">
                  {[
                    "Unlimited units",
                    "Unlimited team members",
                    "Dedicated account manager",
                    "Custom contract & SLA",
                  ].map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-neutral-600 font-light"
                    >
                      <Check size={16} className="text-black shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="https://calendly.com/dom9ovo/enterprise-sales"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 border border-black/20 text-xs font-semibold text-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors text-center"
              >
                Contact Sales
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </>
  );
}
