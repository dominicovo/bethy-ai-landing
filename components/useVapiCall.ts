"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type Vapi from "@vapi-ai/web";

export type CallStatus =
  | "idle"
  | "requesting-mic"
  | "connecting"
  | "active"
  | "ended"
  | "mic-denied"
  | "error";

const PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;
const ASSISTANT_ID = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID;

export const vapiConfigured = Boolean(PUBLIC_KEY && ASSISTANT_ID);

/**
 * Drives an in-browser Vapi call. The SDK (which pulls in Daily.co's WebRTC
 * client) is loaded lazily on first use so it never lands in the initial bundle.
 */
export function useVapiCall() {
  const vapiRef = useRef<Vapi | null>(null);
  const [status, setStatus] = useState<CallStatus>("idle");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [volume, setVolume] = useState(0);
  const [duration, setDuration] = useState(0);

  // Call timer
  useEffect(() => {
    if (status !== "active") return;
    const id = window.setInterval(() => setDuration((d) => d + 1), 1000);
    return () => window.clearInterval(id);
  }, [status]);

  const getVapi = useCallback(async () => {
    if (vapiRef.current) return vapiRef.current;
    const { default: VapiClient } = await import("@vapi-ai/web");
    const vapi = new VapiClient(PUBLIC_KEY!);

    vapi.on("call-start", () => setStatus("active"));
    vapi.on("call-end", () => {
      setIsSpeaking(false);
      setVolume(0);
      setStatus((s) => (s === "error" || s === "mic-denied" ? s : "ended"));
    });
    vapi.on("speech-start", () => setIsSpeaking(true));
    vapi.on("speech-end", () => setIsSpeaking(false));
    vapi.on("volume-level", (v) => setVolume(v));
    vapi.on("error", (e) => {
      console.error("[vapi] error", e);
      setStatus("error");
    });

    vapiRef.current = vapi;
    return vapi;
  }, []);

  const start = useCallback(async () => {
    if (!vapiConfigured) {
      setStatus("error");
      return;
    }

    // Ask for the mic inside the click gesture (Safari requires this), then
    // release it — Vapi/Daily will re-acquire it once the call connects.
    setStatus("requesting-mic");
    setDuration(0);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((t) => t.stop());
    } catch {
      setStatus("mic-denied");
      return;
    }

    setStatus("connecting");
    try {
      const vapi = await getVapi();
      await vapi.start(ASSISTANT_ID!);
    } catch (e) {
      console.error("[vapi] failed to start", e);
      setStatus("error");
    }
  }, [getVapi]);

  const end = useCallback(() => {
    vapiRef.current?.stop();
  }, []);

  const reset = useCallback(() => {
    setStatus("idle");
    setDuration(0);
  }, []);

  // Never leave a call running if the component unmounts
  useEffect(() => {
    return () => {
      vapiRef.current?.stop();
    };
  }, []);

  return { status, isSpeaking, volume, duration, start, end, reset };
}
