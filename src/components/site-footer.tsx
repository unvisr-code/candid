import { siteContact } from "@/data/site";

type SiteFooterProps = {
  className?: string;
  variant?: "fixedSlim" | "default";
};

function withClass(base: string, className?: string) {
  return className ? `${base} ${className}` : base;
}

export function SiteFooter({ className, variant = "default" }: SiteFooterProps) {
  const currentYear = new Date().getFullYear();
  const phoneHref = siteContact.phone.replace(/-/g, "");

  if (variant === "fixedSlim") {
    return (
      <footer
        className={withClass(
          "fixed right-0 bottom-0 left-0 z-50 border-t border-[rgba(23,23,23,0.12)] bg-[rgba(254,248,245,0.95)] backdrop-blur-sm",
          className,
        )}
      >
        <div
          id="contact"
          className="mx-auto flex h-[var(--landing-footer-height)] w-full max-w-[1280px] flex-wrap items-center justify-center overflow-hidden px-3 text-[10px] font-medium tracking-[0.02em] text-[rgba(23,23,23,0.68)] sm:px-6 sm:text-xs"
        >
          <a
            href={`mailto:${siteContact.email}`}
            aria-label={`메일 보내기: ${siteContact.email}`}
            className="hover:text-accent truncate"
          >
            {siteContact.email}
          </a>
          <span className="px-2 text-[rgba(23,23,23,0.3)]">|</span>
          <a
            href={`tel:${phoneHref}`}
            aria-label={`전화 걸기: ${siteContact.phone}`}
            className="hover:text-accent"
          >
            {siteContact.phone}
          </a>
          <span className="px-2 text-[rgba(23,23,23,0.3)]">|</span>
          <p>© {currentYear} Oh Youngjun</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className={className}>
      <div
        id="contact"
        className="border-border/80 text-muted mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-2 border-t px-5 py-8 text-sm sm:flex-row sm:items-center sm:px-8"
      >
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${siteContact.email}`}
            aria-label={`메일 보내기: ${siteContact.email}`}
            className="hover:text-accent"
          >
            {siteContact.email}
          </a>
          <span className="text-border">|</span>
          <a
            href={`tel:${phoneHref}`}
            aria-label={`전화 걸기: ${siteContact.phone}`}
            className="hover:text-accent"
          >
            {siteContact.phone}
          </a>
        </div>
        <p>© {currentYear} Oh Youngjun</p>
      </div>
    </footer>
  );
}
