"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  ShieldCheck,
  Sparkles
} from "lucide-react";

export default function ContactPage() {
  const { companyConfig, addEnquiry } = useApp();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState<any>("Course Enquiry");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !message) return;

    addEnquiry({
      fullName,
      email,
      phone,
      type: inquiryType,
      subject: subject || `${inquiryType} from ${fullName}`,
      message
    });

    setSubmitted(true);
  };

  return (
    <div className="bg-[#F6F8FC] min-h-screen pb-24">
      {/* Page Hero */}
      <section className="bg-[#0B1224] text-white py-16 lg:py-20 border-b border-[#1E2C4F] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#168CF0]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111C38] border border-[#1E2C4F] text-[#06B6D4] text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Admissions & Inquiries</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Connect With VIAI Labs
          </h1>

          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Have questions regarding upcoming cohorts, syllabus modules, enterprise training, or university partnerships? Our team replies to every message.
          </p>
        </div>
      </section>

      {/* Main Grid Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-extrabold text-[#0B1224]">Direct Communication</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Connect through phone, email, or instant messaging.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                {/* Primary Admissions Phone */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#168CF0] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">
                      Admissions Desk
                    </span>
                    <a
                      href={`tel:${companyConfig.phonePrimary.replace(/[^0-9+]/g, '')}`}
                      className="font-bold text-[#0B1224] hover:text-[#168CF0] text-sm"
                    >
                      {companyConfig.phonePrimary}
                    </a>
                    <span className="text-[11px] text-slate-500 block">Mon - Sat, 9:30 AM – 6:30 PM</span>
                  </div>
                </div>

                {/* WhatsApp Instant Chat */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-emerald-50/50 border border-emerald-200">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4 fill-[#25D366]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-800 uppercase font-bold block">
                      Instant WhatsApp Desk
                    </span>
                    <a
                      href={companyConfig.whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#0B1224] hover:text-[#25D366] text-sm block"
                    >
                      Chat with Counselor
                    </a>
                    <span className="text-[11px] text-slate-500">Average response time: 15 mins</span>
                  </div>
                </div>

                {/* Email Support */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-xl bg-cyan-50 text-[#06B6D4] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">
                      Email Addresses
                    </span>
                    <a
                      href={`mailto:${companyConfig.admissionsEmail}`}
                      className="font-bold text-[#0B1224] hover:text-[#168CF0] block"
                    >
                      {companyConfig.admissionsEmail}
                    </a>
                    <a
                      href={`mailto:${companyConfig.partnershipsEmail}`}
                      className="text-xs text-slate-600 hover:text-[#168CF0] block"
                    >
                      {companyConfig.partnershipsEmail} (Partnerships)
                    </a>
                  </div>
                </div>

                {/* Physical Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-[#8B5CF6] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">
                      Innovation Hubs & Centers
                    </span>
                    {companyConfig.addressLines.map((line, idx) => (
                      <p key={idx} className="font-medium text-slate-800 text-xs">{line}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center gap-3 text-xs text-slate-700">
                <Clock className="w-5 h-5 text-[#168CF0] shrink-0" />
                <div>
                  <span className="font-bold block text-slate-900">Office Working Hours</span>
                  <span>{companyConfig.operatingHours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Working Inbound Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <div>
              <span className="text-[11px] font-bold text-[#168CF0] uppercase tracking-wider">
                Send a Message
              </span>
              <h2 className="text-2xl font-extrabold text-[#0B1224] mt-1">
                Tell Us How We Can Help
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Fill in the details below and an admissions counselor or technical advisor will contact you.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-emerald-950">Message Sent Successfully!</h3>
                <p className="text-xs text-emerald-800 max-w-sm mx-auto leading-relaxed">
                  Thank you, {fullName}. Your enquiry has been received and routed to our team. We will review your requirements and respond via {email} or phone shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage("");
                    setSubject("");
                  }}
                  className="px-5 py-2 rounded-xl bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1.5">
                      Full Name <span className="text-[#168CF0]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Aditi Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1.5">
                      Email Address <span className="text-[#168CF0]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1.5">
                      Phone / WhatsApp Number <span className="text-[#168CF0]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1.5">
                      Category of Enquiry
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
                    >
                      <option value="Course Enquiry">Course Enquiry & Enrolment</option>
                      <option value="Internship Application">Internship & Fellowships</option>
                      <option value="Institutional Partnership">University / College MoU</option>
                      <option value="Corporate Workshop">Corporate / Enterprise Training</option>
                      <option value="General">General Inquiries</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1.5">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Brief summary of your inquiry..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1.5">
                    Your Message <span className="text-[#168CF0]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your background, questions about curriculum, batch timings, or institutional requirements..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#168CF0] to-[#06B6D4] hover:from-[#1379d0] hover:to-[#059eb8] text-white font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to VIAI Labs</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
