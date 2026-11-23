"use client";

import React, { useState } from "react";
import Link from "next/link";
import { workshopsData } from "@/data/workshopsData";
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Users
} from "lucide-react";

export default function WorkshopsPage() {
  const [selectedFormat, setSelectedFormat] = useState<string>("All");

  const formats = ["All", "Hands-on Bootcamp", "College Technical Session", "Corporate Executive Lab", "Masterclass"];

  const filteredWorkshops = workshopsData.filter((ws) => {
    if (selectedFormat === "All") return true;
    return ws.format === selectedFormat;
  });

  return (
    <div className="bg-[#F6F8FC] min-h-screen pb-24">
      {/* Page Hero */}
      <section className="bg-[#0B1224] text-white py-16 lg:py-20 border-b border-[#1E2C4F] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#168CF0]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111C38] border border-[#1E2C4F] text-[#06B6D4] text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Campus, Corporate & Masterclasses</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Workshops & Technical Bootcamps
          </h1>

          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Fast-paced, immersive engineering sessions conducted live online, on university campuses, and at corporate headquarters across India.
          </p>
        </div>
      </section>

      {/* Main Listing Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Format Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8 pb-2 overflow-x-auto">
          {formats.map((fmt) => (
            <button
              key={fmt}
              onClick={() => setSelectedFormat(fmt)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedFormat === fmt
                  ? "bg-[#0B1224] text-white shadow"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              {fmt}
            </button>
          ))}
        </div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredWorkshops.map((ws) => (
            <div
              key={ws.id}
              className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-xl hover:border-[#168CF0]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header & Format */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[#168CF0] border border-blue-200">
                    {ws.format}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Open for Registration</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0B1224] mb-2">
                  {ws.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {ws.shortDescription}
                </p>

                {/* Details Meta */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-5">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#168CF0]" />
                    <span>{ws.dateSchedule}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#06B6D4]" />
                    <span>{ws.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 sm:col-span-2">
                    <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="truncate">{ws.venue}</span>
                  </div>
                </div>

                {/* Takeaways snippet */}
                <div className="space-y-1.5 mb-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Key Focus:
                  </span>
                  {ws.keyTakeaways.slice(0, 2).map((takeaway, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#168CF0] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/workshops/${ws.slug}`}
                  className="text-xs font-bold text-slate-700 hover:text-[#168CF0] transition-colors"
                >
                  View Full Agenda →
                </Link>

                <Link
                  href={`/workshops/${ws.slug}`}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#168CF0] to-[#06B6D4] hover:from-[#1379d0] hover:to-[#059eb8] text-white text-xs font-bold shadow flex items-center gap-1.5 transition-all"
                >
                  <span>Reserve Seat</span>
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
