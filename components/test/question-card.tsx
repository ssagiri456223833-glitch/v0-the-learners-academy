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
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
              {questionNumber}
            </span>
            <span className="text-sm text-muted-foreground">
              Question {questionNumber}
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleReview}
            className={cn(
              "gap-2",
              isMarkedForReview
                ? "text-[#F59E0B] hover:text-[#F59E0B]/80"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Flag className={cn("h-4 w-4", isMarkedForReview && "fill-current")} />
            {isMarkedForReview ? "Marked" : "Mark for Review"}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Question Text */}
        <p className="text-lg font-medium text-foreground leading-relaxed">
          {question.text}
        </p>

        {/* Options */}
        <RadioGroup
          value={selectedAnswer?.toString() ?? ""}
          onValueChange={(value) => onSelectAnswer(parseInt(value))}
          className="space-y-3"
        >
          {question.options.map((option, index) => (
            <Label
              key={index}
              htmlFor={`option-${index}`}
              className={cn(
                "flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all",
                selectedAnswer === index
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50 hover:bg-muted/50"
              )}
            >
              <RadioGroupItem
                value={index.toString()}
                id={`option-${index}`}
                className="border-primary text-primary"
              />
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-sm font-semibold">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="flex-1 text-foreground">{option}</span>
            </Label>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  )
}
