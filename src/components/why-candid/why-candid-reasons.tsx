"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    number: "01",
    title:
      "주니어의 고민을 '현실적으로' 정리해 줄 수 있다고 생각했습니다",
    description:
      "학업과 실무를 병행하며, 준비 과정의 고민이 단순 조언이 아니라 우선순위와 실행 계획이 필요하다는 걸 체감했습니다. 저는 상담에서 상황 정리 → 선택지 정리 → 다음 행동 정리까지 함께 만드는 데 강점이 있습니다.",
  },
  {
    number: "02",
    title: "B2B 고객 응대 경험으로, 기업의 필요를 구조화할 수 있습니다",
    description:
      "고객의 말은 종종 산발적이고, 내부 팀은 결정에 필요한 형태를 원합니다. 저는 고객의 요구/이슈를 정리해 전달하고, 오해를 줄이는 일을 해왔습니다.",
  },
  {
    number: "03",
    title:
      "데이터를 '의사결정 가능한 형태'로 가공한 경험이 있습니다",
    description:
      "기업에 필요한 정보는 수집보다 정리와 가공에서 가치가 생긴다고 배웠습니다. 저는 데이터를 정리해 공유 가능한 형태로 만들고, 다음 액션을 빠르게 뽑아내는 데 익숙합니다.",
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
