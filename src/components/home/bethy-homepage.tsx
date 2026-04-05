 'use client';

import PrimaryLinkButton from '@/src/components/shared/ui/button/primary-link-button';
import PrimarySubmitButton from '@/src/components/shared/ui/button/primary-submit-button';
import Link from 'next/link';
import { FormEvent, useState } from 'react';

const heroHighlights = [
  'Photo-backed diagnosis',
  'Repair and assembly guidance',
  'Voice-first next steps',
];

const trustSignals = [
  'Trusted by early testers',
  'Voice-first guidance',
  'Built for homeowners',
  'Useful for tradespeople',
  'Works from a single photo',
  'Safety-aware plans',
  'Follow-up questions included',
];

type FeatureGraphicType = 'scan' | 'plan' | 'assist';

const productFeatures: Array<{
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  previewTitle: string;
  graphic: FeatureGraphicType;
}> = [
  {
    eyebrow: 'AI ISSUE SCANNER',
    title: 'Capture the issue',
    description:
      'Upload a photo of the broken area, fixture, or assembly step and Bethy turns it into a clean diagnosis, likely causes, tool needs, and a confidence-backed first action.',
    points: [
      'Photo-backed diagnosis',
      'Severity and urgency cues',
      'Tool and material suggestions',
    ],
    previewTitle: 'Diagnosis snapshot',
    graphic: 'scan',
  },
  {
    eyebrow: 'GUIDED REPAIR PLAN',
    title: 'Get a repair sequence',
    description:
      'Each repair or assembly plan is broken into short steps with timing, safety warnings, checkpoints, and plain language so you can keep moving without second guessing.',
    points: [
      'Short actionable steps',
      'Voice playback for hands-free work',
      'Pause and resume any time',
    ],
    previewTitle: 'Plan sequence',
    graphic: 'plan',
  },
  {
    eyebrow: 'LIVE FOLLOW-UP',
    title: 'Ask questions mid-repair',
    description:
      'When something changes on the wall, pipe, hinge, outlet, fitting, or install step, Bethy keeps the thread alive and adjusts the guidance instead of starting you over.',
    points: [
      'Context-aware follow-ups',
      'Troubleshooting suggestions',
      'Checklist and progress tracking',
    ],
    previewTitle: 'Mid-repair follow-up',
    graphic: 'assist',
  },
];

const valueCards = [
  {
    title: 'Photo diagnosis',
    description:
      'The app turns one image into a likely issue summary, assembly context, repair risk score, and recommended next move.',
  },
  {
    title: 'Voice coaching',
    description:
      'Bethy can read each repair or assembly step back to you while you work, which is far more useful than scrolling through a long article.',
  },
  {
    title: 'Safety prompts',
    description:
      'Electrical, water, ladder, and material cautions are surfaced before a task becomes a bigger problem.',
  },
  {
    title: 'Repair memory',
    description:
      'Saved sessions make it easy to return to the same task later or review how a previous repair or assembly job was handled.',
  },
];

const systemCards = [
  {
    eyebrow: 'REPAIR DIAGNOSIS ENGINE',
    title: 'Bethy Knowledge',
    description:
      'Finds probable causes and likely build context from the photo, the room or site context, and the symptoms you describe.',
  },
  {
    eyebrow: 'HANDS-FREE GUIDANCE LAYER',
    title: 'Voice Coach',
    description:
      'Reads instructions back in plain language and keeps the repair or assembly task moving step by step.',
  },
  {
    eyebrow: 'RISK AND CAUTION SYSTEM',
    title: 'Safety Check',
    description:
      'Flags red-line scenarios early so users know when to stop, isolate power, or call a professional.',
  },
  {
    eyebrow: 'SESSION HISTORY AND FOLLOW-UP',
    title: 'Repair Memory',
    description:
      'Stores prior repairs and assembly jobs so future questions start from what was already tried and what already worked.',
  },
];

const waitlistEmailAddress = 'hello@bethy.ai';

const FeaturePreview = ({
  previewTitle,
  graphic,
  className,
}: {
  previewTitle: string;
  graphic: 'scan' | 'plan' | 'assist';
  className?: string;
}) => {
  const renderGraphic = () => {
    if (graphic === 'scan') {
      return (
        <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-[radial-gradient(circle_at_top_left,rgba(147,232,95,0.2),transparent_34%),linear-gradient(180deg,#0b1119_0%,#0a0f16_100%)] p-5">
          <div className="absolute top-5 right-5 h-18 w-18 rounded-full border border-opai-green/30 bg-opai-green/10 blur-[2px]" aria-hidden />
          <div className="border-stroke-1/12 bg-background-5/95 relative rounded-[20px] border p-4 shadow-[0_18px_50px_rgba(0,0,0,0.3)]">
            <div className="grid grid-cols-[1.15fr_0.85fr] gap-4">
              <div className="rounded-[18px] border border-white/8 bg-[linear-gradient(135deg,#243241_0%,#131b27_100%)] p-4">
                <div className="mb-3 h-24 rounded-2xl border border-dashed border-opai-green/30 bg-[radial-gradient(circle_at_center,rgba(147,232,95,0.14),rgba(147,232,95,0.02))]" />
                <div className="space-y-2">
                  <div className="h-2.5 w-18 rounded-full bg-white/12" />
                  <div className="h-2.5 w-full rounded-full bg-white/7" />
                  <div className="h-2.5 w-4/5 rounded-full bg-white/7" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="rounded-[18px] border border-opai-red/18 bg-opai-red/8 p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="h-2.5 w-14 rounded-full bg-opai-red/45" />
                    <div className="h-5 w-5 rounded-full bg-opai-red/22" />
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-white/8" />
                </div>
                <div className="rounded-[18px] border border-opai-green/18 bg-opai-green/8 p-3">
                  <div className="mb-2 h-2.5 w-16 rounded-full bg-opai-green/40" />
                  <div className="flex gap-2">
                    <div className="h-8 flex-1 rounded-xl bg-white/8" />
                    <div className="h-8 w-8 rounded-xl bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-6 bottom-6 h-14 rounded-[18px] border border-white/6 bg-background-5/75 backdrop-blur-sm" aria-hidden />
        </div>
      );
    }

    if (graphic === 'plan') {
      return (
        <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-[radial-gradient(circle_at_top_right,rgba(147,232,95,0.14),transparent_34%),linear-gradient(180deg,#0b1017_0%,#0a0f14_100%)] p-5">
          <div className="border-stroke-1/12 bg-background-5/95 relative h-full rounded-[22px] border p-4 shadow-[0_18px_50px_rgba(0,0,0,0.3)]">
            <div className="mb-4 flex items-center justify-between rounded-[18px] border border-white/8 bg-white/4 px-4 py-3">
              <div className="space-y-2">
                <div className="h-2.5 w-18 rounded-full bg-white/12" />
                <div className="h-2.5 w-28 rounded-full bg-white/8" />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-opai-green/14">
                <div className="h-4 w-4 rounded-full border-2 border-opai-green/50" />
              </div>
            </div>
            <div className="space-y-3">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-[18px] border border-white/8 bg-white/3 px-3 py-3"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-opai-green/14 text-[11px] font-semibold text-opai-green/80">
                    0{step}
                  </div>
                  <div className="space-y-2">
                    <div className="h-2.5 w-24 rounded-full bg-white/12" />
                    <div className="h-2.5 w-full rounded-full bg-white/7" />
                  </div>
                  <div className="h-6 w-12 rounded-full bg-opai-red/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-[radial-gradient(circle_at_bottom_left,rgba(147,232,95,0.16),transparent_30%),linear-gradient(180deg,#0b1017_0%,#0a0f14_100%)] p-5">
        <div className="border-stroke-1/12 bg-background-5/95 relative h-full rounded-[22px] border p-4 shadow-[0_18px_50px_rgba(0,0,0,0.3)]">
          <div className="mb-4 flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-opai-green/14">
              <div className="h-4 w-4 rounded-full bg-opai-green/45" />
            </div>
            <div className="rounded-[18px] border border-white/8 bg-white/3 px-4 py-3">
              <div className="h-2.5 w-18 rounded-full bg-white/12" />
              <div className="mt-2 h-2.5 w-40 rounded-full bg-white/8" />
            </div>
          </div>
          <div className="ml-6 space-y-3 border-l border-white/8 pl-6">
            <div className="rounded-[18px] border border-opai-green/18 bg-opai-green/7 p-4">
              <div className="mb-2 h-2.5 w-20 rounded-full bg-opai-green/35" />
              <div className="space-y-2">
                <div className="h-2.5 w-full rounded-full bg-white/8" />
                <div className="h-2.5 w-4/5 rounded-full bg-white/8" />
              </div>
            </div>
            <div className="rounded-[18px] border border-opai-red/16 bg-opai-red/7 p-4">
              <div className="mb-2 h-2.5 w-24 rounded-full bg-opai-red/30" />
              <div className="flex gap-2">
                <div className="h-8 flex-1 rounded-xl bg-white/8" />
                <div className="h-8 w-12 flex-none rounded-xl bg-white/6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={className}>
      <div className="border-stroke-1/12 from-background-4 to-background-6 relative overflow-hidden rounded-[28px] border bg-linear-to-br p-4 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
        <div className="border-stroke-1/10 bg-background-5/85 mb-4 inline-flex rounded-full border px-3 py-2">
          <span className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[0.18em] text-white/55">
            {previewTitle}
          </span>
        </div>

        <div className="relative h-72 overflow-hidden rounded-[22px] border border-white/8 bg-[#0b0f16] md:h-80">
          <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,rgba(147,232,95,0.1),transparent_42%),linear-gradient(180deg,rgba(4,7,12,0.02)_0%,rgba(4,7,12,0.12)_100%)]" aria-hidden />
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-linear-to-b from-[#0b0f16] via-[#0b0f16]/70 to-transparent" aria-hidden />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-linear-to-t from-[#0b0f16] via-[#0b0f16]/80 to-transparent" aria-hidden />
          <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-inset ring-white/6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-40px_80px_rgba(0,0,0,0.2)]" aria-hidden />
          <div className="pointer-events-none absolute top-4 left-4 z-20 flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/8" />
          </div>

          {renderGraphic()}
        </div>
      </div>
    </div>
  );
};

const BethyHomepage = () => {
  const [waitlistEmail, setWaitlistEmail] = useState('');

  const handleWaitlistSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!waitlistEmail.trim()) {
      return;
    }

    const subject = encodeURIComponent('Bethy AI waitlist request');
    const body = encodeURIComponent(
      `Please add this email to the Bethy AI waitlist:\n\n${waitlistEmail.trim()}`
    );

    window.location.href = `mailto:${waitlistEmailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <>
    <section className="relative overflow-hidden pt-35 pb-20 md:pt-42.5 md:pb-28 lg:pt-52.5 lg:pb-36">
      <div
        className="absolute inset-x-0 top-0 h-130 bg-[radial-gradient(circle_at_top,rgba(93,220,246,0.18),transparent_48%),radial-gradient(circle_at_20%_20%,rgba(255,107,81,0.18),transparent_28%),linear-gradient(180deg,#0d1017_0%,#11141d_100%)]"
        aria-hidden
      />
      <div className="bg-opai-red/15 absolute top-28 left-1/2 h-64 w-64 -translate-x-[180%] rounded-full blur-3xl" aria-hidden />
      <div className="bg-opai-green/15 absolute top-16 right-1/2 h-72 w-72 translate-x-[180%] rounded-full blur-3xl" aria-hidden />

      <div className="main-container relative z-10">
        <div className="mx-auto max-w-230 text-center">
          <span className="border-stroke-1/15 bg-background-6/80 font-ibm-plex-mono text-tagline-4 inline-flex rounded-full border px-4 py-2 uppercase tracking-[0.2em] text-white/65">
            A softer kind of home repair AI
          </span>
          <h1 className="font-sora text-[2rem] leading-[1.15] mt-6 text-white sm:text-sora-heading-3 md:text-sora-heading-2 lg:text-[4.5rem] lg:leading-[1.08] lg:tracking-[-0.05em]">
            Virtual repair and assembly assistant
          </h1>
          <p className="font-inter-tight text-tagline-1 mx-auto mt-6 max-w-180 text-white/65">
            Bethy AI helps homeowners and tradespeople diagnose issues from a photo, follow
            guided repair and assembly steps
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryLinkButton href="/#waitlist">Join the beta</PrimaryLinkButton>
            <Link
              href="/#features"
              className="border-stroke-1/18 bg-background-6/70 font-ibm-plex-mono text-tagline-3 inline-flex items-center rounded-full border px-6 py-4 text-white/75 transition-colors duration-300 hover:text-white"
            >
              See how it works
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {heroHighlights.map((item) => (
              <span
                key={item}
                className="border-stroke-1/15 bg-background-6/70 font-inter-tight text-tagline-3 rounded-full border px-4 py-2 text-white/70"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="border-stroke-1/12 bg-background-6/50 mt-14 overflow-hidden rounded-[28px] border px-6 py-5">
          <p className="font-ibm-plex-mono text-tagline-4 mb-4 uppercase tracking-[0.2em] text-white/45">
            Trusted by early testers
          </p>
          <div className="flex flex-wrap gap-3">
            {trustSignals.map((item) => (
              <span
                key={item}
                className="bg-background-5 font-inter-tight text-tagline-3 rounded-full px-4 py-2 text-white/65"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section id="features" className="pb-20 md:pb-28 lg:pb-36">
      <div className="main-container space-y-6 lg:space-y-8">
        {productFeatures.map((feature, index) => (
          <article
            key={feature.eyebrow}
            className="border-stroke-1/10 bg-background-6/70 grid gap-8 overflow-hidden rounded-4xl border p-5 sm:p-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-10"
          >
            <div className={`min-w-0 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[0.15em] text-opai-green/85">
                {feature.eyebrow}
              </p>
              <h3 className="font-sora text-sora-heading-5 mt-4 text-white md:text-sora-heading-4">
                {feature.title}
              </h3>
              <p className="font-inter-tight text-tagline-1 mt-4 text-white/65">
                {feature.description}
              </p>
              <ul className="mt-6 space-y-3">
                {feature.points.map((point) => (
                  <li key={point} className="font-inter-tight text-tagline-2 flex items-center gap-3 text-white/75">
                    <span className="inline-block h-2 w-2 rounded-full bg-opai-green" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <FeaturePreview
              previewTitle={feature.previewTitle}
              graphic={feature.graphic}
              className={`min-w-0 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
            />
          </article>
        ))}
      </div>
    </section>

    <section className="pb-20 md:pb-28 lg:pb-36">
      <div className="main-container">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[0.2em] text-opai-green/85">
              What makes Bethy useful
            </p>
            <h2 className="font-sora text-sora-heading-4 mt-4 text-white md:text-sora-heading-3 lg:text-[3.25rem] lg:leading-[1.1] lg:tracking-[-0.05em]">
              Designed for real repair and assembly work
            </h2>
          </div>
          <p className="font-inter-tight text-tagline-1 max-w-140 text-white/65 lg:ml-auto">
            Bethy is less about generating long explanations and more about giving the right next
            action, in the right format, when your hands are full and the task is already messy, whether you are fixing a fault or assembling something on site.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {valueCards.map((card) => (
            <article
              key={card.title}
              className="border-stroke-1/10 from-background-6 to-background-4 overflow-hidden rounded-[28px] border bg-linear-to-b p-6"
            >
              <div className="mb-6 h-10 w-10 rounded-2xl bg-[linear-gradient(135deg,rgba(93,220,246,0.22),rgba(255,107,81,0.3))]" aria-hidden />
              <h3 className="font-sora text-sora-heading-6 text-white">{card.title}</h3>
              <p className="font-inter-tight text-tagline-2 mt-3 text-white/65">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="system" className="pb-20 md:pb-28 lg:pb-36">
      <div className="main-container">
        <div className="border-stroke-1/10 bg-background-6/65 overflow-hidden rounded-4xl border p-5 sm:p-6 md:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[0.2em] text-opai-green/85">
                System layers
              </p>
              <h2 className="font-sora text-sora-heading-4 mt-4 text-white md:text-sora-heading-3 lg:text-[3.25rem] lg:leading-[1.1] lg:tracking-[-0.05em]">
                Built for guided repair and assembly
              </h2>
            </div>
            <p className="font-inter-tight text-tagline-1 text-white/65 lg:ml-auto lg:max-w-140">
              Instead of a founder gallery, this structure explains the product as an orchestration
              of diagnosis, voice, safety, and memory. That makes the landing page about the
              workflow homeowners and tradespeople actually buy into.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {systemCards.map((card) => (
              <article
                key={card.title}
                className="border-stroke-1/10 bg-background-5/80 overflow-hidden rounded-[26px] border p-5 sm:p-6"
              >
                <p className="font-ibm-plex-mono text-tagline-4 wrap-break-word uppercase tracking-[0.15em] text-opai-green/85">
                  {card.eyebrow}
                </p>
                <h3 className="font-sora text-sora-heading-6 mt-4 text-white md:text-[1.5rem] md:leading-[1.35]">
                  {card.title}
                </h3>
                <p className="font-inter-tight text-tagline-2 mt-3 text-white/65">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section id="waitlist" className="pb-12 lg:pb-18">
      <div className="main-container">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,#11141d_0%,#171c27_45%,#0d1017_100%)] px-6 py-8 md:px-10 md:py-12 lg:px-14 lg:py-16">
          <div className="absolute top-0 right-0 h-52 w-52 rounded-full bg-opai-green/12 blur-3xl" aria-hidden />
          <div className="bg-opai-red/12 absolute bottom-0 left-0 h-52 w-52 rounded-full blur-3xl" aria-hidden />

          <div className="relative z-10 space-y-8 text-center">
            <div className="mx-auto max-w-190">
              <p className="font-ibm-plex-mono text-tagline-4 uppercase tracking-[0.2em] text-opai-green/85">
                Join our newsletter
              </p>
              <h2 className="font-sora text-sora-heading-4 mt-4 text-white md:text-sora-heading-3 lg:text-[3.25rem] lg:leading-[1.1] lg:tracking-[-0.05em]">
                Join our waitlist
              </h2>
              <p className="font-inter-tight text-tagline-1 mt-5 max-w-155 text-white/65">
                Early access includes product updates, launch timing, and a chance to influence
                which repair and assembly categories we prioritise next.
              </p>
              <p className="font-inter-tight text-tagline-3 mt-4 text-white/45">
                No spam. Just launch updates, beta invites, and occasional product notes.
              </p>
            </div>

            <div className="mx-auto w-full max-w-155">
              <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                <label htmlFor="waitlist-email" className="sr-only">
                  Email address
                </label>
                <div className="border-stroke-1/12 bg-background-5/80 flex flex-col gap-3 rounded-3xl border p-3 sm:flex-row sm:items-center">
                  <input
                    id="waitlist-email"
                    name="email"
                    type="email"
                    required
                    value={waitlistEmail}
                    onChange={(event) => setWaitlistEmail(event.target.value)}
                    placeholder="Enter your email"
                    className="font-inter-tight text-tagline-2 placeholder:text-white/35 min-h-12 flex-1 rounded-2xl border border-white/8 bg-white/3 px-4 text-white outline-none transition-colors duration-300 focus:border-white/20"
                  />
                  <PrimarySubmitButton className="w-full sm:w-auto">
                    Join
                  </PrimarySubmitButton>
                </div>
              </form>
              <p className="font-inter-tight text-tagline-4 mt-3 text-white/45">
                Submissions open your email client and send to {waitlistEmailAddress}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default BethyHomepage;