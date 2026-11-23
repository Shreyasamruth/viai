"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { NeuralCanvas } from "./NeuralCanvas";
import { NeuralCore3D } from "./NeuralCore3D";
import { CyberGrid3D } from "@/components/shared/CyberGrid3D";
import { Card3D } from "@/components/shared/Card3D";
import {
  ArrowRight,
  Sparkles,
  Bot,
  BrainCircuit,
  Terminal,
  Code2,
  CheckCircle2,
  Zap,
  TrendingUp,
  ShieldCheck,
  Cpu,
  Layers,
  Activity
} from "lucide-react";

export const HeroSection: React.FC = () => {
  const { companyConfig } = useApp();

  return (
    <section className="relative min-h-[96vh] flex items-center bg-[#060A14] text-white overflow-hidden py-16 lg:py-24 border-b border-[#1E2C4F]">
      {/* 3D Perspective Cyber Grid Base */}
      <CyberGrid3D />

      {/* Dynamic 2D Neural Node Constellations on Backdrop */}
      <NeuralCanvas className="opacity-40" />

      {/* Atmospheric Spatial Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-gradient-to-tr from-[#168CF0]/20 via-[#06B6D4]/15 to-[#8B5CF6]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-10 right-0 w-[500px] h-[500px] bg-[#168CF0]/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Telemetry HUD, & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Live 3D Holographic Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1224]/90 border border-[#168CF0]/40 shadow-[0_0_20px_rgba(22,140,240,0.25)] text-xs font-semibold backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#06B6D4] shadow-[0_0_10px_#06B6D4]"></span>
              </span>
              <span className="bg-gradient-to-r from-[#38BDF8] via-[#06B6D4] to-white bg-clip-text text-transparent font-bold tracking-wide">
                NEXT-GEN AI & APPLIED TECHNOLOGY LABS
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-slate-400 font-mono text-[11px] hidden sm:inline">2025–26 COHORTS</span>
            </div>

            {/* Main Headline with 3D Depth Shimmer */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08]">
              Build Skills. <br />
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                Create Intelligence.
              </span>{" "}
              <br />
              <span className="bg-gradient-to-r from-[#168CF0] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(22,140,240,0.4)]">
                Shape Tomorrow.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {companyConfig.heroSubheadline}
            </p>

            {/* Hyper 3D CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/courses"
                className="relative group w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#168CF0] to-[#06B6D4] hover:from-[#1379d0] hover:to-[#059eb8] shadow-[0_0_30px_rgba(22,140,240,0.5)] hover:shadow-[0_0_45px_rgba(6,182,212,0.7)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 overflow-hidden"
              >
                {/* 3D Sheen sweep */}
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />
                <span className="relative z-10">Explore Programmes</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="/about"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold text-sm text-slate-200 bg-[#0B1224]/80 border border-[#1E2C4F] hover:border-[#168CF0]/60 hover:bg-[#111C38] hover:text-white shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <span>Discover VIAI Labs</span>
              </Link>
            </div>

            {/* 3D Telemetry Stats HUD */}
            <div className="pt-6 grid grid-cols-3 gap-3 border-t border-[#1E2C4F]/60 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="p-3 rounded-xl bg-[#0B1224]/60 border border-[#1E2C4F]/60 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black text-white flex items-center gap-1">
                  <span>100%</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                  Applied Labs
                </div>
              </div>
              <div className="p-3 rounded-xl bg-[#0B1224]/60 border border-[#1E2C4F]/60 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black text-[#06B6D4]">
                  12+
                </div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                  Frontier Curricula
                </div>
              </div>
              <div className="p-3 rounded-xl bg-[#0B1224]/60 border border-[#1E2C4F]/60 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black text-[#168CF0]">
                  Verifiable
                </div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                  Digital Seals
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: WebGL 3D Quantum Neural Core + Spatial Hologram Stack */}
          <div className="lg:col-span-5 relative perspective-1000">
            <div className="relative mx-auto max-w-md lg:max-w-none flex items-center justify-center">
              
              {/* WebGL Three.js 3D Rotating Core Centerpiece */}
              <div className="w-full h-[420px] sm:h-[480px] relative flex items-center justify-center">
                <NeuralCore3D />

                {/* Floating 3D HUD Card: Top Right */}
                <div className="absolute top-2 -right-4 sm:-right-6 z-20">
                  <Card3D glowColor="cyan" maxTilt={14}>
                    <div className="p-3.5 rounded-2xl bg-[#0B1224]/90 border border-[#06B6D4]/40 shadow-[0_0_25px_rgba(6,182,212,0.3)] backdrop-blur-xl space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-[#06B6D4]/20 text-[#06B6D4]">
                          <Cpu className="w-4 h-4 animate-spin-slow" />
                        </span>
                        <div>
                          <div className="text-xs font-bold text-white">Agent Swarm Engine</div>
                          <div className="text-[10px] text-slate-400">LangGraph Cyclical State</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-emerald-400 pt-1 border-t border-white/10">
                        <span>LATENCY: 140ms</span>
                        <span>FAITHFUL: 98.4%</span>
                      </div>
                    </div>
                  </Card3D>
                </div>

                {/* Floating 3D HUD Card: Bottom Left */}
                <div className="absolute bottom-4 -left-4 sm:-left-6 z-20">
                  <Card3D glowColor="blue" maxTilt={14}>
                    <div className="p-3.5 rounded-2xl bg-[#0B1224]/90 border border-[#168CF0]/40 shadow-[0_0_25px_rgba(22,140,240,0.3)] backdrop-blur-xl space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                          <Code2 className="w-4 h-4" />
                        </span>
                        <div>
                          <div className="text-xs font-bold text-white">Next.js 14 Production</div>
                          <div className="text-[10px] text-slate-400">React Server Actions</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-[#38BDF8] pt-1 border-t border-white/10">
                        <span>LIGHTHOUSE: 100</span>
                        <span>EDGE: OK</span>
                      </div>
                    </div>
                  </Card3D>
                </div>

                {/* Bottom Center Spatial Badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20">
                  <div className="px-3.5 py-1 rounded-full bg-[#080D1A]/95 border border-[#1E2C4F] text-[10px] font-mono text-slate-400 flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                    <Activity className="w-3 h-3 text-[#168CF0] animate-pulse" />
                    <span>INTERACTIVE 3D NEURAL CORE • DRAG MOUSE TO ROTATE</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
