"use client";

import { ArrowUpRight } from "lucide-react";
import { content } from "@/shared/data/content";
import { kindergarten, links } from "@/shared/data/kindergarten";
import { InstagramIcon } from "./BrandIcons";
import { Leaf } from "./Decor";

/** Fills the empty cells of the gallery's last row with a link to Instagram, so the grid ends evenly. */
export function GalleryMoreTile({ compact = false, wide = false, className = "" }: { compact?: boolean; wide?: boolean; className?: string }) {
  return (
    <a
      href={links.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex h-full w-full overflow-hidden border border-dashed border-leaf-soft bg-paper/70 text-forest transition hover:border-leaf hover:bg-paper ${
        wide ? "flex-row items-center gap-4 px-6" : "flex-col items-center justify-center gap-1.5 px-3 text-center"
      } ${className}`}
    >
      <Leaf tone="soft" className="pointer-events-none absolute -right-2 -bottom-3 w-12 rotate-[-30deg] opacity-30" />
      <span className={`grid shrink-0 place-items-center rounded-2xl bg-mint transition-colors group-hover:bg-forest group-hover:text-milk ${compact ? "h-9 w-9" : "h-12 w-12"}`}>
        <InstagramIcon className={compact ? "h-4.5 w-4.5" : "h-5.5 w-5.5"} />
      </span>
      <span className={`relative min-w-0 leading-tight ${wide ? "flex-1" : ""}`}>
        <span className={`block font-display font-extrabold text-ink ${compact ? "text-[0.86rem]" : "text-[1.05rem]"}`}>{content.gallery.moreOnInstagram}</span>
        <span className={`mt-0.5 block truncate text-ink-soft ${compact ? "text-[0.72rem]" : "text-[0.85rem]"}`}>{kindergarten.instagram.handle}</span>
      </span>
      {wide && <ArrowUpRight className="relative h-5 w-5 shrink-0 text-leaf transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />}
    </a>
  );
}
