"use client"

import { Button } from "@/components/ui/button"
import { Download, Share2, RotateCcw, Printer, FileText, ChevronRight } from "lucide-react"

export function ResultsActions() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 pb-12">
      <div className="flex bg-slate-100 p-1 rounded-md shadow-inner border border-slate-200">
         <Button className="btn-primary h-12 px-8 gap-4 text-[12px] font-semibold uppercase tracking-[0.2em] shadow-md group">
            <RotateCcw className="h-4 w-4 transition-transform group-hover:-rotate-45" />
            <span className="text-[12px] font-semibold uppercase tracking-widest">Retake Test</span>
            <ChevronRight className="h-4 w-4 opacity-40 group-hover:translate-x-1 transition-transform" />
         </Button>
         <Button variant="ghost" className="h-12 px-8 gap-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-all">
            <Printer className="h-4 w-4 opacity-40 hover:opacity-100" />
            Print Report
         </Button>
      </div>
      
      <div className="flex flex-1 items-center gap-6 justify-end w-full md:w-auto">
         <div className="flex items-center gap-6">
            <Button variant="outline" className="h-12 px-8 rounded-md btn-secondary border-border hover:border-primary gap-3 text-[11px] font-semibold uppercase tracking-[0.15em] transition-all">
              <Download className="h-4 w-4 opacity-40" />
              Download PDF
            </Button>
            <Button variant="outline" className="h-12 px-8 rounded-md btn-secondary border-border hover:border-primary gap-3 text-[11px] font-semibold uppercase tracking-[0.15em] transition-all">
              <Share2 className="h-4 w-4 opacity-40" />
              Share Results
            </Button>
         </div>
      </div>
    </div>
  )
}
