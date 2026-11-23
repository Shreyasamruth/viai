"use client";

import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import { Card3D } from "@/components/shared/Card3D";
import {
  BrainCircuit,
  Bot,
  Code2,
  BarChart3,
  Briefcase,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Cpu
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuit className="w-6 h-6 text-[#8B5CF6]" />,
  Bot: <Bot className="w-6 h-6 text-[#06B6D4]" />,
  Code2: <Code2 className="w-6 h-6 text-[#168CF0]" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-emerald-400" />,
  Briefcase: <Briefcase className="w-6 h-6 text-amber-400" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-rose-400" />
};

const glowMap: ("blue" | "cyan" | "violet" | "emerald")[] = ["violet", "cyan", "blue", "emerald", "blue", "cyan"];

export const WhatWeDoSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#F6F8FC] text-[#0B1224] relative overflow-hidden">
      {/* 3D Horizon Grid Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#168CF0_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.08] pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#168CF0]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 backdrop-blur-md border border-blue-200 text-[#168CF0] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#168CF0] animate-pulse" />
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1224] tracking-tight">
            Engineered for the Modern Tech Frontier
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            VIAI Labs delivers applied curricula, research-backed training, and immersive internship tracks built directly around production systems.
          </p>
        </div>

        {/* 6 Premium 3D Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const glow = glowMap[index % glowMap.length];
            return (
              <Card3D
                key={service.id}
                glowColor={glow}
                maxTilt={9}
                scale={1.025}
                className="h-full"
              >
                <div className="group relative h-full bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-[#168CF0]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  {/* Top Ambient Glow Shimmer */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/50 via-cyan-50/20 to-transparent rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125" />

                  <div>
                    {/* Top Pill & 3D Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                          {iconMap[service.iconName] || <BrainCircuit className="w-7 h-7 text-[#168CF0]" />}
                        </div>
                        <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white ring-1 ring-emerald-300" />
                      </div>

                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100/90 text-slate-700 border border-slate-200/80 backdrop-blur-sm shadow-xs">
                        {service.tag}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-black text-[#0B1224] group-hover:text-[#168CF0] transition-colors mb-3">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>

                    {/* Key Deliverables with 3D Bullet styling */}
                    <div className="space-y-2.5 mb-8 p-4 rounded-xl bg-slate-50/70 border border-slate-100">
                      <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-[#168CF0]" />
                        <span>Core Deliverables:</span>
                      </div>
                      {service.deliverables.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#168CF0] shrink-0 mt-0.5 group-hover:text-[#06B6D4] transition-colors" />
                          <span className="leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link with 3D Arrow effect */}
                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#168CF0] hover:text-[#06B6D4] transition-colors group-hover:translate-x-1 duration-200"
                    >
                      <span>Explore Specialized Track</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Card3D>
            );
          })}
        </div>
      </div>
    </section>
  );
};
