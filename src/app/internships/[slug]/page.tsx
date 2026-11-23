"use client";

import React, { useState } from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { internshipsData } from "@/data/internshipsData";
import { useApp } from "@/context/AppContext";
import {
  Briefcase,
  Clock,
  MapPin,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  FileText,
  Upload,
  Send,
  Sparkles,
  ArrowRight,
  Code2
} from "lucide-react";

export default function InternshipDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { addInternshipApplication } = useApp();

  const intern = internshipsData.find((i) => i.slug === slug);

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [institution, setInstitution] = useState("");
  const [degreeYear, setDegreeYear] = useState("");
  const [githubProfile, setGithubProfile] = useState("");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [coverNote, setCoverNote] = useState("");
  const [resumeFileName, setResumeFileName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!intern) {
    return notFound();
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setResumeFileName(file.name);
    }
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !institution) return;

    setIsSubmitting(true);

    setTimeout(() => {
      addInternshipApplication({
        internshipId: intern.id,
        internshipTitle: intern.title,
        fullName,
        email,
        phone,
        institution,
        degreeYear,
        githubProfile,
        portfolioUrl,
        resumeFileName: resumeFileName || "Applicant_Resume.pdf",
        coverNote
      });

      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-[#F6F8FC] min-h-screen pb-24">
      {/* Page Hero */}
      <section className="bg-[#0B1224] text-white py-16 lg:py-20 border-b border-[#1E2C4F] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#168CF0]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/internships" className="hover:text-white">Internships</Link>
            <span>/</span>
            <span className="text-[#38BDF8] line-clamp-1">{intern.title}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#111C38] text-[#38BDF8] border border-[#1E2C4F]">
                {intern.department}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {intern.openings} Openings
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {intern.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {intern.overview}
            </p>

            {/* Quick Meta */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 text-xs">
              <div className="p-3 rounded-xl bg-[#080D1A] border border-[#1E2C4F]">
                <span className="text-slate-400 block mb-0.5">Duration:</span>
                <span className="font-bold text-white">{intern.duration}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#080D1A] border border-[#1E2C4F]">
                <span className="text-slate-400 block mb-0.5">Work Mode:</span>
                <span className="font-bold text-[#06B6D4]">{intern.mode}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#080D1A] border border-[#1E2C4F]">
                <span className="text-slate-400 block mb-0.5">Location:</span>
                <span className="font-bold text-white">{intern.location}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#080D1A] border border-[#1E2C4F]">
                <span className="text-slate-400 block mb-0.5">Deadline:</span>
                <span className="font-bold text-emerald-400">{intern.deadline}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details & Working Application Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Responsibilities, Weekly Roadmap, Outcomes */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Responsibilities */}
            <div className="bg-white p-7 sm:p-9 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-[#0B1224] flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#168CF0]" />
                <span>Responsibilities & Project Scope</span>
              </h2>
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {intern.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#168CF0] shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Structured Roadmap */}
            <div className="bg-white p-7 sm:p-9 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-[#0B1224] flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#06B6D4]" />
                <span>Structured Weekly Milestone Roadmap</span>
              </h2>
              <div className="space-y-3">
                {intern.weeklyRoadmap.map((road, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#168CF0] uppercase tracking-wider block">
                        {road.week}
                      </span>
                      <h4 className="font-bold text-sm text-[#0B1224]">{road.focus}</h4>
                    </div>
                    <div className="text-xs text-slate-600 sm:text-right">
                      <span className="font-semibold text-slate-800">Target Milestone: </span>
                      <span>{road.milestone}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements & Eligibility */}
            <div className="bg-white p-7 sm:p-9 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-[#0B1224] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span>Eligibility & Technical Requirements</span>
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {intern.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learning Outcomes & Evaluation */}
            <div className="bg-white p-7 sm:p-9 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-[#0B1224] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#8B5CF6]" />
                <span>Learning Outcomes & Certification</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                {intern.learningOutcomes.map((out, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>

              {intern.stipendNote && (
                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 mt-4">
                  <strong>Stipend Policy: </strong> {intern.stipendNote}
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Working Application Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-8 shadow-xl space-y-6 sticky top-24">
            <div>
              <span className="text-[11px] font-bold text-[#168CF0] uppercase tracking-wider">
                Application Gateway
              </span>
              <h3 className="text-xl font-extrabold text-[#0B1224] mt-1">
                Apply for this Fellowship
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Applications are reviewed by the engineering leadership team.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-emerald-950 text-base">Application Received!</h4>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Thank you, {fullName}. Your application has been logged under ID #{intern.id} and is now under review. You can track this in our admin portal or await our admissions email.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Sanya Kapoor"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">College / University *</label>
                    <input
                      type="text"
                      required
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      placeholder="e.g. DTU / VIT / IIT"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Degree & Year</label>
                    <input
                      type="text"
                      value={degreeYear}
                      onChange={(e) => setDegreeYear(e.target.value)}
                      placeholder="e.g. B.Tech CSE, 3rd Year"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">GitHub / Code Repository URL</label>
                  <input
                    type="url"
                    value={githubProfile}
                    onChange={(e) => setGithubProfile(e.target.value)}
                    placeholder="https://github.com/username"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
                  />
                </div>

                {/* Resume Upload Box */}
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Upload Resume (PDF / DOCX)</label>
                  <div className="relative border-2 border-dashed border-slate-300 hover:border-[#168CF0] rounded-xl p-4 text-center cursor-pointer transition-colors bg-slate-50">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <Upload className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                    <span className="text-slate-600 block text-xs">
                      {resumeFileName ? (
                        <span className="text-emerald-600 font-bold">Selected: {resumeFileName}</span>
                      ) : (
                        "Click to select resume document"
                      )}
                    </span>
                    <span className="text-[10px] text-slate-400">PDF or Word format (Max 5MB)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Why are you interested in this role?</label>
                  <textarea
                    rows={3}
                    value={coverNote}
                    onChange={(e) => setCoverNote(e.target.value)}
                    placeholder="Briefly highlight past projects or your motivation to work on this stack..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#168CF0] to-[#06B6D4] hover:from-[#1379d0] hover:to-[#059eb8] text-white font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Submitting Application..." : "Submit Fellowship Application"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
