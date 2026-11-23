import { Workshop } from "@/types";

export const workshopsData: Workshop[] = [
  {
    id: "ws-agentic-bootcamp",
    slug: "mastering-agentic-ai-bootcamp",
    title: "Mastering Agentic AI: Building Autonomous Systems with LangGraph & CrewAI",
    topic: "Agentic AI & LLM Systems",
    format: "Hands-on Bootcamp",
    targetAudience: "Engineering Students",
    duration: "2 Days (Weekend Intensive: 10 Hours Total)",
    dateSchedule: "Upcoming Saturday & Sunday (10:00 AM – 3:30 PM IST)",
    mode: "Online Live Interactive",
    venue: "VIAI Virtual Innovation Lab (Live Interactive Zoom + GitHub Classroom)",
    shortDescription:
      "A fast-paced, high-impact weekend bootcamp where participants build 3 production-style autonomous AI agents from scratch.",
    overview:
      "This intensive hands-on bootcamp is tailored for developers and students who want to cut through the generative AI hype and build functional, autonomous software. We start with fundamental ReAct loops, move into multi-agent communication with CrewAI, and finish with state graph checkpointing in LangGraph.",
    keyTakeaways: [
      "Understand the mechanics of function calling and OpenAPI schema integrations.",
      "Build a research agent that autonomously executes web searches, parses results, and synthesizes answers.",
      "Orchestrate a 3-agent software development squad (Planner, Coder, Tester).",
      "Deploy your agents to a live cloud endpoint with Docker.",
      "Receive an official Certificate of Participation from VIAI Labs."
    ],
    agenda: [
      { time: "Day 1, 10:00 AM - 12:30 PM", session: "ReAct Pattern, Tool Schemas & Single-Agent Loops in Python" },
      { time: "Day 1, 01:30 PM - 03:30 PM", session: "Hands-on Lab 1: Building a Financial Data Research Agent with Live APIs" },
      { time: "Day 2, 10:00 AM - 12:30 PM", session: "LangGraph Architecture: Nodes, Edges, State Checkpoints & Interrupts" },
      { time: "Day 2, 01:30 PM - 03:30 PM", session: "Hands-on Lab 2: Multi-Agent CrewAI Swarm & Cloud Deployment" }
    ],
    trainerBio:
      "Led by Senior AI Fellow at VIAI Labs with deep experience deploying enterprise LLM agents and conducting technical masterclasses at premier institutes.",
    registrationOpen: true
  },
  {
    id: "ws-college-ai-lab",
    slug: "practical-ai-ml-college-masterclass",
    title: "Applied AI & Computer Vision Campus Masterclass",
    topic: "Computer Vision & PyTorch",
    format: "College Technical Session",
    targetAudience: "Polytechnic & Colleges",
    duration: "3 Days On-Campus",
    dateSchedule: "Flexible Institution Scheduling (Partner Campus Bookings)",
    mode: "On-Campus",
    venue: "Host University / College Auditorium & Computing Labs",
    shortDescription:
      "A customized on-campus immersive programme designed for engineering colleges looking to provide practical AI industry exposure.",
    overview:
      "Bring the VIAI Labs engineering faculty directly to your campus. Over 3 intensive days, students are guided through data preparation, deep neural networks, PyTorch fundamentals, computer vision classification, and model deployment on local GPU clusters.",
    keyTakeaways: [
      "Real-world PyTorch model building without abstract theory shortcuts.",
      "Hands-on image classification and transfer learning on edge hardware.",
      "Guidance on building standout final year engineering capstone projects.",
      "Institutional MoU signing and student internship pathways."
    ],
    agenda: [
      { time: "Day 1", session: "Foundations of Neural Networks, Tensors, and PyTorch Training Loops" },
      { time: "Day 2", session: "Convolutional Neural Networks, Transfer Learning & Computer Vision Labs" },
      { time: "Day 3", session: "Model Evaluation, Packaging into FastAPI, and Student Project Hackathon" }
    ],
    trainerBio:
      "Conducted by our core training faculty who have trained thousands of engineering students across top Indian institutions.",
    registrationOpen: true
  },
  {
    id: "ws-corporate-genai",
    slug: "enterprise-generative-ai-executive-lab",
    title: "Enterprise Generative AI & Automation Executive Lab",
    topic: "Enterprise AI Transformation",
    format: "Corporate Executive Lab",
    targetAudience: "Corporate Teams",
    duration: "1 Day (6 Hours)",
    dateSchedule: "Corporate Scheduling on Demand",
    mode: "Hybrid",
    venue: "Corporate Headquarters or VIAI Executive Virtual Classroom",
    shortDescription:
      "A strategic and technical masterclass for engineering leaders, product architects, and CTOs evaluating GenAI adoption.",
    overview:
      "Designed specifically for leadership and technical teams needing a clear, pragmatic blueprint for deploying generative AI within the enterprise. We review security postures, RAG architectures vs fine-tuning, latency and cost modeling, and governance frameworks.",
    keyTakeaways: [
      "Objective ROI and cost-benefit frameworks for enterprise LLM adoption.",
      "Evaluating closed (OpenAI/Anthropic) vs self-hosted open-weights models (Llama 3).",
      "Enterprise security, data privacy, compliance, and PII anonymization strategies.",
      "Hands-on demonstration of RAG evaluation benchmarks with Ragas."
    ],
    agenda: [
      { time: "09:30 AM - 11:30 AM", session: "Strategic Landscape: Architecture trade-offs, Model Economics & Security" },
      { time: "11:45 AM - 01:15 PM", session: "Production RAG Deep-Dive: Hybrid retrieval, reranking, and chunking" },
      { time: "02:15 PM - 04:00 PM", session: "Agentic Automation & Tool-use: When to automate, when to augment" },
      { time: "04:15 PM - 05:30 PM", session: "Roadmap Workshop: Drafting the 90-day AI Implementation Action Plan" }
    ],
    trainerBio:
      "Delivered by VIAI Labs founding practitioners and enterprise consultants who have architected AI solutions for Fortune 500 organizations.",
    registrationOpen: true
  },
  {
    id: "ws-fullstack-masterclass",
    slug: "building-production-saas-nextjs",
    title: "Building Production B2B SaaS with Next.js & Server Actions",
    topic: "Modern Full Stack Web",
    format: "Masterclass",
    targetAudience: "Working Professionals",
    duration: "1 Day (5 Hours)",
    dateSchedule: "Upcoming Cohort (Weekend)",
    mode: "Online Live Interactive",
    venue: "VIAI Virtual Innovation Lab",
    shortDescription:
      "Fast-track masterclass on building fast, type-safe SaaS web apps using Next.js 14 App Router, Server Components, and Prisma.",
    overview:
      "Learn the exact patterns used by top product teams to build fast web software: React Server Components, Server Actions without REST boilerplate, optimistic updates, and clean database schema migrations.",
    keyTakeaways: [
      "Master Next.js App Router routing conventions, layouts, and loading states.",
      "Build forms with Server Actions and type-safe validation using Zod.",
      "Implement relational schemas with Prisma and PostgreSQL.",
      "Optimize Web Vitals for instant page transitions."
    ],
    agenda: [
      { time: "11:00 AM - 01:00 PM", session: "Server Components, App Router Mental Model, and Data Fetching Patterns" },
      { time: "01:45 PM - 03:45 PM", session: "Server Actions, Mutations, Relational Modeling with Prisma & PostgreSQL" },
      { time: "04:00 PM - 05:00 PM", session: "Performance Profiling, Auth Architecture & Vercel Deployment" }
    ],
    trainerBio:
      "Led by VIAI Labs Senior Full-Stack Architect with a track record of building and scaling modern cloud software.",
    registrationOpen: true
  }
];
