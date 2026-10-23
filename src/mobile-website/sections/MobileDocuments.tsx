"use client";

import { FolderOpen } from "lucide-react";
import { content } from "@/shared/data/content";
import { Leaf } from "@/shared/ui/Decor";
import { DriveButton } from "@/shared/ui/DriveButton";
import { Reveal } from "@/shared/ui/Reveal";
import { Container, Section } from "../ui";

export function MobileDocuments() {
  const d = content.documents;
  return (
    <Section id="documents" className="pb-4">
      <Container>
        <Reveal y={8} className="relative overflow-hidden rounded-[2rem] rounded-br-[3rem] bg-gradient-to-br from-forest to-leaf p-5 text-milk shadow-card">
          <Leaf tone="soft" className="pointer-events-none absolute -right-2 -bottom-3 w-16 rotate-[-30deg] opacity-25" />
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-honey text-forest">
              <FolderOpen className="h-6 w-6" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-[0.74rem] font-bold tracking-wide text-honey uppercase">{d.eyebrow}</span>
              <h2 className="text-[1.3rem] leading-tight font-extrabold">{d.title}</h2>
            </span>
          </div>
          <p className="relative mt-3 text-[0.9rem] leading-relaxed text-mint/85">{d.lead}</p>
          <DriveButton light className="relative mt-4 w-full" />
        </Reveal>
      </Container>
    </Section>
  );
}
