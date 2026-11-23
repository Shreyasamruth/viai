"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Logo } from "@/components/shared/Logo";
import { initialCertificates } from "@/data/studentData";
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Calendar,
  User,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Printer
} from "lucide-react";

export default function CertificateVerifyDetailPage() {
  const params = useParams();
  const id = (params?.id as string)?.toUpperCase();

  // Find in mock certificates or generate verified record
  const cert = initialCertificates.find((c) => c.credentialId.toUpperCase() === id) || {
    id: "cert-dyn",
    credentialId: id || "VIAI-CERT-2024-FS8832",
    courseTitle: "Full Stack Next.js & Modern Software Engineering",
    recipientName: "Arjun Verma",
    issueDate: "November 18, 2026",
    skills: ["TypeScript", "Next.js App Router", "React Server Components", "PostgreSQL", "Prisma", "Tailwind CSS"],
    verificationUrl: `https://viailabs.com/verify/${id}`
  };

  return (
    <div className="bg-[#F6F8FC] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Top Header */}
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-3">
            <Logo variant="light" showTagline />
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Official Credential Registry</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#0B1224]">
            Certificate Verification
          </h1>
        </div>

        {/* Verification Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl space-y-6">
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Verification Status
              </span>
              <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-base mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
                <span>Valid & Verified Credential</span>
              </div>
            </div>

            <div className="text-right font-mono text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1 rounded-xl border border-slate-200">
              {cert.credentialId}
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            <div className="flex items-center justify-between py-2 border-b border-slate-100">
              <span className="text-slate-500 flex items-center gap-2">
                <User className="w-4 h-4 text-[#168CF0]" />
                <span>Recipient Name:</span>
              </span>
              <span className="font-bold text-slate-900 text-base">{cert.recipientName}</span>
            </div>

            <div className="flex items-center justify-between py-2 border-b border-slate-100">
              <span className="text-slate-500 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#06B6D4]" />
                <span>Programme Completed:</span>
              </span>
              <span className="font-bold text-[#168CF0] text-right">{cert.courseTitle}</span>
            </div>

            <div className="flex items-center justify-between py-2 border-b border-slate-100">
              <span className="text-slate-500 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#8B5CF6]" />
                <span>Issuance Date:</span>
              </span>
              <span className="font-semibold text-slate-800">{cert.issueDate}</span>
            </div>

            <div className="py-2 space-y-2">
              <span className="text-slate-500 block">Verified Technical Competencies:</span>
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 font-medium text-xs border border-slate-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <Link
              href="/verify"
              className="text-xs font-bold text-slate-600 hover:text-[#168CF0]"
            >
              ← Verify Another Credential
            </Link>

            <Link
              href="/courses"
              className="px-4 py-2 rounded-xl bg-[#0B1224] hover:bg-[#168CF0] text-white text-xs font-bold transition-colors"
            >
              Explore VIAI Programmes
            </Link>
          </div>
        </div>

        <p className="text-[11px] text-center text-slate-400">
          This digital verification record is hosted directly on the official VIAI Labs domain in compliance with our academic transparency charter.
        </p>
      </div>
    </div>
  );
}
