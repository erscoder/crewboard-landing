"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type BillingCycle = "monthly" | "annual";

type Plan = {
  name: string;
  tagline: string;
  monthly: number | null;
  annual: number | null;
  tasks: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

type ComparisonRow = {
  label: string;
  values: Array<"check" | "dash" | "x" | string>;
};

const plans: Plan[] = [
  {
    name: "Free",
    tagline: "Try it out",
    monthly: 0,
    annual: 0,
    tasks: "1 project · 1 agent · 20 tasks/mo",
    features: [
      "1 project",
      "1 agent",
      "20 tasks per month",
      "Community support",
    ],
    cta: "Start free",
  },
  {
    name: "Pro",
    tagline: "For developers",
    monthly: 49,
    annual: 39,
    tasks: "2 projects · 3 agents · 200 tasks/mo",
    features: [
      "2 projects",
      "3 agents per project",
      "GitHub & Slack",
      "Analytics dashboard",
      "Email support",
    ],
    cta: "Get Pro",
    popular: true,
  },
  {
    name: "Team",
    tagline: "For growing teams",
    monthly: 99,
    annual: 79,
    tasks: "Unlimited projects · All agents · 500 tasks/mo",
    features: [
      "Unlimited projects",
      "All available agents",
      "GitHub, Slack & Telegram",
      "Advanced analytics",
      "Priority support",
    ],
    cta: "Get Team",
  },
  {
    name: "Business",
    tagline: "For enterprises",
    monthly: 199,
    annual: 159,
    tasks: "Unlimited everything",
    features: [
      "Unlimited projects",
      "All available agents",
      "Unlimited tasks",
      "Priority response time",
      "Dedicated support",
    ],
    cta: "Contact sales",
  },
];

const comparison: ComparisonRow[] = [
  { label: "Projects", values: ["1", "2", "Unlimited", "Unlimited"] },
  { label: "Agents per project", values: ["1", "3", "All agents", "All agents"] },
  { label: "Tasks per month", values: ["20", "200", "500", "Unlimited"] },
  { label: "Analytics", values: ["dash", "check", "check", "check"] },
  { label: "GitHub & Slack", values: ["dash", "check", "check", "check"] },
  { label: "Telegram bot", values: ["dash", "dash", "check", "check"] },
  { label: "Priority response", values: ["dash", "dash", "dash", "check"] },
  { label: "Support", values: ["Community", "Email", "Priority", "Dedicated"] },
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#8b5cf6" strokeWidth="2">
    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DashIcon = () => <span className="text-slate-500">—</span>;

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#f43f5e" strokeWidth="2">
    <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
  </svg>
);

export function Pricing() {
  const [billing, setBilling] = useState<BillingCycle>("annual");
  const prefersReducedMotion = useReducedMotion();

  const toggleBilling = () => setBilling((b) => (b === "annual" ? "monthly" : "annual"));

  const savingsLabel = useMemo(
    () => (billing === "annual" ? "Billed annually, save 20%" : "Billed monthly"),
    [billing],
  );

  const priceForPlan = (plan: Plan) => {
    if (plan.monthly === null || plan.annual === null) return "Custom";
    const value = billing === "annual" ? plan.annual ?? Math.round((plan.monthly ?? 0) * 0.8) : plan.monthly;
    return `$${value}`;
  };

  return (
    <section id="pricing">
      <div className="container space-y-10">
        <div className="flex flex-col gap-4 text-center">
          <div className="mx-auto">
            <span className="pill">Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl">Plans that scale with your AI crew</h2>
          <p className="text-slate-300 pt-2">
            Pick the plan that fits today, toggle anytime. <br />
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-800/60 px-3 py-2 backdrop-blur">
            <span className={`px-3 text-sm font-semibold ${billing === "monthly" ? "text-white" : "text-slate-400"}`}>Monthly</span>
            <button
              type="button"
              aria-pressed={billing === "annual"}
              onClick={toggleBilling}
              className="relative h-7 w-14 rounded-full border border-white/15 bg-slate-900 shadow-inner transition-colors duration-200 focus-visible:outline-none"
            >
              <motion.span
                layout
                className="absolute top-[5px] h-[18px] w-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                style={{ left: billing === "annual" ? "calc(100% - 34px)" : "6px" }}
              />
            </button>
            <div className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${billing === "annual" ? "bg-cyan-500/15 text-cyan-100" : "text-slate-400"}`}>
              Annual · save 20%
            </div>
          </div>
          <p className="text-sm text-slate-400">{savingsLabel}</p>
        </div>

        <div className="flex items-stretch gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-4 md:gap-5 md:overflow-visible md:snap-none">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="surface relative flex h-full min-w-[280px] flex-col snap-start overflow-hidden p-6 transition-all duration-200 hover:-translate-y-1 hover:border-purple-400/60 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400">{plan.tagline}</p>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                  {plan.popular ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-purple-500 px-2 py-0.5 text-xs font-semibold text-white shadow-lg">
                      <span aria-hidden>⚡</span> Popular
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-white">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={`${plan.name}-${billing}`}
                      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -6 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.18, ease: "easeOut" }}
                    >
                      {priceForPlan(plan)}
                    </motion.span>
                  </AnimatePresence>
                </span>
                {plan.monthly !== null ? <span className="text-sm text-slate-400">/mo</span> : null}
              </div>
              <p className="text-sm text-slate-400">{plan.monthly === null ? "Tailored billing" : plan.monthly === 0 ? "Free forever" : savingsLabel}</p>
              <p className="mt-1 text-xs font-mono text-slate-500">{plan.tasks}</p>

              <div className="mt-5 space-y-3 text-sm text-slate-200">
                {plan.features.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <button
                  disabled
                  className="btn w-full cursor-not-allowed opacity-50 bg-slate-700 text-slate-400 border-slate-600"
                >
                  Coming soon
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="sticky top-16 z-10 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 backdrop-blur">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Comparison</p>
              <h3 className="text-lg font-semibold text-white">Choose the right guardrails</h3>
            </div>
            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 sm:flex">
              Scroll to see details
            </div>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/60 shadow-inner">
            <table className="min-w-full border-collapse">
              <thead className="bg-slate-800 border-b border-white/10">
                <tr>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-slate-100">
                    Plans
                  </th>
                  {plans.map((plan) => (
                    <th key={`${plan.name}-head`} className="px-4 py-4 text-left text-sm font-semibold text-slate-100">
                      <div className="flex items-center gap-2">
                        <span>{plan.name}</span>
                        {plan.popular ? (
                          <span className="rounded-full bg-purple-500 px-2 py-0.5 text-[11px] font-semibold text-white">
                            Popular
                          </span>
                        ) : null}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm text-slate-200">
                {comparison.map((row, idx) => (
                  <tr
                    key={row.label}
                    className={`transition-colors ${idx % 2 === 0 ? "bg-white/[0.03]" : ""} hover:bg-white/[0.06]`}
                  >
                    <th
                      scope="row"
                      className="whitespace-nowrap px-4 py-3 text-left font-medium text-slate-100"
                    >
                      {row.label}
                    </th>
                    {row.values.map((value, cellIdx) => (
                      <td key={`${row.label}-${cellIdx}`} className="px-4 py-3">
                        {value === "check" ? (
                          <CheckIcon />
                        ) : value === "dash" ? (
                          <DashIcon />
                        ) : value === "x" ? (
                          <XIcon />
                        ) : (
                          <span className="text-slate-300">{value}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

       
      </div>
    </section>
  );
}
