"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { CheckCircle2, Circle, HelpCircle, LayoutGrid } from "lucide-react"

interface QuestionNavigationProps {
  questions: any[]
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
    <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden sticky top-32">
      <CardHeader className="bg-slate-50 border-b border-border py-6 px-8">
        <div className="flex items-center gap-3">
          <LayoutGrid className="h-4 w-4 text-primary opacity-60" />
          <CardTitle className="page-title text-[18px] text-foreground tracking-tight underline underline-offset-4 decoration-primary/20 italic">Question List</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-8 space-y-8">
        <div className="grid grid-cols-5 gap-3">
          {questions.map((q, i) => {
            const isAnswered = answers[q.id] !== undefined
            const isMarked = markedForReview.has(q.id)
            const isCurrent = currentQuestion === i

            return (
              <button
                key={q.id}
                onClick={() => onNavigate(i)}
                className={cn(
                  "h-10 w-10 rounded-md text-[13px] font-semibold flex items-center justify-center transition-all duration-200 border relative",
                  isCurrent 
                    ? "bg-primary text-white border-primary shadow-md scale-110 z-10" 
                    : isAnswered 
                      ? "bg-success/5 border-success/30 text-success" 
                      : "bg-background border-border text-muted-foreground hover:border-primary",
                  isMarked && !isCurrent && "border-warning bg-warning/5 text-warning"
                )}
              >
                {i + 1}
                {isMarked && !isCurrent && (
                   <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-warning rounded-full border-2 border-white" />
                )}
              </button>
            )
          })}
        </div>

        <div className="space-y-4 pt-4 border-t border-slate-50">
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground opacity-60">
            <div className="h-2 w-2 rounded-full bg-success" />
            Answered
          </div>
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground opacity-60">
            <div className="h-2 w-2 rounded-full bg-warning" />
            Review Needed
          </div>
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground opacity-60">
            <div className="h-2 w-2 rounded-full border border-border" />
            Not Answered
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
