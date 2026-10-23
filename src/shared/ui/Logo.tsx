/** Sprout mark + wordmark. The same mark is the favicon (`app/icon.svg`). */
export function Logo({ size = "md", light = false }: { size?: "sm" | "md"; light?: boolean }) {
  const mark = size === "sm" ? "h-9 w-9" : "h-10 w-10";
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 64 64" className={`${mark} shrink-0`} aria-hidden="true" focusable="false">
        <rect width="64" height="64" rx="20" fill={light ? "#FAF9F3" : "#245C43"} />
        <path d="M32 54V32" stroke={light ? "#245C43" : "#FAF9F3"} strokeWidth="4" strokeLinecap="round" />
        <path d="M32 35C20 36 12 29 11 17c12-1 20 6 21 18Z" fill={light ? "#4B956B" : "#8FC3A0"} />
        <path d="M32 31c1-12 9-20 21-20-1 13-9 20-21 20Z" fill={light ? "#8FC3A0" : "#DCEEDC"} />
        <circle cx="47" cy="47" r="4.5" fill="#E9C46A" />
      </svg>
      <span className="flex min-w-0 flex-col leading-none">
        <span className={`font-display font-black tracking-tight ${light ? "text-milk" : "text-forest"} ${size === "sm" ? "text-[1.15rem]" : "text-[1.25rem]"}`}>
          Тасним
        </span>
        <span className={`mt-1 truncate font-medium ${size === "sm" ? "text-[0.64rem]" : "text-[0.68rem] tracking-wide"} ${light ? "text-mint/80" : "text-ink-soft"}`}>
          бөбекжай-балабақшасы
        </span>
      </span>
    </span>
  );
}
