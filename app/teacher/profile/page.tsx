"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Settings, LogOut, CheckCircle2, UserCheck, BookOpen } from "lucide-react"

export default function TeacherProfile() {
  const teacherProfile = { name: "Sir Abbas Ali", email: "abbas.ali@thelearners.edu", role: "Assessor" }

  return (
    <DashboardLayout 
      title="Teacher Assessor Profile" 
      subtitle="Identity & Credential Management Module • Assessor #AA7042"
    >
      <div className="max-w-4xl mx-auto space-y-12 pb-12">
        {/* Assessor Credential Header */}
        <div className="flex flex-col md:flex-row items-center gap-10 bg-white border border-border p-10 rounded-lg shadow-sm">
          <div className="relative group">
            <Avatar className="h-40 w-40 border border-border shadow-inner transition-colors group-hover:border-primary/20">
              <AvatarImage src="" />
              <AvatarFallback className="bg-slate-50 text-foreground text-5xl font-bold italic">AA</AvatarFallback>
            </Avatar>
            <div className="absolute inset-0 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
          <div className="flex-1 text-center md:text-left space-y-6">
             <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Badge variant="outline" className="border-primary/30 text-primary font-bold text-[10px] tracking-widest uppercase py-1.5 px-4 h-6">Senior Assessor</Badge>
                <Badge variant="outline" className="border-border text-muted-foreground font-bold text-[10px] tracking-widest uppercase py-1.5 px-4 h-6">English Specialist</Badge>
             </div>
             <h1 className="page-title text-[48px] text-foreground leading-none">{teacherProfile.name}</h1>
             <p className="text-[14px] font-medium text-muted-foreground flex items-center justify-center md:justify-start gap-3 italic">
                <Mail className="h-4 w-4 opacity-40" />
                {teacherProfile.email}
             </p>
          </div>
          <div className="flex gap-4">
             <Button variant="outline" className="btn-secondary h-12 w-12 p-0 border-border hover:border-primary transition-all">
                <Settings className="h-5 w-5 opacity-50 group-hover:opacity-100" />
             </Button>
             <Button className="btn-primary h-12 px-8 gap-3 text-[12px] font-bold uppercase tracking-widest">
                <UserCheck className="h-4 w-4" />
                Edit Profile
             </Button>
          </div>
        </div>

        {/* Diagnostic Control Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden group">
              <CardHeader className="bg-slate-50 border-b border-border py-6 px-8 flex flex-row items-center justify-between">
                 <div className="flex flex-col gap-1">
                    <CardTitle className="page-title text-[20px] text-foreground underline underline-offset-4 decoration-primary/10">Verification Tier</CardTitle>
                    <CardDescription className="micro-text text-muted-foreground font-bold tracking-widest uppercase opacity-40">Operational Status Review</CardDescription>
                 </div>
                 <CheckCircle2 className="h-6 w-6 text-success opacity-60" />
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                 <p className="text-[14px] font-medium text-muted-foreground italic leading-relaxed">You are authorized to create tests for Level One through Level Six. Your account status is marked as 'Expert' within the English Assessor group.</p>
                 <div className="bg-slate-50 p-6 rounded-md border border-border flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <BookOpen className="h-4 w-4 text-primary opacity-60" />
                       <span className="micro-text font-black uppercase tracking-widest text-muted-foreground opacity-50">Active Authorization</span>
                    </div>
                    <span className="text-[14px] font-black italic decoration-primary/20 underline underline-offset-4 decoration-2 text-primary">Lv1-Lv6</span>
                 </div>
              </CardContent>
           </Card>

           <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden group">
              <CardHeader className="bg-slate-50 border-b border-border py-6 px-8 flex flex-row items-center justify-between">
                 <div className="flex flex-col gap-1">
                    <CardTitle className="page-title text-[20px] text-foreground underline underline-offset-4 decoration-destructive/10">Platform Exit</CardTitle>
                    <CardDescription className="micro-text text-muted-foreground font-bold tracking-widest uppercase opacity-40">Session & Data Management</CardDescription>
                 </div>
                 <LogOut className="h-6 w-6 text-destructive opacity-40" />
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                 <p className="text-[14px] font-medium text-muted-foreground italic leading-relaxed">For institutional security, ensure you log out after finalizing any assessment cycle or question bank entry.</p>
                 <Button variant="outline" className="w-full h-12 text-[12px] font-bold uppercase tracking-widest gap-2 border-destructive/20 text-destructive hover:bg-destructive hover:text-white transition-all">
                    <LogOut className="h-4 w-4" />
                    Secure Session Termination
                 </Button>
              </CardContent>
           </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
