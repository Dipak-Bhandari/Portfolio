"use client";

import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import { NepaliFlag } from "./ui/flag";
import { MorphingText } from "./ui/morphing-text";

export default function NewHero() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/DipakBhandariCV.pdf";
    link.download = "Dipak-Bhandari-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative flex items-center justify-center py-12 lg:py-20 overflow-hidden min-h-[85vh]">
      {/* Animated background elements */}
      <div className="absolute inset-0" />

      <motion.div
        className="absolute top-10 left-5 w-72 h-72 border-2 border-dashed border-primary rounded-full pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-5 w-96 h-96 border-2 border-dashed border-ink/30 rounded-full pointer-events-none"
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text Content & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 doodle bg-accent text-accent-foreground"
            >
              <motion.div
                animate={{ rotate: [-4, 4, -4], y: [0, -2, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <NepaliFlag className="h-4 w-4 shrink-0" />
              </motion.div>
              <span className="text-xs sm:text-sm font-medium">
                Available for new opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-2 leading-tight tracking-tight"
            >
              <span className="block text-foreground">Hi, I'm</span>
              <div className="text-ink -mt-1 sm:-mt-2">
                <MorphingText
                  texts={["Dipak", "Developer"]}
                  className="h-16 sm:h-20 lg:h-24 justify-center lg:justify-start"
                />
              </div>
            </motion.h1>

            {/* Subtitle / Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-2xl text-muted-foreground mb-4 font-light"
            >
              Full Stack Developer | Laravel | React | Next.js
            </motion.p>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed"
            >
              I'm a full stack developer based in Kathmandu who likes turning ideas into
              clean, fast web apps, mostly with{" "}
              <span className="text-ink font-semibold">Laravel</span>,{" "}
              <span className="text-ink font-semibold">Inertia.js</span>, and{" "}
              <span className="text-ink font-semibold">React</span>. I've shipped
              browser extensions and web platforms, including{" "}
              <span className="text-ink font-semibold">Tabnix</span>, a Chrome
              extension I built on my own.
            </motion.p>

            {/* Contact Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 text-xs sm:text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-1.5">
                <span>📍</span> Kathmandu
              </span>
              <span>•</span>
              <a
                href="mailto:nescoz.dipak@gmail.com"
                className="flex items-center gap-1.5 hover:text-ink transition-colors"
              >
                <Mail size={16} />
                nescoz.dipak@gmail.com
              </a>
              <span>•</span>
              <a
                href="tel:9866260928"
                className="flex items-center gap-1.5 hover:text-ink transition-colors"
              >
                <Phone size={16} />
                9866260928
              </a>
            </motion.div>

            {/* Call To Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center w-full sm:w-auto mb-6"
            >
              <button
                onClick={handleDownloadCV}
                className="w-full sm:w-auto group doodle doodle-lift inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold"
              >
                <Download size={18} className="group-hover:animate-bounce" />
                Download CV
              </button>

              <a
                href="#projects"
                className="w-full sm:w-auto group doodle doodle-lift inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-card text-ink font-semibold"
              >
                View My Work
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-3 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/dipak-bhandari"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 doodle doodle-lift bg-card"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/dipak-bhandari"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 doodle doodle-lift bg-card"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:nescoz.dipak@gmail.com"
                className="p-3 doodle doodle-lift bg-card"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 mb-6 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80"
            >
              {/* Outer decorative dashed border */}
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-primary" />
              
              {/* Inner frame with image */}
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-ink shadow-[6px_6px_0_var(--ink)]">
                <Image
                  src={encodeURI("/portfolio-team/The One.jpeg")}
                  alt="Portrait of Dipak Bhandari"
                  fill
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                  className="origin-[48%_14%] scale-[1.35] object-cover object-[50%_12%]"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}