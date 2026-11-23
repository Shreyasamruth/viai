"use client";

import React, { useState } from "react";
import Link from "next/link";
import { coursesData } from "@/data/coursesData";
import { CourseCard } from "@/components/courses/CourseCard";
import { ArrowRight, Sparkles, BookOpen } from "lucide-react";

export const FeaturedCoursesSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const categories = [
    "All",
    "Agentic AI & Automation",
    "Generative AI",
    "AI & Machine Learning",
    "Full Stack Development"
  ];

  const filteredCourses = coursesData.filter((c) => {
    if (selectedFilter === "All") return c.featured;
    return c.category === selectedFilter;
  });

  return (
    <section className="py-20 lg:py-28 bg-white text-[#0B1224] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#168CF0] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Industry-Aligned Tracks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1224] tracking-tight">
              Featured Programmes & Cohorts
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              Curriculums designed from real production environments. Built with complete module syllabi, practical labs, and capstone project deliverables.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#168CF0] hover:text-[#06B6D4] transition-colors self-start md:self-end"
          >
            <span>Explore All 12+ Courses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === cat
                  ? "bg-[#0B1224] text-white shadow"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.slice(0, 6).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0B1224] to-[#111C38] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold">Looking for Complete Curriculums?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Access module breakdowns, prerequisites, and download verified PDFs from our Syllabus Library.
            </p>
          </div>
          <Link
            href="/syllabus"
            className="px-6 py-3 rounded-xl bg-[#168CF0] hover:bg-[#1379d0] text-white text-xs font-bold transition-all shrink-0 flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Open Syllabus Library</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
