"use client";

import {
    AppWindowIcon,
    Bot,
    Globe,
    Shield,
} from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

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
    technologies: ["Laravel", "React", "Inertia.js", "PostgreSQL", "Chrome Extension API", "REST APIs"],
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

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-amber-50 dark:bg-background text-foreground transition-colors duration-200">
            {/* Meteors - fixed position to cover entire viewport */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            </div>

            <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <section className="py-12 md:py-16">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Projects</h1>
                    <p className="text-muted-foreground mb-12 max-w-2xl">
                        A selection of significant projects I've built and contributed to,
                        showcasing diverse technical skills.
                    </p>

                    <BentoGrid className="grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 lg:max-h-[90vh] mb-4">
                        {features.map((feature) => (
                            <BentoCard key={feature.name} {...feature} />
                        ))}
                    </BentoGrid>
                </section>
            </main>
        </div>
    );
}
