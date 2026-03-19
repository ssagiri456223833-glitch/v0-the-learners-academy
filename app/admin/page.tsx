"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { TimetableGrid } from "@/components/dashboard/timetable-grid"
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
      subtitle="Manage the 3-month term cycle and academy resources."
    >
      <div className="space-y-8 pb-10">
        {/* Quick Admin Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/admin/timetable" className="group">
            <Card className="border-0 shadow-sm bg-primary/5 hover:bg-primary/10 transition-all border-l-4 border-primary">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-primary p-3 rounded-2xl text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                   <h3 className="font-heading font-black uppercase tracking-widest text-[10px]">Master Timetable</h3>
                   <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tight">Manage Slots & Teachers</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link href="/admin/classes" className="group">
            <Card className="border-0 shadow-sm bg-accent/5 hover:bg-accent/10 transition-all border-l-4 border-accent">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-accent p-3 rounded-2xl text-white shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform">
                  <UserCheck className="h-5 w-5" />
                </div>
                <div>
                   <h3 className="font-heading font-black uppercase tracking-widest text-[10px]">Class & Enrollment</h3>
                   <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tight">Levels & Student Groupings</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link href="/admin/profile" className="group">
            <Card className="border-0 shadow-sm bg-secondary/5 hover:bg-secondary/10 transition-all border-l-4 border-secondary">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-slate-800 p-3 rounded-2xl text-white shadow-lg shadow-slate-900/20 group-hover:scale-110 transition-transform">
                  <Settings className="h-5 w-5" />
                </div>
                <div>
                   <h3 className="font-heading font-black uppercase tracking-widest text-[10px]">System Profile</h3>
                   <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tight">Institutional Credentials</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Term Control Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-[2rem] bg-white border border-white shadow-xl shadow-primary/5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge className="bg-primary hover:bg-primary font-black uppercase tracking-widest text-[9px] px-3">Active Term 2</Badge>
              <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest italic opacity-60">Spring 2026 Cycle</span>
            </div>
            <h2 className="text-2xl font-black font-heading tracking-tighter uppercase leading-tight">Live Term Management</h2>
            <p className="text-xs font-semibold text-muted-foreground italic uppercase tracking-tight">Status: Ends in 45 Days • Assessment Phase Open</p>
          </div>
          <div className="flex items-center gap-3">
             <Button variant="outline" className="h-11 px-6 rounded-2xl border-white bg-white hover:bg-slate-50 shadow-sm transition-all gap-2 text-slate-600 font-bold uppercase text-[10px] tracking-widest">
                <RotateCcw className="h-4 w-4" />
                Cycle Reset
             </Button>
             <Button className="h-11 px-8 rounded-2xl bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 gap-2 font-black uppercase text-[10px] tracking-tighter">
                <Save className="h-4 w-4" />
                Commit Changes
             </Button>
          </div>
        </div>

        {/* Action Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <Card className="premium-card border-0 shadow-2xl rounded-[2rem] overflow-hidden group">
              <CardHeader className="bg-primary/5 pb-6 border-b border-primary/10">
                 <div className="flex items-center gap-3">
                    <div className="bg-primary p-2 rounded-xl text-white">
                       <UserCheck className="h-4 w-4" />
                    </div>
                    <CardTitle className="font-heading font-black tracking-tighter uppercase text-lg italic">Staff Attendance Summary</CardTitle>
                 </div>
              </CardHeader>
              <CardContent className="p-6">
                 <div className="flex items-center justify-between p-4 bg-primary/5 rounded-2xl border border-primary/10 mb-4 transition-all hover:bg-primary/10">
                    <span className="text-xs font-black uppercase tracking-widest text-primary">Today's Presence</span>
                    <Badge className="bg-primary font-black text-sm">18/22</Badge>
                 </div>
                 <p className="text-[10px] font-bold text-muted-foreground uppercase text-center tracking-widest">Data synced from External Gateway</p>
              </CardContent>
           </Card>

           <Card className="premium-card border-0 shadow-2xl rounded-[2rem] overflow-hidden group">
              <CardHeader className="bg-accent/5 pb-6 border-b border-accent/10">
                 <div className="flex items-center gap-3">
                    <div className="bg-accent p-2 rounded-xl text-white">
                       <Plus className="h-4 w-4" />
                    </div>
                    <CardTitle className="font-heading font-black tracking-tighter uppercase text-lg italic">Quick Institutional Add</CardTitle>
                 </div>
              </CardHeader>
              <CardContent className="p-6">
                 <div className="grid grid-cols-3 gap-3">
                    <Button variant="outline" className="flex-col h-auto py-4 rounded-2xl gap-2 text-[9px] font-black uppercase tracking-widest transition-all hover:border-accent hover:text-accent">
                       <Shapes className="h-5 w-5" />
                       Level
                    </Button>
                    <Button variant="outline" className="flex-col h-auto py-4 rounded-2xl gap-2 text-[9px] font-black uppercase tracking-widest transition-all hover:border-accent hover:text-accent">
                       <Settings className="h-5 w-5" />
                       Room
                    </Button>
                    <Button variant="outline" className="flex-col h-auto py-4 rounded-2xl gap-2 text-[9px] font-black uppercase tracking-widest transition-all hover:border-accent hover:text-accent">
                       <UserCheck className="h-5 w-5" />
                       Staff
                    </Button>
                 </div>
              </CardContent>
           </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
