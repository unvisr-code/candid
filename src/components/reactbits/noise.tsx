"use client";

import { motion } from "framer-motion";

interface NoiseProps {
  patternSize?: number;
  patternScaleX?: number;
  patternScaleY?: number;
  patternRefreshInterval?: number;
  patternAlpha?: number;
}

export default function Noise({
  patternSize = 200,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 4,
  patternAlpha = 18,
}: NoiseProps) {
  const svgDataUri = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${patternSize}' height='${patternSize}'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='${patternAlpha / 100}'/%3E%3C/svg%3E`;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[1]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundImage: `url("${svgDataUri}")`,
        backgroundRepeat: "repeat",
        backgroundSize: `${patternSize * patternScaleX}px ${patternSize * patternScaleY}px`,
        animation:
          patternRefreshInterval > 0
            ? `noise-shift ${patternRefreshInterval}s steps(2) infinite`
            : undefined,
      }}
    >
      <style>{`
        @keyframes noise-shift {
          0% { transform: translate(0, 0); }
          50% { transform: translate(-5%, -5%); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </motion.div>
  );
}
