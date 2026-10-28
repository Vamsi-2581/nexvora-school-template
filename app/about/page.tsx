import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, HeartHandshake, Target } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { school, schoolValues } from "@/data/school";

export const metadata = {
  title: "About",
  description: "Discover the values and educational approach behind the NexVora Academy demonstration website.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="ABOUT THE SCHOOL" title="Education shaped by curiosity, care and possibility." description="Get to know the values and approach behind this fictional school website demonstration." image="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=85" imageAlt="School campus building" />
      <section className="section section--cream">
        <div className="container two-column-intro two-column-intro--reverse">
          <div className="editorial-image"><Image src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=85" alt="Students working together in a classroom" width={900} height={1050} sizes="(max-width: 800px) 100vw, 48vw" /></div>
          <div className="two-column-intro__copy">
            <SectionHeading eyebrow="OUR STORY" title="A school should help every learner find their place" description="The strongest learning communities combine high expectations with encouragement, thoughtful teaching and a genuine sense of belonging." />
            <p className="body-copy">This page is a content model for a real school. Replace this copy with the institution's approved history, founding story and community context before publishing.</p>
            <div className="fact-panel"><Target size={22} /><div><strong>Our purpose</strong><p>Help students build knowledge, confidence, compassion and the independence to keep learning.</p></div></div>
            <Link className="button button--navy" href="/academics">Explore our approach <ArrowUpRight size={17} /></Link>
          </div>
        </div>
      </section>
      <section className="section section--white">
        <div className="container">
          <SectionHeading align="center" eyebrow="WHAT GUIDES US" title="Values that show up in everyday learning" description="Use these example values as a starting point, then replace them with the school's approved principles." />
          <div className="value-grid">
            {schoolValues.map((value) => { const Icon = value.icon; return <article className="value-card" key={value.title}><span className="value-card__icon"><Icon size={25} /></span><h3>{value.title}</h3><p>{value.description}</p></article>; })}
          </div>
        </div>
      </section>
      <section className="section section--navy">
        <div className="container two-column-intro two-column-intro--dark">
          <div className="two-column-intro__copy">
            <SectionHeading light eyebrow="LEADERSHIP" title="A welcome to families" description="Leadership messaging should sound personal, clear and grounded in the school's real educational priorities." />
            <blockquote className="leader-quote">“{school.principalMessage}”</blockquote>
            <p className="leader-signature"><strong>{school.principalName}</strong><span>{school.principalRole}</span></p>
          </div>
          <div className="leader-placeholder"><span className="leader-placeholder__icon"><HeartHandshake size={35} /></span><p>School leader portrait</p><small>Replace with an approved photo and verified name</small></div>
        </div>
      </section>
      <CtaBand title="Want to learn more?" description="Review the demonstration admissions information and confirm details directly with the school." buttonLabel="Explore admissions" href="/admissions" />
    </>
  );
}
