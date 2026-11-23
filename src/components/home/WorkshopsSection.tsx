"use client";

import React from "react";
import Link from "next/link";
import { workshopsData } from "@/data/workshopsData";
import { Card3D } from "@/components/shared/Card3D";
import { Calendar, MapPin, Clock, ArrowRight, Sparkles, GraduationCap, Ticket, Users } from "lucide-react";

export const WorkshopsSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white text-[#0B1224] border-b border-slate-200 relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#168CF0]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#168CF0] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Campus & Corporate Engagements</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B1224] tracking-tight">
              Upcoming Workshops & Masterclasses
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-xl">
              Intensive, hands-on bootcamps conducted live online and on partner university campuses across India.
            </p>
          </div>

          <Link
            href="/workshops"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#168CF0] hover:text-[#06B6D4] transition-colors self-start md:self-end group"
          >
            <span>All Workshops & Events</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3D Holographic Workshop Passes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workshopsData.slice(0, 2).map((workshop, idx) => (
            <Card3D
              key={workshop.id}
              glowColor={idx === 0 ? "cyan" : "violet"}
              maxTilt={7}
              scale={1.02}
              className="h-full"
            >
              <div className="group h-full bg-[#0B1224] text-white rounded-3xl p-8 border border-[#1E2C4F] shadow-2xl hover:border-[#168CF0]/60 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
                {/* Boarding pass perforations visual */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#168CF0]/20 via-transparent to-transparent pointer-events-none" />

                <div>
                  {/* Format and Status Pill */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#111C38] text-[#38BDF8] border border-[#1E2C4F] shadow-inner flex items-center gap-1.5">
                      <Ticket className="w-3.5 h-3.5 text-[#06B6D4]" />
                      <span>{workshop.format}</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Registration Open</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#38BDF8] transition-colors mb-3">
                    {workshop.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {workshop.shortDescription}
                  </p>

                  {/* Details Meta HUD Panel */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-5 rounded-2xl bg-[#080D1A]/90 border border-[#1E2C4F] text-xs text-slate-300 mb-6 font-mono">
                    <div className="flex items-center gap-2.5">
                      <Calendar className="w-4 h-4 text-[#168CF0]" />
                      <span>{workshop.dateSchedule}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-[#06B6D4]" />
                      <span>{workshop.duration}</span>
                    </div>
                    <div className="flex items-center gap-2.5 sm:col-span-2 text-slate-300 pt-2 border-t border-[#1E2C4F]/60">
                      <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="truncate">{workshop.venue}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-5 border-t border-[#1E2C4F] flex items-center justify-between gap-4">
                  <Link
                    href={`/workshops/${workshop.slug}`}
                    className="text-xs font-bold text-slate-300 hover:text-white transition-colors"
                  >
                    View Curriculum & Speakers
                  </Link>

                  <Link
                    href={`/workshops/${workshop.slug}`}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#168CF0] to-[#06B6D4] hover:from-[#1379d0] hover:to-[#059eb8] text-white text-xs font-bold shadow-lg hover:shadow-cyan-500/25 active:scale-95 transition-all flex items-center gap-1.5"
                  >
                    <span>Reserve Seat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};
