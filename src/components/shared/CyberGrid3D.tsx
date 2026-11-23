"use client";

import React from "react";

export const CyberGrid3D: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}>
      {/* 3D Horizon Grid Plane */}
      <div
        className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[200%] h-[350px] opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(22, 140, 240, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: "perspective(500px) rotateX(65deg)",
          transformOrigin: "center bottom",
          maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)"
        }}
      />

      {/* Ambient Neon Top Glows */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#168CF0]/10 via-[#06B6D4]/5 to-transparent rounded-full blur-[140px]" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-gradient-to-bl from-[#8B5CF6]/10 via-[#168CF0]/5 to-transparent rounded-full blur-[120px]" />
    </div>
  );
};
