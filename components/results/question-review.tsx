"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Info, ShieldCheck, FileCheck, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

const reviewQuestions = [
  {
    id: "1",
    text: "Which of the following sentences correctly utilizes the present perfect continuous tense?",
    options: [
      "I have been working here for five years.",
      "I am working here since five years.",
      "I worked here for five years.",
      "I have worked here since five years."
    ],
    correctAnswer: 0,
    userAnswer: 0,
    isCorrect: true,
  },
  {
    id: "2",
    text: "Identify the malapropism in this formal request: 'We would like to request a conditional subside for the project.'",
    options: [
      "Conditional",
      "Subside",
      "Request",
      "Project"
    ],
    correctAnswer: 1,
    userAnswer: 2,
    isCorrect: false,
  },
  {
    id: "3",
    text: "Choose the synonym for 'Ephemeral' within a professional context.",
    options: [
      "Permanent",
      "Transient",
      "Substantial",
      "Equitable"
    ],
    correctAnswer: 1,
    userAnswer: 1,
    isCorrect: true,
  },
  {
    id: "4",
    text: "Select the correct preposition: 'The institutional policy is contingent ________ board approval.'",
    options: [
      "to",
      "with",
      "upon",
      "for"
    ],
    correctAnswer: 2,
    userAnswer: 2,
    isCorrect: true,
  },
]

export function QuestionReview() {
  return (
    <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden institutional-container">
      <CardHeader className="bg-slate-50 border-b border-border py-8 px-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <FileCheck className="h-5 w-5 text-primary opacity-60" />
          <CardTitle className="page-title text-[24px] text-foreground italic tracking-tight underline decoration-primary/20 underline-offset-8 decoration-2">Item-Level Audit Trail</CardTitle>
        </div>
        <div className="flex items-center gap-3">
           <Badge variant="outline" className="text-secondary-foreground border-border bg-slate-100/50 font-semibold text-[9px] tracking-[0.2em] px-3 h-6 uppercase font-semibold italic">Matrix Integrity: Locked</Badge>
           <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 font-semibold text-[9px] tracking-[0.2em] px-3 h-6 uppercase font-semibold italic">Verification v2.3</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-10 space-y-10">
        <div className="space-y-10">
          {reviewQuestions.map((question, index) => (
            <div
              key={question.id}
              className={cn(
                "p-8 sm:p-12 rounded-lg border transition-all relative group overflow-hidden",
                question.isCorrect
                  ? "bg-slate-50/30 border-success/20 shadow-[0_2px_10px_rgba(34,197,94,0.02)]"
                  : "bg-slate-50/30 border-destructive/20 shadow-[0_2px_10px_rgba(239,68,68,0.02)]"
              )}
            >
              {/* Background Status Indicator (Decorative) */}
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  {question.isCorrect 
                    ? <CheckCircle className="h-24 w-24 text-success" />
                    : <AlertTriangle className="h-24 w-24 text-destructive" />
                  }
               </div>

              <div className="flex flex-col sm:flex-row items-start gap-10 relative z-10">
                {/* Status Indicator Bubble */}
                <div className="flex-shrink-0 mt-2">
                  <div className={cn(
                    "flex items-center justify-center w-14 h-14 rounded-md border shadow-sm transition-all duration-500 group-hover:scale-110",
                    question.isCorrect 
                      ? "bg-white text-success border-success/30 shadow-success/10" 
                      : "bg-white text-destructive border-destructive/30 shadow-destructive/10"
                  )}>
                    {question.isCorrect ? (
                      <CheckCircle className="h-7 w-7" />
                    ) : (
                      <XCircle className="h-7 w-7" />
                    )}
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 min-w-0 space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <span className="text-[12px] font-black text-muted-foreground uppercase tracking-[0.25em] opacity-40 italic">Node Allocation</span>
                       <span className="micro-text text-foreground font-black uppercase tracking-widest tabular-nums opacity-60">ITEM-{(index + 1).toString().padStart(2, '0')}</span>
                    </div>
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-[10px] font-black uppercase tracking-[0.15em] px-3 h-6 italic",
                        question.isCorrect
                          ? "border-success/30 text-success bg-success/5"
                          : "border-destructive/30 text-destructive bg-destructive/5"
                      )}
                    >
                      {question.isCorrect ? "Protocol Validated" : "Audit Discrepancy"}
                    </Badge>
                  </div>

                  <p className="page-title text-[22px] sm:text-[28px] text-foreground leading-[1.3] italic underline decoration-primary/10 underline-offset-[10px] decoration-1 max-w-[90%]">
                    "{question.text}"
                  </p>

                  {/* Options Matrix (Grid Layout) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                    {question.options.map((option, optIndex) => {
                      const isCorrectOpt = optIndex === question.correctAnswer
                      const isUserOpt = optIndex === question.userAnswer
                      
                      return (
                        <div
                          key={optIndex}
                          className={cn(
                            "relative text-[14px] px-6 py-4 rounded-md flex items-center justify-between border transition-all group/opt overflow-hidden",
                            isCorrectOpt
                              ? "bg-success/5 border-success/30 text-success font-bold"
                              : isUserOpt && !question.isCorrect
                              ? "bg-destructive/5 border-destructive/30 text-destructive font-bold"
                              : "bg-white border-border/40 text-muted-foreground opacity-60 hover:bg-slate-50"
                          )}
                        >
                          <div className="flex items-center gap-5">
                             <span className={cn(
                               "micro-text font-black px-2 h-6 flex items-center justify-center rounded-sm border transition-all tabular-nums",
                               isCorrectOpt ? "bg-success text-white border-success" : isUserOpt ? "bg-destructive text-white border-destructive" : "bg-slate-50 border-border group-hover/opt:text-primary"
                             )}>
                               {String.fromCharCode(65 + optIndex)}
                             </span>
                             <span className="flex-1 font-bold tracking-tight">{option}</span>
                          </div>
                          {isCorrectOpt && (
                            <ShieldCheck className="h-4 w-4 opacity-40 animate-pulse" />
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      
      {/* Table Footer Protocol */}
      <div className="px-10 py-6 border-t border-border bg-slate-50/50 flex items-center justify-between opacity-30">
          <span className="micro-text font-black uppercase tracking-widest italic">Database Commit: LT-827-01</span>
          <span className="micro-text font-black uppercase tracking-widest italic flex items-center gap-2">
             <ShieldCheck className="h-3 w-3" />
             Institutional Security Layer Active
          </span>
      </div>
    </Card>
  )
}
