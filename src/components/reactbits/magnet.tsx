"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useSpring } from "framer-motion";

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  activeTransition?: { type: string; stiffness: number; damping: number; mass: number };
  inactiveTransition?: { type: string; stiffness: number; damping: number; mass: number };
  className?: string;
}

export default function Magnet({
  children,
  padding = 60,
  disabled = false,
  magnetStrength = 0.35,
  className = "",
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useSpring(0, { stiffness: 200, damping: 18, mass: 0.5 });
  const y = useSpring(0, { stiffness: 200, damping: 18, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (disabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const dist = Math.sqrt(distX * distX + distY * distY);
    const range = Math.max(rect.width, rect.height) / 2 + padding;

    if (dist < range) {
      x.set(distX * magnetStrength);
      y.set(distY * magnetStrength);
      if (!isHovered) setIsHovered(true);
    } else {
      x.set(0);
      y.set(0);
      if (isHovered) setIsHovered(false);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y, display: "inline-flex" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
