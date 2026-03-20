"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { TestHeader } from "@/components/test/test-header"
import { QuestionCard } from "@/components/test/question-card"
import { QuestionNavigation } from "@/components/test/question-navigation"
import { TestProgress } from "@/components/test/test-progress"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Send, ShieldCheck, Clock } from "lucide-react"
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
  title: "English Proficiency Test 101",
  subject: "Academy Assessment",
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
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-primary/10">
      {/* Test Header */}
      <TestHeader 
        title={mockTest.title}
        timeLeft={timeLeft}
        onSubmit={() => setShowSubmitDialog(true)}
        studentId={studentId || "L-1025"}
        level={searchParams.get("level") || "LEVEL B2"}
      />

      <div className="px-6 py-10 pb-20 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Question Area */}
          <div className="lg:col-span-3 space-y-10">
            
            <div className="flex items-center justify-between border-b border-border pb-6">
               <div className="space-y-1">
                  <h2 className="text-[24px] font-semibold text-foreground tracking-tight">Test Content</h2>
                  <p className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-60 mt-1.5">Academy Assessment • Spring Term</p>
               </div>
               <div className="flex flex-col items-end gap-1.5 opacity-30 sm:flex sm:items-end">
                  <div className="flex items-center gap-2">
                     <ShieldCheck className="h-4 w-4 text-success" />
                     <span className="text-[10px] font-semibold text-foreground uppercase tracking-widest">TLS 1.3 Active</span>
                  </div>
               </div>
            </div>

            {/* Test Progress */}
            <TestProgress 
              current={currentQuestion + 1}
              total={mockTest.questions.length}
              answered={answeredCount}
            />

            {/* Question Display */}
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <QuestionCard
                questionNumber={currentQuestion + 1}
                question={question}
                selectedAnswer={answers[question.id]}
                isMarkedForReview={markedForReview.has(question.id)}
                onSelectAnswer={(index) => handleSelectAnswer(question.id, index)}
                onToggleReview={() => handleToggleReview(question.id)}
              />

              {/* Navigation Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between border-t border-border pt-8 gap-6">
                <Button
                  variant="outline"
                  onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
                  disabled={currentQuestion === 0}
                  className="btn-secondary h-12 px-8 gap-3 w-full sm:w-auto"
                >
                  <ChevronLeft className="h-4 w-4 opacity-40" />
                  <span className="text-[12px] font-semibold uppercase tracking-widest">Previous Question</span>
                </Button>

                <div className="flex items-center gap-6 w-full sm:w-auto">
                  {isLastQuestion ? (
                    <Button
                      onClick={() => setShowSubmitDialog(true)}
                      className="btn-primary h-12 px-10 gap-3 w-full shadow-md active:scale-95 transition-all"
                    >
                      <Send className="h-4 w-4 opacity-40" />
                      <span className="text-[12px] font-semibold uppercase tracking-widest">Submit Assessment</span>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setCurrentQuestion((prev) => Math.min(mockTest.questions.length - 1, prev + 1))}
                      className="btn-primary h-12 px-12 gap-3 w-full shadow-md active:scale-95 transition-all"
                    >
                      <span className="text-[12px] font-semibold uppercase tracking-widest">Next Question</span>
                      <ChevronRight className="h-4 w-4 opacity-40" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Navigation */}
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

      <AlertDialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
        <AlertDialogContent className="max-w-md rounded-lg border-border">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[22px] font-semibold text-foreground">Submit Your Answers?</AlertDialogTitle>
            <AlertDialogDescription className="text-[16px] leading-[1.6] text-muted-foreground mt-4 font-medium">
              You have answered <span className="text-foreground font-semibold">{answeredCount}</span> of <span className="text-foreground font-semibold">{mockTest.questions.length}</span> questions.
              {answeredCount < mockTest.questions.length && (
                <div className="mt-6 flex gap-4 p-5 rounded-md bg-destructive/5 border border-destructive/20 items-start">
                   <Clock className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                   <div className="space-y-1">
                      <p className="micro-text text-destructive font-semibold uppercase tracking-widest leading-none">Incomplete Answers</p>
                      <p className="text-[13px] font-semibold text-destructive/80 leading-relaxed">Warning: Some questions were left blank.</p>
                   </div>
                </div>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-8 border-t border-border pt-6 gap-4">
            <AlertDialogCancel className="btn-secondary h-11 px-6 text-[11px] font-semibold uppercase tracking-widest">Back to Test</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleSubmit}
              className="btn-primary h-11 px-8 text-[11px] font-semibold uppercase tracking-widest shadow-md"
            >
              Finish Assessment
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
        <div className="text-center space-y-8 animate-in zoom-in-95 duration-700">
          <div className="relative">
             <div className="h-16 w-16 border-[4px] border-primary/10 border-t-primary rounded-full animate-spin mx-auto" />
             <ShieldCheck className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-primary animate-pulse" />
          </div>
          <div className="space-y-2">
             <h2 className="text-[20px] font-semibold text-foreground tracking-tight">Loading Assessment...</h2>
             <p className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-40">Verifying session details...</p>
          </div>
        </div>
      </div>
    }>
      <TestContent />
    </Suspense>
  )
}
