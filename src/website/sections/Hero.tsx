"use client";

import { m } from "framer-motion";
import { ArrowDown, Clock3, MapPin, Phone } from "lucide-react";
import { content } from "@/shared/data/content";
import { kindergarten, links } from "@/shared/data/kindergarten";
import type { Media, VideoMedia } from "@/shared/lib/media";
import { HERO_SIZES, frameRatio } from "@/shared/lib/media-sizes";
import { scrollToSection } from "@/shared/lib/scroll";
import { InstagramIcon } from "@/shared/ui/BrandIcons";
import { Bloom, Branch, Leaf, Ring, Seeds, Wave } from "@/shared/ui/Decor";
import { MediaView } from "@/shared/ui/MediaView";
import { Container } from "../ui";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Laptop-first hero: text on the left, the main photo in a leaf-shaped frame on the right.
 * Everything is sized to sit inside a 1366×768 / 1440×900 screen with the browser chrome on.
 */
export function Hero({ media, video }: { media: Media | null; video: VideoMedia | null }) {
  const h = content.hero;
  const ratio = frameRatio(media, 4 / 5, 0.75, 1.3);

  return (
    <section id="home" data-section className="relative overflow-hidden bg-milk">
      {/* soft light from the upper right, behind the photo */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-[-10%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(closest-side,#DCEEDC,transparent)]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-10 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,#F8EDCF,transparent)] opacity-80" />

      <Container className="relative grid grid-cols-12 items-center gap-8 pt-28 pb-20 short:pt-22 short:pb-16 2xl:pt-32 2xl:pb-24">
        <div className="col-span-7 xl:col-span-6">
          <m.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-paper/80 px-3.5 py-1.5 text-[0.82rem] font-medium text-ink-soft"
          >
            <MapPin className="h-4 w-4 text-leaf" aria-hidden="true" />
            {h.place}
          </m.p>

          <m.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05, ease }} className="mt-5">
            <span className="block text-[3.5rem] leading-[1] font-black tracking-tight text-forest short:text-[3.1rem] 2xl:text-[4.1rem]">{h.title}</span>
            <span className="mt-2 block text-[1.85rem] leading-[1.15] font-extrabold text-ink short:text-[1.65rem] 2xl:text-[2.1rem]">{h.subtitle}</span>
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className="mt-5 max-w-[31rem] text-[1.04rem] leading-relaxed text-ink-soft short:mt-4 short:text-[1rem] 2xl:text-[1.1rem]"
          >
            {h.greeting}
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease }}
            className="mt-7 flex flex-wrap items-center gap-3 short:mt-6"
          >
            <a
              href={links.tel}
              className="inline-flex h-12 items-center gap-2.5 rounded-full bg-forest pr-6 pl-2 text-[0.95rem] font-semibold text-milk shadow-leaf transition hover:-translate-y-0.5 hover:bg-leaf"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-milk/15">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              {h.call}
            </a>
            <a
              href="#contacts"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contacts");
              }}
              className="inline-flex h-12 items-center gap-2 rounded-full border-2 border-forest/15 bg-paper px-5 text-[0.95rem] font-semibold text-forest transition hover:-translate-y-0.5 hover:border-leaf"
            >
              {h.contacts}
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram: ${kindergarten.instagram.handle}`}
              className="grid h-12 w-12 place-items-center rounded-full bg-mint text-forest transition hover:-translate-y-0.5 hover:bg-leaf-soft"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </m.div>

          <m.ul
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26, ease }}
            className="mt-9 grid max-w-[34rem] grid-cols-4 gap-2.5 short:mt-7"
          >
            {h.facts.map((f, i) => (
              <li
                key={f.label}
                className={`rounded-2xl border border-line bg-paper/90 px-3 py-3 shadow-card ${i % 2 ? "rounded-tl-md" : "rounded-br-md"}`}
              >
                <span className="block font-display text-[1.12rem] leading-tight font-extrabold whitespace-nowrap text-forest tabular-nums short:text-[1.02rem]">{f.value}</span>
                <span className="mt-1 block text-[0.76rem] leading-snug text-ink-soft">{f.label}</span>
              </li>
            ))}
          </m.ul>
        </div>

        <m.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="relative col-span-5 xl:col-span-6"
        >
          <div className="relative mx-auto w-full max-w-[26rem] short:max-w-[22rem] 2xl:max-w-[30rem]">
            {/* layered organic shapes behind the frame */}
            <div aria-hidden="true" className="absolute -inset-5 translate-x-6 translate-y-5 blob-a bg-mint" />
            <div aria-hidden="true" className="absolute -right-10 -bottom-8 h-32 w-32 rounded-full bg-leaf/15" />
            <Ring className="absolute -top-10 -left-12 w-36 animate-spin-slow" />
            <Branch className="absolute -right-16 -bottom-6 w-28 short:w-24" />
            <Leaf tone="soft" className="absolute -top-4 right-6 w-9 animate-sway" />
            <Bloom className="absolute top-1/3 -left-8 w-8 animate-float-slow" />

            <div className="relative overflow-hidden frame-leaf bg-mint shadow-lift ring-6 ring-paper" style={{ aspectRatio: ratio }}>
              <MediaView media={media} alt={h.photoAlt} sizes={HERO_SIZES} priority placeholder={h.photoSoon} />
            </div>

            {video && (
              <div className="absolute -top-6 -right-6 h-28 w-28 overflow-hidden rounded-full shadow-lift ring-4 ring-paper">
                <MediaView media={video} alt={h.photoAlt} sizes="112px" />
              </div>
            )}

            <div className="glass absolute -bottom-5 -left-8 flex items-center gap-3 rounded-2xl rounded-bl-md border border-line py-2.5 pr-4 pl-2.5 shadow-lift">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-honey-soft text-forest">
                <Clock3 className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-[1.05rem] font-extrabold text-ink tabular-nums">{content.contacts.hoursValue}</span>
                <span className="block text-[0.75rem] text-ink-soft">{content.contacts.hours}</span>
              </span>
            </div>
            <Seeds className="absolute -bottom-12 left-1/2 w-12" />
          </div>
        </m.div>
      </Container>

      <Wave fill="#EDF6EC" className="absolute inset-x-0 -bottom-px h-14 2xl:h-20" />
    </section>
  );
}
