"use client";

import React, { useState } from "react";
import Link from "next/link";
import { workshopsData } from "@/data/workshopsData";
import { Workshop } from "@/types";
import { Calendar, Plus, Clock, MapPin, ExternalLink, CheckCircle2 } from "lucide-react";

export default function AdminWorkshopsPage() {
  const [workshops, setWorkshops] = useState<Workshop[]>(workshopsData);

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1224]">
            Workshops & Bootcamps Manager
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Schedule college hackathons, masterclasses, and executive corporate labs.
          </p>
        </div>

        <button
          onClick={() => alert("New workshop creator dialog ready.")}
          className="px-4 py-2.5 rounded-xl bg-[#168CF0] hover:bg-[#1379d0] text-white text-xs font-bold transition-colors flex items-center gap-1.5 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Schedule New Workshop</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {workshops.map((ws) => (
          <div
            key={ws.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 hover:border-[#168CF0]/40 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-50 text-[#168CF0]">
                {ws.format}
              </span>
              <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Live on Website</span>
              </span>
            </div>

            <h3 className="font-bold text-base text-[#0B1224]">{ws.title}</h3>
            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
              {ws.shortDescription}
            </p>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
              <div><strong>Schedule:</strong> {ws.dateSchedule}</div>
              <div><strong>Duration:</strong> {ws.duration}</div>
              <div className="truncate"><strong>Venue:</strong> {ws.venue}</div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <Link
                href={`/workshops/${ws.slug}`}
                target="_blank"
                className="text-xs font-bold text-[#168CF0] hover:underline flex items-center gap-1"
              >
                <span>View Public Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
