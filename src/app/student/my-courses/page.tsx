"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { coursesData } from "@/data/coursesData";
import { BookOpen, Layers, CheckCircle2, ArrowRight, FileText } from "lucide-react";

export default function StudentMyCoursesPage() {
  const { studentProfile, openSyllabusModal } = useApp();

  const enrolled = studentProfile.enrolledCourses.map((enr) => {
    const course = coursesData.find((c) => c.id === enr.courseId);
    return { ...enr, course };
  });

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1224]">My Enrolled Courses</h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Track module progress, review curriculum roadmaps, and access code repositories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {enrolled.map((item) => {
          if (!item.course) return null;
          return (
            <div
              key={item.courseId}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-44 bg-slate-900 relative">
                  <img
                    src={item.course.thumbnailUrl}
                    alt={item.course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#0B1224]/90 text-[#38BDF8]">
                      {item.course.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-[#0B1224]">{item.course.title}</h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.course.shortDescription}
                  </p>

                  {/* Progress bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-500">
                        {item.completedModules} of {item.totalModules} Modules Finished
                      </span>
                      <span className="text-[#168CF0] font-bold">{item.progressPercentage}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#168CF0] to-[#06B6D4] rounded-full"
                        style={{ width: `${item.progressPercentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-2">
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => openSyllabusModal(item.course!)}
                    className="text-xs font-semibold text-slate-500 hover:text-[#168CF0] flex items-center gap-1"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Syllabus</span>
                  </button>

                  <Link
                    href={`/courses/${item.course.slug}`}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#168CF0] to-[#06B6D4] text-white text-xs font-bold shadow flex items-center gap-1.5"
                  >
                    <span>Launch Course Room</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
