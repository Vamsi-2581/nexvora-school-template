import { CalendarDays, Megaphone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { notices } from "@/data/notices";

export const metadata = {
  title: "Notices",
  description: "Sample announcements for the NexVora Academy demonstration website.",
};

export default function NoticesPage() {
  return (
    <>
      <PageHero eyebrow="NOTICES & UPDATES" title="Important information, clearly shared." description="A dedicated place for school-approved updates, announcements and event information." image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=85" imageAlt="Classroom learning environment" />
      <section className="section section--cream"><div className="container">
        <div className="notices-intro"><SectionHeading eyebrow="SCHOOL BULLETIN" title="Updates for the school community" description="This first version uses local sample data. It has no admin dashboard and notices are not updated through a content management system." /><span className="demo-pill"><Megaphone size={15} /> Sample notices only</span></div>
        <div className="notice-list">{notices.map((notice, index) => <article className="notice-list-item" key={notice.title}><div className="notice-list-item__number">0{index + 1}</div><div className="notice-list-item__content"><div className="notice-card__meta"><span><CalendarDays size={14} /> {notice.dateLabel}</span><span className="notice-tag">{notice.category}</span></div><h2>{notice.title}</h2><p>{notice.summary}</p></div></article>)}</div>
        <p className="notice-note">These examples are not real school announcements. Before launch, replace them with verified content and check every date, document and instruction.</p>
      </div></section>
      <CtaBand title="Need to confirm an announcement?" description="Contact the school using its verified communication channels rather than relying on sample notices." buttonLabel="Contact information" href="/contact" />
    </>
  );
}
