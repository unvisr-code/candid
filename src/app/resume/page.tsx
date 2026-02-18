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
  "반복되는 업무를 분류하고 정리해, 팀이 같은 기준으로 움직일 수 있도록 도왔습니다.",
  "운영 데이터를 보기 쉽게 정리하고, 의사결정에 필요한 정보를 빠르게 공유했습니다.",
  "고객/지원자/내부 이해관계자와의 소통 경험을 바탕으로, 상황을 정리해 전달하는 역할을 해왔습니다.",
];

const experiences: ExperienceItem[] = [
  {
    org: "창업가 (LEANUP)",
    period: "2025.12 ~ 현재",
    role: "Founder",
    mission: "바이브코딩으로 웹사이트 제작은 쉬워졌지만, 실제로 필요한 사람들에게는 여전히 '전문가의 도움'이 필요한 구간이 남아있다고 느꼈습니다.",
    action: "해당 간극을 줄이기 위해 소규모 SI 프로젝트를 수행했고, 동시에 '누구나 바이브코딩을 시작할 수 있는' 교육형 프로그램을 운영하고 있습니다.",
    impact: "클라이언트 5건을 확보했고, 프로젝트 수행 경험을 교육 콘텐츠/운영 방식으로 재정리하고 있습니다.",
  },
  {
    org: "(주) 커리어리 (시소)",
    period: "2025.07 ~ 현재",
    role: "Business Development",
    mission: "커리어리 플랫폼의 사업 성장을 위해, 현장에서 필요한 정보를 빠르게 정리하고 실행 가능한 형태로 만드는 일이 중요했습니다.",
    action: "행사/프로그램 운영을 지원했고, 참여자 응대 및 운영 흐름 정리에 참여했습니다.",
    impact: "프로그램 운영 과정에서 발생하는 이슈를 정리해 재발을 줄였고, 운영 효율을 높이는 방식으로 기여했습니다.",
  },
  {
    org: "(주) Angelswing",
    period: "2022.08 ~ 2024.12",
    role: "CX Manager",
    mission: "SaaS 제품의 고객이 늘어나면서, 문의 응대·온보딩·이슈 대응 전반을 담당하는 CX 역할이 필요했습니다.",
    action: "채널톡/전화/이메일로 들어오는 고객 문의를 직접 응대하고, 온보딩 가이드 작성, 유저가이드 리뉴얼, 챗봇 시나리오 설계, 운영 데이터 대시보드 구축, 업무 자동화 등 CX 전반의 과제를 주도했습니다.",
    impact: "고객 응대 품질을 안정화하고 팀의 운영 부담을 줄이는 데 기여했습니다. 해외 리서치/개발 팀과 협업하며 한국 사업부를 대표해 요구사항을 정리하고 커뮤니케이션을 수행했습니다.",
  },
  {
    org: "(주) Angelswing",
    period: "2022.05 ~ 2022.07",
    role: "CS Intern",
    mission: "CS 업무에서 반복 작업이 많아 처리 속도와 일관성이 흔들렸습니다.",
    action: "반복 업무를 정리하고, 자동화/표준화로 처리 흐름을 단순화했습니다.",
    impact: "업무 안정화에 기여했고, 이후 정규직 전환으로 이어졌습니다.",
  },
];

const educations: EducationItem[] = [
  {
    name: "세종대학교 나노신소재공학과",
    status: "재학 (휴학)",
  },
  {
    name: "세종대학교 융합창업연계전공",
    status: "재학 (휴학)",
  },
  {
    name: "한국디지털미디어고등학교 해킹방어과",
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
                  <li>사람·고객·팀을 상대하는 일을 해왔습니다. 주어진 조건 안에서 우선순위를 세우고, 반복되는 일을 정리해 더 나은 흐름을 만들었습니다.</li>
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
                <p className="text-foreground mb-3 text-sm leading-relaxed">
                  현장에서 고객/팀과 부딪히며 생기는 문제를 정리하고, 실행 가능한 형태로 바꾸는 일을 해왔습니다. 학교와 실무를 병행하면서 제한된 시간·리소스 안에서 성과를 내기 위해 우선순위와 커뮤니케이션의 중요성을 배웠습니다. 이런 경험을 바탕으로, 구직자 입장에서는 준비 방향을 정리하고 기업 입장에서는 후보자 정보를 이해하기 쉽게 정리하는 일에 기여하고 싶습니다.
                </p>
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
                          <span className="text-accent shrink-0 font-semibold">Context</span>
                          <p className="text-foreground/80">{experience.mission}</p>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-foreground/50 shrink-0 font-semibold">Contribution</span>
                          <p className="text-foreground/80">{experience.action}</p>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-foreground/50 shrink-0 font-semibold">Outcome</span>
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
