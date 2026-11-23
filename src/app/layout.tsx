import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import { AppClientWrapper } from "@/components/layout/AppClientWrapper";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1224"
};

export const metadata: Metadata = {
  title: "VIAI Labs — Learn. Build. Innovate. | Premier AI & Tech Education",
  description:
    "Explore practical, production-oriented learning in Agentic AI, Autonomous Workflows, Machine Learning, Full-Stack Development, and Industry Internships with VIAI Labs.",
  keywords: [
    "AI Education",
    "Agentic AI",
    "Autonomous Agents",
    "Machine Learning",
    "Full Stack Next.js",
    "Tech Internships",
    "Syllabus Library",
    "VIAI Labs"
  ],
  authors: [{ name: "VIAI Labs" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#F6F8FC] text-[#0B1224] selection:bg-[#168CF0] selection:text-white">
        <AppProvider>
          <AppClientWrapper>{children}</AppClientWrapper>
        </AppProvider>
      </body>
    </html>
  );
}
