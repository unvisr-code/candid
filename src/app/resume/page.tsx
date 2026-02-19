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

const experiences: ExperienceItem[] = [
  {
    org: "(주) 커리어리 (시소)",
    period: "2025.07 ~ 현재",
    role: "Business Development",
    mission:
      "AI 상담·커뮤니티·채용공고를 통합한 커리어 플랫폼에서, 구직자들이 어떤 고민을 안고 들어오고 어떤 정보를 거쳐 결정을 내리는지를 가까이서 관찰하고, 이를 서비스 개선과 사업 기획에 반영하는 것이 주요 업무였습니다.",
    actions: [
      "구직자가 플랫폼에서 어떤 경로로 탐색하고 어디서 멈추는지를 행동 데이터로 파악하고, 단계별 이탈 원인을 정리",
      "GA4 이벤트 구조를 설계하고 분석 환경을 셋업해, 구직자 행동을 지표로 모니터링할 수 있는 체계 구축",
      "B2B 기업 고객 대상 제안·사업 기획 과정에서 고객사의 채용 니즈를 분석하고, 제안 구조와 메시지를 설계",
      "채용 관련 행사를 운영하며, 구직자와 기업이 직접 만나는 접점을 기획",
    ],
    impact:
      "구직자들이 어떤 과정을 거쳐 고민하고 결정을 내리는지를 데이터와 현장 양쪽에서 파악하고, 이를 팀이 참고할 수 있는 기준으로 정리했습니다.",
  },
  {
    org: "창업가 (LEANUP)",
    period: "2025.10 ~ 현재",
    role: "Founder",
    mission:
      "AI 바이브코딩 환경의 확산으로 소규모 팀도 빠르게 프로덕트를 구현할 수 있는 시점이라 판단했습니다. 창업 과정에서 팀원을 모으고, 각자의 강점에 맞는 역할을 정의하고, 클라이언트와의 접점을 직접 관리하는 경험을 했습니다.",
    actions: [
      "팀 빌딩: 4명의 팀원을 모집하고, 각자의 역량과 성향에 맞춰 세일즈/디자인/개발/기획 역할을 정의·배치",
      "클라이언트 BD: 잠재 고객을 리서치하고, 미팅을 통해 니즈를 파악한 뒤 프로젝트 범위와 일정을 합의하여 계약 체결",
      "프로젝트 운영: 클라이언트 요청을 기능/일정/단계 기준으로 구조화하고, 2주 단위 피드백 사이클로 작업 흐름 관리",
      "비즈니스 모델: SI 개발 + 교육 서비스의 이중 수익 구조를 설계하고, 각 서비스별 세일즈 프로세스 정립",
    ],
    impact:
      "창업 4개월 만에 복수의 클라이언트 프로젝트를 수주하며, 사람을 모으고, 역할을 정의하고, 조직이 실행하는 구조를 직접 만든 경험을 쌓았습니다.",
  },
  {
    org: "(주) Angelswing",
    period: "2022.08 ~ 2024.12",
    role: "CX Manager",
    mission:
      "드론 기반 B2B 솔루션 환경에서, 고객 문의는 기술적 역량과 현장 상황을 함께 이해해야 했습니다. 고객(기업)의 진짜 니즈를 파악하고, 이를 내부 팀이 실행 가능한 형태로 전달하는 것이 핵심 역할이었습니다.",
    actions: [
      "고객 문의를 기술/운영/계약 등 이슈 유형별로 분류하고, 각 담당 팀에 맥락을 포함해 전달하는 커뮤니케이션 구조 설계",
      "고객의 현장 상황과 제약 조건을 파악해, 팀이 이해할 수 있는 비즈니스 언어로 재구성하여 전달",
      "반복 문의를 패턴화하고 문서화하여, 팀 전체가 참고할 수 있는 대응 기준과 FAQ 체계 구축",
      "응대 과정에서 발생하는 이슈를 체계적으로 기록하고, 후속 대응과 프로세스 개선에 활용",
    ],
    impact:
      "2년 4개월간 B2B 고객의 니즈를 파악하고 내부에 전달하는 과정을 반복하며, \"고객이 말하는 것\"과 \"고객이 진짜 필요한 것\"을 구분하는 역량을 쌓았습니다.",
  },
  {
    org: "(주) Angelswing",
    period: "2022.05 ~ 2022.07",
    role: "CS Intern",
    mission:
      "초기 CS 단계에서 반복 문의와 처리 기준의 차이로 응대 품질이 일관되지 않는 문제가 있었습니다.",
    actions: [
      "반복 질문을 유형화하고 응대 기준 초안을 정리",
      "기본 응대 흐름을 체크리스트로 문서화",
      "내부 참고용 FAQ를 구축해 팀 응대 효율 향상",
    ],
    impact:
      "CS 현장에서 '문의 → 분류 → 전달 → 기록'의 기본 구조를 체득하고, 이후 CX Manager로 승격하는 기반을 만들었습니다.",
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
          <span
            className="bg-accent rounded-full px-4 py-2 text-xs font-medium text-white"
          >
            이력
          </span>
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
            Why Candid
          </Link>
        </div>

        <section className="border-border bg-surface overflow-hidden rounded-2xl border shadow-[0_12px_36px_rgba(18,18,18,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)]">
            <aside className="border-border border-b bg-[#fcfcfc] px-5 py-6 sm:px-7 sm:py-8 lg:border-b-0 lg:border-r">
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
                  Business Development · Startup Operations
                </p>
              </div>

              <div className="mt-8">
                <p className="text-foreground mb-3 text-xs font-bold tracking-[0.08em] uppercase">
                  Profile
                </p>
                <ul className="text-foreground space-y-2 text-[13px] leading-relaxed">
                  <li>AI 커리어 플랫폼에서 구직자들의 고민과 탐색 과정을 가까이서 살펴봤고, B2B 고객의 니즈를 팀이 실행할 수 있는 형태로 전달하는 일을 해왔습니다.</li>
                  <li>스타트업을 직접 창업하며, 적합한 사람이 조직의 성과를 결정한다는 것을 체감했습니다.</li>
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

            <section className="px-4 py-6 sm:px-8 sm:py-8">
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
                      <div className="space-y-2.5 text-[13px] leading-relaxed sm:space-y-1.5">
                        <div className="flex flex-col gap-1 sm:flex-row sm:gap-2">
                          <span className="text-accent font-semibold sm:w-[88px] sm:shrink-0">Context</span>
                          <p className="text-foreground/80">{experience.mission}</p>
                        </div>
                        <div className="flex flex-col gap-1 sm:flex-row sm:gap-2">
                          <span className="text-foreground/50 font-semibold sm:w-[88px] sm:shrink-0">Contribution</span>
                          <ul className="text-foreground/80 list-disc space-y-0.5 pl-4">
                            {experience.actions.map((a) => (
                              <li key={a}>{a}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col gap-1 sm:flex-row sm:gap-2">
                          <span className="text-foreground/50 font-semibold sm:w-[88px] sm:shrink-0">Outcome</span>
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
