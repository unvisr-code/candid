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
    headline: "고객과 팀 사이에서,\n정보를 정리해\n실행을 만드는 사람",
    description:
      "주니어의 고민을 현실적으로 이해하고, B2B 고객 응대와 데이터 정리로 고객–팀 사이를 연결해왔습니다.",
    href: "/resume",
    ctaLabel: "Résumé 보기",
  },
  right: {
    label: "PORTFOLIO",
    headline: "실행으로 남긴 프로젝트들",
    description:
      "어떻게 정리해 다음 액션이 생겼는지를 기록했습니다.",
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
