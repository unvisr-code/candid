"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    number: "01",
    title:
      "학업과 실무를 병행하며, 주니어 관점의 막힘을 체감했습니다",
    description:
      "학업과 일을 함께 하며, 시간이 부족한 상황에서 어떤 정보가 우선인지 정리하는 습관이 생겼습니다. 이 경험을 바탕으로, 고민이 길어질 때 핵심을 정리해 다음 단계로 넘어가게 돕는 역할을 하고 싶습니다.",
  },
  {
    number: "02",
    title:
      "B2B 고객 응대 경험으로, 요청을 정리해 전달하는 일을 해왔습니다",
    description:
      "고객 문의는 종종 흩어져 들어오고, 팀은 같은 정보를 같은 기준으로 이해해야 실행이 빨라집니다. 저는 문의/요청을 정리해 전달하고, 필요한 맥락을 빠르게 공유하는 일을 해왔습니다.",
  },
  {
    number: "03",
    title: "데이터를 정리·가공해 공유하는 일을 해왔습니다",
    description:
      "업무에서 필요한 데이터는 '수집'보다 '정리와 가공'에서 더 큰 가치가 생긴다고 느꼈습니다. 저는 데이터를 보기 쉬운 형태로 정리해 공유하고, 팀이 바로 참고할 수 있게 만드는 쪽을 선호합니다.",
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
