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
          text="주니어 채용이 어려운 시장에서도, 도움이 필요한 사람은 계속 생긴다고 믿습니다."
          animateBy="words"
          delay={60}
          className="inline"
        />
      </h1>

      <p className="text-muted mt-5 max-w-2xl text-sm leading-relaxed sm:text-base">
        학교와 실무를 병행하며 주니어/인턴이 겪는 준비의 어려움과 불확실을
        가까이서 경험했습니다. 그 경험을 바탕으로 더 많은 사람을 만나고, 고민과
        선택 과정을 정리해 더 나은 연결을 만들고 싶습니다.
      </p>
    </motion.section>
  );
}
