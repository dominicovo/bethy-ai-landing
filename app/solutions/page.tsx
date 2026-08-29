import type { Metadata } from "next";
import SolutionsClient from "./SolutionsClient";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "See how Bethy works for independent landlords, letting agents, and property management companies — from the first ringing phone to a finished repair.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Bethy Solutions",
    description:
      "See how Bethy works for independent landlords, letting agents, and property management companies.",
    url: "/solutions",
  },
};

export default function Page() {
  return <SolutionsClient />;
}
