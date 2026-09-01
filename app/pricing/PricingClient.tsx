"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, CreditCard, Plus, Minus } from "lucide-react";
import Button from "@/components/Button";
import Link from "next/link";

// --- HELPER: FAQ ACCORDION ---
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <h4 className="text-lg md:text-xl font-light text-white group-hover:text-neutral-300 transition-colors pr-8">
          {question}
        </h4>
        <div className="shrink-0 text-neutral-500 group-hover:text-white transition-colors">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm md:text-base text-neutral-400 font-light leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PricingPage() {
  // --- DATA: FAQ ---
  const faqs = [
    {
      q: "How is Bethy different from a call answering service?",
      a: "A human answering service just takes a message and passes it on. Bethy actually knows your property and tenancy details, answers tenant questions directly, and can log a maintenance report or book a viewing on the spot — then hands off anything it doesn't know to you.",
    },
    {
      q: "Can Bethy book a tradesperson without me knowing?",
      a: "No. Bethy sources a tradesperson from a vetted trades network and proposes a fee and schedule, but it always waits for you to approve or decline before anything is booked. Nothing gets confirmed on your behalf without your sign-off.",
    },
    {
      q: "Do my tenants need to call a new number?",
      a: "No. You keep your existing business number — you simply forward it to a dedicated Bethy number. Tenants call the number they already have; there's nothing new to remember and nothing for them to install.",
    },
    {
      q: "Which markets does Bethy work in?",
      a: "Bethy is live for landlords and letting agents today, with more markets on the way as we expand. Pricing is shown in GBP, and Bethy integrates with compliance and accounting tools like EPC ratings, GoCardless, and Xero.",
    },
    {
      q: "What happens to my data?",
      a: "Your workspace is isolated from every other landlord or agency on Bethy — there's no cross-visibility. Calls, messages, and tenant records are encrypted in transit and at rest, and Bethy never touches your money: rent runs through GoCardless Direct Debit and accounting through Xero.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#030303]">
      {/* --- SECTION: GLOBAL HEADER --- */}
      <section className="relative w-full pt-32 md:pt-40 pb-24 md:pb-32 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center overflow-hidden bg-[#030303]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1651964723487-722c8acc07d6?q=80&w=1600&auto=format&fit=crop')",
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
            <CreditCard size={12} /> Transparent Pricing
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-medium tracking-tighter text-white leading-[1.1] mb-8 max-w-4xl"
          >
            Simple, flat pricing. <br className="hidden md:block" />
            No surprises.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-lg font-light leading-relaxed max-w-2xl"
          >
            Every plan includes Bethy's AI phone receptionist and maintenance
            automation. No usage metering, no hidden fees — just one flat
            monthly price and a 14-day free trial, no credit card required.
          </motion.p>
        </div>
      </section>

      {/* --- SECTION: PRICING TIERS --- */}
      <section className="relative w-full bg-[#030303] py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-20">
          <div className="text-left max-w-3xl flex flex-col items-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium tracking-tighter text-white leading-[1.1] mb-4"
            >
              One flat price. <br /> Not per-unit metering.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm text-neutral-500 font-light max-w-lg"
            >
              Choose the tier that matches your portfolio size. Upgrade or
              downgrade any time as your portfolio grows.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 shadow-2xl">
            {/* --- TIER 1: DEVELOPER --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0A0A0A] p-10 md:p-12 flex flex-col justify-between group hover:bg-[#111111] transition-colors"
            >
              <div>
                <h3 className="text-xl font-medium text-white mb-2">
                  Pro
                </h3>
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

            {/* --- TIER 2: SCALE --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#0A0A0A] p-10 md:p-12 flex flex-col justify-between group hover:bg-[#111111] transition-colors relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-1 text-[10px] font-mono uppercase tracking-widest font-semibold shadow-xl">
                Most Popular
              </div>

              <div>
                <h3 className="text-xl font-medium text-white mb-2">Business</h3>
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

            {/* --- TIER 3: ENTERPRISE --- */}
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

      {/* --- SECTION: FAQ --- */}
      <section className="relative w-full bg-[#030303] py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          <div className="text-center flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium tracking-tighter text-white leading-[1.1] mb-6"
            >
              Frequently asked questions.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-neutral-500 text-sm font-light max-w-lg"
            >
              Everything you need to know about Bethy, pricing, and how it
              works.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col border-t border-white/10"
          >
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
