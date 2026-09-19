"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mic, PhoneOff, Loader2 } from "lucide-react";
import Button from "./Button";
import { useVapiCall, vapiConfigured } from "./useVapiCall";

function formatDuration(s: number) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

// Visualiser bar shape (centre tallest), scaled by the assistant's output level
const bars = [0.35, 0.7, 1, 0.7, 0.35];

/**
 * Inline "Talk to Bethy" control for the hero. Starts an in-browser Vapi call
 * straight from the click — no modal — and turns into a compact call card
 * while the conversation is live.
 */
export default function TalkToBethy({
  className = "",
}: {
  className?: string;
}) {
  const { status, isSpeaking, volume, duration, start, end } = useVapiCall();

  const busy = status === "requesting-mic" || status === "connecting";

  const errorText =
    status === "mic-denied"
      ? "Microphone access was blocked — allow it in your browser settings and try again."
      : status === "error"
        ? vapiConfigured
          ? "Couldn't connect the call. Give it another go."
          : "Demo line isn't configured."
        : null;

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <AnimatePresence mode="wait" initial={false}>
        {status === "active" ? (
          <motion.div
            key="active"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-between gap-6 px-5 py-3 border border-white/30 bg-white/5 backdrop-blur-sm text-white"
          >
            <div className="flex items-center gap-4">
              {/* Visualiser */}
              <div
                className="flex items-end justify-center gap-1 h-6 w-8"
                aria-hidden
              >
                {bars.map((b, i) => (
                  <motion.span
                    key={i}
                    animate={{
                      height: `${20 + (isSpeaking ? volume : 0) * 80 * b}%`,
                    }}
                    transition={{ duration: 0.12 }}
                    className="w-1 bg-white"
                  />
                ))}
              </div>

              <div className="flex flex-col leading-tight">
                <span className="text-xs font-semibold uppercase tracking-widest">
                  {isSpeaking ? "Bethy is speaking" : "Listening…"}
                </span>
                <span className="font-mono text-[10px] text-white/50 mt-0.5">
                  {formatDuration(duration)}
                </span>
              </div>
            </div>

            <button
              onClick={end}
              aria-label="End call"
              className="shrink-0 flex items-center gap-2 px-4 py-2 border border-white/30 text-[10px] font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              <PhoneOff size={12} /> End
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <Button
              onClick={start}
              disabled={busy}
              className="w-full px-8 py-4 rounded-none text-xs font-semibold uppercase tracking-widest hover:bg-[#CCCCCC] transition-colors hover:scale-[1.02] duration-300 gap-3 disabled:opacity-70 disabled:cursor-wait disabled:hover:scale-100"
            >
              {busy ? (
                <Loader2 size={14} className="animate-spin" />
              ) : (
                <Mic size={14} />
              )}
              {status === "requesting-mic"
                ? "Waiting for microphone…"
                : status === "connecting"
                  ? "Connecting…"
                  : status === "ended"
                    ? "Talk again"
                    : "Talk to Bethy"}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {errorText && (
        <p className="text-xs text-[#888888] font-light max-w-xs">
          {errorText}
        </p>
      )}
    </div>
  );
}
