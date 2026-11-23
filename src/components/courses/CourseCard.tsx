"use client";

import React from "react";
import Link from "next/link";
import { Course } from "@/types";
import { useApp } from "@/context/AppContext";
import { Card3D } from "@/components/shared/Card3D";
import { Clock, BookOpen, Layers, ArrowRight, Sparkles, FileText, ChevronRight } from "lucide-react";

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { openEnquiryModal, openSyllabusModal } = useApp();

  return (
    <Card3D glowColor="cyan" maxTilt={7} scale={1.02} className="h-full">
      <div className="group h-full bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#168CF0]/50 transition-all duration-300 flex flex-col justify-between">
        {/* Thumbnail Header with 3D Depth */}
        <div>
          <div className="relative h-48 w-full overflow-hidden bg-slate-950">
            <img
              src={course.thumbnailUrl}
              alt={course.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
              loading="lazy"
            />
            {/* Ambient vignette & gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1224] via-[#0B1224]/30 to-transparent" />

            {/* Glowing top boundary accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#168CF0]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Badges in 3D floating position */}
            <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#0B1224]/90 backdrop-blur-md text-[#38BDF8] border border-[#168CF0]/40 shadow-lg">
                {course.category}
              </span>
              {course.badge && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md">
                  {course.badge}
                </span>
              )}
            </div>

            {/* Bottom meta bar */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md font-semibold border border-white/10 text-slate-200">
                {course.difficulty}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md font-semibold border border-white/10 flex items-center gap-1.5 text-cyan-300">
                <Clock className="w-3.5 h-3.5 text-[#06B6D4]" />
                {course.duration}
              </span>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6">
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2.5">
              <span className="flex items-center gap-1 text-[#168CF0] font-semibold">
                <Layers className="w-3.5 h-3.5" />
                {course.mode}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-medium">{course.modules.length} Core Modules</span>
            </div>

            <h3 className="text-lg font-bold text-[#0B1224] group-hover:text-[#168CF0] transition-colors line-clamp-1 mb-2 tracking-tight">
              {course.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
              {course.shortDescription}
            </p>

            {/* Technologies Tag Pills */}
            <div className="flex flex-wrap gap-1.5 mb-2">
              {course.toolsAndTech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 text-[10px] font-semibold rounded-md bg-slate-100 text-slate-700 border border-slate-200/80 group-hover:border-blue-200 transition-colors"
                >
                  {tech}
                </span>
              ))}
              {course.toolsAndTech.length > 4 && (
                <span className="px-2 py-0.5 text-[10px] font-semibold rounded-md bg-slate-100 text-slate-500">
                  +{course.toolsAndTech.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="p-6 pt-0 space-y-2.5">
          <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2.5">
            <Link
              href={`/courses/${course.slug}`}
              className="w-full text-center py-2.5 px-3 rounded-xl border border-slate-200 hover:border-[#168CF0] text-xs font-bold text-slate-700 hover:text-[#168CF0] hover:bg-blue-50/50 transition-all flex items-center justify-center gap-1"
            >
              <span>View Details</span>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            </Link>
            <button
              onClick={() => openEnquiryModal(course)}
              className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#168CF0] to-[#06B6D4] hover:from-[#1379d0] hover:to-[#059eb8] text-xs font-bold text-white shadow-md hover:shadow-cyan-500/20 active:scale-95 transition-all"
            >
              Enquire / Enrol
            </button>
          </div>

          <button
            onClick={() => openSyllabusModal(course)}
            className="w-full text-center text-[11px] font-semibold text-slate-500 hover:text-[#168CF0] transition-colors flex items-center justify-center gap-1.5 pt-1 group-hover:text-slate-700"
          >
            <FileText className="w-3.5 h-3.5 text-[#168CF0]" />
            <span>Preview Syllabus PDF ({course.syllabusVersion})</span>
          </button>
        </div>
      </div>
    </Card3D>
  );
};
