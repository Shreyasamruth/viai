"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { FileCheck2, Clock, CheckCircle2, Send, Github, Sparkles } from "lucide-react";

export default function StudentAssignmentsPage() {
  const { assignments, submitAssignment } = useApp();
  const [activeSubmittingId, setActiveSubmittingId] = useState<string | null>(null);
  const [repoLink, setRepoLink] = useState("");

  const handleOpenSubmit = (id: string) => {
    setActiveSubmittingId(id);
    setRepoLink("");
  };

  const handlePerformSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeSubmittingId || !repoLink) return;

    submitAssignment(activeSubmittingId, repoLink);
    setActiveSubmittingId(null);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1224]">
          Assignments & Hands-On Labs
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Submit GitHub repositories, review automated test evaluations, and view instructor code comments.
        </p>
      </div>

      <div className="space-y-6">
        {assignments.map((asg) => (
          <div
            key={asg.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 hover:border-[#168CF0]/40 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[11px] font-bold text-[#168CF0] uppercase tracking-wider block">
                  {asg.courseTitle}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0B1224]">{asg.title}</h3>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold self-start sm:self-auto ${
                  asg.status === "Pending"
                    ? "bg-amber-100 text-amber-800"
                    : asg.status === "Submitted"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-emerald-100 text-emerald-800"
                }`}
              >
                Status: {asg.status}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {asg.description}
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>Due Date: <strong>{asg.dueDate}</strong></span>
            </div>

            {/* If Graded */}
            {asg.score && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-1">
                <div className="flex items-center justify-between font-bold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Grading Score: {asg.score}</span>
                  </span>
                  <span>Evaluated</span>
                </div>
                {asg.feedback && (
                  <p className="text-emerald-800 italic">" {asg.feedback} "</p>
                )}
              </div>
            )}

            {/* Submission Link if already submitted */}
            {asg.submissionLink && (
              <div className="text-xs text-slate-600 flex items-center gap-2 pt-1">
                <Github className="w-4 h-4 text-slate-800" />
                <span>Submitted URL: </span>
                <a
                  href={asg.submissionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#168CF0] font-semibold hover:underline"
                >
                  {asg.submissionLink}
                </a>
              </div>
            )}

            {/* Submission Button / Form */}
            {asg.status === "Pending" && (
              <div className="pt-2">
                {activeSubmittingId === asg.id ? (
                  <form onSubmit={handlePerformSubmit} className="flex gap-2 text-xs">
                    <input
                      type="url"
                      required
                      value={repoLink}
                      onChange={(e) => setRepoLink(e.target.value)}
                      placeholder="Paste your GitHub repository or commit URL..."
                      className="flex-1 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#168CF0]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-[#168CF0] hover:bg-[#1379d0] text-white font-bold transition-all"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveSubmittingId(null)}
                      className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600"
                    >
                      Cancel
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={() => handleOpenSubmit(asg.id)}
                    className="px-4 py-2 rounded-xl bg-[#0B1224] hover:bg-[#168CF0] text-white font-bold text-xs transition-colors flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Lab Deliverable</span>
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
