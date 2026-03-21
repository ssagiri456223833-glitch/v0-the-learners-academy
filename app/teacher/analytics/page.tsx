"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { STUDENT_PERFORMANCE_SUMMARY, STUDENT_RESULTS } from "@/lib/mock-data"
import { 
  Users, 
  Trophy, 
  Target, 
  TrendingDown,
  Search,
  Filter,
  Download
} from "lucide-react"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function TeacherAnalytics() {
  const stats = [
    { label: "Average Score", value: `${STUDENT_PERFORMANCE_SUMMARY.averageScore}%`, icon: Target, color: "text-primary" },
    { label: "Highest Score", value: `${STUDENT_PERFORMANCE_SUMMARY.highestScore}%`, icon: Trophy, color: "text-emerald-500" },
    { label: "Lowest Score", value: `${STUDENT_PERFORMANCE_SUMMARY.lowestScore}%`, icon: TrendingDown, color: "text-red-500" },
    { label: "Total Students", value: STUDENT_PERFORMANCE_SUMMARY.totalStudents, icon: Users, color: "text-slate-600" },
  ]

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Performance Analytics</h1>
          <p className="text-slate-500 font-medium">Deep dive into student results and assessment statistics.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} variant="stat" className="premium-card-hover group">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-slate-50 ${stat.color} transition-colors group-hover:bg-primary group-hover:text-white`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">{stat.label}</span>
                <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Analytics Main Area */}
      <div className="grid grid-cols-1 gap-8">
        {/* Placeholder for Charts */}
        <Card variant="content" className="p-12 border-dashed border-2 flex flex-col items-center justify-center text-center space-y-4 min-h-[300px] bg-slate-50/50">
           <div className="p-4 rounded-full bg-white border border-slate-200">
              <Target className="h-8 w-8 text-slate-300" />
           </div>
           <div className="space-y-1">
             <h3 className="text-lg font-bold text-slate-900">Score Distribution Chart</h3>
             <p className="text-sm text-slate-500 max-w-sm">Detailed visual breakdown of student performance will appear here once the assessment period ends.</p>
           </div>
        </Card>

        {/* Student Results Table */}
        <Card variant="content">
          <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900">Detailed Results</h3>
              <p className="text-sm text-slate-500 font-medium">Class: Level One (Slot 1)</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input placeholder="Search students..." className="pl-10 h-10 border-slate-200" />
              </div>
              <Button variant="outline" size="icon" className="h-10 w-10 text-slate-400">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-slate-50/50">
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-[120px] font-bold text-slate-900 text-xs uppercase tracking-widest pl-8">ID</TableHead>
                  <TableHead className="font-bold text-slate-900 text-xs uppercase tracking-widest">Student Name</TableHead>
                  <TableHead className="font-bold text-slate-900 text-xs uppercase tracking-widest">Score</TableHead>
                  <TableHead className="font-bold text-slate-900 text-xs uppercase tracking-widest text-right pr-8">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {STUDENT_RESULTS.map((student) => (
                  <TableRow key={student.id} className="group hover:bg-slate-50/50 transition-colors">
                    <TableCell className="font-bold text-slate-400 text-xs pl-8">{student.id}</TableCell>
                    <TableCell className="font-bold text-slate-900">{student.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-slate-800">{student.score}%</span>
                        <div className="flex-1 max-w-[100px] h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${student.score >= 80 ? 'bg-emerald-500' : student.score >= 60 ? 'bg-primary' : 'bg-red-500'}`} 
                            style={{ width: `${student.score}%` }} 
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right pr-8">
                      <Badge 
                        variant="outline" 
                        className={`font-bold text-[10px] uppercase tracking-widest px-3 ${
                          student.status === 'Pass' 
                            ? 'text-emerald-600 border-emerald-100 bg-emerald-50' 
                            : 'text-red-600 border-red-100 bg-red-50'
                        }`}
                      >
                        {student.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
