"use client";

import React, { useRef, useState } from "react";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "blue" | "cyan" | "violet" | "emerald";
  maxTilt?: number;
  scale?: number;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = "",
  glowColor = "blue",
  maxTilt = 8,
  scale = 1.02
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: "transform 0.1s ease-out"
    });

    const glareColorMap = {
      blue: "rgba(22, 140, 240, 0.2)",
      cyan: "rgba(6, 182, 212, 0.2)",
      violet: "rgba(139, 92, 246, 0.2)",
      emerald: "rgba(16, 185, 129, 0.2)"
    };

    setGlareStyle({
      opacity: 1,
      background: `radial-gradient(circle 280px at ${x}px ${y}px, ${glareColorMap[glowColor]}, transparent 70%)`,
      transition: "opacity 0.2s ease-out"
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)"
    });
    setGlareStyle({
      opacity: 0,
      transition: "opacity 0.5s ease-out"
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative preserve-3d will-change-transform ${className}`}
    >
      {/* Glare spotlight reflection layer */}
      <div
        className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] overflow-hidden"
        style={glareStyle}
      />
      {children}
    </div>
  );
};
