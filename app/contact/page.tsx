import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { school } from "@/data/school";

export const metadata = {
  title: "Contact",
  description: "School contact information placeholder and enquiry form preview.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="CONTACT" title="Start a conversation with the school." description="The right contact details help families find clear answers and understand their next steps." image="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=85" imageAlt="School campus building" />
      <section className="section section--cream"><div className="container contact-layout">
        <div><SectionHeading eyebrow="GET IN TOUCH" title="We are here to help" description="The details below are template placeholders. Replace them with contact information confirmed by the real school before publishing." />
          <div className="contact-info-list">
            <article className="contact-info-card"><span><MapPin size={21} /></span><div><h2>School address</h2><p>{school.address}</p><small>{school.location}</small></div></article>
            <article className="contact-info-card"><span><Mail size={21} /></span><div><h2>Email</h2>{school.email ? <a href={"mailto:" + school.email}>{school.email}</a> : <p>Email address to be configured</p>}</div></article>
            <article className="contact-info-card"><span><Phone size={21} /></span><div><h2>Telephone</h2>{school.phone ? <a href={"tel:" + school.phone}>{school.phone}</a> : <p>Telephone number to be configured</p>}</div></article>
          </div>
        </div>
        <aside className="contact-form-preview" id="enquiry">
          <span className="contact-form-preview__icon"><ShieldCheck size={25} /></span><p className="eyebrow">ENQUIRY FORM PREVIEW</p><h2>A simple way to make an enquiry</h2>
          <p>This panel previews where a real admission enquiry form could appear. It does not send, transmit or store any information.</p>
          <form className="demo-form" aria-label="Non-functional demonstration enquiry form">
            <label htmlFor="demo-name">Parent or guardian name</label><input id="demo-name" name="name" type="text" placeholder="Preview only" disabled />
            <label htmlFor="demo-email">Email address</label><input id="demo-email" name="email" type="email" placeholder="Preview only" disabled />
            <label htmlFor="demo-message">How can the school help?</label><textarea id="demo-message" name="message" rows={4} placeholder="Preview only" disabled />
            <button className="button button--navy button--full" type="button" disabled aria-disabled="true">Form integration required</button>
          </form>
          <p className="small-note">Before launch, connect an approved form-delivery provider, add privacy information and test the end-to-end flow.</p>
        </aside>
      </div></section>
      <section className="section section--white"><div className="container contact-bottom">
        <div><p className="eyebrow">PLAN YOUR VISIT</p><h2>Confirm visit arrangements directly with the school.</h2><p className="body-copy">No map or directions are shown because this template does not have a verified school address.</p></div>
        <Link className="button button--navy" href="/admissions">Admission information <ArrowUpRight size={17} /></Link>
      </div></section>
    </>
  );
}
