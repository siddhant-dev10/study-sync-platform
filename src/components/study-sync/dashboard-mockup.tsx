import { BookOpen, CalendarDays, Check, ChevronRight, Flame, MessageSquareText, Sparkles } from "lucide-react";

export function DashboardMockup() {
  return (
    <div className="glass-panel relative mx-auto mt-14 max-w-6xl overflow-hidden rounded-lg p-2 shadow-2xl sm:p-3">
      <div className="flex h-10 items-center gap-2 border-b border-border px-3">
        <span className="size-2.5 rounded-full bg-destructive/80" /><span className="size-2.5 rounded-full bg-glow-amber/80" /><span className="size-2.5 rounded-full bg-glow-mint/80" />
        <div className="mx-auto hidden rounded-md border border-border bg-background/40 px-16 py-1 text-[10px] text-muted-foreground sm:block">app.studysync.com / today</div>
      </div>
      <div className="grid min-h-[390px] grid-cols-1 bg-background/45 md:grid-cols-[180px_1fr_280px]">
        <aside className="hidden border-r border-border p-4 md:block">
          <div className="mb-6 flex items-center gap-2 text-xs font-semibold"><Sparkles className="size-4 text-primary" /> Study Sync</div>
          {[[BookOpen,"Today"],[CalendarDays,"Calendar"],[MessageSquareText,"AI Assistant"]].map(([Icon,label],i) => { const C = Icon as typeof BookOpen; return <div key={String(label)} className={`mb-2 flex items-center gap-2 rounded-md px-3 py-2 text-xs ${i===0 ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}><C className="size-3.5" />{String(label)}</div> })}
        </aside>
        <main className="p-5 sm:p-7">
          <p className="text-xs text-muted-foreground">Monday, September 19</p>
          <div className="mt-2 flex items-end justify-between"><div><h3 className="text-2xl font-semibold">Good morning, Maya.</h3><p className="mt-1 text-xs text-muted-foreground">You have 3 lectures and 2 tasks today.</p></div><span className="hidden items-center gap-1 rounded-md bg-glow-amber/10 px-2 py-1 text-xs text-glow-amber sm:flex"><Flame className="size-3" /> 14 day streak</span></div>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {[['08:30','Quantum Physics','PHYS 204'],['11:00','Modern Literature','LIT 112'],['14:30','Calculus II','MATH 202']].map((x,i)=><div key={x[0]} className={`rounded-lg border p-4 ${i===0?'border-primary/25 bg-primary/8':'border-border bg-card/50'}`}><p className="text-[10px] text-muted-foreground">{x[0]}</p><p className="mt-5 text-sm font-medium">{x[1]}</p><p className="mt-1 text-[10px] text-muted-foreground">{x[2]}</p></div>)}
          </div>
          <div className="mt-4 rounded-lg border border-border bg-card/45 p-4">
            <div className="flex items-center justify-between"><p className="text-xs font-semibold">This week</p><p className="text-[10px] text-primary">86% complete</p></div>
            <div className="mt-4 flex h-20 items-end gap-2">{[35,62,46,78,88,60,42].map((h,i)=><div key={i} className="flex-1 rounded-sm bg-primary/15" style={{height:`${h}%`}}><div className="h-full rounded-sm bg-primary/60" /></div>)}</div>
          </div>
        </main>
        <aside className="hidden border-l border-border p-5 md:block">
          <div className="flex items-center gap-2"><span className="grid size-7 place-items-center rounded-md bg-accent/15 text-accent"><Sparkles className="size-3.5" /></span><p className="text-xs font-semibold">AI Study Brief</p></div>
          <p className="mt-5 text-xs leading-5 text-muted-foreground">Your Physics lecture explored wave-particle duality. The key idea:</p>
          <div className="mt-3 rounded-lg border border-primary/20 bg-primary/5 p-3 text-xs leading-5">Light behaves like both a wave and a particle depending on how we observe it.</div>
          <div className="mt-5 space-y-2">{['Review double-slit notes','Complete problem set 4','Ask about uncertainty'].map(x=><div key={x} className="flex items-center gap-2 text-[11px] text-muted-foreground"><span className="grid size-4 place-items-center rounded-sm border border-border"><Check className="size-2.5" /></span>{x}</div>)}</div>
          <button className="mt-6 flex w-full items-center justify-between text-xs text-primary">Open AI Assistant <ChevronRight className="size-3" /></button>
        </aside>
      </div>
    </div>
  );
}