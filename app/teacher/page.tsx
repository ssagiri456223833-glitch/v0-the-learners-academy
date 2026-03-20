"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  FileText, 
  CheckCircle2, 
  Clock, 
  Send, 
  Plus, 
  Database,
  BarChart3,
  CalendarCheck
} from "lucide-react"
import Link from "next/link"

export default function TeacherDashboard() {
  const teacherName = "Sir Abbas Ali"

  const assessments = [
    { level: "Level One", slot: 1, midTerm: "published", final: "pending" },
    { level: "Level Three", slot: 2, midTerm: "published", final: "pending" },
    { level: "Level Six", slot: 3, midTerm: "draft", final: "pending" },
  ]

  return (
    <DashboardLayout
      title="Teacher Portal"
      subtitle="Classroom Management & Assessment Dashboard"
    >
      <div className="space-y-12 pb-12">
        {/* Assessed Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link href="/teacher/create-test" className="group">
            <Card className="border border-border bg-white shadow-sm btn-interactive rounded-lg overflow-hidden h-full">
              <CardContent className="p-8 flex flex-col items-center text-center gap-5">
                <div className="p-4 rounded-md bg-primary/5 text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Plus className="h-6 w-6" />
                </div>
                <h3 className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60">Create New Test</h3>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teacher/question-bank" className="group">
            <Card className="border border-border bg-white shadow-sm btn-interactive rounded-lg overflow-hidden h-full">
              <CardContent className="p-8 flex flex-col items-center text-center gap-5">
                <div className="p-4 rounded-md bg-primary/5 text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60">Question Bank</h3>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teacher/results" className="group">
            <Card className="border border-border bg-white shadow-sm btn-interactive rounded-lg overflow-hidden h-full">
              <CardContent className="p-8 flex flex-col items-center text-center gap-5">
                <div className="p-4 rounded-md bg-primary/5 text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60">Test Results</h3>
              </CardContent>
            </Card>
          </Link>
          <div className="cursor-default">
            <Card className="border border-border bg-slate-50 shadow-sm rounded-lg overflow-hidden h-full opacity-40 grayscale">
              <CardContent className="p-8 flex flex-col items-center text-center gap-5">
                <div className="p-4 rounded-md bg-slate-200 text-slate-400 border border-slate-300">
                  <CalendarCheck className="h-6 w-6" />
                </div>
                <h3 className="micro-text font-semibold uppercase tracking-widest text-slate-500">Semester Schedule</h3>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Assessment Cycle Tracking */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-border pb-6">
            <h2 className="text-[20px] font-semibold text-foreground tracking-tight">Active Classes & Assessments</h2>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-[10px] font-semibold uppercase tracking-[0.2em] border-border opacity-60 px-3">TERM 2</Badge>
              <Badge className="btn-primary text-[10px] font-semibold uppercase tracking-widest px-4 h-6">Active</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {assessments.map((item, index) => (
              <Card key={index} className="border border-border bg-white shadow-sm rounded-lg overflow-hidden group hover:shadow-md transition-all duration-300">
                <CardHeader className="bg-slate-50 border-b border-border p-8">
                  <div className="flex justify-between items-center mb-6">
                    <Badge variant="outline" className="text-[10px] font-semibold border-primary/30 text-primary uppercase tracking-widest px-3 h-6">SLOT {item.slot}</Badge>
                    <span className="micro-text text-muted-foreground font-semibold opacity-40 tracking-[0.2em] uppercase">ROOM L5</span>
                  </div>
                  <CardTitle className="page-title text-[28px] text-foreground leading-none">{item.level}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-4">
                  {/* Test 1 - Mid-Term */}
                  <div className="flex items-center justify-between p-5 rounded-md border border-border bg-white transition-all group-hover:border-primary/20">
                    <div className="flex items-center gap-5">
                      <div className={`p-2.5 rounded-md border ${item.midTerm === 'published' ? 'bg-success/5 border-success/20 text-success' : 'bg-warning/5 border-warning/20 text-warning'}`}>
                        <FileText className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[14px] font-semibold text-foreground tracking-tight">Mid-Term Test</span>
                        <span className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-60">
                          {item.midTerm === 'published' ? 'Published' : 'Drafting'}
                        </span>
                      </div>
                    </div>
                    {item.midTerm === 'published' ? (
                      <CheckCircle2 className="h-4 w-4 text-success opacity-60" />
                    ) : (
                      <Link href="/teacher/create-test">
                        <Button variant="outline" size="icon" className="h-8 w-8 btn-secondary border-border opacity-60 hover:opacity-100">
                          <Plus className="h-3 w-3" />
                        </Button>
                      </Link>
                    )}
                  </div>

                  {/* Test 2 - Final */}
                  <div className="flex items-center justify-between p-5 rounded-md border border-slate-100 bg-slate-50/50 grayscale opacity-40">
                    <div className="flex items-center gap-5">
                      <div className="p-2.5 rounded-md bg-slate-200 border border-slate-300 text-slate-400">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col gap-0.5 text-slate-600">
                        <span className="text-[14px] font-semibold tracking-tight">Final Assessment</span>
                        <span className="micro-text font-semibold uppercase tracking-widest">LOCKED</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-[10px] font-semibold border-slate-300 tracking-tighter">SECURE</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-border flex items-center justify-between">
           <p className="micro-text text-muted-foreground font-semibold uppercase tracking-[0.2em] opacity-30">
              Academy Portal v2.4
           </p>
           <p className="micro-text text-muted-foreground font-semibold opacity-40 uppercase">
              Cycle: 2026 Term 2
           </p>
        </div>
      </div>
    </DashboardLayout>
  )
}
