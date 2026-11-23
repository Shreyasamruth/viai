"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card3D } from "@/components/shared/Card3D";
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  GraduationCap,
  Building2,
  FileCheck2,
  Sparkles,
  Search,
  ExternalLink,
  Lock,
  ArrowRight
} from "lucide-react";

export const SocialProofSection: React.FC = () => {
  const router = useRouter();
  const [credentialQuery, setCredentialQuery] = useState("");

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentialQuery.trim()) {
      router.push(`/verify/${credentialQuery.trim()}`);
    } else {
      router.push("/verify");
    }
  };

  const pillars = [
    {
      icon: <FileCheck2 className="w-5 h-5 text-[#168CF0]" />,
      title: "Verifiable Digital IDs",
      description: "Every certificate issued carries an immutable cryptographic Credential ID verifiable on our registry.",
      glow: "blue" as const
    },
    {
      icon: <Award className="w-5 h-5 text-[#06B6D4]" />,
      title: "Portfolio Deliverables",
      description: "Graduation requires working Git repos, Docker containers, and live web services—not passive quiz clicks.",
      glow: "cyan" as const
    },
    {
      icon: <Building2 className="w-5 h-5 text-[#8B5CF6]" />,
      title: "Institutional Alignment",
      description: "Our syllabus models reference accredited university curricula (GIET, LTSU Punjab) to match academic rigor.",
      glow: "violet" as const
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-emerald-400" />,
      title: "Ethical Placement Ethics",
      description: "We empower learners with authentic competitive advantages, transparently rejecting misleading placement promises.",
      glow: "emerald" as const
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F6F8FC] text-[#0B1224] border-b border-slate-200 relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-100/40 via-cyan-100/30 to-purple-100/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#168CF0] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#168CF0]" />
            <span>Academic & Industry Standards</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1224] tracking-tight">
            Built on Rigor, Transparency & Verifiability
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            In compliance with our commitment to educational integrity, VIAI Labs does not publish inflated placement metrics. We stand on verified curriculum rigor, digital credential verification, and genuine engineering outcomes.
          </p>
        </div>

        {/* 4 3D Pillars of Integrity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => (
            <Card3D key={idx} glowColor={pillar.glow} maxTilt={9} scale={1.03}>
              <div className="h-full bg-white/90 backdrop-blur-sm p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 space-y-3.5 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 shadow-inner">
                    {pillar.icon}
                  </div>
                  <h3 className="font-extrabold text-[#0B1224] text-base mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-2 text-[10px] font-mono text-slate-400">
                  STANDARD_0{idx + 1}
                </div>
              </div>
            </Card3D>
          ))}
        </div>

        {/* Live Credential Verification Spotlight Box */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0B1224] via-[#0E172E] to-[#111C38] text-white border border-[#1E2C4F] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#168CF0]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#168CF0]/20 border border-[#168CF0]/40 text-cyan-300 text-xs font-mono font-bold">
                <Lock className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span>IMMUTABLE CREDENTIAL REGISTRY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Verify Student Certificates & Capstones Live
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Enter any official VIAI Labs Credential ID (e.g. <span className="font-mono text-cyan-300 font-bold">VIAI-AI-2025-0891</span>) to inspect cryptographically authenticated course completions and verified GitHub deliverables.
              </p>
            </div>

            <div className="lg:col-span-5">
              <form onSubmit={handleVerify} className="space-y-3">
                <div className="relative">
                  <input
                    type="text"
                    value={credentialQuery}
                    onChange={(e) => setCredentialQuery(e.target.value)}
                    placeholder="e.g. VIAI-AI-2025-0891"
                    className="w-full bg-[#080D1A] border border-[#1E2C4F] focus:border-[#168CF0] rounded-xl px-4 py-3.5 text-xs text-white placeholder-slate-500 font-mono focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-2 bottom-2 px-4 rounded-lg bg-gradient-to-r from-[#168CF0] to-[#06B6D4] hover:from-[#1379d0] hover:to-[#059eb8] text-white text-xs font-bold transition-all flex items-center gap-1.5"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>Verify</span>
                  </button>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Try: <button type="button" onClick={() => setCredentialQuery("VIAI-AI-2025-0891")} className="text-cyan-300 hover:underline font-mono">VIAI-AI-2025-0891</button></span>
                  <Link href="/verify" className="text-cyan-400 hover:underline flex items-center gap-1">
                    <span>Registry Home</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Verified Student Feedback Showcase */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-md">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-[#168CF0] uppercase tracking-wider">
              Student & Fellow Feedback
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0B1224] mt-1">
              Verified Experiences from Recent Cohorts
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              All feedback is verified directly through completed capstone evaluations and enrolled student portal records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#0B1224] text-white flex items-center justify-center font-bold text-sm shadow-md">
                  AV
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0B1224]">Arjun Verma</h4>
                  <p className="text-xs text-slate-500">Enrolled Student • Agentic AI & Full Stack Cohort</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                &ldquo;The emphasis on stateful agent architecture rather than superficial chatbot tutorials made a massive difference. We built multi-agent supervisors with LangGraph, wrote unit tests for custom tools, and deployed containerized pipelines. The syllabus is genuine engineering.&rdquo;
              </p>
              <div className="text-[11px] font-mono text-emerald-600 flex items-center gap-1 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Capstone: Enterprise RAG Architecture</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#168CF0] text-white flex items-center justify-center font-bold text-sm shadow-md">
                  PS
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0B1224]">Pooja Sharma</h4>
                  <p className="text-xs text-slate-500">Fellowship Alum • Applied Computer Vision Track</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                &ldquo;The dual-mentor format and syllabus transparency are refreshing. I could preview every module's source references before applying, and my project defense was reviewed against production benchmarks. VIAI Labs sets a high bar for tech education.&rdquo;
              </p>
              <div className="text-[11px] font-mono text-emerald-600 flex items-center gap-1 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Capstone: Edge YOLOv10 Defect Inspection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
