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
  email: "unvisr@icloud.com",
  phone: "010-3017-3106",
};

export const heroContent: HeroContent = {
  headline: "사람을 만나고, 상황을 이해하고, 필요한 정보를 연결해왔습니다.",
  subheadline:
    "이 경험을 바탕으로, 사람과 조직이 더 잘 연결되는 과정에 기여하고 싶습니다.",
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
  ctaLabel?: string;
};

export type ProfileBadge = {
  name: string;
  tagline: string;
  image: string;
};

export const splitPanels: { left: SplitPanel; right: SplitPanel } = {
  left: {
    label: "RESUME",
    headline: "데이터로 구조를 설계하는 BD",
    description:
      "학업과 실무를 병행하며 현실적인 우선순위를 판단해 왔습니다. 고객의 요구를 기능과 지표 기준으로 재정리해 팀에 전달하고, 데이터는 의사결정 가능한 형태로 가공합니다.",
    href: "/resume",
    ctaLabel: "이력 보기",
  },
  right: {
    label: "PORTFOLIO",
    headline: "지금까지의 프로젝트들",
    description:
      "각 프로젝트에서 제가 맡은 역할, 정리 방식, 그리고 산출물을 중심으로 정리했습니다.",
    href: "/portfolio",
    ctaLabel: "프로젝트 보기",
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
