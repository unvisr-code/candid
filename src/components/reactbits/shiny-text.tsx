"use client";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export default function ShinyText({
  text,
  disabled = false,
  speed = 3,
  className = "",
}: ShinyTextProps) {
  return (
    <span
      className={className}
      style={{
        backgroundImage: disabled
          ? "none"
          : "linear-gradient(120deg, rgba(255,255,255,0) 40%, rgba(236,125,49,0.32) 50%, rgba(255,255,255,0) 60%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        display: "inline-block",
        animation: disabled ? "none" : `shiny-text ${speed}s linear infinite`,
      }}
    >
      {text}
      <style>{`
        @keyframes shiny-text {
          0% { background-position: 100% center; }
          100% { background-position: -100% center; }
        }
      `}</style>
    </span>
  );
}
