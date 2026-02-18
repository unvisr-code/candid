"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "후보자 중심 경험을 '프로세스'로 바꾸는 조직",
    description:
      "캔디드는 후보자 경험을 단순 서비스가 아니라 반복 가능한 프로세스로 설계합니다. 저는 현장의 반복 문제를 구조화해 운영 시스템으로 바꿔온 경험이 이 방향과 맞닿아 있습니다.",
  },
  {
    number: "02",
    title: "속도와 밀도가 필요한 스타트업 채용",
    description:
      "스타트업 채용은 빠른 판단과 밀도 높은 실행이 필요합니다. 저는 제한된 리소스에서 우선순위를 정하고 자동화로 실행 속도를 높여온 운영 구조화에 강점이 있습니다.",
  },
  {
    number: "03",
    title: "증거 기반으로 신뢰를 만드는 방식",
    description:
      "상담과 매칭은 결국 신뢰입니다. 저는 데이터, 문서, 산출물로 의사결정 근거를 남기는 방식으로 일해왔고, 이 습관이 후보자와 기업 모두에게 확신을 제공합니다.",
  },
];

export function WhyCandidReasons() {
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
      <h2 className="text-foreground mb-8 text-xl font-bold tracking-[-0.02em] sm:text-2xl">
        왜 캔디드인가
      </h2>

      <div className="space-y-4">
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.number}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.5, ease: "easeOut" }}
            className="border-border rounded-xl border bg-white p-6"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="bg-accent/10 text-accent rounded-md px-2 py-0.5 font-mono text-xs font-bold">
                {reason.number}
              </span>
              <h3 className="text-foreground text-sm font-semibold sm:text-base">
                {reason.title}
              </h3>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              {reason.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
