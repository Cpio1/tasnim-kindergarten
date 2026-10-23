"use client";

import { Hand, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { content } from "@/shared/data/content";
import { links } from "@/shared/data/kindergarten";

/**
 * Interactive Yandex map (keyless widget) with a marker on the kindergarten.
 * The iframe is created only when the card nears the screen, so neither layout pays for it up front.
 * Until the visitor taps it, a transparent cover keeps page scrolling and wheel scrolling on the page,
 * not inside the map.
 */
export function MapEmbed({ className = "" }: { className?: string }) {
  const c = content.contacts;
  const box = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  const [active, setActive] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={box} className={`relative overflow-hidden bg-mint ${className}`}>
      <span className="absolute inset-0 grid place-items-center text-leaf" aria-hidden="true">
        <MapPin className={`h-9 w-9 ${loaded ? "" : "animate-pulse"}`} />
      </span>
      {near && (
        <iframe
          src={links.mapWidget}
          title={c.map}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          allowFullScreen
        />
      )}
      {!active && (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 flex items-start justify-start bg-transparent p-3"
          aria-label={c.mapActivate}
        >
          <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[0.74rem] font-semibold whitespace-nowrap lg:gap-2 lg:px-3.5 lg:text-[0.8rem] text-forest shadow-card transition group-hover:-translate-y-0.5">
            <Hand className="h-4 w-4" aria-hidden="true" />
            {c.mapActivate}
          </span>
        </button>
      )}
    </div>
  );
}
