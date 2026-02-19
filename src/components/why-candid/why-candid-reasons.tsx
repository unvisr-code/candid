"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "양쪽을 모두 다룬 경험이 있다",
    description:
      "CX에서 고객(구직자)의 상황을 직접 응대했고, BD·SI에서 기업 측 요구사항을 조율했습니다. 채용 상담에서 구직자와 기업 양쪽을 이해하는 데 이 경험이 그대로 연결됩니다.",
  },
  {
    number: "02",
    title: "정보를 정리하는 게 핵심이라고 판단했다",
    description:
      "대시보드 구축, CX 문서화, SI 요구사항 정리 — 형태는 달랐지만 핵심은 같았습니다. 흩어진 정보를 구조화해서 의사결정에 쓸 수 있게 만드는 일. 채용에서도 같은 역량이 필요합니다.",
  },
  {
    number: "03",
    title: "운영 구조를 만드는 일을 계속 해왔다",
    description:
      "반복 문의를 패턴별로 분류하고, 자동화 플로우를 설계하고, 운영 체크리스트를 표준화했습니다. 채용 운영에서도 반복되는 프로세스를 효율화하는 데 같은 방식을 적용할 수 있습니다.",
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
