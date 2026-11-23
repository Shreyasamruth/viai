import { MetadataRoute } from "next";
import { coursesData } from "@/data/coursesData";
import { internshipsData } from "@/data/internshipsData";
import { projectsData } from "@/data/projectsData";
import { workshopsData } from "@/data/workshopsData";
import { blogPostsData } from "@/data/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://viailabs.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/courses",
    "/syllabus",
    "/services",
    "/services/ai-automation",
    "/internships",
    "/projects",
    "/workshops",
    "/institutions",
    "/resources",
    "/blog",
    "/contact",
    "/verify",
    "/privacy",
    "/terms",
    "/login",
    "/register"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8
  }));

  // Dynamic course routes
  const courseRoutes = coursesData.map((c) => ({
    url: `${baseUrl}/courses/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9
  }));

  // Dynamic internship routes
  const internshipRoutes = internshipsData.map((i) => ({
    url: `${baseUrl}/internships/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85
  }));

  // Dynamic project routes
  const projectRoutes = projectsData.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));

  // Dynamic workshop routes
  const workshopRoutes = workshopsData.map((w) => ({
    url: `${baseUrl}/workshops/${w.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8
  }));

  // Dynamic blog routes
  const blogRoutes = blogPostsData.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75
  }));

  return [
    ...staticRoutes,
    ...courseRoutes,
    ...internshipRoutes,
    ...projectRoutes,
    ...workshopRoutes,
    ...blogRoutes
  ];
}
