"use client";

import BlurText from "@/components/reactbits/blur-text";
import { portfolioProjects, heroNarratives } from "@/data/portfolio";

const uniqueOrgs = Array.from(new Set(portfolioProjects.map((p) => p.org)));
const verifiedCount = portfolioProjects.filter(
  (p) => p.verified === "검증완료",
).length;
const introNarrative = heroNarratives.find((n) => n.id === "NAR--6");

const stats = [
  { value: `${portfolioProjects.length}`, label: "프로젝트" },
  { value: `${uniqueOrgs.length}`, label: "조직" },
  { value: `${verifiedCount}`, label: "검증완료" },
];

export function PortfolioHero() {
  return (
    <section className="pb-12 sm:pb-16">
      {/* 정체성 라벨 */}
      <div className="text-muted mb-3 text-xs font-semibold tracking-widest uppercase">
        Portfolio · 오영준
      </div>

      <BlurText
        text="프로젝트와 성과"
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
          "현장의 문제를 구조화하고, 실행해서 결과를 만든 기록입니다."}
      </p>

      {/* 통계 카운터 */}
      <div className="mt-6 flex gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-accent text-2xl font-extrabold sm:text-3xl">
              {s.value}
            </div>
            <div className="text-muted mt-0.5 text-xs font-medium">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* 조직 목록 */}
      <div className="text-muted mt-4 flex flex-wrap items-center gap-2 text-sm">
        {uniqueOrgs.map((org, i) => (
          <span key={org}>
            {org}
            {i < uniqueOrgs.length - 1 && (
              <span className="text-border ml-2">·</span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
