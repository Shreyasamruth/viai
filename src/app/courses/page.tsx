"use client";

import React, { useState, useMemo } from "react";
import { coursesData } from "@/data/coursesData";
import { CourseCard } from "@/components/courses/CourseCard";
import { CourseCategory, DifficultyLevel } from "@/types";
import {
  Search,
  Filter,
  SlidersHorizontal,
  RotateCcw,
  Sparkles,
  BookOpen
} from "lucide-react";

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"featured" | "az" | "duration">("featured");

  const categories: string[] = [
    "All",
    "Agentic AI & Automation",
    "Generative AI",
    "AI & Machine Learning",
    "Full Stack Development",
    "Python Programming",
    "Data Science & Analytics",
    "Cybersecurity"
  ];

  const difficulties: string[] = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredCourses = useMemo(() => {
    let result = coursesData.filter((c) => {
      // Search
      const matchesSearch =
        searchQuery.trim() === "" ||
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.toolsAndTech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category
      const matchesCategory =
        selectedCategory === "All" || c.category === selectedCategory;

      // Difficulty
      const matchesDifficulty =
        selectedDifficulty === "All" ||
        c.difficulty === selectedDifficulty ||
        c.difficulty === "All Levels";

      return matchesSearch && matchesCategory && matchesDifficulty;
    });

    // Sort
    if (sortBy === "az") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "duration") {
      result.sort((a, b) => b.modules.length - a.modules.length);
    } else {
      // Featured
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [searchQuery, selectedCategory, selectedDifficulty, sortBy]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedDifficulty("All");
    setSortBy("featured");
  };

  return (
    <div className="bg-[#F6F8FC] min-h-screen pb-24">
      {/* Page Header */}
      <section className="bg-[#0B1224] text-white py-16 lg:py-20 border-b border-[#1E2C4F] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#168CF0]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111C38] border border-[#1E2C4F] text-[#06B6D4] text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curriculum Catalogue</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Explore VIAI Labs Programmes
          </h1>

          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Practical engineering tracks in Agentic AI, Autonomous Workflows, Machine Learning, and Modern Web Software. Every course includes structured module syllabi and capstone deliverables.
          </p>

          {/* Live Search Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, technology (e.g. LangGraph, PyTorch, Next.js)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#080D1A] border border-[#1E2C4F] text-white text-sm placeholder-slate-400 focus:outline-none focus:border-[#168CF0] shadow-lg transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Filter & Course Grid Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Controls Bar: Category Pills + Dropdowns */}
        <div className="space-y-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pb-2 overflow-x-auto">
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

          {/* Secondary Controls: Difficulty & Sorting */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-white border border-slate-200 text-xs shadow-sm">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-bold text-slate-700 flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#168CF0]" />
                Filters:
              </span>

              {/* Difficulty Selector */}
              <div className="flex items-center gap-1.5">
                <span className="text-slate-500">Level:</span>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-slate-800 font-medium focus:outline-none"
                >
                  {difficulties.map((diff) => (
                    <option key={diff} value={diff}>
                      {diff}
                    </option>
                  ))}
                </select>
              </div>

              {(selectedCategory !== "All" || selectedDifficulty !== "All" || searchQuery) && (
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-1 text-[#168CF0] hover:underline font-semibold"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset All</span>
                </button>
              )}
            </div>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-slate-500">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-slate-800 font-medium focus:outline-none"
              >
                <option value="featured">Featured First</option>
                <option value="az">Alphabetical (A-Z)</option>
                <option value="duration">Curriculum Depth (Modules)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count Banner */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6">
          <span>
            Showing <strong className="text-slate-800">{filteredCourses.length}</strong> of {coursesData.length} programmes
          </span>
          <span className="text-[11px] text-slate-400">
            *All service & cohort descriptions are editable
          </span>
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="p-16 text-center bg-white rounded-2xl border border-slate-200 shadow-sm max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#0B1224]">No matching programmes found</h3>
            <p className="text-xs text-slate-500">
              Try adjusting your search keywords or clearing active category filters.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 rounded-xl bg-[#0B1224] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
