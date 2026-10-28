# NexVora School Website Template

A polished, responsive, database-free school website template built with Next.js App Router, TypeScript and CSS. NexVora Academy is a fictional demonstration identity.

## Included
- Home, About, Academics, Admissions, Facilities, Gallery, Notices and Contact pages.
- Shared responsive navigation, footer, page hero, calls to action and section headings.
- Centralized school configuration and clearly labelled sample notices.
- Accessible photo layouts and metadata.
- Agent instructions, roadmap, issue templates, pull request checklist and CI validation workflow.

## Run locally
Requirements: Node.js 22 and npm.

1. Clone this repository and open the project root.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open http://localhost:3000.

## Validate changes
- `npm run lint`
- `npm run typecheck`
- `npm run build`

The GitHub Actions workflow runs the same checks for pushes and pull requests. Commit the generated package-lock.json after running npm install locally for reproducible installs.

## Customize for a real school
Start with data/school.ts and data/notices.ts. Replace the fictional school name, approved description, brand details, contact information, facilities, principal message, images and notices. Review every page and remove all demo placeholders before publishing. Do not present fictional affiliations, achievements, dates or contact information as real.

This version has no database, login system, student records, enquiry backend or CMS. The contact form is a disabled preview and does not send or save data. Connect and test a real service before claiming that enquiries are submitted.

## GitHub coding-agent workflow
1. Read AGENTS.md, .github/copilot-instructions.md, docs/ARCHITECTURE.md and docs/ROADMAP.md.
2. Create one narrowly scoped GitHub issue with testable acceptance criteria.
3. Assign or hand that issue to GitHub Copilot coding agent if enabled for this repository.
4. Have the agent implement only the issue, run validation and open a pull request.
5. Review the diff and CI result before merging.

Avoid asking agents to add a database, student portal or other security-sensitive capability without an explicit reviewed design.

## Deploy to Vercel
1. Push the project to GitHub.
2. In Vercel choose Add New Project and import this repository.
3. Keep the detected Next.js framework and default build/output settings.
4. No environment variables are required for the current static demo.
5. Deploy, then verify every route and test mobile and desktop.

See docs/ROADMAP.md for planned follow-up work.
