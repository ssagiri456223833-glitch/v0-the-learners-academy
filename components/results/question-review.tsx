"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Info } from "lucide-react"
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
    <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden">
      <CardHeader className="bg-slate-50 border-b border-border py-6 px-8">
        <CardTitle className="text-[18px] font-semibold italic flex items-center gap-3 tracking-tight">
          <Info className="h-4 w-4 text-primary opacity-60" />
          Item-Level Audit Trail
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <div className="space-y-6">
          {reviewQuestions.map((question, index) => (
            <div
              key={question.id}
              className={cn(
                "p-6 rounded-md border transition-all",
                question.isCorrect
                  ? "bg-success/5 border-success/20"
                  : "bg-destructive/5 border-destructive/20"
              )}
            >
              <div className="flex items-start gap-6">
                {/* Status Indicator */}
                <div className="flex-shrink-0 mt-1">
                  {question.isCorrect ? (
                    <CheckCircle className="h-5 w-5 text-success" />
                  ) : (
                    <XCircle className="h-5 w-5 text-destructive" />
                  )}
                </div>

                {/* Content Area */}
                <div className="flex-1 min-w-0 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-bold text-foreground uppercase tracking-widest opacity-40">
                      ITEM {index + 1}
                    </span>
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-[9px] font-black uppercase tracking-tighter px-2 h-5",
                        question.isCorrect
                          ? "border-success/30 text-success"
                          : "border-destructive/30 text-destructive"
                      )}
                    >
                      {question.isCorrect ? "Validated" : "Discrepancy"}
                    </Badge>
                  </div>

                  <p className="text-[15px] font-medium text-foreground leading-relaxed italic">
                    "{question.text}"
                  </p>

                  {/* Options Matrix */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    {question.options.map((option, optIndex) => {
                      const isCorrectOpt = optIndex === question.correctAnswer
                      const isUserOpt = optIndex === question.userAnswer
                      
                      return (
                        <div
                          key={optIndex}
                          className={cn(
                            "text-[12px] px-4 py-3 rounded-md flex items-center gap-3 border transition-all",
                            isCorrectOpt
                              ? "bg-success/10 border-success/30 text-success font-bold"
                              : isUserOpt && !question.isCorrect
                              ? "bg-destructive/10 border-destructive/30 text-destructive font-bold"
                              : "bg-white border-border text-muted-foreground opacity-60"
                          )}
                        >
                          <span className="micro-text font-black opacity-40">
                            {String.fromCharCode(65 + optIndex)}
                          </span>
                          <span className="flex-1 truncate">{option}</span>
                          {isCorrectOpt && (
                            <CheckCircle className="h-3 w-3" />
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
    </Card>
  )
}
