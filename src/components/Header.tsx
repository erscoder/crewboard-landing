"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const navItems = [
  { label: "Product", href: "#features" },
  { label: "Marketplace", href: "#marketplace" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/70 backdrop-blur">
      <div className="container flex items-center justify-between py-5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-14 h-14">
            <img src="/logo.png" width={40} height={40} alt="CrewBoard" />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">CrewBoard</h1>
            <p className="text-[10px] text-slate-400">Your AI Crew, One Dashboard</p>
          </div>
        </div>

        {/* Nav - Centered */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-md font-semibold text-slate-300 lg:flex">
  {navItems.map((item) => (
    <a
      key={item.label}
      href={item.href}
      className="
        group relative
        transition-colors duration-200
        hover:text-purple-400
      "
    >
      {item.label}
      <span className="
        absolute left-0 bottom-0
        h-[2px] w-0
        bg-purple-500
        transition-all duration-300
        group-hover:w-full
      "/>
    </a>
  ))}
</nav>

        {/* Spacer for balance */}
        <div className="hidden w-40 lg:block" />

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex flex-col gap-1">
            <span className={`block h-0.5 w-5 bg-white transition ${open ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-4 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-30 bg-slate-950/80 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.15 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="absolute right-4 top-4 w-[90vw] max-w-sm rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <div className="flex items-center justify-center w-14 h-14">
                    <img src="/logo.png" width={40} height={40} alt="CrewBoard" />
                  </div>
                  CreawBoard.ai
                </div>
                <button
                  type="button"
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
              <div className="mt-6 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg border border-white/5 bg-white/5 px-3 py-3 text-base font-semibold text-slate-100"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                <a className="btn btn-secondary w-full" href="#how-it-works" onClick={() => setOpen(false)}>
                  Watch Demo
                </a>
                <a className="btn btn-primary w-full" href="#pricing" onClick={() => setOpen(false)}>
                  Start Free
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
