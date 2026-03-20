"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, UserCheck, Settings, Save, RotateCcw, Plus, Shapes, Activity, ShieldCheck, Users, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

export default function AdminDashboard() {
  return (
    <DashboardLayout 
      title="Academy Admin" 
      subtitle="Management & Academic Term Overview"
    >
      <div className="space-y-10 pb-12">
        {/* Protocol Health Analytics (Premium Widget) */}
        <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden">
          <CardHeader className="bg-slate-50 border-b border-border py-8 px-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Activity className="h-5 w-5 text-primary opacity-60" />
                <CardTitle className="page-title text-[24px] text-foreground tracking-tight underline underline-offset-4 decoration-primary/20 leading-none">Academy Metrics</CardTitle>
              </div>
              <Badge variant="outline" className="text-success border-success/30 bg-success/5 font-bold text-[10px] tracking-widest px-4 h-7 uppercase">Term Active</Badge>
            </div>
            <CardDescription className="micro-text text-muted-foreground font-semibold mt-3 uppercase tracking-widest opacity-60">Live performance summary</CardDescription>
          </CardHeader>
          <CardContent className="p-10">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Staff:Student Ratio */}
                <div className="space-y-5">
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <Users className="h-3.5 w-3.5 opacity-40" />
                         <span className="text-[12px] font-semibold uppercase tracking-widest text-foreground opacity-80">Teacher Load</span>
                      </div>
                      <span className="text-[14px] font-semibold text-primary">1 : 12</span>
                   </div>
                   <Progress value={65} className="h-1.5 bg-slate-100 rounded-full" />
                   <p className="micro-text text-muted-foreground font-semibold opacity-60">Optimization target reached for Term 2.</p>
                </div>

                {/* Total Faculty Presence */}
                <div className="space-y-5">
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <UserCheck className="h-3.5 w-3.5 opacity-40" />
                         <span className="text-[12px] font-semibold uppercase tracking-widest text-foreground opacity-80">Teacher Presence</span>
                      </div>
                      <span className="text-[14px] font-semibold text-primary">18 / 22</span>
                   </div>
                   <Progress value={82} className="h-1.5 bg-slate-100 rounded-full" />
                   <p className="micro-text text-muted-foreground font-semibold opacity-60">Active sessions currently in system.</p>
                </div>

                {/* Live Room Occupancy */}
                <div className="space-y-5">
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <MapPin className="h-3.5 w-3.5 opacity-40" />
                         <span className="text-[12px] font-semibold uppercase tracking-widest text-foreground opacity-80">Room Occupancy</span>
                      </div>
                      <span className="text-[14px] font-semibold text-primary">76%</span>
                   </div>
                   <Progress value={76} className="h-1.5 bg-slate-100 rounded-full" />
                   <p className="micro-text text-muted-foreground font-semibold opacity-60">Classroom allocation at capacity.</p>
                </div>
             </div>
          </CardContent>
        </Card>

        {/* Institutional Control Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/admin/timetable" className="group">
            <Card className="border border-border bg-white shadow-sm btn-interactive rounded-lg overflow-hidden h-full">
              <CardContent className="p-8 flex items-center gap-6">
                <div className="p-3.5 rounded-md bg-primary/5 text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                   <h3 className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60">Schedule</h3>
                   <p className="text-[18px] font-semibold text-foreground mt-1 tracking-tight">System Timetable</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link href="/admin/classes" className="group">
            <Card className="border border-border bg-white shadow-sm btn-interactive rounded-lg overflow-hidden h-full">
              <CardContent className="p-8 flex items-center gap-6">
                <div className="p-3.5 rounded-md bg-primary/5 text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <UserCheck className="h-5 w-5" />
                </div>
                <div>
                   <h3 className="micro-text font-black uppercase tracking-widest text-muted-foreground opacity-50">Academic Groups</h3>
                   <p className="text-[18px] font-bold text-foreground mt-1 tracking-tight">Class Enrollment</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link href="/admin/profile" className="group">
            <Card className="border border-border bg-white shadow-sm btn-interactive rounded-lg overflow-hidden h-full">
              <CardContent className="p-8 flex items-center gap-6">
                <div className="p-3.5 rounded-md bg-primary/5 text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Settings className="h-5 w-5" />
                </div>
                <div>
                   <h3 className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60">Settings</h3>
                   <p className="text-[18px] font-semibold text-foreground mt-1 tracking-tight">System Profile</p>
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
              <span className="micro-text text-muted-foreground font-semibold tracking-[0.2em] opacity-60">SPRING 2026 SEMESTER</span>
            </div>
            <div>
              <h2 className="text-[28px] font-semibold text-foreground leading-tight">Current Term Status</h2>
              <p className="text-[14px] font-medium text-muted-foreground mt-3">Ends in 45 Days • Assessment Phase Open</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <Button variant="outline" className="btn-secondary h-12 px-6 gap-2">
                <RotateCcw className="h-4 w-4" />
                Restart Term
             </Button>
             <Button className="btn-primary h-12 px-8 gap-2">
                <Save className="h-4 w-4" />
                Save Settings
             </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
