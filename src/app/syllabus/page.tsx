"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { syllabusData } from "@/data/syllabusData";
import { coursesData } from "@/data/coursesData";
import { useApp } from "@/context/AppContext";
import { SyllabusItem, Course } from "@/types";
import {
  Search,
  BookOpen,
  Download,
  Eye,
  FileText,
  Calendar,
  Layers,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Building2,
  Filter
} from "lucide-react";

export default function SyllabusLibraryPage() {
  const { openSyllabusModal } = useApp();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeTab, setActiveTab] = useState<"viai" | "external">("viai");

  const categories = [
    "All",
    "Agentic AI & Automation",
    "Generative AI",
    "AI & Machine Learning",
    "Full Stack Development",
    "Python Programming",
    "Data Science & Analytics",
    "Cybersecurity"
  ];

  const filteredSyllabi = useMemo(() => {
    return syllabusData.filter((item) => {
      // Tab separation: VIAI proprietary vs External University
      if (activeTab === "viai" && item.isExternal) return false;
      if (activeTab === "external" && !item.isExternal) return false;

      // Category filter
      if (selectedCategory !== "All" && item.category !== selectedCategory) return false;

      // Search query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.courseTitle.toLowerCase().includes(query);
        const matchesSummary = item.summary.toLowerCase().includes(query);
        const matchesTarget = item.targetAudience.toLowerCase().includes(query);
        return matchesTitle || matchesSummary || matchesTarget;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, activeTab]);

  const handlePreviewSyllabus = (item: SyllabusItem) => {
    // If it's a VIAI course syllabus, locate the course and launch the official PDF viewer modal
    const course = coursesData.find((c) => c.id === item.courseId);
    if (course) {
      openSyllabusModal(course);
    } else {
      // Fallback: window print / alert for external record
      alert(`Opening syllabus document for: ${item.courseTitle}`);
    }
  };

  return (
    <div className="bg-[#F6F8FC] min-h-screen pb-24">
      {/* Page Header */}
      <section className="bg-[#0B1224] text-white py-16 lg:py-20 border-b border-[#1E2C4F] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#168CF0]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111C38] border border-[#1E2C4F] text-[#06B6D4] text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Searchable Syllabus Library</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Curriculum Documents & Syllabi
          </h1>

          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Review detailed subject breakdowns, learning objectives, lab exercises, and prerequisites. Download verified PDF curriculums directly or explore affiliated university frameworks.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword, course, or subject (e.g. LangGraph, PyTorch, SQL)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#080D1A] border border-[#1E2C4F] text-white text-sm placeholder-slate-400 focus:outline-none focus:border-[#168CF0] shadow-lg transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Top Segmented Tab: VIAI Labs Curricula vs External University Syllabi */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 p-1 rounded-xl bg-white border border-slate-200 self-start shadow-sm">
            <button
              onClick={() => setActiveTab("viai")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === "viai"
                  ? "bg-[#0B1224] text-white shadow"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              VIAI Labs Proprietary Syllabi
            </button>
            <button
              onClick={() => setActiveTab("external")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === "external"
                  ? "bg-[#0B1224] text-white shadow"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Building2 className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>External University Curricula</span>
            </button>
          </div>

          <Link
            href="/admin/resources"
            className="text-xs font-semibold text-slate-500 hover:text-[#168CF0] flex items-center gap-1 self-start sm:self-auto"
          >
            <span>Admin Document Manager →</span>
          </Link>
        </div>

        {/* Notice for External University Curricula */}
        {activeTab === "external" && (
          <div className="p-4 mb-8 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">Official External Academic Records:</span>
              These documents represent official university curricula published by state and statutory institutions (e.g., GIET University, Lamrin Tech Skills University Punjab). They are indexed here for student reference and academic benchmarking. VIAI Labs clearly distinguishes external university syllabi from our proprietary curriculums.
            </div>
          </div>
        )}

        {/* Category Filter Pills (for VIAI syllabi) */}
        {activeTab === "viai" && (
          <div className="flex flex-wrap gap-2 mb-8 pb-2 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#0B1224] text-white shadow"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Syllabus Document Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSyllabi.map((item) => {
            const course = coursesData.find((c) => c.id === item.courseId);

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg hover:border-[#168CF0]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Category & Version */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[#168CF0] border border-blue-200">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {item.version}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0B1224] mb-2">
                    {item.courseTitle}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  {/* Document Meta Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 mb-4">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Updated:</span>
                      <span className="font-semibold text-slate-800">{item.lastUpdated}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Document Size:</span>
                      <span className="font-semibold text-slate-800">{item.fileSize}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Modules / Units:</span>
                      <span className="font-semibold text-slate-800">{item.moduleCount} Units</span>
                    </div>
                  </div>

                  {item.institutionSource && (
                    <div className="text-[11px] font-medium text-amber-800 bg-amber-50 p-2 rounded-lg border border-amber-200 mb-4">
                      <strong>Source: </strong> {item.institutionSource}
                    </div>
                  )}
                </div>

                {/* Footer Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  {course ? (
                    <Link
                      href={`/courses/${course.slug}`}
                      className="text-xs font-bold text-slate-700 hover:text-[#168CF0] transition-colors"
                    >
                      Course Details →
                    </Link>
                  ) : (
                    <span className="text-xs text-slate-400">External University Document</span>
                  )}

                  <button
                    onClick={() => handlePreviewSyllabus(item)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#168CF0] to-[#06B6D4] hover:from-[#1379d0] hover:to-[#059eb8] text-white text-xs font-bold shadow flex items-center gap-1.5 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Preview & Download PDF</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
