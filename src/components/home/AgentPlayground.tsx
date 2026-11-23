"use client";

import React, { useState, useEffect } from "react";
import {
  Bot,
  Play,
  RotateCcw,
  Zap,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Terminal,
  Database,
  ArrowRight
} from "lucide-react";

interface StepLog {
  id: number;
  agent: string;
  action: string;
  status: "running" | "completed";
  detail: string;
  latency: string;
}

export const AgentPlayground: React.FC = () => {
  const [selectedTask, setSelectedTask] = useState<string>("research");
  const [architecture, setArchitecture] = useState<"langgraph" | "crewai" | "react">("langgraph");
  const [isExecuting, setIsExecuting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [logs, setLogs] = useState<StepLog[]>([]);

  const sampleTasks = {
    research: {
      prompt: "Deconstruct enterprise financial PDF, query vector index, and verify citations.",
      steps: [
        { agent: "PlannerAgent", action: "ReAct Decomposition", detail: "Formulated 3 atomic sub-queries: revenue CAGR, margin pressures, debt maturity.", latency: "110ms" },
        { agent: "RetrievalTool", action: "Hybrid Vector Search", detail: "Executed Qdrant dense vector search (k=20) + BM25 sparse keyword matching.", latency: "145ms" },
        { agent: "RerankerAgent", action: "Cross-Encoder Re-Ranking", detail: "Scored top-20 chunks; pruned 14 irrelevant chunks below 0.88 threshold.", latency: "85ms" },
        { agent: "CriticAgent", action: "Guardrail & Faithfulness Audit", detail: "Checked claims against retrieved context; verified 0 hallucinations detected.", latency: "130ms" },
        { agent: "Synthesizer", action: "Final Report Generation", detail: "Emitted structured markdown brief with exact page-level footnotes and confidence 98.4%.", latency: "60ms" }
      ]
    },
    code_review: {
      prompt: "Autonomous Code Refactoring: Detect SQL injection, write patch, and run test suite.",
      steps: [
        { agent: "ScannerAgent", action: "AST Syntax Traversal", detail: "Flagged raw string interpolation in query string (Line 42 CWE-89).", latency: "95ms" },
        { agent: "ArchitectAgent", action: "Parametric Query Transformation", detail: "Refactored raw SQL to parameterized prepared statements with Prisma ORM.", latency: "180ms" },
        { agent: "TestRunnerTool", action: "Sandboxed PyTest Execution", detail: "Executed 12 integration test suites in isolated Docker container. 12/12 passed.", latency: "210ms" },
        { agent: "GitBot", action: "Pull Request Generation", detail: "Generated signed Git commit with descriptive PR changelog and security notes.", latency: "120ms" }
      ]
    },
    invoice_ops: {
      prompt: "Multimodal Invoice Triage: Extract line items, cross-check ERP, and seek Slack approval.",
      steps: [
        { agent: "VisionParser", action: "Document Ingestion", detail: "Parsed 3-page scanned PDF invoice using Vision model; normalized tabular line items.", latency: "240ms" },
        { agent: "ERPConnector", action: "Purchase Order Matching", detail: "Cross-referenced PO-89211 in PostgreSQL; detected \$14.50 freight tax variance.", latency: "115ms" },
        { agent: "HumanInTheLoop", action: "Slack Card Interruption", detail: "Dispatched interactive Slack approval card; awaiting finance team confirmation.", latency: "45ms" },
        { agent: "LedgerWriter", action: "Double-Entry Posting", detail: "Human approved: Written to accounting database with audit transaction hash.", latency: "90ms" }
      ]
    }
  };

  const handleStartSimulation = () => {
    setIsExecuting(true);
    setLogs([]);
    setCurrentStep(0);

    const taskData = sampleTasks[selectedTask as keyof typeof sampleTasks];
    const total = taskData.steps.length;

    taskData.steps.forEach((step, idx) => {
      setTimeout(() => {
        setCurrentStep(idx + 1);
        setLogs((prev) => [
          ...prev,
          {
            id: idx + 1,
            agent: step.agent,
            action: step.action,
            status: "completed",
            detail: step.detail,
            latency: step.latency
          }
        ]);

        if (idx === total - 1) {
          setIsExecuting(false);
        }
      }, (idx + 1) * 700);
    });
  };

  const reset = () => {
    setIsExecuting(false);
    setCurrentStep(0);
    setLogs([]);
  };

  return (
    <div className="bg-[#0B1224] text-white rounded-3xl border border-[#1E2C4F] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#168CF0]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#1E2C4F] gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111C38] border border-[#1E2C4F] text-[#06B6D4] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Interactive Simulator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Autonomous Agent Swarm Playground
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Experience how VIAI Labs stateful agent loops reason, invoke tools, and execute workflows.
          </p>
        </div>

        {/* Architecture Mode Selector */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-[#080D1A] border border-[#1E2C4F] self-start sm:self-auto text-xs">
          <button
            onClick={() => setArchitecture("langgraph")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              architecture === "langgraph"
                ? "bg-[#168CF0] text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            LangGraph (State Graph)
          </button>
          <button
            onClick={() => setArchitecture("crewai")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              architecture === "crewai"
                ? "bg-[#168CF0] text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            CrewAI (Swarm)
          </button>
        </div>
      </div>

      {/* Controls & Task Selector */}
      <div className="py-6 space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-400 mr-2">Select Task Objective:</span>
          {[
            { key: "research", label: "Autonomous Hybrid RAG" },
            { key: "code_review", label: "AST Security Patching" },
            { key: "invoice_ops", label: "Accounts Payable Pipeline" }
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setSelectedTask(item.key);
                reset();
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedTask === item.key
                  ? "bg-white text-[#0B1224] shadow font-bold"
                  : "bg-[#111C38] border border-[#1E2C4F] text-slate-300 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Prompt Display Box */}
        <div className="p-4 rounded-2xl bg-[#080D1A] border border-[#1E2C4F] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-[#168CF0]/20 text-[#06B6D4] shrink-0">
              <Terminal className="w-4 h-4" />
            </span>
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-mono block">Objective Prompt:</span>
              <span className="text-slate-200 font-medium">
                {sampleTasks[selectedTask as keyof typeof sampleTasks].prompt}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleStartSimulation}
              disabled={isExecuting}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#168CF0] to-[#06B6D4] hover:from-[#1379d0] hover:to-[#059eb8] text-white font-bold text-xs shadow-[0_0_15px_rgba(22,140,240,0.4)] disabled:opacity-50 transition-all flex items-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>{isExecuting ? "Executing Swarm..." : "Execute Agent Swarm"}</span>
            </button>
            <button
              onClick={reset}
              className="p-2.5 rounded-xl bg-[#111C38] border border-[#1E2C4F] text-slate-400 hover:text-white transition-colors"
              title="Reset Execution"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Execution Telemetry Console */}
      <div className="p-5 rounded-2xl bg-[#060A14] border border-[#1E2C4F] space-y-4 font-mono text-xs">
        <div className="flex items-center justify-between pb-3 border-b border-[#1E2C4F] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white font-bold">EXECUTION_LOGS_STREAM</span>
          </div>
          <div className="text-[11px] text-slate-400">
            Engine: {architecture === "langgraph" ? "LangGraph v0.2" : "CrewAI v0.51"} • State: {isExecuting ? "RUNNING" : logs.length > 0 ? "SUCCESS" : "IDLE"}
          </div>
        </div>

        {/* Dynamic Log Steps */}
        <div className="space-y-3 min-h-[160px]">
          {logs.map((log) => (
            <div
              key={log.id}
              className="p-3 rounded-xl bg-[#0B1224] border border-[#1E2C4F] text-slate-300 space-y-1 animate-fade-in"
            >
              <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="text-[#06B6D4] font-bold">[{log.agent}]</span>
                  <span className="text-white font-semibold">{log.action}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <span>Latency: {log.latency}</span>
                  <span className="text-emerald-400 font-bold">✓</span>
                </div>
              </div>
              <p className="text-slate-400 text-[11px] font-sans pl-1">
                {log.detail}
              </p>
            </div>
          ))}

          {isExecuting && (
            <div className="p-3 rounded-xl bg-[#111C38]/40 border border-[#168CF0]/30 text-[#38BDF8] flex items-center gap-2 animate-pulse text-xs">
              <Zap className="w-4 h-4 text-[#06B6D4]" />
              <span>Next cycle step transitioning across state graph edges...</span>
            </div>
          )}

          {logs.length === 0 && !isExecuting && (
            <div className="text-center py-10 text-slate-500 font-sans text-xs">
              Click <strong>"Execute Agent Swarm"</strong> above to witness the multi-agent cognitive loop.
            </div>
          )}
        </div>

        {/* Telemetry Footer */}
        {logs.length > 0 && (
          <div className="pt-3 border-t border-[#1E2C4F] flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2">
            <div>Total Step Cycles: <strong className="text-white">{logs.length}</strong></div>
            <div>Cumulative Latency: <strong className="text-[#38BDF8]">530ms</strong></div>
            <div>Prompt Tokens: <strong className="text-slate-300">1,480</strong></div>
            <div>Estimated Cost: <strong className="text-emerald-400">\$0.0042</strong></div>
          </div>
        )}
      </div>
    </div>
  );
};
