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
          <span
            className="bg-accent rounded-full px-4 py-2 text-xs font-medium text-white"
          >
            Why Candid
          </span>
        </div>

        {/* Sections */}
        <WhyCandidIntro />
        <WhyCandidReasons />
        <WhyCandidValue />
        {/* 지원 동기 편지 */}
        <section className="border-border border-b py-8 sm:py-16">
          <h2 className="text-foreground mb-4 text-xl font-bold tracking-[-0.02em] sm:mb-6 sm:text-2xl">
            캔디드에 지원하며
          </h2>
          <div className="bg-[#fffaf6] border-[rgba(236,125,49,0.35)] rounded-xl border-2 p-6 shadow-[0_4px_20px_rgba(236,125,49,0.08)] sm:p-8">
            <div className="text-foreground/80 space-y-4 text-sm leading-relaxed sm:text-base">
              <p>안녕하세요, 오영준입니다.</p>
              <p>
                채용 컨설팅에 관심을 갖게 된 건 커리어리에서였지만, 확신이 생긴 건 LEANUP을 창업하면서였습니다.
                팀원을 찾고, 역할을 맞추고, 프로젝트에 배치하는 과정에서 가장 몰입했던 순간이
                &ldquo;사람을 연결하는 순간&rdquo;이었다는 걸 깨달았습니다.
              </p>
              <p>
                캔디드의 블로그와 컨설턴트 인터뷰를 읽으면서, 단순 매칭이 아니라
                고객사의 문제를 구조적으로 진단하고 해결하는 팀이라는 것을 알게 됐습니다.
                저도 그렇게 일하고 싶습니다.
              </p>
              <p>
                아직 채용 컨설팅 경력은 없지만, 채용 시장의 구조를 본 경험,
                사람의 니즈를 파악하고 전달해온 경험, 그리고 직접 창업한 경험을 가지고
                빠르게 성장하겠습니다.
              </p>
            </div>
            <p className="text-muted mt-6 text-right text-sm">오영준 드림</p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
