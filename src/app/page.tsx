import type { Metadata } from "next";
import { LandingHero } from "@/components/landing-hero";
import { SiteFooter } from "@/components/site-footer";
import { landingVisualConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "오영준 | Operations & Business Development",
  description:
    "현장의 병목을 실행 가능한 구조로 전환하는 오영준의 랜딩 페이지. Resume와 Portfolio로 빠르게 이동할 수 있습니다.",
};

export default function LandingPage() {
  return (
    <div
      className="no-scroll-viewport"
      style={{ background: landingVisualConfig.background }}
    >
      <LandingHero />
      <SiteFooter variant="fixedSlim" />
    </div>
  );
}
