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
  headline: "학교와 현장을 병행하며, 낯선 문제도 끝까지 정리해온 사람",
  subheadline:
    "제한된 시간 안에서 우선순위를 세우고, 필요한 일을 끝까지 완수하는 법을 배웠습니다.",
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
    headline: "학교와 현장을 병행하며, 낯선 문제도 끝까지 정리해온 사람",
    description:
      "학교와 실무를 병행하며 제한된 시간 안에서 우선순위를 세우고, 필요한 일을 끝까지 완수하는 법을 배웠습니다. 그 과정에서 직접 느낀 고민과 시행착오를 바탕으로, 비슷한 상황에 있는 사람들의 준비와 선택을 돕고 싶습니다.",
    href: "/resume",
  },
  right: {
    label: "PORTFOLIO",
    headline: "실행으로 남긴 프로젝트와 기록",
    description:
      "CRM, 세일즈, 운영, 고객 커뮤니케이션 경험을 바탕으로 실제 업무에서 개선을 만들었습니다.",
    href: "/portfolio",
  },
};

export const profileBadge: ProfileBadge = {
  name: "오영준",
  tagline: "Business Development · CX Operations",
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
