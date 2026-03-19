"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shapes, Users, BookOpen, Plus, ShieldCheck, MapPin, Layers } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ACADEMY_LEVELS } from "@/lib/constants"

export default function AdminClasses() {
  const [levels, setLevels] = useState([
    { name: "Level One", students: 42, activeTeachers: 4, id: "LEV-001", room: "Room 1" },
    { name: "Level Two", students: 38, activeTeachers: 3, id: "LEV-002", room: "Room 5" },
    { name: "Level Three", students: 51, activeTeachers: 5, id: "LEV-003", room: "Room 10" },
    { name: "Level Four", students: 29, activeTeachers: 2, id: "LEV-004", room: "Room 11" },
  ])

  return (
    <DashboardLayout 
      title="Class Management Console" 
      subtitle="Overview of Academic Levels • Active Enrollment Statistics"
    >
      <div className="space-y-12 pb-12">
        {/* Institutional Control Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8">
           <div className="space-y-1">
              <h3 className="text-[14px] font-black uppercase tracking-[0.2em] text-foreground opacity-60">Allocation Matrix</h3>
              <p className="micro-text text-muted-foreground font-bold italic opacity-40">Manage class levels and formal student groupings</p>
           </div>
           
           <Dialog>
              <DialogTrigger asChild>
                <Button className="btn-primary h-12 px-8 gap-3 text-[12px] font-bold uppercase tracking-widest">
                  <Plus className="h-4 w-4" />
                  Define New Class Level
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl rounded-lg border-border bg-white p-0 overflow-hidden">
                <DialogHeader className="bg-slate-50 border-b border-border p-8 px-10">
                   <div className="flex items-center gap-3 mb-2">
                      <ShieldCheck className="h-4 w-4 text-primary opacity-60" />
                      <DialogTitle className="page-title text-[24px] text-foreground tracking-tight decoration-primary/20 underline underline-offset-4 leading-none">Initialize New Protocol</DialogTitle>
                   </div>
                   <DialogDescription className="micro-text text-muted-foreground font-bold uppercase tracking-widest opacity-40 italic">Formal Academic Level Creation Cycle</DialogDescription>
                </DialogHeader>

                <div className="p-10 space-y-10">
                   {/* Segment One: Tier Identification */}
                   <div className="space-y-6">
                      <div className="flex items-center gap-3">
                         <Layers className="h-3.5 w-3.5 text-primary opacity-40" />
                         <span className="text-[12px] font-black uppercase tracking-widest text-foreground">Tier Identification</span>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                         <div className="space-y-3">
                            <Label htmlFor="level-name" className="micro-text font-black uppercase tracking-widest text-muted-foreground opacity-60">Official Name</Label>
                            <Input id="level-name" placeholder="e.g., Level Five Intermediate" className="h-11 rounded-md border-border bg-slate-50 text-[14px] font-medium" />
                         </div>
                         <div className="space-y-3">
                            <Label htmlFor="level-id" className="micro-text font-black uppercase tracking-widest text-muted-foreground opacity-60">Protocol ID</Label>
                            <Input id="level-id" placeholder="e.g., LEV-005" className="h-11 rounded-md border-border bg-slate-50 text-[14px] font-black tabular-nums" />
                         </div>
                      </div>
                   </div>

                   {/* Segment Two: Environmental Allocation */}
                   <div className="space-y-6">
                      <div className="flex items-center gap-3">
                         <MapPin className="h-3.5 w-3.5 text-primary opacity-40" />
                         <span className="text-[12px] font-black uppercase tracking-widest text-foreground">Environmental Allocation</span>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                         <div className="space-y-3">
                            <Label className="micro-text font-black uppercase tracking-widest text-muted-foreground opacity-60">Base Academy Level</Label>
                            <Select>
                               <SelectTrigger className="h-11 rounded-md border-border bg-slate-50 text-[14px] font-medium">
                                  <SelectValue placeholder="Select Institutional Tier" />
                               </SelectTrigger>
                               <SelectContent className="rounded-md border-border">
                                  {ACADEMY_LEVELS.map((level) => (
                                     <SelectItem key={level.value} value={level.value} className="text-[14px]">{level.label}</SelectItem>
                                  ))}
                               </SelectContent>
                            </Select>
                         </div>
                         <div className="space-y-3">
                            <Label className="micro-text font-black uppercase tracking-widest text-muted-foreground opacity-60">Environment (Room)</Label>
                            <Select>
                               <SelectTrigger className="h-11 rounded-md border-border bg-slate-50 text-[14px] font-medium">
                                  <SelectValue placeholder="Allocate Workspace" />
                               </SelectTrigger>
                               <SelectContent className="rounded-md border-border">
                                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((r) => (
                                     <SelectItem key={r} value={r.toString()} className="text-[14px]">Room {r}</SelectItem>
                                  ))}
                               </SelectContent>
                            </Select>
                         </div>
                      </div>
                   </div>
                </div>

                <DialogFooter className="bg-slate-50 border-t border-border p-8 px-10 gap-4">
                   <Button variant="ghost" className="h-11 px-6 text-[11px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-all">Abort Protocol</Button>
                   <Button className="btn-primary h-11 px-10 gap-3 text-[11px] font-bold uppercase tracking-widest shadow-md">
                      Commit Allocation
                   </Button>
                </DialogFooter>
              </DialogContent>
           </Dialog>
        </div>

        {/* Level Allocation Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {levels.map((level, i) => (
            <Card key={i} className="border border-border bg-white shadow-sm rounded-lg overflow-hidden group hover:shadow-md transition-all btn-interactive">
              <CardHeader className="bg-slate-50 border-b border-border p-8">
                <div className="flex justify-between items-center mb-6">
                   <div className="p-2.5 rounded-md bg-primary/5 text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Shapes className="h-5 w-5" />
                   </div>
                   <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 font-black text-[9px] tracking-[0.2em] px-3 h-6 uppercase">{level.id}</Badge>
                </div>
                <CardTitle className="page-title text-[28px] text-foreground leading-none">{level.name}</CardTitle>
                <CardDescription className="micro-text text-muted-foreground font-bold mt-3 uppercase tracking-widest opacity-40 italic flex items-center gap-2">
                   <MapPin className="h-3 w-3 opacity-50" />
                   {level.room}
                </CardDescription>
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
