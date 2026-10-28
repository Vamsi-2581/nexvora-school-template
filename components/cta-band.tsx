import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
};

export function CtaBand({ eyebrow = "YOUR NEXT CHAPTER", title, description, buttonLabel, href }: CtaBandProps) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          <p className="eyebrow eyebrow--light">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Link href={href} className="button button--gold">
          {buttonLabel} <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}
