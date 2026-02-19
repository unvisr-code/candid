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
                Angelswing에서 고객 문의를 하루에 수십 건씩 응대하면서, 자주 반복되는 패턴이 보이기 시작했습니다. 질문의 내용은 달랐지만 결국 &quot;내 상황에서 어떻게 하면 되는지&quot;를 알고 싶은 것이었습니다.
              </p>
              <p>
                채용 상담도 같은 구조라고 생각합니다. 구직자에게는 &quot;지금 상황에서 어떻게 준비하면 되는지&quot;를, 기업에게는 &quot;이 후보자가 우리에게 맞는지&quot;를 정리해 연결하는 일. 캔디드가 그 역할을 하는 곳이라고 봤습니다.
              </p>
              <p>
                고객 응대, 행사 운영, 데이터 정리, SI 프로젝트 — 모든 경험이 결국 같은 일이었습니다. 상대의 상황을 파악하고, 정보를 정리해서, 맞는 형태로 전달하는 것. 이 방식을 채용 상담에 쓰고 싶습니다.
              </p>
            </div>
            <p className="text-muted mt-6 text-right text-sm">오영준 드림</p>
          </div>
        </section>

        {/* 마무리 */}
        <p className="text-muted py-12 text-center text-sm leading-relaxed sm:py-16">
          지금까지 해온 일의 구조를, 채용이라는 현장에서 계속 이어가고 싶습니다.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
