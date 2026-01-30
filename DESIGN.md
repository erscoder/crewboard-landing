# crewboard.ai Landing Page – Design Specs

Dark, modern landing inspired by Linear/Vercel/Raycast. Built for desktop-first with fluid adjustments down to 360px.

## Brand System
- **Palette**  
  - Primary: `#8B5CF6` (purple) — buttons, highlights, key icons  
  - Accent: `#22D3EE` (cyan) — secondary actions, subtle glows  
  - Backgrounds: `#0F172A` (slate-900), panels `#111827`, card hover `#1F2937`  
  - Text: Headings `#F8FAFC`, body `#E2E8F0`, muted `#94A3B8`, dividers `#1E293B`  
  - Success `#34D399`, Warning `#F59E0B`, Error `#F43F5E` (for badges/tooltips)  
  - Surfaces use 4–8% noise or radial gradient (purple→transparent) for depth.

- **Typography**  
  - Heading: **Space Grotesk**, 600/700 weight, fallback `"SF Pro Display", "Segoe UI", sans-serif`  
  - Body/CTA: **Manrope** 500/600, fallback `"SF Pro Text", "Segoe UI", sans-serif`  
  - Numbers/mono accents (code, badges): `DM Mono`, 500  
  - Letter spacing: headings -1% tracking; body 0.1% positive  
  - Line-height: headings 1.05–1.1, body 1.6

- **Elevation & Effects**  
  - Cards: 1px border `rgba(255,255,255,0.06)`, shadow `0 20px 60px rgba(0,0,0,0.35)`  
  - Glows: apply subtle cyan glow on primary hover `0 0 24px rgba(34,211,238,0.25)`  
  - Corner radius: 14px for cards/modals; 999px for pills/chips; 10px for inputs.

## Global Layout
- Max width 1200px content; gutters 32px desktop, 20px tablet, 16px mobile.  
- Grid: 12-column desktop, 8 tablet, 4 mobile; vertical rhythm 16px units.  
- Navigation (sticky): logo left, center nav (`Product, Pricing, Docs, FAQ`), right actions (`Watch Demo` ghost, `Start Free` solid). Background blur with 80% opacity of slate-900. Active nav underline in purple.

## Section Specs

### 1) Hero
- **Layout:** Two columns (60/40). Left: copy + CTAs; Right: hero visual. On ≤900px stack with visual first for impact.  
- **Copy:**  
  - H1 54/64/36px: “Your AI Crew, One Dashboard”  
  - Subhead 20/18/16px max-width 540px: “Manage AI agents like team members. Assign tasks, track progress, ship faster.”  
- **CTAs:**  
  - Primary button `Start Free`: purple fill, white text, pill, shadow + cyan glow on hover; includes small right arrow icon.  
  - Secondary `Watch Demo`: ghost with cyan border/text, translucent bg `rgba(34,211,238,0.08)`, play icon.  
  - Microcopy under CTAs: “No credit card. 14-day Pro trial.” muted text.  
- **Visual:**  
  - Kanban board mock on glassmorphic card: 3 columns (Backlog, In Progress, Review).  
  - Task cards show agent avatars (round 28px), status pills (purple/cyan), and animated “drag” affordance.  
  - Small motion: two avatar chips animate along arrows to imply agents moving tasks; subtle parallax on scroll.  
  - Background: angled gradient ray (purple → transparent) + gridlines at 8% opacity.

### 2) Features (3 columns)
- **Layout:** Equal-width cards with icon circle (48px), title 20px, body 16px.  
- **Items:**  
  - Multi-Agent Collaboration — description: orchestrate specialists with shared context; inline mini-avatar stack.  
  - GitHub Integration — commits/PRs automated; show git branch icon + diff preview strip.  
  - Slack Notifications — real-time updates; show Slack-style message bubble with status badges.  
- Hover: lift + border color shifts to purple; icon background swaps to cyan gradient.

### 3) How It Works (3 steps)
- **Layout:** Horizontal stepper desktop; vertical stacked on mobile. Each step in numbered pill.  
- **Steps:**  
  1. Connect your tools (GitHub, Slack) — connector line uses dashed cyan.  
  2. Create tasks on the Kanban board — small card thumbnail with “+ Task” button.  
  3. AI agents execute and deliver — animated checkmark + delivery badge.  
- Include side note panel: “Average setup time: 3 minutes”.

### 4) Pricing
- **Toggle:** pill switch for `Monthly / Annual (save 20%)`, defaults to Annual. Uses cyan accent; animates thumb.  
- **Cards:** Four tiers in 2x2 on desktop, carousel on mobile.  
  - Free — $0 — “Solo experiments” — limits: 2 projects, 3 agents, community support.  
  - Pro — $29/mo — “For builders” — 10 projects, 10 agents, GitHub/Slack, basic automations.  
  - Team — $79/mo — “Product squads” — unlimited projects, 30 agents, SSO, audit log, priority support.  
  - Enterprise — “Talk to us” — custom, on-prem/SOC2, VPC peering, dedicated CSM.  
- **Comparison Table:** Sticky header, zebra rows. Columns match tiers; rows: Projects, Agents, Integrations (GitHub/Slack/Jira soon), Automations, Support, Security (SOC2, SSO, RBAC), Data retention. Checkmarks purple; dashes muted.  
- CTA buttons per card: Free/Pro/Team “Start Free” (or “Start Trial”), Enterprise “Book Call” ghost cyan.  
- Badge: “Most popular” chip on Pro.

### 5) FAQ
- Accordion list (6–8 items) with plus/minus icons.  
- Example Qs: “How do AI agents collaborate?”, “Is my code secure?”, “Do you support GitHub Enterprise?”, “Can I self-host?”, “How are agent actions logged?”, “What happens after the trial?”  
- Interaction: single-open behavior; smooth height animation; border highlight on open.

### 6) Footer
- Columns:  
  - Product (Features, Pricing, Docs, Changelog)  
  - Company (About, Blog, Careers, Press)  
  - Resources (Security, Status, Support)  
  - Social (X, LinkedIn, GitHub)  
- Newsletter: input + button with cyan outline; include reCAPTCHA note.  
- Bottom bar: muted text “© crewboard.ai 2026 • Built with security first.” with fine divider.

## Components & States
- Buttons: primary (purple), secondary ghost (cyan border), tertiary text. Hover/active/disabled defined; focus ring cyan 2px.  
- Inputs: filled dark, 1px border `rgba(255,255,255,0.08)`, focus ring cyan.  
- Chips: status colors (Done=primary, In Progress=cyan, Blocked=error).  
- Avatars: circular, 28/36px; use color-coded rims to represent agent specialties.

## Responsive Rules
- Breakpoints: 1200, 992, 768, 576, 360.  
- Hero stacks at ≤900px; CTA buttons become full-width ≤576px.  
- Features shift to 2 columns at tablet, 1 at mobile.  
- Pricing table becomes horizontal scroll with sticky row labels on mobile.  
- Navigation collapses to hamburger; overlay menu with blurred backdrop.

## Interaction & Motion
- Page-load: fade + upward slide for hero copy; kanban visual parallax.  
- Scroll: reveal cards with staggered 80ms delay; subtle scale on hover.  
- Toggle and accordions use 180ms ease-out; prefers-reduced-motion respected.

## Assets
- Icon style: thin outline with 1.5px stroke, cyan/purple accents.  
- Background texture: faint grid or noise overlay at 6–8% opacity.  
- Demo kanban: 3–4 sample tasks with short titles; include agent avatar stack and status pill.

## Accessibility
- Color contrast: ensure ≥4.5:1 for text; use lighter text on dark panels.  
- Focus indicators visible on all interactive elements.  
- Semantic landmarks per section; buttons use `aria-pressed` for toggles; accordions use `aria-expanded`.

