"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Flag } from "lucide-react"
import { cn } from "@/lib/utils"

interface Question {
  id: string
  text: string
  options: string[]
}

interface QuestionCardProps {
  questionNumber: number
  question: Question
  selectedAnswer?: number
  isMarkedForReview: boolean
  onSelectAnswer: (index: number) => void
  onToggleReview: () => void
}

export function QuestionCard({
  questionNumber,
  question,
  selectedAnswer,
  isMarkedForReview,
  onSelectAnswer,
  onToggleReview,
}: QuestionCardProps) {
  return (
    <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden">
      <CardHeader className="pb-4 bg-slate-50 border-b border-border">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-md bg-foreground text-background text-[14px] font-semibold">
              {questionNumber}
            </span>
            <span className="text-[14px] text-muted-foreground font-medium uppercase tracking-wide">
              Question {questionNumber}
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleReview}
            className={cn(
              "gap-2 text-[13px] font-medium transition-colors",
              isMarkedForReview
                ? "text-warning hover:text-warning/80"
                : "text-muted-foreground hover:text-foreground hover:bg-white"
            )}
          >
            <Flag className={cn("h-4 w-4", isMarkedForReview && "fill-current")} />
            {isMarkedForReview ? "Marked for Review" : "Mark for Review"}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-8 space-y-8">
        {/* Question Text */}
        <h3 className="text-[20px] font-medium text-foreground leading-[1.6]">
          {question.text}
        </h3>

        {/* Options */}
        <RadioGroup
          value={selectedAnswer?.toString() ?? ""}
          onValueChange={(value) => onSelectAnswer(parseInt(value))}
          className="space-y-3"
        >
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index
            return (
              <Label
                key={index}
                htmlFor={`option-${index}`}
                className={cn(
                  "answer-option",
                  isSelected && "answer-option-selected"
                )}
              >
                <div className="flex items-start gap-4">
                  <span className={cn(
                    "flex items-center justify-center min-w-[32px] h-8 rounded-md border text-[14px] font-semibold transition-colors",
                    isSelected 
                      ? "bg-white text-primary border-white" 
                      : "bg-slate-50 text-muted-foreground border-border group-hover:bg-white"
                  )}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1 pt-1">{option}</span>
                </div>
                <RadioGroupItem
                  value={index.toString()}
                  id={`option-${index}`}
                  className="sr-only" /* Hide radio item but keep functionally for a11y */
                />
              </Label>
            )
          })}
        </RadioGroup>
      </CardContent>
    </Card>
  )
}
