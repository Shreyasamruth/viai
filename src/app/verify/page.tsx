"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/shared/Logo";
import { ShieldCheck, Search, ArrowRight, Award } from "lucide-react";

export default function CertificateLookupPage() {
  const router = useRouter();
  const [credentialId, setCredentialId] = useState("");

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!credentialId.trim()) return;
    router.push(`/verify/${encodeURIComponent(credentialId.trim().toUpperCase())}`);
  };

  return (
    <div className="bg-[#F6F8FC] min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-xl mx-auto w-full text-center space-y-6">
        <div className="flex justify-center mb-2">
          <Logo variant="light" showTagline />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#168CF0] text-xs font-bold uppercase tracking-wider">
          <Award className="w-4 h-4" />
          <span>Credential Registry</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-[#0B1224] tracking-tight">
          Verify Official VIAI Labs Credential
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Employers, institutions, and recruiters can authenticate certificates awarded to VIAI Labs graduates using their unique Credential ID.
        </p>

        {/* Lookup Box */}
        <form onSubmit={handleLookup} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl space-y-4 text-left">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Enter Certificate Credential ID:
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={credentialId}
                onChange={(e) => setCredentialId(e.target.value)}
                placeholder="e.g. VIAI-CERT-2024-FS8832"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-slate-900 focus:outline-none focus:border-[#168CF0]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Try sample credential:</span>
            <button
              type="button"
              onClick={() => setCredentialId("VIAI-CERT-2024-FS8832")}
              className="text-[#168CF0] font-mono font-bold hover:underline"
            >
              VIAI-CERT-2024-FS8832
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#168CF0] to-[#06B6D4] text-white font-bold text-xs shadow-lg flex items-center justify-center gap-1.5 transition-all"
          >
            <span>Verify Authenticity</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
