"use client";

import { Building2 } from "lucide-react";
import { content } from "@/shared/data/content";
import { kindergarten } from "@/shared/data/kindergarten";
import type { Media } from "@/shared/lib/media";
import { ABOUT_SIZES, frameRatio } from "@/shared/lib/media-sizes";
import { Leaf, Sprout, Wave } from "@/shared/ui/Decor";
import { MediaView } from "@/shared/ui/MediaView";
import { Reveal } from "@/shared/ui/Reveal";
import { factIcons } from "@/shared/ui/icons";
import { Container, Heading, Section } from "../ui";

/** Photo on the left, the short story and four key facts on the right. */
export function About({ media }: { media: Media | null }) {
  const a = content.about;
  const ratio = frameRatio(media, 1, 0.85, 1.4);

  return (
    <Section id="about" className="bg-mint-soft pb-24 short:pb-20">
      <Container className="grid grid-cols-12 items-center gap-12">
        <Reveal className="relative col-span-5">
          <div className="relative mx-auto max-w-[25rem] short:max-w-[21rem]">
            <div aria-hidden="true" className="absolute -inset-4 -translate-x-5 translate-y-4 blob-b bg-leaf-soft/35" />
            <div className="relative overflow-hidden bg-mint shadow-lift ring-6 ring-paper [border-radius:1.5rem_3rem_1.5rem_3rem]" style={{ aspectRatio: ratio }}>
              <MediaView media={media} alt={a.photoAlt} sizes={ABOUT_SIZES} placeholder={a.photoSoon} />
            </div>
            <Sprout className="absolute -bottom-6 -left-7 w-20" />
            <Leaf tone="honey" className="absolute -top-5 right-8 w-7 rotate-[30deg]" />
          </div>
        </Reveal>

        <div className="col-span-7">
          <Heading eyebrow={a.eyebrow} title={a.title} />
          <Reveal delay={0.05}>
            <p className="mt-4 text-[1rem] leading-relaxed text-ink-soft 2xl:text-[1.05rem]">{a.lead}</p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-paper px-3.5 py-1.5 text-[0.85rem] text-ink-soft shadow-card">
              <Building2 className="h-4 w-4 text-leaf" aria-hidden="true" />
              {a.legal}: <span className="font-semibold text-ink">{kindergarten.legalName}</span>
            </p>
          </Reveal>

          <ul className="mt-7 grid grid-cols-2 gap-3 short:mt-6">
            {a.facts.map((f, i) => {
              const Icon = factIcons[f.id];
              return (
                <Reveal as="li" key={f.id} delay={0.05 * i} className="group flex items-center gap-3.5 rounded-2xl border border-line bg-paper p-3.5 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mint text-forest transition-colors group-hover:bg-forest group-hover:text-milk">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 leading-tight">
                    <span className="block text-[0.78rem] text-ink-soft">{f.label}</span>
                    <span className="mt-1 block font-display text-[1.12rem] font-extrabold text-ink tabular-nums">{f.value}</span>
                  </span>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </Container>

      <Wave fill="#245C43" variant={1} className="absolute inset-x-0 -bottom-px h-14 2xl:h-20" />
    </Section>
  );
}
