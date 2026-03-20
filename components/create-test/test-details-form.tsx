"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { ACADEMY_LEVELS, TIMETABLE_SLOTS } from "@/lib/constants"
import { Settings, Clock, BookOpen, GraduationCap, Calendar, Hash, FileEdit, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface TestDetailsFormProps {
  details: {
    title: string
    level: string
    slot: string
    duration: string
    totalPoints: string
  }
  onChange: (field: string, value: string) => void
}

export function TestDetailsForm({ details, onChange }: TestDetailsFormProps) {
  return (
    <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden h-full">
      <CardHeader className="bg-slate-50 border-b border-border py-8 px-10">
        <div className="flex items-center gap-4">
          <Settings className="h-5 w-5 text-primary opacity-60" />
          <CardTitle className="text-[18px] font-semibold text-foreground tracking-tight">Test Configuration</CardTitle>
        </div>
        <CardDescription className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-60 mt-1">Primary details and metadata</CardDescription>
      </CardHeader>
      <CardContent className="p-10 space-y-12">
        {/* Test Subject & Identity */}
        <div className="space-y-4">
           <Label htmlFor="title" className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60 flex items-center gap-2">
              <FileEdit className="h-3.5 w-3.5 text-primary opacity-40 shadow-sm" />
              Assessment Title
           </Label>
           <Input
             id="title"
             placeholder="e.g., Level One - Mid-Term Proficiency"
             value={details.title}
             onChange={(e) => onChange("title", e.target.value)}
             className="h-12 rounded-md border-border focus-visible:ring-primary/10 text-[15px] font-medium"
           />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
           {/* Level Selection Node */}
           <div className="space-y-4">
              <Label htmlFor="level" className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60 flex items-center gap-2">
                 <GraduationCap className="h-3.5 w-3.5 text-primary opacity-40 shadow-sm" />
                 Academic Level
              </Label>
              <Select onValueChange={(v) => onChange("level", v)} value={details.level}>
                <SelectTrigger id="level" className="h-12 rounded-md border-border bg-slate-50/10 focus:ring-primary/10 text-[14px] font-semibold italic">
                  <SelectValue placeholder="Select Level" />
                </SelectTrigger>
                <SelectContent className="rounded-md border-border">
                  {ACADEMY_LEVELS.map((level) => (
                    <SelectItem key={level.value} value={level.label} className="text-[13px] font-medium leading-loose italic">
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
           </div>

           {/* Chronological Allocation */}
           <div className="space-y-4">
              <Label htmlFor="slot" className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60 flex items-center gap-2">
                 <Calendar className="h-3.5 w-3.5 text-primary opacity-40 shadow-sm" />
                 Time Slot
              </Label>
              <Select onValueChange={(v) => onChange("slot", v)} value={details.slot}>
                <SelectTrigger id="slot" className="h-12 rounded-md border-border bg-slate-50/10 focus:ring-primary/10 text-[14px] font-semibold italic">
                  <SelectValue placeholder="Select Slot" />
                </SelectTrigger>
                <SelectContent className="rounded-md border-border">
                  {TIMETABLE_SLOTS.map((slot) => (
                    <SelectItem key={slot.id} value={slot.id.toString()} className="text-[13px] font-medium leading-loose italic">
                      Slot {slot.id} <span className="opacity-20 mx-1">•</span> {slot.standard}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 pt-4 border-t border-slate-50">
           {/* Duration Logic */}
           <div className="space-y-4">
              <Label htmlFor="duration" className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60 flex items-center gap-2">
                 <Clock className="h-3.5 w-3.5 text-primary opacity-40 shadow-sm" />
                 Duration (Minutes)
              </Label>
              <div className="relative">
                 <Input
                   id="duration"
                   type="number"
                   placeholder="e.g., 45"
                   value={details.duration}
                   onChange={(e) => onChange("duration", e.target.value)}
                   className="h-12 rounded-md border-border focus-visible:ring-primary/10 text-[15px] font-medium tabular-nums pl-10"
                 />
                 <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-20 pointer-events-none" />
              </div>
           </div>

           {/* Points Weighting */}
           <div className="space-y-4">
              <Label htmlFor="points" className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60 flex items-center gap-2">
                 <Award className="h-3.5 w-3.5 text-primary opacity-40 shadow-sm" />
                 Total Points
              </Label>
              <div className="relative">
                 <Input
                   id="points"
                   type="number"
                   placeholder="e.g., 100"
                   value={details.totalPoints}
                   onChange={(e) => onChange("totalPoints", e.target.value)}
                   className="h-12 rounded-md border-border focus-visible:ring-primary/10 text-[15px] font-medium tabular-nums pl-10"
                 />
                 <Hash className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-20 pointer-events-none" />
              </div>
           </div>
        </div>
      </CardContent>
    </Card>
  )
}
