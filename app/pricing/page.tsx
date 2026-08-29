import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, flat pricing for Bethy — £10 Pro, £25 Business, or custom Enterprise. Every plan includes the AI phone receptionist and maintenance automation. 14-day free trial, no card required.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Bethy Pricing",
    description:
      "Simple, flat pricing for Bethy — £10 Pro, £25 Business, or custom Enterprise. 14-day free trial, no card required.",
    url: "/pricing",
  },
};

export default function Page() {
  return <PricingClient />;
}
