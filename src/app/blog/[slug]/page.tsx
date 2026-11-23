"use client";

import React from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { blogPostsData } from "@/data/blogData";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Sparkles,
  Bookmark,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function BlogPostDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  const relatedPosts = blogPostsData.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="bg-[#F6F8FC] min-h-screen pb-24">
      {/* Header Banner */}
      <section className="bg-[#0B1224] text-white py-16 lg:py-20 border-b border-[#1E2C4F] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#168CF0]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span>/</span>
            <span className="text-[#38BDF8] line-clamp-1">{post.title}</span>
          </div>

          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#111C38] text-[#38BDF8] border border-[#1E2C4F]">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2 border-t border-[#1E2C4F]">
              <div className="flex items-center gap-2">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-7 h-7 rounded-full object-cover border border-[#168CF0]/40"
                />
                <div>
                  <span className="font-bold text-white block">{post.author.name}</span>
                  <span className="text-[10px] text-slate-400">{post.author.role}</span>
                </div>
              </div>

              <span className="text-slate-600 hidden sm:inline">•</span>

              <div className="flex items-center gap-1.5 text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-[#168CF0]" />
                <span>{post.publishedAt}</span>
              </div>

              <span className="text-slate-600 hidden sm:inline">•</span>

              <div className="flex items-center gap-1.5 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Post Body */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-12 shadow-sm space-y-8">
          {/* Cover */}
          <div className="rounded-2xl overflow-hidden border border-slate-100 max-h-96">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Formatted Article Content */}
          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-slate-800 space-y-6">
            <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 text-xs sm:text-sm text-slate-700 italic">
              <strong>Executive Summary: </strong> {post.excerpt}
            </div>

            <div className="whitespace-pre-line leading-relaxed">
              {post.content}
            </div>
          </div>

          {/* Post Footer & Tags */}
          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-bold text-slate-500 mr-2">Tags:</span>
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
                >
                  #{t}
                </span>
              ))}
            </div>

            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Article link copied to clipboard!");
              }}
              className="px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-1.5 self-start sm:self-auto"
            >
              <Share2 className="w-3.5 h-3.5 text-[#168CF0]" />
              <span>Share Article</span>
            </button>
          </div>
        </div>

        {/* Read Next Section */}
        {relatedPosts.length > 0 && (
          <div className="pt-16">
            <h3 className="text-xl font-bold text-[#0B1224] mb-6">Read Next</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#168CF0] shadow-sm transition-all group block"
                >
                  <span className="text-[10px] font-bold text-[#168CF0] uppercase tracking-wider block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="font-bold text-base text-[#0B1224] group-hover:text-[#168CF0] transition-colors line-clamp-2 mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {rel.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
