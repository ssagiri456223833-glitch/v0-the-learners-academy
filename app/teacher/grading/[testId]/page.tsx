"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  AlertCircle,
  MessageSquareQuote,
  Star,
  FileEdit,
  UserCircle2,
  TableOfContents
} from "lucide-react"
import Link from "next/link"

interface Answer {
  id: string
  question: string
  sample: string
  studentResponse: string
  score: number | null
  feedback: string
}

interface Submission {
  id: string
  studentName: string
  studentId: string
  status: "pending" | "graded"
  totalScore: number | null
  answers: Answer[]
}

const MOCK_SUBMISSIONS: Submission[] = [
  { 
    id: "s1", 
    studentName: "Ahmed Khan", 
    studentId: "L-1021", 
    status: "pending", 
    totalScore: null,
    answers: [
      { 
        id: "q1", 
        question: "Explain the role of the past participle in the sentence 'The book was written by a scholar'.",
        sample: "The past participle 'written' is used to form the passive voice. It indicates the action performed on the subject.",
        studentResponse: "It acts as a passive verb here. It shows that the book didn't write itself but was written by someone else.",
        score: null as number | null,
        feedback: ""
      }
    ]
  },
  { 
    id: "s2", 
    studentName: "Sara Ahmed", 
    studentId: "L-1045", 
    status: "graded", 
    totalScore: 85,
    answers: [
      { 
        id: "q1", 
        question: "Explain the role of the past participle in the sentence 'The book was written by a scholar'.",
        sample: "The past participle 'written' is used to form the passive voice. It indicates the action performed on the subject.",
        studentResponse: "It's a passive form. It helps to show who did the writing.",
        score: 4,
        feedback: "Good understanding of passive voice."
      }
    ]
  }
]

export default function GradingDetailPage({ params }: { params: { testId: string } }) {
  const [submissions, setSubmissions] = useState<Submission[]>(MOCK_SUBMISSIONS)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentScore, setCurrentScore] = useState("")

  const currentSubmission = submissions[currentIndex]
  const currentAnswer = currentSubmission.answers[0]

  const handleScoreSubmit = () => {
     if (currentScore) {
        const updated = [...submissions]
        updated[currentIndex] = {
           ...updated[currentIndex],
           status: "graded",
           answers: [{ ...updated[currentIndex].answers[0], score: Number(currentScore) }]
        }
        setSubmissions(updated)
        setCurrentScore("")
     }
  }

  const navigate = (dir: "prev" | "next") => {
     if (dir === "next" && currentIndex < submissions.length - 1) setCurrentIndex(currentIndex + 1)
     if (dir === "prev" && currentIndex > 0) setCurrentIndex(currentIndex - 1)
     setCurrentScore("")
  }

  return (
    <DashboardLayout 
      title="Protocol Evaluation" 
      subtitle={`Level 4 Assessment • ID: ${params.testId}`}
    >
      <div className="space-y-8 pb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <Link href="/teacher/grading" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-semibold uppercase tracking-widest">
            <ArrowLeft className="h-4 w-4" />
            Back to Queue
          </Link>
          <div className="flex items-center gap-6">
             <div className="flex bg-slate-100 p-1 rounded-md">
                <Button 
                   size="icon" 
                   variant="ghost" 
                   disabled={currentIndex === 0}
                   onClick={() => navigate("prev")}
                   className="h-9 w-9 opacity-60 hover:opacity-100"
                >
                   <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="px-4 flex items-center gap-2 border-x border-slate-200">
                   <span className="text-[12px] font-bold tabular-nums tabular-nums">ITEM {currentIndex + 1} OF {submissions.length}</span>
                </div>
                <Button 
                   size="icon" 
                   variant="ghost" 
                   disabled={currentIndex === submissions.length - 1}
                   onClick={() => navigate("next")}
                   className="h-9 w-9 opacity-60 hover:opacity-100"
                >
                   <ChevronRight className="h-4 w-4" />
                </Button>
             </div>
             <Button className="btn-primary h-11 px-8 gap-3 text-[11px] font-bold uppercase tracking-widest shadow-md">
                Commit Protocol
             </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
           {/* Navigation Column */}
           <div className="lg:col-span-1 space-y-4">
              <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden">
                 <CardHeader className="bg-slate-50 border-b border-border py-6 px-10">
                    <CardTitle className="text-[14px] font-bold uppercase tracking-widest text-foreground flex items-center gap-4">
                       <TableOfContents className="h-4 w-4 text-primary opacity-40" />
                       Queue
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0">
                    <div className="max-h-[600px] overflow-y-auto">
                       {submissions.map((sub, idx) => (
                         <button 
                           key={sub.id} 
                           onClick={() => { setCurrentIndex(idx); setCurrentScore(""); }}
                           className={`w-full text-left p-10 border-b border-slate-50 last:border-0 transition-all ${
                             idx === currentIndex ? 'bg-primary/5 border-l-4 border-l-primary' : 'hover:bg-slate-50'
                           }`}
                         >
                            <div className="flex justify-between items-start mb-4">
                               <p className={`micro-text font-semibold uppercase tracking-widest ${sub.status === 'graded' ? 'text-success' : 'text-warning'}`}>
                                  {sub.status === 'graded' ? 'Validated' : 'Pending'}
                               </p>
                               {sub.status === 'graded' && <CheckCircle2 className="h-3.5 w-3.5 text-success" />}
                            </div>
                            <h4 className="text-[15px] font-semibold text-foreground leading-tight tracking-tight">{sub.studentName}</h4>
                            <p className="text-[11px] font-medium text-muted-foreground opacity-60 mt-2 uppercase tracking-widest">{sub.studentId}</p>
                         </button>
                       ))}
                    </div>
                 </CardContent>
              </Card>
           </div>

           {/* Grading Area */}
           <div className="lg:col-span-3 space-y-8">
              <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden">
                 <CardHeader className="p-12 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="flex gap-6 items-center">
                       <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-[24px] font-serif font-bold text-primary shadow-inner">
                          {currentSubmission.studentName.charAt(0)}
                       </div>
                       <div>
                          <h2 className="text-[28px] font-semibold text-foreground tracking-tight leading-none">{currentSubmission.studentName}</h2>
                          <p className="micro-text text-muted-foreground font-semibold uppercase tracking-widest mt-3 opacity-60">{currentSubmission.studentId} • Batch Level 4</p>
                       </div>
                    </div>
                    {currentSubmission.status === 'graded' && (
                       <Badge variant="outline" className="border-success/30 bg-success/5 text-success text-[12px] font-bold px-6 py-2.5 h-12 uppercase tracking-[0.2em] rounded-md tabular-nums">
                          SCORE: {currentAnswer.score} / 5
                       </Badge>
                    )}
                 </CardHeader>
                 <CardContent className="p-12 space-y-12">
                    {/* Prompt Side by Side */}
                    <div className="space-y-6">
                       <Label className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60 scale-90 origin-left block">Stimulus & Model Response</Label>
                       <div className="p-10 rounded-md bg-slate-50 border border-slate-100 italic space-y-6">
                          <p className="text-[16px] text-foreground leading-relaxed font-semibold italic">"{currentAnswer.question}"</p>
                          <div className="pt-6 border-t border-slate-200">
                             <p className="micro-text text-primary font-bold uppercase tracking-widest mb-3 opacity-60">Faculty Reference Pattern</p>
                             <p className="text-[14px] text-muted-foreground leading-relaxed font-medium">{currentAnswer.sample}</p>
                          </div>
                       </div>
                    </div>

                    {/* Student Response */}
                    <div className="space-y-6">
                       <div className="flex items-center justify-between">
                          <Label className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60 scale-90 origin-left block">Candidate Construct</Label>
                          <div className="text-[11px] font-semibold uppercase tracking-widest text-primary bg-primary/5 px-4 h-7 flex items-center rounded-sm">Protocol ID: ASM-4412</div>
                       </div>
                       <div className="p-12 rounded-md border-2 border-primary/10 bg-white relative overflow-hidden group">
                          <MessageSquareQuote className="absolute top-6 right-6 h-12 w-12 text-primary opacity-[0.03] group-hover:opacity-[0.08] transition-opacity" />
                          <p className="text-[18px] text-foreground leading-[1.8] font-medium relative z-10 selection:bg-primary/20">
                             {currentAnswer.studentResponse}
                          </p>
                       </div>
                    </div>

                    {/* Feedback & Score Input */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-12 border-t border-slate-100">
                       <div className="md:col-span-3 space-y-6">
                          <Label className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60 scale-90 origin-left block">Constructive Feedback / Remarks</Label>
                          <textarea 
                            placeholder="Identify specific syntactic errors or provide formative feedback..."
                            className="w-full h-24 p-8 rounded-md border border-slate-200 bg-slate-50/30 focus:border-primary/30 focus:ring-primary/5 text-[14px] font-medium resize-none transition-all"
                            defaultValue={currentAnswer.feedback}
                          />
                       </div>
                       <div className="md:col-span-1 space-y-6">
                          <Label className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60 scale-90 origin-left block">Quant. Score (0-5)</Label>
                          <div className="flex gap-4">
                             <Input 
                               type="number" 
                               max={5} 
                               min={0}
                               placeholder="-"
                               value={currentScore}
                               onChange={(e) => setCurrentScore(e.target.value)}
                               className="h-24 text-center text-[24px] font-bold border-2 border-slate-200 focus:border-primary rounded-md"
                             />
                             <Button 
                               onClick={handleScoreSubmit}
                               className="h-24 w-24 btn-primary rounded-md shadow-lg"
                               disabled={!currentScore}
                             >
                                <FileEdit className="h-6 w-6" />
                             </Button>
                          </div>
                       </div>
                    </div>
                 </CardContent>
              </Card>
           </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
