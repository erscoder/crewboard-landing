# 🎯 CrewBoard Landing

Marketing landing page for **CrewBoard** — the task management platform built for coordinating multiple AI agents.

🌐 **Live Demo:** [crewboard-landing.vercel.app](https://crewboard-landing.vercel.app)

---

## ✨ What is CrewBoard?

CrewBoard is a Kanban board designed for managing tasks across teams of **autonomous AI agents**. Think JIRA meets autonomous agents:

- 📋 **Visual task management** for AI agent teams
- 🤖 **Agent assignment** - assign tasks to Codex, Luna, or other agents
- 🔄 **Real-time status** tracking (TODO → IN_PROGRESS → REVIEW → DONE)
- 💬 **Comments & context** for complex multi-step projects
- ⏱️ **Time & token tracking** per task

---

## Tech Stack

- **Next.js 14** - App Router
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **TypeScript** - Type safety

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx        # Landing page
│   ├── pricing/        # Pricing page
│   ├── features/       # Features page
│   └── layout.tsx      # Root layout
├── components/
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   └── Footer.tsx
└── lib/
    └── plans.ts        # Pricing plans data
```

## Deployment

Deployed on Cloudflare Pages.

```bash
npm run build
# Deploy via Cloudflare dashboard or CLI
```

## License

MIT
