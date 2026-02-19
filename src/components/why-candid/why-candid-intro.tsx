"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BlurText from "@/components/reactbits/blur-text";

export function WhyCandidIntro() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-border border-b py-12 sm:py-16"
    >
      <span className="bg-accent inline-block rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
        WHY CANDID
      </span>

      <h1 className="text-foreground mt-4 text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
        <BlurText
          text="채용은 구직자와 기업 양쪽을 동시에 이해해야 제대로 연결할 수 있다고 생각합니다."
          animateBy="words"
          delay={60}
          className="inline"
        />
      </h1>

      <p className="text-muted mt-5 max-w-2xl text-sm leading-relaxed sm:text-base">
        CX 현장에서 고객의 상황을 파악하고, BD에서 기업과 소통하고, SI에서
        요구사항을 정리했습니다. 채용 상담의 구조도 같다고 느꼈습니다 — 양쪽
        상황을 이해하고, 필요한 정보를 연결하는 일.
      </p>
    </motion.section>
  );
}
