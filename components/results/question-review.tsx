"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, Search, Info, HelpCircle } from "lucide-react"

export function QuestionReview() {
  const reviewQuestions = [
    {
      id: "1",
      number: 1,
      text: "Which of the following is the correct past tense of the verb 'go'?",
      options: ["Goes", "Gone", "Went", "Going"],
      selected: 2,
      correct: 2,
    },
    {
      id: "2",
      number: 2,
      text: "Choose the word that best completes the sentence: 'She is very _______ about her upcoming trip.'",
      options: ["Exciting", "Excited", "Excite", "Excitement"],
      selected: 1,
      correct: 1,
    },
    {
      id: "3",
      number: 3,
      text: "Identify the antonym of 'Generous':",
      options: ["Kind", "Selfish", "Happy", "Strong"],
      selected: 0,
      correct: 1,
    },
  ]

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between border-b border-border pb-6">
        <div className="flex items-center gap-4">
          <Search className="h-5 w-5 text-primary opacity-40" />
          <h2 className="text-[22px] font-semibold text-foreground tracking-tight underline underline-offset-8 decoration-primary/10">Detailed Question Review</h2>
        </div>
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-3">
              <CheckCircle2 className="h-4 w-4 text-success opacity-40" />
              <span className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-60">Correct</span>
           </div>
           <div className="flex items-center gap-3">
              <XCircle className="h-4 w-4 text-destructive opacity-40" />
              <span className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-60">Incorrect</span>
           </div>
        </div>
      </div>

      <div className="space-y-8">
        {reviewQuestions.map((q) => (
          <Card key={q.id} className="border border-border bg-white shadow-sm rounded-lg overflow-hidden group hover:bg-slate-50 transition-colors">
            <CardHeader className="p-8 border-b border-slate-50 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <span className="text-[120px] font-black leading-none italic select-none">#{q.number}</span>
               </div>
               <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4">
                    <span className="h-10 w-10 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center text-[16px] font-semibold text-primary">#{q.number}</span>
                    <CardTitle className="text-[18px] font-semibold text-foreground tracking-tight leading-relaxed max-w-2xl">{q.text}</CardTitle>
                  </div>
                   <Badge variant="outline" className="text-secondary-foreground border-border bg-slate-100/50 font-semibold text-[9px] tracking-[0.2em] px-3 h-6 uppercase font-semibold italic">Verified Answer</Badge>
               </div>
            </CardHeader>
            <CardContent className="p-10">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                 {q.options.map((opt, i) => {
                   const isSelected = i === q.selected
                   const isCorrect = i === q.correct
                   const status = isCorrect ? "correct" : isSelected ? "incorrect" : "neutral"

                   return (
                     <div
                       key={i}
                       className={`flex items-center justify-between p-5 border rounded-md transition-all ${
                         status === 'correct' ? 'border-success bg-success/5 text-success font-semibold shadow-sm' :
                         status === 'incorrect' ? 'border-destructive bg-destructive/5 text-destructive font-semibold shadow-sm' :
                         'border-border bg-white text-foreground/60'
                       }`}
                     >
                       <div className="flex items-center gap-4">
                          <span className="micro-text font-black opacity-30">{String.fromCharCode(65 + i)}</span>
                          <span className="text-[15px] font-medium leading-tight">{opt}</span>
                       </div>
                       {isCorrect && (
                         <CheckCircle2 className="h-4 w-4 text-success" />
                       )}
                       {isSelected && !isCorrect && (
                         <XCircle className="h-4 w-4 text-destructive" />
                       )}
                     </div>
                   )
                 })}
               </div>

               {q.selected !== q.correct && (
                 <div className="mt-8 flex gap-4 p-6 bg-primary/5 border border-primary/10 rounded-md items-start animate-in slide-in-from-top-2 duration-500">
                    <Info className="h-5 w-5 text-primary shrink-0 mt-0.5 opacity-60" />
                    <div className="space-y-1.5">
                       <p className="micro-text text-primary font-semibold uppercase tracking-[0.2em]">Learning Note</p>
                       <p className="text-[14px] leading-[1.6] text-foreground font-medium italic opacity-70">
                          The correct response is "{q.options[q.correct]}". Focus on irregular verb conjugations in the past tense.
                       </p>
                    </div>
                 </div>
               )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
