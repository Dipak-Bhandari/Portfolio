import { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className?: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
  technologies: string[];
  year: string;
  github: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div className={cn("grid w-full  grid-cols-3 gap-4", className)} {...props}>
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  technologies,
  year,
  github,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden doodle doodle-lift bg-card",
      className
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="p-6 flex flex-col min-h-0">
      <div className="flex-1 z-10 transform-gpu flex flex-col gap-3 transition-all duration-300 lg:group-hover:-translate-y-10">
        <Icon className="h-12 w-12 origin-left transform-gpu text-ink transition-all duration-300 ease-in-out group-hover:scale-75" />
        
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-xl font-semibold text-card-foreground">
            {name}
          </h3>
          <span className="chip px-2 py-1 text-xs font-medium">
            {year}
          </span>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-4 group-hover:line-clamp-none">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="chip px-2 py-1 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet buttons - always visible */}
      <div className="flex gap-3 mt-4 lg:hidden">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-ink transition-colors"
          >
            <Github size={16} /> Code
          </a>
        )}
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-ink transition-colors"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
      </div>
    </div>

    {/* Desktop buttons - show on hover */}
    <div
      className={cn(
        "pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 sm:p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex lg:gap-3"
      )}
    >
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-ink transition-colors"
        >
          <Github size={16} /> Code
        </a>
      )}

      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-ink transition-colors"
        >
          <ExternalLink size={16} /> Live Demo
        </a>
      )}
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-ink/5" />
  </div>
);

export { BentoCard, BentoGrid };
