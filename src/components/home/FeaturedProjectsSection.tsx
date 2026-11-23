"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";
import { Card3D } from "@/components/shared/Card3D";
import { AgentPlayground } from "@/components/home/AgentPlayground";
import { ArrowRight, Sparkles, ExternalLink, Github, Cpu, Layers, Terminal, Bot } from "lucide-react";

export const FeaturedProjectsSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<"projects" | "simulator">("projects");
  const featured = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-24 lg:py-32 bg-[#F6F8FC] text-[#0B1224] border-b border-slate-200 relative overflow-hidden">
      {/* Background radial highlights */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#168CF0]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#168CF0] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#168CF0]" />
              <span>Applied Technology Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B1224] tracking-tight">
              Featured Systems & Real-Time Swarm
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-xl">
              Architectural case studies engineered within our research labs, capstone cohorts, and live autonomous agent pipelines.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Toggle Pill */}
            <div className="p-1 rounded-xl bg-slate-200/80 border border-slate-300 flex items-center gap-1 shadow-inner">
              <button
                onClick={() => setViewMode("projects")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === "projects"
                    ? "bg-[#0B1224] text-white shadow"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Case Studies</span>
              </button>
              <button
                onClick={() => setViewMode("simulator")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === "simulator"
                    ? "bg-[#168CF0] text-white shadow shadow-[#168CF0]/30"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Bot className="w-3.5 h-3.5 animate-pulse" />
                <span>Live Swarm Lab</span>
              </button>
            </div>

            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#168CF0] hover:text-[#06B6D4] transition-colors ml-2"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* View Mode: Interactive Agent Swarm Simulator */}
        {viewMode === "simulator" ? (
          <div className="transition-all duration-500 animate-fadeIn">
            <AgentPlayground />
          </div>
        ) : (
          /* View Mode: 3D Project Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((project, idx) => (
              <Card3D
                key={project.id}
                glowColor={idx === 1 ? "cyan" : idx === 2 ? "violet" : "blue"}
                maxTilt={8}
                scale={1.02}
                className="h-full"
              >
                <div className="group h-full bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#168CF0]/50 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {/* Thumbnail with floating badge */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1224] via-[#0B1224]/30 to-transparent" />

                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#0B1224]/90 backdrop-blur-md text-[#38BDF8] border border-[#168CF0]/40 shadow-lg">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                        <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-slate-200 font-semibold">
                          {project.clientType}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#0B1224] group-hover:text-[#168CF0] transition-colors mb-2 line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                        {project.tagline}
                      </p>

                      {/* Architecture Spec Highlights */}
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 mb-4">
                        <span className="font-bold text-slate-900 block mb-1 flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-[#168CF0]" />
                          <span>Architectural Metric:</span>
                        </span>
                        <span className="text-slate-600 line-clamp-2 leading-relaxed">
                          {project.metricsOrOutcomes[0]}
                        </span>
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 text-[10px] font-semibold rounded bg-slate-100 text-slate-700 border border-slate-200/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="p-6 pt-0">
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#168CF0] hover:text-[#06B6D4] transition-colors group-hover:translate-x-0.5"
                      >
                        <span>System Architecture Spec</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                          title="View GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
