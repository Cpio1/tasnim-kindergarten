"use client";

import { Phone } from "lucide-react";
import { content } from "@/shared/data/content";
import { kindergarten, links, navSections } from "@/shared/data/kindergarten";
import { useActiveSection } from "@/shared/hooks/useActiveSection";
import { useScrolled } from "@/shared/hooks/useScrolled";
import { scrollToSection } from "@/shared/lib/scroll";
import { Logo } from "@/shared/ui/Logo";

/** Floating header: transparent over the hero, a frosted pill once the page scrolls. */
export function Header() {
  const t = content;
  const scrolled = useScrolled(24);
  const active = useActiveSection(navSections);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-2.5">
      <div
        className={`mx-auto flex h-14 max-w-[67.5rem] items-center justify-between gap-3 rounded-full pr-2 pl-3 transition-[background-color,box-shadow,border-color] duration-300 2xl:max-w-[74.5rem] ${
          scrolled ? "glass border border-line shadow-soft" : "border border-transparent"
        }`}
      >
        <a href="#home" onClick={go("home")} aria-label={t.header.home} className="shrink-0 rounded-full">
          <Logo />
        </a>

        <nav aria-label={t.header.navLabel} className="min-w-0">
          <ul className="flex items-center gap-0.5">
            {navSections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={go(id)}
                  aria-current={active === id ? "location" : undefined}
                  className={`block rounded-full px-2.5 py-2 text-[0.86rem] font-medium whitespace-nowrap transition-colors xl:px-3.5 xl:text-[0.9rem] ${
                    active === id ? "bg-mint text-forest" : "text-ink-soft hover:bg-paper hover:text-ink"
                  }`}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={links.tel}
            aria-label={`${t.header.call}: ${kindergarten.phone.display}`}
            className="inline-flex h-10 items-center gap-2 rounded-full bg-forest px-4 text-[0.88rem] font-semibold whitespace-nowrap text-milk shadow-leaf transition hover:-translate-y-0.5 hover:bg-leaf"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="tabular-nums">{kindergarten.phone.display}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
