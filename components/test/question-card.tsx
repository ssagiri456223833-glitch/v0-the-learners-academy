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
      <CardHeader className="py-6 px-10 bg-slate-50 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-foreground text-background text-[16px] font-semibold italic shadow-inner">
              {questionNumber}
            </div>
            <div className="flex flex-col">
               <span className="micro-text text-muted-foreground font-semibold uppercase tracking-[0.2em] opacity-40">Matrix Position</span>
               <span className="text-[13px] font-bold text-foreground">Question {questionNumber} of 10</span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleReview}
            className={cn(
              "h-10 px-5 gap-3 text-[11px] font-semibold uppercase tracking-widest transition-all rounded-md border border-transparent",
              isMarkedForReview
                ? "bg-warning/5 border-warning/20 text-warning hover:bg-warning/10"
                : "text-muted-foreground hover:text-foreground hover:bg-white hover:border-border"
            )}
          >
            <Flag className={cn("h-3.5 w-3.5", isMarkedForReview && "fill-current")} />
            {isMarkedForReview ? "Marked for Audit" : "Mark for Review"}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-10 sm:p-14 space-y-12">
        {/* Question Text (Editorial Style) */}
        <div className="flex gap-6">
           <HelpCircle className="h-6 w-6 text-primary opacity-20 shrink-0 mt-1" />
           <h3 className="page-title text-[24px] sm:text-[32px] text-foreground leading-[1.3] tracking-tight italic decoration-primary/10 underline underline-offset-[12px] decoration-1">
             {question.text}
           </h3>
        </div>

        {/* Answer Allocation Matrix */}
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
                  "relative flex items-center justify-between p-6 px-8 rounded-lg cursor-pointer transition-all duration-300 border border-border group overflow-hidden",
                  isSelected 
                    ? "bg-primary text-white border-primary shadow-lg -translate-y-0.5" 
                    : "bg-slate-50/50 hover:bg-white hover:border-primary/30 hover:shadow-sm"
                )}
              >
                <div className="flex items-center gap-6 z-10">
                  <span className={cn(
                    "flex items-center justify-center min-w-[36px] h-9 rounded-md border text-[14px] font-semibold tabular-nums transition-all duration-300 group-hover:scale-110",
                    isSelected 
                      ? "bg-white/20 text-white border-white/20" 
                      : "bg-white text-muted-foreground border-border group-hover:text-primary group-hover:border-primary/20"
                  )}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-[16px] font-bold tracking-tight">{option}</span>
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
      
      {/* Footer Branding (Subtle) */}
      <div className="px-10 py-5 bg-slate-50/30 border-t border-border/50 flex items-center justify-between">
         <span className="micro-text text-muted-foreground font-black opacity-20 uppercase tracking-[0.2em]">Institutional Engine v2.4</span>
         <span className="micro-text text-muted-foreground font-black opacity-20 uppercase tracking-[0.2em] italic">Encryption Layer Active</span>
      </div>
    </Card>
  )
}
