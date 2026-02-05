"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

type Agent = {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  accent: string;
};

const agents: Agent[] = [
  {
    name: "Harvis",
    role: "Chief AI Officer",
    avatar: "/team/harvis.png",
    bio: "The mastermind behind the crew. Harvis orchestrates all agents, manages context, and ensures every task flows seamlessly from idea to delivery.",
    accent: "from-cyan-500/30 to-purple-500/30",
  },
  {
    name: "Alex",
    role: "Senior Developer",
    avatar: "/team/alex-developer.png",
    bio: "Code wizard extraordinaire. Alex writes clean, tested code, handles PRs, refactors legacy systems, and ships features faster than any human team.",
    accent: "from-violet-500/30 to-indigo-500/30",
  },
  {
    name: "Maya",
    role: "Marketing Lead",
    avatar: "/team/maya-marketing.png",
    bio: "Growth hacker with a creative edge. Maya crafts compelling copy, plans campaigns, analyzes funnels, and turns visitors into loyal customers.",
    accent: "from-pink-500/30 to-rose-500/30",
  },
  {
    name: "Peter",
    role: "Design Director",
    avatar: "/team/peter-design.png",
    bio: "Pixel-perfect visionary. Peter designs stunning interfaces, creates brand assets, and ensures every user experience is both beautiful and intuitive.",
    accent: "from-amber-500/30 to-orange-500/30",
  },
  {
    name: "Dave",
    role: "Data Analyst",
    avatar: "/team/dave-analytics.png",
    bio: "Numbers whisperer. Dave dives deep into metrics, builds dashboards, uncovers insights, and turns raw data into actionable strategies.",
    accent: "from-emerald-500/30 to-teal-500/30",
  },
  {
    name: "Quinn",
    role: "QA Engineer",
    avatar: "/team/quinn-qa.png",
    bio: "Bug hunter supreme. Quinn tests every edge case, writes automated tests, and ensures your product ships with zero surprises.",
    accent: "from-blue-500/30 to-sky-500/30",
  },
  {
    name: "Sara",
    role: "Social Media Manager",
    avatar: "/team/sara-social.png",
    bio: "Community builder. Sara manages your social presence, engages followers, schedules posts, and keeps your brand voice consistent everywhere.",
    accent: "from-fuchsia-500/30 to-purple-500/30",
  },
];

export function Team() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="team">
      <div className="container">
        <div className="mb-10 flex flex-col gap-3 text-center">
          <span className="pill mx-auto">Meet the crew</span>
          <h2 className="text-3xl sm:text-4xl">AI agents that work like teammates</h2>
          <p className="mx-auto max-w-2xl text-slate-300">
            Each agent brings specialized skills to your projects. They collaborate, communicate, and deliver—while you focus on what matters.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: prefersReducedMotion ? 0 : index * 0.08,
                duration: prefersReducedMotion ? 0 : 0.5,
                ease: "easeOut",
              }}
              className="surface group relative overflow-hidden p-6 transition-all duration-200 hover:-translate-y-1 hover:border-purple-400/60 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >
              <div
                className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${agent.accent} opacity-60 blur-3xl transition-opacity duration-200 group-hover:opacity-100`}
                aria-hidden
              />
              <div className="relative flex flex-col items-center gap-4 text-center">
                <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-white/20 shadow-xl">
                  <Image
                    src={agent.avatar}
                    alt={agent.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-white">{agent.name}</h3>
                  <p className="text-sm font-medium text-purple-300">{agent.role}</p>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{agent.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
