"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const reviewQuestions = [
  {
    id: "1",
    text: "What is the derivative of x² + 3x + 5?",
    options: ["2x + 3", "x² + 3", "2x + 5", "3x + 3"],
    correctAnswer: 0,
    userAnswer: 0,
    isCorrect: true,
  },
  {
    id: "2",
    text: "Solve: If 2x + 5 = 15, what is x?",
    options: ["3", "4", "5", "10"],
    correctAnswer: 2,
    userAnswer: 1,
    isCorrect: false,
  },
  {
    id: "3",
    text: "What is the value of π (pi) to two decimal places?",
    options: ["3.12", "3.14", "3.16", "3.18"],
    correctAnswer: 1,
    userAnswer: 1,
    isCorrect: true,
  },
  {
    id: "4",
    text: "What is the square root of 144?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2,
    userAnswer: 2,
    isCorrect: true,
  },
  {
    id: "5",
    text: "In a right triangle, if the two legs are 3 and 4 units long, what is the hypotenuse?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 0,
    userAnswer: 0,
    isCorrect: true,
  },
]

export function QuestionReview() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="font-heading text-lg font-semibold">
          Question Review
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reviewQuestions.map((question, index) => (
            <div
              key={question.id}
              className={cn(
                "p-4 rounded-lg border-l-4",
                question.isCorrect
                  ? "bg-[#10B981]/5 border-[#10B981]"
                  : "bg-destructive/5 border-destructive"
              )}
            >
              <div className="flex items-start gap-4">
                {/* Status Icon */}
                <div className="flex-shrink-0 mt-0.5">
                  {question.isCorrect ? (
                    <CheckCircle className="h-5 w-5 text-[#10B981]" />
                  ) : (
                    <XCircle className="h-5 w-5 text-destructive" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-foreground">
                      Q{index + 1}.
                    </span>
                    <Badge
                      variant="secondary"
                      className={cn(
                        "text-xs",
                        question.isCorrect
                          ? "bg-[#10B981]/20 text-[#10B981]"
                          : "bg-destructive/20 text-destructive"
                      )}
                    >
                      {question.isCorrect ? "Correct" : "Incorrect"}
                    </Badge>
                  </div>

                  <p className="text-sm text-foreground mb-3">
                    {question.text}
                  </p>

                  {/* Options */}
                  <div className="grid grid-cols-2 gap-2">
                    {question.options.map((option, optIndex) => (
                      <div
                        key={optIndex}
                        className={cn(
                          "text-xs px-3 py-2 rounded-md flex items-center gap-2",
                          optIndex === question.correctAnswer
                            ? "bg-[#10B981]/20 text-[#10B981] font-medium"
                            : optIndex === question.userAnswer && !question.isCorrect
                            ? "bg-destructive/20 text-destructive line-through"
                            : "bg-muted text-muted-foreground"
                        )}
                      >
                        <span className="font-semibold">
                          {String.fromCharCode(65 + optIndex)}.
                        </span>
                        {option}
                        {optIndex === question.correctAnswer && (
                          <CheckCircle className="h-3 w-3 ml-auto" />
                        )}
                      </div>
                    ))}
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
