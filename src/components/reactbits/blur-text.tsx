"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  animateBy?: "words" | "letters";
  animationFrom?: Record<string, unknown>;
  animationTo?: Record<string, unknown>;
  easing?: string;
  threshold?: number;
  rootMargin?: string;
  onAnimationComplete?: () => void;
}

export default function BlurText({
  text,
  className = "",
  delay = 80,
  animateBy = "words",
  animationFrom = { opacity: 0, filter: "blur(12px)", transform: "translate3d(0,20px,0)" },
  animationTo = { opacity: 1, filter: "blur(0px)", transform: "translate3d(0,0,0)" },
  easing = "power2.out",
  threshold = 0.1,
  rootMargin = "-50px",
  onAnimationComplete,
}: BlurTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const elementsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const animatedRef = useRef(false);

  const setRef = useCallback(
    (el: HTMLSpanElement | null, index: number) => {
      elementsRef.current[index] = el;
    },
    [],
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = elementsRef.current.filter(Boolean) as HTMLSpanElement[];
    if (elements.length === 0) return;

    elements.forEach((el) => {
      gsap.set(el, animationFrom);
    });

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      elements.forEach((el) => {
        gsap.set(el, animationTo);
      });
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          gsap.to(elements, {
            ...animationTo,
            duration: 0.7,
            ease: easing,
            stagger: delay / 1000,
            onComplete: onAnimationComplete,
          });
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [text, delay, easing, threshold, rootMargin, animationFrom, animationTo, onAnimationComplete]);

  const items = animateBy === "words" ? text.split(" ") : text.split("");

  return (
    <span ref={containerRef} className={className} style={{ display: "inline-block" }}>
      {items.map((item, i) => (
        <span key={i} style={{ display: "inline-block", whiteSpace: "pre" }}>
          <span
            ref={(el) => setRef(el, i)}
            style={{ display: "inline-block", willChange: "transform, opacity, filter" }}
          >
            {item}
          </span>
          {animateBy === "words" && i < items.length - 1 && (
            <span style={{ display: "inline-block" }}>&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
}
