# Roadmap and agent-ready tasks

Use one issue per focused task. Every implementation issue should state user-visible behaviour, testable acceptance criteria and required checks. Ask a coding agent to work on one issue at a time.

## Current baseline
- [x] Public Next.js school website structure
- [x] Responsive shared header and footer
- [x] Home, About, Academics, Admissions, Facilities, Gallery, Notices and Contact routes
- [x] Central school and sample notice data
- [x] Clear demo-content and non-submitting-form messaging
- [x] Agent instructions, issue forms, PR checklist and CI workflow

## Follow-up tasks
### Client customization guide
- Add a client intake checklist for school name, approved copy, brand assets, verified contacts, curriculum wording and image permissions.
- Document how to replace the configuration and sample notices.
- Do not include real student data.

### Accessibility review
- Keyboard-test all navigation and controls.
- Review contrast, heading order, focus visibility and reduced motion.
- Record the tools and routes actually tested.

### Real enquiry delivery (requires design approval)
- Select a delivery provider and document data flow before coding.
- Add validation, spam protection, accessible success/error states and privacy information.
- Do not claim to deliver messages until the integration is verified.
- Keep secrets server-side; add a database only if justified.

### CMS or school admin (future, separate design)
- Do not begin without explicit client requirements, roles, a data model, authorization design, backup plan and privacy review.
- Do not mix client databases or student records.
- Provide a migration and rollback plan before production schema changes.

## Release checklist
- [ ] School details are client-approved and placeholders are removed.
- [ ] Image usage rights and alt text are reviewed.
- [ ] Every route and navigation action is checked.
- [ ] Contact channels are verified with the client.
- [ ] Lint, type check and production build pass.
- [ ] CI passes on the proposed merge.
- [ ] Vercel deployment is reviewed on mobile and desktop.
