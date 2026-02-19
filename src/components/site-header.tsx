import Link from "next/link";
import { navItems } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="border-border/80 bg-surface/80 sticky top-0 z-40 border-b backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="text-foreground text-xs font-semibold tracking-[0.06em] sm:text-sm"
        >
          OH YOUNGJUN
        </Link>
        <nav aria-label="Global navigation" className="flex items-center gap-2 sm:gap-5">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                className="text-muted hover:text-accent text-xs font-medium sm:text-sm"
                rel="noreferrer"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-muted hover:text-accent text-xs font-medium sm:text-sm"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}

