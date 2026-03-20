"use client"

import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Users, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  PauseCircle, 
  PlayCircle,
  Search,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"

interface StudentSession {
  id: string
  name: string
  studentId: string
  status: "joined" | "in-progress" | "completed" | "disconnected"
  progress: number
  startTime: string
  lastActive: string
  warnings: number
}

const INITIAL_STUDENTS: StudentSession[] = [
  { id: "1", name: "Ahmed Khan", studentId: "L-1021", status: "in-progress", progress: 65, startTime: "14:15", lastActive: "Just now", warnings: 0 },
  { id: "2", name: "Sara Ahmed", studentId: "L-1045", status: "in-progress", progress: 40, startTime: "14:18", lastActive: "2m ago", warnings: 1 },
  { id: "3", name: "Zubair Ali", studentId: "L-2201", status: "completed", progress: 100, startTime: "14:10", lastActive: "5m ago", warnings: 0 },
  { id: "4", name: "Fatima Noor", studentId: "L-1188", status: "joined", progress: 0, startTime: "14:25", lastActive: "Just now", warnings: 0 },
  { id: "5", name: "Bilal Hassan", studentId: "L-3012", status: "disconnected", progress: 15, startTime: "14:20", lastActive: "8m ago", warnings: 3 },
]

export default function LiveMonitoringPage() {
  const [students, setStudents] = useState<StudentSession[]>(INITIAL_STUDENTS)
  const [searchTerm, setSearchTerm] = useState("")

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStudents(prev => prev.map(s => {
        if (s.status === "in-progress" && s.progress < 95) {
          const jump = Math.floor(Math.random() * 5)
          return { ...s, progress: s.progress + jump, lastActive: "Just now" }
        }
        if (s.status === "in-progress" && s.progress >= 95) {
          return { ...s, progress: 100, status: "completed", lastActive: "Just now" }
        }
        return s
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.studentId.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const stats = {
    active: students.filter(s => s.status === "in-progress").length,
    completed: students.filter(s => s.status === "completed").length,
    total: students.length
  }

  return (
    <DashboardLayout 
      title="Live Test Monitoring" 
      subtitle="Real-time surveillance of Level 3 • Slot 2 Assessment"
    >
      <div className="space-y-8 pb-12">
        {/* Header Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <Link href="/teacher" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-semibold uppercase tracking-widest">
            <ArrowLeft className="h-4 w-4" />
            Return to Portal
          </Link>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-3 px-4 py-2 bg-success/5 border border-success/20 rounded-full">
                <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                <span className="text-[11px] font-bold text-success uppercase tracking-widest">Server Active</span>
             </div>
             <Button className="btn-primary h-11 gap-3 text-[11px] font-bold uppercase tracking-widest">
                <PauseCircle className="h-4 w-4" />
                Suspend Global Timer
             </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden">
             <CardContent className="p-8 flex items-center gap-6">
                <div className="p-3 rounded-md bg-primary/5 text-primary border border-primary/10">
                   <Users className="h-6 w-6" />
                </div>
                <div>
                   <p className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-60">Connected Candidates</p>
                   <p className="text-[28px] font-semibold text-foreground leading-none mt-1">{stats.total}</p>
                </div>
             </CardContent>
           </Card>
           <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden">
             <CardContent className="p-8 flex items-center gap-6">
                <div className="p-3 rounded-md bg-success/5 text-success border border-success/10">
                   <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                   <p className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-60">Successfully Submitted</p>
                   <p className="text-[28px] font-semibold text-foreground leading-none mt-1">{stats.completed}</p>
                </div>
             </CardContent>
           </Card>
           <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden">
             <CardContent className="p-8 flex items-center gap-6">
                <div className="p-3 rounded-md bg-warning/5 text-warning border border-warning/10">
                   <Clock className="h-6 w-6" />
                </div>
                <div>
                   <p className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-60">Avg. Remaining Time</p>
                   <p className="text-[28px] font-semibold text-foreground leading-none mt-1">28:15</p>
                </div>
             </CardContent>
           </Card>
        </div>

        {/* Monitoring Grid */}
        <div className="space-y-6">
           <div className="flex items-center justify-between border-b border-border pb-6">
              <h2 className="text-[20px] font-semibold text-foreground tracking-tight">Active Session Queue</h2>
              <div className="relative w-72">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground opacity-40" />
                 <Input 
                   placeholder="Filter by Student ID / Name..." 
                   className="pl-10 h-10 border-border bg-white rounded-md text-sm font-medium"
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                 />
              </div>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredStudents.map((student) => (
                <Card key={student.id} className="border border-border bg-white shadow-sm rounded-lg overflow-hidden group hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6 space-y-6">
                    <div className="flex items-start justify-between">
                       <div className="flex gap-4">
                          <div className="w-12 h-12 rounded-full bg-slate-100 border border-border flex items-center justify-center text-[18px] font-serif font-semibold text-primary">
                             {student.name.charAt(0)}
                          </div>
                          <div>
                             <h4 className="text-[16px] font-semibold text-foreground leading-tight">{student.name}</h4>
                             <p className="text-[12px] font-medium text-muted-foreground opacity-60 mt-1 uppercase tracking-widest">{student.studentId}</p>
                          </div>
                       </div>
                       <Badge 
                         variant="outline" 
                         className={`text-[9px] font-semibold uppercase tracking-widest px-3 h-6 ${
                           student.status === 'completed' ? 'border-success/30 bg-success/5 text-success' :
                           student.status === 'disconnected' ? 'border-destructive/30 bg-destructive/5 text-destructive' :
                           'border-primary/30 bg-primary/5 text-primary'
                         }`}
                       >
                         {student.status.replace('-', ' ')}
                       </Badge>
                    </div>

                    <div className="space-y-2">
                       <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-widest opacity-40">
                          <span>Task Progress</span>
                          <span>{student.progress}%</span>
                       </div>
                       <Progress value={student.progress} className="h-1.5 bg-slate-100" />
                    </div>

                    <div className="grid grid-cols-3 gap-4 border-t border-slate-50 pt-4">
                       <div className="text-center">
                          <p className="micro-text text-muted-foreground font-semibold opacity-40 tracking-wider">Start</p>
                          <p className="text-[13px] font-semibold text-foreground mt-1 tabular-nums">{student.startTime}</p>
                       </div>
                       <div className="text-center border-x border-slate-50">
                          <p className="micro-text text-muted-foreground font-semibold opacity-40 tracking-wider">Active</p>
                          <p className="text-[13px] font-semibold text-foreground mt-1 tabular-nums italic opacity-80">{student.lastActive}</p>
                       </div>
                       <div className="text-center">
                          <p className="micro-text text-muted-foreground font-semibold opacity-40 tracking-wider">Warns</p>
                          <p className={`text-[13px] font-semibold mt-1 tabular-nums ${student.warnings > 0 ? 'text-destructive' : 'text-foreground opacity-60'}`}>{student.warnings}</p>
                       </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                       <Button size="sm" variant="outline" className="flex-1 h-10 border-border text-[10px] font-semibold uppercase tracking-[0.15em] opacity-60 hover:opacity-100 hover:bg-slate-50 transition-all">
                          Force Halt
                       </Button>
                       <Button size="sm" variant="outline" className="flex-1 h-10 border-border text-[10px] font-semibold uppercase tracking-[0.15em] opacity-60 hover:opacity-100 hover:bg-slate-50 transition-all">
                          Inspect Logs
                       </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
           </div>
        </div>

        {/* Active Test Activity Log */}
        <Card className="border border-border bg-slate-50/50 shadow-inner rounded-lg overflow-hidden">
           <CardHeader className="py-6 px-10 border-b border-white">
              <CardTitle className="page-title text-[20px] text-foreground flex items-center gap-3">
                 <AlertCircle className="h-5 w-5 text-primary opacity-40" />
                 Institutional Surveillance Log
              </CardTitle>
           </CardHeader>
           <CardContent className="p-0">
              <div className="max-h-60 overflow-y-auto p-10 space-y-4">
                 <div className="flex gap-6 text-[13px] font-medium animate-in slide-in-from-left-2 duration-500">
                    <span className="text-muted-foreground opacity-30 tabular-nums">14:52:12</span>
                    <span className="text-success font-semibold">SUCCESS:</span>
                    <p className="text-foreground opacity-70">Candidate L-2201 (Zubair Ali) has validated and committed assessment.</p>
                 </div>
                 <div className="flex gap-6 text-[13px] font-medium animate-in slide-in-from-left-2 duration-500 delay-75">
                    <span className="text-muted-foreground opacity-30 tabular-nums">14:48:05</span>
                    <span className="text-destructive font-semibold">WARNING:</span>
                    <p className="text-foreground opacity-70">Candidate L-3012 (Bilal Hassan) detected focus-switch violation (Tab Switch #3).</p>
                 </div>
                 <div className="flex gap-6 text-[13px] font-medium opacity-40">
                    <span className="text-muted-foreground opacity-30 tabular-nums">14:45:22</span>
                    <p className="text-foreground">Batch Level 3 Assessment Initialized globally.</p>
                 </div>
              </div>
           </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
