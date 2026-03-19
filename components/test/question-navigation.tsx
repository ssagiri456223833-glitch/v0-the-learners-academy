"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

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
    <Card className="border border-border bg-white shadow-sm rounded-lg sticky top-24 sidebar-secondary">
      <CardHeader className="pb-4">
        <CardTitle className="text-[16px] font-semibold text-foreground uppercase tracking-wide">
          Question Grid
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Legend */}
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center gap-2 text-[12px] font-medium transition-opacity">
            <div className="w-3 h-3 rounded-sm bg-success" />
            <span className="text-muted-foreground">Answered</span>
          </div>
          <div className="flex items-center gap-2 text-[12px] font-medium transition-opacity">
            <div className="w-3 h-3 rounded-sm bg-warning" />
            <span className="text-muted-foreground">Marked for Review</span>
          </div>
          <div className="flex items-center gap-2 text-[12px] font-medium transition-opacity">
            <div className="w-3 h-3 rounded-sm bg-slate-100 border border-border" />
            <span className="text-muted-foreground">Unanswered</span>
          </div>
        </div>

        {/* Question Grid */}
        <div className="grid grid-cols-5 gap-2">
          {questions.map((question, index) => {
            const isAnswered = answers[question.id] !== undefined
            const isReview = markedForReview.has(question.id)
            const isCurrent = currentQuestion === index

            return (
              <button
                key={question.id}
                onClick={() => onNavigate(index)}
                className={cn(
                  "w-full aspect-square rounded-md flex items-center justify-center text-[13px] font-semibold transition-all border",
                  isCurrent 
                    ? "border-primary bg-primary text-white shadow-sm ring-1 ring-primary ring-offset-1" 
                    : isReview
                    ? "bg-warning text-white border-warning"
                    : isAnswered
                    ? "bg-success text-white border-success"
                    : "bg-slate-50 text-muted-foreground border-border hover:bg-white hover:text-foreground"
                )}
              >
                {index + 1}
              </button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
