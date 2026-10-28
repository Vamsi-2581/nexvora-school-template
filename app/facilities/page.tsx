import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { facilities, campusImages } from "@/data/school";

export const metadata = {
  title: "Facilities",
  description: "A sample facilities page for the NexVora Academy school website template.",
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero eyebrow="OUR SPACES" title="Places to explore, create and grow." description="Show families the learning spaces and activities offered by the school, using only verified facilities and approved images." image="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1800&q=85" imageAlt="Bright classroom with desks arranged for learning" />
      <section className="section section--white"><div className="container">
        <SectionHeading eyebrow="SPACES FOR POSSIBILITY" title="An environment that supports learning" description="The facilities below are illustrative examples. Confirm that each facility exists before using the information for a real school." />
        <div className="facility-list">{facilities.map((facility, index) => { const Icon = facility.icon; const image = campusImages[index]; return <article className="facility-row" key={facility.title}><div className="facility-row__image"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 40vw" /></div><div className="facility-row__copy"><span className="facility-row__index">0{index + 1} / LEARNING SPACE</span><Icon size={25} /><h2>{facility.title}</h2><p>{facility.description}</p></div></article>; })}</div>
      </div></section>
      <section className="section section--cream"><div className="container community-grid">
        <div className="community-grid__copy"><SectionHeading eyebrow="THE SCHOOL DAY" title="Learning happens in many ways" description="Use this section to describe verified co-curricular activities, clubs, physical education and creative opportunities." /><p className="body-copy">A school's actual facilities, access arrangements, supervision and activity schedule should be confirmed before publication.</p></div>
        <div className="community-grid__photos community-grid__photos--two">{campusImages.slice(0, 2).map((image) => <div className="community-photo" key={image.src}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 800px) 90vw, 25vw" /></div>)}</div>
      </div></section>
      <CtaBand title="See what makes a school feel like home." description="Ask the school about campus visits and the facilities available to its students." buttonLabel="Contact the school" href="/contact" />
    </>
  );
}
