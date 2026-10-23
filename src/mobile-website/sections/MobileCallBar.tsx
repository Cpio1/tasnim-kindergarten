"use client";

import { AnimatePresence, m } from "framer-motion";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { content } from "@/shared/data/content";
import { links } from "@/shared/data/kindergarten";
import { useScrolled } from "@/shared/hooks/useScrolled";

/**
 * Floating call button that appears once the hero's own buttons have scrolled away,
 * and steps aside in the contacts section, which has its own big call button.
 */
export function MobileCallBar() {
  const scrolled = useScrolled(560);
  const [atContacts, setAtContacts] = useState(false);

  useEffect(() => {
    const el = document.getElementById("contacts");
    if (!el) return;
    // "at contacts" from the moment the section reaches the lower part of the screen to the page end
    const io = new IntersectionObserver(([entry]) => setAtContacts(entry.isIntersecting || entry.boundingClientRect.top < 0), {
      rootMargin: "0px 0px -25% 0px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const show = scrolled && !atContacts;
  return (
    <AnimatePresence>
      {show && (
        <m.a
          href={links.tel}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.2 }}
          className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 inline-flex h-12 items-center gap-2 rounded-full bg-forest pr-5 pl-4 text-[0.92rem] font-semibold text-milk shadow-lift ring-4 ring-milk/70"
        >
          <Phone className="h-4.5 w-4.5" aria-hidden="true" />
          {content.header.call}
        </m.a>
      )}
    </AnimatePresence>
  );
}
