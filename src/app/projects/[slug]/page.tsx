"use client";

import React from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";
import { Card3D } from "@/components/shared/Card3D";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Cpu,
  Layers,
  CheckCircle2,
  Workflow,
  Sparkles,
  BarChart3,
  ShieldCheck,
  Terminal
} from "lucide-react";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className="bg-[#F6F8FC] min-h-screen pb-24">
      {/* Page Hero */}
      <section className="bg-[#0B1224] text-white py-16 lg:py-20 border-b border-[#1E2C4F] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#168CF0]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-white">Projects</Link>
            <span>/</span>
            <span className="text-[#38BDF8] line-clamp-1">{project.title}</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#111C38] text-[#38BDF8] border border-[#1E2C4F]">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white">
                {project.clientType}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed">
              {project.tagline}
            </p>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#111C38] border border-[#1E2C4F] hover:bg-[#16254a] text-white text-xs font-bold transition-all flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>Inspect GitHub Repo</span>
                </a>
              )}
              <Link
                href="/courses"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#168CF0] to-[#06B6D4] text-white text-xs font-bold shadow transition-all flex items-center gap-2"
              >
                <span>Learn to Build This Stack</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Architecture & Deep Dive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Problem, Solution, Architecture Diagram, Features */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Thumbnail Showcase */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-900 shadow-md">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Problem Statement */}
            <div className="bg-white p-7 sm:p-9 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-[#0B1224] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-rose-500" />
                <span>The Challenge / Problem Statement</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            {/* Solution Overview */}
            <div className="bg-white p-7 sm:p-9 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-[#0B1224] flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#168CF0]" />
                <span>Solution Architecture Overview</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.solutionOverview}
              </p>
            </div>

            {/* Interactive Architecture Flow Diagram Box with 3D Depth */}
            <Card3D glowColor="cyan" maxTilt={6} scale={1.01}>
              <div className="bg-[#0B1224] text-white p-7 sm:p-9 rounded-2xl border border-[#1E2C4F] shadow-2xl space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#168CF0]/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#06B6D4] uppercase tracking-wider">
                    <Workflow className="w-4 h-4 animate-spin" />
                    <span>System Architecture Flow</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    LIVE_PIPELINE_ACTIVE
                  </span>
                </div>

                <div className="p-5 rounded-xl bg-[#080D1A] border border-[#1E2C4F] font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto relative z-10 shadow-inner">
                  <div className="text-emerald-400 font-bold mb-2 flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5" />
                    <span># Execution Pipeline & State Transitions:</span>
                  </div>
                  <div className="text-[#38BDF8] py-2 bg-white/5 px-4 rounded-lg border border-white/10 font-mono">
                    {project.architectureDiagramDesc}
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed relative z-10">
                  Components execute in an isolated containerized network with telemetry tracing, distributed tracing headers, and memory checkpoints on every transaction.
                </p>
              </div>
            </Card3D>

            {/* Key Features */}
            <div className="bg-white p-7 sm:p-9 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-[#0B1224] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#06B6D4]" />
                <span>Engineered Features & Capabilities</span>
              </h2>
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#168CF0] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics & Outcomes */}
            <div className="bg-white p-7 sm:p-9 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-[#0B1224] flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-emerald-500" />
                <span>Quantifiable Outcomes & Benchmark Metrics</span>
              </h2>
              <div className="space-y-3">
                {project.metricsOrOutcomes.map((metric, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs sm:text-sm text-emerald-950 font-medium flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar: Tech Stack, Repository Meta, Course Link */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Tech Stack Box */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-[#0B1224] uppercase tracking-wider">
                Technologies Utilized
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-100 text-slate-800 border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Standard Pill */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-sm font-bold text-[#0B1224] uppercase tracking-wider">
                Verification & Source
              </h3>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span>Classification:</span>
                  <span className="font-semibold text-slate-800">{project.clientType}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span>Domain Category:</span>
                  <span className="font-semibold text-slate-800">{project.category}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>License / Codebase:</span>
                  <span className="font-semibold text-[#168CF0]">Open Source / Educational</span>
                </div>
              </div>
            </div>

            {/* Build Similar Systems CTA */}
            <div className="bg-[#0B1224] text-white p-6 rounded-2xl border border-[#1E2C4F] shadow-xl space-y-4">
              <h3 className="font-bold text-base text-white">
                Want to build systems like this?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our flagship cohorts in Agentic AI and Full Stack Software Engineering guide students to design and ship these exact architectural patterns.
              </p>
              <Link
                href="/courses"
                className="w-full text-center block py-3 rounded-xl bg-gradient-to-r from-[#168CF0] to-[#06B6D4] text-white font-bold text-xs shadow-lg"
              >
                Explore Relevant Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
