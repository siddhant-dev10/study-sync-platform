import { Link, useRouter } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight, LogOut, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

const nav = [{to:"/features",label:"Features"},{to:"/downloads",label:"Downloads"},{to:"/about",label:"About"},{to:"/contact",label:"Contact"}] as const;

export function SiteHeader() {
  const [open,setOpen]=useState(false);
  const [signedIn,setSignedIn]=useState(false);
  const router=useRouter();
  useEffect(()=>{ supabase.auth.getSession().then(({data})=>setSignedIn(Boolean(data.session))); const {data}=supabase.auth.onAuthStateChange((_e,s)=>setSignedIn(Boolean(s))); return ()=>data.subscription.unsubscribe(); },[]);
  async function signOut(){ await router.options.context.queryClient.cancelQueries(); router.options.context.queryClient.clear(); await supabase.auth.signOut(); await router.navigate({to:"/login",replace:true}); }
  return <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4"><div className="glass-panel mx-auto flex h-16 max-w-7xl items-center justify-between rounded-lg px-4 sm:px-5"><Logo/><nav className="hidden items-center gap-1 lg:flex">{nav.map(x=><Link key={x.to} to={x.to} className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground" activeProps={{className:"text-foreground bg-secondary"}}>{x.label}</Link>)}</nav><div className="hidden items-center gap-2 lg:flex">{signedIn?<><Button variant="ghost" asChild><Link to="/profile"><UserRound/>Profile</Link></Button><Button variant="outline" onClick={signOut}><LogOut/>Sign out</Button></>:<><Button variant="ghost" asChild><Link to="/login">Log in</Link></Button><Button asChild><Link to="/register">Get started <ArrowUpRight/></Link></Button></>}</div><Button size="icon" variant="ghost" className="lg:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</Button></div>{open&&<div className="glass-panel mx-auto mt-2 max-w-7xl rounded-lg p-3 lg:hidden">{nav.map(x=><Link key={x.to} to={x.to} onClick={()=>setOpen(false)} className="block rounded-md px-3 py-3 text-sm text-muted-foreground">{x.label}</Link>)}<div className="mt-2 grid grid-cols-2 gap-2"><Button variant="outline" asChild><Link to={signedIn?"/profile":"/login"}>{signedIn?"Profile":"Log in"}</Link></Button>{signedIn?<Button onClick={signOut}>Sign out</Button>:<Button asChild><Link to="/register">Get started</Link></Button>}</div></div>}</header>;
}

export function SiteFooter(){return <footer className="border-t border-border px-5 py-12 sm:px-8"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]"><div><Logo/><p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">Connect students, parents and teachers through smarter learning.</p></div><FooterLinks title="Product" items={[['Features','/features'],['Downloads','/downloads'],['Profile','/profile']]}/><FooterLinks title="Company" items={[['About','/about'],['Contact','/contact']]}/><FooterLinks title="Legal" items={[['Privacy','/privacy'],['Terms','/terms']]}/></div><div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between"><p>© 2026 Study Sync. Learning, connected.</p><p>Built for every learner, everywhere.</p></div></footer>}
function FooterLinks({title,items}:{title:string;items:[string,string][]}){return <div><p className="text-sm font-semibold">{title}</p><div className="mt-4 space-y-3">{items.map(([label,to])=><Link key={to} to={to} className="block text-sm text-muted-foreground transition hover:text-foreground">{label}</Link>)}</div></div>}

export function SiteLayout({children}:{children:React.ReactNode}){return <><SiteHeader/><main>{children}</main><SiteFooter/></>}