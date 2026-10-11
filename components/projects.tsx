import { BentoCard, BentoGrid } from "./ui/bento-grid";
import { ScrollReveal } from "./ui/scroll-reveal";

const projects = [
  {
    name: "Tabnix",
    image: "/tabnix128.png",
    description:
      "Tab manager Chrome extension for saving tabs intentionally and restoring them instantly. Organize tabs into workspaces and collections, save a single tab, a selection or a whole window from the popup or a keyboard shortcut, and reopen them whenever you need, switching between work, study, research and personal browsing without losing your place. Works offline-first with background sync, optional cross-device sync, and a side panel for managing saved tabs. Designed and built solo, end to end.",
    href: "https://chromewebstore.google.com/detail/tabnix/dojbbkhbpkfpdajfflkomlanbdcomfkc",
    cta: "Get it on Chrome",
    technologies: ["Chrome Extension", "Workspaces", "Collections", "Offline-first", "Cross-device sync", "Side panel"],
    year: "Solo project",
    github: "",
  },
  {
    name: "OrkestTimesheet",
    image: "/orkesttimesheet.png",
    description:
      "Multi-tenant Chromium-based browser extension for time tracking and task-based activity logging. Built backend using Laravel with PostgreSQL, including multi-tenant data handling and RESTful APIs consumed by the extension. Implemented API communication between extension and web application. Developed web application UI using React with Inertia.js.",
    href: "https://chromewebstore.google.com/detail/orkest-timesheet/nfloafdhlidblcbapcablepdcibinfgj?hl=en-GB",
    cta: "Visit",
    technologies: ["Laravel", "React", "Inertia.js", "PostgreSQL", "Chrome Extension API", "REST APIs", "Manifest V3", "JavaScript", "HTML", "CSS"],
    year: "2025",
    github: "",
  },
  {
    name: "Certifyi.ai",
    image: "/certifyiai.svg",
    description:
      "AI-powered Governance, Risk, and Compliance (GRC) platform. Implemented third-party API integrations within Next.js application. Built and maintained frontend UI components to support data display and user workflows. Collaborated with team to integrate external services into product flow.",
    href: "https://certifyi.ai",
    cta: "Visit",
    technologies: ["Next.js", "React", "API Integration", "TypeScript"],
    year: "2025",
    github: "",
  },
  {
    name: "CertifyiTrust Center",
    image: "/certifyiai.svg",
    description:
      "Internal compliance and management dashboard. Contributed to backend development with multi-tenant architecture and role-based access control using Laravel. Assisted in building dashboard UI components using React and Inertia.js. Worked with structured data and permissions to support compliance-related features.",
    href: "https://trust.certifyi.ai",
    cta: "Visit",
    technologies: ["Laravel", "React", "Inertia.js", "RBAC", "Multi-tenant"],
    year: "2025",
    github: "",
  },
  {
    // Last card spans both columns so the grid has no empty slot.
    name: "Portfolio Projects",
    image: "/favicon.svg",
    description:
      "Various web applications built using Laravel, React, and modern web technologies. Experience includes building RESTful APIs, database design, frontend integration, and deployment.",
    href: "",
    cta: "",
    technologies: ["Laravel", "React", "MySQL", "PostgreSQL", "Tailwind CSS"],
    year: "2025-2026",
    github: "https://github.com/Dipak-Bhandari",
    className: "lg:col-span-2",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24">
      <h2 className="scribble text-3xl md:text-4xl font-bold mb-4">Projects</h2>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        A selection of significant projects I've built and contributed to,
        showcasing diverse technical skills.
      </p>

      <ScrollReveal variant="fadeUp">
        <BentoGrid className="lg:grid-cols-2">
          {projects.map((project) => (
            <BentoCard key={project.name} {...project} />
          ))}
        </BentoGrid>
      </ScrollReveal>
    </section>
  );
}
