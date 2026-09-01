"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  PhoneCall,
  ClipboardCheck,
  ReceiptText,
  MessagesSquare,
  CalendarCheck,
  Zap,
  Home,
  Users,
  Building2,
} from "lucide-react";

// --- DATA: WORKFLOW ---
const steps = [
  {
    num: "01.",
    title: "Forward Your Number",
    desc: "Pick a plan and forward your existing business line to a dedicated Bethy number. The four-step Activate flow — Plan, Agent, Forward, Test — takes minutes, with no new hardware and nothing for tenants to install.",
    icon: PhoneCall,
    glow: "bg-blue-600/20",
    color: "text-blue-500",
  },
  {
    num: "02.",
    title: "Answer & Triage",
    desc: "Bethy answers every call as your AI property manager, working only from the property and tenant data you've entered. Maintenance reports are triaged in seconds — category, priority, a safety note, and a realistic cost estimate.",
    icon: ClipboardCheck,
    glow: "bg-purple-600/20",
    color: "text-purple-500",
  },
  {
    num: "03.",
    title: "Approve & Book",
    desc: "Bethy sources a vetted tradesperson and proposes a fee and schedule — but nothing gets booked until you approve it. You stay in control of every pound spent on your portfolio.",
    icon: ReceiptText,
    glow: "bg-emerald-600/20",
    color: "text-emerald-500",
  },
  {
    num: "04.",
    title: "Confirm the Fix",
    desc: "Once the job's done, Bethy follows up with the tenant directly to confirm the repair actually worked before the ticket is marked complete.",
    icon: MessagesSquare,
    glow: "bg-amber-600/20",
    color: "text-amber-500",
  },
  {
    num: "05.",
    title: "One Timeline, Every Record",
    desc: "Every call, message, and repair update lands against the right property and tenant automatically, so nothing gets lost between you, your team, and your tenants.",
    icon: CalendarCheck,
    glow: "bg-cyan-600/20",
    color: "text-cyan-500",
  },
];

// --- DATA: USE CASES ---
const useCases = [
  {
    id: "landlords",
    title: "Independent Landlords",
    icon: Home,
    heading: "Stop being your own call centre.",
    desc: "You've got a handful of properties and better things to do than field tenant calls at dinner. Bethy answers every call, triages the maintenance report, and only pings you when a fee needs approving.",
    visualCode: `Caller: "The boiler's making a banging noise"\n\nBethy → Category: Plumbing\nBethy → Priority: High\nBethy → Note: Possible pressure fault, advise tenant to avoid use\nBethy → Est. cost: £85–£150\n\nStatus: Awaiting your approval`,
    color: "blue",
    glow: "bg-blue-500",
    iconColor: "text-blue-400",
  },
  {
    id: "agents",
    title: "Letting Agents",
    icon: Users,
    heading: "Fewer missed calls, per landlord client.",
    desc: "Managing tenancies for multiple landlord clients means the phone never stops. Bethy answers on every line, keeps each property's data separate, and gives you one clear view across all your clients — without adding headcount.",
    visualCode: `Caller: "Is the flat on Elm Street still available for viewing?"\n\nBethy → Property: 14 Elm Street\nBethy → Action: Viewing slot booked, added to calendar\nBethy → Transcript: saved to property timeline\n\nStatus: No agent time spent`,
    color: "purple",
    glow: "bg-purple-500",
    iconColor: "text-purple-400",
  },
  {
    id: "pm",
    title: "Property Management Companies",
    icon: Building2,
    heading: "One approval workflow, whole portfolio.",
    desc: "Multi-team operations need a consistent, auditable way to control maintenance spend. Every fee Bethy proposes waits for sign-off, every decision is logged, and nothing gets booked without your say-so.",
    visualCode: `Caller: "Fire alarm's beeping in Unit 4B"\n\nBethy → Category: Electrical\nBethy → Priority: Emergency\nBethy → Tradesperson sourced: vetted trades network\nBethy → Fee proposed: £120, pending approval\n\nStatus: AWAITING_APPROVAL → logged to pipeline`,
    color: "emerald",
    glow: "bg-emerald-500",
    iconColor: "text-emerald-400",
  },
];

export default function EnginePage() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="w-full min-h-screen bg-[#030303]">
      {/* --- SECTION: GLOBAL HEADER --- */}
      <section className="relative w-full pt-32 md:pt-40 pb-24 md:pb-32 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center overflow-hidden bg-[#030303]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=2000&auto=format&fit=crop')",
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
            <Zap size={12} /> How Bethy Works
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-medium tracking-tighter text-white leading-[1.1] mb-8 max-w-4xl"
          >
            From ringing phone <br className="hidden md:block" />
            to booked repair.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-300 text-lg font-light leading-relaxed max-w-2xl"
          >
            See how Bethy answers calls, triages repairs, and keeps everyone
            updated in five seamless steps — without you picking up the
            phone.
          </motion.p>
        </div>
      </section>

      {/* --- SECTION: WORKFLOW --- */}
      <section
        ref={containerRef}
        className="relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-20 md:mb-32">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-medium tracking-tighter text-[#FAFAFA] leading-[1.1] mb-6"
            >
              How Bethy operates. <br className="hidden md:block" />
              <span className="text-[#888888]">Every call handled, automatically.</span>
            </motion.h2>
          </div>

          <div className="relative w-full max-w-5xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-6 md:left-1/2 top-0 w-[2px] md:-translate-x-1/2 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,1)] origin-top z-10"
            />

            <div className="flex flex-col gap-16 md:gap-32 relative z-20">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                const Icon = step.icon;

                return (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row items-center w-full"
                  >
                    {/* --- LEFT ALIGNMENT --- */}
                    <div
                      className={`w-full md:w-1/2 pl-16 md:pl-0 md:pr-16 flex ${
                        isEven
                          ? "justify-start md:justify-end text-left md:text-right order-2 md:order-1 mt-8 md:mt-0"
                          : "justify-start md:justify-end items-center order-1 relative"
                      }`}
                    >
                      {isEven ? (
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          className="max-w-sm"
                        >
                          <span
                            className={`text-2xl md:text-3xl font-mono font-medium mb-4 block ${step.color}`}
                          >
                            {step.num}
                          </span>
                          <h3 className="text-xl md:text-2xl font-medium text-[#FAFAFA] mb-4">
                            {step.title}
                          </h3>
                          <p className="text-[#888888] font-light text-sm md:text-base leading-relaxed">
                            {step.desc}
                          </p>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "-100px" }}
                          className="relative group"
                        >
                          <div
                            className={`absolute inset-0 ${step.glow} blur-[50px] rounded-full`}
                          />
                          <Icon
                            size={100}
                            strokeWidth={1}
                            className="text-[#FAFAFA] relative z-10 opacity-80 group-hover:opacity-100 transition-opacity"
                          />
                        </motion.div>
                      )}
                    </div>

                    {/* --- RIGHT ALIGNMENT --- */}
                    <div
                      className={`w-full md:w-1/2 pl-16 md:pl-16 flex ${
                        isEven
                          ? "justify-start items-center order-1 md:order-2 relative"
                          : "justify-start text-left order-2 mt-8 md:mt-0"
                      }`}
                    >
                      {isEven ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "-100px" }}
                          className="relative group"
                        >
                          <div
                            className={`absolute inset-0 ${step.glow} blur-[50px] rounded-full`}
                          />
                          <Icon
                            size={100}
                            strokeWidth={1}
                            className="text-[#FAFAFA] relative z-10 opacity-80 group-hover:opacity-100 transition-opacity"
                          />
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          className="max-w-sm"
                        >
                          <span
                            className={`text-2xl md:text-3xl font-mono font-medium mb-4 block ${step.color}`}
                          >
                            {step.num}
                          </span>
                          <h3 className="text-xl md:text-2xl font-medium text-[#FAFAFA] mb-4">
                            {step.title}
                          </h3>
                          <p className="text-[#888888] font-light text-sm md:text-base leading-relaxed">
                            {step.desc}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION: USE CASES --- */}
      <section className="relative w-full bg-[#030303] py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col gap-24 md:gap-32">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
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
              className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-[#FAFAFA] mb-6 leading-[1.1]"
            >
              Built for how you <br className="hidden md:block" />
              manage property.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#888888] font-light leading-relaxed"
            >
              Whether you're self-managing a handful of properties, running a
              letting agency across multiple landlord clients, or overseeing
              maintenance spend for a whole management company, Bethy fits how
              you already work. Here's how it looks in practice.
            </motion.p>
          </div>

          <div className="flex flex-col gap-24 md:gap-40">
            {useCases.map((uc, index) => {
              const isEven = index % 2 === 0;
              const Icon = uc.icon;

              return (
                <div
                  key={uc.id}
                  className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full lg:w-1/2 flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`p-3 rounded-full bg-white/5 border border-white/10 ${uc.iconColor}`}
                      >
                        <Icon size={24} />
                      </div>
                      <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                        {uc.title}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-medium text-[#FAFAFA] tracking-tight mb-6 leading-[1.1]">
                      {uc.heading}
                    </h3>

                    <p className="text-base md:text-lg text-[#888888] font-light leading-relaxed">
                      {uc.desc}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full lg:w-1/2 relative"
                  >
                    <div
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 blur-[100px] pointer-events-none opacity-20 ${uc.glow}`}
                    />

                    <div className="relative bg-[#050505] border border-white/10 rounded-lg overflow-hidden shadow-2xl">
                      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                        <span className="ml-2 text-[10px] font-mono text-neutral-500">
                          bethy_call_log.ts
                        </span>
                      </div>

                      <div className="p-6 md:p-8 overflow-x-auto">
                        <pre className="font-mono text-xs md:text-sm text-[#FAFAFA]/80 leading-loose">
                          <code>{uc.visualCode}</code>
                        </pre>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
