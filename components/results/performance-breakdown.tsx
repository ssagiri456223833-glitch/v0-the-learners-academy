"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Sparkles, AlertCircle, CheckCircle2 } from "lucide-react"

interface PerformanceBreakdownProps {
  score: number
  total: number
}

const categories = [
  { name: "Grammar & Tenses", correct: 3, total: 4, feedback: "Keep practicing irregular verbs." },
  { name: "Vocabulary Depth", correct: 2, total: 3, feedback: "Great range of synonyms used." },
  { name: "Reading Comprehension", correct: 2, total: 2, feedback: "Perfect understanding of context." },
  { name: "Sentence Structure", correct: 0, total: 1, feedback: "Review compound sentence rules." },
]

export function PerformanceBreakdown({ score, total }: PerformanceBreakdownProps) {
  const overallPercentage = Math.round((score / total) * 100)
  
  // Simulated feedback logic based on scores
  const getLingoFeedback = () => {
    if (overallPercentage >= 80) return "Excellent proficiency! Your grasp of complex English structures is impressive. Focus on nuances to reach the next level."
    if (overallPercentage >= 60) return "Good progress. You have a solid foundation, but some grammatical inconsistencies remain. Targeted practice in tenses will help."
    return "Keep working! Focus on basic sentence structures and core vocabulary. We recommend 20 minutes of daily reading to improve context memory."
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Category Breakdown */}
        <Card className="lg:col-span-2 border-0 shadow-sm bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="font-heading text-lg font-semibold flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Linguistic Skill Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {categories.map((category) => {
              const percentage = Math.round((category.correct / category.total) * 100)
              return (
                <div key={category.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex flex-col">
                      <span className="font-bold text-foreground text-sm uppercase tracking-tight">{category.name}</span>
                      <span className="text-[10px] text-muted-foreground italic">{category.feedback}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={percentage >= 70 ? "secondary" : "outline"} className="text-[10px] font-bold">
                        {percentage}%
                      </Badge>
                      <span className="text-xs font-mono text-muted-foreground w-8 text-right">
                        {category.correct}/{category.total}
                      </span>
                    </div>
                  </div>
                  <Progress 
                    value={percentage} 
                    className={`h-1.5 ${percentage < 50 ? 'bg-destructive/20' : ''}`}
                  />
                </div>
              )
            })}
          </CardContent>
        </Card>

        {/* Lingo Advice */}
        <Card className="border-0 shadow-sm bg-primary/5 border-t-4 border-primary">
          <CardHeader className="pb-4">
            <CardTitle className="font-heading text-lg font-semibold flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              Institutional Feedback
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 rounded-xl bg-background border shadow-sm">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {getLingoFeedback()}
              </p>
            </div>
            
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Recommended Focus</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-background">Irregular Verbs</Badge>
                <Badge variant="outline" className="bg-background">Compound Sentences</Badge>
                <Badge variant="outline" className="bg-background">Contextual Vocabulary</Badge>
              </div>
            </div>

            <div className="pt-4 border-t flex items-center justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">
              <span>Term Status: Active</span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-green-500" />
                Validated on-the-spot
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
