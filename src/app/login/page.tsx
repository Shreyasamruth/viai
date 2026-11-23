"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { Logo } from "@/components/shared/Logo";
import {
  Lock,
  Mail,
  User,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Eye,
  EyeOff
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const { loginAs } = useApp();

  const [role, setRole] = useState<"student" | "admin">("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleStandardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginAs(role, email || (role === "admin" ? "admin@viailabs.com" : "student@viailabs.com"));
    router.push(role === "admin" ? "/admin/dashboard" : "/student/dashboard");
  };

  const handleDemoStudent = () => {
    loginAs("student", "arjun.verma@viailabs.com", "Arjun Verma");
    router.push("/student/dashboard");
  };

  const handleDemoAdmin = () => {
    loginAs("admin", "admin@viailabs.com", "VIAI Labs Director");
    router.push("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#0B1224] text-white flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#168CF0]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 text-center space-y-4">
        <div className="flex justify-center">
          <Logo variant="dark" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Sign In to VIAI Portal
        </h2>
        <p className="text-xs text-slate-400">
          Access your courses, assignments, certificates, and administration tools.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4 sm:px-0">
        <div className="bg-[#0F172A] py-8 px-6 shadow-2xl rounded-3xl border border-[#1E2C4F] space-y-6 sm:px-10">
          {/* Role Toggle Selector */}
          <div className="flex p-1 rounded-xl bg-[#080D1A] border border-[#1E2C4F]">
            <button
              type="button"
              onClick={() => setRole("student")}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                role === "student"
                  ? "bg-[#168CF0] text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Student Portal</span>
            </button>
            <button
              type="button"
              onClick={() => setRole("admin")}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                role === "admin"
                  ? "bg-[#168CF0] text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Admin Portal</span>
            </button>
          </div>

          {/* Quick 1-Click Demo Buttons */}
          <div className="p-3.5 rounded-2xl bg-[#080D1A] border border-[#1E2C4F] space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block text-center">
              Instant 1-Click Demo Login:
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleDemoStudent}
                className="py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-emerald-400 transition-colors text-center"
              >
                Demo Student →
              </button>
              <button
                type="button"
                onClick={handleDemoAdmin}
                className="py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-[#06B6D4] transition-colors text-center"
              >
                Demo Admin →
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleStandardSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                {role === "admin" ? "Administrator Email" : "Student Email Address"}
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={role === "admin" ? "admin@viailabs.com" : "student@viailabs.com"}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#080D1A] border border-[#1E2C4F] text-white placeholder-slate-500 focus:outline-none focus:border-[#168CF0]"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-slate-300 font-semibold">Password</label>
                <Link
                  href="/forgot-password"
                  className="text-[11px] text-[#168CF0] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#080D1A] border border-[#1E2C4F] text-white placeholder-slate-500 focus:outline-none focus:border-[#168CF0]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded border-slate-700 text-[#168CF0]" />
                <span>Keep me signed in</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#168CF0] to-[#06B6D4] hover:from-[#1379d0] hover:to-[#059eb8] text-white font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-1.5"
            >
              <span>Sign In to {role === "admin" ? "Admin" : "Student"} Portal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          <div className="pt-2 border-t border-[#1E2C4F] text-center text-xs text-slate-400">
            Don't have an account yet?{" "}
            <Link href="/register" className="text-[#168CF0] font-bold hover:underline">
              Create an Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
