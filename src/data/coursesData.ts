import { Course } from "@/types";

export const coursesData: Course[] = [
  {
    id: "course-agentic-ai",
    slug: "agentic-ai-and-automation",
    title: "Agentic AI & Autonomous Automation",
    category: "Agentic AI & Automation",
    shortDescription:
      "Master autonomous multi-agent workflows, tool-augmented LLMs, LangGraph, CrewAI, and enterprise workflow automation.",
    fullDescription:
      "This flagship programme prepares engineers to design, build, and deploy production-grade Agentic AI systems. Learn how to construct self-correcting cognitive loops, memory architectures, multi-agent collaboration frameworks (CrewAI, LangGraph), and integrate AI agents with external databases, APIs, and real-world tools.",
    difficulty: "Advanced",
    duration: "10 Weeks (Part-Time)",
    mode: "Live Online",
    featured: true,
    thumbnailUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    badge: "Flagship",
    learningObjectives: [
      "Understand cognitive architectures: ReAct loops, Reflexion, and Tree-of-Thought prompting.",
      "Build production-grade autonomous agent swarms using LangGraph and CrewAI.",
      "Implement persistent memory vectors (Chroma, Pinecone) and long-term conversation buffers.",
      "Connect LLMs with real-world tools via function calling and OpenAPI specs.",
      "Design safety guardrails, hallucination mitigation, and human-in-the-loop validation.",
      "Deploy self-hosted agent workers on Docker and scalable cloud infrastructure."
    ],
    prerequisites: [
      "Intermediate proficiency in Python (OOP, async/await, requests/httpx).",
      "Basic familiarity with REST APIs and JSON data structures.",
      "Foundational understanding of modern LLM concepts (tokens, prompts, embeddings)."
    ],
    toolsAndTech: ["Python", "LangChain", "LangGraph", "CrewAI", "OpenAI / Claude API", "ChromaDB", "FastAPI", "Docker"],
    modules: [
      {
        id: "m1",
        moduleNumber: 1,
        title: "Foundations of Autonomous Agents & ReAct Paradigms",
        duration: "Week 1-2",
        description: "Introduction to autonomous agent architecture, deterministic vs probabilistic systems, and prompt-driven reasoning.",
        topics: [
          "From Chatbots to Autonomous Decision Engines",
          "ReAct Pattern: Reason, Act, Observe, Iterate",
          "Tool Execution Mechanics and Schema Definitions",
          "Handling Tool Execution Errors and Self-Correction"
        ],
        handsOnLab: "Building a single-agent research assistant with local search and calculation tools."
      },
      {
        id: "m2",
        moduleNumber: 2,
        title: "Stateful Agents & Graph Architectures with LangGraph",
        duration: "Week 3-4",
        description: "Modeling stateful, cyclical, multi-step workflows using directed graphs and checkpointing.",
        topics: [
          "State Graphs, Conditional Edges, and Nodes",
          "Persistent State and Checkpointers in LangGraph",
          "Human-in-the-Loop: Interrupting execution for approval",
          "Dynamic branching and conditional workflows"
        ],
        handsOnLab: "Developing a multi-stage code reviewer agent that drafts, critiques, and unit-tests Python code."
      },
      {
        id: "m3",
        moduleNumber: 3,
        title: "Multi-Agent Collaboration with CrewAI & AutoGen",
        duration: "Week 5-6",
        description: "Orchestrating specialized agent personas, delegation patterns, and role-based communication.",
        topics: [
          "Agent Roles, Goals, and Backstories in CrewAI",
          "Hierarchical vs Sequential Process Orchestration",
          "Inter-Agent Delegation and Memory Sharing",
          "Preventing infinite loops and runaway execution costs"
        ],
        handsOnLab: "Building an automated market intelligence crew: Researcher, Financial Analyst, and Report Writer."
      },
      {
        id: "m4",
        moduleNumber: 4,
        title: "Production Deployment, Observability & Guardrails",
        duration: "Week 7-8",
        description: "Hardening agents for real users: tracing, latency optimization, safety rules, and containerization.",
        topics: [
          "Tracing & Telemetry with LangSmith / OpenInference",
          "Cost controls, caching, and token budget enforcement",
          "Guardrails AI and NeMo Guardrails integration",
          "Packaging agent servers with FastAPI & Docker"
        ],
        handsOnLab: "Packaging an enterprise customer support agent with token rate limits and fallback safety."
      },
      {
        id: "m5",
        moduleNumber: 5,
        title: "Capstone Project Mentorship & Demo Day",
        duration: "Week 9-10",
        description: "Guided engineering of an end-to-end agentic product with peer code reviews and showcase.",
        topics: [
          "Architecture Blueprint Verification",
          "Performance Profiling and Stress Testing",
          "Documentation and API Contract Design",
          "Live System Demonstration"
        ],
        handsOnLab: "Final Capstone Presentation and Evaluation."
      }
    ],
    practicalAssignments: [
      "Implement a custom tool wrapper that interacts with Google Sheets and Slack APIs.",
      "Design a recursive search agent with dynamic backoff and query expansion.",
      "Build a multi-agent debate system that reaches consensus on complex policy questions."
    ],
    miniProjects: [
      "Autonomous GitHub Issue Resolver (fetches issue, reads repo, suggests PR)",
      "Automated Financial Document Auditor with Vector Retrieval"
    ],
    capstoneProject: {
      title: "Enterprise Autonomous Workflow Orchestrator",
      description:
        "Design and ship an autonomous multi-agent platform that ingests unstructured customer tickets, routes them to specialized AI sub-agents, reads enterprise databases, generates drafted resolutions, and seeks human approval for high-value actions.",
      deliverables: [
        "Complete Git repository with modular codebase and clean documentation",
        "FastAPI backend with streaming response endpoints",
        "Docker Compose deployment configuration",
        "LangSmith tracing log and evaluation benchmark report"
      ]
    },
    syllabusPdfFileName: "VIAI-Labs_Agentic-AI-Syllabus-2025.pdf",
    syllabusLastUpdated: "January 2025",
    syllabusVersion: "v3.2",
    instructor: {
      name: "VIAI Labs Senior AI Fellow",
      role: "Lead Architect, Applied AI",
      bio: "Industry practitioner specializing in scalable LLM orchestration and enterprise automation frameworks."
    }
  },
  {
    id: "course-gen-ai",
    slug: "generative-ai-and-llms",
    title: "Generative AI & Enterprise LLM Engineering",
    category: "Generative AI",
    shortDescription:
      "Deep dive into fine-tuning, RAG pipelines, vector databases, prompt engineering, and multimodal AI systems.",
    fullDescription:
      "Step beyond basic prompting. Learn how to engineer high-accuracy Retrieval-Augmented Generation (RAG) architectures, fine-tune open-weights models (Llama 3, Mistral) using LoRA/QLoRA, embed semantic search into business applications, and deploy compliant GenAI stacks.",
    difficulty: "Intermediate",
    duration: "8 Weeks (Part-Time)",
    mode: "Live Online",
    featured: true,
    thumbnailUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    badge: "High Demand",
    learningObjectives: [
      "Master modern RAG: Chunking strategies, hybrid search (BM25 + Dense), and cross-encoder rerankers.",
      "Fine-tune open-source LLMs using Parameter-Efficient Fine-Tuning (PEFT/LoRA) on custom domain datasets.",
      "Work with industry-standard vector databases: Pinecone, Qdrant, ChromaDB, and pgvector.",
      "Evaluate LLM performance quantitatively using Ragas and G-Eval frameworks.",
      "Integrate multimodal AI capabilities: audio, visual document parsing, and vision models."
    ],
    prerequisites: [
      "Comfortable with Python and basic data structures.",
      "Familiarity with basic machine learning concepts (vectors, embeddings, loss functions)."
    ],
    toolsAndTech: ["Python", "Hugging Face", "PyTorch", "LlamaIndex", "LangChain", "Qdrant", "Unsloth", "vLLM"],
    modules: [
      {
        id: "g1",
        moduleNumber: 1,
        title: "Modern LLM Architectures & Transformers from Ground Up",
        duration: "Week 1-2",
        description: "Self-attention mechanisms, encoder-decoder vs decoder-only architectures, tokenization, and context windows.",
        topics: [
          "Transformer Architecture: Self-Attention, Query-Key-Value vectors",
          "Context Windows, RoPE, and FlashAttention optimizations",
          "Tokenizers: BPE, WordPiece, and token economics",
          "Open vs Closed weights ecosystem landscape"
        ],
        handsOnLab: "Inspecting attention weights and vector embeddings for sample text corpuses in PyTorch."
      },
      {
        id: "g2",
        moduleNumber: 2,
        title: "Advanced Retrieval-Augmented Generation (RAG)",
        duration: "Week 3-4",
        description: "Architecting high-fidelity knowledge retrieval systems with hybrid search and reranking.",
        topics: [
          "Chunking Strategies: Semantic, Recursive, and Markdown chunking",
          "Dense Embeddings vs Sparse BM25 Keyword Search",
          "Hybrid Search with Reciprocal Rank Fusion (RRF)",
          "Cross-Encoder Re-ranking and Context Compression"
        ],
        handsOnLab: "Building a production RAG system over 500-page complex legal/technical PDFs."
      },
      {
        id: "g3",
        moduleNumber: 3,
        title: "Model Fine-Tuning with PEFT, LoRA & QLoRA",
        duration: "Week 5-6",
        description: "Customizing open LLMs for domain-specific vocabulary and precise output schemas.",
        topics: [
          "Supervised Fine-Tuning (SFT) dataset curation and formatting",
          "Parameter-Efficient Fine-Tuning (LoRA & QLoRA)",
          "Quantization: 4-bit, 8-bit, GGUF, AWQ, and memory optimization",
          "Training using Hugging Face TRL and Unsloth"
        ],
        handsOnLab: "Fine-tuning a Llama-3 8B model to generate structured medical summaries in JSON format."
      },
      {
        id: "g4",
        moduleNumber: 4,
        title: "Evaluation, Serving & High-Throughput Inference",
        duration: "Week 7-8",
        description: "Benchmarking quality, preventing hallucination, and deploying with vLLM / Ollama.",
        topics: [
          "RAG Evaluation: Faithfulness, Answer Relevance, Context Precision (Ragas)",
          "High-throughput inference with vLLM and continuous batching",
          "Streaming UI responses with WebSockets and Server-Sent Events",
          "Deploying GenAI applications to production cloud endpoints"
        ],
        handsOnLab: "Benchmarking RAG accuracy metrics and deploying with vLLM server on GPU."
      }
    ],
    practicalAssignments: [
      "Build a semantic document search engine with Qdrant and hybrid search.",
      "Curate and clean a 1,000-sample JSON instruction-tuning dataset.",
      "Benchmark response fidelity across 5 retrieval chunk sizes."
    ],
    miniProjects: [
      "Multimodal Invoice & Receipt Parser with Vision Models",
      "Interactive Code Q&A Assistant connected to a live GitHub repository"
    ],
    capstoneProject: {
      title: "Enterprise Multi-Document Intelligence & Synthesis Platform",
      description:
        "Build a comprehensive enterprise knowledge assistant that processes multi-format documents (PDF, DOCX, CSV), indexes them in a hybrid vector store, provides source-cited answers with page-level links, and scores confidence.",
      deliverables: [
        "Full repository with ingestion pipeline and retrieval service",
        "Interactive Next.js frontend with citation highlights",
        "Evaluation benchmark notebook proving >90% faithfulness on test questions"
      ]
    },
    syllabusPdfFileName: "VIAI-Labs_GenAI-LLM-Syllabus-2025.pdf",
    syllabusLastUpdated: "January 2025",
    syllabusVersion: "v2.8",
    instructor: {
      name: "VIAI Labs LLM Research Lead",
      role: "GenAI Solutions Architect",
      bio: "Specializes in high-efficiency retrieval pipelines and open-source foundation model adaptation."
    }
  },
  {
    id: "course-aiml-foundation",
    slug: "artificial-intelligence-and-machine-learning",
    title: "Applied AI & Machine Learning Engineering",
    category: "AI & Machine Learning",
    shortDescription:
      "A complete hands-on journey through supervised/unsupervised learning, deep neural networks, computer vision, NLP, and MLOps.",
    fullDescription:
      "Comprehensive, industry-aligned training covering the entire machine learning lifecycle: data preparation, exploratory analysis, classical algorithms, deep learning with PyTorch, model evaluation, and containerized deployment with MLflow.",
    difficulty: "All Levels",
    duration: "12 Weeks (Part-Time)",
    mode: "Hybrid Classroom",
    featured: true,
    thumbnailUrl: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80",
    badge: "Core Programme",
    learningObjectives: [
      "Gain deep intuitive and mathematical understanding of ML algorithms.",
      "Master Scikit-Learn, PyTorch, Pandas, and NumPy for real-world modeling.",
      "Implement Convolutional Neural Networks (CNNs) for Computer Vision tasks.",
      "Build Natural Language Processing (NLP) classifiers and sequence models.",
      "Track experiments and package production models with MLflow and Docker."
    ],
    prerequisites: [
      "High-school mathematics (basic calculus, linear algebra, and statistics).",
      "Basic programming experience in any language (Python preferred)."
    ],
    toolsAndTech: ["Python", "NumPy", "Pandas", "Scikit-Learn", "PyTorch", "OpenCV", "MLflow", "Streamlit"],
    modules: [
      {
        id: "ai1",
        moduleNumber: 1,
        title: "Python for Data Science & Mathematical Foundations",
        duration: "Week 1-2",
        description: "Vectorized computing with NumPy, data manipulation with Pandas, and linear algebra fundamentals.",
        topics: [
          "Vector Operations, Matrices, Eigenvalues, and Gradient Descent",
          "Data Wrangling, Cleaning, and Feature Imputation with Pandas",
          "Exploratory Data Analysis (EDA) and Seaborn Visualizations",
          "Statistical Hypothesis Testing and Distribution Analysis"
        ],
        handsOnLab: "Exploratory analysis and feature engineering on a 250,000-record real estate pricing dataset."
      },
      {
        id: "ai2",
        moduleNumber: 2,
        title: "Classical Machine Learning Algorithms",
        duration: "Week 3-5",
        description: "Supervised and unsupervised learning, hyperparameter tuning, and cross-validation.",
        topics: [
          "Linear & Logistic Regression with Regularization (L1/L2)",
          "Decision Trees, Random Forests, and Gradient Boosting (XGBoost, LightGBM)",
          "Clustering: K-Means, DBSCAN, and Dimensionality Reduction (PCA)",
          "Validation Strategies: Stratified K-Fold, ROC-AUC, and F1 Optimization"
        ],
        handsOnLab: "Credit default risk prediction engine using hyperparameter-tuned XGBoost."
      },
      {
        id: "ai3",
        moduleNumber: 3,
        title: "Deep Learning Foundations with PyTorch",
        duration: "Week 6-8",
        description: "Multi-layer perceptrons, backpropagation, optimizers, and convolutional neural networks.",
        topics: [
          "Tensors, Autograd, and Custom Training Loops in PyTorch",
          "Loss Functions: CrossEntropy, MSE, and Custom Penalties",
          "Convolutional Layers, Pooling, and Transfer Learning (ResNet, EfficientNet)",
          "Computer Vision: Image Classification and Object Detection Basics"
        ],
        handsOnLab: "Defect detection classifier for manufacturing parts using PyTorch and Transfer Learning."
      },
      {
        id: "ai4",
        moduleNumber: 4,
        title: "Natural Language Processing & Sequence Modeling",
        duration: "Week 9-10",
        description: "Text preprocessing, embeddings (Word2Vec, FastText), and recurrent/attention mechanisms.",
        topics: [
          "Tokenization, Stemming, Lemmatization, and TF-IDF",
          "Dense Semantic Embeddings and Cosine Similarity",
          "Recurrent Neural Networks (LSTMs) vs Self-Attention",
          "Hugging Face Transformers for Text Classification"
        ],
        handsOnLab: "Customer sentiment and intent categorization pipeline for enterprise tickets."
      },
      {
        id: "ai5",
        moduleNumber: 5,
        title: "MLOps, Experiment Tracking & Deployment",
        duration: "Week 11-12",
        description: "Lifecycle tracking, model registries, containerization, and REST API serving.",
        topics: [
          "Tracking Runs and Hyperparameters with MLflow",
          "Model Serialization with ONNX and TorchScript",
          "Building Inference REST Endpoints with FastAPI",
          "Containerizing Models with Docker for Cloud Deployment"
        ],
        handsOnLab: "Deploying an end-to-end ML prediction microservice with Docker and automated testing."
      }
    ],
    practicalAssignments: [
      "Perform end-to-end data cleansing and outlier detection on noisy sensor logs.",
      "Implement a gradient descent optimizer from scratch in pure NumPy.",
      "Train a computer vision model with custom data augmentation pipeline."
    ],
    miniProjects: [
      "Customer Churn Forecasting Dashboard with Streamlit",
      "Medical Chest X-Ray Screening System using Transfer Learning"
    ],
    capstoneProject: {
      title: "Intelligent Video Telemetry & Anomaly Detection System",
      description:
        "Build a deep learning vision pipeline that monitors video streams, identifies safety violations (e.g., hardhat/vest detection), logs anomalies to an SQL database, and alerts administrators via webhook.",
      deliverables: [
        "Trained PyTorch model weights with benchmarked validation accuracy",
        "Streamlit monitoring dashboard with real-time video inference feed",
        "Documented MLflow experiment run comparison"
      ]
    },
    syllabusPdfFileName: "VIAI-Labs_AIML-Engineering-Syllabus-2025.pdf",
    syllabusLastUpdated: "January 2025",
    syllabusVersion: "v4.1",
    instructor: {
      name: "VIAI Labs Core Faculty",
      role: "Lead ML Engineer",
      bio: "10+ years building predictive systems and mentoring engineering cohorts across India."
    }
  },
  {
    id: "course-fullstack-dev",
    slug: "full-stack-software-development",
    title: "Full Stack Next.js & Modern Software Engineering",
    category: "Full Stack Development",
    shortDescription:
      "Build production-grade SaaS web applications using TypeScript, Next.js App Router, Tailwind CSS, Node.js, and PostgreSQL.",
    fullDescription:
      "Modern full-stack software development transformed by modern tooling. Gain expertise in building robust, performant web applications with TypeScript, React 19 / Next.js App Router, Server Actions, relational databases (PostgreSQL/Prisma), authentication, and scalable API architecture.",
    difficulty: "Intermediate",
    duration: "12 Weeks (Part-Time)",
    mode: "Live Online",
    featured: true,
    thumbnailUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    badge: "Industry Standard",
    learningObjectives: [
      "Build enterprise-grade web applications using TypeScript and Next.js App Router.",
      "Master React Server Components (RSC), Server Actions, and client-side optimization.",
      "Design robust relational schemas with PostgreSQL, Prisma ORM, and database migrations.",
      "Implement secure authentication patterns (OAuth, JWT, session cookies, RBAC).",
      "Deploy scalable applications to Vercel/AWS with continuous CI/CD pipelines."
    ],
    prerequisites: [
      "Fundamental knowledge of HTML, CSS, and basic JavaScript.",
      "Basic understanding of how web browsers and web servers communicate."
    ],
    toolsAndTech: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma", "Docker"],
    modules: [
      {
        id: "fs1",
        moduleNumber: 1,
        title: "Modern TypeScript & Advanced React Foundations",
        duration: "Week 1-3",
        description: "Type safety, generics, modern JavaScript ES2024 features, and component composition patterns.",
        topics: [
          "TypeScript Fundamentals: Types, Interfaces, Unions, and Generics",
          "React 18/19 Architecture: Hooks, State Machines, and Context",
          "Component Design Patterns: Compound components and Render Props",
          "Styling with Tailwind CSS, Design Tokens, and Responsive Layouts"
        ],
        handsOnLab: "Building a fully typed UI component library with accessible interactive widgets."
      },
      {
        id: "fs2",
        moduleNumber: 2,
        title: "Next.js App Router & Server-First Architecture",
        duration: "Week 4-6",
        description: "Server Components, streaming UI, nested layouts, and Server Actions for mutation.",
        topics: [
          "App Router Navigation, Dynamic Routes, and Route Groups",
          "Server Components vs Client Components: When to use which",
          "Data Fetching, Caching, Revalidation (ISR), and Suspense Boundaries",
          "Server Actions, Optimistic UI Updates, and Form Handling with Zod"
        ],
        handsOnLab: "Creating a high-performance e-commerce catalog with instant search, filtering, and ISR."
      },
      {
        id: "fs3",
        moduleNumber: 3,
        title: "Backend Architecture, Relational Databases & Prisma",
        duration: "Week 7-9",
        description: "Database design, PostgreSQL indexing, ORM modeling, transactions, and REST/RPC endpoints.",
        topics: [
          "Relational Database Modeling: Normalization, Foreign Keys, and Indexes",
          "Prisma ORM: Schema definition, Migrations, and Relations",
          "Authentication: NextAuth / Auth.js, JWTs, and Role-Based Access Control (RBAC)",
          "File Storage: S3/Cloudflare R2 integration for file uploads"
        ],
        handsOnLab: "Designing a multi-tenant workspace backend with team permissions and secure file uploads."
      },
      {
        id: "fs4",
        moduleNumber: 4,
        title: "Testing, Optimization, Security & Cloud Deployment",
        duration: "Week 10-12",
        description: "End-to-end testing, Core Web Vitals optimization, rate-limiting, and deployment.",
        topics: [
          "Unit & Integration Testing with Vitest and Playwright",
          "Performance Profiling, Bundle Analysis, and Core Web Vitals",
          "Web Security Essentials: CSRF, XSS, CORS, and Rate-Limiting",
          "Automated CI/CD workflows using GitHub Actions and Vercel/Docker"
        ],
        handsOnLab: "Writing end-to-end test suites and deploying the production app to custom cloud domain."
      }
    ],
    practicalAssignments: [
      "Implement a polymorphic form generator validated with Zod schemas.",
      "Build a real-time notification feed using Server-Sent Events (SSE).",
      "Configure a GitHub Actions CI pipeline that runs linting, type-checking, and tests."
    ],
    miniProjects: [
      "Collaborative Kanban Task Management Tool with Drag-and-Drop",
      "API Rate-Limited Developer Portal with Usage Analytics"
    ],
    capstoneProject: {
      title: "Production B2B SaaS Platform with Subscription Billing",
      description:
        "Build a complete multi-tenant SaaS application featuring workspace onboarding, role-based team management, payment integration, searchable audit logs, and exportable reports.",
      deliverables: [
        "Production-deployed application URL with live database",
        "Clean, documented TypeScript source code",
        "Automated Playwright test suite covering critical paths"
      ]
    },
    syllabusPdfFileName: "VIAI-Labs_FullStack-Nextjs-Syllabus-2025.pdf",
    syllabusLastUpdated: "January 2025",
    syllabusVersion: "v3.5",
    instructor: {
      name: "VIAI Labs Senior Engineering Faculty",
      role: "Lead Full-Stack Architect",
      bio: "Creator of multiple production web platforms with deep expertise in modern React ecosystems."
    }
  },
  {
    id: "course-python-tech",
    slug: "python-programming-for-emerging-tech",
    title: "Python for Modern Software & Automation",
    category: "Python Programming",
    shortDescription:
      "From syntax to production: Object-Oriented Programming, API design, web scraping, automation scripts, and database connectivity.",
    fullDescription:
      "A comprehensive foundational course built for beginners and engineers aiming to master Python for modern workflows. Covers clean code standards (PEP 8), async programming, interacting with external APIs, database persistence, and rapid scripting.",
    difficulty: "Beginner",
    duration: "6 Weeks (Part-Time)",
    mode: "Live Online",
    featured: false,
    thumbnailUrl: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80",
    badge: "Beginner Friendly",
    learningObjectives: [
      "Master Python data structures, list comprehensions, and functional programming concepts.",
      "Write clean Object-Oriented Python with classes, inheritance, and encapsulation.",
      "Interact with external web services and build REST APIs with FastAPI.",
      "Automate repetitive OS tasks, file parsing, and web scraping with BeautifulSoup/Playwright.",
      "Connect Python applications to SQLite and PostgreSQL databases."
    ],
    prerequisites: ["No prior programming experience required. Enthusiasm to build practical software."],
    toolsAndTech: ["Python 3.12", "FastAPI", "SQLite", "Requests", "BeautifulSoup", "Git", "VS Code"],
    modules: [
      {
        id: "py1",
        moduleNumber: 1,
        title: "Python Core: Syntax, Data Structures & Control Flow",
        duration: "Week 1-2",
        description: "Variables, primitive types, lists, dictionaries, sets, loops, and error handling.",
        topics: [
          "Python Environment Setup, Virtual Environments, and Package Management",
          "Lists, Tuples, Dictionaries, Sets, and Comprehensions",
          "Functions, Lambda Expressions, Decorators, and Generators",
          "Robust Exception Handling and Logging Practices"
        ],
        handsOnLab: "Building an automated CLI log parser and expense analyzer."
      },
      {
        id: "py2",
        moduleNumber: 2,
        title: "Object-Oriented Programming & File Systems",
        duration: "Week 3-4",
        description: "Classes, dunder methods, inheritance, file I/O, and JSON processing.",
        topics: [
          "Classes, Objects, Attributes, and Class Methods",
          "Inheritance, Polymorphism, and Abstract Base Classes",
          "Working with Pathlib, CSV, JSON, and YAML files",
          "Unit Testing with pytest and code style enforcement"
        ],
        handsOnLab: "Building a modular inventory management system with file persistence and automated tests."
      },
      {
        id: "py3",
        moduleNumber: 3,
        title: "Web Scraping, APIs & Automation Engineering",
        duration: "Week 5-6",
        description: "Consuming REST APIs, building FastAPI endpoints, web scraping, and scheduled tasks.",
        topics: [
          "HTTP Protocol, Requests, and Response Handling",
          "Web Scraping with BeautifulSoup and Playwright",
          "Building Fast REST APIs with FastAPI and Pydantic",
          "Automating repetitive workflows and background job queues"
        ],
        handsOnLab: "Building a live currency and commodity price tracker that sends email digests."
      }
    ],
    practicalAssignments: [
      "Write a multi-threaded web scraper that extracts technical news headlines.",
      "Create a CLI tool with argparse that converts CSV datasets into structured JSON.",
      "Build a secure password generator and strength evaluator."
    ],
    miniProjects: [
      "Automated PDF Invoicer & Email Dispatcher",
      "Personal Task Tracking REST API with SQLite"
    ],
    capstoneProject: {
      title: "Automated Tech Market Aggregator & REST API",
      description:
        "Build a standalone Python system that periodically scrapes tech job listings and blog articles, cleans the extracted information, stores it in an SQLite database, and exposes it via a documented FastAPI interface.",
      deliverables: [
        "Well-documented Python repository with modular structure",
        "FastAPI swagger docs endpoint",
        "Automated pytest test suite with >80% coverage"
      ]
    },
    syllabusPdfFileName: "VIAI-Labs_Python-Programming-Syllabus-2025.pdf",
    syllabusLastUpdated: "January 2025",
    syllabusVersion: "v2.5",
    instructor: {
      name: "VIAI Labs Python Mentor",
      role: "Senior Software Engineer",
      bio: "Passionate educator focused on empowering first-time coders with software best practices."
    }
  },
  {
    id: "course-data-science",
    slug: "data-science-and-predictive-analytics",
    title: "Data Science & Advanced Analytics",
    category: "Data Science & Analytics",
    shortDescription:
      "Transform raw data into strategic intelligence using statistical modeling, Pandas, predictive algorithms, and PowerBI dashboards.",
    fullDescription:
      "An intensive data science programme teaching exploratory analysis, statistical hypothesis validation, feature engineering, predictive modeling, and executive dashboard communication.",
    difficulty: "Intermediate",
    duration: "10 Weeks (Part-Time)",
    mode: "Live Online",
    featured: false,
    thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    badge: "High Growth",
    learningObjectives: [
      "Clean, wrangle, and analyze complex unstructured and structured datasets.",
      "Apply probability, Bayesian statistics, and hypothesis testing to business questions.",
      "Build predictive models for forecasting, classification, and churn detection.",
      "Synthesize insights into interactive executive dashboards using PowerBI and Streamlit."
    ],
    prerequisites: ["Basic Python knowledge or comfort with Excel data formulas."],
    toolsAndTech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Statsmodels", "PowerBI", "SQL"],
    modules: [
      {
        id: "ds1",
        moduleNumber: 1,
        title: "Advanced Data Wrangling & SQL for Data Science",
        duration: "Week 1-3",
        description: "Complex SQL queries, window functions, and advanced Pandas data transformations.",
        topics: [
          "Relational SQL: Joins, Window Functions, and Common Table Expressions",
          "Data Wrangling with Pandas: GroupBy, Pivot Tables, and Melt operations",
          "Handling Missing Values, Imputation, and Outlier Treatment",
          "Feature Engineering: Encoding, Scaling, and Feature Transformations"
        ],
        handsOnLab: "Extracting and shaping cohort analytics from a 500,000-row e-commerce transaction database."
      },
      {
        id: "ds2",
        moduleNumber: 2,
        title: "Statistical Inference & Experimental Design",
        duration: "Week 4-6",
        description: "Probability distributions, central limit theorem, A/B testing, and hypothesis testing.",
        topics: [
          "Probability Distributions (Normal, Binomial, Poisson)",
          "Hypothesis Testing: T-tests, ANOVA, Chi-Square tests, and p-values",
          "Designing and Analyzing Randomized Controlled A/B Tests",
          "Correlation vs Causation and Simpson's Paradox"
        ],
        handsOnLab: "Evaluating an A/B test conversion experiment and publishing a statistical significance report."
      },
      {
        id: "ds3",
        moduleNumber: 3,
        title: "Predictive Modeling & Time Series Forecasting",
        duration: "Week 7-8",
        description: "Supervised predictive modeling, cross-validation, and ARIMA/Prophet time series analysis.",
        topics: [
          "Regression & Classification Algorithms with Scikit-Learn",
          "Feature Importance and Model Interpretability with SHAP / LIME",
          "Time Series Decomposition, Trend, Seasonality, and Stationarity",
          "Forecasting with ARIMA, SARIMA, and Facebook Prophet"
        ],
        handsOnLab: "Building a retail sales forecasting model predicting weekly revenue with confidence bands."
      },
      {
        id: "ds4",
        moduleNumber: 4,
        title: "Executive Storytelling & Interactive Dashboards",
        duration: "Week 9-10",
        description: "Data visualization principles, PowerBI/Streamlit development, and stakeholder communication.",
        topics: [
          "Data Visualization Principles: Gestalt Laws and Color Psychology",
          "Building Interactive Dashboards with Streamlit and Plotly",
          "PowerBI Data Modeling (DAX measures, Star Schemas)",
          "Presenting Data Insights to Non-Technical Leadership"
        ],
        handsOnLab: "Building an interactive executive KPI control room dashboard."
      }
    ],
    practicalAssignments: [
      "Write SQL window queries calculating 7-day rolling revenue averages.",
      "Conduct an independent t-test on simulated marketing channel conversion rates.",
      "Build a customer lifetime value (CLV) regression model with SHAP analysis."
    ],
    miniProjects: [
      "Hospital Patient Readmission Risk Predictor",
      "Dynamic Airline Delay Prediction Dashboard"
    ],
    capstoneProject: {
      title: "Omnichannel Business Intelligence & Predictive Analytics Suite",
      description:
        "Perform complete exploratory, statistical, and predictive modeling on a multi-million dollar retail dataset, providing executive recommendations and deploying a live Streamlit decision tool.",
      deliverables: [
        "Jupyter Notebook with documented statistical methodology",
        "Interactive Streamlit web dashboard",
        "Executive PDF summary presentation with actionable business takeaways"
      ]
    },
    syllabusPdfFileName: "VIAI-Labs_DataScience-Analytics-Syllabus-2025.pdf",
    syllabusLastUpdated: "January 2025",
    syllabusVersion: "v3.1",
    instructor: {
      name: "VIAI Labs Data Fellow",
      role: "Principal Data Scientist",
      bio: "Experienced data strategist advising enterprise organizations on analytics pipelines."
    }
  },
  {
    id: "course-ai-automation",
    slug: "ai-automation-and-no-code-workflows",
    title: "AI Automation & No-Code Systems",
    category: "Agentic AI & Automation",
    shortDescription:
      "Automate business processes end-to-end by integrating Make, Zapier, n8n, OpenAI APIs, and enterprise webhooks.",
    fullDescription:
      "Designed for technology builders, operations leaders, and entrepreneurs. Learn to eliminate repetitive manual work by combining visual automation platforms (n8n, Make) with generative AI prompts, document parsers, and custom API integrations.",
    difficulty: "All Levels",
    duration: "4 Weeks (Intensive)",
    mode: "Live Online",
    featured: false,
    thumbnailUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    badge: "Fast Track",
    learningObjectives: [
      "Build complex visual automation flows using self-hosted n8n and Make.com.",
      "Integrate OpenAI and Anthropic APIs into automated decision trees.",
      "Parse and transform inbound emails, invoices, and documents automatically.",
      "Build webhook-triggered integrations between CRMs, Slack, and Google Workspace.",
      "Establish monitoring, error handlers, and fallback routines for zero-downtime workflows."
    ],
    prerequisites: ["Familiarity with web tools and basic spreadsheet logic."],
    toolsAndTech: ["n8n", "Make.com", "OpenAI API", "Webhooks", "Airtable", "Google Workspace", "Slack API"],
    modules: [
      {
        id: "aut1",
        moduleNumber: 1,
        title: "Visual Automation Core: Webhooks, Triggers & Schemas",
        duration: "Week 1",
        description: "Understanding HTTP methods, JSON payloads, triggers, routers, and data filters.",
        topics: [
          "Architecture of Modern Business Automation",
          "Webhooks: Inbound Listeners, Handshakes, and Payload parsing",
          "Working with JSON: Arrays, Objects, and Data Mapping",
          "Setting up self-hosted n8n and Make.com scenarios"
        ],
        handsOnLab: "Building an automated lead capture workflow that enriches contact data from external APIs."
      },
      {
        id: "aut2",
        moduleNumber: 2,
        title: "Integrating AI into Business Automation",
        duration: "Week 2",
        description: "Prompt chaining, sentiment routing, automated summarization, and data extraction.",
        topics: [
          "Calling OpenAI API inside visual workflows",
          "Structured Output Formatting: Enforcing strict JSON schemas",
          "Sentiment Analysis and Smart Ticket Routing",
          "Dynamic Prompt Construction using Variable Injections"
        ],
        handsOnLab: "Building an intelligent customer email triage agent that drafts contextual replies."
      },
      {
        id: "aut3",
        moduleNumber: 3,
        title: "Document Intelligence & OCR Extraction",
        duration: "Week 3",
        description: "Extracting structured data from PDFs, scanned receipts, and invoices into databases.",
        topics: [
          "PDF Parsing and Multi-Page Document Ingestion",
          "Vision Models for Scanned Receipts and Invoices",
          "Writing extracted tables into Airtable, PostgreSQL, and Google Sheets",
          "Confidence threshold checks and manual exception escalation"
        ],
        handsOnLab: "Constructing an automated Accounts Payable invoice ingestion and validation pipeline."
      },
      {
        id: "aut4",
        moduleNumber: 4,
        title: "Enterprise Hardening: Error Handling & Security",
        duration: "Week 4",
        description: "Retry mechanisms, dead-letter queues, rate-limit management, and audit logging.",
        topics: [
          "Graceful Error Handling and Automated Retry Strategies",
          "Alerting teams via Slack / WhatsApp on system failure",
          "API Key Security, Secrets Management, and GDPR considerations",
          "Deploying and monitoring production n8n containers"
        ],
        handsOnLab: "Implementing an enterprise-grade automated onboarding pipeline with automated failover."
      }
    ],
    practicalAssignments: [
      "Configure an n8n webhook listener that verifies HMAC signature security.",
      "Build a scenario that extracts meeting action items from audio transcripts.",
      "Create an automated social media content repurposer pipeline."
    ],
    miniProjects: [
      "Automated WhatsApp Customer Support Bot with AI Router",
      "Real Estate Lead Qualification and CRM Sync Engine"
    ],
    capstoneProject: {
      title: "Autonomous Enterprise Operations Engine",
      description:
        "Architect an end-to-end autonomous business workflow that monitors incoming vendor emails, extracts invoice line-items, verifies totals against purchase orders, logs data to Airtable, and requests Slack approval for payouts.",
      deliverables: [
        "Exported n8n / Make scenario JSON configuration files",
        "Video demonstration of the live end-to-end flow",
        "Architecture process flowchart diagram and error-handling documentation"
      ]
    },
    syllabusPdfFileName: "VIAI-Labs_AI-Automation-Syllabus-2025.pdf",
    syllabusLastUpdated: "January 2025",
    syllabusVersion: "v2.2",
    instructor: {
      name: "VIAI Labs Automation Practice Lead",
      role: "Workflow Architect",
      bio: "Helped dozens of businesses eliminate hundreds of manual hours through automated AI pipelines."
    }
  },
  {
    id: "course-cybersecurity",
    slug: "cybersecurity-and-ethical-defense",
    title: "Applied Cybersecurity & Threat Defense",
    category: "Cybersecurity",
    shortDescription:
      "Understand modern threat vectors, secure software development, network defense, penetration testing, and AI-era security.",
    fullDescription:
      "A hands-on technical curriculum in contemporary cybersecurity. Learn how modern networks and web applications are attacked, how to identify vulnerabilities, and how to configure robust defensive postures.",
    difficulty: "Intermediate",
    duration: "8 Weeks (Part-Time)",
    mode: "Hands-on Cohort",
    featured: false,
    thumbnailUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    badge: "Critical Skill",
    learningObjectives: [
      "Understand OWASP Top 10 web vulnerabilities and practical remediation techniques.",
      "Inspect network traffic and protocols using Wireshark and tcpdump.",
      "Perform controlled vulnerability assessments and security audits.",
      "Implement secure coding standards and static analysis in CI/CD pipelines.",
      "Understand AI security: prompt injections, model extraction, and data poisoning."
    ],
    prerequisites: ["Basic understanding of computer networking and operating system fundamentals."],
    toolsAndTech: ["Linux", "Wireshark", "Burp Suite", "Nmap", "Metasploit", "Python", "Snort"],
    modules: [
      {
        id: "sec1",
        moduleNumber: 1,
        title: "Networking Protocols, Architecture & Traffic Analysis",
        duration: "Week 1-2",
        description: "OSI Model, TCP/IP handshake, DNS, TLS/SSL, packet sniffing, and network mapping.",
        topics: [
          "TCP/IP, UDP, ICMP, and HTTP/HTTPS protocol mechanics",
          "Packet capture and dissection with Wireshark",
          "Network reconnaissance and port auditing with Nmap",
          "Firewalls, DMZ architecture, and intrusion detection basics"
        ],
        handsOnLab: "Capturing and analyzing unauthorized port scans and ARP spoofing in a virtual lab."
      },
      {
        id: "sec2",
        moduleNumber: 2,
        title: "Web Application Security & OWASP Top 10",
        duration: "Week 3-4",
        description: "Hands-on identification and exploitation of modern web vulnerabilities in controlled sandbox.",
        topics: [
          "SQL Injection, Blind SQLi, and ORM mitigation",
          "Cross-Site Scripting (XSS): Stored, Reflected, and DOM-based",
          "Cross-Site Request Forgery (CSRF) and Server-Side Request Forgery (SSRF)",
          "Authentication Flaws, Broken Object Level Authorization (BOLA/IDOR)"
        ],
        handsOnLab: "Finding and patching 5 high-severity vulnerabilities on an intentionally vulnerable web application."
      },
      {
        id: "sec3",
        moduleNumber: 3,
        title: "Defensive Security, Hardening & SIEM Logging",
        duration: "Week 5-6",
        description: "System hardening, log aggregation, intrusion detection rules, and incident response.",
        topics: [
          "Linux & Windows server baseline security hardening",
          "Security Information & Event Management (SIEM) with Wazuh / Splunk",
          "Writing custom Snort IDS rules for anomaly detection",
          "Incident response phases and digital forensics basics"
        ],
        handsOnLab: "Configuring a central SIEM logging dashboard that detects brute-force SSH attacks."
      },
      {
        id: "sec4",
        moduleNumber: 4,
        title: "AI Security & Modern DevSecOps",
        duration: "Week 7-8",
        description: "Securing modern CI/CD pipelines, container scanning, and defending AI systems.",
        topics: [
          "DevSecOps: SAST, DAST, and dependency vulnerability scanning (Trivy, Snyk)",
          "Prompt Injection Defense and LLM Guardrails",
          "Securing Vector Databases and API Secrets",
          "Cloud Security Posture Management (CSPM) essentials"
        ],
        handsOnLab: "Integrating automated dependency and secret scanning into a GitHub Actions pipeline."
      }
    ],
    practicalAssignments: [
      "Map out an isolated subnet and produce an actionable vulnerability scan report.",
      "Execute an ethical pen-test against an authorization bypass vulnerability.",
      "Configure an iptables firewall blocking unauthorized ingress protocols."
    ],
    miniProjects: [
      "Custom Python Network Honeypot and Alert Logger",
      "Automated Web Vulnerability Scanner using Python & OWASP ZAP"
    ],
    capstoneProject: {
      title: "End-to-End Enterprise Security Assessment & Defense Plan",
      description:
        "Perform a comprehensive security audit of a simulated corporate web infrastructure, document findings with CVSS scores, provide remediation code, and configure an active defense monitoring system.",
      deliverables: [
        "Executive vulnerability assessment report with CVSS ratings",
        "Remediation patch code for identified exploits",
        "Configured IDS rule set and incident response playbook"
      ]
    },
    syllabusPdfFileName: "VIAI-Labs_Cybersecurity-Defense-Syllabus-2025.pdf",
    syllabusLastUpdated: "January 2025",
    syllabusVersion: "v2.0",
    instructor: {
      name: "VIAI Labs Cyber Fellow",
      role: "Security Consultant",
      bio: "Certified ethical hacker and defensive infrastructure architect."
    }
  }
];
