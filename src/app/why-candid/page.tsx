import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { WhyCandidIntro } from "@/components/why-candid/why-candid-intro";
import { WhyCandidReasons } from "@/components/why-candid/why-candid-reasons";
import { WhyCandidValue } from "@/components/why-candid/why-candid-value";
import { WhyCandidFramework } from "@/components/why-candid/why-candid-framework";
import { WhyCandidMessages } from "@/components/why-candid/why-candid-messages";
import { WhyCandidCta } from "@/components/why-candid/why-candid-cta";

export const metadata: Metadata = {
  title: "Why Candid",
  description:
    "캔디드 채용 컨설턴트 지원동기와 제공 가치. 운영 시스템화, 데이터 기반 실행, 후보자 중심 커뮤니케이션.",
};

export default function WhyCandidPage() {
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
            href="/portfolio"
            className="text-muted border-border bg-surface hover:border-accent hover:text-accent rounded-full border px-4 py-2 text-xs font-medium"
          >
            Go Portfolio
          </Link>
        </div>

        {/* Sections */}
        <WhyCandidIntro />
        <WhyCandidReasons />
        <WhyCandidValue />
        <WhyCandidFramework />
        <WhyCandidMessages />
        <WhyCandidCta />
      </main>
      <SiteFooter />
    </div>
  );
}
