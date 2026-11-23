"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Enquiry } from "@/types";
import {
  MessageSquare,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Mail,
  Phone,
  Tag
} from "lucide-react";

export default function AdminEnquiriesPage() {
  const { enquiries, updateEnquiryStatus } = useApp();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const filtered = enquiries.filter((e) => {
    const matchesSearch =
      search.trim() === "" ||
      e.fullName.toLowerCase().includes(search.toLowerCase()) ||
      e.email.toLowerCase().includes(search.toLowerCase()) ||
      (e.subject && e.subject.toLowerCase().includes(search.toLowerCase())) ||
      e.message.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === "All" || e.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1224]">
            Inbound Enquiries & Lead Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Real-time messages submitted via Course modals, Contact page, and Institutional inquiries.
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-500">
          Total Inquiries: <strong className="text-slate-900">{enquiries.length}</strong>
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
            placeholder="Search by lead name, email, or message..."
            className="w-full text-slate-800 placeholder-slate-400 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-slate-500 font-semibold">Status:</span>
          {["All", "New", "Contacted", "In Review", "Enrolled", "Closed"].map((st) => (
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

      {/* Enquiries List */}
      <div className="space-y-4">
        {filtered.map((enq) => (
          <div
            key={enq.id}
            className={`bg-white rounded-2xl border p-6 shadow-sm transition-all space-y-4 ${
              enq.status === "New" ? "border-rose-300 bg-rose-50/10" : "border-slate-200"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-[#0B1224]">{enq.fullName}</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#168CF0]">
                  {enq.type}
                </span>
                {enq.courseOrProgram && (
                  <span className="text-xs text-slate-500 hidden sm:inline">
                    • {enq.courseOrProgram}
                  </span>
                )}
              </div>

              {/* Status Updater Select */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="text-xs text-slate-400 font-medium">Status:</span>
                <select
                  value={enq.status}
                  onChange={(e) => updateEnquiryStatus(enq.id, e.target.value as any)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold border focus:outline-none ${
                    enq.status === "New"
                      ? "bg-rose-50 text-rose-800 border-rose-200"
                      : enq.status === "Contacted"
                      ? "bg-blue-50 text-blue-800 border-blue-200"
                      : enq.status === "Enrolled"
                      ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                      : "bg-slate-100 text-slate-700 border-slate-200"
                  }`}
                >
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="In Review">In Review</option>
                  <option value="Enrolled">Enrolled</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
            </div>

            {/* Message Body */}
            <div>
              {enq.subject && (
                <div className="text-xs font-bold text-slate-900 mb-1">{enq.subject}</div>
              )}
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                "{enq.message}"
              </p>
            </div>

            {/* Contact Meta & Timestamp */}
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 pt-1">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${enq.email}`}
                  className="flex items-center gap-1.5 text-[#168CF0] font-semibold hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{enq.email}</span>
                </a>
                <a
                  href={`tel:${enq.phone}`}
                  className="flex items-center gap-1.5 text-slate-700 font-semibold hover:underline"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{enq.phone}</span>
                </a>
              </div>

              <div className="text-[11px] text-slate-400">
                Received: {new Date(enq.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-xs text-slate-500">
            No inquiries matching the selected filters.
          </div>
        )}
      </div>
    </div>
  );
}
