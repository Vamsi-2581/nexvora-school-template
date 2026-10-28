# Architecture overview

## Purpose
A small, maintainable public school website template intended to be copied and customized per client. It is not a multi-tenant platform or a school management system.

## Runtime
- Next.js App Router renders public routes.
- Shared React UI lives in components/.
- School identity/configuration is in data/school.ts.
- Sample notices are in data/notices.ts.
- Global design tokens and component styles are in app/globals.css.
- Remote demonstration photography uses next/image from images.unsplash.com, allowed by next.config.ts.

## Routes
- / — home
- /about — school overview and values
- /academics — learning stages and approach
- /admissions — information and checklist
- /facilities — campus and learning facilities
- /gallery — demonstration photo gallery
- /notices — clearly labelled sample notices
- /contact — contact placeholders and non-submitting enquiry-form preview

## Data and integrations
The current project has no database, server actions, API routes, authentication, persistence or form-delivery service. The Contact page explains that enquiries are not transmitted or stored. Never introduce a success state that implies a submission was received.

A future enquiry integration must have a reviewed issue describing the provider, data flow, consent, spam protection, privacy notice and error states. Keep secrets server-side. Do not collect sensitive student information without explicit requirements and security review.

## Client reuse
Before handover, replace data/school.ts and data/notices.ts with client-approved information, inspect every route and asset, and remove demo-only notices after placeholders are replaced. Use a separate repository/deployment per client unless a deliberate multi-tenant architecture is designed later.
