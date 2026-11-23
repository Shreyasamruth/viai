"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { Logo } from "@/components/shared/Logo";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Bot,
  BrainCircuit,
  GraduationCap,
  Briefcase,
  Layers,
  User,
  ShieldCheck,
  PhoneCall
} from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { companyConfig, currentUser } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCoursesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Courses",
      href: "/courses",
      hasDropdown: true
    },
    { name: "AI Solutions", href: "/services/ai-automation", isHighlight: true },
    { name: "Internships", href: "/internships" },
    { name: "Projects", href: "/projects" },
    { name: "Workshops", href: "/workshops" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <>
      {/* Optional Top Announcement Banner */}
      {companyConfig.showAnnouncement && (
        <div className="bg-gradient-to-r from-[#060A14] via-[#0B1224] to-[#060A14] border-b border-[#168CF0]/25 text-xs text-slate-300 py-1.5 px-4 text-center font-medium relative z-40">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1 text-[#06B6D4] font-semibold">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Admissions Open:</span>
            </span>
            <span className="text-white hidden sm:inline">
              {companyConfig.announcementText}
            </span>
            <Link
              href="/courses"
              className="text-[#168CF0] hover:text-[#38BDF8] underline font-semibold ml-1 inline-flex items-center gap-0.5"
            >
              Explore Cohorts <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      )}

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#0B1224]/95 backdrop-blur-md border-b border-[#1E2C4F] shadow-lg py-3"
            : "bg-[#0B1224]/80 backdrop-blur-sm border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo variant="dark" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setCoursesDropdownOpen(true)}
                      onMouseLeave={() => setCoursesDropdownOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                          isActive
                            ? "text-white bg-white/10"
                            : "text-slate-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {link.name}
                        <ChevronDown className="w-3.5 h-3.5 opacity-70 transition-transform group-hover:rotate-180" />
                      </Link>

                      {/* Dropdown Menu */}
                      {coursesDropdownOpen && (
                        <div className="absolute top-full left-0 w-72 pt-2 animate-fade-in z-50">
                          <div className="p-3 bg-[#0B1224] border border-[#1E2C4F] rounded-xl shadow-2xl space-y-1">
                            <div className="px-2 py-1 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                              Specialized Tracks
                            </div>
                            <Link
                              href="/courses?category=Agentic+AI+%26+Automation"
                              className="flex items-center gap-2.5 p-2 rounded-lg text-xs font-medium text-slate-200 hover:text-white hover:bg-[#168CF0]/15 transition-colors"
                            >
                              <Bot className="w-4 h-4 text-[#06B6D4]" />
                              <div>
                                <div className="font-semibold">Agentic AI & Automation</div>
                                <div className="text-[10px] text-slate-400">Autonomous multi-agent workflows</div>
                              </div>
                            </Link>
                            <Link
                              href="/courses?category=Generative+AI"
                              className="flex items-center gap-2.5 p-2 rounded-lg text-xs font-medium text-slate-200 hover:text-white hover:bg-[#168CF0]/15 transition-colors"
                            >
                              <Sparkles className="w-4 h-4 text-[#168CF0]" />
                              <div>
                                <div className="font-semibold">Generative AI & LLMs</div>
                                <div className="text-[10px] text-slate-400">Fine-tuning, RAG & Vector DBs</div>
                              </div>
                            </Link>
                            <Link
                              href="/courses?category=AI+%26+Machine+Learning"
                              className="flex items-center gap-2.5 p-2 rounded-lg text-xs font-medium text-slate-200 hover:text-white hover:bg-[#168CF0]/15 transition-colors"
                            >
                              <BrainCircuit className="w-4 h-4 text-[#8B5CF6]" />
                              <div>
                                <div className="font-semibold">AI & Machine Learning</div>
                                <div className="text-[10px] text-slate-400">Deep Learning, Vision, PyTorch</div>
                              </div>
                            </Link>
                            <Link
                              href="/courses?category=Full+Stack+Development"
                              className="flex items-center gap-2.5 p-2 rounded-lg text-xs font-medium text-slate-200 hover:text-white hover:bg-[#168CF0]/15 transition-colors"
                            >
                              <Layers className="w-4 h-4 text-emerald-400" />
                              <div>
                                <div className="font-semibold">Full Stack Next.js</div>
                                <div className="text-[10px] text-slate-400">TypeScript, App Router, Postgres</div>
                              </div>
                            </Link>

                            <div className="pt-2 border-t border-[#1E2C4F] flex items-center justify-between px-2 text-xs">
                              <Link
                                href="/syllabus"
                                className="text-[#38BDF8] hover:underline font-semibold"
                              >
                                Syllabus Library →
                              </Link>
                              <Link
                                href="/courses"
                                className="text-slate-400 hover:text-white"
                              >
                                View All 12+
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors relative ${
                      link.isHighlight
                        ? "text-[#06B6D4] hover:text-[#38BDF8] font-semibold"
                        : isActive
                        ? "text-white bg-white/10"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                    {link.isHighlight && (
                      <span className="absolute -top-1 -right-1 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06B6D4]"></span>
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions: Portal & CTA */}
            <div className="hidden sm:flex items-center gap-3">
              {currentUser ? (
                <Link
                  href={currentUser.role === "admin" ? "/admin/dashboard" : "/student/dashboard"}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111B33] border border-[#1E2C4F] text-xs font-semibold text-slate-200 hover:text-white hover:border-[#168CF0] transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{currentUser.role === "admin" ? "Admin Portal" : "Student Portal"}</span>
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
                >
                  Sign In
                </Link>
              )}

              <Link
                href="/courses"
                className="relative inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#168CF0] to-[#06B6D4] hover:from-[#1379d0] hover:to-[#059eb8] shadow-[0_0_15px_rgba(22,140,240,0.35)] transition-all duration-200"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <Link
                href="/courses"
                className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-white bg-[#168CF0]"
              >
                Courses
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#0B1224] border-b border-[#1E2C4F] px-4 pt-3 pb-6 animate-fade-in space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5"
              >
                <span>{link.name}</span>
                {link.isHighlight && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#06B6D4]/20 text-[#06B6D4]">
                    NEW
                  </span>
                )}
              </Link>
            ))}

            <div className="pt-4 border-t border-[#1E2C4F] space-y-2">
              <Link
                href="/syllabus"
                className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#38BDF8]"
              >
                <Layers className="w-4 h-4" />
                <span>Searchable Syllabus Library</span>
              </Link>
              <Link
                href="/institutions"
                className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-300"
              >
                <GraduationCap className="w-4 h-4" />
                <span>For Colleges & Institutions</span>
              </Link>
              <Link
                href="/login"
                className="block text-center w-full py-2.5 rounded-xl border border-[#1E2C4F] text-xs font-semibold text-white bg-[#111B33]"
              >
                Student & Admin Login
              </Link>
              <Link
                href="/contact"
                className="block text-center w-full py-2.5 rounded-xl bg-gradient-to-r from-[#168CF0] to-[#06B6D4] text-xs font-bold text-white"
              >
                Talk to Admissions
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
