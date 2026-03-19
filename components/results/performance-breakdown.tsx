"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BarChart3, AlertCircle, CheckCircle2, ShieldCheck, Activity } from "lucide-react"

interface PerformanceBreakdownProps {
  score: number
  total: number
}

const categories = [
  { name: "Syntax & Tense Logic", correct: 3, total: 4, feedback: "Reinforce irregular verb conjugation protocols." },
  { name: "Lexical Precision", correct: 2, total: 3, feedback: "Satisfactory synonym range identified." },
  { name: "Contextual Analysis", correct: 2, total: 2, feedback: "Optimal contextual comprehension." },
  { name: "Structural Composition", correct: 0, total: 1, feedback: "Review compound sentential architectures." },
]

export function PerformanceBreakdown({ score, total }: PerformanceBreakdownProps) {
  const overallPercentage = Math.round((score / total) * 100)
  
  const getLingoFeedback = () => {
    if (overallPercentage >= 80) return "Exceptional competency. Your grasp of high-tier English structures aligns with professional standards. Maintain focus on subtle cultural nuances."
    if (overallPercentage >= 60) return "Operational proficiency. Core foundations are stable, though structural inconsistencies persist. Targeted drilling in complex tenses is recommended."
    return "Developmental phase. Primary focus should remain on foundational sentence architecture and core lexical acquisition. Daily immersion protocols advised."
  }

  return (
    <div className="space-y-12 institutional-container">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Category Breakdown (Competency Matrix) */}
        <Card className="lg:col-span-2 border border-border bg-white shadow-sm rounded-lg overflow-hidden">
          <CardHeader className="bg-slate-50 border-b border-border py-6 px-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BarChart3 className="h-4 w-4 text-primary opacity-60" />
              <CardTitle className="page-title text-[20px] text-foreground italic tracking-tight underline decoration-primary/10 underline-offset-4 decoration-1">Linguistic Matrix Analysis</CardTitle>
            </div>
            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 font-black text-[9px] tracking-widest px-4 h-6 uppercase font-black italic">Matrix Status: Analyzed</Badge>
          </CardHeader>
          <CardContent className="p-10 sm:p-14 space-y-12">
            {categories.map((category) => {
              const percentage = Math.round((category.correct / category.total) * 100)
              return (
                <div key={category.name} className="space-y-5">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-2">
                      <span className="text-[15px] font-black uppercase tracking-widest text-foreground opacity-80">{category.name}</span>
                      <span className="micro-text text-muted-foreground font-bold italic opacity-40 leading-tight tracking-tight">{category.feedback}</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <Badge variant="outline" className={`text-[10px] font-black italic px-3 h-6 border-border tabular-nums tracking-widest ${percentage >= 70 ? 'text-success bg-success/5 border-success/20' : 'text-foreground bg-slate-50'}`}>
                        {percentage}%
                      </Badge>
                      <span className="text-[14px] font-black italic text-muted-foreground tabular-nums w-12 text-right opacity-40">
                        {category.correct} <span className="text-[10px] opacity-20 not-italic mx-1">/</span> {category.total}
                      </span>
                    </div>
                  </div>
                  <Progress 
                    value={percentage} 
                    className="h-1 bg-slate-100 rounded-full"
                  />
                </div>
              )
            })}
          </CardContent>
        </Card>

        {/* Institutional Advice (Assessor commentary) */}
        <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden flex flex-col">
          <CardHeader className="bg-slate-50 border-b border-border py-6 px-10">
            <div className="flex items-center gap-3">
              <Activity className="h-4 w-4 text-primary opacity-60" />
              <CardTitle className="page-title text-[20px] text-foreground italic tracking-tight underline decoration-primary/10 underline-offset-4 decoration-1">Assessor Commentary</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-10 flex-1 flex flex-col justify-between">
            <div className="space-y-10">
              <div className="p-8 rounded-md bg-slate-50/50 border border-border/60 shadow-[inset_0_2px_10px_rgba(0,0,0,0.01)] relative group">
                <div className="absolute top-4 left-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <AlertCircle className="h-16 w-16 text-primary" />
                </div>
                <p className="text-[16px] leading-[1.7] text-foreground font-medium italic opacity-90 relative z-10 selection:bg-primary/20">
                  "{getLingoFeedback()}"
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="micro-text font-black uppercase tracking-[0.25em] text-primary opacity-40 px-2">Skill Acquisition Focus</p>
                <div className="flex flex-col gap-2.5">
                  <Badge variant="secondary" className="bg-slate-100/50 text-foreground border-border/60 text-[10px] font-black py-2 px-5 rounded-md uppercase tracking-widest italic flex items-center justify-between">
                     <span>Irregular Conjugation</span>
                     <ShieldCheck className="h-3 w-3 opacity-20" />
                  </Badge>
                  <Badge variant="secondary" className="bg-slate-100/50 text-foreground border-border/60 text-[10px] font-black py-2 px-5 rounded-md uppercase tracking-widest italic flex items-center justify-between">
                     <span>Compound Architecture</span>
                     <ShieldCheck className="h-3 w-3 opacity-20" />
                  </Badge>
                  <Badge variant="secondary" className="bg-slate-100/50 text-foreground border-border/60 text-[10px] font-black py-2 px-5 rounded-md uppercase tracking-widest italic flex items-center justify-between">
                     <span>Advanced Lexis Matrix</span>
                     <ShieldCheck className="h-3 w-3 opacity-20" />
                  </Badge>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-border mt-10 flex items-center justify-between opacity-40 group">
              <span className="micro-text font-black text-muted-foreground uppercase tracking-[0.2em] italic">Institutional Protocol v2.4</span>
              <div className="flex items-center gap-2 group-hover:text-success transition-colors">
                <CheckCircle2 className="h-3.5 w-3.5 text-success/60" />
                <span className="micro-text font-black uppercase tracking-tighter">Verified</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
