import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { siteContact } from "@/data/site";

type ExperienceItem = {
  org: string;
  period: string;
  role: string;
  description: string;
};

type EducationItem = {
  name: string;
  status: string;
};

const summaryBullets = [
  "반복되는 이슈를 유형화하고, 사람 의존 업무를 기준·도구·루틴으로 고정",
  "단기 처리보다 재현 가능한 운영 구조를 우선해, 다음 분기에도 같은 품질이 나오도록 설계",
  "실행 과정은 수치와 근거 문서로 남겨, 이후 판단 비용을 절감",
];

const experiences: ExperienceItem[] = [
  {
    org: "창업가 (LEANUP)",
    period: "2025.12 ~ 현재",
    role: "Founder",
    description: "사업 방향 수립, 고객 문제 검증, 서비스 운영 구조 설계 및 실행",
  },
  {
    org: "(주) 커리어리 (시소)",
    period: "2025.07 ~ 현재",
    role: "Business Development",
    description: "사업 개발, B2B 세일즈, CRM 마케팅 운영",
  },
  {
    org: "(주) Angelswing",
    period: "2022.08 ~ 2024.12",
    role: "CX Manager",
    description: "고객 퍼널 설계, 고객문의 자동화, 운영 데이터 구축 및 관리",
  },
  {
    org: "(주) Angelswing",
    period: "2022.05 ~ 2022.07",
    role: "CS Intern",
    description: "데이터 처리, 고객문의 응대 지원",
  },
];

const educations: EducationItem[] = [
  {
    name: "세종대학교 나노신소재공학과",
    status: "재학 (휴학 예정)",
  },
  {
    name: "세종대학교 연계융합창업전공",
    status: "재학 (휴학 예정)",
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
                  현장의 병목을 실행 가능한 운영 시스템으로 바꿉니다. 사람에
                  의존하는 업무를 기준과 도구로 고정해, 팀이 지속적으로 같은
                  품질을 재현할 수 있는 구조를 설계합니다.
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
                      <p className="text-foreground text-[13px] leading-relaxed">
                        {experience.description}
                      </p>
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
