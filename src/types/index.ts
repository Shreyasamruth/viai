export type CourseCategory = 
  | "AI & Machine Learning"
  | "Generative AI"
  | "Agentic AI & Automation"
  | "Python Programming"
  | "Full Stack Development"
  | "Data Science & Analytics"
  | "Cybersecurity"
  | "Cloud Computing"
  | "IoT & Embedded AI";

export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced" | "All Levels";

export interface CourseModule {
  id: string;
  moduleNumber: number;
  title: string;
  duration: string;
  description: string;
  topics: string[];
  handsOnLab?: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  category: CourseCategory;
  shortDescription: string;
  fullDescription: string;
  difficulty: DifficultyLevel;
  duration: string;
  mode: "Live Online" | "Hybrid Classroom" | "Self-Paced with Mentorship" | "Hands-on Cohort";
  featured: boolean;
  thumbnailUrl: string;
  badge?: string;
  learningObjectives: string[];
  prerequisites: string[];
  toolsAndTech: string[];
  modules: CourseModule[];
  practicalAssignments: string[];
  miniProjects: string[];
  capstoneProject: {
    title: string;
    description: string;
    deliverables: string[];
  };
  syllabusPdfFileName: string;
  syllabusLastUpdated: string;
  syllabusVersion: string;
  instructor?: {
    name: string;
    role: string;
    bio: string;
  };
}

export interface SyllabusItem {
  id: string;
  courseId: string;
  courseTitle: string;
  category: CourseCategory;
  version: string;
  lastUpdated: string;
  fileSize: string;
  moduleCount: number;
  pdfUrl?: string;
  summary: string;
  targetAudience: string;
  prerequisites: string[];
  isExternal?: boolean;
  institutionSource?: string;
}

export interface Internship {
  id: string;
  slug: string;
  title: string;
  department: string;
  duration: string;
  mode: "Remote" | "Hybrid" | "In-Office";
  location: string;
  openings: number;
  deadline: string;
  stipendNote: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  technologies: string[];
  weeklyRoadmap: {
    week: string;
    focus: string;
    milestone: string;
  }[];
  learningOutcomes: string[];
  evaluationCriteria: string[];
}

export interface ProjectShowcase {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: "Artificial Intelligence" | "Machine Learning" | "Automation" | "Web Applications" | "Data Science" | "IoT & Embedded";
  featured: boolean;
  thumbnail: string;
  clientType: "Internal Research Lab" | "Industry Partner Prototype" | "Student Capstone" | "Open Source Innovation";
  problemStatement: string;
  solutionOverview: string;
  architectureDiagramDesc: string;
  keyFeatures: string[];
  techStack: string[];
  metricsOrOutcomes: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Workshop {
  id: string;
  slug: string;
  title: string;
  topic: string;
  format: "Hands-on Bootcamp" | "Masterclass" | "College Technical Session" | "Corporate Executive Lab";
  targetAudience: "Engineering Students" | "Working Professionals" | "Polytechnic & Colleges" | "Corporate Teams";
  duration: string;
  dateSchedule: string;
  mode: "Online Live Interactive" | "On-Campus" | "Hybrid";
  venue: string;
  shortDescription: string;
  overview: string;
  keyTakeaways: string[];
  agenda: { time: string; session: string }[];
  trainerBio: string;
  registrationOpen: boolean;
}

export interface Enquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  type: "Course Enquiry" | "Internship Application" | "Institutional Partnership" | "Corporate Workshop" | "General";
  subject?: string;
  courseOrProgram?: string;
  message: string;
  createdAt: string;
  status: "New" | "Contacted" | "In Review" | "Enrolled" | "Closed";
  notes?: string;
}

export interface InternshipApplication {
  id: string;
  internshipId: string;
  internshipTitle: string;
  fullName: string;
  email: string;
  phone: string;
  institution: string;
  degreeYear: string;
  githubProfile?: string;
  portfolioUrl?: string;
  resumeFileName?: string;
  resumeDataUrl?: string;
  coverNote: string;
  appliedDate: string;
  status: "Under Review" | "Shortlisted" | "Interview Scheduled" | "Accepted" | "Archived";
  notes?: string;
}

export interface CompanyConfig {
  name: string;
  tagline: string;
  foundedYear: string;
  heroHeadline: string;
  heroSubheadline: string;
  email: string;
  admissionsEmail: string;
  partnershipsEmail: string;
  phonePrimary: string;
  phoneSecondary: string;
  whatsappNumber: string;
  whatsappDirectUrl: string;
  addressLines: string[];
  operatingHours: string;
  announcementText: string;
  showAnnouncement: boolean;
}

export interface StudentProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl: string;
  joinedDate: string;
  college: string;
  degree: string;
  enrolledCourses: {
    courseId: string;
    enrolledAt: string;
    progressPercentage: number;
    completedModules: number;
    totalModules: number;
    lastAccessed: string;
  }[];
}

export interface Assignment {
  id: string;
  courseId: string;
  courseTitle: string;
  title: string;
  dueDate: string;
  description: string;
  status: "Pending" | "Submitted" | "Graded";
  score?: string;
  feedback?: string;
  submittedAt?: string;
  submissionLink?: string;
}

export interface Certificate {
  id: string;
  credentialId: string;
  courseTitle: string;
  recipientName: string;
  issueDate: string;
  skills: string[];
  verificationUrl: string;
}
