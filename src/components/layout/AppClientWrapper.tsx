"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ToastContainer } from "@/components/shared/Toast";
import { EnquiryModal } from "@/components/courses/EnquiryModal";
import { SyllabusPdfViewer } from "@/components/shared/SyllabusPdfViewer";
import { useApp } from "@/context/AppContext";

export const AppClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const { activeSyllabusCourse, closeSyllabusModal } = useApp();

  const isPortal = pathname.startsWith("/admin") || pathname.startsWith("/student");

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {!isPortal && <Navbar />}
      <main className="flex-1">{children}</main>
      {!isPortal && <Footer />}

      {/* Global Modals & Notifications */}
      <ToastContainer />
      <EnquiryModal />
      {activeSyllabusCourse && (
        <SyllabusPdfViewer
          course={activeSyllabusCourse}
          onClose={closeSyllabusModal}
        />
      )}
    </div>
  );
};
