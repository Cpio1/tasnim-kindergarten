"use client";

import { ArrowUp, Phone } from "lucide-react";
import { content } from "@/shared/data/content";
import { fullAddress, kindergarten, links, navSections } from "@/shared/data/kindergarten";
import { scrollToSection } from "@/shared/lib/scroll";
import { InstagramIcon } from "@/shared/ui/BrandIcons";
import { Leaf, Wave } from "@/shared/ui/Decor";
import { Logo } from "@/shared/ui/Logo";
import { Container } from "../ui";

export function Footer() {
  const t = content;
  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(id);
  };
  return (
    <footer className="relative mt-6 overflow-hidden bg-forest text-mint">
      <Wave fill="#FAF9F3" flip className="absolute inset-x-0 -top-px h-10" />
      <Leaf tone="soft" className="pointer-events-none absolute right-[12%] bottom-6 w-16 rotate-[40deg] opacity-15" />
      <Container className="relative pt-16 pb-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-5">
            <Logo light />
            <p className="mt-4 max-w-sm text-[0.9rem] leading-relaxed text-mint/75">{fullAddress}</p>
          </div>
          <nav aria-label={t.header.navLabel} className="col-span-4">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {navSections.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={go(id)} className="text-[0.9rem] text-mint/80 transition hover:text-milk">
                    {t.nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="col-span-3 space-y-2.5">
            <a href={links.tel} className="flex items-center gap-2 text-[0.95rem] font-semibold text-milk tabular-nums hover:text-honey">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {kindergarten.phone.display}
            </a>
            <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[0.9rem] text-mint/85 hover:text-milk">
              <InstagramIcon className="h-4 w-4" />
              {kindergarten.instagram.handle}
            </a>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between gap-6 border-t border-white/10 pt-5 text-[0.82rem] text-mint/60">
          <p>
            © {new Date().getFullYear()} {kindergarten.legalName} · {kindergarten.fullName}. {t.footer.rights}
          </p>
          <a href="#home" onClick={go("home")} className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-mint/80 transition hover:bg-white/10 hover:text-milk">
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
            {t.footer.top}
          </a>
        </div>
      </Container>
    </footer>
  );
}
