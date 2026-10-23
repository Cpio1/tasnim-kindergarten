"use client";

import { Building2 } from "lucide-react";
import { content } from "@/shared/data/content";
import { kindergarten } from "@/shared/data/kindergarten";
import type { Media } from "@/shared/lib/media";
import { ABOUT_SIZES, frameRatio } from "@/shared/lib/media-sizes";
import { Wave } from "@/shared/ui/Decor";
import { MediaView } from "@/shared/ui/MediaView";
import { Reveal } from "@/shared/ui/Reveal";
import { factIcons } from "@/shared/ui/icons";
import { Container, Heading, Section } from "../ui";

/** Text first, facts as one compact list card, the photo last. */
export function MobileAbout({ media }: { media: Media | null }) {
  const a = content.about;
  const ratio = frameRatio(media, 4 / 3, 0.9, 1.5);
  return (
    <Section id="about" className="bg-mint-soft pb-16">
      <Container>
        <Heading eyebrow={a.eyebrow} title={a.title} lead={a.lead} />
        <Reveal y={8}>
          <p className="mt-3 inline-flex items-center gap-1.5 text-[0.84rem] text-ink-soft">
            <Building2 className="h-4 w-4 text-leaf" aria-hidden="true" />
            {a.legal}: <span className="font-semibold text-ink">{kindergarten.legalName}</span>
          </p>
        </Reveal>

        <Reveal y={8} className="mt-5">
          <ul className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-paper shadow-card">
            {a.facts.map((f) => {
              const Icon = factIcons[f.id];
              return (
                <li key={f.id} className="flex items-center gap-3 px-4 py-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-mint text-forest">
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1 text-[0.86rem] text-ink-soft">{f.label}</span>
                  <span className="font-display text-[1rem] font-extrabold text-ink tabular-nums">{f.value}</span>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal y={8} className="mt-5">
          <div className="relative overflow-hidden bg-mint shadow-card ring-4 ring-paper [border-radius:1rem_2rem_1rem_2rem]" style={{ aspectRatio: ratio }}>
            <MediaView media={media} alt={a.photoAlt} sizes={ABOUT_SIZES} placeholder={a.photoSoon} />
          </div>
        </Reveal>
      </Container>
      <Wave fill="#245C43" variant={1} className="absolute inset-x-0 -bottom-px h-8" />
    </Section>
  );
}
