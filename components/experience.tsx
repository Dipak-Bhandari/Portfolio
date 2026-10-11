"use client";

import { ScrollRevealList } from "./ui/scroll-reveal";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Dignep Group Pvt.Ltd.",
    period: "Jan, 2025 – Feb 2026 ",
    location: "Lalitpur",
    description:
      "Developed and maintained web applications using Laravel, Inertia.js, and React for internal and client-facing systems. Built and maintained a multi-tenant Chromium-based browser extension, including backend APIs and frontend integration. Implemented RESTful APIs, backend business logic, and database-driven features using PostgreSQL/MySQL. Built reusable UI components and responsive layouts using Tailwind CSS. Integrated frontend workflows with backend APIs, including authentication, form handling, and role-based access. Collaborated with designers and developers to deliver features from development to deployment.",
    technologies: ["Laravel", "Inertia.js", "React", "Next.js", "PostgreSQL", "MySQL", "Tailwind CSS", "REST APIs", "Manual App Deployment", "Manifest V3", "JavaScript"],
  },
  {
    role: "Laravel Developer Intern",
    company: "Dignep Group Pvt.Ltd.",
    period: "Nov, 2024 – Jan, 2025",
    location: "Kathmandu",
    description:
      "Assisted in developing backend features using Laravel, following MVC architecture and coding standards. Worked with Eloquent ORM, migrations, and database queries. Supported frontend integration using Inertia.js and React for UI components and forms. Fixed bugs, tested features, and participated in code reviews under senior guidance. Gained experience with Git-based workflows and real production environments.",
    technologies: ["Laravel", "HTML", "CSS", "Inertia.js", "React", "MySQL", "Git", "MVC"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24">
      <h2 className="scribble text-3xl md:text-4xl font-bold mb-4">
        Professional Experience
      </h2>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        Professional journey building web applications with Laravel, React, and modern technologies.
      </p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-0 border-l-2 border-dashed border-ink"></div>

        <div className="space-y-12">
          <ScrollRevealList variant="fadeUp" staggerDelay={0.15} className="mb-4">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 w-4 h-4 bg-primary rounded-full border-2 border-ink -translate-x-1/2 -translate-y-1/2"></div>

                {/* Card */}
                <div className="ml-8 p-6 doodle doodle-lift bg-card">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-ink font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">
                    {exp.location}
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="chip px-3 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </ScrollRevealList>
        </div>
      </div>
    </section>
  );
}
