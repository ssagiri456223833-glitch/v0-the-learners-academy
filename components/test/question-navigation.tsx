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
    <Card className="border-0 shadow-sm sticky top-24">
      <CardHeader className="pb-4">
        <CardTitle className="font-heading text-lg font-semibold">
          Questions
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#10B981]" />
            <span className="text-muted-foreground">Answered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-muted border border-border" />
            <span className="text-muted-foreground">Unanswered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#F59E0B]" />
            <span className="text-muted-foreground">Review</span>
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
                  "w-full aspect-square rounded-lg flex items-center justify-center text-sm font-semibold transition-all",
                  isCurrent && "ring-2 ring-primary ring-offset-2",
                  isReview
                    ? "bg-[#F59E0B] text-white"
                    : isAnswered
                    ? "bg-[#10B981] text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {index + 1}
              </button>
            )
          })}
        </div>

        {/* Summary */}
        <div className="mt-6 pt-4 border-t border-border space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Answered</span>
            <span className="font-semibold text-[#10B981]">
              {Object.keys(answers).length}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Unanswered</span>
            <span className="font-semibold text-foreground">
              {questions.length - Object.keys(answers).length}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Marked for Review</span>
            <span className="font-semibold text-[#F59E0B]">
              {markedForReview.size}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
