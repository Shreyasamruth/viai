"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Download,
  BookOpen,
  Sparkles,
  ArrowRight,
  Code2,
  Terminal,
  ExternalLink,
  Search
} from "lucide-react";

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const resources = [
    {
      id: "res-1",
      title: "Agentic AI Developer Roadmap 2025–26",
      category: "Roadmaps",
      type: "Interactive PDF",
      size: "2.4 MB",
      description:
        "The comprehensive visual guide to mastering ReAct patterns, memory systems, LangGraph cyclical workflows, and CrewAI swarms.",
      tags: ["Agentic AI", "Python", "Roadmap"]
    },
    {
      id: "res-2",
      title: "LangGraph State Machines & Checkpointers Cheatsheet",
      category: "Cheatsheets",
      type: "Quick Reference PDF",
      size: "850 KB",
      description:
        "One-page syntax card for state definitions, conditional edges, interruption loops, and persistence checkpointers.",
      tags: ["LangGraph", "Python", "Cheatsheet"]
    },
    {
      id: "res-3",
      title: "Production Next.js 14 App Router Architectural Cheatsheet",
      category: "Cheatsheets",
      type: "Cheat Sheet",
      size: "1.1 MB",
      description:
        "Server Components vs Client Components rules, Server Actions mutations, ISR revalidation, and caching mental models.",
      tags: ["Next.js", "React", "TypeScript"]
    },
    {
      id: "res-4",
      title: "Applied PyTorch & Deep Learning Tensor Operations Guide",
      category: "Guides",
      type: "Technical Guide",
      size: "3.2 MB",
      description:
        "Mathematical and code breakdown of tensor broadcasting, autograd gradient flows, loss function formulations, and transfer learning.",
      tags: ["PyTorch", "Deep Learning", "Math"]
    },
    {
      id: "res-5",
      title: "OWASP Top 10 for AI & Large Language Models (LLM01-LLM10)",
      category: "Guides",
      type: "Security Whitepaper",
      size: "1.6 MB",
      description:
        "Practical remediation guide defending against prompt injections, model denial of service, vector store poisoning, and sensitive data leakage.",
      tags: ["Security", "LLMs", "OWASP"]
    },
    {
      id: "res-6",
      title: "Modern SQL & Pandas Cohort Analytics Starter Pack",
      category: "Datasets & Code",
      type: "Jupyter Notebook & Data",
      size: "4.5 MB",
      description:
        "Cleaned e-commerce sample database with 50,000 anonymized transactions and ready-to-run window query templates.",
      tags: ["SQL", "Pandas", "Analytics"]
    }
  ];

  const filteredResources = resources.filter((r) => {
    return (
      searchQuery.trim() === "" ||
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const handleDownload = (res: typeof resources[0]) => {
    alert(`Initiating download for: ${res.title} (${res.size})`);
  };

  return (
    <div className="bg-[#F6F8FC] min-h-screen pb-24">
      {/* Page Hero */}
      <section className="bg-[#0B1224] text-white py-16 lg:py-20 border-b border-[#1E2C4F] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#168CF0]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111C38] border border-[#1E2C4F] text-[#06B6D4] text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Open Learning Assets</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Developer Resources & Roadmaps
          </h1>

          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Free high-yield learning guides, cheat sheets, architecture blueprints, and starter datasets curated by the VIAI Labs engineering team.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic (e.g. LangGraph, Next.js, PyTorch)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#080D1A] border border-[#1E2C4F] text-white text-sm placeholder-slate-400 focus:outline-none focus:border-[#168CF0] shadow-lg transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Main Grid Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-[#168CF0]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[#168CF0] border border-blue-200">
                    {res.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {res.size}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0B1224] mb-2">
                  {res.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {res.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-2">
                  {res.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-medium rounded bg-slate-100 text-slate-700"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => handleDownload(res)}
                  className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-[#168CF0] hover:text-white border border-slate-200 hover:border-[#168CF0] text-xs font-bold text-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resource ({res.type})</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
