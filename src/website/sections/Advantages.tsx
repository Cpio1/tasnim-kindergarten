"use client";

import { content } from "@/shared/data/content";
import { Branch, Leaf, Ring, Wave } from "@/shared/ui/Decor";
import { Reveal } from "@/shared/ui/Reveal";
import { factIcons } from "@/shared/ui/icons";
import { Container, Heading, Section } from "../ui";

const accents = ["bg-mint text-forest", "bg-honey-soft text-forest", "bg-leaf-soft text-forest-deep", "bg-milk text-forest"];

/** Deep green band with four confirmed advantages as cards in one row. */
export function Advantages() {
  const a = content.advantages;
  return (
    <Section id="advantages" className="overflow-hidden bg-forest pb-24 short:pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-leaf/25 blur-2xl" />
      <Branch tone="soft" className="pointer-events-none absolute top-6 -left-6 w-32 opacity-25" />
      <Ring tone="soft" className="pointer-events-none absolute right-16 bottom-16 w-40 opacity-40" />

      <Container className="relative">
        <div className="flex items-end justify-between gap-10">
          <Heading eyebrow={a.eyebrow} title={a.title} light />
          <Reveal delay={0.05} className="max-w-sm pb-1 text-[1rem] leading-relaxed text-mint/80">
            {a.lead}
          </Reveal>
        </div>

        <ul className="mt-9 grid grid-cols-4 gap-4 short:mt-8">
          {a.items.map((item, i) => {
            const Icon = factIcons[item.id];
            return (
              <Reveal
                as="li"
                key={item.id}
                delay={0.06 * i}
                className="group relative flex flex-col overflow-hidden rounded-[1.75rem] rounded-bl-lg border border-white/10 bg-white/[0.06] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.1]"
              >
                <Leaf tone="soft" className="pointer-events-none absolute -top-3 -right-2 w-14 rotate-[35deg] opacity-15 transition-transform duration-500 group-hover:rotate-[20deg]" />
                <div className="flex items-center justify-between">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl ${accents[i % accents.length]}`}>
                    <Icon className="h-5.5 w-5.5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-[0.9rem] font-extrabold text-mint/40 tabular-nums" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-[1.12rem] leading-snug font-extrabold text-milk short:mt-4">{item.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-mint/75">{item.text}</p>
              </Reveal>
            );
          })}
        </ul>
      </Container>

      <Wave fill="#FAF9F3" className="absolute inset-x-0 -bottom-px h-14 2xl:h-20" />
    </Section>
  );
}
