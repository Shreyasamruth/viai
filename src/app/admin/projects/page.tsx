"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";
import { ProjectShowcase } from "@/types";
import { Layers, Plus, ExternalLink, Github, Sparkles } from "lucide-react";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<ProjectShowcase[]>(projectsData);

  const toggleFeatured = (id: string) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, featured: !p.featured } : p))
    );
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1224]">
            Project Portfolio Manager
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Showcase real architectural prototypes, research lab systems, and student capstones.
          </p>
        </div>

        <button
          onClick={() => alert("Add project modal ready.")}
          className="px-4 py-2.5 rounded-xl bg-[#168CF0] hover:bg-[#1379d0] text-white text-xs font-bold transition-colors flex items-center gap-1.5 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Project</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-[#168CF0]">
                  {proj.category}
                </span>
                <button
                  onClick={() => toggleFeatured(proj.id)}
                  className={`text-[10px] font-bold px-2 py-0.5 rounded transition-colors ${
                    proj.featured
                      ? "bg-amber-100 text-amber-800"
                      : "bg-slate-100 text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {proj.featured ? "★ Featured" : "Not Featured"}
                </button>
              </div>

              <h3 className="font-bold text-sm text-[#0B1224] line-clamp-1">{proj.title}</h3>
              <p className="text-xs text-slate-600 line-clamp-2 mt-1">{proj.tagline}</p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <Link
                href={`/projects/${proj.slug}`}
                target="_blank"
                className="text-xs font-bold text-[#168CF0] hover:underline flex items-center gap-1"
              >
                <span>Live Spec</span>
                <ExternalLink className="w-3 h-3" />
              </Link>

              {proj.githubUrl && (
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-800"
                  title="GitHub repo"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
