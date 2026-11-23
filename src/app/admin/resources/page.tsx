"use client";

import React, { useState } from "react";
import { syllabusData } from "@/data/syllabusData";
import { coursesData } from "@/data/coursesData";
import { SyllabusItem } from "@/types";
import { Upload, FileText, CheckCircle2, Plus, Download, Sparkles } from "lucide-react";

export default function AdminResourcesPage() {
  const [syllabi, setSyllabi] = useState<SyllabusItem[]>(syllabusData);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const [courseTitle, setCourseTitle] = useState("");
  const [version, setVersion] = useState("v1.0");
  const [fileSize, setFileSize] = useState("1.5 MB");

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!courseTitle) return;

    const newItem: SyllabusItem = {
      id: "syl-" + Date.now(),
      courseId: "course-custom",
      courseTitle,
      category: "Agentic AI & Automation",
      version,
      lastUpdated: "Just Now",
      fileSize,
      moduleCount: 4,
      summary: "Newly uploaded syllabus document published via admin console.",
      targetAudience: "Engineering students and working practitioners",
      prerequisites: ["General prerequisites"],
      isExternal: false
    };

    setSyllabi([newItem, ...syllabi]);
    setShowUploadModal(false);
    alert(`Document successfully uploaded and published to Syllabus Library!`);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1224]">
            Syllabus Library & Document Repository
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Upload, replace, and verify curriculum PDF documents linked to public course pages.
          </p>
        </div>

        <button
          onClick={() => setShowUploadModal(true)}
          className="px-4 py-2.5 rounded-xl bg-[#168CF0] hover:bg-[#1379d0] text-white text-xs font-bold transition-colors flex items-center gap-1.5 self-start sm:self-auto"
        >
          <Upload className="w-4 h-4" />
          <span>Upload Syllabus Document</span>
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-slate-800 font-bold border-b border-slate-200">
              <tr>
                <th className="p-4">Document Title</th>
                <th className="p-4">Category</th>
                <th className="p-4">Revision</th>
                <th className="p-4">Updated</th>
                <th className="p-4">File Size</th>
                <th className="p-4">Classification</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {syllabi.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 font-bold text-slate-900 max-w-xs truncate">
                    {item.courseTitle}
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#168CF0]">
                      {item.category}
                    </span>
                  </td>
                  <td className="p-4 font-mono font-semibold text-slate-800">{item.version}</td>
                  <td className="p-4 text-slate-500">{item.lastUpdated}</td>
                  <td className="p-4 text-slate-500">{item.fileSize}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                        item.isExternal
                          ? "bg-amber-100 text-amber-800"
                          : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      {item.isExternal ? "External University" : "VIAI Curricula"}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => alert(`Replacing document: ${item.courseTitle}`)}
                      className="text-[#168CF0] font-semibold hover:underline"
                    >
                      Replace PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-[#0B1224]">Upload / Replace Syllabus</h3>
            <form onSubmit={handleUploadSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Course Title *</label>
                <input
                  type="text"
                  required
                  value={courseTitle}
                  onChange={(e) => setCourseTitle(e.target.value)}
                  placeholder="e.g. Agentic AI & Autonomous Automation"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Revision Version</label>
                  <input
                    type="text"
                    value={version}
                    onChange={(e) => setVersion(e.target.value)}
                    placeholder="v3.2"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Estimated Size</label>
                  <input
                    type="text"
                    value={fileSize}
                    onChange={(e) => setFileSize(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Select PDF File</label>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center cursor-pointer bg-slate-50">
                  <Upload className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                  <span className="text-slate-600 font-medium block">Click to choose curriculum PDF</span>
                  <span className="text-[10px] text-slate-400">PDF Document (Max 15MB)</span>
                </div>
              </div>

              <div className="pt-3 flex gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#168CF0] text-white font-bold text-xs"
                >
                  Publish to Syllabus Library
                </button>
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-600 text-xs font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
