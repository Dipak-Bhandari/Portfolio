"use client";

import {
  ArrowRight,
  Download,
  Github,
  Globe,
  Linkedin,
  Mail,
  Phone,
  Plus,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { MorphingText } from "./ui/morphing-text";

export default function NewHero() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Dipak-Bhandari-CV.pdf";
    link.download = "Dipak-Bhandari-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative lg:max-h-[850px] flex items-center justify-center py-8 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 "></div>

      {/* Animated circles */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-stone-600/10 dark:bg-stone-700/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-amber-100 dark:bg-amber-950 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200"
          >
            <Globe size={16} className="animate-pulse" />
            <span className="text-sm font-medium">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-0 leading-tight"
          >
            <span className="block text-foreground mb-1">Hi, I'm</span>
            <div className="text-amber-600 dark:text-amber-500 -mt-2 sm:-mt-4">
              <MorphingText
                texts={["Dipak Bhandari", "Developer"]}
                className="h-20 sm:h-20 md:h-24 lg:h-28"
              />
            </div>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 font-light"
          >
            Full Stack Developer | Laravel | React | Next.js
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Building web applications using{" "}
            <span className="text-primary font-semibold">Laravel</span>,{" "}
            <span className="text-primary font-semibold">Inertia.js</span>, and{" "}
            <span className="text-primary font-semibold">React</span>. Experienced with RESTful APIs,
            PostgreSQL/MySQL, and responsive layouts using Tailwind CSS.
          </motion.p>

          {/* Location & Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6 text-sm sm:text-base text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <span className="text-xl">📍</span> Kathmandu
            </span>
            <span className="hidden sm:inline">•</span>
            <a
              href="mailto:nescoz.dipak@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail size={18} />
              nescoz.dipak@gmail.com
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="tel:9866260928"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone size={18} />
              9866260928
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
          >
            <button
              onClick={handleDownloadCV}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-700 to-yellow-600 dark:from-amber-600 dark:to-yellow-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              Download CV
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
            </button>

            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-amber-700 dark:border-amber-600 text-amber-900 dark:text-amber-200 rounded-xl font-semibold hover:bg-amber-100 dark:hover:bg-amber-950 transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <a
              href="https://github.com/dipak-bhandari"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-amber-300 dark:border-amber-700 hover:border-amber-600 dark:hover:border-amber-500 hover:bg-amber-100 dark:hover:bg-amber-950 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/dipak-bhandari"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-amber-300 dark:border-amber-700 hover:border-amber-600 dark:hover:border-amber-500 hover:bg-amber-100 dark:hover:bg-amber-950 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:nescoz.dipak@gmail.com"
              className="p-3 rounded-full border border-amber-300 dark:border-amber-700 hover:border-amber-600 dark:hover:border-amber-500 hover:bg-amber-100 dark:hover:bg-amber-950 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-amber-600 dark:border-amber-500 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-amber-600 dark:bg-amber-500 rounded-full"
          />
        </motion.div>
      </motion.div> */}
    </section>
  );
}
