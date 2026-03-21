"use client"

import { useState, useEffect, useCallback, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { TestHeader } from "@/components/test/test-header"
import { QuestionCard } from "@/components/test/question-card"
import { Button } from "@/components/ui/button"
import { 
  ChevronLeft, 
  ChevronRight, 
  Send, 
  ShieldAlert, 
  Clock, 
  ShieldCheck,
  AlertTriangle
} from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { SAMPLE_QUESTIONS } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

function TestContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const studentId = searchParams.get("studentId") || "L-1025"
  const academicLevel = searchParams.get("level") || "LEVEL B2"
  
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [timeLeft, setTimeLeft] = useState(45 * 60) // 45 mins
  const [showSubmitDialog, setShowSubmitDialog] = useState(false)
  const [markedForReview, setMarkedForReview] = useState<Set<string>>(new Set())
  
  // Anti-Cheat State
  const [violations, setViolations] = useState(0)
  const [showWarning, setShowWarning] = useState(false)

  // Timer logic
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
  }, [])

  // Anti-Cheat: Detect Tab Switch / Window Blur
  useEffect(() => {
    const handleBlur = () => {
      setViolations(v => v + 1)
      setShowWarning(true)
    }

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault()
      e.returnValue = ""
    }

    window.addEventListener("blur", handleBlur)
    window.addEventListener("beforeunload", handleBeforeUnload)
    
    return () => {
      window.removeEventListener("blur", handleBlur)
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [])

  const handleSelectAnswer = (questionId: string, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }))
  }

  const handleToggleReview = (questionId: string) => {
    setMarkedForReview((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(questionId)) newSet.delete(questionId)
      else newSet.add(questionId)
      return newSet
    })
  }

  const handleSubmit = useCallback(() => {
    router.push(`/student/results?id=${studentId}`)
  }, [router, studentId])

  useEffect(() => {
    if (violations >= 3) {
      handleSubmit() // Auto-submit on 3 violations
    }
  }, [violations, handleSubmit])

  const currentQuestion = SAMPLE_QUESTIONS[currentQuestionIdx]
  const answeredCount = Object.keys(answers).length
  const isLastQuestion = currentQuestionIdx === SAMPLE_QUESTIONS.length - 1

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-primary/10">
      {/* Test Header */}
      <TestHeader 
        title="English Proficiency Exam"
        timeLeft={timeLeft}
        onSubmit={() => setShowSubmitDialog(true)}
        studentId={studentId}
        level={academicLevel}
      />

      <main className="flex-1 flex overflow-hidden">
        {/* Left Side: Question Area (75%) */}
        <div className="flex-1 overflow-y-auto px-8 py-10 lg:px-12 scroll-smooth">
          <div className="max-w-[800px] mx-auto space-y-12">
            {/* Context / Status Bar */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-6">
               <div className="space-y-1">
                  <h2 className="text-xl font-serif text-slate-900">Grammar & Use of English</h2>
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400">Section 1 of 3 • Read carefully</p>
               </div>
               <div className="flex items-center gap-4 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">Encrypted Session</span>
               </div>
            </div>

            {/* Question Card */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <QuestionCard
                questionNumber={currentQuestionIdx + 1}
                question={currentQuestion}
                selectedAnswer={answers[currentQuestion.id]}
                isMarkedForReview={markedForReview.has(currentQuestion.id)}
                onSelectAnswer={(idx) => handleSelectAnswer(currentQuestion.id, idx)}
                onToggleReview={() => handleToggleReview(currentQuestion.id)}
              />
            </div>

            {/* Navigation Footer */}
            <div className="flex items-center justify-between pt-10 border-t border-slate-200">
               <Button 
                variant="outline" 
                onClick={() => setCurrentQuestionIdx(v => Math.max(0, v - 1))}
                disabled={currentQuestionIdx === 0}
                className="h-12 px-8 font-bold gap-2 text-slate-600 rounded-2xl"
               >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
               </Button>

               <div className="flex items-center gap-4">
                  <Button 
                    variant="ghost" 
                    onClick={() => handleToggleReview(currentQuestion.id)}
                    className={cn(
                      "h-12 px-6 font-bold uppercase text-[10px] tracking-widest rounded-2xl",
                      markedForReview.has(currentQuestion.id) ? "text-amber-600 bg-amber-50" : "text-slate-400"
                    )}
                  >
                    Mark for Review
                  </Button>
                  
                  {isLastQuestion ? (
                    <Button 
                      onClick={() => setShowSubmitDialog(true)}
                      className="h-12 px-10 font-bold gap-2 rounded-2xl shadow-xl shadow-primary/20"
                    >
                      Finish Exam
                      <Send className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button 
                      onClick={() => setCurrentQuestionIdx(v => v + 1)}
                      className="h-12 px-10 font-bold gap-2 rounded-2xl shadow-xl shadow-primary/20"
                    >
                      Next Question
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  )}
               </div>
            </div>
          </div>
        </div>

        {/* Right Side: Navigation Grid (25%) */}
        <aside className="hidden lg:flex w-[320px] bg-white border-l border-slate-200 flex-col p-8 space-y-8 shadow-2xl shadow-slate-200/50 z-10">
           <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Exam Navigation</h3>
              <div className="grid grid-cols-5 gap-3">
                 {SAMPLE_QUESTIONS.map((q, i) => (
                   <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIdx(i)}
                    className={cn(
                      "h-10 w-10 rounded-xl text-xs font-bold transition-all border-2",
                      currentQuestionIdx === i ? "border-primary bg-primary text-white shadow-lg shadow-primary/20 scale-110" :
                      markedForReview.has(q.id) ? "border-amber-400 bg-amber-50 text-amber-700" :
                      answers[q.id] !== undefined ? "border-emerald-500 bg-emerald-50 text-emerald-700" :
                      "border-slate-100 text-slate-400 hover:border-slate-300"
                    )}
                   >
                     {i + 1}
                   </button>
                 ))}
              </div>
           </div>

           <div className="flex-1" />

           {/* Metrics / Health */}
           <div className="space-y-6 pt-10 border-t border-slate-100">
              <div className="flex items-center justify-between">
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Progress</span>
                 <span className="text-xs font-bold text-slate-900">{Math.round((answeredCount/SAMPLE_QUESTIONS.length)*100)}%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                 <div 
                   className="h-full bg-primary transition-all duration-500" 
                   style={{ width: `${(answeredCount/SAMPLE_QUESTIONS.length)*100}%` }} 
                 />
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                 <div className="flex items-center gap-2">
                    <ShieldAlert className={cn("h-4 w-4", violations > 0 ? "text-amber-500" : "text-emerald-500")} />
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Proctor Status</span>
                 </div>
                 <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                   {violations === 0 
                    ? "Normal activity detected. Session is secure." 
                    : `Warning: ${violations} suspicious activity detected. Auto-submit at 3.`
                   }
                 </p>
              </div>
           </div>
        </aside>
      </main>

      {/* Security Warning Modal */}
      <AlertDialog open={showWarning} onOpenChange={setShowWarning}>
        <AlertDialogContent className="max-w-md p-8">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-3 text-red-600">
              <AlertTriangle className="h-6 w-6" />
              Security Violation Detected
            </AlertDialogTitle>
            <AlertDialogDescription className="text-slate-600 font-medium leading-relaxed pt-4">
              Our system detected that you switched tabs or focus away from the exam window. This is a violation of the secure exam policy.
              <br /><br />
              <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-800 text-sm font-bold">
                 Warning {violations} of 3.
              </div>
              <br />
              Upon the 3rd violation, your exam will be automatically submitted as-is.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="pt-6">
            <AlertDialogAction onClick={() => setShowWarning(false)} className="bg-red-600 hover:bg-red-700 text-white h-12 px-8 font-bold">
              I Understand
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Submit Confirmation */}
      <AlertDialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
        <AlertDialogContent className="max-w-md p-8">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-bold">Finish Assessment?</AlertDialogTitle>
            <AlertDialogDescription className="text-slate-600 font-medium pt-4">
              You have answered <span className="text-slate-900 font-bold">{answeredCount}</span> out of {SAMPLE_QUESTIONS.length} questions.
              {answeredCount < SAMPLE_QUESTIONS.length && (
                 <p className="mt-4 text-amber-600 font-bold flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    Some questions are still unanswered.
                 </p>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="pt-8 gap-4">
            <Button variant="ghost" onClick={() => setShowSubmitDialog(false)} className="h-12 px-8 font-bold text-slate-400">
              Go Back
            </Button>
            <AlertDialogAction onClick={handleSubmit} className="h-12 px-10 font-bold shadow-lg shadow-primary/20">
              Submit Now
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default function StudentTestPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 border-4 border-slate-200 border-t-primary rounded-full animate-spin" />
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Initialising Secure Workspace...</p>
        </div>
      </div>
    }>
      <TestContent />
    </Suspense>
  )
}
