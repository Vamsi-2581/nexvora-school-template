import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, BookOpen, CalendarDays, CheckCircle2,
  Compass, GraduationCap, HeartHandshake, Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { school, learningStages, facilities, campusImages } from "@/data/school";
import { notices } from "@/data/notices";

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__image">
          <Image src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2000&q=90" alt="Students learning with a teacher in a bright classroom" fill priority sizes="100vw" />
        </div>
        <div className="home-hero__scrim" />
        <div className="container home-hero__content">
          <div className="home-hero__copy">
            <span className="hero-kicker"><Sparkles size={15} /> A SCHOOL WEBSITE DEMO</span>
            <p className="eyebrow eyebrow--light">A place to learn and belong</p>
            <h1>Helping young minds <em>find their own light.</em></h1>
            <p className="home-hero__description">A thoughtful learning community where curiosity is encouraged, character matters and every child is invited to discover what they can become.</p>
            <div className="home-hero__actions">
              <Link className="button button--gold" href="/admissions">Explore admissions <ArrowUpRight size={17} /></Link>
              <Link className="button button--ghost" href="/about">Discover our school <ArrowRight size={17} /></Link>
            </div>
            <div className="home-hero__note"><CheckCircle2 size={16} /> A fictional school identity for demonstration; all details require verification.</div>
          </div>
          <div className="home-hero__visual-note">
            <span className="home-hero__visual-icon"><GraduationCap size={25} /></span>
            <div><strong>Learn with purpose</strong><span>Grow with confidence</span></div>
          </div>
        </div>
        <div className="home-hero__bottomline"><div className="container"><span>EDUCATION WITH HEART</span><span className="home-hero__bottomline-dash" /><span>ACADEMICS · CHARACTER · COMMUNITY</span></div></div>
      </section>

      <section className="intro-strip">
        <div className="container intro-strip__inner">
          <div className="intro-strip__mark"><BookOpen size={23} /></div>
          <p><strong>More than a classroom.</strong> A foundation for a lifetime of curiosity, confidence and care.</p>
          <Link href="/academics" className="text-link">Our learning approach <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container two-column-intro">
          <div className="intro-photo">
            <Image src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1100&q=85" alt="Graduates celebrating an educational milestone" width={780} height={920} sizes="(max-width: 800px) 100vw, 45vw" />
            <div className="photo-caption"><span>01 / OUR BELIEF</span><strong>Every learner has potential worth nurturing.</strong></div>
          </div>
          <div className="two-column-intro__copy">
            <SectionHeading eyebrow="WELCOME TO NEXVORA ACADEMY" title="A school community that sees the whole child" description="Learning is at its best when young people feel encouraged to ask questions, explore their interests and build the confidence to try again." />
            <p className="body-copy">At {school.name}, the demonstration approach places thoughtful teaching, positive relationships and purposeful discovery at the heart of school life. Replace this introduction with a real school's approved story before publishing.</p>
            <div className="intro-principles">
              <div><span className="principle-icon"><HeartHandshake size={20} /></span><span><strong>Care comes first</strong><small>A welcoming environment built around respect and belonging.</small></span></div>
              <div><span className="principle-icon"><Compass size={20} /></span><span><strong>Curiosity leads</strong><small>Learning experiences that invite questions and discovery.</small></span></div>
            </div>
            <Link className="button button--navy" href="/about">Get to know us <ArrowUpRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-topline">
            <SectionHeading eyebrow="THE LEARNING JOURNEY" title="Room to grow at every stage" description="A learning journey should build knowledge step by step while making space for creativity, collaboration and individual strengths." />
            <Link className="text-link" href="/academics">Explore academics <ArrowRight size={16} /></Link>
          </div>
          <div className="stage-grid">
            {learningStages.map((stage, index) => {
              const Icon = stage.icon;
              return <article className="stage-card" key={stage.title}><div className="stage-card__top"><span>0{index + 1}</span><Icon size={25} strokeWidth={1.6} /></div><h3>{stage.title}</h3><p>{stage.description}</p><Link href="/academics" aria-label={"Learn more about " + stage.title} className="circle-link"><ArrowUpRight size={18} /></Link></article>;
            })}
          </div>
          <p className="demo-caption">Illustrative learning stages only. Confirm the actual classes and curriculum with the school.</p>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <div className="section-topline section-topline--light">
            <SectionHeading light eyebrow="BEYOND THE LESSON" title="Spaces that spark possibility" description="The right environment can help students create, investigate, move, reflect and find new interests." />
            <Link className="text-link text-link--light" href="/facilities">Explore facilities <ArrowRight size={16} /></Link>
          </div>
          <div className="facility-grid">
            {facilities.slice(0, 3).map((facility, index) => {
              const Icon = facility.icon;
              const image = campusImages[index];
              return <Link href="/facilities" className="facility-card" key={facility.title}><div className="facility-card__image"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /></div><div className="facility-card__body"><span className="facility-card__icon"><Icon size={21} /></span><h3>{facility.title}</h3><p>{facility.description}</p><span className="facility-card__link">Discover more <ArrowRight size={15} /></span></div></Link>;
            })}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container community-grid">
          <div className="community-grid__copy">
            <SectionHeading eyebrow="SCHOOL LIFE" title="A community built on small, meaningful moments" description="From the first question in class to the team effort on the field, school life is made up of experiences that help a young person grow." />
            <ul className="check-list">
              <li><CheckCircle2 size={18} /> Respectful relationships and a sense of belonging</li>
              <li><CheckCircle2 size={18} /> Opportunities to explore arts, ideas and movement</li>
              <li><CheckCircle2 size={18} /> Partnership between school and family</li>
            </ul>
            <Link href="/gallery" className="button button--navy">Explore school life <ArrowUpRight size={17} /></Link>
          </div>
          <div className="community-grid__photos">
            {campusImages.slice(1, 4).map((image) => <div className="community-photo" key={image.src}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 800px) 90vw, 25vw" /></div>)}
            <div className="community-note"><Sparkles size={18} /><span>Room to ask.<br />Room to explore.</span></div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-topline">
            <SectionHeading eyebrow="KEEP IN THE LOOP" title="Notices and school updates" description="A clear place for families to find important, school-approved announcements." />
            <Link href="/notices" className="text-link">All notices <ArrowRight size={16} /></Link>
          </div>
          <div className="notice-grid">
            {notices.map((notice, index) => <article className="notice-card" key={notice.title}><div className="notice-card__meta"><span><CalendarDays size={14} /> {notice.dateLabel}</span><span className="notice-tag">{notice.category}</span></div><h3>{notice.title}</h3><p>{notice.summary}</p><span className="notice-card__number">0{index + 1}</span></article>)}
          </div>
          <p className="demo-caption">These are sample notices, not actual school announcements. Replace with approved information before launch.</p>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-section__image"><Image src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1500&q=85" alt="Students taking part in a classroom activity" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
        <div className="quote-section__content">
          <span className="quote-mark">“</span><p className="eyebrow eyebrow--light">A MESSAGE TO FAMILIES</p>
          <blockquote>{school.principalMessage}</blockquote>
          <div className="quote-section__author"><span>{school.principalName}</span><small>{school.principalRole}</small></div>
          <Link href="/about" className="text-link text-link--light">Meet our school <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container admissions-preview">
          <div className="admissions-preview__icon"><GraduationCap size={35} /></div>
          <div className="admissions-preview__copy"><p className="eyebrow">A NEW CHAPTER STARTS HERE</p><h2>Curious about the next step?</h2><p>Explore the admission information and learn which details need to be confirmed with the school.</p></div>
          <Link className="button button--navy" href="/admissions">Admission information <ArrowUpRight size={17} /></Link>
        </div>
      </section>
      <CtaBand eyebrow="MAKE THE NEXT STEP CLEAR" title="Discover a learning community full of possibility." description="Explore the demo school website, or adapt this template with verified information for your own school." buttonLabel="Get in touch" href="/contact" />
    </>
  );
}
