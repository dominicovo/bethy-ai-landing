"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  variant?: "white" | "black";
}

export default function Button({
  children,
  className = "",
  variant = "white",
  ...props
}: ButtonProps) {
  const isWhite = variant === "white";

  // Logika warna solid & simple
  const colorStyles = isWhite
    ? "border-white/30 text-white hover:bg-white hover:text-black"
    : "border-black/30 text-black hover:bg-black hover:text-white";

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`relative flex items-center justify-center px-8 py-4 border text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-none ${colorStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
