"use client";

import { ArrowUpRight } from "lucide-react";
import { content } from "@/shared/data/content";
import { kindergarten, links } from "@/shared/data/kindergarten";
import { InstagramIcon } from "./BrandIcons";
import { Bloom, Leaf, Sprout } from "./Decor";

/** Shown while public/images has no photos yet: honest, friendly, and points to Instagram. */
export function GalleryEmpty({ compact = false }: { compact?: boolean }) {
  const g = content.gallery;
  return (
    <div className={`relative overflow-hidden border border-line bg-paper text-center shadow-card ${compact ? "rounded-3xl px-5 pt-14 pb-7" : "rounded-[2rem] px-10 py-11"}`}>
      <div className="dots absolute inset-0 text-mint" aria-hidden="true" />
      <Sprout className={`absolute ${compact ? "top-3 right-4 w-11" : "right-12 bottom-6 w-20"}`} />
      <Leaf tone="soft" className={`absolute animate-sway ${compact ? "top-4 left-5 w-6" : "top-8 left-14 w-9"}`} />
      {!compact && <Bloom className="absolute top-10 right-28 w-7" />}
      <div className="relative mx-auto max-w-md">
        <p className={`font-display font-extrabold text-ink ${compact ? "text-[1.15rem]" : "text-[1.4rem]"}`}>{g.empty}</p>
        <p className={`mt-2 text-ink-soft ${compact ? "text-[0.92rem]" : "text-[1rem]"}`}>{g.emptyHint}</p>
        <a
          href={links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-forest px-5 text-[0.92rem] font-semibold text-milk shadow-leaf transition hover:-translate-y-0.5 hover:bg-leaf"
        >
          <InstagramIcon className="h-4.5 w-4.5" />
          {kindergarten.instagram.handle}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
