"use client";

import { motion } from "framer-motion";
import { Scale } from "lucide-react";

export default function TermsOfService() {
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
            <Scale size={12} />
            Legal Center
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-[#FAFAFA] leading-[1.1] mb-6">
            Terms of Service
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
              1. Acceptance of Terms
            </h2>
            <p className="mb-4">
              By accessing or using the AI phone receptionist, dashboard,
              tenant app, and related services (collectively, the "Services")
              provided by Bethy ("Bethy", "we", "us"), you agree to be bound by
              these Terms of Service.
            </p>
            <p>
              If you are accessing the Services on behalf of a company or
              organizational entity, you represent that you have the authority
              to bind such entity to these terms. If you do not agree to these
              terms, you must not use our Services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">
              2. Acceptable Use Policy
            </h2>
            <p className="mb-4">
              Bethy provides an AI copilot for managing tenant calls,
              maintenance, and property records. You are solely responsible
              for the accuracy of the property, tenant, and enquiry data you
              enter, and for the decisions you make when approving or
              declining work Bethy proposes. You strictly agree NOT to use
              Bethy's Services to:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>
                Upload or enter illegal, fraudulent, or non-consensual content
                into the platform, or use Bethy's AI receptionist to mislead
                tenants or callers.
              </li>
              <li>
                Attempt to breach, reverse-engineer, or execute malicious code
                against the Bethy platform or its underlying systems.
              </li>
              <li>
                Access or attempt to access another landlord's or agency's
                workspace, tenant data, or property records without
                authorization.
              </li>
            </ul>
            <p className="mt-4">
              Violation of this policy will result in immediate termination of
              your account without a refund, and may be reported to relevant law
              enforcement agencies.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">
              3. Intellectual Property Rights
            </h2>
            <p className="mb-4">
              <strong>Your IP:</strong> You retain complete ownership of your
              property records, tenant data, maintenance reports, and call
              transcripts processed through our Services. Bethy claims zero
              ownership over your proprietary business data.
            </p>
            <p>
              <strong>Our IP:</strong> Bethy retains all rights, titles, and
              interests in the underlying Bethy platform, AI receptionist,
              dashboard, tenant app, and documentation. You may not copy or
              resell the Bethy platform as a standalone service.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">
              4. Uptime & Service Level Agreement (SLA)
            </h2>
            <p>
              We work to keep Bethy reliably available for your tenants and
              team, but standard "Pro" and "Business" tier accounts are
              provided "AS IS" without formal uptime guarantees. Strict SLA
              commitments are exclusively provided to customers subscribed to
              the "Enterprise" tier, subject to their respective Master
              Service Agreements (MSA).
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">
              5. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Bethy shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, including loss of profits, data, or business
              interruption, arising out of your use or inability to use the
              Services. Our total liability for any claims under these terms
              shall not exceed the amount you paid us for the Services in the
              past three (3) months.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">
              6. Modification of Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time to reflect
              changes in our technology or legal requirements. We will notify
              you of any material changes via email or an administrative
              dashboard alert at least 30 days prior to the changes taking
              effect.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
