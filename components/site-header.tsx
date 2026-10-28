"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { school } from "@/data/school";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/facilities", label: "Facilities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/notices", label: "Notices" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="announcement-bar">
        <div className="container announcement-bar__inner">
          <span>{school.demoLabel}</span>
          <span className="announcement-bar__right">Thoughtful learning. Brighter possibilities.</span>
        </div>
      </div>
      <header className="site-header">
        <div className="container site-header__inner">
          <Link className="brand" href="/" aria-label={school.name + " home"}>
            <span className="brand__mark"><GraduationCap size={28} strokeWidth={1.8} /></span>
            <span className="brand__text">
              <strong>{school.name}</strong>
              <small>LEARN · LEAD · GROW</small>
            </span>
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
          <nav
            id="primary-navigation"
            className={["primary-nav", menuOpen ? "primary-nav--open" : ""].filter(Boolean).join(" ")}
            aria-label="Main navigation"
          >
            {links.map((link) => {
              const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  className={active ? "primary-nav__link primary-nav__link--active" : "primary-nav__link"}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link className="button button--nav" href="/admissions" onClick={() => setMenuOpen(false)}>
              Admissions <ArrowUpRight size={16} />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
