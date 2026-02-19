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
  headline: "사람을 만나고, 상황을 이해하고, 필요한 정보를 연결해왔습니다.",
  subheadline:
    "CX·BD·운영 현장에서 쌓은 방식으로 채용 상담에 기여하고 싶습니다.",
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
    headline: "현장에서 쌓은 경험과 방식",
    description:
      "고객 응대, 행사 운영, 데이터 정리 — 역할은 달랐지만 핵심은 같았습니다. 사람의 상황을 파악하고, 필요한 정보를 정리해서 전달하는 일이었습니다.",
    href: "/resume",
  },
  right: {
    label: "PORTFOLIO",
    headline: "실행으로 남긴 프로젝트들",
    description:
      "각 프로젝트에서 어떻게 문제를 정의하고, 무엇을 만들었는지 기록했습니다.",
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
