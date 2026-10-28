import Link from "next/link";
import { ArrowUpRight, CheckCircle2, FileText, MessageCircle, CalendarDays, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";

export const metadata = {
  title: "Admissions",
  description: "A demonstration admissions page with an illustrative process and checklist.",
};

const steps = [
  { title: "Explore the school", description: "Review verified programmes, approach, facilities and the school's admission policy.", icon: MessageCircle },
  { title: "Confirm requirements", description: "Contact the admissions office for current eligibility, age criteria, dates and document requirements.", icon: FileText },
  { title: "Arrange the next step", description: "Follow the school's confirmed instructions for an enquiry, visit or application.", icon: CalendarDays },
];
const documents = [
  "Documents specifically requested by the school",
  "Previous school records, if applicable",
  "Official identity or age documentation, as required",
  "Any school-issued application form",
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero eyebrow="ADMISSIONS" title="Take the next step with confidence." description="A clear starting point for families exploring a school. All requirements and dates must be confirmed with the actual institution." image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1800&q=85" imageAlt="Students participating in a learning activity" />
      <section className="section section--cream"><div className="container">
        <div className="section-topline"><SectionHeading eyebrow="A SIMPLE STARTING POINT" title="How to explore admissions" description="This example process helps a school explain the next steps without inventing policies or deadlines." /><span className="demo-pill">Illustrative process</span></div>
        <div className="process-grid">{steps.map((step, index) => { const Icon = step.icon; return <article className="process-card" key={step.title}><div className="process-card__number">0{index + 1}</div><Icon size={25} /><h3>{step.title}</h3><p>{step.description}</p></article>; })}</div>
      </div></section>
      <section className="section section--white"><div className="container admissions-details">
        <div><SectionHeading eyebrow="BE PREPARED" title="A checklist to discuss with the school" description="The final list depends on the school's verified policy and the student's circumstances." /><ul className="check-list check-list--stacked">{documents.map((item) => <li key={item}><CheckCircle2 size={18} /> {item}</li>)}</ul><p className="notice-note">This checklist is generic information, not an official list of required documents. Do not upload sensitive student documents to this demonstration website.</p></div>
        <aside className="admissions-help-card"><span className="admissions-help-card__icon"><Users size={25} /></span><p className="eyebrow">NEED CLARITY?</p><h2>Ask before you apply.</h2><p>Confirm the actual admission schedule, fees, age criteria, required documents and available classes directly with the school.</p><Link className="button button--navy button--full" href="/contact">Contact information <ArrowUpRight size={17} /></Link></aside>
      </div></section>
      <section className="section section--navy"><div className="container">
        <SectionHeading light eyebrow="FREQUENT QUESTIONS" title="Questions families often ask" description="These are general prompts to help families prepare for a conversation with the school." />
        <div className="faq-list">
          <details><summary>Which classes are currently accepting applications?</summary><p>Application availability must be confirmed with the school. Do not rely on this demonstration page for current availability.</p></details>
          <details><summary>What are the admission dates and fees?</summary><p>Ask the school for its current, approved schedule and fee information. No dates or fees are asserted on this demo page.</p></details>
          <details><summary>Which documents should a family prepare?</summary><p>Use the checklist on this page as a starting point, then follow the official requirements supplied by the school.</p></details>
          <details><summary>Can I submit an application on this website?</summary><p>No. This demonstration website does not accept or store applications. A real application workflow must be implemented and reviewed separately.</p></details>
        </div>
      </div></section>
      <CtaBand title="Every good journey starts with a conversation." description="Use verified school contact information to help families make an informed next step." buttonLabel="View contact page" href="/contact" />
    </>
  );
}
