"use client";

import { ArrowUpRight, Clock3, FolderOpen } from "lucide-react";
import { content } from "@/shared/data/content";
import { kindergarten } from "@/shared/data/kindergarten";

/**
 * Opens the Google Drive folder. Until its link is set in the data file there is no button at all —
 * only a quiet note, so visitors never meet a dead link.
 */
export function DriveButton({ className = "", light = false }: { className?: string; light?: boolean }) {
  const d = content.documents;
  const url: string = kindergarten.documents.driveUrl;
  if (!url) {
    return (
      <p
        role="status"
        className={`inline-flex items-start gap-2 rounded-2xl px-4 py-3 text-[0.92rem] leading-snug ${light ? "bg-white/10 text-mint" : "bg-mint-soft text-ink-soft"} ${className}`}
      >
        <Clock3 className={`mt-0.5 h-4 w-4 shrink-0 ${light ? "text-honey" : "text-leaf"}`} aria-hidden="true" />
        {d.soon}
      </p>
    );
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 text-[0.95rem] font-semibold shadow-card transition hover:-translate-y-0.5 ${
        light ? "bg-milk text-forest hover:bg-white" : "bg-forest text-milk hover:bg-leaf"
      } ${className}`}
    >
      <FolderOpen className="h-4.5 w-4.5 shrink-0" aria-hidden="true" />
      {d.open}
      <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
    </a>
  );
}
