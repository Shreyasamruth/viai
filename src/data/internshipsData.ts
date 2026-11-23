import { Internship } from "@/types";

export const internshipsData: Internship[] = [
  {
    id: "intern-agentic-ai",
    slug: "agentic-ai-and-workflow-intern",
    title: "Agentic AI & Autonomous Workflows Intern",
    department: "Applied AI Research",
    duration: "12 Weeks (3 Months)",
    mode: "Remote",
    location: "Remote (Pan-India / Global)",
    openings: 4,
    deadline: "Rolling Admissions (Next Batch Starting Soon)",
    stipendNote: "Performance-based project stipend and completion grant (confirmed on offer letter).",
    overview:
      "Join our applied AI development team to build, benchmark, and deploy autonomous agents, multi-agent orchestrations, and tool-augmented LLM pipelines. You will collaborate directly with lead engineers on real-world workflow automation problems.",
    responsibilities: [
      "Implement multi-agent patterns using LangGraph and CrewAI for complex reasoning tasks.",
      "Design structured tool wrappers for external APIs, databases, and search systems.",
      "Evaluate retrieval quality and hallucination rates across diverse prompts.",
      "Contribute clean, well-tested Python code to our internal modular agent libraries.",
      "Participate in weekly sprint planning and architecture demos."
    ],
    requirements: [
      "Pursuing or recently completed B.Tech / B.E / MCA / M.Sc in Computer Science or related fields.",
      "Strong coding skills in Python, including object-oriented patterns and async programming.",
      "Familiarity with OpenAI / Claude APIs and vector database fundamentals.",
      "Demonstrated personal or academic project using LLMs or modern APIs."
    ],
    technologies: ["Python", "LangGraph", "CrewAI", "FastAPI", "ChromaDB", "Docker", "Git"],
    weeklyRoadmap: [
      { week: "Week 1-2", focus: "Agent Architecture & Tool Schema", milestone: "Build single-agent tool-calling CLI prototype" },
      { week: "Week 3-5", focus: "Stateful Graphs & Memory Systems", milestone: "Deploy a stateful research agent with LangGraph" },
      { week: "Week 6-8", focus: "Multi-Agent Collaboration & Delegation", milestone: "Implement multi-agent market intelligence pipeline" },
      { week: "Week 9-11", focus: "Production Hardening & Tracing", milestone: "Set up telemetry, rate limiting, and Docker containers" },
      { week: "Week 12", focus: "Final Evaluation & Technical Showcase", milestone: "Deliver working project demo & technical documentation" }
    ],
    learningOutcomes: [
      "Production-level proficiency in stateful graph agent architectures.",
      "Practical experience deploying scalable containerized AI services.",
      "Comprehensive understanding of modern LLM safety, guardrails, and telemetry.",
      "Verified VIAI Labs Internship Certificate & verifiable digital credential."
    ],
    evaluationCriteria: [
      "Code quality, modularity, and adherence to clean architecture principles.",
      "Consistent progress on weekly milestone deliverables.",
      "Active engagement in technical sprint reviews and team problem solving."
    ]
  },
  {
    id: "intern-ml-engineering",
    slug: "applied-machine-learning-intern",
    title: "Applied Machine Learning & Computer Vision Intern",
    department: "Data & ML Engineering",
    duration: "10 Weeks",
    mode: "Hybrid",
    location: "Bangalore / Hybrid",
    openings: 3,
    deadline: "Open for Upcoming Cohort",
    stipendNote: "Stipend terms confirmed upon technical interview and selection.",
    overview:
      "Work alongside machine learning practitioners on computer vision pipelines, anomaly detection models, and data ingestion architectures. You will develop models in PyTorch, run hyperparameter experiments, and package REST inference APIs.",
    responsibilities: [
      "Clean, augment, and annotate real-world visual and tabular datasets.",
      "Train and fine-tune convolutional neural networks and transfer learning backbones.",
      "Track experiments and model versioning using MLflow.",
      "Build lightweight REST API wrappers for model inference using FastAPI.",
      "Prepare benchmark reports comparing precision, recall, and latency trade-offs."
    ],
    requirements: [
      "Background in Computer Science, Data Science, or Mathematics/Statistics.",
      "Solid knowledge of Python, NumPy, Pandas, Scikit-Learn, and PyTorch.",
      "Understanding of fundamental ML metrics (Confusion Matrix, ROC-AUC, F1-Score).",
      "Git proficiency and familiarity with Linux/command-line environments."
    ],
    technologies: ["PyTorch", "OpenCV", "Scikit-Learn", "FastAPI", "MLflow", "NumPy", "Pandas"],
    weeklyRoadmap: [
      { week: "Week 1-2", focus: "Data Pipeline & Baseline Modeling", milestone: "Establish baseline classification accuracy and EDA report" },
      { week: "Week 3-4", focus: "Deep Learning & Transfer Learning", milestone: "Train ResNet/EfficientNet model with custom augmentations" },
      { week: "Week 5-6", focus: "Inference Optimization & Quantization", milestone: "Optimize model with ONNX Runtime for low-latency inference" },
      { week: "Week 7-8", focus: "API Packaging & Containerization", milestone: "Package microservice in Docker with automated unit tests" },
      { week: "Week 9-10", focus: "End-to-End Testing & Capstone Review", milestone: "Deliver final model package and peer review presentation" }
    ],
    learningOutcomes: [
      "Practical experience with real-world computer vision pipelines.",
      "Hands-on MLOps skills using MLflow and containerized deployment.",
      "Deep understanding of latency, quantization, and deployment trade-offs."
    ],
    evaluationCriteria: [
      "Reproducibility of ML experiments and documentation.",
      "Improvement of benchmark metrics on test holdout datasets.",
      "Clean software engineering packaging of ML models."
    ]
  },
  {
    id: "intern-fullstack-dev",
    slug: "full-stack-software-engineering-intern",
    title: "Full Stack Next.js Software Engineering Intern",
    department: "Web & SaaS Development",
    duration: "12 Weeks (3 Months)",
    mode: "Remote",
    location: "Remote (Pan-India)",
    openings: 5,
    deadline: "Applications Active",
    stipendNote: "Standard intern allowance as specified in selection offer.",
    overview:
      "Contribute to modern web platforms, dashboards, and internal tools built with Next.js App Router, TypeScript, Tailwind CSS, and PostgreSQL. You will craft accessible user interfaces, write robust Server Actions, and design relational schemas.",
    responsibilities: [
      "Develop responsive, accessible UI components adhering to our design systems.",
      "Implement typed server-side data fetching and mutation with Next.js App Router.",
      "Write Prisma queries and design normalized PostgreSQL database models.",
      "Collaborate on automated unit and integration tests using Vitest/Playwright.",
      "Participate in daily standups and submit clean pull requests for code review."
    ],
    requirements: [
      "Proficient in TypeScript, JavaScript (ES6+), React, and Tailwind CSS.",
      "Familiar with relational databases (PostgreSQL/MySQL) and basic SQL.",
      "Understanding of Git workflows (branching, PRs, resolving conflicts).",
      "Strong attention to detail in UI/UX typography, spacing, and responsive design."
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Git"],
    weeklyRoadmap: [
      { week: "Week 1-2", focus: "Component Library & Design Tokens", milestone: "Build responsive typed UI components matching Figma specs" },
      { week: "Week 3-5", focus: "Next.js App Router & Server Actions", milestone: "Implement complex dynamic routing and Server Actions" },
      { week: "Week 6-8", focus: "Relational Modeling with Prisma", milestone: "Design schema migrations, relational joins, and API endpoints" },
      { week: "Week 9-10", focus: "Authentication, RBAC & State", milestone: "Integrate role-based access control and persistent session states" },
      { week: "Week 11-12", focus: "Testing, Performance & Launch", milestone: "Ship production-ready SaaS module with automated test coverage" }
    ],
    learningOutcomes: [
      "Mastery of contemporary enterprise Next.js App Router paradigms.",
      "Experience working in a professional Git-based engineering team.",
      "Real-world understanding of database migrations, indexing, and security."
    ],
    evaluationCriteria: [
      "Speed and fidelity of UI translation from design to code.",
      "Adherence to TypeScript strict mode and clean code standards.",
      "Quality of pull request documentation and team communication."
    ]
  },
  {
    id: "intern-data-analytics",
    slug: "data-analytics-and-bi-intern",
    title: "Data Analytics & Business Intelligence Intern",
    department: "Analytics & Strategy",
    duration: "8 Weeks",
    mode: "Remote",
    location: "Remote",
    openings: 3,
    deadline: "Open for Applications",
    stipendNote: "Stipend details shared with shortlisted applicants.",
    overview:
      "Turn complex data streams into actionable executive stories. You will write advanced SQL queries, clean messy operational datasets in Pandas, construct DAX data models, and build interactive PowerBI and web dashboards.",
    responsibilities: [
      "Extract and shape tabular datasets using SQL joins and window functions.",
      "Perform exploratory data analysis and identify business anomalies.",
      "Design interactive dashboards in PowerBI and Streamlit.",
      "Draft concise executive summaries highlighting key performance drivers."
    ],
    requirements: [
      "Familiarity with SQL queries, Excel formulas, and basic Python.",
      "Analytical mindset with keen eye for business patterns and anomalies.",
      "Eagerness to learn dashboard design and data storytelling principles."
    ],
    technologies: ["SQL", "Python", "Pandas", "PowerBI", "Streamlit", "Excel"],
    weeklyRoadmap: [
      { week: "Week 1-2", focus: "SQL Deep-Dive & Data Extraction", milestone: "Build complex multi-table SQL queries with window functions" },
      { week: "Week 3-4", focus: "Data Cleaning & Cohort Analysis", milestone: "Publish cohort retention and customer lifetime analysis" },
      { week: "Week 5-6", focus: "PowerBI Modeling & DAX Measures", milestone: "Create interactive executive dashboard with drill-down filters" },
      { week: "Week 7-8", focus: "Executive Presentation & Insights", milestone: "Deliver final strategic analytics briefing report" }
    ],
    learningOutcomes: [
      "Proficiency in writing production-grade analytical SQL queries.",
      "Ability to architect clean, performant PowerBI data models.",
      "Confidence in presenting data-driven recommendations to leadership."
    ],
    evaluationCriteria: [
      "Accuracy and efficiency of analytical queries.",
      "Visual clarity and usability of designed dashboards.",
      "Clarity and strategic value of written executive findings."
    ]
  }
];
