# Pricing Page Design Spec
Uses the same dark theme, typography, and purple/cyan accents defined in `DESIGN.md`. Desktop-first at 1200px max width, fluid down to 360px.

## Page Goals
- Help visitors pick a plan quickly; spotlight the Pro tier as default choice.
- Make billing period clear with instant, animated price updates and an explicit 20% annual savings.
- Provide deep comparison + FAQ to reduce sales/Support friction; clear path to talk to Sales for Enterprise.

## Structure (top → bottom)
- Anchor nav target `#pricing`.
- **Billing toggle bar** (full width, centered) above cards.
- **Pricing cards grid** (4 tiers). Pro has “Most Popular” chip and elevated treatment.
- **Feature comparison table** (full-width, sticky header).
- **FAQ accordion** (6–8 items).
- **Enterprise CTA strip** with “Contact Sales” + calendar booking button.
- Footer follows existing global footer.

## Billing Toggle
- Pill switch labeled `Monthly` / `Annual · save 20%` (text uses small pill badge for discount).
- Default position: Annual selected.
- Thumb: 32x18 pill inside 56x28 track; cyan accent on active side, muted slate on inactive.
- Animated price change: numbers cross-fade + slide 6px vertically over 180ms ease-out; counters respect `prefers-reduced-motion`.
- ARIA: toggle implemented as `button` with `aria-pressed`; text “Annual (save 20%)”.

## Pricing Cards
- Layout: 2x2 on desktop (≥992px), 2x2 tablet (≥768px), single-column carousel on mobile with snap points and peek of next card.
- Card shell: 14px radius, 1px border `rgba(255,255,255,0.06)`, shadow `0 20px 60px rgba(0,0,0,0.35)`, hover lift + cyan glow per DESIGN.md.
- Header row: Plan name (Space Grotesk 22/24/18, bold) + optional chip.
  - Pro chip: “Most popular” pill, purple background, white text, tiny lightning icon.
- Price row:
  - Large numeric (Space Grotesk 44/36/30); currency + `/mo` suffix in Manrope 16, muted.
  - Annual discount note line: “Billed annually, save 20%” shown when Annual selected; otherwise “Billed monthly”.
  - Prices (before discount math is applied in UI):
    - Free: `$0`
    - Pro: `$39/mo` (monthly), `$31/mo` shown when Annual (20% off)
    - Team: `$149/mo` (monthly), `$119/mo` when Annual
    - Enterprise: `Custom` label; no numeric animation, keep aligned baseline
- Tasks per month: subline in mono `DM Mono`, muted color.
- Feature checklist:
  - Use outlined icons (1.5px stroke) tinted purple/cyan; check icon for included items.
  - Tier-specific key features (minimum 4 bullet lines):
    - Free: BYOK (own API key), 1–2 agents, basic dashboard, 20–40 tasks/mo.
    - Pro: Unlimited agents, analytics, priority queue, 100–250 tasks/mo.
    - Team: Collaboration, roles/permissions, history, 500–1500 tasks/mo.
    - Enterprise: VPC, SLAs, custom integrations, premium support.
  - For exclusions, use muted “—” rather than red X inside cards (X reserved for comparison table).
- CTA button per card:
  - Free/Pro/Team: solid purple “Start free” / “Start trial” variants; full width.
  - Enterprise: ghost cyan “Contact Sales”.
  - Hover: cyan glow; focus ring 2px cyan.
  - Disabled state only used if billing fetch fails.

## Comparison Table
- Positioned below cards with sticky header (sticks after 120px) and horizontal scroll hint on mobile.
- Columns: Plan names with sublabels; Pro header includes chip.
- Row labels left-locked column with dark gradient fade on scroll.
- Cell icons: purple checkmark for included, muted “—” for not available, red X only when feature explicitly unavailable.
- Rows (ordered):
  1) Tasks/mo (show ranges above)  
  2) Agents (1–2, Unlimited, Unlimited, Unlimited)  
  3) Analytics (Free = —, Pro = ✓, Team = ✓, Enterprise = ✓)  
  4) Priority queue (Free = —, Pro/Team = ✓, Enterprise = ✓)  
  5) Collaboration (Free = —, Pro = —, Team/Enterprise = ✓)  
  6) Roles & permissions (Free/Pro = —, Team/Enterprise = ✓)  
  7) History/audit log (Free/Pro = —, Team = ✓, Enterprise = ✓)  
  8) VPC / Private networking (Only Enterprise = ✓; others X)  
  9) SLAs (Enterprise ✓; others —)  
  10) Custom integrations (Enterprise ✓; others —)  
  11) Support level (Free = Community, Pro = Standard, Team = Priority, Enterprise = Dedicated CSM)  
  12) Security (SOC2 / SSO / RBAC): Free — / — / —; Pro — / — / limited RBAC; Team ✓ / ✓ / ✓; Enterprise ✓ / ✓ / ✓  
- Zebra rows: alternate `rgba(255,255,255,0.02)`; row hover highlight.

## FAQ Section
- Accordion list (minimum 6 items) placed below table with generous spacing.
- Interaction: single-open; 180ms ease-out height + icon rotation; respects reduced motion.
- Example questions to include:
  - How is billing calculated if I exceed my task limit?
  - Can I upgrade from Free to Pro mid-cycle?
  - Do unused tasks roll over?
  - What refunds do you offer?
  - Can I switch between monthly and annual?
  - How do roles and permissions work on Team?
- Answers use concise 2–3 sentence copy; include link-style inline CTA to Docs when relevant.

## Enterprise CTA
- Full-width strip with subtle gradient (purple → transparent) and thin border.
- Content: Headline “Need security reviews or custom integrations?”; subtext about VPC, SLAs.
- Buttons: primary “Contact Sales” (purple) + secondary “Book a call” (ghost cyan) that opens calendar booking modal/inline Calendly embed.
- Include small trust badges row (e.g., “SOC2-ready”, “Dedicated CSM”) using muted text and tiny separators.

## Interaction & Motion
- Cards: hover lift + glow; tap ripple on mobile disabled (use opacity change).
- Billing toggle: thumb slides; price figures cross-fade/slide; tasks/mo text updates simultaneously.
- Comparison table header sticks with slight drop shadow when engaged.
- FAQ icons rotate + color shift to purple when open.

## Responsive Behavior
- ≥1200: 4 cards in 2x2; table full width; FAQ two-column list of accordions.
- 992–1199: cards still 2x2; table sticky header remains.
- 768–991: cards 2x2; table horizontally scrollable with left label sticky.
- 576–767: cards switch to single-column carousel with peek; FAQ single column.
- ≤575: stacked elements; toggle and CTA full width; table scroll with shadow edges; reduce paddings to 16px.

## Accessibility
- Contrast ≥4.5:1 on all text against dark panels.
- Focus states: cyan ring 2px; visible on toggle, buttons, accordion triggers, table scroll area.
- ARIA: accordion uses `aria-expanded`, `aria-controls`; table has `scope="col"`/`scope="row"`.
- Motion: honor `prefers-reduced-motion` by disabling cross-fades and slides.

## Content Notes
- Keep copy concise and benefits-led; avoid jargon in feature bullets.
- Ensure currency formatting localized (USD default); suffix `/mo` consistently.
- Discount math: Annual price = Monthly price * 0.8, rounded to nearest dollar for display.

## QA Checklist
- Toggle updates all price figures and CTAs without layout shift.
- Pro chip visible in both cards and table header.
- Table header sticks without covering content; row labels stay readable on scroll.
- FAQ keyboard navigation works (Enter/Space toggles).
- Enterprise CTA buttons open correct destinations; calendar embed loads on mobile.
