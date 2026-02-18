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
                학교와 현장을 병행하면서, 준비가 부족한 채로 면접장에 가고 방향을 모른 채 이력서를 쓰던 시간이 있었습니다. 돌이켜보면, 그때 옆에서 &quot;지금 이 순서로 준비하면 돼&quot;라고 말해주는 사람이 있었다면 훨씬 덜 헤맸을 것 같습니다.
              </p>
              <p>
                캔디드가 하는 일이 바로 그 역할이라고 생각했습니다. 주니어에게는 막막한 준비 과정을 정리해주고, 기업에게는 후보자를 이해하기 쉬운 형태로 전달하는 일. 저는 그 과정에서 사람을 만나고, 이야기를 듣고, 정보를 정리하는 일을 잘 할 수 있다고 생각합니다.
              </p>
              <p>
                고객 응대, 행사 운영, 데이터 정리, 교육 프로그램 운영까지 — 지금까지의 경험은 모두 &quot;사람의 상황을 이해하고, 필요한 정보를 정리해서 전달하는 일&quot;이었습니다. 캔디드에서 더 많은 사람을 만나고, 그 경험을 더 나은 연결로 바꾸는 과정에 함께하고 싶습니다.
              </p>
            </div>
            <p className="text-muted mt-6 text-right text-sm">오영준 드림</p>
          </div>
        </section>

        {/* 마무리 */}
        <p className="text-muted py-12 text-center text-sm leading-relaxed sm:py-16">
          캔디드에서 더 많은 사람을 만나고, 더 나은 연결을 만드는 과정에 함께하고 싶습니다.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
