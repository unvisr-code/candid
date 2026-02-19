import type { Metadata } from "next";
import { LandingHero } from "@/components/landing-hero";
import { SiteFooter } from "@/components/site-footer";
import { landingVisualConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "오영준 | Recruiting Consultant",
  description:
    "AI 커리어 플랫폼 BD, 스타트업 창업, B2B CX 경험을 바탕으로 채용 컨설팅에 임합니다.",
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
