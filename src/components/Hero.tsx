"use client";

import { motion, useReducedMotion } from "framer-motion";

const headerStats = [
  { label: "This week", value: "12" },
  { label: "In progress", value: "8" },
  { label: "Total tasks", value: "32" },
  { label: "Completion", value: "76%" },
];

const kanbanColumns = [
  {
    title: "To Do",
    count: 2,
    badgeClass: "bg-sky-500/15 text-sky-200 border border-sky-500/30",
    dotClass: "bg-sky-400",
    tasks: [
      { tag: "Marketing", title: "Launch social ads", avatar: "AL", color: "bg-sky-500/20 text-sky-100" },
      { tag: "Ops", title: "Refine onboarding flow", avatar: "JD", color: "bg-amber-500/20 text-amber-100" },
    ],
  },
  {
    title: "In Progress",
    count: 2,
    badgeClass: "bg-violet-500/15 text-violet-100 border border-violet-500/30",
    dotClass: "bg-violet-400",
    tasks: [
      { tag: "Product", title: "Spec sprint backlog", avatar: "KM", color: "bg-violet-500/20 text-violet-100" },
      { tag: "Design", title: "Mobile layout polish", avatar: "TS", color: "bg-emerald-500/20 text-emerald-100" },
    ],
  },
  {
    title: "Review",
    count: 1,
    badgeClass: "bg-amber-500/15 text-amber-100 border border-amber-500/30",
    dotClass: "bg-amber-400",
    tasks: [{ tag: "QA", title: "Accessibility pass", avatar: "RB", color: "bg-amber-500/20 text-amber-100" }],
  },
  {
    title: "Done",
    count: 1,
    badgeClass: "bg-emerald-500/15 text-emerald-100 border border-emerald-500/30",
    dotClass: "bg-emerald-400",
    tasks: [{ tag: "Growth", title: "Weekly report shipped", avatar: "LN", color: "bg-emerald-500/20 text-emerald-100" }],
  },
];

const liveActivities = [
  { title: "Mia moved “UX polish” to Review", time: "1m ago" },
  { title: "Caleb completed “Sprint report”", time: "12m ago" },
  { title: "Alex created “AI agents brief”", time: "27m ago" },
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(110%_80%_at_10%_10%,rgba(14,165,233,0.18),transparent_45%),radial-gradient(90%_70%_at_85%_20%,rgba(124,58,237,0.18),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:140px_140px]" />
      </div>

      <div className="container relative flex flex-col items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: "easeOut" }}
          className="flex max-w-3xl flex-col items-center gap-5 text-center"
        >
          <span className="pill">Your AI crew, one dashboard</span>
          <h1 className="text-4xl font-semibold sm:text-5xl lg:text-[54px]">Ship faster with agents that stay in sync</h1>
          <p className="text-lg text-slate-300 sm:text-xl">
            Orchestrate projects, delegate to agents, and keep delivery moving in one place. Stay aligned without drowning in tabs.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a className="btn btn-primary" href="#pricing">
              Start free
            </a>
            <a className="btn btn-secondary" href="#demo">
              Watch demo
            </a>
          </div>
          <p className="text-sm text-slate-400">No credit card needed · 14-day Pro trial included</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: prefersReducedMotion ? 1 : 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.75, ease: "easeOut" }}
          className="glass relative w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl"
        >
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/10 to-transparent" aria-hidden />
          <div className="relative w-full p-6 sm:p-8 lg:p-10">
            <div className="mb-6 flex flex-col gap-4 lg:mb-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3">
                 
              </div>

              <div className="grid flex-1 grid-cols-2 gap-3 text-left sm:grid-cols-4">
                {headerStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-inner">
                    <p className="text-xs uppercase tracking-wide text-slate-400">{stat.label}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>

              <button className="btn btn-secondary whitespace-nowrap px-4 py-2 text-sm">New Task</button>
            </div>

            <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[3fr_1fr] lg:gap-6">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {kanbanColumns.map((column) => (
                  <div key={column.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner">
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`h-2 w-2 rounded-full ${column.dotClass}`} />
                          <p className="text-sm font-semibold text-white">{column.title}</p>
                        </div>
                        <span className={`rounded-full px-2 py-1 text-xs font-semibold ${column.badgeClass}`}>{column.count}</span>
                      </div>

                    <div className="space-y-3">
                      {column.tasks.map((task) => (
                        <div key={task.title} className="rounded-xl border border-white/10 bg-slate-900/40 p-3 shadow">
                          <div className={`inline-flex items-center gap-2 rounded-full px-2 py-1 text-xs font-semibold ${task.color}`}>
                            <span className="h-2 w-2 rounded-full bg-white/70" />
                            {task.tag}
                          </div>
                          <p className="mt-2 text-sm font-semibold text-white">{task.title}</p>
                          <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                            <div className="flex items-center gap-2">
                              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500/10 text-[11px] font-semibold text-white">
                                {task.avatar}
                              </span>
                              <span>Assigned</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                    <p className="text-sm font-semibold text-white">Live</p>
                  </div>
                  <span className="text-xs text-slate-400">Activity</span>
                </div>

                <div className="space-y-3">
                  {liveActivities.map((item) => (
                    <div key={item.title} className="rounded-xl border border-white/10 bg-slate-900/40 p-3">
                      <p className="text-sm text-white">{item.title}</p>
                      <p className="mt-1 text-xs text-slate-400">{item.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
