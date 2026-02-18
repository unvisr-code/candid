"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Noise from "@/components/reactbits/noise";
import { PanelDivider } from "@/components/panel-divider";
import { ProfileBadge } from "@/components/profile-badge";
import { SplitPanel } from "@/components/split-panel";
import { splitPanels, landingVisualConfig } from "@/data/site";

export function LandingHero() {
  return (
    <section
      aria-label="메인 히어로"
      className="relative h-full w-full overflow-hidden"
      style={{ background: landingVisualConfig.background }}
    >
      {/* Noise background overlay */}
      <Noise patternAlpha={10} patternSize={200} patternRefreshInterval={6} />

      {/* Grid pattern background */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.3]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(23,23,23,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(23,23,23,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
        }}
      />

      {/* Ambient glow effects */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <motion.div
          className="absolute top-[-18%] left-[-8%] h-[55vh] w-[42vw] rounded-full blur-[120px]"
          style={{ background: "rgba(236,125,49,0.12)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="absolute right-[-6%] bottom-[-15%] h-[50vh] w-[40vw] rounded-full blur-[120px]"
          style={{ background: "rgba(232,100,39,0.10)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
        {/* Center glow behind profile */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[30vh] w-[30vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]"
          style={{ background: "rgba(236,125,49,0.07)" }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>

      {/* Main content */}
      <main className="relative z-[2] flex h-[calc(100svh-var(--landing-footer-height))] w-full flex-col md:flex-row">
        {/* Left panel - Resume */}
        <div className="relative flex-1 min-h-[42vh] md:min-h-0">
          <SplitPanel data={splitPanels.left} side="left" delay={400} />
        </div>

        {/* Divider (without profile badge) */}
        <div className="relative z-10 flex shrink-0 items-center justify-center md:w-0">
          <div className="hidden md:block">
            <PanelDivider orientation="vertical" />
          </div>
          <div className="block w-full md:hidden">
            <PanelDivider orientation="horizontal" />
          </div>
        </div>

        {/* Right panel - Portfolio */}
        <div className="relative flex-1 min-h-[42vh] md:min-h-0">
          <SplitPanel data={splitPanels.right} side="right" delay={600} />
        </div>

        {/* Profile badge — absolute, on top of everything */}
        <div className="pointer-events-none absolute inset-0 z-[30] flex items-center justify-center">
          <div className="pointer-events-auto">
            <ProfileBadge />
          </div>
        </div>

        {/* Why Candid button — bottom center */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[clamp(24px,5vh,56px)] z-[30] flex justify-center">
          <motion.div
            className="pointer-events-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/why-candid"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(236,125,49,0.4)] bg-[rgba(255,255,255,0.7)] px-5 py-2.5 text-xs font-semibold text-[var(--accent)] shadow-[0_4px_20px_rgba(236,125,49,0.1)] backdrop-blur-md transition-all hover:border-[var(--accent-strong)] hover:bg-[rgba(236,125,49,0.08)] hover:shadow-[0_6px_28px_rgba(236,125,49,0.18)]"
            >
              Why Candid
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </main>
    </section>
  );
}
