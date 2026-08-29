import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why we built Bethy — the AI property manager for UK landlords and letting agents who want their evenings back.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Bethy",
    description:
      "Why we built Bethy — the AI property manager for UK landlords and letting agents who want their evenings back.",
    url: "/about",
  },
};

export default function Page() {
  return <AboutClient />;
}
