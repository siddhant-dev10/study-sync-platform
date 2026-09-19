import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase text-primary">{children}</div>;
}

export function PageHero({ eyebrow, title, copy, children }: { eyebrow: string; title: string; copy: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-36 sm:px-8 lg:px-12 lg:pb-24 lg:pt-44">
      <div className="pointer-events-none absolute left-1/2 top-24 h-64 w-3/4 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-shine mx-auto max-w-4xl text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{copy}</p>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, copy, align = "left" }: { eyebrow: string; title: string; copy?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-5xl">{title}</h2>
      {copy && <p className="mt-4 leading-7 text-muted-foreground">{copy}</p>}
    </div>
  );
}

export function FeatureCard({ icon: Icon, title, copy, children }: { icon: LucideIcon; title: string; copy: string; children?: ReactNode }) {
  return (
    <article className="glass-soft group rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/25">
      <span className="mb-5 grid size-10 place-items-center rounded-lg bg-primary/10 text-primary"><Icon className="size-5" /></span>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p>
      {children}
    </article>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return <div><div className="font-display text-2xl font-semibold text-foreground">{value}</div><div className="mt-1 text-xs text-muted-foreground">{label}</div></div>;
}