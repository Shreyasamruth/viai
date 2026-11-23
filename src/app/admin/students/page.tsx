"use client";

import React, { useState } from "react";
import { Users, Search, GraduationCap, CheckCircle2, Award, Mail } from "lucide-react";
import { initialStudentProfile } from "@/data/studentData";

export default function AdminStudentsPage() {
  const [students, setStudents] = useState([
    initialStudentProfile,
    {
      id: "std-002",
      name: "Priya Sundaram",
      email: "priya.sundaram@gmail.com",
      phone: "+91 98112 33445",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      joinedDate: "November 2024",
      college: "Delhi Technological University",
      degree: "B.Tech IT (Final Year)",
      enrolledCourses: [
        {
          courseId: "course-agentic-ai",
          enrolledAt: "November 2024",
          progressPercentage: 45,
          completedModules: 2,
          totalModules: 5,
          lastAccessed: "Today"
        }
      ]
    },
    {
      id: "std-003",
      name: "Rohan Verma",
      email: "rohan.v@outlook.com",
      phone: "+91 97711 22334",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      joinedDate: "October 2024",
      college: "BITS Pilani",
      degree: "B.E. Computer Science",
      enrolledCourses: [
        {
          courseId: "course-aiml-foundation",
          enrolledAt: "October 2024",
          progressPercentage: 88,
          completedModules: 4,
          totalModules: 5,
          lastAccessed: "2 days ago"
        }
      ]
    }
  ]);

  const [search, setSearch] = useState("");

  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      s.college.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1224]">
            Enrolled Student Directory
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Track student cohort attendance, module progress, and capstone completions.
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-500">
          Total Enrolled: <strong className="text-slate-900">{students.length}</strong>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center gap-2">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by student name, email, or institution..."
            className="w-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-slate-800 font-bold border-b border-slate-200">
              <tr>
                <th className="p-4">Student</th>
                <th className="p-4">College / Degree</th>
                <th className="p-4">Active Courses</th>
                <th className="p-4">Average Progress</th>
                <th className="p-4">Joined</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((std) => {
                const avgProgress = Math.round(
                  std.enrolledCourses.reduce((acc, c) => acc + c.progressPercentage, 0) /
                    std.enrolledCourses.length
                );

                return (
                  <tr key={std.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={std.avatarUrl}
                          alt={std.name}
                          className="w-8 h-8 rounded-full object-cover border border-[#168CF0]/50"
                        />
                        <div>
                          <span className="font-bold text-slate-900 block">{std.name}</span>
                          <span className="text-[11px] text-slate-400">{std.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="font-medium text-slate-800 block">{std.college}</span>
                      <span className="text-[10px] text-slate-400">{std.degree}</span>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#168CF0]">
                        {std.enrolledCourses.length} Enrolled
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 rounded-full bg-slate-100 overflow-hidden">
                          <div
                            className="h-full bg-emerald-500 rounded-full"
                            style={{ width: `${avgProgress}%` }}
                          />
                        </div>
                        <span className="font-bold text-slate-900">{avgProgress}%</span>
                      </div>
                    </td>
                    <td className="p-4 text-slate-500">{std.joinedDate}</td>
                    <td className="p-4 text-right">
                      <a
                        href={`mailto:${std.email}`}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-[#168CF0] hover:text-white text-slate-700 transition-colors inline-flex items-center gap-1 font-semibold"
                      >
                        <Mail className="w-3 h-3" />
                        <span>Email</span>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
