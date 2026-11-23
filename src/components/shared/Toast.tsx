"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export const ToastContainer: React.FC = () => {
  const { toasts } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-md w-full pointer-events-none px-4 sm:px-0">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl shadow-2xl border text-sm backdrop-blur-md transition-all duration-300 animate-slide-up ${
            toast.type === "success"
              ? "bg-[#0B1224]/95 text-white border-emerald-500/30"
              : toast.type === "error"
              ? "bg-[#0B1224]/95 text-white border-rose-500/30"
              : "bg-[#0B1224]/95 text-white border-[#168CF0]/40"
          }`}
        >
          {toast.type === "success" && (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          )}
          {toast.type === "error" && (
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          )}
          {toast.type === "info" && (
            <Info className="w-5 h-5 text-[#06B6D4] shrink-0 mt-0.5" />
          )}
          <div className="flex-1 font-medium">{toast.message}</div>
        </div>
      ))}
    </div>
  );
};
