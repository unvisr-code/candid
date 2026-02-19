"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BlurText from "@/components/reactbits/blur-text";

export function WhyCandidIntro() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px 200px 0px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-border border-b py-8 sm:py-16"
    >
      <span className="bg-accent inline-block rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
        WHY CANDID
      </span>

      <h1 className="text-foreground mt-4 text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
        <BlurText
          text="AI 커리어 플랫폼에서 구직자의 고민을 가까이서 봤고, 창업하며 사람이 조직을 만든다는 것을 체감했습니다. 이제 그 경험을 채용 컨설팅으로 확장하고 싶습니다."
          animateBy="words"
          delay={60}
          className="inline"
        />
      </h1>

      <p className="text-muted mt-5 max-w-2xl text-sm leading-relaxed sm:text-base">
        채용 플랫폼 안쪽에서 구직자와 기업이 연결되는 흐름을 봤고, 직접 창업하며 적합한 사람 한 명이 팀의 방향을 바꾸는 것을 경험했습니다. 좋은 매칭은 스펙을 맞추는 게 아니라 사람의 맥락을 이해하는 과정이라는 확신이 생겼고, 이 일을 본업으로 하고 싶어 캔디드에 지원합니다.
      </p>
    </motion.section>
  );
}
