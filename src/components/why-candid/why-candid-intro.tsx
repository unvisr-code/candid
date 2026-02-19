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
          text="주니어의 고민을 정리하고, 팀이 이해할 수 있는 형태로 전달하는 일을 하고 싶습니다."
          animateBy="words"
          delay={60}
          className="inline"
        />
      </h1>

      <p className="text-muted mt-5 max-w-2xl text-sm leading-relaxed sm:text-base">
        저는 학업과 실무를 병행하면서, 주니어 입장에서 무엇이
        막히는지(시간·정보·우선순위)를 현실적으로 체감했습니다. 또 B2B 고객 응대
        현장에서, 요청이 흩어지면 커뮤니케이션 비용이 커지고 실행이 느려질 수
        있다는 것도 가까이에서 봤습니다.
      </p>
      <p className="text-muted mt-3 max-w-2xl text-sm leading-relaxed sm:text-base">
        그래서 저는 정보와 요청사항을 정리해 공유하고, 필요한 데이터는 의사결정
        가능한 형태로 가공해 팀이 더 빠르게 움직일 수 있도록 돕는 역할을 해보고
        싶습니다.
      </p>
    </motion.section>
  );
}
