"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "주니어의 고민이 쌓이는 곳",
    description:
      "요즘 시장에서 주니어는 정보와 기준이 부족해 더 흔들립니다. 캔디드는 그 구간에서 실제로 도움이 필요한 사람들을 만날 수 있는 곳이라고 생각했습니다.",
  },
  {
    number: "02",
    title: "장기적으로 '좋은 고객'이 되는 사람들",
    description:
      "주니어 시기의 첫 이직/성장은 이후 커리어 전반에 영향을 줍니다. 지금의 도움은 장기적으로 캔디드의 신뢰와 지속 고객으로 이어질 수 있다고 봤습니다.",
  },
  {
    number: "03",
    title: "사람을 만나며 데이터를 쌓을 수 있는 구조",
    description:
      "많은 구직자를 만나며 고민 패턴과 준비 과정을 기록/정리하면, 상담 품질을 높이고 더 나은 매칭을 만들 수 있다고 믿습니다.",
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
