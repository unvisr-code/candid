"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { capabilityDetails, portfolioProjects } from "@/data/portfolio";
import type { CapabilityDetail } from "@/data/portfolio";

function CapabilityCard({
  cap,
  index,
}: {
  cap: CapabilityDetail;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px 100px 0px" });
  const linkedProject = portfolioProjects.find(
    (p) => p.evdId === cap.linkedEvdId,
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      className="border-border bg-surface rounded-lg border p-5"
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-foreground text-base font-bold">{cap.name}</h3>
        <span className="text-accent text-sm font-semibold">
          {Math.round(cap.proficiency * 100)}%
        </span>
      </div>

      {/* 프로그레스 바 */}
      <div className="bg-border/40 mb-3 h-1.5 overflow-hidden rounded-full">
        <motion.div
          className="bg-accent h-full rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${cap.proficiency * 100}%` } : {}}
          transition={{ delay: index * 0.08 + 0.3, duration: 0.8, ease: "easeOut" }}
        />
      </div>

      <p className="text-foreground/80 mb-3 text-sm leading-relaxed">
        {cap.publicDesc}
      </p>

      {linkedProject && (
        <div className="text-muted flex items-center gap-1.5 text-xs">
          <span className="bg-accent/10 text-accent rounded px-1.5 py-0.5 font-medium">
            대표 경험
          </span>
          <span>{linkedProject.title}</span>
        </div>
      )}
    </motion.div>
  );
}

export function CapabilitySection() {
  return (
    <section className="border-border border-b py-12 sm:py-16 lg:py-20">
      <div className="text-muted mb-2 text-xs font-semibold tracking-widest uppercase">
        Core Capabilities
      </div>
      <h2 className="text-foreground mb-3 text-xl font-bold tracking-[-0.02em] sm:text-2xl">
        역량 프로필
      </h2>
      <p className="text-muted mb-8 text-sm leading-relaxed sm:text-base">
        프로젝트에서 반복적으로 발휘한 핵심 역량 6가지입니다.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {capabilityDetails.map((cap, i) => (
          <CapabilityCard key={cap.name} cap={cap} index={i} />
        ))}
      </div>
    </section>
  );
}
