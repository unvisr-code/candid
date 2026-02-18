"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "1",
    name: "Discover",
    description: "후보/기업 맥락 빠르게 수집(질문 리스트)",
  },
  {
    number: "2",
    name: "Diagnose",
    description: "병목/리스크를 3개로 좁힘",
  },
  {
    number: "3",
    name: "Design",
    description: "행동 계획(1~2주 단위)과 산출물(문서/템플릿)로 고정",
  },
  {
    number: "4",
    name: "Drive",
    description: "실행/피드백 루프, 지표로 점검",
  },
];

export function WhyCandidFramework() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-border border-b py-12 sm:py-16"
    >
      <h2 className="text-foreground text-xl font-bold tracking-[-0.02em] sm:text-2xl">
        일하는 방식
      </h2>
      <p className="text-accent mt-1 text-sm font-semibold uppercase tracking-wider">
        Candid Loop
      </p>

      {/* Desktop: horizontal flow with connectors between steps */}
      <div className="mt-8 hidden md:flex md:items-start">
        {steps.map((step, i) => (
          <div key={step.number} className="flex flex-1 items-start">
            {/* Step card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5, ease: "easeOut" }}
              className="flex flex-1 flex-col items-center text-center"
            >
              <div className="bg-accent/10 border-accent/30 flex h-10 w-10 items-center justify-center rounded-full border-2">
                <span className="text-accent text-sm font-bold">{step.number}</span>
              </div>
              <p className="text-accent mt-3 text-sm font-bold">{step.name}</p>
              <p className="text-muted mt-1 max-w-[120px] text-xs leading-relaxed">
                {step.description}
              </p>
            </motion.div>

            {/* Connector between steps */}
            {i < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.35 + i * 0.15, duration: 0.3 }}
                className="flex shrink-0 items-center pt-5"
                aria-hidden="true"
              >
                <div className="border-border w-6 border-t border-dashed" />
                <span className="text-border -ml-px text-xs">›</span>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile: vertical list */}
      <div className="mt-8 flex flex-col md:hidden">
        {steps.map((step, i) => (
          <div key={step.number}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5, ease: "easeOut" }}
              className="flex items-start gap-4"
            >
              <div className="bg-accent/10 border-accent/30 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2">
                <span className="text-accent text-sm font-bold">{step.number}</span>
              </div>
              <div className="flex-1 pt-1">
                <p className="text-accent text-sm font-bold">{step.name}</p>
                <p className="text-muted mt-1 text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>

            {i < steps.length - 1 && (
              <div
                className="border-border ml-5 h-5 border-l border-dashed"
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
