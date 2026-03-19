"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BarChart3, AlertCircle, CheckCircle2 } from "lucide-react"

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
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Category Breakdown */}
        <Card className="lg:col-span-2 border border-border bg-white shadow-sm rounded-lg overflow-hidden">
          <CardHeader className="bg-slate-50 border-b border-border py-6 px-8">
            <CardTitle className="text-[18px] font-semibold italic flex items-center gap-3 tracking-tight">
              <BarChart3 className="h-4 w-4 text-primary opacity-60" />
              Linguistic Competency Matrix
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            {categories.map((category) => {
              const percentage = Math.round((category.correct / category.total) * 100)
              return (
                <div key={category.name} className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="text-[14px] font-bold text-foreground uppercase tracking-tight">{category.name}</span>
                      <span className="micro-text text-muted-foreground font-medium italic opacity-60">{category.feedback}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className={`text-[10px] font-bold px-2 py-0.5 border-border ${percentage >= 70 ? 'text-success' : 'text-foreground'}`}>
                        {percentage}%
                      </Badge>
                      <span className="text-[12px] font-medium text-muted-foreground w-12 text-right">
                        {category.correct} / {category.total}
                      </span>
                    </div>
                  </div>
                  <Progress 
                    value={percentage} 
                    className="h-1 bg-slate-100"
                  />
                </div>
              )
            })}
          </CardContent>
        </Card>

        {/* Institutional Advice */}
        <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden flex flex-col">
          <CardHeader className="bg-slate-50 border-b border-border py-6 px-8">
            <CardTitle className="text-[18px] font-semibold italic flex items-center gap-3 tracking-tight">
              <AlertCircle className="h-4 w-4 text-primary opacity-60" />
              Assessor Commentary
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 flex-1 flex flex-col justify-between">
            <div className="space-y-8">
              <div className="p-6 rounded-md bg-slate-50 border border-border shadow-inner">
                <p className="text-[14px] leading-relaxed text-foreground font-medium italic">
                  "{getLingoFeedback()}"
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="micro-text font-black uppercase tracking-widest text-primary opacity-40">Developmental Focus</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-slate-100 text-foreground border-border text-[10px] font-bold py-1 px-3">Irregular Conjugation</Badge>
                  <Badge variant="secondary" className="bg-slate-100 text-foreground border-border text-[10px] font-bold py-1 px-3">Compound Architecture</Badge>
                  <Badge variant="secondary" className="bg-slate-100 text-foreground border-border text-[10px] font-bold py-1 px-3">Advanced Lexis</Badge>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border mt-8 flex items-center justify-between">
              <span className="micro-text font-black text-muted-foreground opacity-30 uppercase tracking-widest">Protocol v2.4</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 text-success" />
                <span className="micro-text font-bold text-success uppercase tracking-tighter">Verified</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
