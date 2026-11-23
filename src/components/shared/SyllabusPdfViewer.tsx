"use client";

import React, { useRef } from "react";
import { Course } from "@/types";
import { X, Download, Printer, CheckCircle2, ShieldCheck, FileText, Calendar, Layers } from "lucide-react";
import { Logo } from "./Logo";

interface SyllabusPdfViewerProps {
  course: Course;
  onClose: () => void;
}

export const SyllabusPdfViewer: React.FC<SyllabusPdfViewerProps> = ({
  course,
  onClose,
}) => {
  const printAreaRef = useRef<HTMLDivElement>(null);

  const handlePrintOrDownload = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white text-[#0B1224] rounded-2xl shadow-2xl overflow-hidden my-auto border border-slate-200 flex flex-col max-h-[92vh]">
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0B1224] text-white border-b border-[#1E2C4F]">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-[#168CF0]/20 text-[#06B6D4]">
              <FileText className="w-5 h-5" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm sm:text-base text-white line-clamp-1">
                  {course.title} — Official Syllabus Document
                </h3>
                <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                  {course.syllabusVersion}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Verified Curriculum • Updated {course.syllabusLastUpdated}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrintOrDownload}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#168CF0] hover:bg-[#1379d0] text-white text-xs font-semibold shadow transition-colors"
              title="Print or Save as PDF"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
              aria-label="Close syllabus"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Area (Formatted like a high-end corporate syllabus PDF) */}
        <div ref={printAreaRef} className="p-6 sm:p-12 overflow-y-auto space-y-8 bg-white print:p-0 print:m-0">
          {/* Document Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b-2 border-slate-900 gap-4">
            <div>
              <Logo variant="light" showTagline />
              <p className="text-xs text-slate-500 mt-2">
                VIAI Innovation Labs • Curriculum & Industry Standards Board
              </p>
            </div>
            <div className="text-left sm:text-right text-xs text-slate-600 space-y-0.5">
              <p className="font-bold text-slate-900">DOCUMENT ID: {course.id.toUpperCase()}-SYL</p>
              <p>Curriculum Revision: {course.syllabusVersion}</p>
              <p>Publication Date: {course.syllabusLastUpdated}</p>
              <div className="inline-flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded mt-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Board Approved</span>
              </div>
            </div>
          </div>

          {/* Title & Overview */}
          <div>
            <span className="text-xs font-bold tracking-widest text-[#168CF0] uppercase">
              {course.category} • {course.difficulty} Level
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1224] mt-1 mb-3">
              {course.title}
            </h1>
            <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
              {course.fullDescription}
            </p>
          </div>

          {/* Quick Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <div>
              <span className="text-slate-500 block mb-0.5">Duration:</span>
              <span className="font-bold text-slate-900">{course.duration}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Delivery Mode:</span>
              <span className="font-bold text-slate-900">{course.mode}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Modules:</span>
              <span className="font-bold text-slate-900">{course.modules.length} Core Modules</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Capstone Evaluation:</span>
              <span className="font-bold text-slate-900">Required for Certification</span>
            </div>
          </div>

          {/* Learning Objectives */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2 border-b pb-2">
              <CheckCircle2 className="w-4 h-4 text-[#168CF0]" />
              Core Competencies & Learning Objectives
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
              {course.learningObjectives.map((obj, i) => (
                <div key={i} className="flex items-start gap-2 bg-slate-50/70 p-2.5 rounded-lg border border-slate-100">
                  <span className="font-bold text-[#168CF0] shrink-0">{i + 1}.</span>
                  <span>{obj}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modules Breakdown */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2 border-b pb-2">
              <Layers className="w-4 h-4 text-[#168CF0]" />
              Detailed Module Syllabus
            </h3>
            <div className="space-y-4">
              {course.modules.map((mod) => (
                <div key={mod.id} className="p-4 rounded-xl border border-slate-200 bg-white">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="font-bold text-sm sm:text-base text-slate-900">
                      Module {mod.moduleNumber}: {mod.title}
                    </h4>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold border border-blue-200 self-start sm:self-auto">
                      {mod.duration}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mb-3">{mod.description}</p>
                  
                  <div className="text-xs">
                    <span className="font-semibold text-slate-800 block mb-1">Topics Covered:</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-600 list-disc list-inside">
                      {mod.topics.map((top, idx) => (
                        <li key={idx}>{top}</li>
                      ))}
                    </ul>
                  </div>

                  {mod.handsOnLab && (
                    <div className="mt-3 p-2.5 rounded-lg bg-cyan-50 border border-cyan-200 text-xs text-cyan-900">
                      <span className="font-bold">Hands-On Lab: </span>
                      {mod.handsOnLab}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Capstone Project Section */}
          <div className="p-5 rounded-xl border border-[#168CF0]/40 bg-gradient-to-br from-blue-50/60 to-cyan-50/60">
            <span className="text-[11px] font-bold text-[#168CF0] tracking-wider uppercase">
              Final Capstone Project Requirement
            </span>
            <h4 className="text-base font-bold text-slate-900 mt-0.5 mb-2">
              {course.capstoneProject.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 mb-3">
              {course.capstoneProject.description}
            </p>
            <div className="text-xs text-slate-700">
              <span className="font-semibold text-slate-900 block mb-1">Expected Deliverables:</span>
              <ul className="list-disc list-inside space-y-0.5">
                {course.capstoneProject.deliverables.map((deliv, idx) => (
                  <li key={idx}>{deliv}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tools & Tech Covered */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              Technologies & Frameworks Mastered
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {course.toolsAndTech.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 text-slate-800 border border-slate-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Institutional Footer */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
            <span>© VIAI Labs. All rights reserved. Curriculum subject to continuous industry updates.</span>
            <span>www.viailabs.com • contact@viailabs.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
