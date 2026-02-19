"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    number: "01",
    title:
      "구직자의 고민을 안쪽에서 살펴봤습니다",
    description:
      "커리어리에서 AI 커리어 플랫폼의 BD를 하며, AI 상담·커뮤니티·채용공고를 아우르는 서비스 안에서 구직자들의 고민과 탐색 과정을 가까이서 살펴봤습니다. 좋은 매칭은 스펙을 맞추는 게 아니라, 구직자가 실제로 무엇을 고민하는지 이해하는 데서 시작한다는 걸 알게 됐습니다.",
  },
  {
    number: "02",
    title:
      "기업과 사람 사이에서 커뮤니케이션하는 일을 해왔습니다",
    description:
      "앤젤스윙에서 2년 4개월간 B2B 기업 고객의 문의를 받아 내부 팀에 전달하는 역할을 했습니다. 고객이 말하는 것과 진짜 필요한 것이 다를 때, 그 차이를 파악하고 올바른 형태로 전달하는 경험을 반복했습니다. 이는 채용 컨설턴트가 기업의 채용 니즈를 파악하고 후보자에게 전달하는 과정과 구조적으로 동일합니다.",
  },
  {
    number: "03",
    title: "직접 창업하며, 사람이 조직을 만든다는 것을 체감했습니다",
    description:
      "LEANUP을 창업하면서 팀원을 모집하고, 각자의 강점에 맞는 역할을 정의하고, 프로젝트에 배치하는 과정을 직접 수행했습니다. 적합한 사람이 합류했을 때 팀의 속도가 달라지는 경험을 통해, 채용이 스타트업의 생존과 직결된다는 것을 몸으로 알게 됐습니다.",
  },
];

export function WhyCandidReasons() {
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
