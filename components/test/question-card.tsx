"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Flag, HelpCircle, ShieldCheck } from "lucide-react"
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
    <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden relative">
      <CardHeader className="py-4 px-8 bg-slate-50 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-foreground text-background text-[16px] font-semibold italic shadow-inner">
              {questionNumber}
            </div>
            <div className="flex flex-col">
               <span className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-40">Item Progress</span>
               <span className="text-[13px] font-semibold text-foreground">Question {questionNumber} of 10</span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleReview}
            className={cn(
              "h-9 px-4 gap-3 text-[11px] font-semibold uppercase tracking-widest transition-all rounded-md border border-transparent",
              isMarkedForReview
                ? "bg-warning/5 border-warning/20 text-warning hover:bg-warning/10"
                : "text-muted-foreground hover:text-foreground hover:bg-white hover:border-border"
            )}
          >
            <Flag className={cn("h-3.5 w-3.5", isMarkedForReview && "fill-current")} />
            {isMarkedForReview ? "Pinned for Review" : "Mark for Review"}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-8 sm:p-10 space-y-10">
        {/* Question Text */}
        <div className="flex gap-5">
           <HelpCircle className="h-5 w-5 text-primary opacity-20 shrink-0 mt-1" />
           <h3 className="text-[20px] sm:text-[22px] font-semibold text-foreground leading-[1.4] tracking-tight">
             {question.text}
           </h3>
        </div>

        {/* Answer Options */}
        <RadioGroup
          value={selectedAnswer?.toString() ?? ""}
          onValueChange={(value) => onSelectAnswer(parseInt(value))}
          className="grid grid-cols-1 gap-4"
        >
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index
            return (
              <Label
                key={index}
                htmlFor={`option-${index}`}
                className={cn(
                  "relative flex items-center justify-between p-4 px-6 rounded-lg cursor-pointer transition-all duration-300 border border-border group overflow-hidden",
                  isSelected 
                    ? "bg-primary text-white border-primary shadow-lg -translate-y-0.5" 
                    : "bg-slate-50/30 hover:bg-white hover:border-primary/20 hover:shadow-sm"
                )}
              >
                <div className="flex items-center gap-5 z-10">
                  <span className={cn(
                    "flex items-center justify-center min-w-[32px] h-8 rounded-md border text-[13px] font-semibold tabular-nums transition-all duration-300 group-hover:scale-105",
                    isSelected 
                      ? "bg-white/20 text-white border-white/20" 
                      : "bg-white text-muted-foreground border-border group-hover:text-primary group-hover:border-primary/20"
                  )}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-[15px] font-semibold tracking-tight">{option}</span>
                </div>
                
                {isSelected && (
                   <ShieldCheck className="h-5 w-5 text-white/40 animate-in zoom-in-50 duration-300 z-10" />
                )}

                <RadioGroupItem
                  value={index.toString()}
                  id={`option-${index}`}
                  className="sr-only"
                />
              </Label>
            )
          })}
        </RadioGroup>
      </CardContent>
      
      {/* Footer (Subtle) */}
      <div className="px-8 py-4 bg-slate-50/30 border-t border-border/50 flex items-center justify-between">
         <span className="micro-text text-muted-foreground font-semibold opacity-30 uppercase tracking-widest text-[9px]">Assessment Engine v2.4</span>
         <span className="micro-text text-muted-foreground font-semibold opacity-30 uppercase tracking-widest text-[9px]">Environment Secure</span>
      </div>
    </Card>
  )
}
