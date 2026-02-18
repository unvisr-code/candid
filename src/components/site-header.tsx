import Link from "next/link";
import { navItems } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="border-border/80 bg-surface/80 sticky top-0 z-40 border-b backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="text-foreground text-sm font-semibold tracking-[0.06em]"
        >
          OH YOUNGJUN
        </Link>
        <nav aria-label="Global navigation" className="flex items-center gap-5">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                className="text-muted hover:text-accent text-sm font-medium"
                rel="noreferrer"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-muted hover:text-accent text-sm font-medium"
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

