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
      title="Class Management" 
      subtitle="Overview of Levels, enrollments, and teaching capacity."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 page-entrance">
        {levels.map((level, i) => (
          <Card key={i} className="premium-card group hover:scale-[1.02] transition-all border-0 shadow-xl shadow-[#1d8ae2]/5 overflow-hidden">
            <CardHeader className="bg-[#1d8ae2]/5 border-b border-[#1d8ae2]/10">
              <div className="flex justify-between items-center">
                 <Shapes className="h-6 w-6 text-[#1d8ae2]" />
                 <Badge variant="secondary" className="bg-white/80 text-[#1d8ae2] border-[#1d8ae2]/20 uppercase font-black text-[10px] tracking-widest px-2">Level Focus</Badge>
              </div>
              <CardTitle className="font-heading font-black tracking-tighter uppercase text-xl pt-2">{level.name}</CardTitle>
              <CardDescription className="font-sans text-xs font-medium">Assigned to Active Term Cycle</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
               <div className="flex items-center justify-between text-sm font-bold opacity-70">
                  <div className="flex items-center gap-2">
                     <Users className="h-4 w-4" />
                     <span>Students</span>
                  </div>
                  <span className="text-[#1d8ae2]">{level.students}</span>
               </div>
               <div className="flex items-center justify-between text-sm font-bold opacity-70">
                  <div className="flex items-center gap-2">
                     <BookOpen className="h-4 w-4" />
                     <span>Teachers</span>
                  </div>
                  <span className="text-[#1d8ae2]">{level.activeTeachers}</span>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}
