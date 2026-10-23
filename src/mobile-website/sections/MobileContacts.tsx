"use client";

import { ChevronRight, Clock3, MapPin, Phone } from "lucide-react";
import { content } from "@/shared/data/content";
import { fullAddress, kindergarten, links } from "@/shared/data/kindergarten";
import { InstagramIcon } from "@/shared/ui/BrandIcons";
import { MapEmbed } from "@/shared/ui/MapEmbed";
import { Reveal } from "@/shared/ui/Reveal";
import { Container, Heading, Section } from "../ui";

/** Big tappable rows for phone and Instagram, then address, hours and the map. */
export function MobileContacts() {
  const c = content.contacts;
  return (
    <Section id="contacts">
      <Container>
        <Heading eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

        <Reveal y={8} className="mt-5 grid gap-2">
          <a href={links.tel} className="flex min-h-15 items-center gap-3 rounded-2xl bg-forest px-4 text-milk shadow-leaf active:scale-[0.99]">
            <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span className="min-w-0 flex-1 leading-tight">
              <span className="block text-[0.74rem] text-mint/75">{c.phone}</span>
              <span className="block font-semibold tabular-nums">{kindergarten.phone.display}</span>
            </span>
            <ChevronRight className="h-5 w-5 shrink-0 opacity-70" aria-hidden="true" />
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-15 items-center gap-3 rounded-2xl border border-line bg-paper px-4 text-ink active:scale-[0.99]"
          >
            <InstagramIcon className="h-5 w-5 shrink-0 text-forest" />
            <span className="min-w-0 flex-1 leading-tight">
              <span className="block text-[0.74rem] text-ink-soft">{c.instagram}</span>
              <span className="block truncate font-semibold">{kindergarten.instagram.handle}</span>
            </span>
            <ChevronRight className="h-5 w-5 shrink-0 text-leaf" aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal y={8} className="mt-2 divide-y divide-line rounded-2xl border border-line bg-paper">
          <p className="flex items-start gap-3 px-4 py-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-leaf" aria-hidden="true" />
            <span className="leading-snug">
              <span className="block text-[0.74rem] text-ink-soft">{c.address}</span>
              <span className="block text-[0.92rem] font-medium text-ink">{fullAddress}</span>
            </span>
          </p>
          <p className="flex items-center gap-3 px-4 py-3">
            <Clock3 className="h-5 w-5 shrink-0 text-leaf" aria-hidden="true" />
            <span className="flex-1 text-[0.86rem] text-ink-soft">{c.hours}</span>
            <span className="font-display font-extrabold text-ink tabular-nums">{c.hoursValue}</span>
          </p>
        </Reveal>

        <Reveal y={8} className="mt-4">
          <MapEmbed className="h-64 rounded-3xl border border-line shadow-card min-[400px]:h-72" />
          <div className="mt-2 grid grid-cols-2 gap-2">
            <a href={links.twoGis} target="_blank" rel="noopener noreferrer" className="flex h-11 items-center justify-center rounded-full border-2 border-forest/10 bg-paper text-[0.86rem] font-semibold text-forest">
              {c.twoGis}
            </a>
            <a href={links.yandex} target="_blank" rel="noopener noreferrer" className="flex h-11 items-center justify-center rounded-full border-2 border-forest/10 bg-paper text-[0.86rem] font-semibold text-forest">
              {c.yandex}
            </a>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
