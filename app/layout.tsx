import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bethy.ai";
const siteName = "Bethy";
const siteDescription =
  "Bethy is the AI property manager for landlords and letting agents — it answers the phone, triages repairs, sources tradespeople, and only asks you to approve the cost.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bethy | AI Property Management for Landlords",
    template: "%s | Bethy",
  },
  description: siteDescription,
  keywords: [
    "AI property manager",
    "AI receptionist for landlords",
    "letting agent software",
    "property management software",
    "AI maintenance management",
    "landlord AI assistant",
    "tenant call answering service",
  ],
  authors: [{ name: "Bethy" }],
  creator: "Bethy",
  publisher: "Bethy",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName,
    title: "Bethy | AI Property Management for Landlords",
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Bethy — the AI property manager for landlords and letting agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bethy | AI Property Management for Landlords",
    description: siteDescription,
    images: ["/opengraph-image"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Bethy",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: siteDescription,
  url: siteUrl,
  offers: [
    {
      "@type": "Offer",
      name: "Pro",
      price: "10",
      priceCurrency: "GBP",
      description: "For small portfolios — up to 10 units, up to 2 team members.",
    },
    {
      "@type": "Offer",
      name: "Business",
      price: "25",
      priceCurrency: "GBP",
      description: "For growing portfolios — up to 100 units, up to 5 team members.",
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      description: "For large, multi-team operations — unlimited units and team members.",
    },
  ],
  provider: {
    "@type": "Organization",
    name: "Bethy",
    url: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-[#030303] text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Navbar />

          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
