"use client";

import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useSyncExternalStore } from "react";
import type { Media } from "@/shared/lib/media";
import { Bloom, Leaf, Sprout } from "./Decor";

const noop = () => () => {};
/** false during SSR and hydration, true afterwards. */
export const useMounted = () => useSyncExternalStore(noop, () => true, () => false);

type Props = {
  media: Media | null;
  alt: string;
  /** `sizes` for next/image — keep it identical in both layouts for the same photo, so the browser fetches one file */
  sizes: string;
  priority?: boolean;
  /** shown when there is no file yet */
  placeholder?: string;
  className?: string;
  objectPosition?: string;
};

/**
 * Fills its (relatively positioned) parent with a photo, a muted looping video, or an illustrated
 * placeholder until the real file is added to /public.
 */
export function MediaView({ media, alt, sizes, priority = false, placeholder, className = "", objectPosition = "center" }: Props) {
  if (!media) return <MediaPlaceholder label={placeholder} className={className} />;
  if (media.kind === "image") {
    return (
      <Image
        src={media.src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${className}`}
        style={{ objectPosition }}
      />
    );
  }
  return <AutoVideo media={media} label={alt} sizes={sizes} className={className} />;
}

/**
 * Background video: always muted, inline and looping, with the poster as the static cover.
 * The <video> element exists only after hydration — so the server HTML of the hidden layout
 * never downloads a second copy — and it plays only while on screen. With reduced motion or
 * data saver on, it stays on the poster.
 */
function AutoVideo({ media, label, sizes, className }: { media: Extract<Media, { kind: "video" }>; label: string; sizes: string; className: string }) {
  const mounted = useMounted();
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;
    const still = reduce || saveData;
    if (still) video.pause();
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !still) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [mounted]);

  return (
    <>
      {media.poster && <Image src={media.poster.src} alt="" fill sizes={sizes} className={`object-cover ${className}`} />}
      {mounted && (
        <video
          ref={ref}
          className={`absolute inset-0 h-full w-full object-cover ${className}`}
          poster={media.poster?.src}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          disablePictureInPicture
          aria-label={label}
        >
          <source src={media.src} type={media.type} />
        </video>
      )}
    </>
  );
}

/**
 * Calm, on-brand illustration shown until a real photo is added to /public — never a stock photo
 * pretending to be the kindergarten. Soft green meadow, a sprout and a few leaves.
 */
export function MediaPlaceholder({ label, className = "", compact = false, tone = 0 }: { label?: string; className?: string; compact?: boolean; tone?: number }) {
  const sky = ["from-mint to-milk", "from-honey-soft to-milk", "from-mint-soft to-mint"][tone % 3];
  return (
    <div className={`absolute inset-0 overflow-hidden bg-gradient-to-b ${sky} ${className}`}>
      <svg viewBox="0 0 400 120" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-[36%] w-full" aria-hidden="true">
        <path d="M0 64C80 30 150 38 220 62s120 30 180-4v62H0Z" fill="#8FC3A0" opacity=".55" />
        <path d="M0 90c90-32 180-36 260-10 56 18 100 16 140 2v38H0Z" fill="#4B956B" opacity=".45" />
      </svg>
      {compact ? (
        <Sprout className="absolute bottom-[16%] left-1/2 w-[26%] max-w-24 -translate-x-1/2" />
      ) : (
        <>
          <Sprout className="absolute bottom-[18%] left-1/2 w-[30%] max-w-40 -translate-x-1/2" />
          <Leaf tone="soft" className="absolute top-[30%] left-[16%] w-[8%] max-w-10 animate-sway" />
          <Leaf className="absolute top-[40%] right-[18%] w-[6%] max-w-8 rotate-45 animate-sway [animation-delay:-3s]" />
          <Bloom className="absolute top-[22%] right-[28%] w-[6%] max-w-8" />
        </>
      )}
      {label && (
        <span className="absolute inset-x-0 top-[11%] flex justify-center px-6">
          <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-center text-[0.8rem] font-medium text-ink-soft shadow-card">
            <ImageIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
            {label}
          </span>
        </span>
      )}
    </div>
  );
}
