import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { PortfolioHero } from "@/components/portfolio/portfolio-hero";
import { PortfolioFilter } from "@/components/portfolio/portfolio-filter";
import { portfolioProjects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "오영준 포트폴리오. CX, 운영, 세일즈 경험을 바탕으로 실제 업무에서 개선을 만든 프로젝트 기록입니다.",
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
