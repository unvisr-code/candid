import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { PortfolioHero } from "@/components/portfolio/portfolio-hero";
import { PortfolioFilter } from "@/components/portfolio/portfolio-filter";
import { CapabilitySection } from "@/components/portfolio/capability-section";
import { portfolioProjects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "오영준 포트폴리오. 고객문의 자동화, 데이터 대시보드, 업무 자동화, CRM 퍼널 설계 등 10개 프로젝트의 성과와 실행 기록.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-background min-h-screen">
      <main className="mx-auto w-full max-w-4xl px-5 py-8 sm:px-8 sm:py-10">
        {/* Nav pills */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Link
            href="/"
            className="text-muted border-border bg-surface hover:border-accent hover:text-accent rounded-full border px-4 py-2 text-xs font-medium"
          >
            Back to Landing
          </Link>
          <Link
            href="/resume"
            className="text-muted border-border bg-surface hover:border-accent hover:text-accent rounded-full border px-4 py-2 text-xs font-medium"
          >
            Go Resume
          </Link>
          <Link
            href="/why-candid"
            className="text-muted border-border bg-surface hover:border-accent hover:text-accent rounded-full border px-4 py-2 text-xs font-medium"
          >
            Why Candid
          </Link>
        </div>

        {/* Hero */}
        <PortfolioHero />

        {/* Project sections */}
        <PortfolioFilter projects={portfolioProjects} />

        {/* 역량 프로필 */}
        <CapabilitySection />

        {/* 하단 CTA */}
        <div className="flex flex-wrap items-center gap-3 py-12 sm:py-16">
          <Link
            href="/resume"
            className="bg-accent hover:bg-accent-strong rounded-full px-6 py-3 text-sm font-semibold text-white"
          >
            View Resume
          </Link>
          <Link
            href="/why-candid"
            className="bg-accent hover:bg-accent-strong rounded-full px-6 py-3 text-sm font-semibold text-white"
          >
            Why Candid
          </Link>
          <Link
            href="/"
            className="border-border text-foreground hover:border-accent hover:text-accent rounded-full border px-6 py-3 text-sm font-semibold"
          >
            Back to Landing
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
