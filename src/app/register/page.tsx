"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { Logo } from "@/components/shared/Logo";
import {
  User,
  Mail,
  Phone,
  Lock,
  GraduationCap,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const { loginAs, showToast } = useApp();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [targetTrack, setTargetTrack] = useState("Agentic AI & Automation");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) return;

    loginAs("student", email, name);
    showToast("Registration successful! Welcome to the VIAI Student Portal.", "success");
    router.push("/student/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#0B1224] text-white flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#168CF0]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 text-center space-y-4">
        <div className="flex justify-center">
          <Logo variant="dark" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Create Student Account
        </h2>
        <p className="text-xs text-slate-400">
          Join modern cohorts, submit assignments, and track digital credentials.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4 sm:px-0">
        <div className="bg-[#0F172A] py-8 px-6 shadow-2xl rounded-3xl border border-[#1E2C4F] space-y-5 sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Full Name *</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Arjun Verma"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#080D1A] border border-[#1E2C4F] text-white focus:outline-none focus:border-[#168CF0]"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Email Address *</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#080D1A] border border-[#1E2C4F] text-white focus:outline-none focus:border-[#168CF0]"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Phone / WhatsApp</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#080D1A] border border-[#1E2C4F] text-white focus:outline-none focus:border-[#168CF0]"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Primary Track Interest</label>
              <select
                value={targetTrack}
                onChange={(e) => setTargetTrack(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#080D1A] border border-[#1E2C4F] text-white focus:outline-none focus:border-[#168CF0]"
              >
                <option value="Agentic AI & Automation">Agentic AI & Autonomous Automation</option>
                <option value="Generative AI & LLMs">Generative AI & Enterprise LLMs</option>
                <option value="Applied AI & ML">Applied AI & Machine Learning</option>
                <option value="Full Stack Next.js">Full Stack Next.js Software Engineering</option>
                <option value="Data Science">Data Science & Predictive Analytics</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Create Password *</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#080D1A] border border-[#1E2C4F] text-white focus:outline-none focus:border-[#168CF0]"
                />
              </div>
            </div>

            <div className="text-[11px] text-slate-400">
              By creating an account, you agree to our{" "}
              <Link href="/terms" className="text-[#168CF0] underline">Terms</Link> and{" "}
              <Link href="/privacy" className="text-[#168CF0] underline">Privacy Policy</Link>.
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#168CF0] to-[#06B6D4] text-white font-bold text-xs shadow-lg flex items-center justify-center gap-1.5"
            >
              <span>Complete Registration</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          <div className="pt-2 border-t border-[#1E2C4F] text-center text-xs text-slate-400">
            Already registered?{" "}
            <Link href="/login" className="text-[#168CF0] font-bold hover:underline">
              Sign In Instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
