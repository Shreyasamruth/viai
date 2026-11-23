"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/shared/Logo";
import { useApp } from "@/context/AppContext";
import {
  LayoutDashboard,
  BookOpen,
  FileCheck2,
  Download,
  Award,
  User,
  LogOut,
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from "lucide-react";

export const StudentSidebar: React.FC = () => {
  const pathname = usePathname();
  const { studentProfile, logout } = useApp();

  const links = [
    { name: "Dashboard", href: "/student/dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
    { name: "My Courses", href: "/student/my-courses", icon: <BookOpen className="w-4 h-4" /> },
    { name: "Assignments", href: "/student/assignments", icon: <FileCheck2 className="w-4 h-4" /> },
    { name: "Resources", href: "/student/resources", icon: <Download className="w-4 h-4" /> },
    { name: "Certificates", href: "/student/certificates", icon: <Award className="w-4 h-4" /> },
    { name: "Profile", href: "/student/profile", icon: <User className="w-4 h-4" /> },
  ];

  return (
    <aside className="w-64 bg-[#0B1224] text-white flex flex-col justify-between border-r border-[#1E2C4F] shrink-0 min-h-screen">
      <div>
        {/* Top Branding */}
        <div className="p-6 border-b border-[#1E2C4F]">
          <Logo variant="dark" />
          <div className="mt-3 flex items-center justify-between">
            <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-wider bg-[#111C38] px-2 py-0.5 rounded border border-[#1E2C4F]">
              Student Portal
            </span>
            <span className="text-[10px] text-slate-400">v2.4 Active</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#168CF0] text-white shadow-[0_0_15px_rgba(22,140,240,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Profile & Public Links */}
      <div className="p-4 border-t border-[#1E2C4F] space-y-3">
        <Link
          href="/"
          className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <span className="flex items-center gap-2">
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Public Website</span>
          </span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>

        {/* Student Quick User Box */}
        <div className="p-3 rounded-2xl bg-[#080D1A] border border-[#1E2C4F] flex items-center justify-between">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <img
              src={studentProfile.avatarUrl}
              alt={studentProfile.name}
              className="w-8 h-8 rounded-full object-cover border border-[#168CF0]/50 shrink-0"
            />
            <div className="truncate">
              <div className="text-xs font-bold text-white truncate">{studentProfile.name}</div>
              <div className="text-[10px] text-slate-400 truncate">{studentProfile.email}</div>
            </div>
          </div>
          <button
            onClick={logout}
            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-white/5 transition-colors"
            title="Sign out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
