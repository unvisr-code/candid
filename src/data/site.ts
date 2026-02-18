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
  label: "Resume" | "Portfolio" | "Contact";
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
    headline: "이력과 경험을 확인하세요",
    description:
      "20살부터 학업과 실무를 병행하며 쌓아온 경험과 역량을 소개합니다.",
    href: "/resume",
  },
  right: {
    label: "PORTFOLIO",
    headline: "프로젝트와 성과를 확인하세요",
    description:
      "자동화와 데이터 기반 운영으로 만들어낸 실질적인 성과를 보여드립니다.",
    href: "/portfolio",
  },
};

export const profileBadge: ProfileBadge = {
  name: "오영준",
  tagline: "Operations & Business Development",
  image: "/jun-optimized.jpg",
};

export const navItems: NavItem[] = [
  { label: landingCta.left.label, href: landingCta.left.href, external: true },
  {
    label: landingCta.right.label,
    href: landingCta.right.href,
    external: landingCta.right.external,
  },
  { label: "Contact", href: `mailto:${siteContact.email}`, external: true },
];
