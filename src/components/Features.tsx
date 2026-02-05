"use client";

import type { ReactElement } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Feature = {
  title: string;
  description: string;
  icon: ReactElement;
  accent: string;
  detail: ReactElement;
};

const iconBase = "h-12 w-12 rounded-full flex items-center justify-center";

const icons = {
  collaboration: (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M7 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" transform="translate(3 4)" />
      <path d="M8 15a5 5 0 0 1 8 0" />
      <circle cx="8" cy="7" r="3" />
    </svg>
  ),
  github: (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 3.77 5.07 5.07 0 0 0 18.91 0S17.73-.35 15 1.35a13.38 13.38 0 0 0-6 0C6.27-.35 5.09 0 5.09 0A5.07 5.07 0 0 0 5 3.77 5.44 5.44 0 0 0 3.5 7.5c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 17.13V21" />
    </svg>
  ),
  slack: (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M14.5 2a2.5 2.5 0 1 0 0 5H17V4.5A2.5 2.5 0 0 0 14.5 2Z" />
      <path d="M20.5 7a2.5 2.5 0 0 0-2.5 2.5V12h2.5a2.5 2.5 0 1 0 0-5Z" />
      <path d="M4 11.5A2.5 2.5 0 1 1 6.5 14H4Z" />
      <path d="M9.5 18a2.5 2.5 0 0 0-5 0v2.5H7A2.5 2.5 0 0 0 9.5 18Z" />
      <path d="M9.5 2H12v2.5A2.5 2.5 0 1 1 9.5 2Z" />
      <path d="M2 9.5A2.5 2.5 0 0 1 4.5 7H7v2.5A2.5 2.5 0 0 1 4.5 12 2.5 2.5 0 0 1 2 9.5Z" />
      <path d="M16.5 18A2.5 2.5 0 0 0 14 20.5V23h2.5a2.5 2.5 0 0 0 0-5Z" />
      <path d="M12 14h2.5A2.5 2.5 0 1 1 12 16.5Z" />
    </svg>
  ),
  telegram: (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M22 2L11 13" />
      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
    </svg>
  ),
};

const features: Feature[] = [
  {
    title: "Multi-Agent Collaboration",
    description: "Orchestrate specialists with shared context and see handoffs in real time with avatar trails.",
    icon: icons.collaboration,
    accent: "from-purple-500/30 to-purple-700/30",
    detail: (
      <div className="flex items-center gap-2">
        {["PM", "DE", "QA"].map((label, idx) => (
          <span
            key={label}
            className="grid h-8 w-8 place-items-center rounded-full border border-slate-900/50 text-[11px] font-semibold text-white shadow-md"
            style={{
              background: idx === 0 ? "linear-gradient(135deg,#22d3ee,#0ea5e9)" : idx === 1 ? "linear-gradient(135deg,#8b5cf6,#6d28d9)" : "linear-gradient(135deg,#a855f7,#22d3ee)",
            }}
          >
            {label}
          </span>
        ))}
        <span className="rounded-full bg-white/5 px-2 py-1 text-[11px] font-semibold text-cyan-100 ring-1 ring-cyan-400/30">
          Shared context live
        </span>
      </div>
    ),
  },
  {
    title: "GitHub Integration",
    description: "Ship faster with automated PRs, branch hygiene, and diff previews that stay in sync.",
    icon: icons.github,
    accent: "from-cyan-400/25 to-purple-500/25",
    detail: (
      <div className="w-full rounded-lg border border-white/10 bg-slate-900/60 p-3">
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <span className="rounded-md bg-purple-500/20 px-2 py-1 font-semibold text-purple-100">feature/ai-sync</span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>PR #128 · passing</span>
        </div>
        <div className="mt-3 space-y-2 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            api/agent.ts • +42 / -6
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            hooks/useCrew.ts • +18 / -2
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Slack Notifications",
    description: "Get thread-safe updates, deploy pings, and incident badges delivered to the right channel.",
    icon: icons.slack,
    accent: "from-emerald-400/25 to-cyan-500/25",
    detail: (
      <div className="w-full rounded-lg border border-white/10 bg-slate-900/70 p-3 text-sm text-slate-100 shadow-inner">
        <div className="flex items-center gap-2 text-xs text-cyan-200">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          #ai-delivery
        </div>
        <p className="mt-2 text-slate-200">Deploy ready: PR #128 waiting on review.</p>
        <div className="mt-2 flex items-center gap-2 text-[11px]">
          <span className="rounded-full bg-purple-500/20 px-2 py-1 font-semibold text-purple-100">In Progress</span>
          <span className="rounded-full bg-cyan-500/20 px-2 py-1 font-semibold text-cyan-100">Notified</span>
        </div>
      </div>
    ),
  },
  {
    title: "Telegram Voice Commands",
    description: "Talk to your agents with voice messages. Send tasks, get updates, and manage projects hands-free from anywhere.",
    icon: icons.telegram,
    accent: "from-sky-400/25 to-blue-500/25",
    detail: (
      <div className="w-full rounded-lg border border-white/10 bg-slate-900/70 p-3 text-sm text-slate-100 shadow-inner">
        <div className="flex items-center gap-2 text-xs text-sky-200">
          <span className="h-2 w-2 rounded-full bg-sky-400" />
          Voice message
        </div>
        <div className="mt-2 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" y1="19" x2="12" y2="23" />
            </svg>
          </div>
          <div className="flex-1 space-y-1">
            <div className="h-1.5 w-full rounded-full bg-sky-500/30">
              <div className="h-full w-3/4 rounded-full bg-sky-400" />
            </div>
            <p className="text-[11px] text-slate-400">0:04 / 0:05</p>
          </div>
        </div>
        <p className="mt-2 text-xs text-slate-300">"Create a new task for Alex: fix the login bug"</p>
      </div>
    ),
  },
];

export function Features() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="features">
      <div className="container">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <span className="pill">Why teams choose crewboard</span>
            <h2 className="text-3xl sm:text-4xl">Ship faster with orchestrated AI agents</h2>
            <p className="max-w-2xl text-slate-300">
              Purpose-built for engineering squads that need visibility, control, and automation without babysitting prompts.
            </p>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            Built for speed • Secure by default
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
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
                className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${feature.accent} opacity-80 blur-3xl transition-opacity duration-200 group-hover:opacity-100`}
                aria-hidden
              />
              <div className="relative flex flex-col gap-4">
                <div
                  className={`${iconBase} bg-gradient-to-br ${feature.accent} text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)]`}
                >
                  {feature.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
                <div className="mt-2 text-sm text-slate-200">{feature.detail}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
