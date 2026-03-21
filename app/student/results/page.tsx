"use client"

import { Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Trophy, 
  Target, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Download, 
  Home,
  ShieldCheck,
  TrendingUp
} from "lucide-react"
import { cn } from "@/lib/utils"

function ResultsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const score = parseInt(searchParams.get("score") || "8")
  const total = parseInt(searchParams.get("total") || "10")
  const percentage = Math.round((score / total) * 100)
  const isPass = percentage >= 60

  return (
    <div className="max-w-[1000px] mx-auto space-y-12 animate-in fade-in duration-1000">
      {/* Hero Score Section */}
      <Card variant="content" className="p-12 md:p-16 border-slate-200 overflow-hidden relative">
        <div className={cn(
          "absolute top-0 right-0 w-64 h-64 -mr-20 -mt-20 rounded-full blur-3xl opacity-10 transition-colors",
          isPass ? "bg-emerald-500" : "bg-red-500"
        )} />
        
        <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
          {/* Circular Score */}
          <div className="relative group">
            <div className={cn(
              "h-56 w-56 rounded-full border-[12px] flex flex-col items-center justify-center transition-all duration-700",
              isPass ? "border-emerald-50 bg-emerald-50/50" : "border-red-50 bg-red-50/50"
            )}>
              <span className={cn(
                "text-7xl font-bold tracking-tighter tabular-nums",
                isPass ? "text-emerald-600" : "text-red-600"
              )}>{percentage}%</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mt-2">Overall Score</span>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-slate-900 shadow-xl border border-slate-800 flex items-center gap-2">
               <Trophy className={cn("h-4 w-4", isPass ? "text-amber-400" : "text-slate-500")} />
               <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                  {isPass ? "Assessment Passed" : "Retake Required"}
               </span>
            </div>
          </div>

          {/* Stats & Feedback */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-3">
                 <ShieldCheck className="h-4 w-4 text-primary" />
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Verified Academic Record</span>
              </div>
              <h1 className="text-4xl font-serif text-slate-900 leading-tight">Excellent Work, Student!</h1>
              <p className="text-slate-500 font-medium max-w-md">Your proficiency in English Grammar and Academic Syntax continues to show significant growth.</p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
               <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Raw Score</span>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span className="text-xl font-bold text-slate-900">{score} / {total} Points</span>
                  </div>
               </div>
               <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Accuracy</span>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-xl font-bold text-slate-900">{percentage}% Result</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Skills & Next Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Skill Breakdown */}
        <Card variant="content" className="p-8 space-y-8">
           <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">Skill Breakdown</h3>
              <TrendingUp className="h-5 w-5 text-primary opacity-40" />
           </div>
           <div className="space-y-6">
              {[
                { name: "Grammar", score: 90, color: "bg-emerald-500" },
                { name: "Vocabulary", score: 75, color: "bg-primary" },
                { name: "Listening", score: 60, color: "bg-amber-400" },
                { name: "Syntax", score: 85, color: "bg-emerald-500" }
              ].map(skill => (
                <div key={skill.name} className="space-y-2">
                   <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest border-b border-slate-50 pb-2">
                      <span className="text-slate-400">{skill.name}</span>
                      <span className="text-slate-900">{skill.score}%</span>
                   </div>
                   <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className={cn("h-full transition-all duration-1000", skill.color)} style={{ width: `${skill.score}%` }} />
                   </div>
                </div>
              ))}
           </div>
        </Card>

        {/* Guidance */}
        <Card variant="content" className="p-8 bg-slate-900 text-white space-y-8 border-none shadow-2xl shadow-slate-200">
           <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                 <Target className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Academic Guidance</h3>
           </div>
           
           <div className="space-y-4">
              <p className="text-slate-400 text-sm leading-relaxed">
                To achieve Mastery (90%+), we recommend focusing on **Advanced Tense Consistency** and **Academic Vocabulary** in complex sentence structures.
              </p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                 <span className="text-[10px] font-bold text-primary-foreground uppercase tracking-widest opacity-60">Recommendation</span>
                 <p className="text-xs font-medium">Practice Unit 4: "Relative Clauses in Academic Writing"</p>
              </div>
           </div>

           <Button className="w-full h-12 bg-white text-slate-900 hover:bg-slate-100 font-bold gap-3 rounded-xl mt-4 border-none">
              <Download className="h-4 w-4" />
              Download Report
           </Button>
        </Card>
      </div>

      {/* Global Actions */}
      <div className="flex items-center justify-center gap-6 pt-8">
         <Button variant="outline" className="h-12 px-8 rounded-2xl font-bold gap-3 text-slate-600" onClick={() => router.push('/student')}>
            <Home className="h-4 w-4" />
            Portal Home
         </Button>
      </div>
    </div>
  )
}

export default function StudentResultsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <Suspense fallback={
        <div className="flex flex-col items-center justify-center h-96 space-y-6">
           <div className="h-12 w-12 border-4 border-slate-200 border-t-primary rounded-full animate-spin" />
           <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Generating Digital Certificate...</p>
        </div>
      }>
        <ResultsContent />
      </Suspense>
    </div>
  )
}
