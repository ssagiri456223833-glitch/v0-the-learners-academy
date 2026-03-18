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
    { level: "Speaking Class", teacher: "Ms. Hadisa", room: "5" },
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
    { level: "Speaking Class", teacher: "Ms. Hadisa", room: "5" },
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
    { level: "Speaking Class", teacher: "Sir Qurban Ali", room: "4" },
  ],
]

export function TimetableGrid() {
  const [isEidMode, setIsEidMode] = useState(false)

  return (
    <Card className="premium-card border-0 shadow-sm overflow-hidden">
      <CardHeader className="bg-primary/5 border-b flex flex-col md:flex-row md:items-center justify-between gap-4 py-6">
        <div className="space-y-1">
          <CardTitle className="font-heading text-2xl font-bold flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            Academy Timetable
          </CardTitle>
          <p className="text-sm text-muted-foreground">Manage class schedules and teacher assignments</p>
        </div>
        <div className="flex items-center gap-3 bg-card px-4 py-2 rounded-full border shadow-sm">
          <Clock className="h-4 w-4 text-primary" />
          <Label htmlFor="eid-mode" className="text-sm font-semibold cursor-pointer">
            After Eid Timing
          </Label>
          <Switch 
            id="eid-mode" 
            checked={isEidMode}
            onCheckedChange={setIsEidMode}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {TIMETABLE_SLOTS.map((slot, index) => (
            <div key={slot.id} className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-500" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-primary font-bold">Slot {slot.id}</Badge>
                  <span className="font-bold text-lg">{isEidMode ? slot.eid : slot.standard}</span>
                </div>
                {isEidMode && <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/20">Shifted</Badge>}
              </div>

              <div className="space-y-2">
                {scheduleData[index].map((item, i) => (
                  <div key={i} className="group flex items-center gap-3 p-3 rounded-xl border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col items-center justify-center w-10 h-10 rounded-lg bg-secondary/50 font-bold text-sm text-secondary-foreground group-hover:bg-primary group-hover:text-white transition-colors">
                      <MapPin className="h-3 w-3 mb-0.5" />
                      {item.room}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-3 w-3 text-primary" />
                        <p className="font-bold text-sm truncate">{item.level}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <User className="h-3 w-3 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground truncate">{item.teacher}</p>
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
