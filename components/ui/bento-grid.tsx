import { ComponentPropsWithoutRef, ReactNode } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className?: string;
  image: string;
  description: string;
  href: string;
  cta: string;
  technologies: string[];
  year: string;
  github: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div className={cn("grid w-full grid-cols-1 gap-6", className)} {...props}>
      {children}
    </div>
  );
};

const linkClass =
  "doodle doodle-lift inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold";

// Logo banner on top, text below; chips and links sit at the bottom
// so cards in the same row line up even when their text lengths differ.
const BentoCard = ({
  name,
  className,
  image,
  description,
  href,
  cta,
  technologies,
  year,
  github,
  ...props
}: BentoCardProps) => (
  <div
    className={cn(
      "flex flex-col overflow-hidden doodle doodle-lift bg-card",
      className
    )}
    {...props}
  >
    {/* White plate keeps dark and coloured logos readable in both themes */}
    <div className="flex h-32 items-center justify-center border-b-2 border-ink bg-white p-4">
      <Image
        src={image}
        alt={`${name} logo`}
        width={128}
        height={128}
        className="h-16 w-auto max-w-full object-contain"
      />
    </div>

    <div className="flex flex-1 flex-col gap-3 p-6">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-xl font-semibold text-card-foreground">{name}</h3>
        <span className="chip px-2 py-1 text-xs font-medium">{year}</span>
      </div>

      <p className="text-sm text-muted-foreground">{description}</p>

      <div className="mt-auto flex flex-col gap-4 pt-2">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="chip px-2 py-1 text-xs">
              {tech}
            </span>
          ))}
        </div>

        {(href || github) && (
          <div className="flex flex-wrap gap-3">
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(linkClass, "bg-primary text-primary-foreground")}
              >
                <ExternalLink size={16} /> {cta}
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(linkClass, "bg-card text-ink")}
              >
                <Github size={16} /> GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
);

export { BentoCard, BentoGrid };
