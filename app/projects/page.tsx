import Projects from "@/components/projects";

// Same section as the home page, so the two never drift apart.
export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background paper text-foreground">
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Projects />
      </main>
    </div>
  );
}
