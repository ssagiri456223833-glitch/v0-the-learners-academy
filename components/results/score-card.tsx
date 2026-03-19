"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Target, CheckCircle, BookOpen, PenTool, Type, HelpCircle, Lightbulb, AlertTriangle, Flame, Activity, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"

interface SkillScore {
  name: string
  score: number
  total: number
  icon: any
  description: string
}

interface ScoreCardProps {
  score: number
  total: number
  percentage: number
}

const mockSkills: SkillScore[] = [
  { name: "Grammar", score: 18, total: 20, icon: Type, description: "Sentence structure & tenses" },
  { name: "Vocabulary", score: 15, total: 20, icon: HelpCircle, description: "Word choice & usage" },
  { name: "Syntax", score: 10, total: 20, icon: BookOpen, description: "Structure & context" },
  { name: "Usage", score: 8, total: 20, icon: PenTool, description: "Expression & grammar" },
]

export function ScoreCard({ score, total, percentage }: ScoreCardProps) {
  const getStatusColor = () => {
    if (percentage >= 80) return "text-success"
    if (percentage >= 60) return "text-warning"
    return "text-destructive"
  }

  const getStatusLabel = () => {
    if (percentage >= 90) return "Mastery Level"
    if (percentage >= 80) return "Advanced Professional"
    if (percentage >= 70) return "Intermediate Plus"
    if (percentage >= 60) return "Foundation Level"
    return "Development Required"
  }

  return (
    <div className="space-y-12 institutional-container">
      {/* Primary Score Summary */}
      <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-primary/20" />
        <CardContent className="p-10 sm:p-14">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="relative flex-shrink-0">
               <div className="w-56 h-56 rounded-full border-[10px] border-slate-50 flex items-center justify-center bg-white shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] relative">
                  <div className="absolute inset-0 bg-primary/5 rounded-full animate-pulse" />
                  <div className="text-center z-10">
                    <div className={cn("text-[64px] font-black leading-none tabular-nums italic", getStatusColor())}>
                      {percentage}<span className="text-[24px] not-italic opacity-40">%</span>
                    </div>
                    <div className="micro-text text-muted-foreground mt-3 font-black tracking-[0.2em] text-[10px] uppercase opacity-40">
                      Aggregate Payload
                    </div>
                  </div>
               </div>
            </div>

            <div className="flex-1 text-center md:text-left space-y-8">
              <div className="space-y-4">
                 <div className="flex items-center justify-center md:justify-start gap-3">
                    <ShieldCheck className="h-4 w-4 text-primary opacity-40" />
                    <span className="micro-text text-muted-foreground font-black uppercase tracking-[0.25em] opacity-40">Audit Complete • Protocol Verified</span>
                 </div>
                 <h2 className="page-title text-[42px] text-foreground leading-tight tracking-tight italic underline decoration-primary/20 underline-offset-8 decoration-2">
                  Evaluation <span className="opacity-40 not-italic">MATRIX</span>
                </h2>
                <div className="text-[24px] font-bold text-primary italic opacity-80 mt-2">
                  {getStatusLabel()}
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-12 pt-8 border-t border-border/60">
                <div className="flex flex-col items-start gap-2 group transition-all duration-300">
                  <div className="flex items-center gap-2">
                     <CheckCircle className="h-4 w-4 text-success opacity-60" />
                     <span className="micro-text text-muted-foreground font-black uppercase tracking-widest opacity-40">Validated Nodes</span>
                  </div>
                  <span className="text-[20px] font-black italic tabular-nums text-foreground">{score} <span className="text-[14px] not-italic opacity-20">CORRECT</span></span>
                </div>
                <div className="flex flex-col items-start gap-2 group transition-all duration-300">
                  <div className="flex items-center gap-2">
                     <Target className="h-4 w-4 text-primary opacity-60" />
                     <span className="micro-text text-muted-foreground font-black uppercase tracking-widest opacity-40">Evaluation Density</span>
                  </div>
                  <span className="text-[20px] font-black italic tabular-nums text-foreground">{total} <span className="text-[14px] not-italic opacity-20">POINTS</span></span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Core Competencies (Matrix Analysis) */}
        <Card className="border border-border bg-white shadow-sm rounded-lg lg:col-span-2 overflow-hidden">
          <div className="bg-slate-50 border-b border-border py-6 px-10 flex items-center justify-between">
             <div className="flex items-center gap-3">
                <Activity className="h-4 w-4 text-primary opacity-60" />
                <h3 className="page-title text-[20px] text-foreground italic tracking-tight underline decoration-primary/10 underline-offset-4 decoration-1">Competency Analytics</h3>
             </div>
             <span className="micro-text text-muted-foreground font-black uppercase tracking-widest opacity-30">Objective Matrix Analysis</span>
          </div>
          <CardContent className="p-10 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {mockSkills.map((skill) => (
                <div key={skill.name} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <skill.icon className="h-4 w-4 text-primary opacity-40" />
                      <span className="text-[14px] font-black uppercase tracking-widest text-foreground opacity-80">{skill.name}</span>
                    </div>
                    <span className="text-[16px] font-black italic tabular-nums text-primary">{skill.score}<span className="text-[11px] not-italic opacity-20 mx-1">/</span>{skill.total}</span>
                  </div>
                  <Progress value={(skill.score / skill.total) * 100} className="h-1.5 rounded-full bg-slate-100" />
                  <p className="micro-text text-muted-foreground font-bold italic opacity-40 tracking-tight leading-tight">{skill.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pedagogical Advice (Institutional Guidance) */}
        <Card className="border border-border bg-white shadow-sm rounded-lg border-t-2 border-primary overflow-hidden">
          <div className="bg-slate-50/50 border-b border-border py-6 px-10">
            <div className="flex items-center gap-3">
              <Lightbulb className="h-5 w-5 text-primary opacity-60" />
              <h3 className="page-title text-[20px] text-foreground italic">Post-Assessment Guidance</h3>
            </div>
          </div>
          <CardContent className="p-10 space-y-10">
            <div className="space-y-6">
              <div className="p-8 bg-slate-50/50 border border-border/60 rounded-md space-y-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Flame className="h-20 w-20 text-primary" />
                </div>
                <div className="flex items-center gap-3">
                  <Flame className="h-4 w-4 text-primary opacity-40" />
                  <span className="micro-text text-primary font-black uppercase tracking-[0.2em]">Strategic Protocol</span>
                </div>
                <p className="text-[15px] leading-[1.7] text-foreground font-medium italic opacity-80">
                  Your performance in **Syntax** and **Usage** indicates a high operational capacity, yet emphasizes a requirement for deeper immersion in advanced sentential architecture.
                </p>
              </div>

              <div className="space-y-5">
                <div className="micro-text font-black uppercase tracking-[0.25em] text-muted-foreground opacity-30 px-2">High-Urgency Nodes</div>
                <div className="grid grid-cols-1 gap-2.5">
                  {mockSkills.slice(2).map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between p-4 px-6 border border-border/40 rounded-md bg-slate-50/20 hover:bg-slate-50 hover:border-border transition-all group">
                      <div className="flex items-center gap-4">
                         <AlertTriangle className="h-3.5 w-3.5 text-warning opacity-40 group-hover:opacity-100 transition-opacity" />
                         <span className="text-[13px] font-bold text-foreground opacity-70 uppercase tracking-tighter">{skill.name}</span>
                      </div>
                      <ArrowRight className="h-3 w-3 text-primary opacity-0 group-hover:opacity-40 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

import { ArrowRight } from "lucide-react"
