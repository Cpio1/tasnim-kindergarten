"use client";

import { m } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { content } from "@/shared/data/content";
import { kindergarten, links } from "@/shared/data/kindergarten";
import type { Media } from "@/shared/lib/media";
import { HERO_SIZES, frameRatio } from "@/shared/lib/media-sizes";
import { InstagramIcon } from "@/shared/ui/BrandIcons";
import { Leaf, Wave } from "@/shared/ui/Decor";
import { MediaView } from "@/shared/ui/MediaView";
import { Container } from "../ui";

/**
 * Phone hero: title first, then the photo full width, then greeting and two thumb-sized buttons.
 * Two small leaves only, no looping animations.
 */
export function MobileHero({ media }: { media: Media | null }) {
  const h = content.hero;
  const ratio = frameRatio(media, 4 / 3, 0.75, 1.5);

  return (
    <section id="home" data-section className="relative overflow-hidden bg-milk pt-19 pb-12">
      <div aria-hidden="true" className="pointer-events-none absolute -top-16 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,#DCEEDC,transparent)]" />

      <Container className="relative">
        <m.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <p className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-mint px-3 py-1 text-[0.76rem] font-medium text-forest">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate">{h.place}</span>
          </p>
          <h1 className="mt-3.5">
            <span className="block text-[2.4rem] leading-[1] font-black tracking-tight text-forest min-[375px]:text-[2.7rem] min-[430px]:text-[2.95rem]">{h.title}</span>
            <span className="mt-1.5 block text-[1.3rem] leading-[1.15] font-extrabold text-ink min-[375px]:text-[1.45rem]">{h.subtitle}</span>
          </h1>
        </m.div>

        <m.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }} className="relative mt-5">
          <div aria-hidden="true" className="absolute inset-0 translate-x-2.5 translate-y-2.5 frame-leaf-sm bg-mint" />
          <div className="relative overflow-hidden frame-leaf-sm bg-mint shadow-card ring-4 ring-paper" style={{ aspectRatio: ratio }}>
            <MediaView media={media} alt={h.photoAlt} sizes={HERO_SIZES} priority placeholder={h.photoSoon} />
          </div>
          <Leaf tone="soft" className="absolute -top-3 right-5 w-7 rotate-[25deg]" />
          <Leaf className="absolute -bottom-3 left-6 w-5 rotate-[-40deg]" />
        </m.div>

        <m.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.14 }} className="mt-6 text-[0.98rem] leading-relaxed text-ink-soft">
          {h.greeting}
        </m.p>

        <div className="mt-5 grid grid-cols-[1fr_auto] gap-2.5">
          <a href={links.tel} className="flex h-13 items-center justify-center gap-2 rounded-full bg-forest px-5 font-semibold text-milk shadow-leaf active:scale-[0.98]">
            <Phone className="h-4.5 w-4.5" aria-hidden="true" />
            {h.call}
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram: ${kindergarten.instagram.handle}`}
            className="grid h-13 w-13 place-items-center rounded-full bg-mint text-forest active:scale-95"
          >
            <InstagramIcon className="h-5.5 w-5.5" />
          </a>
        </div>

        <ul className="mt-6 grid grid-cols-2 gap-2">
          {h.facts.map((f) => (
            <li key={f.label} className="rounded-2xl border border-line bg-paper px-3 py-3 min-[375px]:px-3.5">
              <span className="block font-display text-[1rem] leading-tight font-extrabold whitespace-nowrap text-forest tabular-nums min-[375px]:text-[1.08rem]">{f.value}</span>
              <span className="mt-0.5 block text-[0.76rem] text-ink-soft">{f.label}</span>
            </li>
          ))}
        </ul>
      </Container>

      <Wave fill="#EDF6EC" className="absolute inset-x-0 -bottom-px h-8" />
    </section>
  );
}
