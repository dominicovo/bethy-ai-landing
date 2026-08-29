"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems = [
    { name: "Solutions", href: "/solutions" },
    { name: "Performance", href: "/performance" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <>
      {/* =========================================
          MAIN NAVBAR
      ========================================= */}
      <div className="fixed top-0 left-0 z-[100] w-full">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#05070A]/80 backdrop-blur-xl border-b border-[#FDFCF8]/10 shadow-[0_0_30px_rgba(0,242,255,0.03)]"
        >
          <div className="flex items-center justify-between px-5 md:px-8 lg:px-12 py-5 md:py-4">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Logo className="h-9 w-auto" />
            </Link>

            {/* ── DESKTOP OUTLINE (all pages, always visible) ── */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-[11px] font-mono uppercase tracking-[0.2em] transition-colors ${
                      isActive
                        ? "text-[#00F2FF]"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="https://calendly.com/dom9ovo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex px-5 py-2.5 bg-white text-[#05070A] text-[10px] font-mono font-bold uppercase tracking-[0.2em] hover:bg-[#00F2FF] transition-colors items-center justify-center"
              >
                Book A Demo
              </Link>

              {/* Mobile toggle only */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-[10px] font-mono uppercase tracking-[0.2em] text-[#FDFCF8] hover:text-white transition-colors"
              >
                [ {isOpen ? "CLOSE" : "MENU"} ]
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =========================================
          MOBILE FULL-SCREEN MENU
      ========================================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[150] bg-[#030303] md:hidden flex flex-col overflow-hidden"
          >
            {/* Header Mobile Menu */}
            <div className="flex items-center justify-between p-5 border-b border-white/10 bg-[#05070A]">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Logo className="h-9 w-auto" />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
              >
                [ CLOSE ]
              </button>
            </div>

            {/* List Menu Mobile */}
            <div className="flex-1 flex flex-col justify-center px-8 gap-6 overflow-y-auto pt-8 pb-24">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl sm:text-6xl font-semibold tracking-tighter text-white/70 hover:text-white transition-colors flex items-end gap-4"
                  >
                    {item.name}
                    <span className="text-xs sm:text-sm font-mono text-white/30 tracking-widest mb-2 sm:mb-3">
                      0{index + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + menuItems.length * 0.1,
                  duration: 0.5,
                }}
                className="mt-8"
              >
                <Link
                  href="https://calendly.com/dom9ovo/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center gap-4 px-8 py-5 bg-white text-black text-xs uppercase tracking-widest font-bold hover:bg-[#00F2FF] transition-colors rounded-none w-fit"
                >
                  Book A Demo
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
