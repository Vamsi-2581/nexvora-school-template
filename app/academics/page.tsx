import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpenCheck, Compass, Lightbulb, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { learningStages } from "@/data/school";

export const metadata = {
  title: "Academics",
  description: "Explore the learning approach and illustrative academic stages for the NexVora Academy website demo.",
};

const approach = [
  { title: "Build strong foundations", description: "Create clear pathways for literacy, numeracy, communication and independent learning.", icon: BookOpenCheck },
  { title: "Learn by exploring", description: "Invite students to question, investigate, discuss and connect ideas to the world around them.", icon: Compass },
  { title: "Grow together", description: "Make room for group projects, reflection, feedback and learning from different perspectives.", icon: Users },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero eyebrow="ACADEMICS" title="A love of learning that grows with every question." description="A sample academic page showing how a school can explain its learning stages and educational approach." image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=85" imageAlt="Teacher and students in a classroom" />
      <section className="section section--white"><div className="container">
        <SectionHeading eyebrow="LEARNING STAGES" title="A journey with room to grow" description="These broad stages are illustrative. Replace them with the school's actual grades, curriculum and programme information." />
        <div className="stage-grid stage-grid--page">{learningStages.map((stage, index) => { const Icon = stage.icon; return <article className="stage-card stage-card--large" key={stage.title}><div className="stage-card__top"><span>0{index + 1}</span><Icon size={27} /></div><h3>{stage.title}</h3><p>{stage.description}</p><p className="small-note">Programme details to be verified by the school.</p></article>; })}</div>
      </div></section>
      <section className="section section--cream"><div className="container two-column-intro">
        <div className="editorial-image editorial-image--portrait"><Image src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85" alt="Bright classroom prepared for learning" width={900} height={1050} sizes="(max-width: 800px) 100vw, 48vw" /></div>
        <div className="two-column-intro__copy"><SectionHeading eyebrow="HOW WE LEARN" title="Knowledge, questions and meaningful practice" description="A clear teaching philosophy helps families understand how students are encouraged to think, collaborate and apply what they learn." /><p className="body-copy">Use this space to describe the actual curriculum, assessment approach, academic support, language options and co-curricular learning after the school has approved the wording.</p><Link className="button button--navy" href="/admissions">Admissions information <ArrowUpRight size={17} /></Link></div>
      </div></section>
      <section className="section section--white"><div className="container">
        <SectionHeading align="center" eyebrow="OUR APPROACH" title="Learning that reaches beyond a textbook" description="A balanced education can connect knowledge with exploration, relationships and practice." />
        <div className="value-grid">{approach.map((item) => { const Icon = item.icon; return <article className="value-card" key={item.title}><span className="value-card__icon"><Icon size={25} /></span><h3>{item.title}</h3><p>{item.description}</p></article>; })}</div>
      </div></section>
      <section className="feature-band"><div className="feature-band__image"><Image src="https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=1400&q=85" alt="Student reading and learning" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="feature-band__copy"><Lightbulb size={30} /><p className="eyebrow">THE RIGHT QUESTIONS</p><h2>Give curiosity the space to become understanding.</h2><p>Use this feature area to highlight a verified teaching programme or academic initiative.</p></div></section>
      <CtaBand title="Find the right learning journey" description="Contact the school to confirm its programmes, eligibility and curriculum details." buttonLabel="Explore admissions" href="/admissions" />
    </>
  );
}
