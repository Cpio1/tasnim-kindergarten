"use client";

import { Reveal } from "@/shared/ui/Reveal";

/** Shared building blocks of the phone composition (320–480px, centred on small tablets). */

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[34rem] px-4 min-[375px]:px-5 ${className}`}>{children}</div>;
}

export function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} data-section className={`relative py-10 ${className}`}>
      {children}
    </section>
  );
}

export function Heading({ eyebrow, title, lead, light = false }: { eyebrow: string; title: string; lead?: string; light?: boolean }) {
  return (
    <Reveal y={8}>
      <span className={`inline-flex items-center gap-1.5 text-[0.78rem] font-bold tracking-wide uppercase ${light ? "text-honey" : "text-leaf"}`}>
        <span className={`h-0.5 w-5 rounded-full ${light ? "bg-honey" : "bg-leaf"}`} aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className={`mt-2 text-[1.5rem] leading-[1.18] font-extrabold tracking-tight min-[375px]:text-[1.65rem] ${light ? "text-milk" : "text-ink"}`}>{title}</h2>
      {lead && <p className={`mt-2 text-[0.94rem] leading-relaxed ${light ? "text-mint/80" : "text-ink-soft"}`}>{lead}</p>}
    </Reveal>
  );
}
