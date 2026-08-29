import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing use of Bethy's AI phone receptionist, dashboard, and tenant app.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <TermsClient />;
}
