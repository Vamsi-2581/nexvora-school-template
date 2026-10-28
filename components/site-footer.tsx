import Link from "next/link";
import { ArrowUpRight, GraduationCap, MapPin, Mail, Phone } from "lucide-react";
import { school } from "@/data/school";

const footerLinks = [
  { href: "/about", label: "About the school" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/notices", label: "Notices" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__main">
        <div className="site-footer__brand">
          <Link className="brand brand--footer" href="/">
            <span className="brand__mark"><GraduationCap size={27} /></span>
            <span className="brand__text">
              <strong>{school.name}</strong>
              <small>LEARN · LEAD · GROW</small>
            </span>
          </Link>
          <p>{school.description}</p>
          <span className="demo-pill demo-pill--footer">Demonstration content — replace before launch</span>
        </div>
        <div>
          <h2 className="site-footer__heading">Explore</h2>
          <ul className="site-footer__links">
            {footerLinks.map((link) => (
              <li key={link.href}><Link href={link.href}>{link.label}<ArrowUpRight size={14} /></Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="site-footer__heading">School information</h2>
          <ul className="site-footer__contact">
            <li><MapPin size={17} /><span>{school.address}</span></li>
            {school.email ? <li><Mail size={17} /><a href={"mailto:" + school.email}>{school.email}</a></li> : <li><Mail size={17} /><span>Email to be configured</span></li>}
            {school.phone ? <li><Phone size={17} /><a href={"tel:" + school.phone}>{school.phone}</a></li> : <li><Phone size={17} /><span>Phone to be configured</span></li>}
          </ul>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <p>© {new Date().getFullYear()} {school.name} · Website demonstration</p>
          <Link href="/contact">Contact the school <ArrowUpRight size={14} /></Link>
        </div>
      </div>
    </footer>
  );
}
