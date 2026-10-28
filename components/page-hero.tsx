import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export function PageHero({ eyebrow, title, description, image, imageAlt }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__image" aria-hidden="true">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" />
      </div>
      <div className="page-hero__scrim" aria-hidden="true" />
      <div className="container page-hero__content">
        <p className="eyebrow eyebrow--light">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero__description">{description}</p>
      </div>
    </section>
  );
}
