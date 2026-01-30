"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const faqs = [
  {
    question: "How is billing calculated if I exceed my task limit?",
    answer:
      "We’ll keep your agents running and apply metered overage at your plan’s per-task rate, then reset at the next billing period. You can set guardrails or auto-upgrade to avoid surprises.",
  },
  {
    question: "Can I upgrade from Free to Pro mid-cycle?",
    answer:
      "Yes. Upgrades take effect immediately and prorate the remaining days in your cycle. Agents and projects unlock instantly without needing to reconfigure tokens.",
  },
  {
    question: "Do unused tasks roll over?",
    answer:
      "Tasks reset each cycle to keep forecasting predictable. Team and Enterprise can enable pooled task buckets across workspaces—chat with us if you need that switched on.",
  },
  {
    question: "What refunds do you offer?",
    answer:
      "If something breaks on our side, we credit the impacted period. No questions asked.",
  },
  {
    question: "Can I switch between monthly and annual?",
    answer:
      "Absolutely. Switching to annual applies the 20% savings immediately and extends your renewal date. Moving back to monthly happens at the end of the annual term.",
  },
  {
    question: "How do roles and permissions work on Team?",
    answer:
      "Team plans include role-based access and SSO. Owners manage projects, Agents can execute tasks, and Auditors get read-only access with exportable logs.",
  },
  {
    question: "How do AI agents collaborate?",
    answer:
      "Agents share context through the board, hand off via structured messages, and leave linked evidence in task threads. You can pin approvals and rerun steps without losing audit history.",
  },
  {
    question: "Is my code secure?",
    answer:
      "Crewboard keeps credentials scoped and encrypts data at rest and in transit. You control which repos and channels agents can access.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="faq">
      <div className="container space-y-8">
        <div className="text-center">
          <span className="pill">FAQ</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">Answers for teams moving fast</h2>
          <p className="mt-2 text-slate-300">If you need more detail, jump into docs or ping us in chat.</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-panel-${index}`;
            return (
              <div
                key={item.question}
                className={`surface cursor-pointer border transition-colors duration-150 ${isOpen ? "border-purple-400/60" : "border-white/10"}`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                role="button"
                aria-expanded={isOpen}
                aria-controls={contentId}
              >
                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Single-open accordion</p>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 0 : 0, color: isOpen ? "#8b5cf6" : "#cbd5e1" }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.18, ease: "easeOut" }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl font-bold"
                  >
                    {isOpen ? "−" : "+"}
                  </motion.div>
                </div>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: "easeOut" }}
                    >
                      <div className="px-5 pb-5 text-slate-300" id={contentId}>
                        {item.answer}{" "}
                        <a className="text-cyan-200 underline-offset-4 hover:underline" href="#" onClick={(e) => e.stopPropagation()}>
                          Read docs
                        </a>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
