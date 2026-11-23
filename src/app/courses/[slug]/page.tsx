"use client";

import React, { useState } from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { coursesData } from "@/data/coursesData";
import { useApp } from "@/context/AppContext";
import { CourseCard } from "@/components/courses/CourseCard";
import { Card3D } from "@/components/shared/Card3D";
import {
  Clock,
  Layers,
  CheckCircle2,
  ChevronDown,
  Download,
  FileText,
  User,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
  Code2,
  Terminal,
  Send
} from "lucide-react";

export default function CourseDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { openEnquiryModal, openSyllabusModal } = useApp();

  const course = coursesData.find((c) => c.slug === slug);
  const [openModuleId, setOpenModuleId] = useState<string>("m1");

  if (!course) {
    return notFound();
  }

  const toggleModule = (id: string) => {
    setOpenModuleId(openModuleId === id ? "" : id);
  };

  const relatedCourses = coursesData
    .filter((c) => c.id !== course.id && (c.category === course.category || c.featured))
    .slice(0, 3);

  return (
    <div className="bg-[#F6F8FC] min-h-screen pb-24">
      {/* Course Hero Section */}
      <section className="bg-[#0B1224] text-white py-16 lg:py-20 border-b border-[#1E2C4F] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#168CF0]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-white">Courses</Link>
            <span>/</span>
            <span className="text-[#38BDF8] line-clamp-1">{course.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Headline & Meta */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#111C38] text-[#38BDF8] border border-[#1E2C4F]">
                  {course.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white">
                  {course.difficulty} Level
                </span>
                {course.badge && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/90 text-white">
                    {course.badge}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                {course.fullDescription}
              </p>

              {/* Meta Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-[#080D1A] border border-[#1E2C4F] text-xs">
                  <span className="text-slate-400 block mb-0.5">Duration:</span>
                  <span className="font-bold text-white text-sm">{course.duration}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#080D1A] border border-[#1E2C4F] text-xs">
                  <span className="text-slate-400 block mb-0.5">Delivery Mode:</span>
                  <span className="font-bold text-[#06B6D4] text-sm">{course.mode}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#080D1A] border border-[#1E2C4F] text-xs col-span-2 sm:col-span-1">
                  <span className="text-slate-400 block mb-0.5">Syllabus Version:</span>
                  <span className="font-bold text-white text-sm">{course.syllabusVersion}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openEnquiryModal(course)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#168CF0] to-[#06B6D4] hover:from-[#1379d0] hover:to-[#059eb8] text-white font-bold text-sm shadow-[0_0_20px_rgba(22,140,240,0.4)] transition-all flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Enquire / Enrol in Next Batch</span>
                </button>

                <button
                  onClick={() => openSyllabusModal(course)}
                  className="px-6 py-3 rounded-xl bg-[#111C38] border border-[#1E2C4F] hover:bg-[#16254a] text-slate-200 hover:text-white font-semibold text-sm transition-all flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-[#06B6D4]" />
                  <span>Preview & Download Syllabus PDF</span>
                </button>
              </div>
            </div>

            {/* Right Card: Quick Info Card with 3D Tilt */}
            <div className="lg:col-span-4">
              <Card3D glowColor="cyan" maxTilt={8} scale={1.02}>
                <div className="bg-[#0F172A] border border-[#1E2C4F] rounded-2xl p-6 shadow-2xl space-y-5">
                  <div className="relative h-44 rounded-xl overflow-hidden bg-slate-900 border border-[#1E2C4F]">
                    <img
                      src={course.thumbnailUrl}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-3 text-xs text-slate-300">
                    <div className="flex items-center justify-between pb-2 border-b border-[#1E2C4F]">
                      <span className="text-slate-400">Credential Granted:</span>
                      <span className="font-semibold text-white">Verified Certificate</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-[#1E2C4F]">
                      <span className="text-slate-400">Total Core Modules:</span>
                      <span className="font-semibold text-white">{course.modules.length} Modules</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-[#1E2C4F]">
                      <span className="text-slate-400">Capstone Review:</span>
                      <span className="font-semibold text-emerald-400">Live Defense</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Last Syllabus Update:</span>
                      <span className="font-semibold text-slate-200">{course.syllabusLastUpdated}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#080D1A] border border-[#1E2C4F] text-xs text-slate-400 space-y-1">
                    <div className="font-bold text-white flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#06B6D4]" />
                      <span>Transparent Fee Policy</span>
                    </div>
                    <p className="text-[11px]">
                      Batch fees and installment details are confirmed upon advisor consultation.
                    </p>
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* Main Course Content Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Left Content: Objectives, Syllabus, Projects */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Learning Objectives */}
            <div className="bg-white p-7 sm:p-9 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-[#0B1224] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#168CF0]" />
                <span>What You Will Learn</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                {course.learningObjectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-bold text-[#168CF0] shrink-0">{i + 1}.</span>
                    <span>{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prerequisites */}
            <div className="bg-white p-7 sm:p-9 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-[#0B1224] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#06B6D4]" />
                <span>Prerequisites</span>
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {course.prerequisites.map((prereq, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#168CF0] shrink-0 mt-2" />
                    <span>{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Module-wise Syllabus (Accordion) */}
            <div className="bg-white p-7 sm:p-9 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-[#0B1224] flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#168CF0]" />
                    <span>Module-Wise Syllabus</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    {course.modules.length} structured learning modules
                  </p>
                </div>
                <button
                  onClick={() => openSyllabusModal(course)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#168CF0] hover:underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Complete PDF</span>
                </button>
              </div>

              {/* Accordion List */}
              <div className="space-y-3">
                {course.modules.map((mod) => {
                  const isOpen = openModuleId === mod.id;
                  return (
                    <div
                      key={mod.id}
                      className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                        isOpen ? "border-[#168CF0]/40 bg-blue-50/15" : "border-slate-200 bg-white"
                      }`}
                    >
                      <button
                        onClick={() => toggleModule(mod.id)}
                        className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0B1224] hover:text-[#168CF0] transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-lg bg-slate-100 text-[#168CF0] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                            0{mod.moduleNumber}
                          </span>
                          <span>{mod.title}</span>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-xs font-normal text-slate-500 hidden sm:inline">
                            {mod.duration}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                              isOpen ? "rotate-180 text-[#168CF0]" : ""
                            }`}
                          />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 space-y-4 border-t border-slate-100 animate-fade-in">
                          <p className="leading-relaxed">{mod.description}</p>
                          <div>
                            <span className="font-bold text-slate-900 block mb-1.5">
                              Key Topics:
                            </span>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 list-disc list-inside text-slate-700">
                              {mod.topics.map((t, idx) => (
                                <li key={idx}>{t}</li>
                              ))}
                            </ul>
                          </div>

                          {mod.handsOnLab && (
                            <div className="p-3 rounded-lg bg-cyan-50 border border-cyan-200 text-xs text-cyan-900">
                              <span className="font-bold">Hands-On Lab: </span>
                              {mod.handsOnLab}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Practical Assignments & Capstone */}
            <div className="bg-white p-7 sm:p-9 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-[#0B1224] flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#8B5CF6]" />
                <span>Hands-on Assignments & Capstone Project</span>
              </h2>

              {/* Practical Assignments List */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Mandatory Lab Assignments:
                </span>
                {course.practicalAssignments.map((asg, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                    <span className="font-bold text-[#8B5CF6] shrink-0">Lab #{i + 1}:</span>
                    <span>{asg}</span>
                  </div>
                ))}
              </div>

              {/* Capstone Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-200 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#168CF0] text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  <span>Final Capstone Requirement</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B1224]">
                  {course.capstoneProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {course.capstoneProject.description}
                </p>
                <div>
                  <span className="text-xs font-bold text-slate-900 block mb-1">
                    Graduation Deliverables:
                  </span>
                  <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
                    {course.capstoneProject.deliverables.map((del, idx) => (
                      <li key={idx}>{del}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar: Tools, Instructor, Enquire Box */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Tools and Technologies */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-[#0B1224] uppercase tracking-wider">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {course.toolsAndTech.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-100 text-slate-800 border border-slate-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Instructor Details */}
            {course.instructor && (
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <h3 className="text-sm font-bold text-[#0B1224] uppercase tracking-wider">
                  Instruction & Mentorship
                </h3>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#0B1224] text-white flex items-center justify-center font-bold">
                    <User className="w-5 h-5 text-[#06B6D4]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0B1224]">{course.instructor.name}</h4>
                    <p className="text-xs text-[#168CF0] font-medium">{course.instructor.role}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {course.instructor.bio}
                </p>
              </div>
            )}

            {/* Enrolment CTA Box */}
            <div className="bg-[#0B1224] text-white p-6 rounded-2xl border border-[#1E2C4F] shadow-xl space-y-4">
              <h3 className="font-bold text-base text-white">
                Interested in joining the next batch?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Admissions are reviewed on a rolling basis. Submit your details to confirm batch timings, prerequisites, and payment options.
              </p>
              <button
                onClick={() => openEnquiryModal(course)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#168CF0] to-[#06B6D4] hover:from-[#1379d0] hover:to-[#059eb8] text-white font-bold text-xs shadow-lg transition-all"
              >
                Request Cohort Details
              </button>
            </div>
          </div>
        </div>

        {/* Related Programmes Section */}
        {relatedCourses.length > 0 && (
          <div className="pt-20">
            <h2 className="text-2xl font-bold text-[#0B1224] mb-8">
              Related Programmes & Learning Tracks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedCourses.map((rel) => (
                <CourseCard key={rel.id} course={rel} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
