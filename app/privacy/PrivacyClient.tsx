"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "August 10, 2026";

  return (
    <div className="w-full min-h-screen bg-[#030303] text-white pt-32 md:pt-40 pb-24 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-3xl mx-auto">
        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="font-mono text-[10px] text-white/50 tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
            <Shield size={12} />
            Legal Center
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-[#FAFAFA] leading-[1.1] mb-6">
            Privacy Policy
          </h1>
          <p className="text-white/40 text-sm font-mono tracking-widest uppercase">
            Last Updated: {lastUpdated}
          </p>
        </motion.div>

        {/* ── CONTENT ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-12 text-neutral-400 font-light leading-relaxed"
        >
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">
              1. Introduction
            </h2>
            <p className="mb-4">
              At Bethy ("Bethy", "we", "us", or "our"), privacy is not an
              afterthought—it is core to how we build an AI copilot for
              landlords and letting agents. We handle tenant phone calls,
              property records, and maintenance data on your behalf, and we
              engineer our systems to keep that information secure and
              properly scoped to your workspace.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website, use the
              Bethy dashboard, call our AI phone receptionist, or use the
              companion tenant app (collectively, the "Services").
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">
              2. Workspace Data Isolation
            </h2>
            <p className="mb-4">
              Bethy operates as a multi-tenant platform, and each landlord's or
              agency's workspace is kept logically isolated. We do not use one
              workspace's property or tenant data to inform another workspace's
              calls, maintenance triage, or "Ask Bethy" responses.
            </p>
            <p>
              Bethy's AI features—including the AI phone receptionist and Ask
              Bethy—answer strictly from the property and tenant information
              you have entered into your own workspace. They do not invent
              details they don't have, and calls, messages, and tenant records
              are encrypted in transit and at rest.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">
              3. Information We Do Collect
            </h2>
            <p className="mb-4">
              To operate the Services and support your portfolio, we collect
              the following categories of data:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>
                <strong className="text-white font-medium">
                  Account Data:
                </strong>{" "}
                Name, email address, company or agency details, and billing
                information required for account creation and invoicing.
              </li>
              <li>
                <strong className="text-white font-medium">
                  Property, Tenant & Maintenance Data:
                </strong>{" "}
                Property records, tenant records, rent and invoice data, and
                maintenance reports you or your tenants enter through the
                dashboard or the tenant app.
              </li>
              <li>
                <strong className="text-white font-medium">
                  Call & Usage Data:
                </strong>{" "}
                Phone call audio and transcripts handled by Bethy's AI
                receptionist, and system usage logs, retained only as long as
                necessary for security, support, and service delivery.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">
              4. Data Protection
            </h2>
            <p>
              Bethy is built for landlords and letting agents, and we process
              personal data in accordance with applicable data protection
              laws in the markets we serve, including the UK GDPR and the
              Data Protection Act 2018 where relevant. You retain control
              over the tenant and property data in your workspace, and we
              process it only as needed to provide the Services to you.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">
              5. Third-Party Service Providers
            </h2>
            <p>
              We do not sell, rent, or trade your personal information. When
              you choose to connect a third-party integration—such as Xero for
              accounting, GoCardless for rent collection, the EPC Register for
              compliance data, or OpenRent, Rightmove, and SpareRoom for
              listings and referencing—we share only the data necessary to
              power that integration, and only after you have authorized the
              connection from your workspace settings. Bethy never sends your
              data to an integration you haven't connected. We also rely on
              infrastructure and payment processing partners necessary to
              operate the Services, who are bound by confidentiality
              obligations.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">
              6. Contact Us
            </h2>
            <p>
              If you have any questions or concerns regarding this Privacy
              Policy or our data processing practices, please contact our Data
              Protection Officer (DPO) at:
            </p>
            <p className="mt-4 font-mono text-white/70">
              Email: team@bethy.com       </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
