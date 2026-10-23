"use client";

import { Reveal } from "@/shared/ui/Reveal";

/** Shared building blocks of the desktop composition (compact scale, tuned for 1366×768 and 1440×900). */

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[71rem] px-8 xl:px-10 2xl:max-w-[78rem] ${className}`}>{children}</div>;
}

/** Natural-height section (never a forced min-height); vertical padding shrinks on short laptop screens. */
export function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} data-section className={`relative py-16 short:py-12 2xl:py-20 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.8rem] font-semibold tracking-wide ${
        light ? "bg-white/10 text-mint" : "bg-mint text-forest"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-honey" : "bg-leaf"}`} aria-hidden="true" />
      {children}
    </span>
  );
}

export function Heading({ eyebrow, title, lead, light = false, className = "", center = false }: {
  eyebrow: string;
  title: string;
  lead?: string;
  light?: boolean;
  className?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} ${className}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-3.5 text-[2rem] leading-[1.12] font-extrabold tracking-tight short:text-[1.85rem] 2xl:text-[2.35rem] ${light ? "text-milk" : "text-ink"}`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-3 max-w-xl text-[1rem] leading-relaxed 2xl:text-[1.05rem] ${light ? "text-mint/85" : "text-ink-soft"} ${center ? "mx-auto" : ""}`}>{lead}</p>
      )}
    </Reveal>
  );
}
