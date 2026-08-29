import type { Metadata } from "next";
import PerformanceClient from "./PerformanceClient";

export const metadata: Metadata = {
  title: "How Bethy Performs",
  description:
    "Bethy answers, you approve. See how Bethy covers your calls, tracks maintenance stage by stage, and connects to the UK lettings tools you already use.",
  alternates: { canonical: "/performance" },
  openGraph: {
    title: "How Bethy Performs",
    description:
      "Bethy answers, you approve. See how Bethy covers your calls, tracks maintenance stage by stage, and connects to the UK lettings tools you already use.",
    url: "/performance",
  },
};

export default function Page() {
  return <PerformanceClient />;
}
