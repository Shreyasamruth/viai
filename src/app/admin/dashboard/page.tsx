"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { coursesData } from "@/data/coursesData";
import { Card3D } from "@/components/shared/Card3D";
import {
  BookOpen,
  Users,
  MessageSquare,
  Briefcase,
  TrendingUp,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Edit3
} from "lucide-react";

export default function AdminDashboardPage() {
  const { enquiries, internshipApplications, companyConfig } = useApp();

  const newEnquiries = enquiries.filter((e) => e.status === "New");
  const pendingApps = internshipApplications.filter((a) => a.status === "Under Review");

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1224]">
            Operations & Administration Console
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Real-time control room for course admissions, inquiries, fellowships, and platform content.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/admin/content"
            className="px-4 py-2 rounded-xl bg-white border border-slate-200 hover:border-[#168CF0] text-xs font-semibold text-slate-700 transition-colors flex items-center gap-1.5"
          >
            <Edit3 className="w-3.5 h-3.5 text-[#168CF0]" />
            <span>Edit Company Details</span>
          </Link>
          <Link
            href="/admin/courses"
            className="px-4 py-2 rounded-xl bg-[#0B1224] hover:bg-[#168CF0] text-white text-xs font-bold transition-colors flex items-center gap-1.5"
          >
            <span>Manage Courses</span>
          </Link>
        </div>
      </div>

      {/* 3D Primary KPI Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card3D glowColor="blue" maxTilt={8} scale={1.03}>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 space-y-1 h-full">
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#168CF0]" />
              <span>Active Courses</span>
            </span>
            <div className="text-2xl sm:text-3xl font-black text-[#0B1224] pt-1">
              {coursesData.length}
            </div>
            <span className="text-[11px] text-emerald-600 font-semibold block">All tracks live</span>
          </div>
        </Card3D>

        <Card3D glowColor="violet" maxTilt={8} scale={1.03}>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 space-y-1 h-full">
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-rose-500" />
              <span>Total Enquiries</span>
            </span>
            <div className="text-2xl sm:text-3xl font-black text-[#0B1224] pt-1">
              {enquiries.length}
            </div>
            <span className="text-[11px] text-rose-600 font-semibold block">
              {newEnquiries.length} Require Triage
            </span>
          </div>
        </Card3D>

        <Card3D glowColor="cyan" maxTilt={8} scale={1.03}>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 space-y-1 h-full">
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-amber-500" />
              <span>Fellowship Apps</span>
            </span>
            <div className="text-2xl sm:text-3xl font-black text-[#0B1224] pt-1">
              {internshipApplications.length}
            </div>
            <span className="text-[11px] text-amber-600 font-semibold block">
              {pendingApps.length} Under Review
            </span>
          </div>
        </Card3D>

        <Card3D glowColor="emerald" maxTilt={8} scale={1.03}>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 space-y-1 h-full">
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-emerald-500" />
              <span>Active Students</span>
            </span>
            <div className="text-2xl sm:text-3xl font-black text-[#0B1224] pt-1">
              142
            </div>
            <span className="text-[11px] text-[#168CF0] font-semibold block">Pan-India Cohorts</span>
          </div>
        </Card3D>
      </div>

      {/* Two Columns: Recent Inbound Inquiries & Fellowship Applications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Recent Enquiries Box */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h2 className="text-base font-bold text-[#0B1224]">Recent Inbound Enquiries</h2>
              <p className="text-xs text-slate-500">Live requests submitted through website</p>
            </div>
            <Link
              href="/admin/enquiries"
              className="text-xs font-bold text-[#168CF0] hover:underline"
            >
              View All ({enquiries.length}) →
            </Link>
          </div>

          <div className="space-y-3">
            {enquiries.slice(0, 4).map((enq) => (
              <div
                key={enq.id}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">{enq.fullName}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      enq.status === "New"
                        ? "bg-rose-100 text-rose-800"
                        : enq.status === "Contacted"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    {enq.status}
                  </span>
                </div>
                <div className="text-slate-600 truncate">{enq.subject || enq.courseOrProgram}</div>
                <div className="text-[11px] text-slate-400">
                  {enq.email} • {enq.phone}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Internship Applications Box */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h2 className="text-base font-bold text-[#0B1224]">Fellowship Applications</h2>
              <p className="text-xs text-slate-500">Candidate submissions with resumes</p>
            </div>
            <Link
              href="/admin/internships"
              className="text-xs font-bold text-[#168CF0] hover:underline"
            >
              Review All ({internshipApplications.length}) →
            </Link>
          </div>

          <div className="space-y-3">
            {internshipApplications.slice(0, 4).map((app) => (
              <div
                key={app.id}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">{app.fullName}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      app.status === "Under Review"
                        ? "bg-amber-100 text-amber-800"
                        : app.status === "Shortlisted"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    {app.status}
                  </span>
                </div>
                <div className="text-[#168CF0] font-medium truncate">{app.internshipTitle}</div>
                <div className="text-[11px] text-slate-500">
                  {app.institution} • Applied {app.appliedDate}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Quick Settings Banner */}
      <div className="p-6 rounded-2xl bg-[#0B1224] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-sm text-white">Configurable Contact & Tagline Information</h3>
          <p className="text-xs text-slate-300">
            Phone numbers, addresses, emails, and header announcement banners are editable live without redeploying code.
          </p>
        </div>
        <Link
          href="/admin/content"
          className="px-4 py-2 rounded-xl bg-[#168CF0] hover:bg-[#1379d0] text-white text-xs font-bold transition-colors shrink-0"
        >
          Open Content Editor
        </Link>
      </div>
    </div>
  );
}
