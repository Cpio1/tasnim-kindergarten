"use client";

import { Check, Phone } from "lucide-react";
import { content } from "@/shared/data/content";
import { kindergarten, links } from "@/shared/data/kindergarten";
import { Leaf, Sprout } from "@/shared/ui/Decor";
import { Reveal } from "@/shared/ui/Reveal";
import { Container, Heading, Section } from "../ui";

const tones = ["leaf", "soft", "honey"] as const;

/**
 * Six group cards, numbered only — the real names are not known yet and are never invented.
 * A green summary card lists what is the same for every group.
 */
export function Groups() {
  const g = content.groups;
  const numbers = Array.from({ length: kindergarten.groupsCount }, (_, i) => i + 1);

  return (
    <Section id="groups">
      <Container>
        <Heading eyebrow={g.eyebrow} title={g.title} lead={g.lead} />

        <div className="mt-8 grid grid-cols-12 gap-4 short:mt-7">
          <ul className="col-span-8 grid grid-cols-3 gap-4">
            {numbers.map((n, i) => (
              <Reveal
                as="li"
                key={n}
                delay={0.04 * i}
                className="group relative overflow-hidden rounded-[1.6rem] border border-line bg-paper p-4.5 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <Leaf tone={tones[i % 3]} className="pointer-events-none absolute -right-3 -bottom-4 w-16 rotate-[-25deg] opacity-25 transition-transform duration-500 group-hover:rotate-[-10deg]" />
                <span className="grid h-12 w-12 place-items-center bg-forest font-display text-[1.3rem] font-black text-milk [border-radius:1.1rem_0.4rem_1.1rem_0.4rem] tabular-nums">
                  {n}
                </span>
                <h3 className="mt-3.5 text-[1.15rem] font-extrabold text-ink">{g.group(n)}</h3>
                <p className="relative mt-1 flex items-start gap-1.5 text-[0.82rem] leading-snug text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-honey" aria-hidden="true" />
                  {g.nameSoon}
                </p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.1} className="relative col-span-4 flex flex-col overflow-hidden rounded-[1.75rem] rounded-tr-[3.5rem] bg-gradient-to-br from-forest to-leaf p-6 text-milk shadow-lift">
            <Sprout tone="soft" className="pointer-events-none absolute -right-3 -bottom-3 w-28 opacity-30" />
            <h3 className="text-[1.25rem] font-extrabold">{g.summaryTitle}</h3>
            <ul className="mt-4 space-y-3">
              {g.summary.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-[0.93rem] leading-snug text-mint">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-milk/15">
                    <Check className="h-3.5 w-3.5 text-honey" aria-hidden="true" />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
            <div className="min-h-6 flex-1" aria-hidden="true" />
            <a
              href={links.tel}
              className="relative inline-flex h-11 items-center justify-center gap-2 self-start rounded-full bg-milk px-5 text-[0.9rem] font-semibold text-forest transition hover:-translate-y-0.5 hover:bg-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {g.ask}
            </a>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
