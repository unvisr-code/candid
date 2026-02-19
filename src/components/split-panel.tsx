"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ShinyText from "@/components/reactbits/shiny-text";
import SplitText from "@/components/reactbits/split-text";
import BlurText from "@/components/reactbits/blur-text";
import Magnet from "@/components/reactbits/magnet";
import PixelTransition from "@/components/reactbits/pixel-transition";
import type { SplitPanel as SplitPanelData } from "@/data/site";

interface SplitPanelProps {
  data: SplitPanelData;
  side: "left" | "right";
  delay?: number;
}

function ArrowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function SplitPanel({ data, side, delay = 0 }: SplitPanelProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isLeft = side === "left";
  return (
    <Link
      href={data.href}
      className="group relative flex h-full w-full overflow-hidden outline-none"
      style={{
        background: isLeft ? "var(--surface)" : "var(--surface-alt)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {/* Subtle panel gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: isLeft
            ? "linear-gradient(135deg, transparent 40%, rgba(236,125,49,0.02) 100%)"
            : "linear-gradient(225deg, transparent 40%, rgba(236,125,49,0.03) 100%)",
        }}
      />

      {/* Hover overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          backgroundColor: isHovered
            ? "rgba(232,100,39,0.035)"
            : "rgba(232,100,39,0)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Pixel transition overlay */}
      <PixelTransition isActive={isHovered} gridSize={6} />

      {/* Panel content — positioned towards the divider */}
      <motion.div
        className={`relative z-10 flex h-full flex-col justify-center gap-3 pb-[3vh] md:gap-4 md:pb-[5vh] ${
          isLeft
            ? "mx-auto md:ml-auto md:mr-[clamp(130px,15vw,220px)]"
            : "mx-auto md:mr-auto md:ml-[clamp(130px,15vw,220px)]"
        } max-w-[360px] px-6 md:px-0`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: isHovered ? -4 : 0 }}
        transition={{
          opacity: {
            duration: 0.6,
            delay: delay / 1000,
            ease: [0.22, 1, 0.36, 1],
          },
          y: { duration: 0.3 },
        }}
      >
        {/* Accent bar + Label */}
        <div className="flex items-center gap-3">
          <motion.div
            className="h-[2px] w-6 rounded-full bg-[var(--accent)]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: delay / 1000 }}
            style={{ transformOrigin: "left" }}
          />
          <div className="split-panel-label text-[var(--accent)]">
            <ShinyText text={data.label} speed={3} />
          </div>
        </div>

        {/* Headline */}
        <div className="split-panel-headline text-[var(--foreground)]">
          {isLeft ? (
            <SplitText
              text={data.headline}
              delay={40}
              animationFrom={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            />
          ) : (
            <BlurText text={data.headline} delay={60} animateBy="words" />
          )}
        </div>

        {/* Description */}
        <motion.p
          className="split-panel-desc text-[var(--text-muted)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: (delay + 200) / 1000,
          }}
        >
          {data.description}
        </motion.p>

        {/* CTA Arrow */}
        <motion.div
          className="mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: (delay + 400) / 1000,
          }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(236,125,49,0.3)] px-4 py-2 text-sm font-semibold text-[var(--accent)] transition-colors group-hover:border-[var(--accent-strong)] group-hover:bg-[rgba(236,125,49,0.06)]">
              {data.ctaLabel ?? "자세히 보기"}
              <ArrowIcon />
            </span>
        </motion.div>
      </motion.div>

      {/* Edge highlight on hover */}
      <motion.div
        className={`pointer-events-none absolute top-0 bottom-0 w-[3px] ${
          isLeft ? "right-0" : "left-0"
        }`}
        style={{ background: "var(--accent)" }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isHovered ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />
    </Link>
  );
}
