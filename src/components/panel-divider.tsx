"use client";

import { motion } from "framer-motion";

interface PanelDividerProps {
  orientation?: "vertical" | "horizontal";
}

export function PanelDivider({ orientation = "vertical" }: PanelDividerProps) {
  const isVertical = orientation === "vertical";

  if (!isVertical) {
    return (
      <motion.div
        className="relative z-10 mx-auto h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--border) 20%, var(--accent) 50%, var(--border) 80%, transparent)",
          transformOrigin: "center",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
    );
  }

  return (
    <div className="absolute left-1/2 top-0 bottom-0 z-10 -translate-x-1/2">
      {/* Main line */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
        style={{
          background:
            "linear-gradient(180deg, transparent, var(--border) 15%, var(--accent) 50%, var(--border) 85%, transparent)",
          transformOrigin: "center",
        }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Decorative dots */}
      {[20, 40, 60, 80].map((pct) => (
        <motion.div
          key={pct}
          className="absolute left-1/2 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-[var(--border)]"
          style={{ top: `${pct}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 + pct * 0.003 }}
        />
      ))}
    </div>
  );
}
