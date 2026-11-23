"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { coursesData } from "@/data/coursesData";
import { Card3D } from "@/components/shared/Card3D";
import {
  BookOpen,
  FileCheck2,
  Award,
  Clock,
  Sparkles,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export default function StudentDashboardPage() {
  const { studentProfile, assignments, certificates } = useApp();

  const enrolledCourseRecords = studentProfile.enrolledCourses.map((enr) => {
    const course = coursesData.find((c) => c.id === enr.courseId);
    return { ...enr, course };
  });

  const pendingAssignments = assignments.filter((a) => a.status === "Pending");

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Welcome Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0B1224] via-[#111C38] to-[#0B1224] text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-[#1E2C4F]">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#38BDF8] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Active Student Cohort</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Welcome back, {studentProfile.name}!
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            {studentProfile.college} • {studentProfile.degree}
          </p>
        </div>

        <Link
          href="/student/my-courses"
          className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#168CF0] to-[#06B6D4] text-white font-bold text-xs shadow-lg hover:shadow-xl transition-all shrink-0 self-start sm:self-auto flex items-center gap-2"
        >
          <span>Resume Current Module</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* 3D Interactive Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card3D glowColor="blue" maxTilt={8} scale={1.03}>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 space-y-1 h-full">
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#168CF0]" />
              <span>Enrolled Courses</span>
            </span>
            <div className="text-2xl sm:text-3xl font-black text-[#0B1224] pt-1">
              {studentProfile.enrolledCourses.length}
            </div>
            <span className="text-[11px] text-emerald-600 font-semibold block">Both Active</span>
          </div>
        </Card3D>

        <Card3D glowColor="violet" maxTilt={8} scale={1.03}>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 space-y-1 h-full">
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
              <FileCheck2 className="w-4 h-4 text-amber-500" />
              <span>Pending Labs</span>
            </span>
            <div className="text-2xl sm:text-3xl font-black text-[#0B1224] pt-1">
              {pendingAssignments.length}
            </div>
            <span className="text-[11px] text-amber-600 font-semibold block">Due Dec 10</span>
          </div>
        </Card3D>

        <Card3D glowColor="emerald" maxTilt={8} scale={1.03}>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 space-y-1 h-full">
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-500" />
              <span>Certificates Issued</span>
            </span>
            <div className="text-2xl sm:text-3xl font-black text-[#0B1224] pt-1">
              {certificates.length}
            </div>
            <span className="text-[11px] text-[#168CF0] font-semibold block">Verifiable</span>
          </div>
        </Card3D>

        <Card3D glowColor="cyan" maxTilt={8} scale={1.03}>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 space-y-1 h-full">
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-[#8B5CF6]" />
              <span>Average Score</span>
            </span>
            <div className="text-2xl sm:text-3xl font-black text-[#0B1224] pt-1">
              96%
            </div>
            <span className="text-[11px] text-emerald-600 font-semibold block">Top 5% Cohort</span>
          </div>
        </Card3D>
      </div>

      {/* Main Row: Course In-Progress + Pending Deadlines */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Enrolled Courses */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#0B1224]">Your Active Courses</h2>
            <Link href="/student/my-courses" className="text-xs font-bold text-[#168CF0] hover:underline">
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {enrolledCourseRecords.map((item) => {
              if (!item.course) return null;
              return (
                <div
                  key={item.courseId}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-[#168CF0]/40 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-bold text-[#168CF0] uppercase tracking-wider block">
                        {item.course.category}
                      </span>
                      <h3 className="text-base font-bold text-[#0B1224]">{item.course.title}</h3>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold self-start sm:self-auto">
                      Module {item.completedModules} of {item.totalModules} Completed
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-600">Syllabus Progress</span>
                      <span className="text-[#168CF0]">{item.progressPercentage}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#168CF0] to-[#06B6D4] rounded-full transition-all duration-500"
                        style={{ width: `${item.progressPercentage}%` }}
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Last accessed: {item.lastAccessed}</span>
                    <Link
                      href={`/courses/${item.course.slug}`}
                      className="font-bold text-[#168CF0] hover:underline flex items-center gap-1"
                    >
                      <span>Continue Learning</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Deadlines & Quick Downloads */}
        <div className="lg:col-span-4 space-y-6">
          <h2 className="text-lg font-bold text-[#0B1224]">Action Items</h2>

          {/* Assignments Due */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Pending Lab Submissions
            </h3>
            <div className="space-y-3">
              {assignments.map((asg) => (
                <div key={asg.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 line-clamp-1">{asg.title}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        asg.status === "Pending"
                          ? "bg-amber-100 text-amber-800"
                          : asg.status === "Submitted"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      {asg.status}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500">Due: {asg.dueDate}</div>
                </div>
              ))}
            </div>

            <Link
              href="/student/assignments"
              className="w-full text-center block py-2.5 rounded-xl bg-[#0B1224] text-white text-xs font-semibold hover:bg-[#168CF0] transition-colors"
            >
              Submit Assignments
            </Link>
          </div>

          {/* Certificate Quick Badge */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center font-bold text-[#168CF0]">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0B1224] text-sm">
              Certified Full-Stack Engineer
            </h3>
            <p className="text-xs text-slate-600">
              Credential ID: <strong>VIAI-CERT-2024-FS8832</strong>
            </p>
            <Link
              href="/student/certificates"
              className="text-xs font-bold text-[#168CF0] hover:underline block pt-1"
            >
              View & Download PDF Certificate →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
