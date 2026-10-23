/**
 * Decorative shapes: leaves, sprouts, waves, rings and small blooms. Purely visual —
 * every one is aria-hidden; sizes and positions are chosen by each layout.
 */

type Tone = "forest" | "leaf" | "soft" | "mint" | "honey" | "milk";

const fills: Record<Tone, string> = {
  forest: "#245C43",
  leaf: "#4B956B",
  soft: "#8FC3A0",
  mint: "#DCEEDC",
  honey: "#E9C46A",
  milk: "#FAF9F3",
};

type Props = { className?: string; tone?: Tone };

/** A single leaf with a central vein. */
export function Leaf({ className = "", tone = "leaf" }: Props) {
  return (
    <svg viewBox="0 0 48 64" className={className} aria-hidden="true" focusable="false">
      <path d="M24 2C40 14 46 30 38 46c-4 8-9 13-14 16C19 59 14 54 10 46 2 30 8 14 24 2Z" fill={fills[tone]} />
      <path d="M24 10v50M24 26l-7-6M24 36l8-7M24 46l-8-6" stroke="#FAF9F3" strokeOpacity=".55" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/** Two leaves on a short stem. */
export function Sprout({ className = "", tone = "leaf" }: Props) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true" focusable="false">
      <path d="M40 78V42" stroke={fills.forest} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M40 46C22 48 10 38 8 20c18-2 30 8 32 26Z" fill={fills[tone]} />
      <path d="M40 40c2-18 14-30 32-30-1 19-13 30-32 30Z" fill={fills.soft} />
      <path d="M40 46 18 26M40 40l22-20" stroke="#FAF9F3" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** A curving branch with five leaves — used along edges of panels. */
export function Branch({ className = "", tone = "leaf" }: Props) {
  const leaf = "M0 0c8-10 22-12 30-4-8 10-22 12-30 4Z";
  return (
    <svg viewBox="0 0 160 220" className={className} aria-hidden="true" focusable="false">
      <path d="M20 214C40 160 60 120 120 12" stroke={fills.forest} strokeOpacity=".7" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d={leaf} fill={fills[tone]} transform="translate(36 170) rotate(-150)" />
      <path d={leaf} fill={fills.soft} transform="translate(50 138) rotate(-20)" />
      <path d={leaf} fill={fills[tone]} transform="translate(66 106) rotate(-160)" />
      <path d={leaf} fill={fills.soft} transform="translate(86 76) rotate(-30)" />
      <path d={leaf} fill={fills[tone]} transform="translate(102 46) rotate(-170)" />
    </svg>
  );
}

/** Six-petal bloom — the warm honey accent. */
export function Bloom({ className = "", tone = "honey" }: Props) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <g fill={fills[tone]}>
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <ellipse key={a} cx="20" cy="9" rx="5.5" ry="8.5" transform={`rotate(${a} 20 20)`} />
        ))}
      </g>
      <circle cx="20" cy="20" r="5" fill={fills.milk} />
    </svg>
  );
}

/** Thin dashed ring. */
export function Ring({ className = "", tone = "leaf" }: Props) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
      <circle cx="50" cy="50" r="47" fill="none" stroke={fills[tone]} strokeWidth="1.6" strokeDasharray="2 7" strokeLinecap="round" />
    </svg>
  );
}

/** Three seeds — a tiny filler accent. */
export function Seeds({ className = "", tone = "leaf" }: Props) {
  return (
    <svg viewBox="0 0 40 24" className={className} aria-hidden="true" focusable="false">
      <circle cx="6" cy="16" r="5" fill={fills[tone]} />
      <circle cx="20" cy="7" r="4" fill={fills.soft} />
      <circle cx="33" cy="15" r="3" fill={fills.honey} />
    </svg>
  );
}

/**
 * Soft wave between two sections. `fill` is the colour of the section it leads into;
 * placed at the bottom of the previous one (or `flip` at the top of the next).
 */
export function Wave({ className = "", fill, flip = false, variant = 0 }: { className?: string; fill: string; flip?: boolean; variant?: 0 | 1 }) {
  const d =
    variant === 0
      ? "M0 40C180 8 360 0 560 22s400 40 600 14c120-16 200-24 280-18V80H0Z"
      : "M0 26c160 30 340 40 540 18S900 0 1100 16c140 11 240 26 340 30V80H0Z";
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`pointer-events-none block w-full ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <path d={d} fill={fill} />
    </svg>
  );
}
