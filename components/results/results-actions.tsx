"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RefreshCw, Layout, Download, Share2, ArrowRight, ShieldCheck } from "lucide-react"

export function ResultsActions() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-12 border-t border-border mt-12">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link href="/test">
          <Button variant="outline" className="btn-secondary h-12 px-8 gap-3 group">
            <RefreshCw className="h-4 w-4 text-primary opacity-40 group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-[12px] font-black uppercase tracking-widest">Re-Initialize Protocol</span>
          </Button>
        </Link>
        
        <Link href="/student/dashboard">
          <Button className="btn-primary h-12 px-10 gap-3 group shadow-md">
            <Layout className="h-4 w-4 opacity-40 group-hover:scale-110 transition-transform" />
            <span className="text-[12px] font-black uppercase tracking-widest">Exit to Dashboard</span>
          </Button>
        </Link>
      </div>

      <div className="hidden md:block w-px h-8 bg-border/60 mx-4" />

      <div className="flex items-center gap-4">
        <Button variant="ghost" className="h-12 px-6 gap-3 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all">
          <Download className="h-4 w-4 opacity-40" />
          <span className="text-[11px] font-black uppercase tracking-[0.2em] italic">Export Transcript</span>
        </Button>

        <Button variant="ghost" className="h-12 px-6 gap-3 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all">
          <Share2 className="h-4 w-4 opacity-40" />
          <span className="text-[11px] font-black uppercase tracking-[0.2em] italic">Distribute Results</span>
        </Button>
      </div>
      
      <div className="mt-8 md:mt-0 md:ml-auto flex items-center gap-3 px-4 py-2 border border-border/40 rounded-md bg-slate-50/50">
         <ShieldCheck className="h-3.5 w-3.5 text-success opacity-40" />
         <span className="micro-text text-muted-foreground font-black opacity-30 uppercase tracking-widest tabular-nums">VERIFIED: AUTH-827-01</span>
      </div>
    </div>
  )
}
