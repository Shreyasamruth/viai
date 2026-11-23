"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { Card3D } from "@/components/shared/Card3D";
import { AgentPlayground } from "@/components/home/AgentPlayground";
import {
  Bot,
  Zap,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Cpu,
  Database,
  Send,
  Lock,
  ChevronRight
} from "lucide-react";

export default function AiAutomationServicePage() {
  const { addEnquiry } = useApp();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    addEnquiry({
      fullName,
      email,
      phone: "Not provided",
      type: "General",
      subject: `AI Automation Enterprise Solutions Enquiry from ${company || fullName}`,
      courseOrProgram: "AI Automation & Intelligent Agents",
      message: `${message} [Company: ${company || "Individual/Unspecified"}]`
    });

    setSubmitted(true);
    setFullName("");
    setEmail("");
    setCompany("");
    setMessage("");
  };

  const capabilities = [
    {
      icon: <Bot className="w-6 h-6 text-[#168CF0]" />,
      title: "Autonomous Multi-Agent Swarms",
      description:
        "Orchestrating specialized cognitive personas (Researcher, Coder, Critic, Validator) using LangGraph and CrewAI to solve complex multi-step workflows autonomously.",
      glow: "blue" as const
    },
    {
      icon: <Workflow className="w-6 h-6 text-[#06B6D4]" />,
      title: "Self-Healing Business Pipelines",
      description:
        "Visual automation (n8n, Make) integrated with LLM decision nodes that parse inbound documents, auto-correct extraction schemas, and retry gracefully upon API timeouts.",
      glow: "cyan" as const
    },
    {
      icon: <Database className="w-6 h-6 text-[#8B5CF6]" />,
      title: "Enterprise Hybrid RAG Systems",
      description:
        "Connecting foundation models with proprietary corporate data using dense vector stores, sparse BM25 indexing, and cross-encoder re-ranking for verifiable citation accuracy.",
      glow: "violet" as const
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      title: "Deterministic Guardrails & Telemetry",
      description:
        "Enforcing strict token budget constraints, PII anonymization, hallucination mitigation filters, and human-in-the-loop validation checkpoints.",
      glow: "emerald" as const
    }
  ];

  return (
    <div className="bg-[#F6F8FC] min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-[#0B1224] text-white py-16 lg:py-24 border-b border-[#1E2C4F] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#168CF0]/20 via-[#06B6D4]/15 to-[#8B5CF6]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#111C38] border border-[#1E2C4F] text-[#06B6D4] text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Enterprise & Applied Frontier</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            AI Automation & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#168CF0] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">
              Intelligent Agent Systems
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Eliminate repetitive manual toil with autonomous multi-agent cognitive loops, function calling APIs, and resilient enterprise workflow pipelines.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#agent-simulator"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#168CF0] to-[#06B6D4] hover:from-[#1379d0] hover:to-[#059eb8] text-white text-xs font-bold shadow-lg shadow-[#168CF0]/30 transition-all flex items-center gap-2"
            >
              <span>Test Interactive Swarm Simulator</span>
              <Bot className="w-4 h-4" />
            </a>
            <a
              href="#consult-form"
              className="px-6 py-3 rounded-xl bg-[#111C38] border border-[#1E2C4F] hover:bg-[#16254a] text-slate-200 text-xs font-bold transition-all"
            >
              Schedule Technical Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        {/* Core Capabilities */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#168CF0] uppercase tracking-wider">
              Architectural Blueprint
            </span>
            <h2 className="text-3xl font-extrabold text-[#0B1224] mt-1">
              How VIAI Labs Engineers Autonomous Agents
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, i) => (
              <Card3D key={i} glowColor={cap.glow} maxTilt={7} scale={1.02}>
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 shadow-inner">
                      {cap.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1224]">{cap.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                      {cap.description}
                    </p>
                  </div>
                  <div className="pt-2 text-[11px] font-mono text-slate-400">
                    CAPABILITY_NODE_0{i + 1}
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>

        {/* Interactive Swarm Playground Section */}
        <div id="agent-simulator" className="pt-4">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#168CF0] text-xs font-bold uppercase tracking-wider mb-2">
              <Bot className="w-3.5 h-3.5" />
              <span>Interactive Cognitive Lab</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B1224]">
              Simulate Multi-Agent Autonomous Execution
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Trigger real cognitive loops: PlannerAgent decomposition, tool routing, guardrail verification, and final execution.
            </p>
          </div>
          <AgentPlayground />
        </div>

        {/* Consulting / Partner Audit Form */}
        <div id="consult-form" className="bg-[#0B1224] text-white rounded-3xl border border-[#1E2C4F] p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#168CF0]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-[#06B6D4] uppercase tracking-wider">
                Enterprise & University Partnerships
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Automate Your Team's Most Complex Workflows
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether you need a dedicated agentic pipeline, internal training for your software engineering teams, or an on-campus AI lab, speak directly with our solutions architects.
              </p>
              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#168CF0]" />
                  <span>Confidential NDA protected exploration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#06B6D4]" />
                  <span>Architectural feasibility & ROI assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Turnkey training cohorts & custom prototypes</span>
                </div>
              </div>
            </div>

            {/* Inbound Form */}
            <div className="lg:col-span-6 bg-[#080D1A] border border-[#1E2C4F] p-6 sm:p-8 rounded-2xl">
              {submitted ? (
                <div className="text-center py-8 space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-base">Inquiry Dispatched!</h4>
                  <p className="text-xs text-slate-400">
                    Our technical solutions architect will review your parameters and respond within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#38BDF8] hover:underline pt-4 block mx-auto"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-white">Initiate Technical Consultation</h3>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Dr. Ramesh Gupta"
                      className="w-full bg-[#111C38] border border-[#1E2C4F] focus:border-[#168CF0] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. ramesh@institution.edu or ramesh@enterprise.com"
                      className="w-full bg-[#111C38] border border-[#1E2C4F] focus:border-[#168CF0] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">
                      Organization / University / Team
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. TechCorp Systems Ltd."
                      className="w-full bg-[#111C38] border border-[#1E2C4F] focus:border-[#168CF0] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">
                      Requirements & Scope Overview
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your current manual bottlenecks or target autonomous agent capabilities..."
                      className="w-full bg-[#111C38] border border-[#1E2C4F] focus:border-[#168CF0] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#168CF0] to-[#06B6D4] hover:from-[#1379d0] hover:to-[#059eb8] text-white text-xs font-bold shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request Architectural Scoping</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
