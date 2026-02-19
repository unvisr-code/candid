"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const candidateValues = [
  "고민을 상황/제약/목표로 정리해 명확하게 만들기",
  "선택지를 비교해 결정 기준을 세우고 다음 행동까지 연결",
  "상담 내용을 기록·정리해 준비가 끊기지 않게 만들기",
];

const companyValues = [
  "요청/이슈를 한 번에 이해할 수 있게 구조화·요약",
  "기준/체크리스트를 만들어 커뮤니케이션 비용 감소",
  "필요한 데이터를 정리·가공해 의사결정 속도 향상",
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
        {/* Left: 주니어(사용자)에게 */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="text-accent mb-4 text-sm font-bold uppercase tracking-wider">
            주니어(사용자)에게
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

        {/* Right: 기업(조직)에게 */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="text-accent mb-4 text-sm font-bold uppercase tracking-wider">
            기업(조직)에게
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
