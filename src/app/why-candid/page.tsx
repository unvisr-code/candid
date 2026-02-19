import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { WhyCandidIntro } from "@/components/why-candid/why-candid-intro";
import { WhyCandidReasons } from "@/components/why-candid/why-candid-reasons";
import { WhyCandidValue } from "@/components/why-candid/why-candid-value";

export const metadata: Metadata = {
  title: "Why Candid",
  description:
    "캔디드 지원 동기와 기여할 수 있는 일. 주니어 채용 시장에서의 장기적 가치와 경험.",
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
        {/* 지원 동기 편지 */}
        <section className="border-border border-b py-12 sm:py-16">
          <h2 className="text-foreground mb-6 text-xl font-bold tracking-[-0.02em] sm:text-2xl">
            캔디드에 지원하며
          </h2>
          <div className="bg-white border-border rounded-xl border p-6 sm:p-8">
            <div className="text-foreground/80 space-y-4 text-sm leading-relaxed sm:text-base">
              <p>
                안녕하세요, 오영준입니다.
              </p>
              <p>
                저는 학업과 실무를 병행하며 주니어가 마주하는 고민을 현실적으로
                이해하게 됐고, B2B 고객 응대와 내부 협업을 통해 고객의 말이 팀의
                실행으로 이어지기 위해 필요한 &apos;정리&apos;가 무엇인지
                배웠습니다. 또한 기업에 필요한 데이터를 정리·가공해 공유 가능한
                형태로 만들며, 의사결정과 실행이 빨라지는 경험을 해왔습니다.
              </p>
              <p>
                캔디드에서는 주니어의 고민을 상황과 기준으로 정리해 다음 행동으로
                연결하고, 기업의 필요는 구조화된 정보와 데이터로 전달해 서로가 더
                잘 이해하고 연결될 수 있도록 돕고 싶습니다.
              </p>
              <p>감사합니다.</p>
            </div>
            <p className="text-muted mt-6 text-right text-sm">오영준 드림</p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
