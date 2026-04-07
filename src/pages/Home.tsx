import { useEffect } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Calendar, ChevronDown } from "lucide-react";

const EXPERIENCE = [
  {
    title: "Founding Frontend Engineer",
    company: "Como",
    period: "May 2025 - Apr 2026",
    bullets: [
      "Shipped a cross-platform mobile app using React Native + Expo, supporting iOS + Android releases with EAS and TestFlight workflows.",
      "Implemented secure auth (login/signup/refresh + token storage) using Redux and SecureStore to maintain reliable session state.",
      "Launched company website with React, Flowbite, and Tailwind CSS, building reusable components, collapsible banners, and pages for Privacy Policy and Terms of Service.",
      "Accelerated development cycles by prototyping in Gemini AI Studio and using Claude for prompt engineering to refine requirements, troubleshoot issues, and draft implementation plans."
    ]
  },
  {
    title: "Junior Developer",
    company: "Techtonica",
    period: "July 2024 - May 2025",
    bullets: [
      "Authored and maintained a project wiki to ensure knowledge transfer and clarity across distributed teams.",
      "Worked on a variety of tickets across the stack, implementing solutions in both front-end (JavaScript) and back-end (Python) to drive project progress and meet sprint goals.",
      "Collaborated remotely using Git and Jira, consistently meeting sprint goals and delivering project milestones.",
      "Built a Flask API (Gunicorn) backed by a PostgreSQL schema (local + Supabase in production), with endpoints to store completed/rejected/favorite problems and progress stats."
    ]
  },
  {
    title: "Outreach & Engagement Specialist",
    company: "Lime Connect",
    period: "Mar 2022 - July 2023",
    bullets: [
      "Conducted targeted outreach to over 150 on-campus student groups, 100+ career offices, and 100+ disability offices to identify diverse student populations.",
      "Reviewed over 150 Lime Connect Scholarship applications, selecting top candidates for final rounds and establishing a seamless pipeline from applicant to Lime Connect member."
    ]
  }
];

const Sparkle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mb-4 ml-1">
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("snap-y", "snap-mandatory");
    return () => {
      document.documentElement.classList.remove("snap-y", "snap-mandatory");
    };
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-6">
      {/* Hero Section */}
      <section className="h-dvh snap-start snap-always flex flex-col items-center py-8 md:py-16 text-center overflow-x-hidden">
        <div className="flex-1 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="relative inline-block">
              <h1 className="text-[120px] sm:text-[240px] font-serif leading-none tracking-tighter">
                Mai
              </h1>
              <div className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 animate-pulse">
                <Sparkle />
              </div>
            </div>

            <div className="mt-4 md:mt-8 space-y-2">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-brand-accent">Full-Stack Software Engineer</h2>
              <p className="text-base opacity-80">Brooklyn, NY</p>
            </div>

            <div className="mt-8 md:mt-12 grid grid-cols-1 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-8 w-full max-w-xs sm:max-w-none">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm font-bold hover:underline border border-brand-green/10 sm:border-none p-3 sm:p-0 rounded-lg"
              >
                <Github size={18} /> Github
              </a>
              <a
                href="https://linkedin.com/in/mai-th2024/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm font-bold hover:underline border border-brand-green/10 sm:border-none p-3 sm:p-0 rounded-lg"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href="https://calendly.com/ttmai/meeting-w-mai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm font-bold hover:underline border border-brand-green/10 sm:border-none p-3 sm:p-0 rounded-lg"
              >
                <Calendar size={18} /> Book Appointment
              </a>
            </div>
            <div className="mt-10 md:mt-14 flex flex-wrap justify-center gap-2 max-w-lg">
              {["React Native", "TypeScript", "iOS & Android", "Expo", "React", "Node.js", "Python", "REST APIs", "Accessibility", "AI Prototyping"].map((s) => (
                <span key={s} className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase border border-brand-accent/30 text-brand-accent rounded-full">
                  {s}
                </span>
              ))}
            </div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="hidden sm:flex flex-col items-center gap-2 mt-10 md:mt-12"
            >
              <ChevronDown size={32} />
              <p className="text-xs font-bold tracking-[0.3em] uppercase">SCROLL</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="snap-start scroll-mt-20 pt-0 pb-12 md:py-24 space-y-12 md:space-y-20">
        {EXPERIENCE.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-4 mb-4 md:mb-8">
              <div>
                <h3 className="text-2xl font-bold">{exp.title}</h3>
                <p className="text-xl opacity-80">{exp.company}</p>
              </div>
              <p className="text-sm font-bold text-brand-accent md:pt-2">{exp.period}</p>
            </div>
            
            <ul className="space-y-4 max-w-3xl ml-4">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="relative pl-6 text-[13px] leading-relaxed opacity-90">
                  <span className="absolute left-0 top-2 w-1.5 h-1.5 border border-brand-green rounded-full" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>
    </main>

  );
}
