"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, ClipboardCheck, Trophy, Clock, ArrowRight, Activity, BookOpen } from "lucide-react"
import Link from "next/link"

const activeTests = [
  {
    id: "1",
    title: "Level One - Trimester Assessment 1",
    duration: 45,
    questions: 10,
    deadline: "Due today, 5:00 PM",
    type: "Assessments"
  },
  {
    id: "2",
    title: "Speaking Proficiency Quiz",
    duration: 15,
    questions: 5,
    deadline: "Available until Friday",
    type: "Practice"
  }
]

const recentResults = [
  {
    id: "r1",
    title: "Weekly Grammar Quiz #4",
    score: 9,
    total: 10,
    date: "2 days ago",
    status: "Excellent"
  },
  {
    id: "r2",
    title: "Vocabulary Checkpoint",
    score: 7,
    total: 10,
    date: "1 week ago",
    status: "Good"
  }
]

export default function StudentDashboard() {
  return (
    <DashboardLayout 
      title="Candidate Dashboard" 
      subtitle="Welcome to your Institutional Environment • Track your assessment progress & performance cycles"
    >
      <div className="space-y-12 pb-10">
        {/* Institutional Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden group hover:shadow-md transition-all btn-interactive">
            <CardContent className="p-8 flex items-center gap-6">
              <div className="p-4 bg-primary/5 text-primary rounded-md border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <ClipboardCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="micro-text text-muted-foreground font-black uppercase tracking-widest opacity-40 italic">Evaluations Complete</p>
                <p className="text-[28px] font-bold text-foreground tracking-tighter mt-1">12 <span className="text-[12px] opacity-20">/ TOTAL</span></p>
              </div>
            </CardContent>
          </Card>
          <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden group hover:shadow-md transition-all btn-interactive">
             <CardContent className="p-8 flex items-center gap-6">
              <div className="p-4 bg-primary/5 text-primary rounded-md border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Trophy className="h-6 w-6" />
              </div>
              <div>
                <p className="micro-text text-muted-foreground font-black uppercase tracking-widest opacity-40 italic">Aggregate Score</p>
                <p className="text-[28px] font-bold text-foreground tracking-tighter mt-1">88<span className="text-[14px] opacity-20 font-black italic">%</span></p>
              </div>
            </CardContent>
          </Card>
          <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden group hover:shadow-md transition-all btn-interactive">
             <CardContent className="p-8 flex items-center gap-6">
              <div className="p-4 bg-primary/5 text-primary rounded-md border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <p className="micro-text text-muted-foreground font-black uppercase tracking-widest opacity-40 italic">Environment Time</p>
                <p className="text-[28px] font-bold text-foreground tracking-tighter mt-1">4.2 <span className="text-[12px] opacity-20 font-black italic">H</span></p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-4">
          {/* Active Assessment Inventory */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-3">
                <Activity className="h-4 w-4 text-primary opacity-60" />
                <h2 className="text-[16px] font-black uppercase tracking-[0.15em] text-foreground">Pending Protocals</h2>
              </div>
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 font-black text-[9px] tracking-widest px-4 h-6 uppercase">
                {activeTests.length} Items Locked
              </Badge>
            </div>
            
            <div className="grid gap-6">
              {activeTests.map((test) => (
                <Card key={test.id} className="border border-border bg-white shadow-sm hover:shadow-md transition-all group overflow-hidden btn-interactive rounded-lg">
                  <div className="flex items-center p-8 gap-8">
                    <div className="hidden sm:flex h-16 w-16 items-center justify-center rounded-md bg-slate-50 border border-border text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Play className="h-6 w-6 ml-1" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="text-[9px] font-black uppercase tracking-[0.1em] px-2 h-5 bg-slate-100">{test.type}</Badge>
                        <span className="micro-text text-destructive font-bold uppercase tracking-widest flex items-center gap-1.5 opacity-80">
                          <Clock className="h-3 w-3" />
                          {test.deadline}
                        </span>
                      </div>
                      <h3 className="text-[20px] font-semibold text-foreground tracking-tight italic underline decoration-primary/10 underline-offset-4">{test.title}</h3>
                      <div className="flex items-center gap-5 mt-3">
                        <span className="flex items-center gap-2 micro-text text-muted-foreground font-black italic opacity-40"><Clock className="h-3.5 w-3.5" /> {test.duration} min cycle</span>
                        <span className="flex items-center gap-2 micro-text text-muted-foreground font-black italic opacity-40"><ClipboardCheck className="h-3.5 w-3.5" /> {test.questions} item matrix</span>
                      </div>
                    </div>
                    <Link href="/test">
                      <Button className="btn-primary shrink-0 h-11 px-6 gap-3 text-[12px] font-bold uppercase tracking-widest">
                        Enter
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Performance Audit Stack */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <Trophy className="h-4 w-4 text-primary opacity-60" />
              <h2 className="text-[16px] font-black uppercase tracking-[0.15em] text-foreground">Performance Audit</h2>
            </div>
            <div className="space-y-4">
              {recentResults.map((result) => (
                <Card key={result.id} className="border border-border bg-white shadow-sm rounded-lg overflow-hidden group">
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-[14px] font-bold text-foreground uppercase tracking-tight truncate pr-2">{result.title}</h4>
                      <Badge variant="outline" className={`text-[9px] font-black tracking-widest px-2 h-5 uppercase ${result.status === "Excellent" ? "border-success/30 text-success bg-success/5" : "border-primary/30 text-primary bg-primary/5"}`}>
                        {result.status}
                      </Badge>
                    </div>
                    <div className="flex items-end justify-between">
                      <div className="text-[24px] font-black text-foreground italic">
                        {result.score}<span className="text-muted-foreground text-[14px] font-medium not-italic opacity-30 ml-1">/ {result.total}</span>
                      </div>
                      <span className="micro-text text-muted-foreground font-black opacity-30 italic uppercase tracking-tighter">{result.date}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-50 border border-border/40 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000" 
                        style={{ width: `${(result.score / result.total) * 100}%` }}
                      />
                    </div>
                  </div>
                </Card>
              ))}
              <Button variant="ghost" className="w-full text-[11px] font-black text-primary uppercase tracking-[0.2em] opacity-40 hover:opacity-100 hover:bg-primary/5 transition-all">
                Access Audit Logs
              </Button>
            </div>
          </div>
        </div>

        {/* Audit Disclaimer Area */}
        <div className="pt-8 border-t border-border flex items-center justify-between">
           <p className="micro-text text-muted-foreground font-black uppercase tracking-[0.2em] opacity-30">
              Assigned Candidate ID: L-1025 • Environment Stable
           </p>
           <p className="micro-text text-muted-foreground font-bold italic opacity-40">
              Institution Ref Cycle: 2026.4
           </p>
        </div>
      </div>
    </DashboardLayout>
  )
}
