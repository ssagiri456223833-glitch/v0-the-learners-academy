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
      title="Class Management" 
      subtitle="Manage Academy Classes & Level Allocations"
    >
      <div className="space-y-12 pb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8">
           
           <Dialog>
              <DialogTrigger asChild>
                <Button className="btn-primary h-12 px-8 gap-3 text-[12px] font-semibold uppercase tracking-widest">
                  <Plus className="h-4 w-4" />
                  Add New Class
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl rounded-lg border-border bg-white p-0 overflow-hidden">
                 <DialogHeader className="bg-slate-50 border-b border-border p-8 px-10">
                    <div className="flex items-center gap-3 mb-2">
                       <ShieldCheck className="h-4 w-4 text-primary opacity-60" />
                       <DialogTitle className="page-title text-[24px] text-foreground tracking-tight underline underline-offset-4 leading-none">New Class</DialogTitle>
                    </div>
                    <DialogDescription className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-60">Fill in the class details below</DialogDescription>
                 </DialogHeader>

                <div className="p-10 space-y-10">
                   {/* Class Information */}
                   <div className="space-y-6">
                       <div className="flex items-center gap-3">
                          <Layers className="h-3.5 w-3.5 text-primary opacity-40" />
                          <span className="text-[12px] font-semibold uppercase tracking-widest text-foreground">Class Information</span>
                       </div>
                      <div className="grid grid-cols-2 gap-8">
                          <div className="space-y-3">
                             <Label htmlFor="level-name" className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60">Class Name</Label>
                             <Input id="level-name" placeholder="e.g., Level Five Intermediate" className="h-11 rounded-md border-border bg-slate-50 text-[14px] font-medium" />
                          </div>
                          <div className="space-y-3">
                             <Label htmlFor="level-id" className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60">Class ID</Label>
                             <Input id="level-id" placeholder="e.g., LEV-005" className="h-11 rounded-md border-border bg-slate-50 text-[14px] font-semibold tabular-nums" />
                          </div>
                      </div>
                   </div>

                   {/* Room Assignment */}
                   <div className="space-y-6">
                      <div className="flex items-center gap-3">
                         <MapPin className="h-3.5 w-3.5 text-primary opacity-40" />
                         <span className="text-[12px] font-semibold uppercase tracking-widest text-foreground">Room Assignment</span>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                          <div className="space-y-3">
                             <Label className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60">Academy Level</Label>
                             <Select>
                                <SelectTrigger className="h-11 rounded-md border-border bg-slate-50 text-[14px] font-medium">
                                   <SelectValue placeholder="Select Level" />
                                </SelectTrigger>
                               <SelectContent className="rounded-md border-border">
                                  {ACADEMY_LEVELS.map((level) => (
                                     <SelectItem key={level.value} value={level.value} className="text-[14px]">{level.label}</SelectItem>
                                  ))}
                               </SelectContent>
                            </Select>
                         </div>
                          <div className="space-y-3">
                             <Label className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60">Room</Label>
                             <Select>
                                <SelectTrigger className="h-11 rounded-md border-border bg-slate-50 text-[14px] font-medium">
                                   <SelectValue placeholder="Assign Room" />
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
                    <Button variant="ghost" className="h-11 px-6 text-[11px] font-semibold uppercase tracking-widest opacity-40 hover:opacity-100 transition-all">Cancel</Button>
                    <Button className="btn-primary h-11 px-10 gap-3 text-[11px] font-semibold uppercase tracking-widest shadow-md">
                       Create Class
                    </Button>
                 </DialogFooter>
              </DialogContent>
           </Dialog>
        </div>

        {/* Active Classes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {levels.map((level, i) => (
            <Card key={i} className="border border-border bg-white shadow-sm rounded-lg overflow-hidden group hover:shadow-md transition-all btn-interactive">
              <CardHeader className="bg-slate-50 border-b border-border p-8">
                <div className="flex justify-between items-center mb-6">
                   <div className="p-2.5 rounded-md bg-primary/5 text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Shapes className="h-5 w-5" />
                   </div>
                    <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 font-semibold text-[9px] tracking-[0.2em] px-3 h-6 uppercase">{level.id}</Badge>
                </div>
                 <CardTitle className="page-title text-[28px] text-foreground leading-none truncate" title={level.name}>{level.name}</CardTitle>
                 <CardDescription className="micro-text text-muted-foreground font-semibold mt-3 uppercase tracking-widest opacity-60 flex items-center gap-2">
                    <MapPin className="h-3 w-3 opacity-50" />
                    {level.room}
                 </CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <Users className="h-4 w-4 text-muted-foreground opacity-40" />
                        <span className="text-[13px] font-semibold text-foreground uppercase tracking-tight">Students</span>
                     </div>
                     <span className="text-[16px] font-semibold text-primary">{level.students}</span>
                  </div>
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <BookOpen className="h-4 w-4 text-muted-foreground opacity-40" />
                        <span className="text-[13px] font-semibold text-foreground uppercase tracking-tight">Teachers</span>
                     </div>
                     <span className="text-[16px] font-semibold text-primary">{level.activeTeachers}</span>
                  </div>
              </CardContent>
            </Card>
          ))}
        </div>

         <div className="pt-8 border-t border-border flex items-center justify-between">
            <p className="micro-text text-muted-foreground font-semibold uppercase tracking-[0.2em] opacity-30">
               System Status: Active
            </p>
            <p className="micro-text text-muted-foreground font-semibold opacity-40">
               Last Sync: Live
            </p>
         </div>
      </div>
    </DashboardLayout>
  )
}
