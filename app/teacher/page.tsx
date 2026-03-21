"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TEACHER_ASSESSMENTS } from "@/lib/mock-data"
import { 
  PlusCircle, 
  Database, 
  MonitorPlay, 
  BarChart3, 
  FileText, 
  CheckCircle2, 
  Clock, 
  ArrowRight 
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function TeacherDashboard() {
  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      {/* Page Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Teacher Central</h1>
        <p className="text-slate-500 font-medium">Manage your classes, assessments, and monitor student progress.</p>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: "Create New Test", icon: PlusCircle, href: "/teacher/create-test" },
          { name: "Question Bank", icon: Database, href: "/teacher/question-bank" },
          { name: "Live Monitoring", icon: MonitorPlay, href: "/teacher/monitoring" },
          { name: "View Analytics", icon: BarChart3, href: "/teacher/analytics" },
        ].map((action) => (
          <Link key={action.name} href={action.href}>
            <Card variant="action" className="p-6 flex flex-col items-center text-center gap-4">
              <div className="p-3 rounded-xl bg-primary/5 text-primary">
                <action.icon className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{action.name}</span>
            </Card>
          </Link>
        ))}
      </div>

      {/* Active Assessments Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            Active Assessments
            <Badge variant="outline" className="text-[10px] font-bold border-slate-200">Term 2</Badge>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {TEACHER_ASSESSMENTS.map((assessment) => (
            <Card key={assessment.id} variant="content" className="premium-card-hover group">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{assessment.level}</h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Room {assessment.room} • Slot {assessment.slot}</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
              <div className="p-6 space-y-3">
                {/* Mid-Term Status */}
                <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "p-2 rounded-lg border",
                      assessment.midTerm === 'published' 
                        ? "bg-emerald-50 border-emerald-100 text-emerald-600" 
                        : "bg-amber-50 border-amber-100 text-amber-600"
                    )}>
                      <FileText className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-800">Mid-Term</span>
                      <span className="text-[10px] font-bold uppercase text-slate-400 tracking-tighter">
                        {assessment.midTerm === 'published' ? 'Published' : 'Draft'}
                      </span>
                    </div>
                  </div>
                  {assessment.midTerm === 'published' && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                </div>

                {/* Final Assessment Status (Locked) */}
                <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-white opacity-40 grayscale">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-400">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-800">Final Exam</span>
                      <span className="text-[10px] font-bold uppercase text-slate-400 tracking-tighter">Locked</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
