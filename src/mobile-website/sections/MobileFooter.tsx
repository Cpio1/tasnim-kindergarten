"use client";

import { ArrowUp } from "lucide-react";
import { content } from "@/shared/data/content";
import { kindergarten } from "@/shared/data/kindergarten";
import { scrollToSection } from "@/shared/lib/scroll";
import { Wave } from "@/shared/ui/Decor";
import { Logo } from "@/shared/ui/Logo";
import { Container } from "../ui";

export function MobileFooter() {
  const t = content.footer;
  return (
    <footer className="relative mt-4 bg-forest pb-[max(1.5rem,env(safe-area-inset-bottom))] text-mint">
      <Wave fill="#FAF9F3" flip className="absolute inset-x-0 -top-px h-6" />
      <Container className="pt-12">
        <div className="flex items-center justify-between gap-3">
          <Logo size="sm" light />
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            aria-label={t.top}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-milk active:scale-95"
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
        <p className="mt-5 border-t border-white/10 pt-4 text-[0.78rem] leading-relaxed text-mint/60">
          © {new Date().getFullYear()} {kindergarten.legalName}. {t.rights}
        </p>
      </Container>
    </footer>
  );
}
