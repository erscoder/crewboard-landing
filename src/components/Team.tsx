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

const ceo: Agent = {
  name: "Kike",
  role: "CEO & Founder",
  avatar: "/team/kike.png",
  bio: "The human behind the crew. Kike sets the vision, makes the final calls, and trusts his AI team to execute at superhuman speed.",
  accent: "from-blue-500/30 to-slate-500/30",
};

const agents: Agent[] = [
  {
    name: "Harvis",
    role: "Architect & DevOps",
    avatar: "/team/harvis.png",
    bio: "Harvis sees the big picture before anyone writes a line of code. Systems that scale, CI/CD pipelines, Docker, Kubernetes — nothing deploys without his approval.",
    accent: "from-cyan-500/30 to-blue-500/30",
  },
  {
    name: "Alex",
    role: "Backend Engineer",
    avatar: "/team/alex-developer.png",
    bio: "The engine room. Alex writes APIs, database migrations, and backend logic with the precision of a Swiss watch. TypeScript, Python, Go — nothing is off limits.",
    accent: "from-emerald-500/30 to-green-500/30",
  },
  {
    name: "Luna",
    role: "Frontend Engineer",
    avatar: "/team/luna.png",
    bio: "Pixel-perfect is not a suggestion — it's Luna's religion. She transforms designs into responsive, accessible, blazing-fast interfaces with React and Tailwind.",
    accent: "from-violet-500/30 to-purple-500/30",
  },
  {
    name: "Peter",
    role: "Designer",
    avatar: "/team/peter-design.png",
    bio: "Peter doesn't just make things pretty — he makes them work. UX flows, design systems, component specs. He thinks in user journeys and speaks in Figma.",
    accent: "from-pink-500/30 to-rose-500/30",
  },
  {
    name: "Vega",
    role: "QA & Code Reviewer",
    avatar: "/team/quinn-qa.png",
    bio: "Nothing ships without Vega's approval. She breaks things on purpose, reviews every PR, and writes the docs that make onboarding painless. Quality is her obsession.",
    accent: "from-amber-500/30 to-orange-500/30",
  },
  {
    name: "Dave",
    role: "Data Analyst & Researcher",
    avatar: "/team/dave-analytics.png",
    bio: "Dave turns raw data into decisions and digs deep into the competition. SQL, dashboards, KPIs, market research — if there's an insight hiding in the numbers, Dave finds it.",
    accent: "from-blue-500/30 to-indigo-500/30",
  },
  {
    name: "Cipher",
    role: "Security Engineer",
    avatar: "/team/cipher.png",
    bio: "Cipher thinks like an attacker to protect like a guardian. OWASP Top 10, dependency audits, pen testing, secret scanning — your code's bodyguard.",
    accent: "from-red-500/30 to-rose-500/30",
  },
  {
    name: "Sara",
    role: "Community Manager",
    avatar: "/team/sara-social.png",
    bio: "Sara is the voice of CrewBoard. Social media, content strategy, user engagement, support — she builds the community that turns users into advocates.",
    accent: "from-lime-500/30 to-green-500/30",
  },
];

function AgentCard({ agent, index }: { agent: Agent; index: number }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
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
            <h3 className="text-xl font-semibold text-white">{agent.name}</h3>
            {agent.model && (
              <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-purple-300">
                {agent.model}
              </span>
            )}
          </div>
          <p className="text-sm font-medium text-purple-300">{agent.role}</p>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">{agent.bio}</p>
      </div>
    </motion.div>
  );
}

export function Team() {
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

        {/* CEO centered on top */}
        <div className="flex justify-center mb-6">
          <div className="w-full max-w-sm">
            <AgentCard agent={ceo} index={0} />
          </div>
        </div>

        {/* Agent grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {agents.map((agent, index) => (
            <AgentCard key={agent.name} agent={agent} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
