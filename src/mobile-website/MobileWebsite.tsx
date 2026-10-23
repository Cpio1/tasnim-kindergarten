"use client";

import type { SiteMedia } from "@/shared/lib/media";
import { MobileAbout } from "./sections/MobileAbout";
import { MobileAdvantages } from "./sections/MobileAdvantages";
import { MobileCallBar } from "./sections/MobileCallBar";
import { MobileContacts } from "./sections/MobileContacts";
import { MobileDocuments } from "./sections/MobileDocuments";
import { MobileFooter } from "./sections/MobileFooter";
import { MobileGallery } from "./sections/MobileGallery";
import { MobileGroups } from "./sections/MobileGroups";
import { MobileHeader } from "./sections/MobileHeader";
import { MobileHero } from "./sections/MobileHero";

/** Composition for phones (< 1024px): its own layout of every section, not a shrunken desktop. */
export function MobileWebsite({ media }: { media: SiteMedia }) {
  return (
    <>
      <MobileHeader />
      <main id="main">
        <MobileHero media={media.hero} />
        <MobileAbout media={media.about} />
        <MobileAdvantages />
        <MobileGroups />
        <MobileGallery items={media.gallery} videos={media.videos} />
        <MobileDocuments />
        <MobileContacts />
      </main>
      <MobileFooter />
      <MobileCallBar />
    </>
  );
}
