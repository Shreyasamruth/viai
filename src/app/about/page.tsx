"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Target,
  Eye,
  BrainCircuit,
  GraduationCap,
  Users,
  Code2,
  Award,
  ArrowRight
} from "lucide-react";

export default function AboutPage() {
  const principles = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-[#168CF0]" />,
      title: "Production Engineering Over Theory",
      desc: "We prioritize actual codebases, containerized microservices, and live deployments rather than abstract slides."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#06B6D4]" />,
      title: "Verifiable Academic Transparency",
      desc: "We reject deceptive placement guarantees. Every credential we grant is backed by verified code reviews and capstone evaluations."
    },
    {
      icon: <Target className="w-6 h-6 text-[#8B5CF6]" />,
      title: "Frontier Technology Focus",
      desc: "Our curriculums evolve at the frontier: Agentic AI, autonomous multi-agent loops, modern RAG, and modern Next.js systems."
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-500]" />,
      title: "Mentorship by Active Practitioners",
      desc: "Learners are guided directly by software architects and AI researchers actively building production systems in industry."
    }
  ];

  return (
    <div className="bg-[#F6F8FC] min-h-screen">
      {/* Page Hero */}
      <section className="bg-[#0B1224] text-white py-20 lg:py-28 relative overflow-hidden border-b border-[#1E2C4F]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#168CF0]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111C38] border border-[#1E2C4F] text-[#06B6D4] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About VIAI Labs</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto">
            Empowering the Next Generation of AI & Technology Builders
          </h1>

          <p className="text-slate-300 text-sm sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            VIAI Labs is an applied technology education and research organization founded on the premise: "Learn. Build. Innovate."
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#168CF0] flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#0B1224]">Our Mission</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To bridge the critical divide between conventional academic technology degrees and contemporary industry software engineering. We equip ambitious students and working engineers with hands-on mastery in applied artificial intelligence, autonomous systems, and modern cloud architectures.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#06B6D4] flex items-center justify-center font-bold">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#0B1224]">Our Vision</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To be India's premier center of excellence for applied AI and technology innovation, renowned for uncompromising curriculum depth, ethical transparency, verifiable credentials, and meaningful engineering contributions.
            </p>
          </div>
        </div>
      </section>

      {/* Foundational Principles */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#168CF0] uppercase tracking-wider">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-extrabold text-[#0B1224] mt-1">
              What Defines the VIAI Labs Standard
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((pr, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                  {pr.icon}
                </div>
                <h3 className="font-bold text-[#0B1224] text-base">{pr.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pr.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pedagogy Comparison Table */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1224]">
            How We Compare
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Why engineers and institutions choose VIAI Labs over conventional options.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#0B1224] text-white">
              <tr>
                <th className="p-4 sm:p-5 font-semibold">Evaluation Criteria</th>
                <th className="p-4 sm:p-5 font-bold text-[#38BDF8]">VIAI Labs</th>
                <th className="p-4 sm:p-5 font-semibold text-slate-400">Traditional Academies</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900">Curriculum Currency</td>
                <td className="p-4 sm:p-5 font-bold text-[#168CF0]">2025–26 Modern Stack (LangGraph, CrewAI, Next.js 14)</td>
                <td className="p-4 sm:p-5 text-slate-500">Outdated legacy frameworks</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900">Project Evaluation</td>
                <td className="p-4 sm:p-5 font-bold text-[#168CF0]">Live Demo Defense & Code Reviews</td>
                <td className="p-4 sm:p-5 text-slate-500">Multiple-choice quizzes</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900">Syllabus Availability</td>
                <td className="p-4 sm:p-5 font-bold text-[#168CF0]">Complete Open Module Breakdown & PDF Download</td>
                <td className="p-4 sm:p-5 text-slate-500">Hidden behind sales calls</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900">Placement Claims</td>
                <td className="p-4 sm:p-5 font-bold text-[#168CF0]">Ethical & Honest Skill Development</td>
                <td className="p-4 sm:p-5 text-slate-500">Misleading "100% guarantee" marketing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24 max-w-5xl mx-auto px-4 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B1224] text-white shadow-2xl space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold">Ready to Build With Us?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Explore our comprehensive course catalogue or connect with an admissions counselor today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/courses"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#168CF0] to-[#06B6D4] text-white font-bold text-xs shadow-lg"
            >
              Explore Courses
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-[#111C38] border border-[#1E2C4F] text-slate-200 font-semibold text-xs"
            >
              Contact Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
