import { content } from "@/shared/data/content";

export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-5 focus:py-2.5 focus:font-semibold focus:text-milk"
    >
      {content.skip}
    </a>
  );
}
