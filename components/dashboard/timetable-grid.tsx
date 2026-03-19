"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { TIMETABLE_SLOTS } from "@/lib/constants"
import { Clock, Calendar, MapPin, User, BookOpen } from "lucide-react"

const scheduleData = [
  // Slot 1
  [
    { level: "Foundation One", teacher: "Sir Ali Haider", room: "1" },
    { level: "Foundation Two", teacher: "Ms. Noor Zahra", room: "2" },
    { level: "Foundation Three", teacher: "Sir Muhammad Basit", room: "3" },
    { level: "Beginners", teacher: "Ms. Howra Fatima", room: "4" },
    { level: "Level One", teacher: "Sir Abbas Ali", room: "6" },
    { level: "Level Two", teacher: "Ms. Sobia Batool", room: "7" },
    { level: "Speaking", teacher: "Ms. Hadisa", room: "5" },
  ],
  // Slot 2
  [
    { level: "Pre-Foundation", teacher: "Sir Ali Haider", room: "9" },
    { level: "Foundation Two", teacher: "Sir Zaheer Hassan", room: "6" },
    { level: "Foundation Three", teacher: "Sir Abbas Ali", room: "7" },
    { level: "Beginners", teacher: "Ms. Sobia Batool", room: "1" },
    { level: "Level One", teacher: "Ms. Howra Fatima", room: "2" },
    { level: "Level Two", teacher: "Sir Muhammad Basit", room: "4" },
    { level: "Level Three", teacher: "Sir Mehdi Hassani", room: "3" },
    { level: "Level Four", teacher: "Sir Mushtaq Hussain", room: "8" },
    { level: "Speaking", teacher: "Ms. Hadisa", room: "5" },
  ],
  // Slot 3
  [
    { level: "Foundation One", teacher: "Ms. Noor Zahra", room: "7" },
    { level: "Beginners", teacher: "Ms. Saima", room: "1" },
    { level: "Level One", teacher: "Ms. Sobia Batool", room: "2" },
    { level: "Level Two", teacher: "Sir Zaheer Hassan", room: "5" },
    { level: "Level Three", teacher: "Sir Mushtaq Hussain", room: "9" },
    { level: "Level Four", teacher: "Sir Itrat Ali", room: "4" },
    { level: "Level Five", teacher: "Sir Mehdi Hassani", room: "6" },
    { level: "Level Six", teacher: "Ms. Shakeela", room: "3" },
    { level: "Grammar Speaking", teacher: "Sir Sharafat Ali", room: "10" },
  ],
  // Slot 4
  [
    { level: "Foundation Three", teacher: "Sir Asif Ali", room: "7" },
    { level: "Beginners", teacher: "Sir Muhammad Basit", room: "6" },
    { level: "Level One", teacher: "Ms. Abida Ali", room: "3" },
    { level: "Level Two", teacher: "Ms. Howra Fatima", room: "2" },
    { level: "Level Three", teacher: "Sir Itrat Ali", room: "9" },
    { level: "Level Four", teacher: "Ms. Shakeela", room: "1" },
    { level: "Level Five", teacher: "Ms. Marzia Ali", room: "8" },
    { level: "Level Advanced", teacher: "Ms. Tahira Batool", room: "5" },
    { level: "Professional Advanced", teacher: "Sir Sharafat Ali", room: "10" },
    { level: "IELTS Course", teacher: "Sir Qurban Ali", room: "11" },
  ],
  // Slot 5
  [
    { level: "Foundation Two", teacher: "Ms. Roqayya Azimi", room: "6" },
    { level: "Beginners", teacher: "Sir Abbas Ali", room: "7" },
    { level: "Level One", teacher: "Ms. Saima", room: "1" },
    { level: "Level Two", teacher: "Ms. Abida Ali", room: "3" },
    { level: "Level Three", teacher: "Ms. Marzia Ali", room: "8" },
    { level: "Level Four", teacher: "Sir Zaheer Hassan", room: "2" },
    { level: "Level Five", teacher: "Sir Asif Ali", room: "9" },
    { level: "Level Six", teacher: "Ms. Tahira Batool", room: "5" },
    { level: "Speaking Class", teacher: "Sir Qurban Ali", room: "4" },
  ],
  // Slot 6
  [
    { level: "Pre-Foundation", teacher: "Ms. Iqra Fatima", room: "1" },
    { level: "Foundation One", teacher: "Sir Ali Haider", room: "6" },
    { level: "Foundation Three", teacher: "Ms. Roqayya Azimi", room: "3" },
    { level: "Beginners", teacher: "Sir Zaheer Hassan", room: "2" },
    { level: "Level One", teacher: "Sir Abbas Ali", room: "5" },
    { level: "Level Three", teacher: "Ms. Tahira Batool", room: "7" },
    { level: "Speaking", teacher: "Sir Qurban Ali", room: "4" },
  ],
]

export function TimetableGrid() {
  const [isEidMode, setIsEidMode] = useState(false)

  return (
    <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden">
      <CardHeader className="bg-slate-50 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-6 py-8 px-10">
        <div className="space-y-1">
          <CardTitle className="page-title text-[28px] flex items-center gap-3">
             Institutional Timetable
          </CardTitle>
          <p className="micro-text text-muted-foreground font-bold uppercase tracking-widest opacity-60">Term-Based Slot Management & Staff Allocation</p>
        </div>
        <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-md border border-border shadow-inner">
          <Clock className="h-4 w-4 text-primary opacity-50" />
          <Label htmlFor="eid-mode" className="text-[13px] font-bold text-foreground cursor-pointer uppercase tracking-tight">
            Eid Protocol Timing
          </Label>
          <Switch 
            id="eid-mode" 
            checked={isEidMode}
            onCheckedChange={setIsEidMode}
            className="data-[state=checked]:bg-primary"
          />
        </div>
      </CardHeader>
      <CardContent className="p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {TIMETABLE_SLOTS.map((slot, index) => (
            <div key={slot.id} className="space-y-6 animate-in fade-in slide-in-from-top-1 duration-300" style={{ animationDelay: `${index * 50}ms` }}>
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="text-primary border-primary/20 font-bold px-2 py-0.5 text-[11px]">SLOT {slot.id}</Badge>
                  <span className="text-[16px] font-semibold text-foreground italic decoration-primary/10 underline underline-offset-4 decoration-2">{isEidMode ? slot.eid : slot.standard}</span>
                </div>
                {isEidMode && <Badge className="bg-warning text-white text-[9px] font-black uppercase tracking-tighter">SHIFTED</Badge>}
              </div>

              <div className="space-y-3">
                {scheduleData[index].map((item, i) => (
                  <div key={i} className="group flex items-center gap-4 p-4 rounded-md border border-border bg-white hover:bg-slate-50 transition-all duration-200">
                    <div className="flex flex-col items-center justify-center w-12 h-12 rounded-md bg-slate-100 border border-slate-200 font-bold text-slate-800 transition-colors group-hover:bg-primary/5 group-hover:border-primary/20 group-hover:text-primary">
                      <span className="text-[10px] uppercase font-black tracking-tighter opacity-40 leading-none mb-1">Room</span>
                      <span className="text-[16px] leading-none">{item.room}</span>
                    </div>
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center gap-2">
                        <p className="text-[14px] font-bold text-foreground truncate">{item.level}</p>
                      </div>
                      <div className="flex items-center gap-2">
                         <User className="h-3 w-3 text-muted-foreground opacity-40 shrink-0" />
                         <p className="text-[12px] font-medium text-muted-foreground truncate italic">{item.teacher}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
