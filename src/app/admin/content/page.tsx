"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Save, Edit3, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export default function AdminContentPage() {
  const { companyConfig, updateCompanyConfig, showToast } = useApp();

  const [name, setName] = useState(companyConfig.name);
  const [tagline, setTagline] = useState(companyConfig.tagline);
  const [heroHeadline, setHeroHeadline] = useState(companyConfig.heroHeadline);
  const [heroSubheadline, setHeroSubheadline] = useState(companyConfig.heroSubheadline);
  const [email, setEmail] = useState(companyConfig.email);
  const [admissionsEmail, setAdmissionsEmail] = useState(companyConfig.admissionsEmail);
  const [partnershipsEmail, setPartnershipsEmail] = useState(companyConfig.partnershipsEmail);
  const [phonePrimary, setPhonePrimary] = useState(companyConfig.phonePrimary);
  const [phoneSecondary, setPhoneSecondary] = useState(companyConfig.phoneSecondary);
  const [whatsappNumber, setWhatsappNumber] = useState(companyConfig.whatsappNumber);
  const [whatsappDirectUrl, setWhatsappDirectUrl] = useState(companyConfig.whatsappDirectUrl);
  const [addressLine1, setAddressLine1] = useState(companyConfig.addressLines[0] || "");
  const [addressLine2, setAddressLine2] = useState(companyConfig.addressLines[1] || "");
  const [operatingHours, setOperatingHours] = useState(companyConfig.operatingHours);
  const [announcementText, setAnnouncementText] = useState(companyConfig.announcementText);
  const [showAnnouncement, setShowAnnouncement] = useState(companyConfig.showAnnouncement);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    updateCompanyConfig({
      name,
      tagline,
      heroHeadline,
      heroSubheadline,
      email,
      admissionsEmail,
      partnershipsEmail,
      phonePrimary,
      phoneSecondary,
      whatsappNumber,
      whatsappDirectUrl,
      addressLines: [addressLine1, addressLine2].filter(Boolean),
      operatingHours,
      announcementText,
      showAnnouncement
    });
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1224]">
          Live Content & Company Configuration
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Edit brand taglines, hero copy, contact telephone numbers, addresses, and announcement banners. Updates reflect immediately across the public website and footers.
        </p>
      </div>

      <form onSubmit={handleSave} className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6 text-xs">
        {/* Brand Identity */}
        <div className="space-y-4 pb-6 border-b border-slate-100">
          <h2 className="text-sm font-bold text-[#0B1224] uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#168CF0]" />
            <span>Brand Identity & Taglines</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Company Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
              />
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Proposed Tagline</label>
              <input
                type="text"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-700 font-semibold mb-1">Hero Section Main Headline</label>
            <input
              type="text"
              value={heroHeadline}
              onChange={(e) => setHeroHeadline(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
            />
          </div>

          <div>
            <label className="block text-slate-700 font-semibold mb-1">Hero Section Subheading</label>
            <textarea
              rows={2}
              value={heroSubheadline}
              onChange={(e) => setHeroSubheadline(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0] resize-none"
            />
          </div>
        </div>

        {/* Top Header Announcement Banner */}
        <div className="space-y-4 pb-6 border-b border-slate-100">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-[#0B1224] uppercase tracking-wider">
              Top Notification Announcement Banner
            </h2>
            <label className="flex items-center gap-2 cursor-pointer font-semibold text-slate-700">
              <input
                type="checkbox"
                checked={showAnnouncement}
                onChange={(e) => setShowAnnouncement(e.target.checked)}
                className="rounded border-slate-300 text-[#168CF0]"
              />
              <span>Display Banner on Site</span>
            </label>
          </div>

          <div>
            <input
              type="text"
              value={announcementText}
              onChange={(e) => setAnnouncementText(e.target.value)}
              placeholder="Admissions announcement text..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
            />
          </div>
        </div>

        {/* Contact Information & Phone Numbers */}
        <div className="space-y-4 pb-6 border-b border-slate-100">
          <h2 className="text-sm font-bold text-[#0B1224] uppercase tracking-wider">
            Official Contact Details (Configurable)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Primary Admissions Phone</label>
              <input
                type="text"
                value={phonePrimary}
                onChange={(e) => setPhonePrimary(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
              />
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Secondary Support Phone</label>
              <input
                type="text"
                value={phoneSecondary}
                onChange={(e) => setPhoneSecondary(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Admissions Email Desk</label>
              <input
                type="email"
                value={admissionsEmail}
                onChange={(e) => setAdmissionsEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
              />
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1">General Contact Email</label>
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
              <label className="block text-slate-700 font-semibold mb-1">WhatsApp Direct Chat Link</label>
              <input
                type="url"
                value={whatsappDirectUrl}
                onChange={(e) => setWhatsappDirectUrl(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
              />
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Operating Working Hours</label>
              <input
                type="text"
                value={operatingHours}
                onChange={(e) => setOperatingHours(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
              />
            </div>
          </div>
        </div>

        {/* Address Lines */}
        <div className="space-y-4">
          <h2 className="text-sm font-bold text-[#0B1224] uppercase tracking-wider">
            Physical Campus & Office Address
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Address Line 1</label>
              <input
                type="text"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
              />
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1">City / Region (Line 2)</label>
              <input
                type="text"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#168CF0]"
              />
            </div>
          </div>
        </div>

        {/* Save CTA */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#168CF0] to-[#06B6D4] hover:from-[#1379d0] hover:to-[#059eb8] text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>Save & Apply Updates Live Across Website</span>
          </button>
        </div>
      </form>
    </div>
  );
}
