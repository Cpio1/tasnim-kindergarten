"use client";

import { ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react";
import { content } from "@/shared/data/content";
import { fullAddress, kindergarten, links } from "@/shared/data/kindergarten";
import { InstagramIcon } from "@/shared/ui/BrandIcons";
import { MapEmbed } from "@/shared/ui/MapEmbed";
import { Reveal } from "@/shared/ui/Reveal";
import { Container, Heading, Section } from "../ui";

/** Contact list on the left, the interactive map with route links on the right. */
export function Contacts() {
  const c = content.contacts;
  const rows = [
    { icon: Phone, label: c.phone, value: kindergarten.phone.display, href: links.tel, external: false, nums: true },
    { icon: InstagramIcon, label: c.instagram, value: kindergarten.instagram.handle, href: links.instagram, external: true, nums: false },
    { icon: Clock3, label: c.hours, value: c.hoursValue, href: null, external: false, nums: true },
    { icon: MapPin, label: c.address, value: fullAddress, href: null, external: false, nums: false },
  ];

  return (
    <Section id="contacts" className="pt-12 short:pt-10">
      <Container className="grid grid-cols-12 gap-8">
        <div className="col-span-5">
          <Heading eyebrow={c.eyebrow} title={c.title} lead={c.lead} />
          <ul className="mt-7 space-y-2.5 short:mt-6">
            {rows.map(({ icon: Icon, label, value, href, external, nums }, i) => {
              const body = (
                <>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mint text-forest transition-colors group-hover:bg-forest group-hover:text-milk">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1 leading-tight">
                    <span className="block text-[0.78rem] text-ink-soft">{label}</span>
                    <span className={`mt-1 block text-[0.98rem] font-semibold text-ink ${nums ? "tabular-nums" : ""}`}>{value}</span>
                  </span>
                  {href && <ArrowUpRight className="h-4.5 w-4.5 shrink-0 text-leaf transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />}
                </>
              );
              const cls = "group flex items-center gap-3.5 rounded-2xl border border-line bg-paper p-3 pr-4 shadow-card";
              return (
                <Reveal as="li" key={label} delay={0.04 * i}>
                  {href ? (
                    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={`${cls} transition hover:-translate-y-0.5 hover:shadow-lift`}>
                      {body}
                    </a>
                  ) : (
                    <div className={cls}>{body}</div>
                  )}
                </Reveal>
              );
            })}
          </ul>
        </div>

        <Reveal delay={0.08} className="col-span-7 flex flex-col">
          <MapEmbed className="min-h-[22rem] flex-1 rounded-[2rem] rounded-tr-[4rem] border border-line shadow-lift short:min-h-[19rem]" />
          <div className="mt-3 flex gap-2.5">
            <MapLink href={links.twoGis}>{c.twoGis}</MapLink>
            <MapLink href={links.yandex}>{c.yandex}</MapLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

function MapLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full border-2 border-forest/10 bg-paper text-[0.9rem] font-semibold text-forest transition hover:-translate-y-0.5 hover:border-leaf"
    >
      <MapPin className="h-4 w-4" aria-hidden="true" />
      {children}
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}
