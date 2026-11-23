"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { Settings, ShieldCheck, RotateCcw, Bell, Lock, Database } from "lucide-react";

export default function AdminSettingsPage() {
  const { showToast } = useApp();

  const handleResetDemoData = () => {
    if (confirm("Reset local storage enquiries and application leads to default demo data?")) {
      localStorage.removeItem("viai_enquiries");
      localStorage.removeItem("viai_applications");
      localStorage.removeItem("viai_company_config");
      showToast("Demo data reset to clean baseline. Refreshing page...", "info");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1224]">Platform & System Settings</h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Configure security policies, email dispatchers, and state persistence caches.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-8 text-xs">
        {/* Security Box */}
        <div className="space-y-4 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2 font-bold text-sm text-[#0B1224]">
            <Lock className="w-4 h-4 text-[#168CF0]" />
            <span>Role-Based Access Control (RBAC)</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Admin console access requires verified two-factor authentication in production mode. Demo mode is currently enabled with 1-click simulation toggles.
          </p>
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold">
              Active Environment: Development Demo
            </span>
          </div>
        </div>

        {/* Notifications */}
        <div className="space-y-4 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2 font-bold text-sm text-[#0B1224]">
            <Bell className="w-4 h-4 text-[#06B6D4]" />
            <span>Inbound Lead Notification Webhooks</span>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
              <span>Notify admissions director on new course enquiries</span>
              <input type="checkbox" defaultChecked className="rounded text-[#168CF0]" />
            </label>
            <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
              <span>Notify evaluation team on internship resume uploads</span>
              <input type="checkbox" defaultChecked className="rounded text-[#168CF0]" />
            </label>
          </div>
        </div>

        {/* Reset Demo State */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-bold text-sm text-[#0B1224]">
            <Database className="w-4 h-4 text-rose-500" />
            <span>State Cache & Demo Data Management</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            If you have submitted test enquiries or edited company contact details and want to reset the platform state back to factory defaults:
          </p>
          <button
            onClick={handleResetDemoData}
            className="px-4 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 font-bold text-xs flex items-center gap-2 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Demo State & LocalStorage</span>
          </button>
        </div>
      </div>
    </div>
  );
}
