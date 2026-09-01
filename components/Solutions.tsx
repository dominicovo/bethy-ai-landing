"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Users, Building2, Zap } from "lucide-react";

const useCases = [
  {
    id: "landlords",
    title: "Independent Landlords",
    icon: Home,
    heading: "Run your rentals without a second job.",
    desc: "A handful of properties, one AI that answers the phone and chases repairs so you don't have to leave work to deal with a leak.",
    visualCode: `// ── INCOMING CALL — 14 OAK STREET ──\nCaller: "The boiler's making a banging noise"\n\nBethy.triage({\n  category: 'Plumbing',\n  priority: 'High'\n});\n\nconsole.log(status); // "Scouting tradespeople..."`,
    color: "blue",
  },
  {
    id: "agents",
    title: "Letting Agents",
    icon: Users,
    heading: "Give every client a property manager that never sleeps.",
    desc: "Managing tenancies for multiple landlord clients means fewer missed calls and clearer visibility for each one — without adding headcount.",
    visualCode: `// ── CLIENT PORTFOLIO SUMMARY ──\nconst update = await Bethy.summarize({\n  scope: 'this-week',\n  include: ['approvals', 'at-risk-tenants', 'vacancies']\n});\n\nconsole.log(update.readyFor); // "Client call"`,
    color: "purple",
  },
  {
    id: "companies",
    title: "Property Management Companies",
    icon: Building2,
    heading: "Standardise how your whole portfolio handles repairs.",
    desc: "Multi-team operations use Bethy's approval workflow to keep every maintenance job consistent, auditable, and within budget across the portfolio.",
    visualCode: `// ── APPROVAL WORKFLOW ──\nMaintenance.setStage({\n  ticket: '#4821',\n  stage: 'AWAITING_APPROVAL',\n  estimatedFee: 'GBP',\n  requiresManagerApproval: true\n});`,
    color: "emerald",
  },
];

export default function UseCases() {
  const [activeTab, setActiveTab] = useState(useCases[0].id);
  const activeData = useCases.find((uc) => uc.id === activeTab);

  return (
    <section className="relative w-full bg-[#030303] py-14 md:py-22 px-6 md:px-12 lg:px-24 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 mb-16 md:mb-24">
        {/* --- LEFT: TABS NAV --- */}
        <div className="w-full lg:w-1/3 flex flex-col">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] text-blue-500 tracking-[0.2em] uppercase mb-4 flex items-center gap-2"
          >
            <Zap size={12} />
            Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-medium tracking-tighter text-[#FAFAFA] mb-12 leading-[1.1]"
          >
            Built for how <br />
            lettings actually works.
          </motion.h2>

          <div className="flex flex-col gap-2">
            {useCases.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group flex items-center gap-4 p-4 text-left border-l-[3px] transition-all duration-300 ${
                    isActive
                      ? "border-blue-500 bg-white/5"
                      : "border-transparent hover:bg-white/[0.02]"
                  }`}
                >
                  <tab.icon
                    size={20}
                    className={`transition-colors duration-300 ${isActive ? "text-blue-400" : "text-[#888888] group-hover:text-[#FAFAFA]"}`}
                  />
                  <span
                    className={`font-medium text-sm transition-colors duration-300 ${isActive ? "text-[#FAFAFA]" : "text-[#888888] group-hover:text-[#FAFAFA]"}`}
                  >
                    {tab.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* --- RIGHT: INTERACTIVE CONTENT --- */}
        <div className="w-full lg:w-2/3 relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeData && (
              <motion.div
                key={activeData.id}
                // HAPUS EFEK BLUR, BIKIN SLIDE LEBIH TIPIS & SNAPPY
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col h-full bg-[#050505] border border-white/10"
              >
                {/* Glow Overlay matching the active tab color vibe */}
                <div
                  className={`absolute top-0 right-0 w-64 h-64 blur-[80px] pointer-events-none opacity-20 ${
                    activeData.color === "blue"
                      ? "bg-blue-500"
                      : activeData.color === "purple"
                        ? "bg-purple-500"
                        : "bg-emerald-500"
                  }`}
                />

                {/* Text Content */}
                <div className="p-8 md:p-12 pb-8 relative z-10">
                  <h3 className="text-2xl md:text-3xl font-medium text-[#FAFAFA] tracking-tight mb-4">
                    {activeData.heading}
                  </h3>
                  <p className="text-sm md:text-base text-[#888888] font-light max-w-lg leading-relaxed">
                    {activeData.desc}
                  </p>
                </div>

                {/* Code Block Snippet */}
                <div className="mt-auto p-8 pt-0 relative z-10">
                  <div className="bg-[#0A0A0A] border border-white/5 rounded-sm p-6 overflow-x-auto">
                    <pre className="font-mono text-xs md:text-sm text-[#FAFAFA]/70 leading-loose">
                      <code>{activeData.visualCode}</code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
