"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { User, Mail, Phone, Building2, GraduationCap, Save, Sparkles, CheckCircle2 } from "lucide-react";

export default function StudentProfilePage() {
  const { studentProfile, showToast } = useApp();

  const [name, setName] = useState(studentProfile.name);
  const [email, setEmail] = useState(studentProfile.email);
  const [phone, setPhone] = useState(studentProfile.phone);
  const [college, setCollege] = useState(studentProfile.college);
  const [degree, setDegree] = useState(studentProfile.degree);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    showToast("Profile details updated successfully!", "success");
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1224]">Student Profile & Settings</h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Manage your contact credentials, institutional affiliations, and notification preferences.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-8">
        {/* Avatar and Header */}
        <div className="flex items-center gap-5 pb-6 border-b border-slate-100">
          <img
            src={studentProfile.avatarUrl}
            alt={studentProfile.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-[#168CF0]"
          />
          <div>
            <h2 className="text-xl font-bold text-[#0B1224]">{name}</h2>
            <p className="text-xs text-slate-500">Student ID: {studentProfile.id} • Joined {studentProfile.joinedDate}</p>
          </div>
        </div>

        {/* Profile Edit Form */}
        <form onSubmit={handleSave} className="space-y-5 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 font-semibold mb-1.5">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
              />
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1.5">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 font-semibold mb-1.5">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
              />
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1.5">College / Institution</label>
              <input
                type="text"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-700 font-semibold mb-1.5">Degree & Specialization</label>
            <input
              type="text"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#0B1224] hover:bg-[#168CF0] text-white font-bold text-xs transition-colors flex items-center gap-2"
            >
              <Save className="w-3.5 h-3.5" />
              <span>{saved ? "Changes Saved!" : "Save Profile Details"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
