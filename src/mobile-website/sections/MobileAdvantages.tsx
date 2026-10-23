"use client";

import { content } from "@/shared/data/content";
import { Leaf, Wave } from "@/shared/ui/Decor";
import { Reveal } from "@/shared/ui/Reveal";
import { factIcons } from "@/shared/ui/icons";
import { Container, Heading, Section } from "../ui";

const accents = ["bg-mint", "bg-honey-soft", "bg-leaf-soft", "bg-milk"];

/** Green band; each advantage is a compact row — icon on the left, text on the right. */
export function MobileAdvantages() {
  const a = content.advantages;
  return (
    <Section id="advantages" className="overflow-hidden bg-forest pb-16">
      <Leaf tone="soft" className="pointer-events-none absolute top-8 right-5 w-10 rotate-[30deg] opacity-25" />
      <Container className="relative">
        <Heading eyebrow={a.eyebrow} title={a.title} lead={a.lead} light />
        <ul className="mt-6 space-y-2.5">
          {a.items.map((item, i) => {
            const Icon = factIcons[item.id];
            return (
              <Reveal as="li" y={8} key={item.id} delay={0.04 * i} className="flex gap-3.5 rounded-3xl rounded-bl-lg border border-white/10 bg-white/[0.06] p-4">
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-forest ${accents[i % accents.length]}`}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <h3 className="text-[1.02rem] leading-snug font-extrabold text-milk">{item.title}</h3>
                  <p className="mt-1 text-[0.86rem] leading-relaxed text-mint/75">{item.text}</p>
                </span>
              </Reveal>
            );
          })}
        </ul>
      </Container>
      <Wave fill="#FAF9F3" className="absolute inset-x-0 -bottom-px h-8" />
    </Section>
  );
}
