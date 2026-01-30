const columns = [
  { title: "Product", links: ["Features", "Pricing", "Docs", "FAQ"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
  { title: "Resources", links: ["Security", "Status", "Support"] },
  { title: "Social", links: ["X", "LinkedIn", "GitHub"] },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/80 py-6">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-[2fr_3fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold text-white">
              <div className="flex items-center justify-center w-10 h-10">
                <img src="/logo.png" width={40} height={40} alt="CrewBoard" />
              </div>
              CreawBoard.ai
            </div>
            <p className="max-w-md text-slate-400 pb-2">
              One dashboard to orchestrate AI agents, collaborate with your team, and ship securely.
            </p>
            <div className="rounded-xl border border-white/10 bg-white/5 p-2">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                  type="email"
                  placeholder="Work email"
                  className="w-full rounded-[10px] border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                />
                <button className="btn btn-secondary w-full sm:w-auto" type="button">
                  Subscribe
                </button>
              </div>
              <p className="mt-2 text-xs text-slate-500">Protected by reCAPTCHA. Privacy-first updates only.</p>
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
                    <li key={link}>
                      <a className="transition-colors hover:text-white" href="#">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/5 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© CreawBoard.ai 2026 • Built with love</span>
          <div className="flex flex-wrap gap-4">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
