"use client";

import React, { useState } from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { workshopsData } from "@/data/workshopsData";
import { useApp } from "@/context/AppContext";
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Users,
  Send,
  Sparkles,
  User,
  ShieldCheck,
  GraduationCap
} from "lucide-react";

export default function WorkshopDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { addEnquiry } = useApp();

  const workshop = workshopsData.find((w) => w.slug === slug);

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [attendeesCount, setAttendeesCount] = useState("1");
  const [submitted, setSubmitted] = useState(false);

  if (!workshop) {
    return notFound();
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;

    addEnquiry({
      fullName,
      email,
      phone,
      type: "Corporate Workshop",
      subject: `Seat Reservation for Workshop: ${workshop.title}`,
      courseOrProgram: workshop.title,
      message: `Organization/College: ${organization || "Individual"} | Seats Requested: ${attendeesCount}`
    });

    setSubmitted(true);
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
            <Link href="/workshops" className="hover:text-white">Workshops</Link>
            <span>/</span>
            <span className="text-[#38BDF8] line-clamp-1">{workshop.title}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#111C38] text-[#38BDF8] border border-[#1E2C4F]">
                {workshop.format}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Audience: {workshop.targetAudience}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {workshop.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {workshop.overview}
            </p>

            {/* Quick Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 text-xs">
              <div className="p-3 rounded-xl bg-[#080D1A] border border-[#1E2C4F]">
                <span className="text-slate-400 block mb-0.5">Date & Schedule:</span>
                <span className="font-bold text-white">{workshop.dateSchedule}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#080D1A] border border-[#1E2C4F]">
                <span className="text-slate-400 block mb-0.5">Duration:</span>
                <span className="font-bold text-[#06B6D4]">{workshop.duration}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#080D1A] border border-[#1E2C4F] col-span-2 sm:col-span-1">
                <span className="text-slate-400 block mb-0.5">Mode & Venue:</span>
                <span className="font-bold text-white truncate block">{workshop.venue}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Registration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Agenda Timetable, Takeaways, Instructor */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Key Takeaways */}
            <div className="bg-white p-7 sm:p-9 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-[#0B1224] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#168CF0]" />
                <span>What You Will Master</span>
              </h2>
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {workshop.keyTakeaways.map((takeaway, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#168CF0] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Agenda */}
            <div className="bg-white p-7 sm:p-9 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-[#0B1224] flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#06B6D4]" />
                <span>Session Timetable & Agenda</span>
              </h2>
              <div className="space-y-3">
                {workshop.agenda.map((slot, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <span className="text-xs font-mono font-bold text-[#168CF0]">
                      {slot.time}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-800 font-semibold sm:text-right">
                      {slot.session}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trainer Bio */}
            <div className="bg-white p-7 sm:p-9 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-[#0B1224] flex items-center gap-2">
                <User className="w-5 h-5 text-[#8B5CF6]" />
                <span>Masterclass Leadership</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {workshop.trainerBio}
              </p>
            </div>

          </div>

          {/* Right Column: Registration Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-8 shadow-xl space-y-6 sticky top-24">
            <div>
              <span className="text-[11px] font-bold text-[#168CF0] uppercase tracking-wider">
                Seat Reservation
              </span>
              <h3 className="text-xl font-extrabold text-[#0B1224] mt-1">
                Register for this Workshop
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Individual seats and institutional group reservations available.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-emerald-950 text-base">Seat Reserved!</h4>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Thank you, {fullName}. We have recorded your interest. An event coordinator will send calendar invites and prerequisite lab setup guides to {email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Arjun Verma"
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
                    <label className="block text-slate-700 font-semibold mb-1">Phone *</label>
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
                    <label className="block text-slate-700 font-semibold mb-1">College or Company</label>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="Organization Name"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Attendees Count</label>
                    <select
                      value={attendeesCount}
                      onChange={(e) => setAttendeesCount(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
                    >
                      <option value="1">1 Person (Individual)</option>
                      <option value="2-5">2 to 5 Persons (Small Team)</option>
                      <option value="6-20">6 to 20 Persons (Cohort)</option>
                      <option value="50+">50+ (Full College Batch)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#168CF0] to-[#06B6D4] hover:from-[#1379d0] hover:to-[#059eb8] text-white font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Reserve Workshop Pass</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
