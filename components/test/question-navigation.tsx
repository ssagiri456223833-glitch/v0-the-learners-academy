"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Activity, ShieldCheck, Flag, CheckCircle2 } from "lucide-react"

interface Question {
  id: string
  text: string
  options: string[]
}

interface QuestionNavigationProps {
  questions: Question[]
  currentQuestion: number
  answers: Record<string, number>
  markedForReview: Set<string>
  onNavigate: (index: number) => void
}

export function QuestionNavigation({
  questions,
  currentQuestion,
  answers,
  markedForReview,
  onNavigate,
}: QuestionNavigationProps) {
  return (
    <Card className="border border-border bg-white shadow-sm rounded-lg sticky top-28 sidebar-secondary overflow-hidden">
      <CardHeader className="bg-slate-50 border-b border-border py-6 px-8">
        <div className="flex items-center gap-3">
          <Activity className="h-4 w-4 text-primary opacity-60" />
          <CardTitle className="page-title text-[18px] text-foreground tracking-tight underline underline-offset-4 decoration-primary/20 italic">Question Matrix</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-8 space-y-8">
        {/* Status Protocol Legend */}
        <div className="space-y-3">
           <span className="micro-text text-muted-foreground font-semibold uppercase tracking-[0.2em] opacity-40">Status Protocol</span>
           <div className="grid grid-cols-1 gap-2.5">
              <div className="flex items-center justify-between text-[11px] font-bold text-foreground/60 uppercase tracking-widest bg-slate-50/50 p-2 px-3 rounded-md border border-border/50">
                 <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-success shadow-sm" />
                    <span>Allocated</span>
                 </div>
                 <CheckCircle2 className="h-3 w-3 opacity-20" />
              </div>
              <div className="flex items-center justify-between text-[11px] font-bold text-foreground/60 uppercase tracking-widest bg-slate-50/50 p-2 px-3 rounded-md border border-border/50">
                 <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-warning shadow-sm" />
                    <span>Audit Flag</span>
                 </div>
                 <Flag className="h-3 w-3 opacity-20" />
              </div>
              <div className="flex items-center justify-between text-[11px] font-bold text-foreground/60 uppercase tracking-widest bg-slate-50/50 p-2 px-3 rounded-md border border-border/50">
                 <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-slate-200 shadow-sm" />
                    <span>Pending</span>
                 </div>
                 <ShieldCheck className="h-3 w-3 opacity-20" />
              </div>
           </div>
        </div>

        {/* Interaction Matrix Grid */}
        <div className="space-y-4">
           <span className="micro-text text-muted-foreground font-semibold uppercase tracking-[0.2em] opacity-40">Entry Nodes</span>
           <div className="grid grid-cols-4 gap-3">
             {questions.map((question, index) => {
               const isAnswered = answers[question.id] !== undefined
               const isReview = markedForReview.has(question.id)
               const isCurrent = currentQuestion === index

               return (
                 <button
                   key={question.id}
                   onClick={() => onNavigate(index)}
                   className={cn(
                     "aspect-square rounded-md flex items-center justify-center text-[13px] font-semibold italic transition-all duration-300 border tabular-nums shadow-sm active:scale-95",
                     isCurrent 
                       ? "bg-primary text-white border-primary shadow-md -translate-y-0.5" 
                       : isReview
                       ? "bg-warning text-white border-warning/50"
                       : isAnswered
                       ? "bg-success text-white border-success/50"
                       : "bg-white text-muted-foreground border-border hover:bg-slate-50 hover:text-foreground hover:border-primary/20"
                   )}
                 >
                   {index + 1}
                 </button>
               )
             })}
           </div>
        </div>
        
        {/* Progress Summary Area */}
        <div className="pt-6 border-t border-border">
           <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                 <span className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-40">Consolidation</span>
                 <span className="text-[14px] font-black italic text-primary">{Object.keys(answers).length} / {questions.length}</span>
              </div>
              <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                 <div 
                    className="h-full bg-primary transition-all duration-500" 
                    style={{ width: `${(Object.keys(answers).length / questions.length) * 100}%` }}
                 />
              </div>
           </div>
        </div>
      </CardContent>
    </Card>
  )
}
