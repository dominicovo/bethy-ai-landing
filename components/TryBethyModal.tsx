"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";

// --- CONTACT DETAILS (update with Bethy's live demo line; not shown on screen) ---
const DEMO_PHONE_E164 = "+440000000000";

interface TryBethyModalProps {
  open: boolean;
  onClose: () => void;
}

export default function TryBethyModal({ open, onClose }: TryBethyModalProps) {
  // --- DATA: CHANNELS ---
  const channels = [
    {
      name: "Call",
      href: `tel:${DEMO_PHONE_E164}`,
      primary: true,
    },
    {
      name: "Text",
      href: `sms:${DEMO_PHONE_E164}`,
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/${DEMO_PHONE_E164.replace("+", "")}`,
      external: true,
    },
  ];

  // --- DATA: SCENARIOS ---
  const scenarios = [
    "The boiler's stopped working and it's freezing in here",
    "Can I pay my rent a week late this month?",
    "There's a damp patch spreading on the bedroom ceiling",
  ];

  // Lock scroll + close on Escape while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-[#030303]/80 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="try-bethy-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl bg-[#FDFCF8] border border-white/10 shadow-2xl"
          >
            {/* --- CLOSE (outside the scroll area so it stays put on mobile) --- */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-11 h-11 flex items-center justify-center bg-[#FDFCF8] text-black border border-black hover:bg-black hover:text-white transition-colors"
            >
              <X size={18} />
            </button>

            <div
              data-lenis-prevent
              className="max-h-[calc(100vh-2rem)] overflow-y-auto grid grid-cols-1 md:grid-cols-2"
            >
              {/* --- LEFT: PITCH (DARK) --- */}
              <div className="bg-[#030303] text-[#FAFAFA] p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-[#888888] mb-4">
                    Live demo line
                  </p>
                  <h2
                    id="try-bethy-title"
                    className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter leading-[1.05] mb-6 pr-12 md:pr-0"
                  >
                    Be the tenant <br className="hidden md:block" />
                    for a minute.
                  </h2>
                  <p className="text-[#888888] text-base md:text-lg leading-relaxed font-light max-w-md">
                    The quickest way to understand Bethy is to hand her a
                    problem and see what she does with it. No sign-up, no sales
                    call — just pick up the phone.
                  </p>
                </div>
              </div>

              {/* --- RIGHT: CHANNELS (CREAM) --- */}
              <div className="p-8 md:p-12 lg:p-14 md:pt-24 flex flex-col justify-between text-black">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">
                    Talk to Bethy
                  </p>
                  <div className="flex flex-col gap-3">
                    {channels.map((c) => (
                      <a
                        key={c.name}
                        href={c.href}
                        target={c.external ? "_blank" : undefined}
                        rel={c.external ? "noopener noreferrer" : undefined}
                        className={`flex items-center justify-between gap-4 px-6 py-6 border border-black transition-colors ${
                          c.primary
                            ? "bg-black text-white hover:bg-neutral-800"
                            : "bg-white text-black hover:bg-black hover:text-white"
                        }`}
                      >
                        <span className="text-base md:text-lg font-medium">
                          {c.name}
                        </span>
                        <ArrowUpRight size={18} className="shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">
                    Try something like
                  </p>
                  <ul className="border-t border-black/10">
                    {scenarios.map((sc) => (
                      <li
                        key={sc}
                        className="py-4 border-b border-black/10 text-sm md:text-base font-light text-black"
                      >
                        &ldquo;{sc}&rdquo;
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
