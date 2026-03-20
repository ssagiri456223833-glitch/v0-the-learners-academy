"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { User, Mail, Shield, Settings, LogOut, CheckCircle2 } from "lucide-react"

export default function AdminProfile() {
  const profile = { name: "System Administrator", email: "admin@thelearners.edu", role: "Superuser" }

  return (
    <DashboardLayout 
      title="Admin Profile" 
    >
      <div className="max-w-4xl mx-auto space-y-12 pb-12">
        {/* User Credential Header */}
        <div className="flex flex-col md:flex-row items-center gap-10 bg-white border border-border p-10 rounded-lg shadow-sm">
          <div className="relative group">
            <Avatar className="h-40 w-40 border border-border shadow-inner transition-colors group-hover:border-primary/20">
              <AvatarImage src="" />
              <AvatarFallback className="bg-slate-50 text-foreground text-5xl font-bold">SA</AvatarFallback>
            </Avatar>
            <div className="absolute inset-0 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
          <div className="flex-1 text-center md:text-left space-y-6">
             <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Badge variant="outline" className="border-primary/30 text-primary font-bold text-[10px] tracking-widest uppercase py-1.5 px-4 h-6">System Admin</Badge>
                <Badge variant="outline" className="border-border text-muted-foreground font-bold text-[10px] tracking-widest uppercase py-1.5 px-4 h-6">Term 2 Active</Badge>
             </div>
             <h1 className="page-title text-[48px] text-foreground leading-none">{profile.name}</h1>
             <p className="text-[14px] font-medium text-muted-foreground flex items-center justify-center md:justify-start gap-3">
                <Mail className="h-4 w-4 opacity-40" />
                {profile.email}
             </p>
          </div>
          <div className="flex gap-4">
             <Button variant="outline" className="btn-secondary h-12 w-12 p-0 border-border hover:border-primary transition-all">
                <Settings className="h-5 w-5 opacity-50 group-hover:opacity-100" />
             </Button>
             <Button className="btn-primary h-12 px-8 gap-3 text-[12px] font-bold uppercase tracking-widest">
                <Shield className="h-4 w-4" />
                Root Access
             </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
