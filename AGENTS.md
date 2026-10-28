# Instructions for coding agents

## Product goal
Maintain a premium, responsive, public-facing school website template for NexVora Technology. The fictional NexVora Academy identity is demo content. This is not a school management system.

## Before changing code
1. Read README.md, docs/ARCHITECTURE.md and docs/ROADMAP.md.
2. Inspect the relevant routes, components and data before editing.
3. Follow existing patterns and keep changes focused on the assigned issue.
4. If requirements are unclear, state assumptions instead of inventing school facts.

## Guardrails
- Keep the project database-free and backend-free unless an approved issue explicitly changes the architecture.
- Do not add authentication, student records, attendance, grades, fees, payment processing or admin portals as unrequested extras.
- Never commit secrets, tokens, private client content or real student personal data.
- Never present fictional affiliations, results, achievements, contact details, addresses or dates as verified facts.
- Put school-specific copy in data/school.ts and sample notices in data/notices.ts where practical.
- The Contact form is deliberately a disabled, non-submitting preview. Do not fake submission success or imply it stores information.
- Do not create dead links, empty pages or placeholder href values.
- Prefer semantic HTML, keyboard access, visible focus, sufficient contrast and reduced-motion support.
- Use next/image for remote photos and keep their host configured in next.config.ts.
- Avoid unnecessary dependencies, version upgrades and broad rewrites.
- Do not deploy, purchase domains or make external account changes as part of a code task.

## Architecture
- Next.js App Router routes live in app/.
- Shared UI lives in components/.
- Demonstration school data lives in data/.
- Global design tokens and styling live in app/globals.css.
- Keep components focused and typed.
- Maintain the navy, gold and ivory visual language.

## Required checks
Run these commands when dependencies are installed:
- npm run lint
- npm run typecheck
- npm run build

Fix failures caused by your changes. Never say a test passed unless you ran it. If unable to run a check, report the exact limitation.

## Completion report
Summarize files changed, behaviour added, commands/tests actually run and any unresolved issue or manual step. Do not modify unrelated files merely for stylistic preference.
