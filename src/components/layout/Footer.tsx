"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { Logo } from "@/components/shared/Logo";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  ArrowUp,
  ShieldCheck,
  ExternalLink,
  ChevronRight,
  Sparkles
} from "lucide-react";

export const Footer: React.FC = () => {
  const { companyConfig } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <aside aria-label="Quick Actions" className="fixed bottom-6 left-6 z-30 flex items-center gap-2">
        <a
          href={companyConfig.whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba59] transition-all transform hover:scale-105 text-xs font-bold"
          title="Chat with VIAI Labs on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>
      </aside>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-[#0B1224] text-white border border-[#1E2C4F] shadow-xl hover:border-[#168CF0] hover:text-[#06B6D4] transition-all transform hover:scale-105"
        aria-label="Back to top"
        title="Back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {/* Main Footer Container */}
      <footer className="bg-[#060A14] text-slate-300 border-t border-[#1E2C4F] pt-16 pb-12 text-sm relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#168CF0]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#06B6D4]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1E2C4F]">
            {/* Column 1: Brand & Positioning */}
            <div className="lg:col-span-2 space-y-4">
              <Logo variant="dark" showTagline />
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                VIAI Labs is a premier technology & AI education institute. We design and deliver production-grade curriculums in Agentic AI, Autonomous Workflows, Machine Learning, and Modern Full-Stack Development.
              </p>
              <div className="p-3 rounded-xl bg-[#0B1224] border border-[#1E2C4F] text-xs text-slate-300 max-w-sm space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-white">
                  <ShieldCheck className="w-4 h-4 text-[#06B6D4]" />
                  <span>Ethical Education Framework</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Focusing on genuine skill mastery, portfolio deliverables, and verifiable credentials.
                </p>
              </div>
            </div>

            {/* Column 2: Programmes & Tracks */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Flagship Tracks
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/courses/agentic-ai-and-automation" className="hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-[#168CF0]" />
                    <span>Agentic AI & Automation</span>
                  </Link>
                </li>
                <li>
                  <Link href="/courses/generative-ai-and-llms" className="hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-[#168CF0]" />
                    <span>Generative AI & LLMs</span>
                  </Link>
                </li>
                <li>
                  <Link href="/courses/artificial-intelligence-and-machine-learning" className="hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-[#168CF0]" />
                    <span>Applied AI & ML</span>
                  </Link>
                </li>
                <li>
                  <Link href="/courses/full-stack-software-development" className="hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-[#168CF0]" />
                    <span>Full Stack Next.js</span>
                  </Link>
                </li>
                <li>
                  <Link href="/courses/data-science-and-predictive-analytics" className="hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-[#168CF0]" />
                    <span>Data Science & Analytics</span>
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="text-[#38BDF8] hover:underline font-semibold block pt-1">
                    Explore All Programmes →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Platform & Curricula */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Platforms & Resources
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/syllabus" className="hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-[#06B6D4]" />
                    <span>Syllabus Library (PDFs)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-automation" className="hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-[#06B6D4]" />
                    <span>Enterprise AI Solutions</span>
                  </Link>
                </li>
                <li>
                  <Link href="/internships" className="hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-[#06B6D4]" />
                    <span>Internship Portal</span>
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-[#06B6D4]" />
                    <span>Project Showcase</span>
                  </Link>
                </li>
                <li>
                  <Link href="/institutions" className="hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-[#06B6D4]" />
                    <span>College MoU & AI Labs</span>
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-[#06B6D4]" />
                    <span>Free Learning Roadmaps</span>
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-[#06B6D4]" />
                    <span>Tech Insights & Blog</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Operations (Configurable) */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Connect With Us
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-[#168CF0] shrink-0 mt-0.5" />
                  <div>
                    <a href={`mailto:${companyConfig.email}`} className="text-slate-200 hover:text-white block font-medium">
                      {companyConfig.email}
                    </a>
                    <span className="text-[10px] text-slate-500">General Enquiries</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-[#168CF0] shrink-0 mt-0.5" />
                  <div>
                    <a href={`tel:${companyConfig.phonePrimary.replace(/[^0-9+]/g, '')}`} className="text-slate-200 hover:text-white block font-medium">
                      {companyConfig.phonePrimary}
                    </a>
                    <span className="text-[10px] text-slate-500">Admissions Desk</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                  <div>
                    {companyConfig.addressLines.map((line, i) => (
                      <p key={i} className="text-slate-300">{line}</p>
                    ))}
                  </div>
                </li>
              </ul>

              <div className="pt-2 flex items-center gap-2">
                <Link
                  href="/login"
                  className="px-3 py-1.5 rounded-lg bg-[#111B33] border border-[#1E2C4F] text-[11px] font-semibold text-slate-200 hover:text-white hover:border-[#168CF0] transition-colors"
                >
                  Student Portal
                </Link>
                <Link
                  href="/admin/dashboard"
                  className="px-3 py-1.5 rounded-lg bg-[#111B33] border border-[#1E2C4F] text-[11px] font-semibold text-slate-200 hover:text-white hover:border-[#168CF0] transition-colors"
                >
                  Admin Portal
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <div className="flex items-center gap-2">
              <span>© {new Date().getFullYear()} {companyConfig.name}. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact & Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
