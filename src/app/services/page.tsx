"use client";

import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import {
  BrainCircuit,
  Bot,
  Code2,
  BarChart3,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuit className="w-8 h-8 text-[#8B5CF6]" />,
  Bot: <Bot className="w-8 h-8 text-[#06B6D4]" />,
  Code2: <Code2 className="w-8 h-8 text-[#168CF0]" />,
  BarChart3: <BarChart3 className="w-8 h-8 text-emerald-500" />,
  Briefcase: <Briefcase className="w-8 h-8 text-amber-500" />,
  GraduationCap: <GraduationCap className="w-8 h-8 text-rose-500" />
};

export default function ServicesPage() {
  return (
    <div className="bg-[#F6F8FC] min-h-screen pb-24">
      {/* Page Hero */}
      <section className="bg-[#0B1224] text-white py-16 lg:py-20 border-b border-[#1E2C4F] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#168CF0]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111C38] border border-[#1E2C4F] text-[#06B6D4] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VIAI Labs Offerings</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Applied Technology & AI Services
          </h1>

          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            From cognitive multi-agent automation to production Next.js engineering and college campus AI labs. Discover our specialized offerings.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            id={service.slug}
            className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Icon & Info */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {iconMap[service.iconName] || <BrainCircuit className="w-8 h-8 text-[#168CF0]" />}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#168CF0]">
                      {service.tag}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1224]">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {service.fullDescription}
                </p>

                {/* Target Audience */}
                <div className="text-xs text-slate-500 pt-1">
                  <strong>Audience: </strong> {service.audience}
                </div>

                {/* Action Link */}
                <div className="pt-4">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B1224] text-white hover:bg-[#168CF0] text-xs font-bold transition-colors"
                  >
                    <span>View Dedicated Programmes & Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Key Deliverables & Features Box */}
              <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">
                <h3 className="font-bold text-sm text-[#0B1224] uppercase tracking-wider">
                  Key Capabilities & Deliverables
                </h3>
                <div className="space-y-2.5">
                  {service.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#168CF0] shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-200 space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Why VIAI Labs:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.features.map((feat, fidx) => (
                      <span
                        key={fidx}
                        className="px-2 py-0.5 text-[11px] rounded bg-white text-slate-700 border border-slate-200"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
