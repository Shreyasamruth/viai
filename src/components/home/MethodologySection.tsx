"use client";

import React, { useState } from "react";
import {
  Compass,
  BookOpen,
  Terminal,
  Hammer,
  Award,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Cpu,
  Layers,
  Code2,
  Zap,
  Activity
} from "lucide-react";
import { Card3D } from "@/components/shared/Card3D";

export const MethodologySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: "explore",
      title: "Explore",
      subtitle: "Mental Models & Foundations",
      phaseNumber: "01",
      icon: <Compass className="w-5 h-5 text-[#168CF0]" />,
      description:
        "Deconstruct how cutting-edge technology works from first principles. Rather than black-box tutorials, we study the architectural mental models behind LLM attention layers, stateful agent graphs, or database indexing.",
      outcomes: [
        "First-principles architectural intuition",
        "Landscape analysis of existing open-source frameworks",
        "Understanding performance trade-offs and system limits"
      ],
      phaseColor: "#168CF0",
      accentGlow: "rgba(22, 140, 240, 0.25)",
      badge: "Deconstruct"
    },
    {
      id: "learn",
      title: "Learn",
      subtitle: "Live Interactive Masterclasses",
      phaseNumber: "02",
      icon: <BookOpen className="w-5 h-5 text-[#06B6D4]" />,
      description:
        "Engage in live cohorts mentored by active industry fellows. Code is dissected line-by-line, addressing production pitfalls, latency traps, and security best practices.",
      outcomes: [
        "Live interactive code walkthroughs",
        "Real-time peer Q&A and architecture debates",
        "Curated reading lists and technical whitepapers"
      ],
      phaseColor: "#06B6D4",
      accentGlow: "rgba(6, 182, 212, 0.25)",
      badge: "Architect"
    },
    {
      id: "practise",
      title: "Practise",
      subtitle: "Hands-on Sandbox Labs",
      phaseNumber: "03",
      icon: <Terminal className="w-5 h-5 text-[#8B5CF6]" />,
      description:
        "Cement concepts through guided micro-assignments. Implement tool wrappers, write unit tests, configure vector indexes, and run hyperparameter tuning experiments in isolated cloud sandbox environments.",
      outcomes: [
        "Hands-on coding challenges with test coverage",
        "Automated linter and grading evaluations",
        "Immediate peer review and feedback loops"
      ],
      phaseColor: "#8B5CF6",
      accentGlow: "rgba(139, 92, 246, 0.25)",
      badge: "Implement"
    },
    {
      id: "build",
      title: "Build",
      subtitle: "End-to-End Capstone Engineering",
      phaseNumber: "04",
      icon: <Hammer className="w-5 h-5 text-emerald-400" />,
      description:
        "Develop an original, production-grade application or autonomous system from scratch. Design database schemas, write backend microservices, implement guardrails, and containerize the stack with Docker.",
      outcomes: [
        "Complete GitHub repository with modular structure",
        "Dockerized deployment and CI/CD pipeline",
        "Production documentation and API contract design"
      ],
      phaseColor: "#10B981",
      accentGlow: "rgba(16, 185, 129, 0.25)",
      badge: "Synthesize"
    },
    {
      id: "demonstrate",
      title: "Demonstrate",
      subtitle: "Live Demo & Verifiable Credential",
      phaseNumber: "05",
      icon: <Award className="w-5 h-5 text-amber-400" />,
      description:
        "Showcase your working system during Demo Day to technical mentors and peers. Successfully evaluated capstones receive an official VIAI Labs Credential ID verifiable by employers.",
      outcomes: [
        "Live system demonstration and defense",
        "Cryptographically signed digital certificate",
        "Standout portfolio asset for career progression"
      ],
      phaseColor: "#F59E0B",
      accentGlow: "rgba(245, 158, 11, 0.25)",
      badge: "Validate"
    }
  ];

  const current = steps[activeStep];

  return (
    <section className="py-24 lg:py-32 bg-[#0B1224] text-white relative overflow-hidden border-b border-[#1E2C4F]">
      {/* 3D Cyber-Grid and Atmospheric Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#168CF0_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#168CF0]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -top-32 right-10 w-80 h-80 bg-[#8B5CF6]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111C38] border border-[#1E2C4F] text-[#06B6D4] text-xs font-bold uppercase tracking-wider mb-4 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Pedagogical Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            The 5-Stage Engineering Pipeline
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            From mental models to production deployment. An experiential, project-first trajectory engineered to bridge theoretical knowledge into verifiable capability.
          </p>
        </div>

        {/* 3D Pipeline Progression Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 lg:gap-4 mb-12">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`relative group p-4 rounded-2xl border text-left transition-all duration-300 ${
                  isActive
                    ? "bg-[#111C38] border-[#168CF0] shadow-lg shadow-[#168CF0]/20 -translate-y-1"
                    : "bg-[#0E172E]/60 border-[#1E2C4F]/80 hover:border-slate-600 hover:bg-[#111C38]/50"
                }`}
              >
                {/* Active Indicator Bar */}
                {isActive && (
                  <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#168CF0] via-[#06B6D4] to-[#8B5CF6] rounded-full" />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-black tracking-widest ${
                      isActive ? "text-[#38BDF8]" : "text-slate-500"
                    }`}
                  >
                    PHASE {step.phaseNumber}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                      isActive
                        ? "bg-[#168CF0]/20 border border-[#168CF0]/50 shadow-inner"
                        : "bg-[#080D1A] border border-[#1E2C4F]"
                    }`}
                  >
                    {step.icon}
                  </div>
                </div>

                <div className="text-sm font-extrabold text-white group-hover:text-[#38BDF8] transition-colors">
                  {step.title}
                </div>
                <div className="text-[11px] text-slate-400 truncate mt-0.5">
                  {step.badge}
                </div>
              </button>
            );
          })}
        </div>

        {/* 3D Active Phase Focus Display */}
        <Card3D glowColor="blue" maxTilt={6} scale={1.01} className="w-full">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#0F182F] via-[#0B1224] to-[#0A1020] border border-[#1E2C4F] p-8 sm:p-12 shadow-2xl overflow-hidden">
            {/* Ambient Corner Flare */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[100px] pointer-events-none transition-all duration-700"
              style={{ backgroundColor: current.accentGlow }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Stage Metadata */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111C38] border border-[#1E2C4F] text-xs font-mono font-bold text-[#38BDF8]">
                  <Activity className="w-3.5 h-3.5 text-[#06B6D4] animate-spin" />
                  <span>PHASE {current.phaseNumber} OF 05 • {current.title.toUpperCase()}</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                    {current.title}: {current.subtitle}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
                    {current.description}
                  </p>
                </div>

                {/* Key Deliverables Bulleted */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#06B6D4]" />
                    <span>Stage Milestones & Competencies:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {current.outcomes.map((outcome, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-[#111C38]/70 border border-[#1E2C4F] text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                        <span className="leading-snug">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: 3D Holographic HUD Terminal */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[#080D1A]/90 border border-[#1E2C4F] p-6 shadow-inner relative overflow-hidden font-mono text-xs text-slate-300 space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#1E2C4F] text-[11px] text-slate-400">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-slate-400 font-bold ml-1">VIAI_PIPELINE.sh</span>
                    </div>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      SYNCHRONIZED
                    </span>
                  </div>

                  {/* Terminal Code Snippet representation */}
                  <div className="space-y-2 text-[11px] text-slate-300 leading-relaxed font-mono">
                    <div className="text-slate-500">// Step {current.phaseNumber}: Automated Stage Transition</div>
                    <div className="text-cyan-400">
                      $ init_phase --stage="{current.title.toLowerCase()}" --benchmark="industry_capstone"
                    </div>
                    <div className="text-emerald-400">
                      ✓ Environment provisioned: Python 3.11, Docker, PyTorch, LangGraph
                    </div>
                    <div className="text-purple-300">
                      &gt; Compiling deliverables: {current.badge} protocols
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#0B1224] border border-[#1E2C4F] text-slate-400 text-[10px]">
                      STATUS: Ready for submission. Target evaluation standard: Verifiable Peer Defense.
                    </div>
                  </div>

                  {/* Quick Stage Stepper Button */}
                  <div className="pt-3 border-t border-[#1E2C4F] flex items-center justify-between">
                    <button
                      onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                      className="text-[11px] text-slate-400 hover:text-white transition-colors"
                    >
                      ← Previous Phase
                    </button>
                    <button
                      onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                      className="text-[11px] font-bold text-[#38BDF8] hover:text-cyan-300 transition-colors flex items-center gap-1"
                    >
                      <span>Next Phase</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card3D>
      </div>
    </section>
  );
};
