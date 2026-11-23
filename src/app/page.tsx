import { HeroSection } from "@/components/home/HeroSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { FeaturedCoursesSection } from "@/components/home/FeaturedCoursesSection";
import { MethodologySection } from "@/components/home/MethodologySection";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
import { WorkshopsSection } from "@/components/home/WorkshopsSection";
import { SocialProofSection } from "@/components/home/SocialProofSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Section B — Hero */}
      <HeroSection />

      {/* Section C — What We Do (6 Service Cards) */}
      <WhatWeDoSection />

      {/* Section D — Featured Courses */}
      <FeaturedCoursesSection />

      {/* Section E — Learning Methodology Timeline */}
      <MethodologySection />

      {/* Section F — Featured Projects Showcase */}
      <FeaturedProjectsSection />

      {/* Section G — Workshops & Events */}
      <WorkshopsSection />

      {/* Section H — Social Proof & Verifiable Standards */}
      <SocialProofSection />

      {/* Section I — Frequently Asked Questions Accordion */}
      <FaqSection />

      {/* Section J — Final Call-To-Action */}
      <FinalCtaSection />
    </div>
  );
}
