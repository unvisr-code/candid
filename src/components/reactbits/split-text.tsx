"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  animationFrom?: Record<string, unknown>;
  animationTo?: Record<string, unknown>;
  easing?: string;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "right" | "center";
  onLetterAnimationComplete?: () => void;
}

export default function SplitText({
  text,
  className = "",
  delay = 50,
  animationFrom = { opacity: 0, transform: "translate3d(0,40px,0)" },
  animationTo = { opacity: 1, transform: "translate3d(0,0,0)" },
  easing = "power2.out",
  threshold = 0.1,
  rootMargin = "-50px",
  textAlign = "left",
  onLetterAnimationComplete,
}: SplitTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const animatedRef = useRef(false);

  const setLetterRef = useCallback(
    (el: HTMLSpanElement | null, index: number) => {
      lettersRef.current[index] = el;
    },
    [],
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const letters = lettersRef.current.filter(Boolean) as HTMLSpanElement[];
    if (letters.length === 0) return;

    // Set initial state
    letters.forEach((letter) => {
      gsap.set(letter, animationFrom);
    });

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      letters.forEach((letter) => {
        gsap.set(letter, animationTo);
      });
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          gsap.to(letters, {
            ...animationTo,
            duration: 0.6,
            ease: easing,
            stagger: delay / 1000,
            onComplete: onLetterAnimationComplete,
          });
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [
    text,
    delay,
    easing,
    threshold,
    rootMargin,
    animationFrom,
    animationTo,
    onLetterAnimationComplete,
  ]);

  const words = text.split(" ");
  let globalIndex = 0;

  return (
    <span
      ref={containerRef}
      className={className}
      style={{ textAlign, display: "inline-block" }}
    >
      {words.map((word, wordIdx) => (
        <span key={wordIdx} style={{ display: "inline-block", whiteSpace: "pre" }}>
          {word.split("").map((char) => {
            const idx = globalIndex++;
            return (
              <span
                key={idx}
                ref={(el) => setLetterRef(el, idx)}
                style={{ display: "inline-block", willChange: "transform, opacity" }}
              >
                {char}
              </span>
            );
          })}
          {wordIdx < words.length - 1 && (
            <span style={{ display: "inline-block" }}>&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
}
