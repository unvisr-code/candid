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
  "반복 이슈를 프로세스/툴/루틴으로 표준화하여 팀 생산성을 끌어올림",
  "운영 데이터를 지표화하고, 의사결정 근거를 문서로 남겨 재현 가능한 실행 구조 구축",
  "'주니어/인턴'의 입장을 이해하며 상담→전략→실행까지 연결하는 커뮤니케이션 강점",
];

const experiences: ExperienceItem[] = [
  {
    org: "창업가 (LEANUP)",
    period: "2025.12 ~ 현재",
    role: "Founder",
    mission: "SI 사업에서 기획→개발 전환 구간의 병목 반복",
    action: "바이브코딩 기반 SI 운영 모델 설계, 짧은 시연 주기 납품 루프 구축",
    impact: "클라이언트 3건 확보, 대형 계약 협의 진행 중",
  },
  {
    org: "(주) 커리어리 (시소)",
    period: "2025.07 ~ 현재",
    role: "Business Development",
    mission: "분석 리드타임 과다 및 세일즈 파이프라인 비체계적 운영",
    action: "MCP 기반 데이터 분석 도구 + 세일즈 파이프라인 + CRM 구조 설계",
    impact: "반복 분석 리드타임 55분→2분 단축, 66개 핵심 질문 대시보드 구축",
  },
  {
    org: "(주) Angelswing",
    period: "2022.08 ~ 2024.12",
    role: "CX Manager",
    mission: "단일큐 문의 구조로 인한 응답 지연 및 운영 비효율",
    action: "문의 유형화 + 자동응답/라우팅 체계 설계 + 데이터 표준화",
    impact: "고객문의 60% 자동화, 7개 부서 데이터 통합 대시보드 구축",
  },
  {
    org: "(주) Angelswing",
    period: "2022.05 ~ 2022.07",
    role: "CS Intern",
    mission: "PDF 기반 가이드에서 정보 탐색 실패로 반복 문의 누적",
    action: "유저가이드 탐색형 구조로 재설계 + 챗봇 연계 셀프해결 동선 구축",
    impact: "반복문의 1차 흡수 구조 확립, CX 운영 부담 감소",
  },
];

const educations: EducationItem[] = [
  {
    name: "세종대학교 나노신소재공학과",
    status: "재학 (휴학)",
  },
  {
    name: "세종대학교 연계융합창업전공",
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
                  창업가 · Business Development · CX Operations
                </p>
              </div>

              <div className="mt-8">
                <p className="text-foreground mb-3 text-xs font-bold tracking-[0.08em] uppercase">
                  Profile
                </p>
                <ul className="text-foreground space-y-2 text-[13px] leading-relaxed">
                  <li>현장의 병목을 실행 가능한 운영 시스템으로 바꾸는 문제 해결자</li>
                  <li>20살부터 학업과 실무를 병행하며, 맡은 과제를 끝까지 책임지는 방식으로 일해 왔습니다</li>
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
                  현장의 병목을 &apos;실행 가능한 운영 시스템&apos;으로 바꾸는
                  운영/BD형 문제해결자입니다. 학교와 회사를 병행하며 제한된
                  리소스에서 성과를 내는 방식(우선순위·자동화·데이터)을
                  체득했고, 이 경험을 바탕으로 구직자에게는 불확실을 줄이는
                  상담/전략을, 기업에게는 채용 의사결정의 비용을 줄이는 정보
                  구조화를 제공합니다.
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
                          <span className="text-accent shrink-0 font-semibold">미션</span>
                          <p className="text-foreground/80">{experience.mission}</p>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-foreground/50 shrink-0 font-semibold">액션</span>
                          <p className="text-foreground/80">{experience.action}</p>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-foreground/50 shrink-0 font-semibold">임팩트</span>
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
