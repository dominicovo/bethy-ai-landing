import type { Metadata } from "next";
import CookiesClient from "./CookiesClient";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Bethy uses cookies across the dashboard and marketing site.",
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <CookiesClient />;
}
