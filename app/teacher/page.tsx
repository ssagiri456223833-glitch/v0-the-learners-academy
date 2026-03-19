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
      title="Teacher Assessor Portal" 
      subtitle={`Authenticated: ${teacherName} • Term 2 Assessment Cycle`}
    >
      <div className="space-y-12 pb-12">
        {/* Assessor Action Modules */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/teacher/create-test" className="group">
            <Card className="border border-border bg-white shadow-sm hover:shadow-md transition-all rounded-lg overflow-hidden h-full group">
              <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-md bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Plus className="h-6 w-6" />
                </div>
                <h3 className="text-[12px] font-bold uppercase tracking-widest text-muted-foreground opacity-60">Provision New Test</h3>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teacher/question-bank" className="group">
            <Card className="border border-border bg-white shadow-sm hover:shadow-md transition-all rounded-lg overflow-hidden h-full group">
              <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-md bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="text-[12px] font-bold uppercase tracking-widest text-muted-foreground opacity-60">Institutional Q-Bank</h3>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teacher/results" className="group">
            <Card className="border border-border bg-white shadow-sm hover:shadow-md transition-all rounded-lg overflow-hidden h-full group">
              <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-md bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-[12px] font-bold uppercase tracking-widest text-muted-foreground opacity-60">Evaluation Analytics</h3>
              </CardContent>
            </Card>
          </Link>
          <div className="group cursor-default">
            <Card className="border border-border bg-slate-50 shadow-sm rounded-lg overflow-hidden h-full opacity-50 grayscale transition-all">
              <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-md bg-slate-200 text-slate-400">
                  <CalendarCheck className="h-6 w-6" />
                </div>
                <h3 className="text-[12px] font-bold uppercase tracking-widest text-slate-500">Term 2 Timetable</h3>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Assessment Cycle Tracking */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <h2 className="text-[20px] font-semibold text-foreground italic decoration-primary/20 underline underline-offset-8 decoration-2">Active Assessment Cycle</h2>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-widest opacity-40">SPRING 2026</Badge>
              <Badge className="bg-primary hover:bg-primary/90 text-[10px] font-black uppercase tracking-tighter px-3">Protocol v2</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {assessments.map((item, index) => (
              <Card key={index} className="border border-border bg-white shadow-sm rounded-lg overflow-hidden group hover:shadow-md transition-all">
                <CardHeader className="bg-slate-50/80 p-6 border-b border-border">
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="outline" className="text-[10px] font-bold border-primary/20 text-primary uppercase tracking-widest h-6">Slot {item.slot}</Badge>
                    <span className="micro-text text-muted-foreground font-bold opacity-40 tracking-widest uppercase italic">Assigned Room 5</span>
                  </div>
                  <CardTitle className="page-title text-[28px] text-foreground leading-none">{item.level}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  {/* Test 1 - Mid-Term */}
                  <div className="flex items-center justify-between p-4 rounded-md border border-border bg-slate-50/30 transition-all group-hover:bg-white group-hover:border-primary/20">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-md ${item.midTerm === 'published' ? 'bg-success/5 text-success' : 'bg-warning/5 text-warning font-semibold'}`}>
                        <FileText className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-bold text-foreground">Mid-Term Assessment</span>
                        <span className="micro-text text-muted-foreground font-medium opacity-50 uppercase tracking-tighter mt-1">
                          {item.midTerm === 'published' ? 'Protocol Live' : 'Drafting Phase'}
                        </span>
                      </div>
                    </div>
                    {item.midTerm === 'published' ? (
                      <CheckCircle2 className="h-4 w-4 text-success" />
                    ) : (
                      <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/5 hover:text-primary transition-all">
                        <Send className="h-3 w-3" />
                      </Button>
                    )}
                  </div>

                  {/* Test 2 - Final */}
                  <div className="flex items-center justify-between p-4 rounded-md border border-border bg-slate-100 opacity-60">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-slate-200 text-slate-400">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col text-slate-500">
                        <span className="text-[13px] font-bold">Terminal Evaluation</span>
                        <span className="micro-text font-medium uppercase tracking-tighter mt-1">Locked (Week 12 Release)</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-[10px] font-bold opacity-30 tracking-tighter">SECURE</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
