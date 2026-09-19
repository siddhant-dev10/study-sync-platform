import { Smartphone, Tablet, Monitor } from "lucide-react";

export function DeviceShowcase() {
  return (
    <div className="relative mt-12 flex min-h-[340px] items-end justify-center overflow-hidden px-3">
      <div className="glass-panel absolute left-[2%] hidden h-64 w-[48%] rotate-[-3deg] rounded-lg p-3 lg:block"><DeviceScreen title="Weekly overview" icon={Monitor} /></div>
      <div className="glass-panel relative z-10 h-80 w-44 rounded-[2rem] p-2 shadow-2xl sm:w-52"><DeviceScreen title="Today" icon={Smartphone} /></div>
      <div className="glass-panel absolute right-[3%] hidden h-72 w-[39%] rotate-[3deg] rounded-xl p-3 md:block"><DeviceScreen title="Study plan" icon={Tablet} /></div>
    </div>
  );
}

function DeviceScreen({ title, icon: Icon }: { title: string; icon: typeof Smartphone }) {
  return <div className="h-full overflow-hidden rounded-lg border border-border bg-background/80 p-4"><div className="flex items-center justify-between"><p className="text-xs font-semibold">{title}</p><Icon className="size-4 text-primary" /></div><div className="mt-5 space-y-3">{[76,58,91].map((w,i)=><div key={i} className="rounded-md border border-border bg-card/60 p-3"><div className="h-1.5 rounded-full bg-muted"><div className="h-full rounded-full bg-primary/65" style={{width:`${w}%`}} /></div><div className="mt-3 h-1 w-2/3 rounded-full bg-muted-foreground/25" /></div>)}</div></div>;
}