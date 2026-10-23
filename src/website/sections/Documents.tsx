"use client";

import { FileText, FolderOpen } from "lucide-react";
import { content } from "@/shared/data/content";
import { Branch, Ring } from "@/shared/ui/Decor";
import { DriveButton } from "@/shared/ui/DriveButton";
import { Reveal } from "@/shared/ui/Reveal";
import { Container, Eyebrow, Section } from "../ui";

/** One wide green card: what is in the folder and a single button to Google Drive. */
export function Documents() {
  const d = content.documents;
  return (
    <Section id="documents" className="py-10 short:py-8">
      <Container>
        <Reveal className="relative grid grid-cols-12 items-center gap-8 overflow-hidden rounded-[2.5rem] rounded-br-[4.5rem] bg-gradient-to-br from-forest via-forest to-leaf px-12 py-11 shadow-lift short:py-9">
          <Branch tone="soft" className="pointer-events-none absolute -right-4 -bottom-10 w-36 opacity-30" />
          <Ring tone="soft" className="pointer-events-none absolute -top-16 left-[42%] w-48 opacity-30" />

          <div className="relative col-span-8">
            <Eyebrow light>{d.eyebrow}</Eyebrow>
            <h2 className="mt-3.5 text-[2rem] leading-[1.12] font-extrabold tracking-tight text-milk short:text-[1.85rem]">{d.title}</h2>
            <p className="mt-3 max-w-lg text-[1rem] leading-relaxed text-mint/85">{d.lead}</p>
            <DriveButton light className="mt-6" />
          </div>

          {/* folder illustration */}
          <div className="relative col-span-4 flex justify-center" aria-hidden="true">
            <div className="relative h-40 w-48">
              <div className="absolute top-3 left-6 h-32 w-36 rotate-[-8deg] rounded-2xl bg-milk/90 shadow-lift">
                <div className="mx-5 mt-6 space-y-2.5">
                  <span className="block h-2 w-20 rounded-full bg-mint" />
                  <span className="block h-2 w-24 rounded-full bg-mint" />
                  <span className="block h-2 w-16 rounded-full bg-mint" />
                </div>
              </div>
              <div className="absolute top-8 left-14 grid h-32 w-36 rotate-[6deg] place-items-center rounded-2xl bg-paper shadow-lift">
                <FileText className="h-10 w-10 text-leaf" />
              </div>
              <span className="absolute -bottom-2 left-2 grid h-14 w-14 place-items-center rounded-2xl bg-honey text-forest shadow-lift">
                <FolderOpen className="h-7 w-7" />
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
