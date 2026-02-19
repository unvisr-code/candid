"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const candidateValues = [
  {
    main: "커리어 방향이 명확하지 않을 때, 경험과 강점을 함께 정리해 현실적인 선택지를 구조화해드릴 수 있습니다.",
    evidence: "커리어리에서 구직자들의 고민을 가까이서 살펴보며, 어떤 정보가 결정을 돕고 어디서 막히는지를 파악한 경험이 있습니다.",
  },
  {
    main: "포지션을 단순히 소개하는 것이 아니라, 그 회사의 단계·문화·성장 가능성을 함께 전달해 후보자가 납득할 수 있는 판단 기준을 만들겠습니다.",
    evidence: "스타트업을 직접 운영하며, 채용 단계에서 후보자에게 무엇을 말해야 하는지를 창업자 관점에서 알고 있습니다.",
  },
];

const companyValues = [
  {
    main: "채용 니즈를 단순 JD 수준이 아니라, 조직의 현재 단계·팀 구조·비즈니스 맥락 수준에서 파악하고, 실제로 필요한 인재상을 함께 정의하겠습니다.",
    evidence: "앤젤스윙에서 고객이 \"말하는 것\"과 \"진짜 필요한 것\"을 구분하며 2년간 B2B 커뮤니케이션을 수행한 경험이 있습니다.",
  },
  {
    main: "스타트업 생태계에 대한 실전 이해를 바탕으로, 상황에 맞는 현실적인 채용 전략을 함께 고민하겠습니다.",
    evidence: "직접 스타트업을 운영하며 초기 단계의 리소스 제약, 우선순위 판단, 팀 빌딩 과정을 경험했습니다.",
  },
];

export function WhyCandidValue() {
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
      <h2 className="text-foreground mb-8 text-xl font-bold tracking-[-0.02em] sm:text-2xl">
        제가 기여할 수 있는 일
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left: 후보자에게 */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="text-accent mb-4 text-sm font-bold uppercase tracking-wider">
            후보자에게
          </h3>
          <ul className="space-y-4">
            {candidateValues.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4, ease: "easeOut" }}
                className="flex flex-col gap-1.5"
              >
                <div className="flex items-start gap-2.5">
                  <span className="bg-accent mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                  <p className="text-foreground/80 text-sm leading-relaxed">{item.main}</p>
                </div>
                <p className="text-muted/60 ml-4 text-xs leading-relaxed">→ {item.evidence}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right: 기업(고객사)에게 */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="text-accent mb-4 text-sm font-bold uppercase tracking-wider">
            기업(고객사)에게
          </h3>
          <ul className="space-y-4">
            {companyValues.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.4, ease: "easeOut" }}
                className="flex flex-col gap-1.5"
              >
                <div className="flex items-start gap-2.5">
                  <span className="bg-accent mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                  <p className="text-foreground/80 text-sm leading-relaxed">{item.main}</p>
                </div>
                <p className="text-muted/60 ml-4 text-xs leading-relaxed">→ {item.evidence}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
