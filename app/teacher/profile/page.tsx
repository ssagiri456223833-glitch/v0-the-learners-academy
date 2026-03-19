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
      subtitle="Your professional identity within the The Learners Academy platform."
    >
      <div className="max-w-4xl mx-auto space-y-8 page-entrance">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white/50 backdrop-blur-xl border border-white p-8 rounded-[3rem] shadow-2xl">
          <Avatar className="h-32 w-32 border-4 border-white shadow-xl shadow-[#1d8ae2]/10 transition-transform hover:scale-105 duration-500">
            <AvatarImage src="" />
            <AvatarFallback className="bg-[#1d8ae2] text-white text-4xl font-black italic">AA</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-center md:text-left space-y-3">
             <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <Badge className="bg-[#1d8ae2]/10 text-[#1d8ae2] border-[#1d8ae2]/20 font-black text-[10px] tracking-widest uppercase py-1 px-3">Senior Assessor</Badge>
                <Badge variant="outline" className="border-[#1d8ae2]/20 text-muted-foreground font-black text-[10px] tracking-widest uppercase py-1 px-3">English Specialist</Badge>
             </div>
             <h1 className="text-4xl font-black font-heading tracking-tighter uppercase text-slate-800 leading-none">{teacherProfile.name}</h1>
             <p className="text-muted-foreground font-medium flex items-center justify-center md:justify-start gap-2 italic">
                <Mail className="h-4 w-4" />
                {teacherProfile.email}
             </p>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="h-12 w-12 rounded-2xl border-white hover:border-[#1d8ae2]/30 shadow-sm transition-all text-[#1d8ae2]">
                <Settings className="h-5 w-5" />
             </Button>
             <Button className="h-12 bg-[#1d8ae2] hover:bg-[#1d8ae2]/90 shadow-xl shadow-[#1d8ae2]/20 uppercase font-black tracking-tighter text-xs rounded-2xl px-6 gap-2">
                <UserCheck className="h-4 w-4" />
                Edit Profile
             </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <Card className="premium-card border-0 shadow-xl shadow-[#1d8ae2]/5 overflow-hidden group">
              <CardHeader className="bg-slate-50 border-b border-slate-100 flex flex-row items-center justify-between">
                 <div className="flex flex-col">
                    <CardTitle className="font-heading font-black tracking-tighter uppercase text-lg italic">Verification Level</CardTitle>
                    <CardDescription className="font-sans text-xs">Credential and expertise level</CardDescription>
                 </div>
                 <CheckCircle2 className="h-6 w-6 text-emerald-500" />
              </CardHeader>
              <CardContent className="p-6">
                 <p className="text-sm font-medium text-slate-600 mb-6 font-sans">You are authorized to create tests for Level One through Level Six. Your account status is marked as 'Expert' within the English Assessor group.</p>
                 <div className="bg-[#1d8ae2]/5 p-4 rounded-2xl border border-[#1d8ae2]/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <BookOpen className="h-4 w-4 text-[#1d8ae2]" />
                       <span className="text-xs font-black uppercase tracking-widest text-[#1d8ae2]">Active Level Authorization</span>
                    </div>
                    <span className="text-sm font-black italic text-[#1d8ae2]">Lv1-Lv6</span>
                 </div>
              </CardContent>
           </Card>

           <Card className="premium-card border-0 shadow-xl shadow-[#1d8ae2]/5 overflow-hidden group">
              <CardHeader className="bg-slate-50 border-b border-slate-100 flex flex-row items-center justify-between">
                 <div className="flex flex-col">
                    <CardTitle className="font-heading font-black tracking-tighter uppercase text-lg italic">Platform Exit</CardTitle>
                    <CardDescription className="font-sans text-xs">Securely terminate platform session</CardDescription>
                 </div>
                 <LogOut className="h-6 w-6 text-red-500" />
              </CardHeader>
              <CardContent className="p-6">
                 <p className="text-sm font-medium text-slate-600 mb-6 font-sans">For institutional security, ensure you log out after finalizing any assessment cycle or question bank entry.</p>
                 <Button variant="ghost" className="w-full h-12 rounded-[1.5rem] bg-red-500/5 text-red-700 hover:bg-red-500 hover:text-white transition-all font-black uppercase text-xs tracking-widest">Sign Out Securely</Button>
              </CardContent>
           </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
