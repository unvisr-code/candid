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
  action: string;
  impact: string;
};

type EducationItem = {
  name: string;
  status: string;
};

const summaryBullets = [
  "주니어 관점의 고민을 상황/우선순위/다음 행동으로 정리할 수 있습니다.",
  "B2B 고객 문의/요구를 구조화해 팀에 전달하며 오해를 줄였습니다.",
  "기업에 필요한 데이터를 정리·가공해 의사결정 가능한 형태로 제공했습니다.",
];

const experiences: ExperienceItem[] = [
  {
    org: "창업가 (LEANUP)",
    period: "2025.12 ~ 현재",
    role: "Founder",
    mission:
      "고객이 실제로 막히는 지점을 빠르게 파악하고, 짧은 주기로 실행·검증해야 했습니다.",
    action:
      "고객 문제/요구를 구조화해 MVP 범위를 정리하고, 우선순위를 나눠 팀이 바로 만들고 테스트할 수 있게 정리했습니다.",
    impact:
      "프로젝트를 확보했고, 경험을 재사용 가능한 문서/콘텐츠로 축적 중입니다.",
  },
  {
    org: "(주) 커리어리 (시소)",
    period: "2025.07 ~ 현재",
    role: "Business Development",
    mission:
      "파트너/내부 협업 과정에서 요구사항과 진행 상황이 분산되기 쉬웠습니다.",
    action:
      "요구사항/일정/결정사항을 한 곳에 모아 정리하고, 운영 중 발생하는 이슈를 기록해 다음 실행과 개선으로 연결했습니다.",
    impact:
      "운영 체크리스트가 개선되고 커뮤니케이션 누락이 줄었습니다.",
  },
  {
    org: "(주) Angelswing",
    period: "2022.08 ~ 2024.12",
    role: "CX Manager",
    mission:
      "B2B 고객 문의가 늘며, 응대 품질과 내부 전달의 일관성이 중요했습니다.",
    action:
      "문의/이슈를 유형화하고 우선순위를 정해 팀이 바로 처리 가능한 형태로 정리했습니다. 내부 공유 문서/가이드/템플릿을 정비해 커뮤니케이션 누락을 줄였습니다.",
    impact:
      "응대 흐름이 안정화되고, 반복 이슈 대응의 일관성이 높아졌습니다.",
  },
  {
    org: "(주) Angelswing",
    period: "2022.05 ~ 2022.07",
    role: "CS Intern",
    mission:
      "반복 문의 대응이 많고 처리 방식이 달라 효율이 떨어졌습니다.",
    action:
      "반복 질문을 묶어 템플릿과 체크리스트로 표준화해 초기 대응 속도와 품질을 맞췄습니다.",
    impact: "반복 업무가 단순화되고 대응 품질이 안정화되었습니다.",
  },
];

const educations: EducationItem[] = [
  {
    name: "세종대학교 나노신소재공학과",
    status: "휴학 예정",
  },
  {
    name: "세종대학교 융합창업연계전공",
    status: "휴학 예정",
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
            Back to Landing
          </Link>
          <Link
            href="/portfolio"
            className="text-muted border-border bg-surface hover:border-accent hover:text-accent rounded-full border px-4 py-2 text-xs font-medium"
          >
            Go Portfolio
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
            <aside className="border-border bg-[#fcfcfc] px-7 py-8 lg:border-r">
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
                  <li>학업과 실무를 병행하며 주니어의 고민을 현실적으로 이해하고, B2B 고객 응대와 데이터 정리 경험으로 고객–팀 사이를 연결해 실행을 만들어왔습니다.</li>
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
                          <p className="text-foreground/80">{experience.action}</p>
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
