"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Activity, Network, ArrowRight, Building2 } from "lucide-react";
import Link from "next/link";

const AnimatedCounter = ({
  end = 100,
  suffix = "",
  prefix = "",
  duration = 2000,
  decimals = 0,
}: {
  end?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let animationFrame: number;

    const updateCounter = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(easeProgress * end);
      if (progress < 1) animationFrame = requestAnimationFrame(updateCounter);
    };

    animationFrame = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums tracking-tighter">
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default function PerformancePage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* ======== HERO ======== */}
      <section className="relative w-full pt-38 pb-24 md:pb-32 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center overflow-hidden bg-[#030303]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1618660920685-4505debb785a?q=80&w=2000&auto=format&fit=crop')",
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
            <Activity size={12} /> How Bethy Performs
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-medium tracking-tighter text-white leading-[1.1] mb-8 max-w-4xl"
          >
            Bethy answers. <br className="hidden md:block" />
            You approve.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-300 text-lg font-light leading-relaxed max-w-2xl"
          >
            A look at how Bethy actually performs for landlords and letting
            agents — from the moment a tenant calls to the moment a repair is
            marked complete, with you approving the spend every step of the
            way.
          </motion.p>
        </div>
      </section>

      {/* ======== SECTION 2: GLOBAL PRESENCE ======== */}
      <section className="relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-neutral-50">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-[10px] text-blue-600 tracking-[0.2em] uppercase mb-4 flex items-center gap-2"
            >
              <Network size={12} /> Every Property, One View
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-medium tracking-tighter text-black leading-[1.1] mb-6"
            >
              One dashboard. <br className="hidden md:block" />
              Every property tracked.
            </motion.h2>
          </div>

          {/* Big Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white border border-black/10 shadow-2xl p-10 md:p-16 flex flex-col group overflow-hidden"
          >
            <div className="absolute right-0 top-0 w-full h-full opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-1000 pointer-events-none">
              <div
                className="absolute inset-0 bg-cover bg-center grayscale"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2948&auto=format&fit=crop')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="lg:w-1/3 flex flex-col justify-between">
                <div>
                  <Building2
                    size={32}
                    className="text-blue-500 mb-12 group-hover:rotate-12 transition-transform duration-700"
                  />
                  <div className="text-7xl md:text-8xl font-medium text-black mb-2 flex items-center">
                    <AnimatedCounter end={1} />
                    <span className="text-5xl md:text-6xl ml-2 text-black/30 font-light">
                      Dashboard
                    </span>
                  </div>
                  <p className="text-sm font-mono uppercase tracking-widest text-neutral-500 font-semibold">
                    For Every Property You Manage
                  </p>
                </div>
                <div className="mt-12 text-neutral-500 text-sm leading-relaxed font-light">
                  Properties, tenants, maintenance, calendar, and team all
                  live in one place. Whatever Bethy handles on a call or a
                  repair shows up here immediately — nothing to reconcile
                  across spreadsheets or group chats.
                </div>
              </div>

              <div className="lg:w-2/3 flex flex-col gap-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-black font-semibold border-b border-black/10 pb-3 flex items-center gap-2">
                  <Building2 size={14} /> Everything In One Workspace
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    { label: "Properties", tag: "Portfolio & EPC data" },
                    { label: "Tenants", tag: "Rent & risk tracking" },
                    { label: "Maintenance", tag: "5-stage repair pipeline" },
                    { label: "Calendar", tag: "Viewings & call transcripts" },
                    { label: "Team", tag: "Roles & workspace access" },
                  ].map((item) => (
                    <li
                      key={item.label}
                      className="flex justify-between items-center text-sm border-b border-black/5 pb-3"
                    >
                      <span className="text-black font-medium">
                        {item.label}
                      </span>
                      <span className="text-neutral-400 font-mono text-xs">
                        {item.tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative z-10 mt-16 pt-8 border-t border-black/5 flex justify-between items-center">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                Every Booking:{" "}
                <span className="text-emerald-500 font-semibold">
                  Approved By You First
                </span>
              </span>

              <Link
                href="/solutions"
                className="text-xs font-mono font-semibold uppercase tracking-widest text-black hover:text-blue-600 transition-colors flex items-center gap-2 group/link"
              >
                See How It Works{" "}
                <ArrowRight
                  size={14}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>

          {/* ===== 4 GRID BENTO ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10 shadow-xl mt-px">
            {/* 1. Call transcripts on the calendar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-white overflow-hidden group"
              style={{ minHeight: "320px" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1200&auto=format&fit=crop')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 z-10">
                <span className="font-mono text-[9px] text-white/60 tracking-[0.2em] uppercase mb-3 block">
                  On The Calendar
                </span>
                <h3 className="text-2xl font-medium text-white tracking-tight leading-tight mb-2">
                  Every call, logged
                  <br />
                  against the booking
                </h3>
                <p className="text-sm text-white/60 font-light leading-relaxed max-w-xs">
                  A viewing Bethy books from a phone call shows up on the
                  calendar with the full transcript attached — nothing to
                  re-type or remember.
                </p>
              </div>
            </motion.div>

            {/* 2. Approval mock */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 flex flex-col justify-between group hover:bg-neutral-50 transition-colors"
              style={{ minHeight: "320px" }}
            >
              <div>
                <h3 className="text-2xl font-medium text-black tracking-tight leading-tight mb-4">
                  You approve.
                  <br />
                  Bethy books.
                </h3>
                <p className="text-sm text-neutral-500 font-light leading-relaxed">
                  Bethy sources a tradesperson and proposes a fee before
                  anything is scheduled — one tap decides it.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-black/5">
                <div className="bg-neutral-950 p-4 font-mono text-xs text-white/70 leading-relaxed mb-3">
                  Boiler repair — 14 Oak Street
                  <br />
                  <span className="text-white/40">
                    Priya Anand · Estimated fee: £180
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="flex-1 text-center py-2 text-[10px] font-mono uppercase tracking-widest bg-black text-white">
                    Approve
                  </span>
                  <span className="flex-1 text-center py-2 text-[10px] font-mono uppercase tracking-widest border border-black/20 text-black/60">
                    Decline
                  </span>
                </div>
              </div>
            </motion.div>

            {/* 3. Tenant app */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative bg-white overflow-hidden group"
              style={{ minHeight: "320px" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
              <div className="absolute inset-0 p-8 z-10 flex flex-col justify-end">
                <h3 className="text-2xl font-medium text-white tracking-tight leading-tight mb-2">
                  The tenant app.
                  <br />
                  Nothing to install.
                </h3>
                <p className="text-sm text-white/50 font-light leading-relaxed">
                  Tenants report a repair, check rent invoice status, and
                  read announcements from an invite-only app — no separate
                  account to hunt down.
                </p>
              </div>
            </motion.div>

            {/* 4. Follow-up */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#030303] p-10 flex flex-col justify-between group hover:bg-[#0a0a0a] transition-colors"
              style={{ minHeight: "320px" }}
            >
              <div>
                <h3 className="text-2xl font-medium text-white tracking-tight leading-tight mb-4">
                  Bethy checks back
                  <br />
                  before closing the ticket.
                </h3>
                <p className="text-sm text-white/40 font-light leading-relaxed">
                  Once a tradesperson marks a job done, Bethy follows up with
                  the tenant to confirm it actually got fixed — the ticket
                  only closes once they say yes.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/30">
                    Reported → Scouting → Approval → In Progress → Completed
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
          {/* ===== END 4 GRID ===== */}
        </div>
      </section>
    </div>
  );
}
