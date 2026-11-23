"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  CompanyConfig,
  Enquiry,
  InternshipApplication,
  StudentProfile,
  Assignment,
  Certificate,
  Course
} from "@/types";
import { initialCompanyConfig } from "@/data/companyConfig";
import { initialEnquiries, initialInternshipApplications, initialStudentProfile, initialAssignments, initialCertificates } from "@/data/studentData";
import { coursesData } from "@/data/coursesData";

export type UserRole = "guest" | "student" | "admin";

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
}

interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

interface AppContextType {
  companyConfig: CompanyConfig;
  updateCompanyConfig: (newConfig: Partial<CompanyConfig>) => void;
  currentUser: User | null;
  loginAs: (role: UserRole, email?: string, name?: string) => void;
  logout: () => void;
  enquiries: Enquiry[];
  addEnquiry: (enquiry: Omit<Enquiry, "id" | "createdAt" | "status">) => void;
  updateEnquiryStatus: (id: string, status: Enquiry["status"], notes?: string) => void;
  internshipApplications: InternshipApplication[];
  addInternshipApplication: (app: Omit<InternshipApplication, "id" | "appliedDate" | "status">) => void;
  updateApplicationStatus: (id: string, status: InternshipApplication["status"], notes?: string) => void;
  studentProfile: StudentProfile;
  assignments: Assignment[];
  submitAssignment: (id: string, link: string) => void;
  certificates: Certificate[];
  toasts: Toast[];
  showToast: (message: string, type?: "success" | "error" | "info") => void;
  activeEnquiryCourse: Course | null;
  openEnquiryModal: (course?: Course | null) => void;
  closeEnquiryModal: () => void;
  activeSyllabusCourse: Course | null;
  openSyllabusModal: (course: Course) => void;
  closeSyllabusModal: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [companyConfig, setCompanyConfig] = useState<CompanyConfig>(initialCompanyConfig);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [enquiries, setEnquiries] = useState<Enquiry[]>(initialEnquiries);
  const [internshipApplications, setInternshipApplications] = useState<InternshipApplication[]>(initialInternshipApplications);
  const [studentProfile, setStudentProfile] = useState<StudentProfile>(initialStudentProfile);
  const [assignments, setAssignments] = useState<Assignment[]>(initialAssignments);
  const [certificates, setCertificates] = useState<Certificate[]>(initialCertificates);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [activeEnquiryCourse, setActiveEnquiryCourse] = useState<Course | null>(null);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [activeSyllabusCourse, setActiveSyllabusCourse] = useState<Course | null>(null);

  // Load from localStorage if present
  useEffect(() => {
    try {
      const savedConfig = localStorage.getItem("viai_company_config");
      if (savedConfig) setCompanyConfig(JSON.parse(savedConfig));

      const savedEnquiries = localStorage.getItem("viai_enquiries");
      if (savedEnquiries) setEnquiries(JSON.parse(savedEnquiries));

      const savedApplications = localStorage.getItem("viai_applications");
      if (savedApplications) setInternshipApplications(JSON.parse(savedApplications));

      const savedUser = localStorage.getItem("viai_user");
      if (savedUser) setCurrentUser(JSON.parse(savedUser));
    } catch {
      // Local storage unavailable or SSR
    }
  }, []);

  const updateCompanyConfig = (newConfig: Partial<CompanyConfig>) => {
    setCompanyConfig((prev) => {
      const updated = { ...prev, ...newConfig };
      try {
        localStorage.setItem("viai_company_config", JSON.stringify(updated));
      } catch {}
      return updated;
    });
    showToast("Company details updated successfully!", "success");
  };

  const loginAs = (role: UserRole, email?: string, name?: string) => {
    let user: User;
    if (role === "admin") {
      user = {
        id: "admin-1",
        name: name || "VIAI Admin",
        email: email || "admin@viailabs.com",
        role: "admin",
        avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
      };
    } else if (role === "student") {
      user = {
        id: "std-001",
        name: name || "Arjun Verma",
        email: email || "student@viailabs.com",
        role: "student",
        avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
      };
    } else {
      user = {
        id: "guest-1",
        name: name || "Guest Explorer",
        email: email || "guest@example.com",
        role: "guest"
      };
    }
    setCurrentUser(user);
    try {
      localStorage.setItem("viai_user", JSON.stringify(user));
    } catch {}
    showToast(`Logged in as ${user.name} (${role})`, "success");
  };

  const logout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem("viai_user");
    } catch {}
    showToast("Logged out successfully", "info");
  };

  const showToast = (message: string, type: "success" | "error" | "info" = "info") => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const addEnquiry = (enquiryData: Omit<Enquiry, "id" | "createdAt" | "status">) => {
    const newEnquiry: Enquiry = {
      ...enquiryData,
      id: "enq-" + Date.now(),
      createdAt: new Date().toISOString(),
      status: "New"
    };
    setEnquiries((prev) => {
      const updated = [newEnquiry, ...prev];
      try {
        localStorage.setItem("viai_enquiries", JSON.stringify(updated));
      } catch {}
      return updated;
    });
    showToast("Enquiry submitted successfully! An admissions advisor will reach out.", "success");
  };

  const updateEnquiryStatus = (id: string, status: Enquiry["status"], notes?: string) => {
    setEnquiries((prev) => {
      const updated = prev.map((e) => (e.id === id ? { ...e, status, notes: notes !== undefined ? notes : e.notes } : e));
      try {
        localStorage.setItem("viai_enquiries", JSON.stringify(updated));
      } catch {}
      return updated;
    });
    showToast(`Enquiry status updated to ${status}`, "info");
  };

  const addInternshipApplication = (appData: Omit<InternshipApplication, "id" | "appliedDate" | "status">) => {
    const newApp: InternshipApplication = {
      ...appData,
      id: "app-" + Date.now(),
      appliedDate: new Date().toISOString().split("T")[0],
      status: "Under Review"
    };
    setInternshipApplications((prev) => {
      const updated = [newApp, ...prev];
      try {
        localStorage.setItem("viai_applications", JSON.stringify(updated));
      } catch {}
      return updated;
    });
    showToast("Application submitted successfully! Our evaluation team will review your profile.", "success");
  };

  const updateApplicationStatus = (id: string, status: InternshipApplication["status"], notes?: string) => {
    setInternshipApplications((prev) => {
      const updated = prev.map((a) => (a.id === id ? { ...a, status, notes: notes !== undefined ? notes : a.notes } : a));
      try {
        localStorage.setItem("viai_applications", JSON.stringify(updated));
      } catch {}
      return updated;
    });
    showToast(`Application status updated to ${status}`, "info");
  };

  const submitAssignment = (id: string, link: string) => {
    setAssignments((prev) =>
      prev.map((a) =>
        a.id === id
          ? {
              ...a,
              status: "Submitted",
              submissionLink: link,
              submittedAt: new Date().toLocaleDateString()
            }
          : a
      )
    );
    showToast("Assignment submitted for instructor review!", "success");
  };

  const openEnquiryModal = (course: Course | null = null) => {
    setActiveEnquiryCourse(course);
    setIsEnquiryModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsEnquiryModalOpen(false);
    setActiveEnquiryCourse(null);
  };

  const openSyllabusModal = (course: Course) => {
    setActiveSyllabusCourse(course);
  };

  const closeSyllabusModal = () => {
    setActiveSyllabusCourse(null);
  };

  return (
    <AppContext.Provider
      value={{
        companyConfig,
        updateCompanyConfig,
        currentUser,
        loginAs,
        logout,
        enquiries,
        addEnquiry,
        updateEnquiryStatus,
        internshipApplications,
        addInternshipApplication,
        updateApplicationStatus,
        studentProfile,
        assignments,
        submitAssignment,
        certificates,
        toasts,
        showToast,
        activeEnquiryCourse,
        openEnquiryModal,
        closeEnquiryModal,
        activeSyllabusCourse,
        openSyllabusModal,
        closeSyllabusModal
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
