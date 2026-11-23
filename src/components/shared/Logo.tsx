import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light" | "auto";
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "dark",
  showTagline = false
}) => {
  // If an image logo is provided in public/logo.svg or public/logo.png,
  // simply uncomment the Image tag below.
  /*
  return (
    <Link href="/" className={`inline-flex items-center gap-3 ${className}`}>
      <img src="/logo.svg" alt="VIAI Labs Logo" className="h-8 w-auto" />
    </Link>
  );
  */

  const isLightText = variant === "dark"; // on dark hero/navbar, text is white

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 transition-all select-none ${className}`}
      aria-label="VIAI Labs – Home"
    >
      {/* Geometric Neural 'V' Icon Mark */}
      <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#0B1224] via-[#111C38] to-[#168CF0] p-[1.5px] shadow-[0_0_15px_rgba(22,140,240,0.35)] group-hover:shadow-[0_0_22px_rgba(6,182,212,0.6)] transition-all duration-300">
        <div className="w-full h-full bg-[#080D1A] rounded-[10px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle glowing ambient pulse */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#168CF0]/20 to-[#06B6D4]/20 opacity-70 group-hover:opacity-100 transition-opacity" />
          
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110"
          >
            {/* Neural connection lines */}
            <path
              d="M7 8L16 24L25 8"
              stroke="url(#logo_grad_1)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 12L16 19L20 12"
              stroke="url(#logo_grad_2)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity="0.8"
            />
            {/* Synaptic nodes */}
            <circle cx="7" cy="8" r="2.2" fill="#06B6D4" />
            <circle cx="25" cy="8" r="2.2" fill="#168CF0" />
            <circle cx="16" cy="24" r="2.6" fill="#8B5CF6" />
            <circle cx="16" cy="14" r="1.5" fill="#38BDF8" />

            <defs>
              <linearGradient id="logo_grad_1" x1="7" y1="8" x2="25" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#06B6D4" />
                <stop offset="0.5" stopColor="#168CF0" />
                <stop offset="1" stopColor="#8B5CF6" />
              </linearGradient>
              <linearGradient id="logo_grad_2" x1="12" y1="12" x2="20" y2="19" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38BDF8" />
                <stop offset="1" stopColor="#168CF0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Typographic Identity */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-extrabold tracking-tight text-xl ${
              isLightText ? "text-white" : "text-[#0B1224]"
            }`}
          >
            VIAI
          </span>
          <span className="text-xs uppercase tracking-widest font-black px-1.5 py-0.5 rounded bg-gradient-to-r from-[#168CF0]/15 to-[#06B6D4]/15 border border-[#168CF0]/30 text-[#168CF0]">
            LABS
          </span>
        </div>
        {showTagline && (
          <span className="text-[10px] tracking-wider text-[#64748B] font-medium mt-0.5">
            Learn. Build. Innovate.
          </span>
        )}
      </div>
    </Link>
  );
};
