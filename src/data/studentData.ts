import { StudentProfile, Assignment, Certificate, Enquiry, InternshipApplication } from "@/types";

export const initialStudentProfile: StudentProfile = {
  id: "std-001",
  name: "Arjun Verma",
  email: "arjun.verma@example.com",
  phone: "+91 98765 12345",
  avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
  joinedDate: "October 2024",
  college: "Indian Institute of Information Technology",
  degree: "B.Tech Computer Science (3rd Year)",
  enrolledCourses: [
    {
      courseId: "course-agentic-ai",
      enrolledAt: "November 2024",
      progressPercentage: 68,
      completedModules: 3,
      totalModules: 5,
      lastAccessed: "Yesterday"
    },
    {
      courseId: "course-fullstack-dev",
      enrolledAt: "October 2024",
      progressPercentage: 100,
      completedModules: 4,
      totalModules: 4,
      lastAccessed: "3 days ago"
    }
  ]
};

export const initialAssignments: Assignment[] = [
  {
    id: "asg-1",
    courseId: "course-agentic-ai",
    courseTitle: "Agentic AI & Autonomous Automation",
    title: "Implement a Stateful ReAct Agent with Tool Failover",
    dueDate: "November 30, 2026",
    description:
      "Construct a LangGraph agent incorporating at least three external tools (search, calculation, and database read). Ensure state transitions recover smoothly when one tool throws an HTTP 500 error.",
    status: "Submitted",
    score: "94/100",
    feedback: "Exceptional error handling and clean state graph definitions. Good use of conditional edges.",
    submittedAt: "November 20, 2026",
    submissionLink: "https://github.com/arjun-verma/agentic-tool-failover"
  },
  {
    id: "asg-2",
    courseId: "course-agentic-ai",
    courseTitle: "Agentic AI & Autonomous Automation",
    title: "Multi-Agent Research Crew with CrewAI",
    dueDate: "December 10, 2026",
    description:
      "Orchestrate a hierarchical crew of 3 agents (Market Researcher, Fact Checker, Markdown Synthesizer) with rate limiting and output schema validation.",
    status: "Pending"
  },
  {
    id: "asg-3",
    courseId: "course-fullstack-dev",
    courseTitle: "Full Stack Next.js & Modern Software Engineering",
    title: "Final SaaS Capstone: Multi-Tenant Workspace & Server Actions",
    dueDate: "November 15, 2026",
    description:
      "Deliver a deployed Next.js 14 application with authentication, role-based access control, PostgreSQL Prisma schema, and responsive UI.",
    status: "Graded",
    score: "98/100",
    feedback: "Superb execution. Lighthouse score reached 99, and Server Actions are strictly validated with Zod.",
    submittedAt: "November 14, 2026",
    submissionLink: "https://github.com/arjun-verma/saas-orbit-workspace"
  }
];

export const initialCertificates: Certificate[] = [
  {
    id: "cert-01",
    credentialId: "VIAI-CERT-2024-FS8832",
    courseTitle: "Full Stack Next.js & Modern Software Engineering",
    recipientName: "Arjun Verma",
    issueDate: "November 18, 2026",
    skills: ["TypeScript", "Next.js App Router", "React Server Components", "PostgreSQL", "Prisma", "Tailwind CSS"],
    verificationUrl: "https://viailabs.com/verify/VIAI-CERT-2024-FS8832"
  }
];

export const initialEnquiries: Enquiry[] = [
  {
    id: "enq-101",
    fullName: "Priya Sundaram",
    email: "priya.sundaram@gmail.com",
    phone: "+91 98112 33445",
    type: "Course Enquiry",
    subject: "Agentic AI Cohort Start Dates & Prerequisites",
    courseOrProgram: "Agentic AI & Autonomous Automation",
    message: "Hi VIAI Labs team, I am currently working as a Python backend developer and would like to join the next live weekend cohort. Could you share the fee schedule and registration link?",
    createdAt: "2026-11-22T14:30:00Z",
    status: "New",
    notes: "Follow up scheduled with admissions advisor."
  },
  {
    id: "enq-102",
    fullName: "Prof. Rajesh Nair",
    email: "dean.academics@ritm-engineering.edu.in",
    phone: "+91 94450 88712",
    type: "Institutional Partnership",
    subject: "Campus AI Innovation Lab Setup for 600 Students",
    courseOrProgram: "College Workshops & Training",
    message: "We would like to explore signing an MoU with VIAI Labs for setting up an Applied AI & Computer Vision Lab in our department and training our faculty under FDP.",
    createdAt: "2026-11-21T09:15:00Z",
    status: "Contacted",
    notes: "Meeting proposed for Thursday 3 PM."
  },
  {
    id: "enq-103",
    fullName: "Karan Singhania",
    email: "karan.s@enterpriseops.tech",
    phone: "+91 97120 54321",
    type: "Corporate Workshop",
    subject: "Corporate AI Automation Masterclass for 25 Engineers",
    courseOrProgram: "AI Automation & No-Code Systems",
    message: "Looking for an intensive 2-day on-site workshop for our operations and dev team to automate invoice processing and ticket routing.",
    createdAt: "2026-11-19T11:45:00Z",
    status: "In Review",
    notes: "Proposal draft sent to client."
  }
];

export const initialInternshipApplications: InternshipApplication[] = [
  {
    id: "app-201",
    internshipId: "intern-agentic-ai",
    internshipTitle: "Agentic AI & Autonomous Workflows Intern",
    fullName: "Sanya Kapoor",
    email: "sanya.kapoor@outlook.com",
    phone: "+91 99887 66554",
    institution: "Delhi Technological University (DTU)",
    degreeYear: "B.Tech CSE, 3rd Year",
    githubProfile: "https://github.com/sanyakapoor",
    portfolioUrl: "https://sanya.dev",
    resumeFileName: "Sanya_Kapoor_Resume_2026.pdf",
    coverNote: "I have built two multi-agent projects using LangGraph and LangChain, including an automated resume screening bot. Eager to contribute to VIAI Labs production workflows.",
    appliedDate: "2026-11-22",
    status: "Under Review"
  },
  {
    id: "app-202",
    internshipId: "intern-fullstack-dev",
    internshipTitle: "Full Stack Next.js Software Engineering Intern",
    fullName: "Devansh Mehra",
    email: "devansh.m@gmail.com",
    phone: "+91 91234 88990",
    institution: "VIT Vellore",
    degreeYear: "B.Tech IT, Final Year",
    githubProfile: "https://github.com/devanshmehra",
    resumeFileName: "Devansh_Mehra_CV.pdf",
    coverNote: "Passionate about Next.js 14 App Router and TypeScript. Built an e-commerce platform with Server Actions and Stripe checkout.",
    appliedDate: "2026-11-21",
    status: "Shortlisted"
  }
];
