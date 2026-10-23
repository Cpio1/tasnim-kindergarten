"use client";

import { Check, Phone } from "lucide-react";
import { content } from "@/shared/data/content";
import { kindergarten, links } from "@/shared/data/kindergarten";
import { Reveal } from "@/shared/ui/Reveal";
import { Container, Heading, Section } from "../ui";

/** Two-column grid of small numbered group cards, then one summary card with a call button. */
export function MobileGroups() {
  const g = content.groups;
  const numbers = Array.from({ length: kindergarten.groupsCount }, (_, i) => i + 1);
  return (
    <Section id="groups">
      <Container>
        <Heading eyebrow={g.eyebrow} title={g.title} lead={g.lead} />
        <ul className="mt-5 grid grid-cols-2 gap-2">
          {numbers.map((n, i) => (
            <Reveal as="li" y={8} key={n} delay={0.03 * i} className="rounded-2xl border border-line bg-paper p-3 shadow-card">
              <div className="flex items-center gap-2.5">
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center font-display text-[1.05rem] font-black tabular-nums [border-radius:0.85rem_0.3rem_0.85rem_0.3rem] ${
                    i % 2 ? "bg-mint text-forest" : "bg-forest text-milk"
                  }`}
                >
                  {n}
                </span>
                <h3 className="text-[1rem] font-extrabold text-ink">{g.group(n)}</h3>
              </div>
              <p className="mt-2 text-[0.74rem] leading-snug text-ink-soft">{g.nameSoon}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal y={8} className="mt-3 rounded-3xl rounded-tr-[2.5rem] bg-gradient-to-br from-forest to-leaf p-5 text-milk shadow-card">
          <h3 className="text-[1.1rem] font-extrabold">{g.summaryTitle}</h3>
          <ul className="mt-3 space-y-2">
            {g.summary.map((s) => (
              <li key={s} className="flex items-start gap-2 text-[0.88rem] leading-snug text-mint">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-honey" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
          <a href={links.tel} className="mt-4 flex h-12 items-center justify-center gap-2 rounded-full bg-milk text-[0.92rem] font-semibold text-forest active:scale-[0.98]">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {g.ask}
          </a>
        </Reveal>
      </Container>
    </Section>
  );
}
