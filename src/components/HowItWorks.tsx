"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    title: "Connect your tools",
    body: "Plug in GitHub and Slack in minutes with scoped tokens and auto-detected repos.",
    badge: "GitHub • Slack",
    decor: (
      <div className="flex items-center gap-3 rounded-xl border border-dashed border-cyan-400/60 bg-cyan-500/5 px-3 py-2 text-xs text-cyan-100">
        <span className="rounded-full bg-white/10 px-2 py-1 font-semibold">GitHub</span>
        <div className="h-px flex-1 border-t border-dashed border-cyan-400/60" />
        <span className="rounded-full bg-white/10 px-2 py-1 font-semibold">Slack</span>
      </div>
    ),
  },
  {
    title: "Create tasks on the Kanban",
    body: "Draft tasks or drop issues in. Crewboard assigns the right agents with context sharing.",
    badge: "Board-first",
    decor: (
      <div className="w-full rounded-xl border border-white/10 bg-slate-900/70 p-3 text-sm text-slate-100">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>Backlog</span>
          <button className="rounded-full bg-purple-500/20 px-2 py-1 text-[11px] font-semibold text-purple-100">
            + Task
          </button>
        </div>
        <div className="mt-2 rounded-lg border border-white/5 bg-white/5 p-2 text-[12px] text-slate-200">
          Refactor auth guard · assign AI/DE
        </div>
      </div>
    ),
  },
  {
    title: "AI agents execute and deliver",
    body: "Agents collaborate, run checks, and ship PRs. You approve with full diffs and logs.",
    badge: "Delivery badge",
    decor: (
      <div className="flex items-center gap-3 rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-100">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-500 text-sm font-bold text-white shadow-lg">
          ✓
        </span>
        Delivery badge issued • logs attached
      </div>
    ),
  },
];

export function HowItWorks() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="how-it-works">
      <div className="container">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="pill">How it works</span>
            <h2 className="mt-3 text-3xl sm:text-4xl">Launch your AI crew in 3 steps</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              Built for speed: set up in minutes, keep security and auditability intact, and hand off confidently.
            </p>
          </div>
          <div className="surface flex items-center gap-3 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 px-4 py-3 text-sm text-cyan-100">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-200">3</span>
            Average setup time: 3 minutes
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: prefersReducedMotion ? 0 : index * 0.1,
                duration: prefersReducedMotion ? 0 : 0.55,
                ease: "easeOut",
              }}
              className="surface relative overflow-hidden p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-transparent opacity-40" aria-hidden />
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-semibold text-slate-100">
                  {index + 1}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Step {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-50">{step.title}</h3>
              <p className="mt-3 text-slate-300">{step.body}</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-dashed border-cyan-400/50 px-3 py-1 text-xs font-semibold text-cyan-100">
                {step.badge}
              </div>
              <div className="mt-4">{step.decor}</div>
              {index < steps.length - 1 ? (
                <div className="absolute inset-y-10 -right-8 hidden w-16 rotate-90 items-center justify-center lg:flex">
                  <div className="h-px w-16 border-t border-dashed border-cyan-400/60" />
                </div>
              ) : null}
              {index < steps.length - 1 ? (
                <div className="mt-4 flex items-center gap-2 lg:hidden">
                  <div className="h-px flex-1 border-t border-dashed border-cyan-400/60" />
                  <span className="text-[11px] uppercase tracking-[0.18em] text-cyan-100">Next</span>
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
