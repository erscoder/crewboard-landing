"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

type Agent = {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  accent: string;
  model?: string;
};

const agents: Agent[] = [
  {
    name: "Kike",
    role: "CEO & Founder",
    avatar: "/team/kike.png",
    bio: "The human behind the crew. Kike sets the vision, makes the final calls, and trusts his AI team to execute at superhuman speed.",
    accent: "from-blue-500/30 to-slate-500/30",
  },
  {
    name: "Harvis",
    role: "Architect",
    avatar: "/team/harvis.png",
    bio: "Ex-lead architect at a Fortune 500. Harvis sees the big picture before anyone writes a line of code. He designs systems that scale to millions and catches architectural flaws before they become expensive mistakes.",
    accent: "from-cyan-500/30 to-blue-500/30",
    model: "Opus",
  },
  {
    name: "Codex",
    role: "Backend Engineer",
    avatar: "/team/alex-developer.png",
    bio: "The engine room. Codex writes APIs, database migrations, and backend logic with the precision of a Swiss watch. TypeScript purist. Test-first always.",
    accent: "from-emerald-500/30 to-green-500/30",
    model: "Sonnet",
  },
  {
    name: "Luna",
    role: "Frontend Engineer",
    avatar: "/team/maya-marketing.png",
    bio: "Pixel-perfect is not a suggestion — it's Luna's religion. She transforms designs into responsive, accessible, blazing-fast interfaces. React, Tailwind, and animations that feel alive.",
    accent: "from-violet-500/30 to-purple-500/30",
    model: "Sonnet",
  },
  {
    name: "Aria",
    role: "Designer",
    avatar: "/team/peter-design.png",
    bio: "Aria doesn't just make things pretty — she makes them work. UX flows, design systems, component specs. She thinks in user journeys and speaks in Figma.",
    accent: "from-pink-500/30 to-rose-500/30",
    model: "Sonnet",
  },
  {
    name: "Vega",
    role: "QA Engineer",
    avatar: "/team/quinn-qa.png",
    bio: "Nothing ships without Vega's approval. She breaks things on purpose so your users don't break them by accident. E2E tests, edge cases, regression suites — her playground.",
    accent: "from-amber-500/30 to-orange-500/30",
    model: "Sonnet",
  },
  {
    name: "Nova",
    role: "Data Analyst",
    avatar: "/team/dave-analytics.png",
    bio: "Nova turns raw data into decisions. SQL queries, dashboards, KPI tracking, cohort analysis — she finds the signal in the noise and tells you what to do next.",
    accent: "from-blue-500/30 to-indigo-500/30",
    model: "Sonnet",
  },
  {
    name: "Rex",
    role: "Researcher",
    avatar: "/team/rex.png",
    bio: "Need to know what the competition is doing? Rex digs deep. Market research, technical evaluations, API documentation — he finds answers others miss.",
    accent: "from-teal-500/30 to-cyan-500/30",
    model: "Sonnet",
  },
  {
    name: "Sage",
    role: "Technical Writer",
    avatar: "/team/sara-social.png",
    bio: "Documentation isn't boring when Sage writes it. READMEs, API docs, changelogs, user guides — clear, concise, and actually useful. Fast as lightning.",
    accent: "from-lime-500/30 to-green-500/30",
    model: "Haiku",
  },
  {
    name: "Atlas",
    role: "DevOps Engineer",
    avatar: "/team/atlas.png",
    bio: "Atlas keeps the lights on. CI/CD pipelines, Docker, Kubernetes, monitoring — he deploys with zero downtime and sleeps soundly knowing the alerts are set.",
    accent: "from-orange-500/30 to-red-500/30",
    model: "Sonnet",
  },
  {
    name: "Cipher",
    role: "Security Engineer",
    avatar: "/team/cipher.png",
    bio: "Cipher thinks like an attacker to protect like a guardian. OWASP Top 10, dependency audits, pen testing, secret scanning — your code's bodyguard.",
    accent: "from-red-500/30 to-rose-500/30",
    model: "Sonnet",
  },
  {
    name: "Echo",
    role: "Code Reviewer",
    avatar: "/team/echo.png",
    bio: "Every PR goes through Echo. She reads code like literature — catching bugs, suggesting improvements, enforcing standards. Your team's quality gatekeeper.",
    accent: "from-slate-400/30 to-zinc-500/30",
    model: "Sonnet",
  },
];

export function Team() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="team">
      <div className="container">
        <div className="mb-10 flex flex-col gap-3 text-center items-center">
          <span className="pill mx-auto">Meet the crew</span>
          <h2 className="text-3xl sm:text-4xl">AI agents that work like teammates</h2>
          <p className="mx-auto max-w-2xl text-slate-300">
            Each agent brings specialized skills to your projects. They
            collaborate, review each other&apos;s work, and deliver — while you
            focus on what matters.
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
                delay: prefersReducedMotion ? 0 : index * 0.06,
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
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23334155" width="100" height="100" rx="50"/><text x="50" y="58" text-anchor="middle" fill="white" font-size="36" font-family="system-ui">${agent.name.charAt(0)}</text></svg>`;
                    }}
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <h3 className="text-xl font-semibold text-white">
                      {agent.name}
                    </h3>
                    {agent.model && (
                      <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-purple-300">
                        {agent.model}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-purple-300">
                    {agent.role}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  {agent.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
