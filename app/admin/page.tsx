"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, UserCheck, Settings, Save, RotateCcw, Plus, Shapes } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function AdminDashboard() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <DashboardLayout 
      title="Institutional Admin" 
      subtitle="Protocol Management & Term Execution Cycle"
    >
      <div className="space-y-10 pb-12">
        {/* Institutional Control Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/admin/timetable" className="group">
            <Card className="border border-border bg-white shadow-sm hover:shadow-md transition-all rounded-lg overflow-hidden group">
              <CardContent className="p-6 flex items-center gap-6">
                <div className="p-3 rounded-md bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                   <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground opacity-60">System Schedule</h3>
                   <p className="text-[16px] font-semibold text-foreground mt-1">Master Timetable</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link href="/admin/classes" className="group">
            <Card className="border border-border bg-white shadow-sm hover:shadow-md transition-all rounded-lg overflow-hidden group">
              <CardContent className="p-6 flex items-center gap-6">
                <div className="p-3 rounded-md bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <UserCheck className="h-5 w-5" />
                </div>
                <div>
                   <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground opacity-60">Academic Groups</h3>
                   <p className="text-[16px] font-semibold text-foreground mt-1">Class Enrollment</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link href="/admin/profile" className="group">
            <Card className="border border-border bg-white shadow-sm hover:shadow-md transition-all rounded-lg overflow-hidden group">
              <CardContent className="p-6 flex items-center gap-6">
                <div className="p-3 rounded-md bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Settings className="h-5 w-5" />
                </div>
                <div>
                   <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground opacity-60">Environment</h3>
                   <p className="text-[16px] font-semibold text-foreground mt-1">System Profile</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Live Term Deployment Summary */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 p-10 bg-white border border-border shadow-sm rounded-lg">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="border-primary/30 text-primary uppercase font-bold text-[10px] px-3 py-1">Term 2 Active</Badge>
              <span className="micro-text text-muted-foreground font-bold tracking-[0.2em] opacity-40">SPRING 2026 AUDIT CYCLE</span>
            </div>
            <div>
              <h2 className="text-[28px] font-semibold text-foreground leading-tight italic decoration-primary underline underline-offset-8 decoration-2">Protocol Environment Status</h2>
              <p className="text-[14px] font-medium text-muted-foreground mt-3">Current Status: Ends in 45 Days • Internal Assessment Phase Open</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <Button variant="outline" className="btn-secondary h-12 px-6 gap-2">
                <RotateCcw className="h-4 w-4" />
                Cycle Reset
             </Button>
             <Button className="btn-primary h-12 px-8 gap-2">
                <Save className="h-4 w-4" />
                Commit Protocol
             </Button>
          </div>
        </div>

        {/* Analytical Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden group">
              <CardHeader className="bg-slate-50 border-b border-border py-6 px-8 flex flex-row items-center justify-between">
                 <div className="flex items-center gap-3">
                    <UserCheck className="h-4 w-4 text-primary opacity-60" />
                    <CardTitle className="text-[18px] font-semibold italic text-foreground tracking-tight">Staff Presence Audit</CardTitle>
                 </div>
                 <Badge variant="outline" className="text-[10px] font-bold opacity-50 uppercase tracking-tighter">Live Feed</Badge>
              </CardHeader>
              <CardContent className="p-8">
                 <div className="flex items-center justify-between p-6 bg-slate-50 border border-border rounded-md transition-all hover:bg-white hover:shadow-inner mb-4">
                    <span className="text-[13px] font-bold uppercase tracking-widest text-muted-foreground">Recorded Attendance</span>
                    <span className="text-2xl font-black text-primary">18 / 22</span>
                 </div>
                 <p className="micro-text text-muted-foreground text-center opacity-40">Verification Protocol Required for Discrepancies</p>
              </CardContent>
           </Card>

           <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden group">
              <CardHeader className="bg-slate-50 border-b border-border py-6 px-8 flex flex-row items-center justify-between">
                 <div className="flex items-center gap-3">
                    <Plus className="h-4 w-4 text-primary opacity-60" />
                    <CardTitle className="text-[18px] font-semibold italic text-foreground tracking-tight">Module Registration</CardTitle>
                 </div>
                 <Badge variant="outline" className="text-[10px] font-bold opacity-50 uppercase tracking-tighter">Quick Append</Badge>
              </CardHeader>
              <CardContent className="p-8">
                 <div className="grid grid-cols-3 gap-4">
                    <Button variant="outline" className="flex-col h-auto py-5 rounded-md gap-3 text-[11px] font-bold uppercase tracking-widest border-border hover:border-primary hover:bg-primary/5 hover:text-primary transition-all group">
                       <Shapes className="h-5 w-5 opacity-40 group-hover:opacity-100" />
                       New Level
                    </Button>
                    <Button variant="outline" className="flex-col h-auto py-5 rounded-md gap-3 text-[11px] font-bold uppercase tracking-widest border-border hover:border-primary hover:bg-primary/5 hover:text-primary transition-all group">
                       <Settings className="h-5 w-5 opacity-40 group-hover:opacity-100" />
                       New Room
                    </Button>
                    <Button variant="outline" className="flex-col h-auto py-5 rounded-md gap-3 text-[11px] font-bold uppercase tracking-widest border-border hover:border-primary hover:bg-primary/5 hover:text-primary transition-all group">
                       <UserCheck className="h-5 w-5 opacity-40 group-hover:opacity-100" />
                       New Staff
                    </Button>
                 </div>
              </CardContent>
           </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
