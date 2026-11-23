import { SyllabusItem } from "@/types";

export const syllabusData: SyllabusItem[] = [
  {
    id: "syl-agentic-ai",
    courseId: "course-agentic-ai",
    courseTitle: "Agentic AI & Autonomous Automation",
    category: "Agentic AI & Automation",
    version: "v3.2",
    lastUpdated: "January 2025",
    fileSize: "1.4 MB",
    moduleCount: 5,
    summary:
      "Comprehensive module breakdown covering cognitive ReAct loops, LangGraph stateful DAGs, CrewAI multi-agent swarms, tool wrapping, and production Docker containerization.",
    targetAudience: "Advanced Python developers, AI engineers, and automation architects",
    prerequisites: ["Python (OOP & async)", "REST APIs", "LLM Fundamentals"],
    isExternal: false
  },
  {
    id: "syl-gen-ai",
    courseId: "course-gen-ai",
    courseTitle: "Generative AI & Enterprise LLM Engineering",
    category: "Generative AI",
    version: "v2.8",
    lastUpdated: "January 2025",
    fileSize: "1.2 MB",
    moduleCount: 4,
    summary:
      "Full curriculum covering transformer internals, hybrid RAG with BM25 + Qdrant, LoRA/QLoRA fine-tuning with Unsloth, and vLLM inference serving.",
    targetAudience: "Software developers and machine learning practitioners entering Generative AI",
    prerequisites: ["Intermediate Python", "Basic ML/Vector concepts"],
    isExternal: false
  },
  {
    id: "syl-aiml",
    courseId: "course-aiml-foundation",
    courseTitle: "Applied AI & Machine Learning Engineering",
    category: "AI & Machine Learning",
    version: "v4.1",
    lastUpdated: "January 2025",
    fileSize: "1.8 MB",
    moduleCount: 5,
    summary:
      "A complete 12-week blueprint spanning mathematical foundations, Scikit-Learn classical algorithms, PyTorch deep learning, computer vision, and MLflow MLOps.",
    targetAudience: "Engineering students, data enthusiasts, and career changers",
    prerequisites: ["High-school mathematics", "Basic programming in any language"],
    isExternal: false
  },
  {
    id: "syl-fullstack",
    courseId: "course-fullstack-dev",
    courseTitle: "Full Stack Next.js & Modern Software Engineering",
    category: "Full Stack Development",
    version: "v3.5",
    lastUpdated: "January 2025",
    fileSize: "1.5 MB",
    moduleCount: 4,
    summary:
      "Industry-aligned curriculum teaching TypeScript, Next.js App Router, Server Components, Server Actions, PostgreSQL, Prisma ORM, and CI/CD pipelines.",
    targetAudience: "Aspiring full-stack engineers and frontend developers upgrading to modern Next.js",
    prerequisites: ["HTML, CSS, and basic JavaScript"],
    isExternal: false
  },
  {
    id: "syl-python",
    courseId: "course-python-tech",
    courseTitle: "Python for Modern Software & Automation",
    category: "Python Programming",
    version: "v2.5",
    lastUpdated: "January 2025",
    fileSize: "980 KB",
    moduleCount: 3,
    summary:
      "Foundational to intermediate syllabus covering Python core, OOP principles, web scraping, FastAPI REST services, and database persistence.",
    targetAudience: "Beginners, tech graduates, and professionals automating manual tasks",
    prerequisites: ["No prior programming experience required"],
    isExternal: false
  },
  {
    id: "syl-data-science",
    courseId: "course-data-science",
    courseTitle: "Data Science & Advanced Analytics",
    category: "Data Science & Analytics",
    version: "v3.1",
    lastUpdated: "January 2025",
    fileSize: "1.3 MB",
    moduleCount: 4,
    summary:
      "Practical data curriculum including advanced SQL, Pandas data wrangling, hypothesis testing, A/B experiments, forecasting, and PowerBI dashboards.",
    targetAudience: "Business analysts, finance professionals, and engineers seeking data specializations",
    prerequisites: ["Basic spreadsheets or introductory Python"],
    isExternal: false
  },
  {
    id: "syl-ai-automation",
    courseId: "course-ai-automation",
    courseTitle: "AI Automation & No-Code Systems",
    category: "Agentic AI & Automation",
    version: "v2.2",
    lastUpdated: "January 2025",
    fileSize: "850 KB",
    moduleCount: 4,
    summary:
      "Tactical blueprint covering visual workflow engines (n8n, Make), webhooks, OpenAI structured outputs, document OCR, and automated error handling.",
    targetAudience: "Operations leaders, agency owners, developers, and product builders",
    prerequisites: ["General computer literacy and web familiarity"],
    isExternal: false
  },
  {
    id: "syl-cybersecurity",
    courseId: "course-cybersecurity",
    courseTitle: "Applied Cybersecurity & Threat Defense",
    category: "Cybersecurity",
    version: "v2.0",
    lastUpdated: "January 2025",
    fileSize: "1.1 MB",
    moduleCount: 4,
    summary:
      "Defensive and offensive security syllabus covering OSI packet analysis, OWASP Top 10 vulnerabilities, SIEM logging, and AI threat mitigation.",
    targetAudience: "Network administrators, developers, and engineering students",
    prerequisites: ["Basic networking and operating system concepts"],
    isExternal: false
  },

  // Official External University Curriculum References (clearly demarcated as requested)
  {
    id: "syl-ext-giet-cse-ai",
    courseId: "external-giet-ai",
    courseTitle: "GIET University — B.Tech Computer Science & Artificial Intelligence Curricula",
    category: "AI & Machine Learning",
    version: "Academic Year 2024–25 (Official Syllabus Record)",
    lastUpdated: "September 2024",
    fileSize: "2.8 MB",
    moduleCount: 8,
    summary:
      "Official academic curriculum reference published by GIET University for B.Tech in CSE with AI specialization, covering semester-wise subjects and lab credits.",
    targetAudience: "University students and academic partners referencing accredited university frameworks",
    prerequisites: ["Higher Secondary (10+2) Mathematics & Physics"],
    isExternal: true,
    institutionSource: "GIET University (Official Board of Studies Curriculum)"
  },
  {
    id: "syl-ext-ltsu-punjab",
    courseId: "external-ltsu-tech",
    courseTitle: "LTSU Punjab — Industry 4.0 & Emerging Technologies Curriculum Framework",
    category: "AI & Machine Learning",
    version: "Curriculum Regulation 2024 (Official Syllabus Record)",
    lastUpdated: "August 2024",
    fileSize: "3.2 MB",
    moduleCount: 10,
    summary:
      "Official university academic framework published by Lamrin Tech Skills University (LTSU) Punjab for applied tech, artificial intelligence, and skill education.",
    targetAudience: "Affiliated institution faculty and students referencing official state university curricula",
    prerequisites: ["Undergraduate STEM enrollment"],
    isExternal: true,
    institutionSource: "Lamrin Tech Skills University Punjab (Official Academic Document)"
  }
];
