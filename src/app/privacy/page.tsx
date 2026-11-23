"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#F6F8FC] min-h-screen pb-24">
      {/* Header */}
      <section className="bg-[#0B1224] text-white py-16 border-b border-[#1E2C4F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111C38] border border-[#1E2C4F] text-[#06B6D4] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Legal & Data Governance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Effective Date: January 2025 • Last Updated: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm text-xs sm:text-sm text-slate-700 space-y-6 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-[#0B1224] mb-2">1. Overview & Commitment</h2>
            <p>
              VIAI Labs ("we", "our", or "us") respects your privacy. This policy explains how we collect, use, and protect your personal data when you interact with our website, enroll in our courses, download syllabi, or submit fellowship applications.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0B1224] mb-2">2. Information We Collect</h2>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and location provided during enquiry or course registration.</li>
              <li><strong>Academic & Professional Information:</strong> College, degree, year of study, GitHub repository links, and resume documents submitted for internships.</li>
              <li><strong>Technical Logs:</strong> IP address, browser type, and anonymous analytics to ensure website security and performance.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0B1224] mb-2">3. How We Use Your Data</h2>
            <p>
              Your data is strictly utilized for academic communication, admissions counseling, evaluating internship applications, providing course access, and issuing verifiable certificate credentials. We do not sell, rent, or trade your personal information with third-party marketers.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0B1224] mb-2">4. Data Storage & Security</h2>
            <p>
              We implement industry-standard encryption, role-based access controls, and secure database hosting to guard your information against unauthorized disclosure or tampering.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0B1224] mb-2">5. Contact Data Privacy Officer</h2>
            <p>
              For any questions regarding your data or to request account deletion, please contact our team at:{" "}
              <a href="mailto:privacy@viailabs.com" className="text-[#168CF0] font-semibold underline">
                privacy@viailabs.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
