export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  href: string;
  tag: string;
  deliverables: string[];
  audience: string;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "service-aiml",
    slug: "artificial-intelligence-and-ml",
    title: "Artificial Intelligence & Machine Learning",
    shortDescription:
      "Deep technical education in supervised/unsupervised algorithms, deep neural architectures, PyTorch, computer vision, and production MLOps.",
    fullDescription:
      "VIAI Labs provides specialized AI & Machine Learning programmes designed to transition software engineers, data professionals, and students from academic theory to shipping production-grade models. We emphasize algorithmic depth, mathematical rigor, clean engineering standards, and robust deployment pipelines.",
    iconName: "BrainCircuit",
    href: "/courses?category=AI+%26+Machine+Learning",
    tag: "Core Engineering",
    deliverables: [
      "Deep Learning with PyTorch & Transfer Learning",
      "Computer Vision & NLP Real-World Implementations",
      "Production Model Packaging & MLOps Pipelines",
      "Industry Capstone Projects with Code Reviews"
    ],
    audience: "Engineers, Computer Science students, and Tech Professionals",
    features: [
      "Rigorous math & code balance",
      "GPU-accelerated lab environments",
      "One-on-one code reviews by senior AI fellows",
      "Portfolio-ready open-source projects"
    ]
  },
  {
    id: "service-automation",
    slug: "ai-automation",
    title: "AI Automation & Intelligent Agents",
    shortDescription:
      "Design, build, and deploy autonomous multi-agent systems, ReAct architectures, custom LLM tool integrations, and no-code business pipelines.",
    fullDescription:
      "Autonomous AI agents are transforming how enterprises operate. VIAI Labs trains builders to construct autonomous workflows using LangGraph, CrewAI, AutoGen, and enterprise automation engines. Learn how to combine cognitive reasoning, deterministic tool execution, and guardrails to automate complex multi-step workflows.",
    iconName: "Bot",
    href: "/services/ai-automation",
    tag: "Next-Gen Frontier",
    deliverables: [
      "Multi-Agent Swarm Orchestration (LangGraph, CrewAI)",
      "Cognitive Loops, Function Calling & Dynamic Tool Use",
      "Enterprise RAG Pipelines over Unstructured Data",
      "Visual Automation Integration (n8n, Make, Webhooks)"
    ],
    audience: "Software Engineers, Product Managers, Founders & Tech Innovators",
    features: [
      "Hands-on with latest LLM models and APIs",
      "Architecture blueprints for enterprise adoption",
      "Reliability engineering, rate-limiting & safety guardrails",
      "Real-world business case study implementations"
    ]
  },
  {
    id: "service-fullstack",
    slug: "full-stack-software-development",
    title: "Full Stack & Software Development",
    shortDescription:
      "Modern full-stack software engineering with Next.js App Router, TypeScript, React Server Components, Tailwind CSS, and scalable PostgreSQL architectures.",
    fullDescription:
      "We prepare software engineers for contemporary production teams. Rather than outdated technology stacks, VIAI Labs teaches modern cloud-native full-stack development centered on TypeScript, Next.js, Server Actions, modern relational databases, and clean modular architecture.",
    iconName: "Code2",
    href: "/courses?category=Full+Stack+Development",
    tag: "Production Ready",
    deliverables: [
      "TypeScript Architecture & Component Design Patterns",
      "Next.js App Router, Server Components & Server Actions",
      "PostgreSQL, Prisma ORM, and Relational Schema Design",
      "Automated CI/CD, Testing & Cloud Production Deployment"
    ],
    audience: "Aspiring Full-Stack Engineers & Developers upgrading their stack",
    features: [
      "Strict type safety and modern best practices",
      "Real-time database querying & optimistic UI",
      "Production deployment pipelines",
      "Full B2B SaaS architectural patterns"
    ]
  },
  {
    id: "service-datascience",
    slug: "data-science-and-analytics",
    title: "Data Science & Analytics",
    shortDescription:
      "Uncover strategic business intelligence through statistical modeling, exploratory analysis, Pandas, SQL data engineering, and interactive dashboards.",
    fullDescription:
      "Data is only as valuable as the decisions it empowers. Our Data Science curriculum trains professionals to formulate testable hypotheses, conduct rigorous statistical analysis, engineer high-yield features, and deliver executive-ready visualizations using PowerBI and Streamlit.",
    iconName: "BarChart3",
    href: "/courses?category=Data+Science+%26+Analytics",
    tag: "Strategic Intelligence",
    deliverables: [
      "Advanced Relational SQL & Data Wrangling with Pandas",
      "Statistical Hypothesis Testing & A/B Experimentation",
      "Predictive Machine Learning & Time-Series Forecasting",
      "Executive Dashboard Engineering in PowerBI & Streamlit"
    ],
    audience: "Analysts, Business Consultants, Engineers, and Researchers",
    features: [
      "Large-scale real datasets (100k+ records)",
      "Statistical rigor and mathematical integrity",
      "Executive storytelling and presentation frameworks",
      "Clean, reproducible Jupyter notebooks"
    ]
  },
  {
    id: "service-internships",
    slug: "industry-internships",
    title: "Industry-Oriented Internships",
    shortDescription:
      "Structured, project-driven internship programmes designed to bridge the gap between academic education and modern industry engineering teams.",
    fullDescription:
      "VIAI Labs offers competitive, project-centric internships where candidates work directly on applied AI solutions, autonomous workflows, full-stack applications, and real technology prototypes under the direct mentorship of senior practitioners.",
    iconName: "Briefcase",
    href: "/internships",
    tag: "Career Accelerator",
    deliverables: [
      "Real engineering tasks with code reviews and weekly sprints",
      "Dedicated senior mentor assigned to each intern track",
      "Structured weekly milestone roadmap and deliverables",
      "Verified Experience Certificate & Letter of Recommendation upon completion"
    ],
    audience: "Pre-final & Final year Engineering/MCA/B.Tech students and early professionals",
    features: [
      "Rigorous hands-on project execution",
      "Zero busywork: direct contribution to codebases",
      "Weekly peer standups and architecture reviews",
      "Verified certificate with unique credential ID"
    ]
  },
  {
    id: "service-workshops",
    slug: "college-and-corporate-training",
    title: "College Workshops & Corporate Training",
    shortDescription:
      "High-impact bootcamps, masterclasses, faculty development programmes (FDP), and tailored corporate AI upskilling initiatives.",
    fullDescription:
      "VIAI Labs partners with leading universities, engineering institutions, and progressive corporate teams to conduct immersive, hands-on training sessions. From 2-day AI agent bootcamps to semester-long institutional curriculum integration, we deliver future-ready skills.",
    iconName: "GraduationCap",
    href: "/workshops",
    tag: "Institutional & Corporate",
    deliverables: [
      "Intensive 2-3 Day Hands-on Technology Bootcamps",
      "Faculty Development Programmes (FDP) in AI & LLMs",
      "Custom Corporate Upskilling Cohorts for Engineering Teams",
      "Co-branded Campus AI Innovation Labs & MoU Partnerships"
    ],
    audience: "Colleges, Universities, Polytechnic institutes, and Enterprise Engineering Teams",
    features: [
      "Turnkey curriculum and lab exercises",
      "Live interactive demonstrations",
      "Custom syllabus alignment for university needs",
      "Post-workshop project mentorship and certifications"
    ]
  }
];
