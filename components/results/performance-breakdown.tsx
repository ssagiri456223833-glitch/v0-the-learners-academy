"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, Minus, Activity, FilePieChart, LayoutGrid } from "lucide-react"

interface PerformanceBreakdownProps {
  score: number
  total: number
}

export function PerformanceBreakdown({ score, total }: PerformanceBreakdownProps) {
  const percentage = (score / total) * 100

  const categories = [
    { name: "Grammar & Structure", score: 85, trend: "up" },
    { name: "Vocabulary & Usage", score: 72, trend: "down" },
    { name: "Reading Comprehension", score: 90, trend: "up" },
    { name: "Writing Skills", score: 65, trend: "neutral" },
  ]

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="h-4 w-4 text-success" />
      case "down": return <TrendingDown className="h-4 w-4 text-destructive" />
      default: return <Minus className="h-4 w-4 text-muted-foreground opacity-40" />
    }
  }

  return (
    <div className="space-y-12">
      {/* Category Breakdown */}
      <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden relative">
           <div className="bg-slate-50 border-b border-border py-4 px-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                 <FilePieChart className="h-4 w-4 text-primary opacity-60" />
                 <h3 className="page-title text-[20px] text-foreground italic tracking-tight underline decoration-primary/10 underline-offset-4 decoration-1">Skill Performance Analysis</h3>
              </div>
            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 font-semibold text-[9px] tracking-widest px-4 h-6 uppercase font-semibold italic">Status: Analyzed</Badge>
          </div>
          <CardContent className="p-10">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
               {categories.map((cat) => (
                 <div key={cat.name} className="space-y-4">
                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-4">
                       <span className="text-[14px] font-semibold uppercase tracking-widest text-foreground opacity-80">{cat.name}</span>
                       {getTrendIcon(cat.trend)}
                     </div>
                     <span className="text-[17px] font-semibold italic tabular-nums text-primary">{cat.score}%</span>
                   </div>
                   <Progress value={cat.score} className="h-1.5 rounded-full bg-slate-100" />
                 </div>
               ))}
             </div>
          </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <Card className="border border-border bg-white shadow-sm rounded-lg p-8 space-y-4 transition-all hover:bg-slate-50 group">
            <div className="flex items-center gap-3">
               <Activity className="h-4 w-4 text-primary opacity-40 group-hover:opacity-100 transition-opacity" />
               <h4 className="micro-text font-semibold uppercase tracking-widest opacity-60 text-muted-foreground">Highest Skill</h4>
            </div>
            <p className="text-[20px] font-semibold text-foreground tracking-tight underline decoration-primary/10 underline-offset-4">Grammar Accuracy</p>
         </Card>
         <Card className="border border-border bg-white shadow-sm rounded-lg p-8 space-y-4 transition-all hover:bg-slate-50 group">
            <div className="flex items-center gap-3">
               <Activity className="h-4 w-4 text-primary opacity-40 group-hover:opacity-100 transition-opacity" />
               <h4 className="micro-text font-semibold uppercase tracking-widest opacity-60 text-muted-foreground">Focus Area</h4>
            </div>
            <p className="text-[20px] font-semibold text-foreground tracking-tight underline decoration-primary/10 underline-offset-4">Writing Fluency</p>
         </Card>
         <Card className="border border-border bg-white shadow-sm rounded-lg p-8 space-y-4 transition-all hover:bg-slate-50 group">
            <div className="flex items-center gap-3">
               <Activity className="h-4 w-4 text-primary opacity-40 group-hover:opacity-100 transition-opacity" />
               <h4 className="micro-text font-semibold uppercase tracking-widest opacity-60 text-muted-foreground">Total Questions</h4>
            </div>
            <p className="text-[20px] font-semibold text-foreground tracking-tight underline decoration-primary/10 underline-offset-4">40 Items Checked</p>
         </Card>
      </div>
    </div>
  )
}
