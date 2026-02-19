"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import BlurText from "@/components/reactbits/blur-text";
import SplitText from "@/components/reactbits/split-text";
import type { PortfolioProject } from "@/data/portfolio";

function TagList({
  items,
  variant,
}: {
  items: string[];
  variant: "skill" | "capability";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="flex flex-wrap gap-1.5">
      {items.map((item, i) => (
        <motion.span
          key={item}
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.04, duration: 0.3, ease: "easeOut" }}
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${
            variant === "skill"
              ? "border-border bg-surface border text-foreground"
              : "bg-accent/8 text-accent border border-accent/20"
          }`}
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
}

function NarrativeStep({
  label,
  text,
  accent,
}: {
  label: string;
  text: string;
  accent?: boolean;
}) {
  return (
    <div className="flex gap-3 text-sm">
      <span
        className={`mt-0.5 shrink-0 font-semibold ${accent ? "text-accent" : "text-foreground/60"}`}
      >
        {label}
      </span>
      <p className="text-foreground/80 leading-relaxed">{text}</p>
    </div>
  );
}

export function ProjectSection({ project }: { project: PortfolioProject }) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const [expanded, setExpanded] = useState(false);

  const orderLabel = String(project.order).padStart(2, "0");

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-border border-b py-12 sm:py-16 lg:py-20"
    >
      {/* 상단 바: 번호 + 소속/기간 */}
      <div className="text-muted mb-4 flex items-center gap-3 text-sm">
        <span className="text-accent font-mono font-bold">{orderLabel}</span>
        <span className="bg-border h-px flex-1" />
        <span className="whitespace-nowrap">
          {project.org} · {project.period}
        </span>
      </div>

      {/* 커버 이미지 */}
      {project.coverImage && (
        <div className="bg-surface-alt border-border mb-6 flex justify-center overflow-hidden rounded-lg border">
          <Image
            src={project.coverImage}
            alt={`${project.title} 프로젝트 커버`}
            width={800}
            height={400}
            className="h-auto max-h-80 w-auto max-w-full sm:max-h-96"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      )}

      {/* 제목 */}
      <h2 className="text-foreground text-xl font-bold tracking-[-0.02em] sm:text-2xl lg:text-3xl">
        <BlurText
          text={project.title}
          animateBy="words"
          delay={60}
          className="inline"
        />
      </h2>

      {/* 핵심 문장 */}
      <p className="portfolio-headline text-muted mt-3">
        {project.headline}
      </p>

      {/* 2컬럼: 지표 + 서사 흐름 */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-[180px_1fr] md:gap-8">
        {/* 좌: 지표 */}
        <div className="flex flex-col items-start">
          <SplitText
            text={project.resultValue}
            className="text-accent text-3xl font-extrabold tracking-[-0.02em] sm:text-4xl lg:text-5xl"
            delay={40}
          />
          <p className="text-muted mt-1 text-sm">{project.resultLabel}</p>
        </div>

        {/* 우: 서사 흐름 (문제→접근→결과) */}
        <div className="space-y-3">
          {project.problemDef && (
            <NarrativeStep label="한 줄 요약" text={project.problemDef} accent />
          )}
          {project.approach && (
            <NarrativeStep label="내 역할" text={project.approach} />
          )}
          <NarrativeStep label="무엇이 달라졌는지" text={project.summary} />
          {project.execution && (
            <NarrativeStep label="정리 방법" text={project.execution} />
          )}
        </div>
      </div>

      {/* 더 보기 (학습 + 확장관점) */}
      {(project.learning || project.extensionView) && (
        <div className="mt-6">
          <button
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            className="text-muted hover:text-accent flex items-center gap-1 text-xs font-medium transition-colors"
          >
            <span>{expanded ? "접기" : project.images?.length ? "이미지 & 더 보기" : "더 보기"}</span>
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              ▾
            </motion.span>
          </button>
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="mt-4 space-y-4">
                  {project.images?.length > 0 && (
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {project.images.map((src) => (
                        <div key={src} className="bg-surface-alt border-border overflow-hidden rounded-lg border">
                          <Image
                            src={src}
                            alt={`${project.title} 스크린샷`}
                            width={600}
                            height={340}
                            className="h-auto w-full object-cover"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  {project.learning && (
                    <blockquote className="border-accent/30 text-muted border-l-2 pl-4 text-sm italic">
                      {project.learning}
                    </blockquote>
                  )}
                  {project.extensionView && (
                    <div className="flex gap-3 text-sm">
                      <span className="text-foreground/50 mt-0.5 shrink-0 font-semibold">
                        확장
                      </span>
                      <p className="text-foreground/70 leading-relaxed">
                        {project.extensionView}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* 캔디드 연결 */}
      {project.candidConnection && (
        <div className="bg-accent/5 border-accent/20 mt-6 rounded-lg border p-4">
          <span className="bg-accent rounded px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-white uppercase">
            이 경험이 도움이 되는 방식
          </span>
          <p className="text-foreground/80 mt-2 text-sm leading-relaxed">
            {project.candidConnection}
          </p>
        </div>
      )}

      {/* 태그 */}
      <div className="mt-8 space-y-3">
        <TagList items={project.skills} variant="skill" />
      </div>
    </motion.section>
  );
}
