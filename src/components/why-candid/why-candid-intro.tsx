"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BlurText from "@/components/reactbits/blur-text";

export function WhyCandidIntro() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const keywords = [
    "운영 시스템화(Ops)",
    "데이터 기반 실행(Analytics)",
    "후보자 중심 커뮤니케이션(Candidate-first)",
  ];

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
          text="구직자도 기업도 불확실이 너무 큰 시장에서, 그 불확실을 구조화합니다."
          animateBy="words"
          delay={60}
          className="inline"
        />
      </h1>

      <p className="text-muted mt-5 max-w-2xl text-sm leading-relaxed sm:text-base">
        학교와 회사를 병행하며 채용 시장의 체감 난이도(정보 부족, 기준 불명확,
        준비 방향 혼란)를 직접 겪었고, 그 과정에서 '데이터와 실행 루틴이 있으면
        결과가 달라진다'는 걸 확인했습니다.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {keywords.map((keyword, i) => (
          <motion.span
            key={keyword}
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.3, ease: "easeOut" }}
            className="border-accent/30 bg-accent/5 text-accent rounded-full border px-3 py-1.5 text-xs font-medium"
          >
            {keyword}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
}
