# VIAI Labs — Production Website & Learning Platform

> **"Learn. Build. Innovate."**  
> A premium, responsive, production-oriented website and SaaS portal for **VIAI Labs**, an applied technology and AI education company.

---

## 1. Brand Identity & Design Language

- **Visual Quality:** Sophisticated, innovative, trustworthy, and futuristic SaaS aesthetic.
- **Hero Palette:** Dark midnight navy hero sections (`#0B1224`, `#080D1A`, `#111C38`) with soft radial atmospheric glow and dynamic interactive neural network constellations.
- **Content Palette:** Clean white (`#FFFFFF`) and light-slate content sections (`#F6F8FC`, `#F1F5F9`) with crisp typography and subtle card borders (`#E2E8F0`).
- **Accents:** Electric Blue (`#168CF0`), Cyan (`#06B6D4`), and restrained Violet gradients (`#8B5CF6`).
- **Typography:** Modern, legible sans-serif (`Inter`) with strict typographic rhythm.
- **Typographic Logo:** Responsive geometric neural-node 'V' icon mark and bold "VIAI LABS" treatment (`/src/components/shared/Logo.tsx`), easily swappable with custom SVG/PNG files.

---

## 2. Complete Architecture & Route Inventory

### Public Website
| Route | Description |
|---|---|
| `/` | **Homepage** (Sections A–K: Sticky Nav, Interactive Neural Hero, What We Do [6 Services], Featured Courses, 5-Phase Methodology, Project Showcase, Workshops, Integrity Proof, Accordion FAQ, Final CTA, Configurable Footer) |
| `/about` | Mission, Vision, Foundational Principles, and Academic Comparison Matrix |
| `/courses` | Complete Course Management System with live search, category filtering, difficulty filters, sorting, and responsive cards |
| `/courses/[slug]` | Deep course specifications: learning objectives, prerequisites, module accordions, capstone deliverables, and syllabus PDF preview/download |
| `/syllabus` | Dedicated searchable Syllabus Library with versioning, PDF previewer modal, real syllabus PDF downloads, and external university references (GIET, LTSU Punjab) |
| `/services` | Comprehensive overview of all 6 VIAI Labs offerings with deliverables and target audiences |
| `/services/ai-automation` | Dedicated deep-dive into Autonomous AI Agents, LangGraph, CrewAI, and enterprise workflow automation |
| `/internships` | Fellowship listings with duration, delivery mode, eligibility, and weekly roadmap milestones |
| `/internships/[slug]` | Fellowship detail page with structured 12-week roadmap and interactive application form with resume file upload |
| `/projects` | Systems Portfolio & Showcase across AI, Machine Learning, Automation, Next.js SaaS, and IoT |
| `/projects/[slug]` | Technical architectural specifications: problem statement, system execution DAG, key features, and benchmarks |
| `/workshops` | Campus hackathons, corporate executive labs, and weekend masterclasses |
| `/workshops/[slug]` | Workshop agenda breakdown, speaker bios, and instant seat reservation form |
| `/institutions` | Solutions for engineering colleges: Campus AI Lab setup, Faculty Development Programmes (FDP), and MoU partnerships |
| `/resources` | Free open-source developer roadmaps, cheat sheets, and starter datasets |
| `/blog` | Insights & deep-dive technical articles on Agentic AI, modern RAG, and Next.js Server Components |
| `/blog/[slug]` | Full article with reading time, author card, code snippets, and social sharing |
| `/contact` | Official communication desk with configurable telephone, emails, WhatsApp link, and live inquiry submission form |
| `/privacy` | Data governance and privacy policy |
| `/terms` | Terms of service and ethical academic guidelines |

### Authentication
| Route | Description |
|---|---|
| `/login` | Dual-role portal login (Student / Admin) with **1-Click Instant Demo Login** buttons |
| `/register` | Student onboarding and track interest selection |
| `/forgot-password` | Password recovery workflow |

### Student Portal
| Route | Description |
|---|---|
| `/student/dashboard` | High-level metrics, active course progress bars, pending assignment deadlines, and credential status |
| `/student/my-courses` | Enrolled courses with module completion meters and resume learning action |
| `/student/assignments` | Practical lab assignments with GitHub repository submission form and instructor evaluation comments |
| `/student/resources` | Exclusive student downloads (ZIP codebases, synthetic benchmark datasets, slide decks) |
| `/student/certificates` | Verifiable digital certificates with cryptographic Credential ID, QR verification, and printable PDF view |
| `/student/profile` | Student profile editor, degree details, and contact preferences |

### Admin Portal
| Route | Description |
|---|---|
| `/admin/dashboard` | High-level metrics (courses, enquiries, applications, students), visual charts, and recent activity feed |
| `/admin/courses` | Course catalog manager: search, filter, and add new course modal |
| `/admin/students` | Enrolled student directory with progress meters and contact shortcuts |
| `/admin/enquiries` | Real-time lead management inbox: triage messages from public forms and update status (New, Contacted, In Review, Enrolled, Closed) |
| `/admin/internships` | Fellowship review console: review applicant resumes, colleges, GitHub links, and update hiring statuses |
| `/admin/workshops` | Schedule masterclasses, manage venues, and monitor attendee counts |
| `/admin/projects` | Portfolio manager: add or feature architectural showcases |
| `/admin/resources` | Upload, replace, and link syllabus PDF documents to active courses |
| `/admin/content` | **Live Company Content Editor**: edit phone numbers, emails, addresses, taglines, and top announcement banners in real-time |
| `/admin/settings` | RBAC security overview, webhook toggles, and 1-click demo state reset |

---

## 3. Technology Stack

- **Framework:** Next.js 14.2 (App Router with React Server Components & Server Actions)
- **Language:** TypeScript 5 (Strict Mode enabled)
- **Styling:** Tailwind CSS with custom VIAI Labs color tokens and animations
- **Icons:** Lucide React
- **State Management:** Reactive React Context (`AppContext.tsx`) with automatic `localStorage` synchronization

---

## 4. Getting Started

### Prerequisites
- Node.js `v18.17+` or `v20+` or `v22+`
- npm `v9+` or `v10+`

### Installation
```bash
# Clone or navigate to the project directory
cd vvai

# Install dependencies (already installed)
npm install
```

### Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
npm start
```

---

## 5. Instant Demo Credentials

For testing and reviewing both portals:
- **Student Portal:** Click **"Demo Student →"** on `/login` or sign in as `student@viailabs.com`
- **Admin Portal:** Click **"Demo Admin →"** on `/login` or sign in as `admin@viailabs.com`
- **Resetting Demo Data:** Navigate to `/admin/settings` and click "Reset Demo State & LocalStorage"
