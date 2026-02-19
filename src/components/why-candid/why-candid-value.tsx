"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const candidateValues = [
  "경험을 '말'이 아니라 면접관이 납득할 수 있는 근거 있는 스토리로 정리하겠습니다.",
  "지원 우선순위와 다음 행동을 구체화해서, 준비가 막히는 구간을 함께 해결하겠습니다.",
  "상담 내용을 기록하고 추적해, 다음 만남에서 이어지는 준비가 되도록 돕겠습니다.",
];

const companyValues = [
  "후보자의 역량과 상황을 기업 담당자가 빠르게 이해할 수 있는 형태로 정리해 전달하겠습니다.",
  "포지션별 요구사항을 정확히 파악해, 맞지 않는 후보자는 솔직하게 조정하겠습니다.",
  "채용 과정에서 반복되는 문의·이슈를 구조화해, 기업 측의 운영 부담을 실질적으로 줄이겠습니다.",
];

export function WhyCandidValue() {
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
        제가 기여할 수 있는 일
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left: 구직자에게 */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="text-accent mb-4 text-sm font-bold uppercase tracking-wider">
            구직자에게
          </h3>
          <ul className="space-y-3">
            {candidateValues.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4, ease: "easeOut" }}
                className="flex items-start gap-2.5"
              >
                <span className="bg-accent mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                <p className="text-muted text-sm leading-relaxed">{item}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right: 기업에게 */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="text-accent mb-4 text-sm font-bold uppercase tracking-wider">
            기업에게
          </h3>
          <ul className="space-y-3">
            {companyValues.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.4, ease: "easeOut" }}
                className="flex items-start gap-2.5"
              >
                <span className="bg-accent mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                <p className="text-muted text-sm leading-relaxed">{item}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
