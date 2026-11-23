"use client";

import React, { useRef } from "react";
import { useApp } from "@/context/AppContext";
import { Logo } from "@/components/shared/Logo";
import {
  Award,
  Download,
  Share2,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Printer
} from "lucide-react";

export default function StudentCertificatesPage() {
  const { certificates, studentProfile } = useApp();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1224]">
          Verified Certificates of Completion
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Cryptographically issued credentials backed by completed practical assignments and defended capstones.
        </p>
      </div>

      <div className="space-y-8">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl"
          >
            {/* Top Control Bar */}
            <div className="bg-[#0B1224] text-white p-4 sm:px-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-[#168CF0]/20 text-[#06B6D4]">
                  <Award className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-white">
                    {cert.credentialId}
                  </h3>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Cryptographically Verified</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="px-4 py-1.5 rounded-lg bg-[#168CF0] hover:bg-[#1379d0] text-white text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download / Print PDF</span>
                </button>
              </div>
            </div>

            {/* Certificate Canvas / Styled Print Area */}
            <div className="p-8 sm:p-14 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-8 border-double border-slate-200 text-center relative select-none">
              {/* Corner Ornaments */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#168CF0]" />
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#168CF0]" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#168CF0]" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#168CF0]" />

              <div className="max-w-2xl mx-auto space-y-6">
                <div className="flex justify-center">
                  <Logo variant="light" showTagline />
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-bold tracking-widest text-[#168CF0] uppercase">
                    Certificate of Technical Competency
                  </span>
                  <p className="text-xs text-slate-500">
                    This official certificate is proudly awarded to
                  </p>
                </div>

                <div className="py-2">
                  <h2 className="text-3xl sm:text-4xl font-black text-[#0B1224] tracking-tight border-b-2 border-slate-900 pb-2 inline-block px-8">
                    {cert.recipientName}
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 max-w-lg mx-auto leading-relaxed">
                  For successfully fulfilling all rigorous engineering requirements, module labs, and demonstrating an approved capstone project in
                </p>

                <h3 className="text-xl sm:text-2xl font-black text-[#168CF0]">
                  {cert.courseTitle}
                </h3>

                {/* Skills Verified */}
                <div className="pt-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Verified Competencies & Frameworks:
                  </span>
                  <div className="flex flex-wrap items-center justify-center gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Signatures & Date */}
                <div className="pt-8 grid grid-cols-3 items-end text-xs text-slate-600 border-t border-slate-200">
                  <div className="text-left space-y-1">
                    <p className="font-bold text-slate-900">Issue Date:</p>
                    <p>{cert.issueDate}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-blue-50 border-2 border-[#168CF0] flex items-center justify-center text-[#168CF0] font-bold text-[10px] uppercase shadow-inner">
                      VERIFIED
                    </div>
                    <span className="text-[9px] font-mono text-slate-400 mt-1">VIAI SEAL</span>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="font-bold text-slate-900">Academic Director:</p>
                    <p className="font-serif italic text-sm">VIAI Faculty Board</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Public Verification Link */}
            <div className="bg-slate-50 p-4 border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span>Public Verification: <code className="font-mono bg-white px-2 py-0.5 rounded border">{cert.verificationUrl}</code></span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(cert.verificationUrl);
                  alert("Credential verification link copied!");
                }}
                className="text-[#168CF0] font-bold hover:underline self-start sm:self-auto"
              >
                Copy Credential Link
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
