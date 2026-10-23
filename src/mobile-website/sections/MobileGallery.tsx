"use client";

import { ChevronDown } from "lucide-react";
import { content } from "@/shared/data/content";
import { useGallery } from "@/shared/hooks/useGallery";
import type { ImageMedia, VideoMedia } from "@/shared/lib/media";
import { GalleryEmpty } from "@/shared/ui/GalleryEmpty";
import { GalleryMoreTile } from "@/shared/ui/GalleryMoreTile";
import { GalleryTile } from "@/shared/ui/GalleryTile";
import { Lightbox } from "@/shared/ui/Lightbox";
import { Reveal } from "@/shared/ui/Reveal";
import { VideoBlock } from "@/shared/ui/VideoBlock";
import { Container, Heading, Section } from "../ui";

/**
 * Phone layout: the first photo full width, then an even 2-column grid of 4:3 thumbnails —
 * 5 at first, the rest behind «Тағы көрсету». Tapping opens the photo full screen.
 */
export function MobileGallery({ items, videos }: { items: ImageMedia[]; videos: VideoMedia[] }) {
  const t = content.gallery;
  const g = useGallery(items, 5);
  // the first photo spans both columns; an odd cell left at the end gets the Instagram tile
  const gap = (g.visible.length + 1) % 2;
  return (
    <Section id="gallery" className="bg-mint-soft">
      <Container>
        <Heading eyebrow={t.eyebrow} title={t.title} />
        <div className="mt-5">
          {items.length === 0 ? (
            <GalleryEmpty compact />
          ) : (
            <ul id="gallery-grid" className="grid grid-cols-2 gap-2">
              {g.visible.map((item, i) => (
                <Reveal as="li" y={8} key={item.src} delay={Math.min(i, 3) * 0.04} className={i === 0 ? "col-span-2 aspect-[4/3]" : "aspect-[4/3]"}>
                  <GalleryTile
                    item={item}
                    index={i}
                    onOpen={g.show}
                    cellRatio={4 / 3}
                    sizes={i === 0 ? "(min-width: 544px) 544px, 100vw" : "(min-width: 544px) 272px, 50vw"}
                    className={i === 0 ? "rounded-3xl rounded-tl-[2.5rem] shadow-card" : "rounded-2xl shadow-card"}
                  />
                </Reveal>
              ))}
              {gap > 0 && (
                <Reveal as="li" y={8} key="more" className="aspect-[4/3]">
                  <GalleryMoreTile compact className="rounded-2xl" />
                </Reveal>
              )}
            </ul>
          )}
          {g.canExpand && (
            <button
              type="button"
              onClick={g.toggle}
              aria-expanded={g.expanded}
              aria-controls="gallery-grid"
              className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-forest text-[0.92rem] font-semibold text-milk active:scale-[0.98]"
            >
              {g.expanded ? t.less : t.more}
              {!g.expanded && <span className="rounded-full bg-milk/15 px-2 py-0.5 text-[0.75rem] font-bold tabular-nums">+{g.hiddenCount}</span>}
              <ChevronDown className={`h-4.5 w-4.5 transition-transform ${g.expanded ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
          )}
          <VideoBlock videos={videos} compact />
        </div>
      </Container>
      <Lightbox items={items} index={g.open} onClose={g.close} onStep={g.step} />
    </Section>
  );
}
