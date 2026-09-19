import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5" aria-label="Study Sync home">
      <span className="relative grid size-9 place-items-center overflow-hidden rounded-lg border border-primary/25 bg-primary/10 text-primary shadow-[0_0_24px_color-mix(in_oklab,var(--primary)_18%,transparent)]">
        <Sparkles className="size-4 transition-transform group-hover:rotate-12" />
      </span>
      {!compact && <span className="font-display text-lg font-semibold text-foreground">Study Sync</span>}
    </Link>
  );
}