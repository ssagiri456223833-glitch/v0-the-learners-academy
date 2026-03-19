"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shapes, Users, BookOpen } from "lucide-react"

export default function AdminClasses() {
  const levels = [
    { name: "Level One", students: 42, activeTeachers: 4 },
    { name: "Level Two", students: 38, activeTeachers: 3 },
    { name: "Level Three", students: 51, activeTeachers: 5 },
    { name: "Level Four", students: 29, activeTeachers: 2 },
  ]

  return (
    <DashboardLayout 
      title="Class Management Console" 
      subtitle="Overview of Academic Levels • Active Enrollment Statistics"
    >
      <div className="space-y-12 pb-12">
        {/* Level Allocation Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {levels.map((level, i) => (
            <Card key={i} className="border border-border bg-white shadow-sm rounded-lg overflow-hidden group hover:shadow-md transition-all">
              <CardHeader className="bg-slate-50 border-b border-border p-8">
                <div className="flex justify-between items-center mb-6">
                   <div className="p-2 rounded-md bg-primary/5 text-primary border border-primary/10">
                      <Shapes className="h-5 w-5" />
                   </div>
                   <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 font-black text-[9px] tracking-[0.2em] px-3 uppercase">Operational Hub</Badge>
                </div>
                <CardTitle className="page-title text-[28px] text-foreground leading-none">{level.name}</CardTitle>
                <CardDescription className="micro-text text-muted-foreground font-bold mt-3 uppercase tracking-widest opacity-40 italic">Assigned Term 2 Cycle</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <Users className="h-4 w-4 text-muted-foreground opacity-40" />
                       <span className="text-[13px] font-bold text-foreground uppercase tracking-tight">Active Enrollment</span>
                    </div>
                    <span className="text-[16px] font-black italic decoration-primary/20 underline underline-offset-4 decoration-2 text-primary">{level.students}</span>
                 </div>
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <BookOpen className="h-4 w-4 text-muted-foreground opacity-40" />
                       <span className="text-[13px] font-bold text-foreground uppercase tracking-tight">Assessor Count</span>
                    </div>
                    <span className="text-[16px] font-black italic decoration-primary/20 underline underline-offset-4 decoration-2 text-primary">{level.activeTeachers}</span>
                 </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex items-center justify-between">
           <p className="micro-text text-muted-foreground font-black uppercase tracking-[0.2em] opacity-30">
              System Validation: LIVE-SECURE
           </p>
           <p className="micro-text text-muted-foreground font-bold italic opacity-40">
              Last Database Sync: Current Phase
           </p>
        </div>
      </div>
    </DashboardLayout>
  )
}
