# School client customization checklist

NexVora Academy is fictional demonstration content. Before publishing this template for a real school, replace demo details with information approved and verified by that school. Do not use real student personal data in this process.

## Content and assets

- [ ] Confirm the school's name and any approved short name.
- [ ] Add the approved logo and brand colors; check that text remains readable against the chosen colors.
- [ ] Replace demo copy with school-approved descriptions, principal message, values, and calls to action.
- [ ] Verify class names, age ranges, stages, and curriculum wording with the school.
- [ ] Confirm each phone number, email address, website URL, physical address, and admissions contact with the school.
- [ ] Confirm that listed facilities and services are actually available.
- [ ] Verify admission policies, eligibility, dates, required documents, and any fees with the school before publishing.
- [ ] Replace sample notices with approved announcements and confirmed dates; remove notices that are no longer current.
- [ ] Obtain permission for photographs, especially photographs that show children. Confirm the permitted use and avoid publishing identifying details without the school's appropriate consent. Use properly licensed assets and meaningful alternative text.

## Where to make changes

1. Update `data/school.ts` with the approved school identity, copy, contact details, learning stages, values, facilities, and image metadata.
2. Update `data/notices.ts` with current, school-approved notices.
3. Review every route and remove any remaining fictional or sample details before deployment.

The contact form in this template is a disabled preview: it does not submit or save enquiries. Do not describe it as working until a real delivery service has been implemented and verified.

## Validate before deployment

From the repository root, run:

```sh
npm run lint
npm run typecheck
npm run build
```

Resolve failures before deployment. Also review the pages and links with the school so that only verified content is published.

## Handover

When reporting the customization, list the files changed and the validation commands actually run. Clearly note any checks that could not run and why.
