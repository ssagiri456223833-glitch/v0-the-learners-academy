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

  // Mock data for assigned levels and test status
  const assessments = [
    { level: "Level One", slot: 1, midTerm: "published", final: "pending" },
    { level: "Level Three", slot: 2, midTerm: "published", final: "pending" },
    { level: "Level Six", slot: 3, midTerm: "draft", final: "pending" },
  ]

  return (
    <DashboardLayout 
      title="Teacher Assessor Portal" 
      subtitle={`Welcome back, ${teacherName}. Manage your 2-test assessment cycle.`}
    >
      <div className="space-y-8 pb-10">
        {/* Quick Teacher Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/create-test" className="group">
            <Card className="border-0 shadow-sm bg-primary/5 hover:bg-primary/10 transition-colors border-l-4 border-primary h-full">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <Plus className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-bold uppercase tracking-widest text-xs">Create New Test</h3>
              </CardContent>
            </Card>
          </Link>
          <Link href="/question-bank" className="group">
            <Card className="border-0 shadow-sm bg-accent/5 hover:bg-accent/10 transition-colors border-l-4 border-accent h-full">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <Database className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-bold uppercase tracking-widest text-xs">Access Q-Bank</h3>
              </CardContent>
            </Card>
          </Link>
          <Link href="/results" className="group">
            <Card className="border-0 shadow-sm bg-secondary/5 hover:bg-secondary/10 transition-colors border-l-4 border-secondary h-full">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <BarChart3 className="h-8 w-8 text-secondary group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-bold uppercase tracking-widest text-xs">View Class Results</h3>
              </CardContent>
            </Card>
          </Link>
          <div className="group cursor-default">
            <Card className="border-0 shadow-sm bg-slate-500/5 transition-colors border-l-4 border-slate-300 h-full opacity-60">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <CalendarCheck className="h-8 w-8 text-slate-400" />
                <h3 className="font-heading font-bold uppercase tracking-widest text-xs text-slate-500">Term 2 Schedule</h3>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* The 2-Test Cycle Tracking */}
        <div className="space-y-4 pt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold font-heading uppercase tracking-tighter">Your Active Assessment Cycle</h2>
            <Badge variant="outline" className="font-bold tracking-widest text-[10px] uppercase">Term 2 • Active</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {assessments.map((item, index) => (
              <Card key={index} className="premium-card border-0 shadow-sm overflow-hidden group">
                <CardHeader className="bg-primary/5 pb-4">
                  <div className="flex justify-between items-center">
                    <Badge className="bg-primary text-[10px] font-bold tracking-widest uppercase">Slot {item.slot}</Badge>
                    <span className="text-[10px] font-medium text-muted-foreground uppercase py-0.5 px-2 bg-background rounded-full border">Room 5</span>
                  </div>
                  <CardTitle className="text-xl font-bold font-heading pt-2">{item.level}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {/* Test 1 - Mid-Term */}
                  <div className="flex items-center justify-between p-3 rounded-xl border bg-card transition-all group-hover:border-primary/30">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${item.midTerm === 'published' ? 'bg-green-500/10 text-green-600' : 'bg-orange-500/10 text-orange-600'}`}>
                        <FileText className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold uppercase tracking-tighter">Mid-Term (Test 1)</span>
                        <span className="text-[10px] text-muted-foreground italic">
                          {item.midTerm === 'published' ? 'Assessment Live' : 'Not Started'}
                        </span>
                      </div>
                    </div>
                    {item.midTerm === 'published' ? (
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                    ) : (
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-primary/10">
                        <Send className="h-3 w-3 text-primary" />
                      </Button>
                    )}
                  </div>

                  {/* Test 2 - Final */}
                  <div className="flex items-center justify-between p-3 rounded-xl border bg-card/50 transition-all opacity-70">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-muted text-muted-foreground">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold uppercase tracking-tighter">Final (Test 2)</span>
                        <span className="text-[10px] text-muted-foreground italic">Available in 4 weeks</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-[9px] font-bold bg-muted/20">LOCKED</Badge>
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
