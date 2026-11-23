"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { InternshipApplication } from "@/types";
import {
  Briefcase,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Mail,
  Phone,
  Github,
  FileText,
  ExternalLink
} from "lucide-react";

export default function AdminInternshipsPage() {
  const { internshipApplications, updateApplicationStatus } = useApp();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const filtered = internshipApplications.filter((app) => {
    const matchesSearch =
      search.trim() === "" ||
      app.fullName.toLowerCase().includes(search.toLowerCase()) ||
      app.email.toLowerCase().includes(search.toLowerCase()) ||
      app.internshipTitle.toLowerCase().includes(search.toLowerCase()) ||
      app.institution.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === "All" || app.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1224]">
            Fellowship Applications Review
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Review candidate resumes, GitHub profiles, and manage interview statuses in real-time.
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-500">
          Total Candidates: <strong className="text-slate-900">{internshipApplications.length}</strong>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-xs">
        <div className="flex items-center gap-2 flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search candidates by name, college, or role..."
            className="w-full text-slate-800 placeholder-slate-400 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-slate-500 font-semibold">Filter:</span>
          {["All", "Under Review", "Shortlisted", "Accepted", "Archived"].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                statusFilter === st
                  ? "bg-[#0B1224] text-white shadow"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Applications Cards */}
      <div className="space-y-4">
        {filtered.map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 hover:border-[#168CF0]/40 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-[#0B1224]">{app.fullName}</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#168CF0]">
                    {app.internshipTitle}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  {app.institution} • {app.degreeYear}
                </p>
              </div>

              {/* Status Updater */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="text-xs text-slate-400 font-medium">Status:</span>
                <select
                  value={app.status}
                  onChange={(e) => updateApplicationStatus(app.id, e.target.value as any)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold border focus:outline-none ${
                    app.status === "Under Review"
                      ? "bg-amber-50 text-amber-800 border-amber-200"
                      : app.status === "Shortlisted"
                      ? "bg-blue-50 text-blue-800 border-blue-200"
                      : app.status === "Accepted"
                      ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                      : "bg-slate-100 text-slate-700 border-slate-200"
                  }`}
                >
                  <option value="Under Review">Under Review</option>
                  <option value="Shortlisted">Shortlisted</option>
                  <option value="Interview Scheduled">Interview Scheduled</option>
                  <option value="Accepted">Accepted</option>
                  <option value="Archived">Archived</option>
                </select>
              </div>
            </div>

            {/* Cover Note */}
            {app.coverNote && (
              <p className="text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                "{app.coverNote}"
              </p>
            )}

            {/* Links: Resume & GitHub */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-1">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${app.email}`}
                  className="flex items-center gap-1.5 text-[#168CF0] font-semibold hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{app.email}</span>
                </a>
                <span className="text-slate-600 font-medium">{app.phone}</span>
                {app.githubProfile && (
                  <a
                    href={app.githubProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-slate-800 font-semibold hover:underline"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Profile</span>
                  </a>
                )}
                {app.resumeFileName && (
                  <button
                    onClick={() => alert(`Opening resume: ${app.resumeFileName}`)}
                    className="flex items-center gap-1 text-emerald-700 font-semibold hover:underline"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{app.resumeFileName}</span>
                  </button>
                )}
              </div>

              <div className="text-[11px] text-slate-400">
                Submitted on: {app.appliedDate}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
