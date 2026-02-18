"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

interface PixelTransitionProps {
  isActive: boolean;
  color?: string;
  gridSize?: number;
  className?: string;
}

export default function PixelTransition({
  isActive,
  color = "rgba(232,100,39,0.04)",
  gridSize = 8,
  className = "",
}: PixelTransitionProps) {
  const cols = gridSize;
  const rows = gridSize;

  const delays = useMemo(
    () => Array.from({ length: cols * rows }, (_, i) => {
      // Deterministic pseudo-random based on index
      const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
      return x - Math.floor(x);
    }),
    [cols, rows],
  );

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {delays.map((d, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{
            duration: 0.35,
            delay: isActive ? d * 0.3 : (1 - d) * 0.2,
            ease: "easeInOut",
          }}
          style={{ background: color }}
        />
      ))}
    </div>
  );
}
