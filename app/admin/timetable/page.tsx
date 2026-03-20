"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { TimetableGrid } from "@/components/dashboard/timetable-grid"
import { Button } from "@/components/ui/button"
import { Plus, Download, Filter, ShieldCheck, Clock, User, MapPin } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { TEACHERS } from "@/lib/constants"

export default function AdminTimetable() {
  return (
    <DashboardLayout 
      title="Timetable" 
      subtitle="Schedule Class Slots & Teacher Allocations"
    >
      <div className="space-y-10 pb-12">
        {/* Institutional Control Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8">
          <div className="flex flex-wrap gap-4">
             <Button variant="outline" className="h-11 px-6 gap-3 text-[12px] font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-all">
                <Filter className="h-4 w-4 opacity-50" />
                Filter Slots
             </Button>
             <Button variant="outline" className="h-11 px-6 gap-3 text-[12px] font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-all">
                <Download className="h-4 w-4 opacity-50" />
                Export Timetable
             </Button>
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button className="btn-primary h-11 px-8 gap-3 text-[12px] font-bold uppercase tracking-widest">
                <Plus className="h-4 w-4" />
                Initialize New Slot
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md bg-white border-l border-border p-0 overflow-hidden flex flex-col">
               <SheetHeader className="bg-slate-50 border-b border-border p-8 px-10">
                   <div className="flex items-center gap-3 mb-2">
                      <ShieldCheck className="h-4 w-4 text-primary opacity-60" />
                      <SheetTitle className="page-title text-[24px] text-foreground tracking-tight underline underline-offset-4 leading-none">Schedule Class</SheetTitle>
                   </div>
                   <SheetDescription className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-60">Initialize Academy Class Slot</SheetDescription>
               </SheetHeader>

               <div className="flex-1 overflow-y-auto p-10 space-y-10">
                  {/* Assessor Allocation */}
                   <div className="space-y-6">
                      <div className="flex items-center gap-3">
                         <User className="h-4 w-4 text-primary opacity-40" />
                         <span className="text-[12px] font-semibold uppercase tracking-widest text-foreground">Teacher Assignment</span>
                      </div>
                      <div className="space-y-3">
                         <Label className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60">Assigned Teacher</Label>
                        <Select>
                           <SelectTrigger className="h-11 rounded-md border-border bg-slate-50 text-[14px] font-medium">
                              <SelectValue placeholder="Select Teacher" />
                           </SelectTrigger>
                           <SelectContent className="rounded-md border-border">
                              {TEACHERS.map((teacher) => (
                                 <SelectItem key={teacher} value={teacher} className="text-[14px]">{teacher}</SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                     </div>
                  </div>

                  {/* Temporal Parameters */}
                   <div className="space-y-6">
                      <div className="flex items-center gap-3">
                         <Clock className="h-4 w-4 text-primary opacity-40" />
                         <span className="text-[12px] font-semibold uppercase tracking-widest text-foreground">Time Parameters</span>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                         <div className="space-y-3">
                            <Label className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60">Start Time</Label>
                            <Input type="time" className="h-11 rounded-md border-border bg-slate-50 text-[14px] font-semibold tabular-nums" />
                         </div>
                         <div className="space-y-3">
                            <Label className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60">End Time</Label>
                            <Input type="time" className="h-11 rounded-md border-border bg-slate-50 text-[14px] font-semibold tabular-nums" />
                         </div>
                      </div>
                  </div>

                  {/* Environment Allocation */}
                   <div className="space-y-6">
                      <div className="flex items-center gap-3">
                         <MapPin className="h-4 w-4 text-primary opacity-40" />
                         <span className="text-[12px] font-semibold uppercase tracking-widest text-foreground">Room Allocation</span>
                      </div>
                      <div className="space-y-3">
                         <Label className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60">Classroom</Label>
                         <Select>
                            <SelectTrigger className="h-11 rounded-md border-border bg-slate-50 text-[14px] font-medium">
                               <SelectValue placeholder="Assign Room" />
                            </SelectTrigger>
                           <SelectContent className="rounded-md border-border">
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((r) => (
                                 <SelectItem key={r} value={r.toString()} className="text-[14px]">Room {r}</SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                     </div>
                  </div>
               </div>

                <SheetFooter className="bg-slate-50 border-t border-border p-8 px-10">
                   <Button className="btn-primary h-12 w-full gap-3 text-[11px] font-bold uppercase tracking-widest shadow-md">
                      Save Class Slot
                   </Button>
                </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        {/* Timetable Environment Summary */}
        <div className="bg-white border border-border shadow-sm rounded-lg overflow-hidden">
          <TimetableGrid />
        </div>

         <div className="pt-8 border-t border-border flex items-center justify-between">
            <p className="micro-text text-muted-foreground font-semibold uppercase tracking-[0.2em] opacity-30">
               Schedule Validated
            </p>
            <p className="micro-text text-muted-foreground font-semibold opacity-40">
               Cycle: 2026 Term 2
            </p>
         </div>
      </div>
    </DashboardLayout>
  )
}
