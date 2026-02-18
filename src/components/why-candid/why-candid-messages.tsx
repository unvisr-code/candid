"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const messages = [
  "지금 시장이 어렵다는 건 사실이지만, 전략 없이 버티는 게 더 큰 손해다.",
  "내 경험을 '성과'로 바꾸는 구조(문제-행동-결과)를 만들면, 경쟁이 달라진다.",
  "지원은 운이 아니라 확률 게임이고, 확률은 데이터와 루틴으로 올릴 수 있다.",
];

export function WhyCandidMessages() {
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
        주니어/인턴에게 전하는 메시지
      </h2>

      <div className="space-y-4">
        {messages.map((message, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.5, ease: "easeOut" }}
            className="border-accent/30 border-l-2 pl-4"
          >
            <p className="text-foreground/80 text-sm italic leading-relaxed sm:text-base">
              "{message}"
            </p>
          </motion.blockquote>
        ))}
      </div>
    </motion.section>
  );
}
