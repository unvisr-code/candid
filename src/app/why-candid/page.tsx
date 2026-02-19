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
            홈
          </Link>
          <Link
            href="/resume"
            className="text-muted border-border bg-surface hover:border-accent hover:text-accent rounded-full border px-4 py-2 text-xs font-medium"
          >
            이력
          </Link>
          <Link
            href="/portfolio"
            className="text-muted border-border bg-surface hover:border-accent hover:text-accent rounded-full border px-4 py-2 text-xs font-medium"
          >
            포트폴리오
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
              <p>안녕하세요, 오영준입니다.</p>
              <p>
                저는 학업과 실무를 병행하며 주니어가 마주하는 막힘을 현실적으로
                체감했고, B2B 고객 응대 경험을 통해 요청이 흩어질 때 실행이 늦어질
                수 있다는 점도 가까이에서 느꼈습니다.
              </p>
              <p>
                그래서 저는 정보와 요청사항을 정리해 공유하고, 필요한 데이터는
                의사결정 가능한 형태로 가공해 팀이 더 빠르게 움직일 수 있도록 돕는
                역할을 해보고 싶습니다.
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
