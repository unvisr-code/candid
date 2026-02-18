export type SiteContact = {
  email: string;
  phone: string;
};

export type HeroContent = {
  headline: string;
  subheadline: string;
};

export type LandingVisualConfig = {
  accent: string;
  accentStrong: string;
  background: string;
  foreground: string;
  muted: string;
};

export type LandingCta = {
  left: { label: "Resume"; href: "/resume"; external: true };
  right: { label: "Portfolio"; href: "/portfolio"; external: false };
};

export type NavItem = {
  label: "Resume" | "Portfolio" | "Contact" | "Why Candid";
  href: string;
  external?: boolean;
};

export const siteContact: SiteContact = {
  email: "contact@unvisr.kr",
  phone: "010-3017-3106",
};

export const heroContent: HeroContent = {
  headline: "현장의 병목을 실행 가능한 구조로 바꿉니다.",
  subheadline:
    "20살부터 학업과 실무를 병행하며 자동화와 데이터 기반 운영으로 문제를 해결해 왔습니다.",
};

export const landingVisualConfig: LandingVisualConfig = {
  accent: "#ec7d31",
  accentStrong: "#e86427",
  background: "#fef8f5",
  foreground: "#121212",
  muted: "#6c757d",
};

export const landingCta: LandingCta = {
  left: { label: "Resume", href: "/resume", external: true },
  right: { label: "Portfolio", href: "/portfolio", external: false },
};

export type SplitPanel = {
  label: string;
  headline: string;
  description: string;
  href: string;
};

export type ProfileBadge = {
  name: string;
  tagline: string;
  image: string;
};

export const splitPanels: { left: SplitPanel; right: SplitPanel } = {
  left: {
    label: "RESUME",
    headline: "현장의 문제를 '채용 가능한 구조'로 바꾸는 운영형 컨설턴트",
    description:
      "학교와 실무를 병행하며, 제한된 시간·리소스에서 성과를 내는 방법을 체득했습니다. 데이터/자동화/프로세스로 병목을 줄이고, 사람과 조직이 더 빠르게 매칭되게 돕습니다.",
    href: "/resume",
  },
  right: {
    label: "PORTFOLIO",
    headline: "실행으로 검증된 프로젝트와 성과",
    description:
      "CRM·세일즈·운영 데이터 기반으로 실질적인 전환/리텐션 개선을 만들었습니다.",
    href: "/portfolio",
  },
};

export const profileBadge: ProfileBadge = {
  name: "오영준",
  tagline: "Operations & BD | Candidate-first Recruiting Consultant (지원)",
  image: "/jun-optimized.jpg",
};

export const navItems: NavItem[] = [
  { label: landingCta.left.label, href: landingCta.left.href, external: true },
  {
    label: landingCta.right.label,
    href: landingCta.right.href,
    external: landingCta.right.external,
  },
  { label: "Why Candid", href: "/why-candid" },
  { label: "Contact", href: `mailto:${siteContact.email}`, external: true },
];
