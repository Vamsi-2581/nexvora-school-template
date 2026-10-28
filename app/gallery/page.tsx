import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { campusImages } from "@/data/school";

export const metadata = {
  title: "Gallery",
  description: "A demonstration gallery layout for approved school photography.",
};

const gallery = [
  ...campusImages,
  { src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=85", alt: "Students enjoying an outdoor group activity", title: "Together outdoors" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85", alt: "Teacher and students sharing a classroom learning activity", title: "Classroom discovery" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="PHOTO GALLERY" title="A glimpse of learning in action." description="Use this gallery to share school life through approved images, with care for privacy and permission." image="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1800&q=85" imageAlt="Students enjoying a group activity outdoors" />
      <section className="section section--white"><div className="container">
        <SectionHeading eyebrow="MOMENTS THAT MATTER" title="A school day is full of discovery" description="These are generic demonstration photographs, not a record of real NexVora Academy students or events. Replace with approved school photography before launch." />
        <div className="gallery-grid">{gallery.map((image, index) => <figure className={"gallery-card gallery-card--" + ((index % 5) + 1)} key={image.title + index}><div className="gallery-card__image"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw" /></div><figcaption><span>0{index + 1}</span>{image.title}</figcaption></figure>)}</div>
        <p className="notice-note">For a real school, use only photographs cleared for publication. Obtain appropriate permission and avoid identifying children or sharing sensitive personal details.</p>
      </div></section>
      <CtaBand title="Share the story of your school." description="A well-curated gallery helps families see the environment, activities and community a school can offer." buttonLabel="Explore the school" href="/about" />
    </>
  );
}
