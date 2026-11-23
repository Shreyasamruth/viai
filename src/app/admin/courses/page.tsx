"use client";

import React, { useState } from "react";
import Link from "next/link";
import { coursesData } from "@/data/coursesData";
import { Course } from "@/types";
import {
  BookOpen,
  Search,
  Plus,
  ExternalLink,
  Edit,
  Trash2,
  CheckCircle2,
  Sparkles
} from "lucide-react";

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState<Course[]>(coursesData);
  const [search, setSearch] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  // New course temp form
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Agentic AI & Automation");
  const [newDifficulty, setNewDifficulty] = useState<any>("Intermediate");
  const [newDuration, setNewDuration] = useState("8 Weeks");

  const filtered = courses.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;

    const newCourse: Course = {
      id: "course-" + Date.now(),
      slug: newTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      title: newTitle,
      category: newCategory as any,
      shortDescription: "Custom programme added via VIAI Labs Admin Console.",
      fullDescription: "Comprehensive training module created in the admin portal.",
      difficulty: newDifficulty,
      duration: newDuration,
      mode: "Live Online",
      featured: true,
      thumbnailUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      learningObjectives: ["Core objective 1", "Core objective 2"],
      prerequisites: ["Basic programming familiarity"],
      toolsAndTech: ["Python", "FastAPI"],
      modules: [
        {
          id: "m1",
          moduleNumber: 1,
          title: "Introduction & Foundational Architecture",
          duration: "Week 1",
          description: "Overview and environment setup.",
          topics: ["Setup", "Basics"]
        }
      ],
      practicalAssignments: ["Assignment 1"],
      miniProjects: ["Mini Project 1"],
      capstoneProject: {
        title: "Capstone System",
        description: "Capstone project requirement.",
        deliverables: ["Git Repo"]
      },
      syllabusPdfFileName: "Curriculum.pdf",
      syllabusLastUpdated: "Current",
      syllabusVersion: "v1.0"
    };

    setCourses([newCourse, ...courses]);
    setShowAddModal(false);
    setNewTitle("");
    alert("New course added to catalogue!");
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1224]">
            Course Management Catalogue
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Create, update, or publish courses across the public website and student portal.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2.5 rounded-xl bg-[#168CF0] hover:bg-[#1379d0] text-white text-xs font-bold transition-colors flex items-center gap-1.5 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Course</span>
        </button>
      </div>

      {/* Search and Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center gap-2">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses by title or category..."
            className="w-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-slate-800 font-bold border-b border-slate-200">
              <tr>
                <th className="p-4">Course Title</th>
                <th className="p-4">Category</th>
                <th className="p-4">Level</th>
                <th className="p-4">Modules</th>
                <th className="p-4">Duration</th>
                <th className="p-4">Version</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 font-bold text-slate-900 max-w-xs truncate">
                    {c.title}
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#168CF0]">
                      {c.category}
                    </span>
                  </td>
                  <td className="p-4">{c.difficulty}</td>
                  <td className="p-4 font-semibold text-slate-800">{c.modules.length}</td>
                  <td className="p-4">{c.duration}</td>
                  <td className="p-4 font-mono text-[11px]">{c.syllabusVersion}</td>
                  <td className="p-4 text-right space-x-2">
                    <Link
                      href={`/courses/${c.slug}`}
                      target="_blank"
                      className="text-slate-400 hover:text-[#168CF0] inline-block"
                      title="View on Public Site"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Course Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-[#0B1224]">Add New Programme</h3>
            <form onSubmit={handleAddCourse} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Course Title *</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Autonomous Multi-Agent Swarms"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
                >
                  <option value="Agentic AI & Automation">Agentic AI & Automation</option>
                  <option value="Generative AI">Generative AI</option>
                  <option value="AI & Machine Learning">AI & Machine Learning</option>
                  <option value="Full Stack Development">Full Stack Development</option>
                  <option value="Data Science & Analytics">Data Science & Analytics</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Difficulty</label>
                  <select
                    value={newDifficulty}
                    onChange={(e) => setNewDifficulty(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="All Levels">All Levels</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Duration</label>
                  <input
                    type="text"
                    value={newDuration}
                    onChange={(e) => setNewDuration(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
                  />
                </div>
              </div>

              <div className="pt-3 flex gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#168CF0] text-white font-bold text-xs"
                >
                  Save & Publish Course
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-600 text-xs font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
