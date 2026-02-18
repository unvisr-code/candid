"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function WhyCandidCta() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-12 sm:py-16"
    >
      <p className="text-foreground/80 mb-6 max-w-xl text-sm leading-relaxed sm:text-base">
        캔디드에서 '후보자/기업 모두가 만족하는 매칭'의 운영 방식을 함께 만들고
        싶습니다.
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <motion.a
          href="mailto:contact@unvisr.kr?subject=Coffee Chat"
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          className="bg-accent hover:bg-accent-strong rounded-full px-6 py-3 text-sm font-semibold text-white transition-colors"
        >
          Coffee Chat
        </motion.a>
        <motion.a
          href="mailto:contact@unvisr.kr"
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
          className="border-border text-foreground hover:border-accent hover:text-accent rounded-full border px-6 py-3 text-sm font-semibold transition-colors"
        >
          Email
        </motion.a>
      </div>
    </motion.section>
  );
}
