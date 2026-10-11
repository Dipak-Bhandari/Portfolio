"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import Navigation from "@/components/navigation";
import NewHero from "@/components/new-hero";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Team from "@/components/team";
import Contact from "@/components/contact";
import { IconCloud } from "@/components/ui/icon-cloud";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-background paper text-foreground transition-colors duration-200">
      {/* Icon Cloud Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center opacity-30 dark:opacity-20">
        <IconCloud
          images={[
            "https://cdn.simpleicons.org/laravel",
            "https://cdn.simpleicons.org/php",
            "https://cdn.simpleicons.org/mysql",
            "https://cdn.simpleicons.org/postgresql",
            "https://cdn.simpleicons.org/react",
            "https://cdn.simpleicons.org/nextdotjs",
            "https://cdn.simpleicons.org/inertia",
            "https://cdn.simpleicons.org/javascript",
            "https://cdn.simpleicons.org/typescript",
            "https://cdn.simpleicons.org/html5",
            "https://cdn.simpleicons.org/css",
            "https://cdn.simpleicons.org/tailwindcss",
            "https://cdn.simpleicons.org/git",
            "https://cdn.simpleicons.org/github",
            "https://cdn.simpleicons.org/ubuntu",
            "https://cdn.simpleicons.org/basecamp",
            "https://cdn.simpleicons.org/jira",
            "https://cdn.simpleicons.org/googlechrome",
            "https://cdn.simpleicons.org/docker",
            "https://cdn.simpleicons.org/nodedotjs",
            "https://cdn.simpleicons.org/composer",
            "https://cdn.simpleicons.org/npm",
            "https://cdn.simpleicons.org/coderabbit",
            "https://cdn.simpleicons.org/postman",
            "https://cdn.simpleicons.org/vuedotjs",
          ]}
        />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewHero />
        <ScrollReveal variant="fadeUp">
          <Experience />
        </ScrollReveal>
        <ScrollReveal variant="fadeUp">
          <Projects />
        </ScrollReveal>
        <ScrollReveal variant="fadeUp">
          <Skills />
        </ScrollReveal>
        <Team />
        <ScrollReveal variant="fadeUp">
          <Contact />
        </ScrollReveal>
      </main>

      <footer className="mt-24 py-8 border-t-2 border-dashed border-ink/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © 2026 Dipak Bhandari. All rights reserved.
            </p>
            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
                })
              }
              className="doodle doodle-lift inline-flex items-center gap-2 bg-card px-4 py-2 text-sm font-semibold text-ink"
            >
              <ArrowUp size={16} /> Back to top
            </button>
            <div className="flex gap-4">
              <a
                href="https://github.com/dipak-bhandari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/dipak-bhandari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:nescoz.dipak@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
