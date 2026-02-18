"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profileBadge } from "@/data/site";

export function ProfileBadge() {
  return (
    <motion.div
      className="relative z-30 flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: 0.1,
        type: "spring",
        stiffness: 180,
        damping: 18,
      }}
    >
      {/* Backdrop blur card */}
      <div className="flex flex-col items-center gap-2 rounded-[24px] bg-[rgba(255,255,255,0.65)] px-5 py-4 shadow-[0_12px_48px_rgba(0,0,0,0.06)] ring-1 ring-[rgba(255,255,255,0.8)] backdrop-blur-xl md:px-6 md:py-5">
        {/* Glowing ring + photo */}
        <div className="relative">
          {/* Animated glow ring */}
          <motion.div
            className="absolute -inset-[5px] rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, #ec7d31, #f5a623, #e86427, #ec7d31)",
              opacity: 0.5,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -inset-[5px] rounded-full blur-[8px]"
            style={{
              background:
                "conic-gradient(from 180deg, #ec7d31, #f5a623, #e86427, #ec7d31)",
              opacity: 0.3,
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />

          {/* Photo */}
          <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full border-[3px] border-white shadow-[0_4px_20px_rgba(232,100,39,0.2)] md:h-[120px] md:w-[120px]">
            <Image
              src={profileBadge.image}
              alt={`${profileBadge.name} 프로필 사진`}
              fill
              priority
              sizes="120px"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-1"
        >
          <span className="text-xl font-extrabold tracking-tight text-[var(--foreground)] md:text-2xl">
            {profileBadge.name}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-[10px] font-medium tracking-[0.06em] text-[var(--text-muted)] text-center max-w-[200px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {profileBadge.tagline}
        </motion.p>
      </div>
    </motion.div>
  );
}
