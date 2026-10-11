"use client";

import { ScrollRevealList } from "@/components/ui/scroll-reveal";
import {
    CardContent,
} from "@/components/ui/card";
import { HyperText } from "@/components/ui/hyper-text";

const skillCategories = [
    {
        category: "Backend Development",
        skills: [
            "Laravel",
            "PHP",
            "MySQL",
            "REST APIs",
            "Database Design",
            "Query Optimization",
            "Middleware",
            "Task Scheduling",
        ],
    },
    {
        category: "Frontend Development",
        skills: [
            "React",
            "Vue.js",
            "JavaScript",
            "Responsive Design",
            "UI/UX Implementation",
            "State Management",
            "HTML/CSS",
        ],
    },
    {
        category: "Tools & Technologies",
        skills: [
            "Git/GitHub",
            "GitLab",
            "Docker",
            "MySQL",
            "Agile Methodology",
            "Slack",
            "Teams",
        ],
    },
    {
        category: "Key Skills",
        skills: [
            "Communication",
            "Problem Solving",
            "Database Normalization",
            "Version Control",
            "Project Management",
            "Code Refactoring",
        ],
    },
];

export default function SkillsPage() {
    return (
        <div className="min-h-screen bg-background paper text-foreground transition-colors duration-200">
            {/* Meteors - fixed position to cover entire viewport */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            </div>

            <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <section className="py-12 md:py-16">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Skills & Expertise
                    </h1>
                    <p className="text-muted-foreground mb-12 max-w-2xl">
                        A comprehensive range of technical and professional skills developed
                        through 4+ years of experience.
                    </p>

                    <ScrollRevealList variant="fadeUp" staggerDelay={0.15} className="mb-4">
                        <div className="doodle bg-card relative w-[100%] overflow-hidden">
                            {/* <CardContent className="pt-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="text-3xl font-bold text-ink mb-2 justify-start text-center">
                                        <HyperText>+4</HyperText>
                                        <p className="text-muted-foreground text-base font-normal">Years of Experience</p>
                                    </div>
                                    <div className="text-3xl font-bold text-ink mb-2 text-center">
                                        <HyperText>+10</HyperText>
                                        <p className="text-muted-foreground text-base font-normal">Major Projects</p>
                                    </div>
                                    <div className="text-3xl font-bold text-ink mb-2 text-center">
                                        <HyperText>100%</HyperText>
                                        <p className="text-muted-foreground text-base font-normal">Client Satisfaction</p>
                                    </div>
                                </div>
                            </CardContent> */}

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
                                    ))}
                                </div>
                            </div>
                        ))}
                    </ScrollRevealList>
                </section>
            </main>
        </div>
    );
}
