import { ProjectShowcase } from "@/types";

export const projectsData: ProjectShowcase[] = [
  {
    id: "proj-agent-orchestrator",
    slug: "agentflow-autonomous-rag-orchestrator",
    title: "AgentFlow: Autonomous Multi-Agent Research & Synthesis Engine",
    tagline: "A collaborative multi-agent architecture for automated deep research, citation extraction, and document synthesis.",
    category: "Artificial Intelligence",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    clientType: "Internal Research Lab",
    problemStatement:
      "Enterprise analysts spend upwards of 15 hours every week manually cross-referencing industry whitepapers, parsing conflicting tables, and writing research briefs. Traditional search engines return links, not synthesized evidence with page-level citations.",
    solutionOverview:
      "Built an autonomous multi-agent pipeline using LangGraph and CrewAI. The orchestrator delegates sub-queries to an automated Researcher agent, a Fact-Checking agent that verifies assertions against hybrid vector stores, and an Editor agent that generates cohesive markdown briefs with verifiable citations.",
    architectureDiagramDesc:
      "User Query → Dynamic Decomposer Agent → Parallel Sub-Queries → Hybrid Vector Store (Qdrant + BM25) → Cross-Encoder Re-Ranker → Verification Loop → Synthesis Agent → Human Approval Gate → Final Report",
    keyFeatures: [
      "Dynamic sub-query decomposition using hierarchical planning",
      "Hybrid dense and sparse vector retrieval over thousands of PDF pages",
      "Automated cross-agent verification loop mitigating hallucinations",
      "Human-in-the-loop interruption mechanism for query clarification",
      "Streaming responses with real-time thought step visualization"
    ],
    techStack: ["Python", "LangGraph", "CrewAI", "Qdrant", "FastAPI", "Next.js", "OpenAI GPT-4o"],
    metricsOrOutcomes: [
      "Reduces manual research synthesis time from 15 hours to under 8 minutes per brief",
      "Maintains >94% factual accuracy benchmarked on internal evaluation datasets",
      "Zero unverified hallucinated citations through strict cross-encoder grounding"
    ],
    githubUrl: "https://github.com/viai-labs/agentflow-orchestrator",
    demoUrl: "/projects/agentflow-autonomous-rag-orchestrator"
  },
  {
    id: "proj-vision-safety",
    slug: "sentinel-edge-vision-safety-monitoring",
    title: "SentinelVision: Real-Time Industrial PPE & Safety Detection",
    tagline: "Edge-deployed computer vision model for real-time safety gear compliance and hazard zone tracking.",
    category: "Machine Learning",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    clientType: "Student Capstone",
    problemStatement:
      "Industrial manufacturing floors and construction zones require continuous personal protective equipment (PPE) compliance. Manual supervisor inspections are sporadic and fail to prevent preventable workplace accidents in blind spots.",
    solutionOverview:
      "Engineered a lightweight custom YOLOv8 / PyTorch vision model quantized with ONNX Runtime to process 30 FPS camera feeds on edge devices (NVIDIA Jetson / Intel NUC), instantly identifying unequipped workers in restricted zones.",
    architectureDiagramDesc:
      "RTSP Camera Feed → Frame Decoupler → YOLOv8 Fine-Tuned Model (ONNX Runtime) → Bounding Box Classifier (Hardhat, Vest, Boots) → Spatial Proximity Analyzer → Event Logger (PostgreSQL) → Webhook Alert Dispatcher",
    keyFeatures: [
      "Custom-annotated dataset of 12,000 multi-angle industrial frames",
      "Real-time edge inference at 34 FPS with low GPU power consumption",
      "Multi-class detection: Hardhats, safety vests, protective eye-wear, and restricted zones",
      "Automated alerts sent to floor supervisors via Telegram/Slack webhooks within 400ms"
    ],
    techStack: ["PyTorch", "YOLOv8", "OpenCV", "ONNX Runtime", "FastAPI", "PostgreSQL", "Docker"],
    metricsOrOutcomes: [
      "91.4% mAP@0.5 across challenging low-light industrial camera conditions",
      "Under 28ms latency per frame on edge hardware",
      "Zero false alarms in baseline ambient shift testing"
    ],
    githubUrl: "https://github.com/viai-labs/sentinel-vision-ppe",
    demoUrl: "/projects/sentinel-edge-vision-safety-monitoring"
  },
  {
    id: "proj-enterprise-invoice-bot",
    slug: "autoflow-intelligent-invoice-pipeline",
    title: "AutoFlow: Autonomous Accounts Payable Document Pipeline",
    tagline: "An automated end-to-end invoice ingestion, validation, and ERP sync system with exception routing.",
    category: "Automation",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    clientType: "Industry Partner Prototype",
    problemStatement:
      "Finance departments spend countless hours manually typing vendor invoice line items, reconciling tax numbers with purchase orders, and seeking email approvals across disparate departments.",
    solutionOverview:
      "Engineered an automated n8n and Python pipeline combining multimodal OCR vision extraction, automated purchase order cross-referencing, and ERP database synchronization with automated Slack approvals for discrepancies.",
    architectureDiagramDesc:
      "Vendor Inbound Email → PDF Detachment Webhook → Multimodal Vision Parser → Structured JSON Normalization → Database Cross-Check against PO → Slack Interactive Approval Card → ERP Webhook Push",
    keyFeatures: [
      "Supports varied international invoice layouts without rigid templates",
      "Automatic line-item mathematical cross-calculation and tax verification",
      "Interactive Slack approval cards with 1-click Approve / Reject / Escalate",
      "Full audit trail logging with original document checksums"
    ],
    techStack: ["n8n", "Python", "GPT-4o Vision", "PostgreSQL", "Slack API", "Airtable"],
    metricsOrOutcomes: [
      "Decreased average invoice processing turnaround from 3.5 days to 4 minutes",
      "Eliminated 98% of manual data entry errors across benchmark sample runs",
      "Automated 87% of invoices straight through without requiring human intervention"
    ],
    githubUrl: "https://github.com/viai-labs/autoflow-invoice-ai",
    demoUrl: "/projects/autoflow-intelligent-invoice-pipeline"
  },
  {
    id: "proj-saas-lms",
    slug: "orbit-modern-cohort-learning-platform",
    title: "Orbit: Production Cohort-Based Education Platform",
    tagline: "A full-stack learning platform with interactive code runners, syllabus progress tracking, and live session management.",
    category: "Web Applications",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    clientType: "Internal Research Lab",
    problemStatement:
      "Traditional learning management systems (LMS) are clunky, slow, lack real-time peer code collaboration, and fail to provide actionable student engagement telemetry for instructors.",
    solutionOverview:
      "Built an ultra-fast Next.js App Router application with React Server Components, Tailwind CSS, PostgreSQL, and sandboxed code execution environments, offering instant module tracking and verifiable digital certificate issuance.",
    architectureDiagramDesc:
      "Next.js App Router (RSC) → Server Actions → Prisma ORM → PostgreSQL (Supabase) → Sandboxed WebAssembly Code Runner → Cryptographic Digital Certificate Signer",
    keyFeatures: [
      "Server-rendered instantaneous page transitions with minimal client JavaScript",
      "Interactive in-browser code editor powered by Monaco and sandboxed execution",
      "Cryptographically verifiable certificates with SHA-256 validation",
      "Instructor dashboard with real-time student drop-off metrics"
    ],
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Monaco Editor"],
    metricsOrOutcomes: [
      "98/100 Google Lighthouse performance score across all core routes",
      "Sub-150ms server response time on edge nodes worldwide",
      "Fully responsive and keyboard accessible (WCAG AA compliant)"
    ],
    githubUrl: "https://github.com/viai-labs/orbit-lms",
    demoUrl: "/projects/orbit-modern-cohort-learning-platform"
  },
  {
    id: "proj-predictive-maintenance",
    slug: "iot-pulse-predictive-vibration-monitoring",
    title: "IoTPulse: Predictive Machine Vibration & Anomaly Detector",
    tagline: "Low-cost edge IoT sensor node with on-device TinyML vibration analysis for industrial motor health.",
    category: "IoT & Embedded",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    clientType: "Student Capstone",
    problemStatement:
      "Unplanned motor and compressor failures in manufacturing plants trigger catastrophic operational downtime costing thousands of dollars per hour.",
    solutionOverview:
      "Developed an ESP32-based vibration sensing hardware prototype with accelerometer sensors running an embedded TinyML anomaly detection model. The device detects micro-bearing wear weeks before audible failure occurs.",
    architectureDiagramDesc:
      "Piezoelectric / MEMS Accelerometer → ESP32 Microcontroller → Edge Impulse TinyML Classifier → MQTT Protocol → InfluxDB Time-Series DB → Grafana Alert Dashboard",
    keyFeatures: [
      "Battery-efficient TinyML model running locally on microcontroller without cloud dependency",
      "FFT (Fast Fourier Transform) frequency domain feature extraction",
      "MQTT lightweight telemetry broadcasting over low-bandwidth WiFi / LoRa",
      "Dynamic threshold alerts and maintenance ticket dispatch"
    ],
    techStack: ["C++", "ESP32", "TinyML", "Edge Impulse", "MQTT", "InfluxDB", "Grafana"],
    metricsOrOutcomes: [
      "Detects mechanical bearing degradation 18 to 24 days prior to critical breakdown",
      "Operates for 14+ months on standard low-power battery cell configuration"
    ],
    githubUrl: "https://github.com/viai-labs/iotpulse-vibration",
    demoUrl: "/projects/iot-pulse-predictive-vibration-monitoring"
  },
  {
    id: "proj-health-analytics",
    slug: "vital-lens-clinical-analytics-dashboard",
    title: "VitalLens: Population Health & Clinical Risk Stratification",
    tagline: "Statistical risk modeling platform analyzing clinical parameters to prioritize patient intervention.",
    category: "Data Science",
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    clientType: "Internal Research Lab",
    problemStatement:
      "Healthcare practitioners are flooded with disjointed patient test metrics and lack automated statistical stratification to identify individuals at elevated risk of cardiovascular complications.",
    solutionOverview:
      "Developed a clinical analytics suite utilizing Scikit-Learn logistic models, SHAP interpretability values, and an interactive Streamlit/React dashboard to display personalized risk scores and key biometric drivers.",
    architectureDiagramDesc:
      "Clinical EHR Records → Feature Normalization & Imputation → Calibrated XGBoost Risk Model → SHAP Value Calculator → Interactive Clinician Risk Dashboard",
    keyFeatures: [
      "Interpretable risk scores with individual biometric feature contributions (SHAP)",
      "Automated outlier detection for misreported biometric measurements",
      "Cohort comparison filters across age, lifestyle factors, and medication history",
      "HIPAA-compliant de-identified data processing architecture"
    ],
    techStack: ["Python", "Pandas", "Scikit-Learn", "SHAP", "Streamlit", "Plotly", "FastAPI"],
    metricsOrOutcomes: [
      "0.89 ROC-AUC score on verified clinical validation holdout sets",
      "Provides clinicians with transparent, explainable factors rather than black-box outputs"
    ],
    githubUrl: "https://github.com/viai-labs/vitallens-analytics",
    demoUrl: "/projects/vital-lens-clinical-analytics-dashboard"
  }
];
