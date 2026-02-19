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
          text="주니어의 고민을 정리하고, 기업의 필요를 구조화해 서로를 더 잘 이해하게 돕고 싶습니다."
          animateBy="words"
          delay={60}
          className="inline"
        />
      </h1>

      <p className="text-muted mt-5 max-w-2xl text-sm leading-relaxed sm:text-base">
        저는 학업과 실무를 병행하며, 주니어가 마주하는 고민을 &quot;현실의
        시간표&quot; 위에서 다뤄봤습니다. 동시에 B2B 고객 응대 현장에서는 질문과
        요구가 어디서 생기는지, 어떤 정보가 누락될 때 일이 꼬이는지도 가까이에서
        봤습니다.
      </p>
      <p className="text-muted mt-3 max-w-2xl text-sm leading-relaxed sm:text-base">
        그래서 제가 반복해온 일은 단순합니다. 사람의 고민을 정리하고, 기업의
        요구를 구조화하고, 필요한 데이터를 다듬어 팀이 실행할 수 있게 만드는 것.
        캔디드에서는 이 강점을 더 많은 연결과 운영에 적용해보고 싶습니다.
      </p>
    </motion.section>
  );
}
