"use client";

import React from "react";
import { StudentSidebar } from "@/components/portal/StudentSidebar";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F6F8FC]">
      <StudentSidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <main className="p-6 sm:p-10">{children}</main>
      </div>
    </div>
  );
}
