import {
  AppWindowIcon,
  Bot,
  Globe,
  Shield,
} from "lucide-react";
import React from "react";
import { BentoCard, BentoGrid } from "./ui/bento-grid";
import { ScrollReveal } from "./ui/scroll-reveal";

const features = [
  {
    Icon: AppWindowIcon,
    name: "OrkestTimesheet",
    description:
      "Multi-tenant Chromium-based browser extension for time tracking and task-based activity logging. Built backend using Laravel with PostgreSQL, including multi-tenant data handling and RESTful APIs consumed by the extension. Implemented API communication between extension and web application. Developed web application UI using React with Inertia.js.",
    href: "https://chromewebstore.google.com/detail/orkest-timesheet/nfloafdhlidblcbapcablepdcibinfgj?hl=en-GB",
    cta: "Visit",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className:
      "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 h-[100%]",
    technologies: ["Laravel", "React", "Inertia.js", "PostgreSQL", "Chrome Extension API", "REST APIs", "Manifest V3", "JavaScript", "HTML", "CSS"],
    year: "2025",
    github: "",
  },
  {
    Icon: Bot,
    name: "Certifyi.ai",
    description:
      "AI-powered Governance, Risk, and Compliance (GRC) platform. Implemented third-party API integrations within Next.js application. Built and maintained frontend UI components to support data display and user workflows. Collaborated with team to integrate external services into product flow.",
    href: "https://certifyi.ai",
    cta: "Visit",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    technologies: ["Next.js", "React", "API Integration", "TypeScript"],
    year: "2025",
    github: "",
  },
  {
    Icon: Shield,
    name: "CertifyiTrust Center",
    description:
      "Internal compliance and management dashboard. Contributed to backend development with multi-tenant architecture and role-based access control using Laravel. Assisted in building dashboard UI components using React and Inertia.js. Worked with structured data and permissions to support compliance-related features.",
    href: "https://trust.certifyi.ai",
    cta: "Visit",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    technologies: ["Laravel", "React", "Inertia.js", "RBAC", "Multi-tenant"],
    year: "2025",
    github: "",
  },
  {
    Icon: Globe,
    name: "Portfolio Projects",
    description:
      "Various web applications built using Laravel, React, and modern web technologies. Experience includes building RESTful APIs, database design, frontend integration, and deployment.",
    href: "",
    cta: "More",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-4",
    technologies: ["Laravel", "React", "MySQL", "PostgreSQL", "Tailwind CSS"],
    year: "2025-2026",
    github: "",
  },
];
export default function Projects() {
  return (
    <React.Fragment>
      <section id="projects" className="py-20 md:py-24">
        <h2 className="scribble text-3xl md:text-4xl font-bold mb-4">Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          A selection of significant projects I've built and contributed to,
          showcasing diverse technical skills.
        </p>

        <ScrollReveal variant="fadeUp">
          <BentoGrid className="grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 lg:max-h-[90vh] mb-4">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </ScrollReveal>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((project, index) => (
            <div
              key={index}
              className="group p-6 doodle bg-card hover:shadow-lg hover:border-amber-600/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
                  {project.name}
                </h3>
                <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded">
                  {project.year}
                </span>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="chip px-2 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-border">
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-ink transition-colors"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-ink transition-colors"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div> */}
      </section>
    </React.Fragment>
  );
}
