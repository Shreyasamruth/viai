"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import { useApp } from "@/context/AppContext";

export const FinalCtaSection: React.FC = () => {
  const { companyConfig } = useApp();

  return (
    <section className="py-24 bg-[#0B1224] text-white relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#168CF0]/20 via-[#06B6D4]/15 to-[#8B5CF6]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111C38] border border-[#1E2C4F] text-xs font-semibold text-[#06B6D4]">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Next Cohort Registrations Now Open</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
          Your Next Innovation <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#168CF0] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">
            Starts Here.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Join engineers, builders, and aspiring tech leaders building applied intelligence, autonomous agents, and modern cloud platforms with VIAI Labs.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/courses"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#168CF0] to-[#06B6D4] hover:from-[#1379d0] hover:to-[#059eb8] shadow-[0_0_30px_rgba(22,140,240,0.5)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
          >
            <span>Explore Programmes</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm text-slate-200 bg-[#111C38] border border-[#1E2C4F] hover:bg-[#16254a] hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <span>Contact Our Team</span>
          </Link>
        </div>

        {/* Quick direct WhatsApp link */}
        <div className="pt-4 text-xs text-slate-400">
          Prefer instant chat?{" "}
          <a
            href={companyConfig.whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] hover:underline font-semibold inline-flex items-center gap-1"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-[#25D366]" />
            <span>Chat on WhatsApp directly</span>
          </a>
        </div>
      </div>
    </section>
  );
};
