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
    headline: "채용 시장의 구조를 경험한 BD",
    description:
      "AI 커리어 플랫폼에서 구직자들의 고민과 탐색 과정을 가까이서 살펴봤고, 직접 창업하며 사람이 조직의 성과를 결정한다는 것을 체감했습니다. 고객의 니즈를 구조화해 팀이 실행할 수 있는 형태로 전달합니다.",
    href: "/resume",
    ctaLabel: "이력 보기",
  },
  right: {
    label: "PORTFOLIO",
    headline: "사람과 조직을 연결한 경험들",
    description:
      "AI 커리어 플랫폼 BD, B2B 고객 대응, 스타트업 운영에서 문제를 정의하고 해결한 과정을 정리했습니다.",
    href: "/portfolio",
    ctaLabel: "프로젝트 보기",
  },
};

export const profileBadge: ProfileBadge = {
  name: "오영준",
  tagline: "Business Development · Startup Operations",
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
