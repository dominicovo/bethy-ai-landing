"use client";

import { motion } from "framer-motion";
import { Cookie } from "lucide-react";

export default function CookiePolicy() {
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
            <Cookie size={12} />
            Legal Center
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-[#FAFAFA] leading-[1.1] mb-6">
            Cookie Policy
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
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files placed on your device (computer,
              smartphone, or other electronic device) when you visit our
              website. They are widely used to make websites work efficiently,
              securely, and to provide basic usage data to the site owners.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">
              2. Our Minimalist Approach
            </h2>
            <p className="mb-4">
              At Bethy, we believe in helping you run your portfolio, not
              tracking you around the web. We do not use third-party
              advertising cookies, cross-site trackers, or marketing pixels. We
              strictly use cookies for technical necessity and basic site
              performance analytics.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">
              3. Types of Cookies We Use
            </h2>
            <ul className="list-disc pl-6 flex flex-col gap-4">
              <li>
                <strong className="text-white font-medium">
                  Strictly Necessary Cookies:
                </strong>
                These are essential for the operation of our platform. They
                include cookies that enable you to log into secure areas of
                your Bethy dashboard, manage your workspace settings, and
                securely handle billing sessions. The platform cannot function
                without these.
              </li>
              <li>
                <strong className="text-white font-medium">
                  Performance & Security Cookies:
                </strong>
                We use cookies to balance site traffic and help protect your
                workspace against abusive or malicious requests. These do not
                store personally identifiable information.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">
              4. Managing Your Preferences
            </h2>
            <p className="mb-4">
              Most web browsers allow you to control cookies through their
              settings preferences. However, if you use your browser settings to
              block all cookies (including strictly necessary cookies), you may
              not be able to log into your Bethy dashboard or manage your
              properties and tenants.
            </p>
            <p>
              To learn more about how to manage and delete cookies, visit{" "}
              <a
                href="https://aboutcookies.org"
                target="_blank"
                rel="noreferrer"
                className="text-white underline hover:text-[#00F2FF] transition-colors"
              >
                aboutcookies.org
              </a>
              .
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">5. Contact</h2>
            <p>
              If you have specific questions about how we use cookies or handle
              local storage, please reach out to our team at{" "}
              <span className="text-white font-mono">privacy@bethy.com</span>
              .
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
