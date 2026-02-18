"use client";

import { useState } from "react";
import { ProjectSection } from "@/components/portfolio/project-section";
import type { PortfolioProject } from "@/data/portfolio";

const categories = [
  "전체",
  "Recruiting Ops / CRM",
  "Sales & Pipeline",
  "Analytics",
  "Automation / Tooling",
  "Content / Community",
] as const;

export function PortfolioFilter({
  projects,
}: {
  projects: PortfolioProject[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>("전체");

  const filtered =
    activeCategory === "전체"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
              activeCategory === cat
                ? "bg-accent border-accent text-white"
                : "border-border text-muted hover:border-accent hover:text-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      {filtered.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}
    </>
  );
}
