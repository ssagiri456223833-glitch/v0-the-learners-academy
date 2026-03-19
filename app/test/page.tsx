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
  title: "Level One - Trimester Assessment 1",
  subject: "Level One",
  duration: 45, // minutes
  questions: [
    {
      id: "1",
      text: "Which of the following is the correct past tense of the verb 'go'?",
      options: ["Goes", "Gone", "Went", "Going"],
    },
    {
      id: "2",
      text: "Choose the word that best completes the sentence: 'She is very _______ about her upcoming trip.'",
      options: ["Exciting", "Excited", "Excite", "Excitement"],
    },
    {
      id: "3",
      text: "Identify the antonym of 'Generous':",
      options: ["Kind", "Selfish", "Happy", "Strong"],
    },
    {
      id: "4",
      text: "Which sentence uses the correct punctuation?",
      options: ["Where are you going.", "Where are you going?", "Where are you going!", "Where are you going;"],
    },
    {
      id: "5",
      text: "Fill in the blank: 'Neither the teacher nor the students _______ happy with the decision.'",
      options: ["Is", "Are", "Was", "Be"],
    },
    {
      id: "6",
      text: "Choose the correct synonym for 'Rapid':",
      options: ["Slow", "Fast", "Quiet", "Heavy"],
    },
    {
      id: "7",
      text: "Which of these is a compound sentence?",
      options: ["I like coffee.", "I like coffee and she likes tea.", "The sun is hot.", "Running is fun."],
    },
    {
      id: "8",
      text: "What is the collective noun for a group of lions?",
      options: ["Pack", "Herd", "Pride", "Flock"],
    },
    {
      id: "9",
      text: "Identify the preposition in the sentence: 'The cat jumped over the fence.'",
      options: ["Jumped", "Over", "Fence", "The"],
    },
    {
      id: "10",
      text: "Which of the following sounds like 'Know'?",
      options: ["Now", "New", "No", "Knew"],
    },
  ],
}

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function TestContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const studentId = searchParams.get("studentId") || "L-1025"
  
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [timeLeft, setTimeLeft] = useState(mockTest.duration * 60) // in seconds
  const [showSubmitDialog, setShowSubmitDialog] = useState(false)
  const [markedForReview, setMarkedForReview] = useState<Set<string>>(new Set())

  // Prevent accidental back/refresh
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault()
      e.returnValue = ""
    }
    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => window.removeEventListener("beforeunload", handleBeforeUnload)
  }, [])

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
        studentId={studentId || "L-1025"}
        level={searchParams.get("level") || "General"}
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

export default function TestPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-muted-foreground font-heading animate-pulse">Loading assessment environment...</p>
        </div>
      </div>
    }>
      <TestContent />
    </Suspense>
  )
}
