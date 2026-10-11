"use client";

import { ScrollRevealList } from "./ui/scroll-reveal";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { HyperText } from "./ui/hyper-text";

const skillCategories = [
  {
    category: "Backend Development",
    skills: [
      "Laravel",
      "PHP",
      "MySQL",
      "PostgreSQL",
      "REST APIs",
      "Database Design",
      "Eloquent ORM",
      "Multi-tenant Architecture",
      "MVC Architecture",
      "Manifest V3",
      "Chrome Extension API",
      "JavaScript"
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      "React",
      "Inertia.js",
      "Next.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Responsive Design",
      "UI Components",
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      "Git/GitHub",
      "Chrome Extension Development",
      "Manual Application Deployment",
      "PostgreSQL",
      "MySQL",
      "RESTful APIs",
      "Ubuntu",
      "Basecamp",
      "Jira"
    ],
  },
  {
    category: "Key Skills",
    skills: [
      "Communication",
      "Problem Solving",
      "Team Work",
      "Code Reviews",
      "Form Handling",
      "Role-based Access Control",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24">
      <h2 className="scribble text-3xl md:text-4xl font-bold mb-4">
        Skills & Expertise
      </h2>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        Technical skills and expertise developed through hands-on experience with modern web technologies.
      </p>
      <ScrollRevealList variant="fadeUp" staggerDelay={0.15} className="mb-4">
        <div className="doodle bg-card relative w-[100%] overflow-hidden">
          {/* <CardHeader>
            <CardTitle>Now Playing</CardTitle>
            <CardDescription>Stairway to Heaven - Led Zeppelin</CardDescription>
          </CardHeader> */}
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-3xl font-bold text-ink mb-2 justify-start text-center">
                <HyperText>1+</HyperText>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>
              <div className="text-3xl font-bold text-ink mb-2 text-center">
                <HyperText>3+</HyperText>
                <p className="text-muted-foreground">Major Projects</p>
              </div>
              <div className="text-3xl font-bold text-ink mb-2 text-center">
                <HyperText>100%</HyperText>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </CardContent>

        </div>
        {skillCategories.map((category, index) => (
          <div
            key={`skill-${index}`}
            className="p-6 doodle doodle-lift bg-card"
          >
            <h3 className="text-lg font-bold mb-4 text-ink">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={`skill-${i}`}
                  className="chip px-4 py-2 text-sm font-medium"
                >
                  {skill}
                </span>

                // <span
                //   key={i}
                //   className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-primary/20 text-foreground hover:border-primary/50 transition-colors"
                // >

                // </span>
              ))}
            </div>
          </div>
        ))}
      </ScrollRevealList>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="p-6 doodle bg-card hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-bold mb-4 text-ink">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="chip px-4 py-2 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div> */}

      {/* Additional Info */}

      {/* </div> */}
    </section>
  );
}
