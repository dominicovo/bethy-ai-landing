"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircleQuestion, Plus, Minus } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does Bethy compare to a normal answering service?",
      a: "A human answering service takes a message. Bethy actually understands your portfolio — it knows which property a tenant is calling about, can triage a maintenance issue by category and urgency, and hands off a clear summary instead of a sticky note.",
    },
    {
      q: "Can Bethy book a tradesperson without me finding out?",
      a: "No — Bethy always asks first. It sources a tradesperson, proposes a fee and schedule, and waits for you to approve or decline before anything is booked.",
    },
    {
      q: "Do I need to give tenants a new number to call?",
      a: "No. Forward your existing business number to your Bethy number — missed calls only, or everything — and Bethy picks up under your name.",
    },
    {
      q: "Is Bethy only for the UK?",
      a: "Yes, today. Bethy is built around UK lettings — GBP pricing, UK phone numbers, and integrations with Xero, GoCardless, the EPC Register, and OpenRent.",
    },
    {
      q: "What happens to my data?",
      a: "Bethy only answers using the portfolio data you've given it — it never invents a tenant, property, or figure that isn't there, and each workspace's data is kept separate from every other landlord or agency on the platform.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#050505] py-14 md:py-22 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">
        {/* HEADER */}
        <div className="text-center flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] text-white tracking-[0.2em] uppercase mb-4 flex items-center gap-2"
          >
            <MessageCircleQuestion size={12} className="text-white" />
            Common Questions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-medium tracking-tighter text-white leading-[1.1]"
          >
            Clear answers. <br /> No corporate jargon.
          </motion.h2>
        </div>

        {/* FAQ ACCORDION LIST */}
        <div className="flex flex-col border-t border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-6 md:py-8 text-left group"
                >
                  <h3
                    className={`text-lg md:text-xl font-light pr-8 transition-colors ${isOpen ? "text-white" : "text-white/70 group-hover:text-white"}`}
                  >
                    {faq.q}
                  </h3>
                  <div className="shrink-0 ml-4 relative flex items-center justify-center w-6 h-6">
                    <motion.div
                      animate={{
                        rotate: isOpen ? 180 : 0,
                        opacity: isOpen ? 0 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute"
                    >
                      <Plus
                        size={20}
                        className="text-white/50 group-hover:text-white"
                      />
                    </motion.div>
                    <motion.div
                      animate={{
                        rotate: isOpen ? 0 : -180,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute"
                    >
                      <Minus size={20} className="text-white" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} // Ease-out halus
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-sm md:text-base text-neutral-400 font-light leading-relaxed max-w-3xl">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
