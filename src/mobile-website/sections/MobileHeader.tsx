"use client";

import { AnimatePresence, m } from "framer-motion";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { content } from "@/shared/data/content";
import { kindergarten, links, navSections } from "@/shared/data/kindergarten";
import { useBodyLock } from "@/shared/hooks/useBodyLock";
import { useScrolled } from "@/shared/hooks/useScrolled";
import { scrollToSection } from "@/shared/lib/scroll";
import { InstagramIcon } from "@/shared/ui/BrandIcons";
import { Leaf } from "@/shared/ui/Decor";
import { Logo } from "@/shared/ui/Logo";

/** Compact bar + full-screen green menu (Esc closes, focus stays inside, page scroll is locked). */
export function MobileHeader() {
  const t = content;
  const scrolled = useScrolled(8);
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useBodyLock(open);

  useEffect(() => {
    if (!open) return;
    const root = panel.current;
    root?.querySelector<HTMLElement>("a,button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (e.key !== "Tab" || !root) return;
      const items = [...root.querySelectorAll<HTMLElement>("a,button"), toggle.current].filter(Boolean) as HTMLElement[];
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    // after the scroll lock is released
    requestAnimationFrame(() => scrollToSection(id));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`relative z-20 transition-[background-color,box-shadow] duration-300 ${
          open ? "bg-forest" : scrolled ? "glass shadow-soft" : ""
        }`}
      >
        <div className="mx-auto flex h-15 max-w-[34rem] items-center justify-between gap-2 px-4 min-[375px]:px-5">
          <a href="#home" onClick={go("home")} aria-label={t.header.home} className="min-w-0 shrink rounded-full">
            <Logo size="sm" light={open} />
          </a>
          <div className="flex shrink-0 items-center gap-1.5">
            {!open && (
              <a
                href={links.tel}
                aria-label={`${t.header.call}: ${kindergarten.phone.display}`}
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-paper text-forest active:scale-95"
              >
                <Phone className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
            )}
            <button
              ref={toggle}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.header.closeMenu : t.header.openMenu}
              className={`grid h-10 w-10 place-items-center rounded-full transition active:scale-95 ${open ? "bg-milk text-forest" : "bg-forest text-milk"}`}
            >
              {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            ref={panel}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={t.header.menu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-10 overflow-y-auto bg-forest pt-15 text-milk"
          >
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 blob-a bg-leaf/30" />
            <Leaf tone="soft" className="pointer-events-none absolute right-8 bottom-40 w-10 rotate-[30deg] opacity-30" />
            <nav aria-label={t.header.navLabel} className="relative mx-auto max-w-[34rem] px-4 pt-3 pb-8 min-[375px]:px-5">
              <ul className="divide-y divide-white/10">
                {navSections.map((id, i) => (
                  <m.li key={id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.025 * i, duration: 0.22 }}>
                    <a href={`#${id}`} onClick={go(id)} className="flex min-h-13 items-center gap-3 font-display text-[1.3rem] font-extrabold active:text-honey">
                      <span className="w-6 text-[0.8rem] font-bold text-mint/50 tabular-nums" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {t.nav[id]}
                    </a>
                  </m.li>
                ))}
              </ul>
              <div className="mt-7 grid gap-2.5">
                <a href={links.tel} className="flex h-13 items-center justify-center gap-2 rounded-full bg-milk px-5 font-semibold text-forest tabular-nums">
                  <Phone className="h-4.5 w-4.5" aria-hidden="true" />
                  {kindergarten.phone.display}
                </a>
                <a
                  href={links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-5 text-[0.95rem] font-semibold text-milk"
                >
                  <InstagramIcon className="h-4.5 w-4.5" />
                  {kindergarten.instagram.handle}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <p className="mt-6 text-center text-[0.82rem] text-mint/60">
                {t.contacts.hours}: {t.contacts.hoursValue}
              </p>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
