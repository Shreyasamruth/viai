"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import {
  GraduationCap,
  Building2,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Users,
  Award,
  Send,
  ArrowRight,
  BookOpen
} from "lucide-react";

export default function InstitutionsPage() {
  const { addEnquiry } = useApp();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [designation, setDesignation] = useState("");
  const [interestType, setInterestType] = useState("Campus AI Lab Setup");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !institutionName) return;

    addEnquiry({
      fullName,
      email,
      phone: phone || "Not provided",
      type: "Institutional Partnership",
      subject: `Institutional Inquiry: ${interestType} from ${institutionName}`,
      courseOrProgram: "Institutional Partnership",
      message: `${message} [Designation: ${designation || "Not specified"} | Focus: ${interestType}]`
    });

    setSubmitted(true);
  };

  const offerings = [
    {
      title: "Campus AI & Innovation Labs",
      description:
        "Turnkey setup of GPU-accelerated student innovation labs with standardized developer environments, open-weights foundation models, and localized agent orchestration sandboxes."
    },
    {
      title: "Faculty Development Programmes (FDP)",
      description:
        "Immersive technical training for computer science and engineering faculty covering Agentic AI, modern LLM evaluation, PyTorch deep learning, and current industry DevOps."
    },
    {
      title: "Credit-Aligned Curriculum Integration",
      description:
        "Co-designed elective and minor degree syllabi aligned with AICTE and UGC credit standards, ensuring academic compliance while delivering real industry competence."
    },
    {
      title: "Student Internship & Capstone Pipelines",
      description:
        "Direct pathways for 3rd and 4th-year engineering students to contribute to applied projects under VIAI Labs mentors, earning verifiable credential IDs."
    }
  ];

  return (
    <div className="bg-[#F6F8FC] min-h-screen pb-24">
      {/* Page Hero */}
      <section className="bg-[#0B1224] text-white py-16 lg:py-24 border-b border-[#1E2C4F] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#168CF0]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111C38] border border-[#1E2C4F] text-[#06B6D4] text-xs font-bold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Higher Education Alliances</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Empower Your Campus with <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#168CF0] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">
              Frontier AI Infrastructure
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            VIAI Labs partners with forward-thinking universities and engineering colleges to establish campus AI labs, upskill faculty, and deliver verifiable project-based curricula.
          </p>
        </div>
      </section>

      {/* Institutional Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#168CF0] uppercase tracking-wider">
            Collaboration Pathways
          </span>
          <h2 className="text-3xl font-extrabold text-[#0B1224] mt-1">
            Institutional Solutions Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {offerings.map((off, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#168CF0] flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1224]">{off.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {off.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partnership Contact Form */}
        <div className="bg-[#0B1224] text-white rounded-3xl border border-[#1E2C4F] p-8 sm:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-[#06B6D4] uppercase tracking-wider">
                Institutional MoU Inquiries
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Partner with VIAI Labs for Academic Excellence
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Let's discuss how we can bring practical industry AI exposure to your faculty and student body under a structured Memorandum of Understanding (MoU).
              </p>
              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#168CF0]" />
                  <span>Customizable semester-long elective frameworks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#06B6D4]" />
                  <span>On-campus bootcamps with certified industry trainers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Verifiable digital credentials for participating students</span>
                </div>
              </div>
            </div>

            {/* Inbound Form */}
            <div className="lg:col-span-6 bg-[#080D1A] border border-[#1E2C4F] p-6 sm:p-8 rounded-2xl">
              {submitted ? (
                <div className="text-center py-8 space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-base">Inquiry Recorded!</h4>
                  <p className="text-xs text-slate-300">
                    Our institutional partnership director will connect with your administration office within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Dr. Rajesh Nair"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#1E2C4F] text-white focus:outline-none focus:border-[#168CF0]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Official Email *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="dean@university.edu.in"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#1E2C4F] text-white focus:outline-none focus:border-[#168CF0]"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 94450 88712"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#1E2C4F] text-white focus:outline-none focus:border-[#168CF0]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Institution Name *</label>
                      <input
                        type="text"
                        required
                        value={institutionName}
                        onChange={(e) => setInstitutionName(e.target.value)}
                        placeholder="University / College Name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#1E2C4F] text-white focus:outline-none focus:border-[#168CF0]"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Designation</label>
                      <input
                        type="text"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        placeholder="Dean / HOD / Principal"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#1E2C4F] text-white focus:outline-none focus:border-[#168CF0]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Primary Interest Area</label>
                    <select
                      value={interestType}
                      onChange={(e) => setInterestType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#1E2C4F] text-white focus:outline-none focus:border-[#168CF0]"
                    >
                      <option value="Campus AI Lab Setup">Campus AI Innovation Lab Setup</option>
                      <option value="Faculty Development Programme">Faculty Development Programme (FDP)</option>
                      <option value="Curriculum Integration">Academic Curriculum Co-Design</option>
                      <option value="Institutional MoU">Comprehensive Institutional MoU</option>
                      <option value="Student Bootcamp">On-Campus Technical Hackathon / Bootcamp</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#168CF0] to-[#06B6D4] text-white font-bold text-xs shadow-lg flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Institutional Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
