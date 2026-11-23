"use client";

import React, { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { X, Send, Sparkles, CheckCircle2 } from "lucide-react";

export const EnquiryModal: React.FC = () => {
  const { activeEnquiryCourse, closeEnquiryModal, addEnquiry } = useApp();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (activeEnquiryCourse) {
      setSubmitted(false);
    }
  }, [activeEnquiryCourse]);

  if (!activeEnquiryCourse) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;

    addEnquiry({
      fullName,
      email,
      phone,
      type: "Course Enquiry",
      subject: `Enrolment Enquiry for ${activeEnquiryCourse.title}`,
      courseOrProgram: activeEnquiryCourse.title,
      message: message || `I would like to enquire about cohort schedule, prerequisites, and fees for ${activeEnquiryCourse.title}.`
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      closeEnquiryModal();
      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#0B1224] border border-[#1E2C4F] rounded-2xl shadow-2xl overflow-hidden text-white">
        {/* Top Glowing Header */}
        <div className="relative px-6 py-5 border-b border-[#1E2C4F] bg-gradient-to-r from-[#111C38] via-[#0B1224] to-[#111C38]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-[#168CF0]/20 text-[#06B6D4]">
                <Sparkles className="w-4 h-4" />
              </span>
              <div>
                <h3 className="font-bold text-lg text-white">Course Enquiry & Enrolment</h3>
                <p className="text-xs text-[#64748B]">Connect with VIAI Labs admissions</p>
              </div>
            </div>
            <button
              onClick={closeEnquiryModal}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Course Summary Banner */}
        <div className="px-6 py-3 bg-[#111B33]/80 border-b border-[#1E2C4F] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#168CF0]">
              {activeEnquiryCourse.category}
            </span>
            <h4 className="text-sm font-semibold text-white line-clamp-1">
              {activeEnquiryCourse.title}
            </h4>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-[#168CF0]/15 text-[#38BDF8] border border-[#168CF0]/30 shrink-0">
            {activeEnquiryCourse.difficulty}
          </span>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-white mb-1">Enquiry Submitted!</h4>
              <p className="text-sm text-slate-300 max-w-xs">
                Our admissions counselor will contact you via email/phone with confirmed batch details and fee schedule.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Full Name <span className="text-[#06B6D4]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#080D1A] border border-[#1E2C4F] text-white placeholder-slate-500 focus:outline-none focus:border-[#168CF0] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Email Address <span className="text-[#06B6D4]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#080D1A] border border-[#1E2C4F] text-white placeholder-slate-500 focus:outline-none focus:border-[#168CF0] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Phone / WhatsApp <span className="text-[#06B6D4]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#080D1A] border border-[#1E2C4F] text-white placeholder-slate-500 focus:outline-none focus:border-[#168CF0] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Questions or Background Note (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your learning goals or ask any specific questions about this course..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#080D1A] border border-[#1E2C4F] text-white placeholder-slate-500 focus:outline-none focus:border-[#168CF0] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#168CF0] to-[#06B6D4] hover:from-[#1379d0] hover:to-[#059eb8] text-white font-semibold text-sm shadow-[0_0_20px_rgba(22,140,240,0.4)] transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                  Submit Course Enquiry
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400">
                Admissions counselors reply within 24 business hours. No spam, guaranteed.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
