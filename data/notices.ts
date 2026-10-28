export type SchoolNotice = {
  title: string;
  summary: string;
  category: string;
  dateLabel: string;
};

export const notices: SchoolNotice[] = [
  {
    title: "Welcome to our school website demo",
    summary:
      "This sample notice demonstrates how school announcements can be displayed. Replace it with a school-approved update before launch.",
    category: "Demo notice",
    dateLabel: "Sample content",
  },
  {
    title: "Admissions information",
    summary:
      "Admission dates, eligibility and required documents must be supplied and verified by the school before publishing.",
    category: "Admissions",
    dateLabel: "To be confirmed",
  },
  {
    title: "School events and activities",
    summary:
      "Add confirmed event details, venue and timings here after the school has approved the announcement.",
    category: "School life",
    dateLabel: "Sample content",
  },
];
