"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const candidateValues = [
  "고민을 상황/제약/우선순위 기준으로 정리해 명확하게 만들기",
  "선택지를 비교할 때 필요한 정보를 정리해 결정 부담 줄이기",
  "대화 내용을 기록·정리해 다음 행동으로 이어지도록 돕기",
];

const companyValues = [
  "고객 요청/이슈를 한 번에 이해 가능한 형태로 정리·요약",
  "커뮤니케이션에 필요한 기준/체크리스트를 정리해 공유",
  "필요한 데이터를 정리·가공해 의사결정에 쓰기 쉬운 형태로 제공",
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
