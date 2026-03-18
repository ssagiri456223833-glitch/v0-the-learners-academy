"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { TestHeader } from "@/components/test/test-header"
import { QuestionCard } from "@/components/test/question-card"
import { QuestionNavigation } from "@/components/test/question-navigation"
import { TestProgress } from "@/components/test/test-progress"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Send } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

const mockTest = {
  title: "Mathematics - Chapter 5",
  subject: "Mathematics",
  duration: 30, // minutes
  questions: [
    {
      id: "1",
      text: "What is the derivative of x² + 3x + 5?",
      options: ["2x + 3", "x² + 3", "2x + 5", "3x + 3"],
    },
    {
      id: "2",
      text: "Solve: If 2x + 5 = 15, what is x?",
      options: ["3", "4", "5", "10"],
    },
    {
      id: "3",
      text: "What is the value of π (pi) to two decimal places?",
      options: ["3.12", "3.14", "3.16", "3.18"],
    },
    {
      id: "4",
      text: "What is the square root of 144?",
      options: ["10", "11", "12", "13"],
    },
    {
      id: "5",
      text: "In a right triangle, if the two legs are 3 and 4 units long, what is the hypotenuse?",
      options: ["5", "6", "7", "8"],
    },
    {
      id: "6",
      text: "What is 15% of 200?",
      options: ["25", "30", "35", "40"],
    },
    {
      id: "7",
      text: "Simplify: 3x + 2x - x",
      options: ["4x", "5x", "6x", "3x"],
    },
    {
      id: "8",
      text: "What is the area of a circle with radius 7? (Use π = 22/7)",
      options: ["144", "154", "164", "174"],
    },
    {
      id: "9",
      text: "What is the integral of 2x?",
      options: ["x²", "x² + C", "2x²", "2x² + C"],
    },
    {
      id: "10",
      text: "What is the sum of interior angles of a hexagon?",
      options: ["540°", "600°", "720°", "900°"],
    },
  ],
}

export default function TestPage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [timeLeft, setTimeLeft] = useState(mockTest.duration * 60) // in seconds
  const [showSubmitDialog, setShowSubmitDialog] = useState(false)
  const [markedForReview, setMarkedForReview] = useState<Set<string>>(new Set())

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleSubmit()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSelectAnswer = (questionId: string, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }))
  }

  const handleToggleReview = (questionId: string) => {
    setMarkedForReview((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(questionId)) {
        newSet.delete(questionId)
      } else {
        newSet.add(questionId)
      }
      return newSet
    })
  }

  const handleSubmit = useCallback(() => {
    // Calculate score and navigate to results
    const correctAnswers: Record<string, number> = {
      "1": 0, "2": 2, "3": 1, "4": 2, "5": 0,
      "6": 1, "7": 0, "8": 1, "9": 1, "10": 2,
    }
    
    let score = 0
    Object.entries(answers).forEach(([questionId, answer]) => {
      if (correctAnswers[questionId] === answer) {
        score++
      }
    })

    const total = mockTest.questions.length
    const percentage = Math.round((score / total) * 100)
    
    router.push(`/results?score=${score}&total=${total}&percentage=${percentage}`)
  }, [answers, router])

  const question = mockTest.questions[currentQuestion]
  const answeredCount = Object.keys(answers).length
  const isLastQuestion = currentQuestion === mockTest.questions.length - 1

  return (
    <div className="min-h-screen bg-background">
      {/* Test Header */}
      <TestHeader 
        title={mockTest.title}
        timeLeft={timeLeft}
        onSubmit={() => setShowSubmitDialog(true)}
      />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Progress */}
            <TestProgress 
              current={currentQuestion + 1}
              total={mockTest.questions.length}
              answered={answeredCount}
            />

            {/* Question Card */}
            <QuestionCard
              questionNumber={currentQuestion + 1}
              question={question}
              selectedAnswer={answers[question.id]}
              isMarkedForReview={markedForReview.has(question.id)}
              onSelectAnswer={(index) => handleSelectAnswer(question.id, index)}
              onToggleReview={() => handleToggleReview(question.id)}
            />

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
                disabled={currentQuestion === 0}
                className="gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>

              {isLastQuestion ? (
                <Button
                  onClick={() => setShowSubmitDialog(true)}
                  className="gap-2 bg-primary hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                  Submit Test
                </Button>
              ) : (
                <Button
                  onClick={() => setCurrentQuestion((prev) => Math.min(mockTest.questions.length - 1, prev + 1))}
                  className="gap-2 bg-primary hover:bg-primary/90"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Question Navigation Sidebar */}
          <div className="hidden lg:block">
            <QuestionNavigation
              questions={mockTest.questions}
              currentQuestion={currentQuestion}
              answers={answers}
              markedForReview={markedForReview}
              onNavigate={setCurrentQuestion}
            />
          </div>
        </div>
      </div>

      {/* Submit Confirmation Dialog */}
      <AlertDialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="font-heading">Submit Test?</AlertDialogTitle>
            <AlertDialogDescription>
              You have answered {answeredCount} out of {mockTest.questions.length} questions.
              {answeredCount < mockTest.questions.length && (
                <span className="block mt-2 text-destructive">
                  {mockTest.questions.length - answeredCount} questions are still unanswered.
                </span>
              )}
              Are you sure you want to submit?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Continue Test</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleSubmit}
              className="bg-primary hover:bg-primary/90"
            >
              Submit Test
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
