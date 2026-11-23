"use client";

import React, { useState } from "react";
import Link from "next/link";
import { internshipsData } from "@/data/internshipsData";
import {
  Briefcase,
  Clock,
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users
} from "lucide-react";

export default function InternshipsPage() {
  const [selectedMode, setSelectedMode] = useState<string>("All");

  const filteredInternships = internshipsData.filter((intern) => {
    if (selectedMode === "All") return true;
    return intern.mode === selectedMode;
  });

  return (
    <div className="bg-[#F6F8FC] min-h-screen pb-24">
      {/* Page Hero */}
      <section className="bg-[#0B1224] text-white py-16 lg:py-20 border-b border-[#1E2C4F] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#168CF0]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111C38] border border-[#1E2C4F] text-[#06B6D4] text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Applied Engineering Fellowship</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Industry-Oriented Internships
          </h1>

          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Collaborate on real AI models, autonomous agents, and production SaaS codebases. Work under the direct mentorship of senior practitioners with structured weekly sprints.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 p-2 rounded-xl bg-[#080D1A] border border-[#1E2C4F] text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Verifiable Letter of Recommendation & Experience Certificate</span>
          </div>
        </div>
      </section>

      {/* Main Listing Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Filters */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-600">Filter Delivery Mode:</span>
            {["All", "Remote", "Hybrid"].map((mode) => (
              <button
                key={mode}
                onClick={() => setSelectedMode(mode)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedMode === mode
                    ? "bg-[#0B1224] text-white shadow"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>

          <span className="text-xs text-slate-500">
            {filteredInternships.length} Open Fellowship Tracks
          </span>
        </div>

        {/* Internships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredInternships.map((intern) => (
            <div
              key={intern.id}
              className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-xl hover:border-[#168CF0]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Department & Status */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[#168CF0] border border-blue-200">
                    {intern.department}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{intern.openings} Openings</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0B1224] mb-2">
                  {intern.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {intern.overview}
                </p>

                {/* Meta Grid */}
                <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-5">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#168CF0]" />
                    <span>Duration: <strong>{intern.duration}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#06B6D4]" />
                    <span>Mode: <strong>{intern.mode}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-600">Application: {intern.deadline}</span>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="space-y-1 mb-4">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Technologies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {intern.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] font-medium rounded bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/internships/${intern.slug}`}
                  className="text-xs font-bold text-slate-700 hover:text-[#168CF0] transition-colors"
                >
                  View Roadmap & Requirements
                </Link>

                <Link
                  href={`/internships/${intern.slug}`}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#168CF0] to-[#06B6D4] hover:from-[#1379d0] hover:to-[#059eb8] text-white text-xs font-bold shadow flex items-center gap-1.5 transition-all"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
