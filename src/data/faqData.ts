export interface FaqItem {
  id: string;
  category: "General & Enrolment" | "Courses & Syllabus" | "Internships & Projects" | "Certifications & Policies";
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: "faq-1",
    category: "General & Enrolment",
    question: "What is VIAI Labs, and how is it different from traditional training institutes?",
    answer:
      "VIAI Labs is a specialized technology and AI education hub focused on practical, production-oriented engineering. Rather than theoretical lectures or rote memorization, our programmes emphasize real-world architectures: building autonomous agents, deploying machine learning models, shipping full-stack SaaS applications, and working on verified project deliverables."
  },
  {
    id: "faq-2",
    category: "General & Enrolment",
    question: "How do I enquire about or enrol in a programme?",
    answer:
      "You can submit an enquiry through any course page or our central Contact page. An admissions counselor will connect with you to review your background, confirm upcoming cohort dates and fee structures, and guide you through the registration process."
  },
  {
    id: "faq-3",
    category: "Courses & Syllabus",
    question: "Do I need prior coding experience to take a course?",
    answer:
      "It depends on the specific course track. Foundational programmes like 'Python for Modern Software & Automation' and introductory modules welcome beginners with zero prior coding experience. Advanced tracks like 'Agentic AI & Autonomous Automation' and 'Applied AI & Machine Learning' require foundational familiarity with Python and basic data structures. Check the prerequisites section on each course page for specific details."
  },
  {
    id: "faq-4",
    category: "Courses & Syllabus",
    question: "Can I preview and download course syllabi before enrolling?",
    answer:
      "Yes. Every VIAI Labs course has a detailed, module-by-module syllabus available directly on its course page and in our searchable Syllabus Library. You can preview the full curriculum and generate a downloadable PDF document anytime."
  },
  {
    id: "faq-5",
    category: "Courses & Syllabus",
    question: "What modes of learning are offered?",
    answer:
      "We offer Live Online interactive sessions, Hybrid Classroom batches in select partner centers, and on-campus college workshops. All live sessions are recorded and made available inside the Student Portal alongside code repositories, lecture notes, and assignment prompts."
  },
  {
    id: "faq-6",
    category: "Internships & Projects",
    question: "Are internships open to college students?",
    answer:
      "Yes. Pre-final year, final year, and recent graduates in engineering, MCA, BCA, and related STEM disciplines are encouraged to apply. Selection is based on technical fit, portfolio work, and enthusiasm for practical engineering."
  },
  {
    id: "faq-7",
    category: "Internships & Projects",
    question: "Does VIAI Labs guarantee jobs or placements?",
    answer:
      "No. In adherence to transparent and ethical academic standards, VIAI Labs does not make unrealistic '100% placement guarantees.' Instead, we equip students with production-grade engineering skills, real portfolio code repositories, industry code review experience, and verified project deliverables that substantially improve their competitiveness in real hiring pipelines."
  },
  {
    id: "faq-8",
    category: "Certifications & Policies",
    question: "Will I receive a certificate upon completion?",
    answer:
      "Yes. Students who successfully complete all required modules, practical assignments, and the capstone project evaluation are awarded an official VIAI Labs Certificate of Completion with a unique, cryptographically verifiable Credential ID."
  },
  {
    id: "faq-9",
    category: "Certifications & Policies",
    question: "What is the policy regarding fees and refunds?",
    answer:
      "Confirmed course fees, installment options, and scholarship terms are transparently detailed on individual cohort confirmation forms prior to enrollment. Batch transfer and cancellation policies are governed by our institutional terms of service."
  }
];
