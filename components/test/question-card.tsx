"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Flag, HelpCircle, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { Question } from "@/lib/types"

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
    <Card variant="content" className="p-0 border-slate-200 overflow-hidden shadow-2xl shadow-slate-200/50">
      {/* Question Header */}
      <div className="py-6 px-10 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-slate-200">
             {questionNumber}
          </div>
          <div className="space-y-0.5">
             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Question Sequence</span>
             <h4 className="text-sm font-bold text-slate-900">Item {questionNumber} of 15</h4>
          </div>
        </div>
        
        <Button
          variant="ghost"
          onClick={onToggleReview}
          className={cn(
            "h-10 px-5 rounded-xl font-bold text-[10px] uppercase tracking-widest gap-2 transition-all",
            isMarkedForReview 
              ? "bg-amber-50 text-amber-600 border border-amber-100" 
              : "text-slate-400 hover:bg-slate-100"
          )}
        >
          <Flag className={cn("h-3.5 w-3.5", isMarkedForReview && "fill-current")} />
          {isMarkedForReview ? "Marked for Review" : "Flag Question"}
        </Button>
      </div>

      <CardContent className="p-10 md:p-12 space-y-12">
        {/* The Question */}
        <div className="space-y-6">
           <div className="flex items-center gap-2">
              <span className="h-1.5 w-8 bg-primary rounded-full" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Knowledge Assessment</span>
           </div>
           <h3 className="text-2xl md:text-3xl font-serif text-slate-900 leading-tight">
             {question.text}
           </h3>
        </div>

        {/* Answer Selection */}
        <RadioGroup
          value={selectedAnswer?.toString() ?? ""}
          onValueChange={(val) => onSelectAnswer(parseInt(val))}
          className="grid grid-cols-1 gap-4"
        >
          {question.options.map((option, idx) => {
            const isSelected = selectedAnswer === idx
            return (
              <Label
                key={idx}
                className={cn(
                  "relative flex items-center justify-between p-6 px-8 rounded-2xl cursor-pointer transition-all duration-300 border-2",
                  isSelected 
                    ? "bg-primary border-primary text-white shadow-xl shadow-primary/20 scale-[1.01]" 
                    : "bg-white border-slate-100 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                )}
              >
                <div className="flex items-center gap-6">
                   <div className={cn(
                     "h-10 w-10 flex items-center justify-center rounded-xl border-2 font-bold transition-all",
                     isSelected ? "bg-white/20 border-white/20 text-white" : "bg-slate-50 border-slate-100 text-slate-400"
                   )}>
                     {String.fromCharCode(65 + idx)}
                   </div>
                   <span className="text-lg font-bold tracking-tight">{option}</span>
                </div>
                
                {isSelected && <ShieldCheck className="h-5 w-5 text-white animate-in zoom-in-50 duration-500" />}
                
                <RadioGroupItem value={idx.toString()} className="sr-only" />
              </Label>
            )
          })}
        </RadioGroup>
      </CardContent>

      {/* Security Footer */}
      <div className="px-10 py-5 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
         <div className="flex items-center gap-2 opacity-30">
            <HelpCircle className="h-3 w-3 text-slate-400" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Contextual help unavailable during exam</span>
         </div>
         <span className="text-[9px] font-bold uppercase tracking-widest text-slate-300">Section 1.A • Assessment Secure</span>
      </div>
    </Card>
  )
}
