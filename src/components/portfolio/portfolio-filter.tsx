"use client";

import { useState } from "react";
import { ProjectSection } from "@/components/portfolio/project-section";
import type { PortfolioProject } from "@/data/portfolio";

const categories = ["전체", "CX", "운영", "데이터/자동화", "BD"] as const;

export function PortfolioFilter({
  projects,
}: {
  projects: PortfolioProject[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>("전체");
  const [showTier4, setShowTier4] = useState(false);

  const sorted = [...projects].sort((a, b) => a.order - b.order);
  const filtered =
    activeCategory === "전체"
      ? sorted
      : sorted.filter((p) => p.category === activeCategory);

  const mainProjects = filtered.filter((p) => p.order <= 6);
  const tier4Projects = filtered.filter((p) => p.order > 6);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full border px-4 py-2.5 text-xs font-semibold transition-colors ${
              activeCategory === cat
                ? "bg-accent border-accent text-white"
                : "border-border text-muted hover:border-accent hover:text-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      {mainProjects.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}
      {tier4Projects.length > 0 && (
        <div className="mt-8">
          <button
            onClick={() => setShowTier4(!showTier4)}
            className="border-border text-muted hover:border-accent hover:text-accent flex w-full items-center justify-center gap-2 rounded-xl border bg-white px-6 py-4 text-sm font-semibold transition-colors"
          >
            {showTier4 ? "기타 프로젝트 접기" : `기타 프로젝트 보기 (${tier4Projects.length})`}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform ${showTier4 ? "rotate-180" : ""}`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          {showTier4 && (
            <div className="mt-4">
              {tier4Projects.map((project) => (
                <ProjectSection key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
