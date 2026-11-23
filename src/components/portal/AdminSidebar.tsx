"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/shared/Logo";
import { useApp } from "@/context/AppContext";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  MessageSquare,
  Briefcase,
  Calendar,
  Layers,
  Upload,
  Settings,
  Edit3,
  ExternalLink,
  LogOut,
  ChevronRight,
  ShieldAlert
} from "lucide-react";

export const AdminSidebar: React.FC = () => {
  const pathname = usePathname();
  const { enquiries, internshipApplications, logout } = useApp();

  const newEnquiriesCount = enquiries.filter((e) => e.status === "New").length;
  const newApplicationsCount = internshipApplications.filter((a) => a.status === "Under Review").length;

  const links = [
    { name: "Dashboard", href: "/admin/dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
    { name: "Course Catalog", href: "/admin/courses", icon: <BookOpen className="w-4 h-4" /> },
    { name: "Student Directory", href: "/admin/students", icon: <Users className="w-4 h-4" /> },
    {
      name: "Inbound Enquiries",
      href: "/admin/enquiries",
      icon: <MessageSquare className="w-4 h-4" />,
      badge: newEnquiriesCount > 0 ? newEnquiriesCount : undefined
    },
    {
      name: "Internship Apps",
      href: "/admin/internships",
      icon: <Briefcase className="w-4 h-4" />,
      badge: newApplicationsCount > 0 ? newApplicationsCount : undefined
    },
    { name: "Workshops", href: "/admin/workshops", icon: <Calendar className="w-4 h-4" /> },
    { name: "Projects Showcase", href: "/admin/projects", icon: <Layers className="w-4 h-4" /> },
    { name: "Syllabi & Resources", href: "/admin/resources", icon: <Upload className="w-4 h-4" /> },
    { name: "Company Content", href: "/admin/content", icon: <Edit3 className="w-4 h-4" /> },
    { name: "Settings", href: "/admin/settings", icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <aside className="w-64 bg-[#060A14] text-white flex flex-col justify-between border-r border-[#1E2C4F] shrink-0 min-h-screen">
      <div>
        {/* Top Branding */}
        <div className="p-6 border-b border-[#1E2C4F]">
          <Logo variant="dark" />
          <div className="mt-3 flex items-center justify-between">
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              Admin Console
            </span>
            <span className="text-[10px] text-emerald-400 font-mono">SYS: OK</span>
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
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#168CF0] text-white shadow-[0_0_15px_rgba(22,140,240,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span>{link.icon}</span>
                  <span>{link.name}</span>
                </div>
                {link.badge !== undefined && (
                  <span className="px-1.5 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-bold">
                    {link.badge}
                  </span>
                )}
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

        {/* Admin Quick User Box */}
        <div className="p-3 rounded-2xl bg-[#0B1224] border border-[#1E2C4F] flex items-center justify-between">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-8 h-8 rounded-full bg-[#168CF0] text-white flex items-center justify-center font-bold text-xs shrink-0">
              AD
            </div>
            <div className="truncate">
              <div className="text-xs font-bold text-white truncate">VIAI Admin</div>
              <div className="text-[10px] text-slate-400 truncate">admin@viailabs.com</div>
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
