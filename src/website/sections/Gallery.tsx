"use client";

import { ChevronDown } from "lucide-react";
import { content } from "@/shared/data/content";
import { useGallery } from "@/shared/hooks/useGallery";
import type { ImageMedia, VideoMedia } from "@/shared/lib/media";
import { Leaf, Seeds } from "@/shared/ui/Decor";
import { GalleryEmpty } from "@/shared/ui/GalleryEmpty";
import { GalleryMoreTile } from "@/shared/ui/GalleryMoreTile";
import { GalleryTile } from "@/shared/ui/GalleryTile";
import { Lightbox } from "@/shared/ui/Lightbox";
import { Reveal } from "@/shared/ui/Reveal";
import { VideoBlock } from "@/shared/ui/VideoBlock";
import { Container, Heading, Section } from "../ui";

const fillSpan: Record<number, string> = { 1: "aspect-[4/3]", 2: "col-span-2", 3: "col-span-3" };

/**
 * Compact mosaic inside a soft green panel: one larger photo (2×2) beside four small ones in a
 * 4-column grid, all 4:3 — the block stays under a laptop screen's height. More photos continue
 * in the same grid; the full-size view is the lightbox.
 */
export function Gallery({ items, videos }: { items: ImageMedia[]; videos: VideoMedia[] }) {
  const t = content.gallery;
  const g = useGallery(items, 5);
  // the large first photo takes 4 cells; empty cells of the last row get the Instagram tile
  const gap = (4 - ((g.visible.length + 3) % 4)) % 4;

  return (
    <Section id="gallery" className="py-10 short:py-8">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] rounded-tl-[4.5rem] bg-mint-soft px-10 py-10 short:py-8">
          <Leaf tone="soft" className="pointer-events-none absolute top-6 right-[38%] w-8 rotate-[-30deg] opacity-60" />
          <Seeds className="pointer-events-none absolute right-10 bottom-5 w-12 opacity-80" />

          <div className="relative flex items-end justify-between gap-6">
            <Heading eyebrow={t.eyebrow} title={t.title} />
            {g.canExpand && (
              <Reveal delay={0.05} className="shrink-0">
                <button
                  type="button"
                  onClick={g.toggle}
                  aria-expanded={g.expanded}
                  aria-controls="gallery-grid"
                  className="inline-flex h-11 items-center gap-2 rounded-full border-2 border-forest/10 bg-paper px-5 text-[0.92rem] font-semibold text-forest transition hover:-translate-y-0.5 hover:border-leaf"
                >
                  {g.expanded ? t.less : t.more}
                  {!g.expanded && <span className="rounded-full bg-mint px-2 py-0.5 text-[0.78rem] font-bold text-forest tabular-nums">+{g.hiddenCount}</span>}
                  <ChevronDown className={`h-4.5 w-4.5 transition-transform ${g.expanded ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
              </Reveal>
            )}
          </div>

          <div className="relative mt-7 short:mt-6">
            {items.length === 0 ? (
              <GalleryEmpty />
            ) : (
              <ul id="gallery-grid" className="grid grid-cols-4 gap-3">
                {g.visible.map((item, i) => {
                  const big = i === 0;
                  return (
                    <Reveal as="li" key={item.src} delay={Math.min(i, 5) * 0.04} className={big ? "col-span-2 row-span-2" : "aspect-[4/3]"}>
                      <GalleryTile
                        item={item}
                        index={i}
                        onOpen={g.show}
                        cellRatio={4 / 3}
                        sizes={big ? "(min-width: 1024px) 480px, 50vw" : "(min-width: 1024px) 240px, 25vw"}
                        className={big ? "rounded-[1.75rem] rounded-tl-[3rem] shadow-card" : "rounded-2xl shadow-card"}
                      />
                    </Reveal>
                  );
                })}
                {gap > 0 && (
                  <Reveal as="li" key="more" className={fillSpan[gap]}>
                    <GalleryMoreTile wide={gap > 1} className="rounded-2xl" />
                  </Reveal>
                )}
              </ul>
            )}
            <VideoBlock videos={videos} />
          </div>
        </div>
      </Container>
      <Lightbox items={items} index={g.open} onClose={g.close} onStep={g.step} />
    </Section>
  );
}
