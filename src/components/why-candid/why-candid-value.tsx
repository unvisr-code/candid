"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const candidateValues = [
  "방향을 잃기 쉬운 주니어에게 '우선순위가 있는 준비 로드맵' 제시",
  "이력서/포트폴리오를 '경험 나열'이 아니라 '시장에 팔리는 스토리'로 구조화",
  "지원/면접 과정을 실험처럼 운영(가설→지원→피드백→개선 루프)",
];

const companyValues = [
  "JD를 '요구사항'이 아니라 '평가 가능한 기준'으로 재정의",
  "후보자 정보를 정리해 의사결정 비용(시간/리스크)을 줄임",
  "채용 파이프라인을 수치로 관리해 속도/품질을 함께 개선",
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
        제공하는 가치
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
