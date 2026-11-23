"use client";

import React from "react";
import { Download, FileText, Code2, Database } from "lucide-react";

export default function StudentResourcesPage() {
  const cohortMaterials = [
    {
      title: "Agentic AI Starter Codebase (LangGraph + CrewAI)",
      type: "ZIP Archive",
      size: "14.2 MB",
      description: "Dockerized boilerplate with ReAct loop handlers, SQLite checkpointing, and sample tools."
    },
    {
      title: "Production Next.js 14 SaaS Template",
      type: "GitHub Repo Zip",
      size: "8.6 MB",
      description: "App router starter with Server Actions, Prisma PostgreSQL schemas, and Tailwind tokens."
    },
    {
      title: "Synthetic Legal & Technical Document Benchmark Dataset",
      type: "CSV / JSON",
      size: "24.5 MB",
      description: "5,000 multi-page documents formatted for hybrid RAG evaluation with ground truth QA pairs."
    },
    {
      title: "PyTorch Deep Learning Lecture Deck (Slides & Annotations)",
      type: "PDF Slide Deck",
      size: "12.8 MB",
      description: "Complete mathematical derivations and architecture slides from Modules 1-4."
    }
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1224]">Cohort Learning Resources</h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Exclusive starter codebases, datasets, and lecture slides provided for enrolled VIAI Labs students.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cohortMaterials.map((mat, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-[#168CF0]/40 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-50 text-[#168CF0]">
                  {mat.type}
                </span>
                <span className="text-xs font-mono text-slate-400">{mat.size}</span>
              </div>
              <h3 className="font-bold text-sm text-[#0B1224] mb-1">{mat.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{mat.description}</p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => alert(`Downloading: ${mat.title}`)}
                className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-[#168CF0] hover:text-white border border-slate-200 text-xs font-bold text-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resource</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
