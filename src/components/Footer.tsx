"use client";

import { useState } from "react";

const columns = [
  { title: "Product", links: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ]},
  { title: "Social", links: [
    { name: "X", href: "https://x.com/erscoder41567" },
    { name: "GitHub", href: "https://github.com/erscoder" },
  ]},
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer className="border-t border-white/5 bg-slate-950/80 py-6">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-[2fr_3fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold text-white">
              <div className="flex items-center justify-center w-10 h-10">
                <img src="/logo.png" width={40} height={40} alt="CrewBoard" />
              </div>
              CrewBoard.ai
            </div>
            <p className="max-w-md text-slate-400 pb-2">
              One dashboard to orchestrate AI agents, collaborate with your team, and ship securely.
            </p>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              {status === "success" ? (
                <p className="py-3 text-center text-emerald-400 font-medium">
                  ✓ You're on the list! We'll notify you when we launch.
                </p>
              ) : (
                <>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <input
                      type="email"
                      placeholder="Work email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                      className="w-full rounded-[10px] border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                    <button 
                      className="btn btn-secondary w-full sm:w-auto disabled:opacity-50" 
                      type="button"
                      onClick={handleSubscribe}
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? "..." : "Subscribe"}
                    </button>
                  </div>
                  {status === "error" && (
                    <p className="mt-2 text-xs text-red-400">Please enter a valid email.</p>
                  )}
                  <p className="mt-4 pt-3 border-t border-white/5 text-xs text-slate-500">Get notified when we launch. No spam.</p>
                </>
              )}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title} className="space-y-3">
                <h4 className="text-md font-bold uppercase tracking-[0.18em] text-slate-400 pb-3">
                  {col.title}
                </h4>
                <ul className="space-y-2 text-slate-200">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <a className="transition-colors hover:text-white" href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/5 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© CrewBoard.ai 2026 • Built with love</span>
        </div>
      </div>
    </footer>
  );
}
