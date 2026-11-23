"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#F6F8FC] min-h-screen pb-24">
      {/* Header */}
      <section className="bg-[#0B1224] text-white py-16 border-b border-[#1E2C4F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111C38] border border-[#1E2C4F] text-[#06B6D4] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Academic Guidelines</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white">
            Terms of Service & Academic Policies
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Effective Date: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm text-xs sm:text-sm text-slate-700 space-y-6 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-[#0B1224] mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing the VIAI Labs platform, browsing our syllabus library, applying for internships, or enrolling in cohorts, you agree to comply with these Terms of Service and all applicable laws.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0B1224] mb-2">2. Academic Integrity & Honest Marketing Policy</h2>
            <p>
              VIAI Labs provides practical technology training and industry skills development. We do not provide or advertise guaranteed jobs, salaries, or guaranteed third-party placements. Course completion certificates are awarded strictly to learners who successfully complete assignments and defend their capstone projects.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0B1224] mb-2">3. Intellectual Property</h2>
            <p>
              All proprietary courseware, syllabus structures, lab templates, and branding elements remain the exclusive intellectual property of VIAI Labs. Students retain full copyright over the original software code and capstone repositories they write.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0B1224] mb-2">4. Code of Conduct</h2>
            <p>
              All students, interns, and workshop attendees are expected to maintain professional conduct in code reviews, online Discord/Slack community forums, and live interactive classrooms. Plagiarism or harassment results in immediate revocation of portal access without refund.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0B1224] mb-2">5. Inquiries & Legal Contact</h2>
            <p>
              For legal inquiries regarding terms and policies, please reach out to:{" "}
              <a href="mailto:legal@viailabs.com" className="text-[#168CF0] font-semibold underline">
                legal@viailabs.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
