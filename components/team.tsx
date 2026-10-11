"use client";

import Image from "next/image";
import { motion } from "motion/react";

// objectPosition keeps each face inside the circular crop.
const team = [
  { name: "The One", file: "The One.jpeg", pos: "50% 22%" },
  { name: "The Hardworking One", file: "The Hardworking One.jpeg", pos: "62% 40%" },
  { name: "The Studious One", file: "The Studious One.jpeg", pos: "50% 35%" },
  { name: "The Adventurous", file: "The Adventurous.jpeg", pos: "50% 40%" },
  { name: "The Traveller", file: "The Traveller.jpeg", pos: "50% 60%" },
  { name: "The Goofy One", file: "The Goofy One.jpeg", pos: "50% 30%" },
  { name: "The Night Owl", file: "The Night Owl.jpeg", pos: "20% 18%" },
  { name: "The Little One", file: "The Little One.jpeg", pos: "78% 60%" },
  { name: "Mr. Lonely", file: "Mr. Lonely.jpeg", pos: "40% 55%" },
];

const pop = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1 },
};

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-24">
      <h2 className="scribble text-3xl md:text-4xl font-bold mb-4">My Team</h2>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        Meet the crew: every side of me that shows up to get things built.
      </p>

      {/* One observer on the grid: all photos pop in together, staggered, once. */}
      <motion.div
        className="flex flex-wrap justify-center gap-x-6 gap-y-10 sm:gap-x-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.08 }}
      >
        {team.map((member) => (
          <motion.figure
            key={member.name}
            variants={pop}
            transition={{ type: "spring", stiffness: 140, damping: 16 }}
            className="group flex w-28 flex-col items-center gap-3 sm:w-36 lg:w-44"
          >
            <div className="relative aspect-square w-full">
              <Image
                src={encodeURI(`/portfolio-team/${member.file}`)}
                alt={`${member.name}, a side of Dipak Bhandari`}
                fill
                sizes="(min-width: 1024px) 176px, (min-width: 640px) 144px, 112px"
                style={{ objectPosition: member.pos }}
                className="rounded-full border-2 border-ink object-cover shadow-[3px_3px_0_var(--ink)] transition-transform duration-200 group-hover:-rotate-3 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:transform-none"
              />
            </div>
            <figcaption className="text-center text-sm font-semibold leading-tight">
              {member.name}
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}
