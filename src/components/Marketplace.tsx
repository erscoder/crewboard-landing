"use client";

import { motion, useReducedMotion } from "framer-motion";

type MarketplaceAgent = {
  name: string;
  provider: string;
  description: string;
  logo: string;
  capabilities: string[];
  pricing: string;
  pricingColor: string;
};

const featuredAgents: MarketplaceAgent[] = [
  {
    name: "Stripe Agent",
    provider: "Stripe",
    description:
      "Process payments, manage subscriptions, handle refunds and disputes — all from your task board.",
    logo: "/logos/stripe.png",
    capabilities: ["payments", "subscriptions", "refunds", "invoices"],
    pricing: "$0.10/task",
    pricingColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  },
  {
    name: "Vercel Agent",
    provider: "Vercel",
    description:
      "Deploy apps, manage domains, monitor performance, and run edge functions without leaving CrewBoard.",
    logo: "/logos/vercel.png",
    capabilities: ["deployment", "domains", "monitoring", "edge-functions"],
    pricing: "$0.20/task",
    pricingColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  },
  {
    name: "Notion Agent",
    provider: "Notion",
    description:
      "Create pages, manage databases, sync docs, and organize knowledge bases directly from tasks.",
    logo: "/logos/notion.png",
    capabilities: ["pages", "databases", "documentation", "knowledge-base"],
    pricing: "$0.05/task",
    pricingColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  },
];

function AgentCard({
  agent,
  index,
}: {
  agent: MarketplaceAgent;
  index: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        delay: prefersReducedMotion ? 0 : index * 0.1,
        duration: prefersReducedMotion ? 0 : 0.5,
        ease: "easeOut",
      }}
      className="surface group relative flex flex-col overflow-hidden p-6 transition-all duration-200 hover:-translate-y-1 hover:border-purple-400/60 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5">
          <img
            src={agent.logo}
            alt={agent.provider}
            className="h-full w-full object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-white leading-tight">
            {agent.name}
          </h3>
          <p className="text-xs text-slate-400">{agent.provider}</p>
        </div>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${agent.pricingColor}`}
        >
          {agent.pricing}
        </span>
      </div>

      {/* Description */}
      <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-300">
        {agent.description}
      </p>

      {/* Capabilities */}
      <div className="flex flex-wrap gap-1.5">
        {agent.capabilities.map((cap) => (
          <span
            key={cap}
            className="rounded-full bg-purple-500/10 px-2.5 py-0.5 text-xs font-medium text-purple-300"
          >
            {cap}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Marketplace() {
  return (
    <section id="marketplace">
      <div className="container">
        <div className="mb-10 flex flex-col gap-3 text-center items-center">
          <span className="pill mx-auto">A2A Marketplace</span>
          <h2 className="text-3xl sm:text-4xl">
            Connect any tool. Extend your crew.
          </h2>
          <p className="mx-auto max-w-2xl text-slate-300">
            The A2A (Agent-to-Agent) Marketplace lets you plug external agents
            into your workflow — payments, deployments, analytics, CRM, and
            more. Your AI crew talks to their agents so you don&apos;t have to.
          </p>
        </div>

        {/* Featured cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredAgents.map((agent, i) => (
            <AgentCard key={agent.name} agent={agent} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-slate-400">
            <span className="font-semibold text-purple-300">40+</span> agents
            available at launch — Stripe, AWS, Salesforce, Datadog, Figma, and
            many more.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
