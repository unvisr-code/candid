import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { siteContact } from "@/data/site";

type ExperienceItem = {
  org: string;
  period: string;
  role: string;
  mission: string;
  actions: string[];
  impact: string;
};

type EducationItem = {
  name: string;
  status: string;
};

const summaryBullets = [
  "학업과 실무를 병행하며 우선순위를 빠르게 판단했고, 서비스 흐름을 데이터 기준으로 분해해 전환 구조를 정리해 왔습니다.",
  "B2B 고객의 요구를 기능·지표·우선순위 기준으로 재정의해 팀이 이해하기 쉬운 언어로 전달해 왔습니다.",
  "수집된 데이터를 그대로 두지 않고, 의사결정에 쓸 수 있는 형태로 가공·정리해 공유해 왔습니다.",
];

const experiences: ExperienceItem[] = [
  {
    org: "창업가 (LEANUP)",
    period: "2025.12 ~ 현재",
    role: "Founder",
    mission:
      "AI 기반 바이브코딩 환경이 확산되면서, 소규모 팀도 빠르게 웹/앱을 구현할 수 있는 시점이라고 판단했습니다. 기존 SI 시장의 높은 비용·긴 개발 기간 구조와 달리, 더 짧은 사이클로 실험 가능한 방식에 기회가 있다고 보았습니다.",
    actions: [
      "바이브코딩을 활용해 웹/앱 MVP를 구현하는 프로세스를 직접 설계하고 실행",
      "요구사항을 기능 단위로 분해해 범위·우선순위를 정의",
      "클라이언트 요청을 기능/일정/단계 기준으로 정리해 개발 문서로 관리",
      "2주 단위 구현–피드백 사이클을 기준으로 작업 흐름 정리",
    ],
    impact:
      "LeanUP의 웹/앱 SI 작업 방식을 '빠른 구현–짧은 피드백–재정의' 구조로 정리하며 운영 기준을 만들어가고 있습니다.",
  },
  {
    org: "(주) 커리어리 (시소)",
    period: "2025.07 ~ 현재",
    role: "Business Development",
    mission:
      "채용 플랫폼이 AI 기반 채용 에이전트 방향으로 개편되며, 데이터 추적·분석·운영 구조를 다시 설계해야 하는 시점이었습니다. 서비스 개편과 함께 사용자 행동 데이터, 전환 흐름, 이벤트 기준을 정리할 필요가 있었습니다.",
    actions: [
      "채용 AI 에이전트 흐름에 맞춰 사용자 여정 및 핵심 이벤트 구조 정리",
      "데이터 추적 기준 정의 및 분석 환경 셋업 지원(GA4, 이벤트 구조 정리 등)",
      "미팅/결정사항을 기능·데이터 기준으로 재정리해 다음 액션으로 연결",
      "행사 운영 및 프로그램 기획 지원, 운영 체크리스트·진행 흐름 정리",
      "B2B 제안 및 사업 기획 과정에서 구조·메시지·자료 정리",
    ],
    impact:
      "채용 AI 에이전트 전환 과정에서 사용자 여정–이벤트–전환 구조를 데이터 기준으로 정리하고, 서비스 운영이 지표 기반으로 돌아갈 수 있는 추적 체계를 정착시키고 있습니다.",
  },
  {
    org: "(주) Angelswing",
    period: "2022.08 ~ 2024.12",
    role: "CX Manager",
    mission:
      "드론 기반 B2B 솔루션을 제공하는 환경에서, 고객 문의는 기술적 맥락과 현장 상황을 함께 이해해야 했습니다.",
    actions: [
      "고객 문의를 기술/운영/계약 이슈 등으로 분류해 내부 전달",
      "현장 상황·제약 조건을 정리해 팀이 이해할 수 있는 언어로 재구성",
      "반복 문의를 문서화해 팀이 참고할 수 있는 기준으로 정리",
      "응대 과정에서 발생한 이슈를 기록해 후속 대응에 반영",
    ],
    impact:
      "고객 요구가 단순 전달이 아니라, 팀이 바로 이해할 수 있는 형태로 공유되도록 정리 기준을 유지했습니다.",
  },
  {
    org: "(주) Angelswing",
    period: "2022.05 ~ 2022.07",
    role: "CS Intern",
    mission:
      "초기 CS 단계에서 반복 문의와 처리 기준의 차이로 응대 흐름이 일관되지 않은 부분이 있었습니다.",
    actions: [
      "반복 질문을 유형화해 응대 기준 초안 정리",
      "기본 응대 흐름을 체크리스트 형태로 문서화",
      "내부 참고용 FAQ 형태로 정리",
    ],
    impact:
      "CS 응대 경험을 바탕으로 '문의 → 분류 → 전달 → 기록'의 기본 구조를 체득했습니다.",
  },
];

const educations: EducationItem[] = [
  {
    name: "세종대학교 나노신소재공학과",
    status: "재학 (휴학 예정)",
  },
  {
    name: "세종대학교 융합창업연계전공",
    status: "재학 (휴학 예정)",
  },
  {
    name: "한국디지털미디어고등학교",
    status: "졸업",
  },
];

export const metadata: Metadata = {
  title: "이력서",
  description:
    "오영준 이력서 페이지입니다. 경력, 요약, 학력과 연락처를 한 페이지에서 확인할 수 있습니다.",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-foreground mb-3 flex items-center gap-3 text-lg font-semibold tracking-[-0.02em]">
      <span className="bg-accent block h-5 w-1 rounded-full" aria-hidden />
      {children}
    </h2>
  );
}

export default function ResumePage() {
  return (
    <div className="bg-background min-h-screen">
      <main className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 sm:py-10">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Link
            href="/"
            className="text-muted border-border bg-surface hover:border-accent hover:text-accent rounded-full border px-4 py-2 text-xs font-medium"
          >
            홈
          </Link>
          <Link
            href="/portfolio"
            className="text-muted border-border bg-surface hover:border-accent hover:text-accent rounded-full border px-4 py-2 text-xs font-medium"
          >
            포트폴리오
          </Link>
          <Link
            href="/why-candid"
            className="text-muted border-border bg-surface hover:border-accent hover:text-accent rounded-full border px-4 py-2 text-xs font-medium"
          >
            지원 동기
          </Link>
        </div>

        <section className="border-border bg-surface overflow-hidden rounded-2xl border shadow-[0_12px_36px_rgba(18,18,18,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)]">
            <aside className="border-border border-b bg-[#fcfcfc] px-7 py-8 lg:border-b-0 lg:border-r">
              <div>
                <Image
                  src="/jun.jpg"
                  alt="오영준 프로필 사진"
                  width={132}
                  height={132}
                  className="rounded-full border-[3px] border-[rgba(236,125,49,0.28)] object-cover"
                  priority
                />
                <h1 className="text-foreground mt-4 text-[30px] leading-[1.2] font-bold tracking-[-0.03em]">
                  오영준
                </h1>
                <p className="text-muted mt-1 text-[15px] font-medium">Jun</p>
                <p className="text-foreground mt-3 text-[13px] font-medium">
                  Business Development · CX Operations
                </p>
              </div>

              <div className="mt-8">
                <p className="text-foreground mb-3 text-xs font-bold tracking-[0.08em] uppercase">
                  Profile
                </p>
                <ul className="text-foreground space-y-2 text-[13px] leading-relaxed">
                  <li>서비스와 조직이 빠르게 변하는 환경에서, 흐름을 데이터 기준으로 다시 정의하는 역할을 해 왔습니다.</li>
                  <li>B2B 고객 요구를 기능·지표 단위로 재정리하고, 사용자 행동 데이터를 기반으로 운영 구조를 맞추는 일을 해 왔습니다.</li>
                </ul>
              </div>

              <div className="mt-8">
                <p className="text-foreground mb-3 text-xs font-bold tracking-[0.08em] uppercase">
                  Contact
                </p>
                <ul className="space-y-2 text-[13px]">
                  <li className="text-foreground">
                    Tel.{" "}
                    <a href="tel:01030173106" className="hover:text-accent">
                      {siteContact.phone}
                    </a>
                  </li>
                  <li className="text-foreground">
                    Email.{" "}
                    <a
                      href={`mailto:${siteContact.email}`}
                      className="text-accent-strong hover:text-accent"
                    >
                      {siteContact.email}
                    </a>
                  </li>
                </ul>
              </div>
            </aside>

            <section className="px-6 py-8 sm:px-8">
              <div className="border-border mb-6 border-b pb-5">
                <SectionTitle>Summary</SectionTitle>
                <ul className="space-y-2">
                  {summaryBullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-foreground relative pl-4 text-sm leading-relaxed"
                    >
                      <span
                        className="bg-accent absolute top-[0.58rem] left-0 h-1.5 w-1.5 rounded-full"
                        aria-hidden
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-border mb-6 border-b pb-5">
                <SectionTitle>Experience</SectionTitle>
                <ul className="space-y-3">
                  {experiences.map((experience) => (
                    <li
                      key={`${experience.org}-${experience.period}`}
                      className="border-border rounded-xl border bg-white p-4"
                    >
                      <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                        <p className="text-foreground text-[15px] font-semibold tracking-[-0.01em]">
                          {experience.org}
                        </p>
                        <p className="text-muted text-xs font-semibold whitespace-nowrap">
                          {experience.period}
                        </p>
                      </div>
                      <p className="text-accent-strong mb-2 text-[13px] font-semibold">
                        {experience.role}
                      </p>
                      <div className="space-y-1.5 text-[13px] leading-relaxed">
                        <div className="flex gap-2">
                          <span className="text-accent w-[88px] shrink-0 font-semibold">Context</span>
                          <p className="text-foreground/80">{experience.mission}</p>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-foreground/50 w-[88px] shrink-0 font-semibold">Contribution</span>
                          <ul className="text-foreground/80 list-disc space-y-0.5 pl-4">
                            {experience.actions.map((a) => (
                              <li key={a}>{a}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-foreground/50 w-[88px] shrink-0 font-semibold">Outcome</span>
                          <p className="text-foreground/80">{experience.impact}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <SectionTitle>Education</SectionTitle>
                <ul className="space-y-3">
                  {educations.map((education) => (
                    <li
                      key={education.name}
                      className="border-border rounded-xl border bg-white p-4"
                    >
                      <p className="text-foreground text-sm font-semibold">
                        {education.name}
                      </p>
                      <p className="text-muted mt-1 text-[13px]">
                        {education.status}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
