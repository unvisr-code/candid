"use client";

import BlurText from "@/components/reactbits/blur-text";
import { heroNarratives } from "@/data/portfolio";

const introNarrative = heroNarratives.find((n) => n.id === "NAR--6");

export function PortfolioHero() {
  return (
    <section className="pb-12 sm:pb-16">
      <div className="text-muted mb-3 text-xs font-semibold tracking-widest uppercase">
        Portfolio · 오영준
      </div>

      <BlurText
        text="프로젝트와 기록"
        className="portfolio-section-title text-foreground block"
        animateBy="words"
        delay={100}
      />

      {introNarrative && (
        <p className="text-foreground mt-4 text-base font-medium leading-relaxed sm:text-lg">
          {introNarrative.keyLine}
        </p>
      )}
      <p className="text-muted mt-2 text-sm leading-relaxed sm:text-base">
        {introNarrative?.webSummary ??
          "현장에서 겪은 문제를 정리하고, 실행해서 결과를 남긴 기록입니다."}
      </p>
    </section>
  );
}
