"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, BookOpen, Clock, User, Play, Hash, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ACADEMY_LEVELS, TIMETABLE_SLOTS } from "@/lib/constants"

export default function StudentPortal() {
  const router = useRouter()
  const [studentId, setStudentId] = useState("")
  const [level, setLevel] = useState("")
  const [slot, setSlot] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [testFound, setTestFound] = useState<any>(null)

  // Auto-detect current slot based on time
  useEffect(() => {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const currentTime = hours * 60 + minutes

    // Simple time mapping for 6 slots
    // 02:15 = 135 mins past noon (using 14:15)
    const slotTimes = [
      { id: "1", start: 14 * 60 + 15, end: 15 * 60 },
      { id: "2", start: 15 * 60, end: 15 * 60 + 45 },
      { id: "3", start: 15 * 60 + 45, end: 16 * 60 + 30 },
      { id: "4", start: 16 * 60 + 30, end: 17 * 60 + 15 },
      { id: "5", start: 17 * 60 + 15, end: 18 * 60 },
      { id: "6", start: 18 * 60, end: 18 * 60 + 45 },
    ]

    const detected = slotTimes.find(s => currentTime >= s.start && currentTime < s.end)
    if (detected) setSlot(detected.id)
  }, [])

  const handleSearchTest = () => {
    if (studentId && level && slot) {
      setIsSearching(true)
      // Simulate API fetch from the institutional term data
      setTimeout(() => {
        setTestFound({
          title: `${level} - Mid-Term Assessment`,
          duration: 45,
          totalQuestions: 10,
          subject: "Grammar & Vocabulary Concentration"
        })
        setIsSearching(false)
      }, 1500)
    }
  }

  const confirmAndBegin = () => {
    router.push(`/test?studentId=${encodeURIComponent(studentId)}&level=${level}&slot=${slot}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/10 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Branding */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-24 h-24 mb-4">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-xl animate-pulse" />
            <Image
              src="/logo.jpeg"
              alt="The Learners Academy"
              width={96}
              height={96}
              className="rounded-2xl relative z-10 shadow-2xl"
            />
          </div>
          <h1 className="font-heading text-3xl font-bold text-foreground">
            Student Access
          </h1>
          <p className="text-muted-foreground mt-2">
            The Learners Academy English Specialized Program
          </p>
        </div>

        <Card className="border-0 shadow-2xl bg-card/80 backdrop-blur-sm overflow-hidden border-t-4 border-primary">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-xl font-bold">
              {testFound ? "Assessment Ready" : "Login to Your Session"}
            </CardTitle>
            <CardDescription>
              {testFound 
                ? "Please verify the assessment details below."
                : "Enter your Institutional Credentials to access the test"
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-4">
            {!testFound ? (
              <>
                {/* Student ID */}
                <div className="space-y-2">
                  <Label htmlFor="id" className="flex items-center gap-2">
                    <Hash className="h-4 w-4 text-primary" />
                    Student Registration ID
                  </Label>
                  <Input
                    id="id"
                    placeholder="e.g., L-1025"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value.toUpperCase())}
                    className="h-12 focus-visible:ring-primary text-lg font-mono tracking-widest"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Level Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="level" className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      Current Level
                    </Label>
                    <Select onValueChange={setLevel} value={level}>
                      <SelectTrigger id="level" className="h-12 focus:ring-primary">
                        <SelectValue placeholder="Level" />
                      </SelectTrigger>
                      <SelectContent>
                        {ACADEMY_LEVELS.map((l) => (
                          <SelectItem key={l.value} value={l.label}>
                            {l.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Time Slot Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="slot" className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      Time Slot
                    </Label>
                    <Select onValueChange={setSlot} value={slot}>
                      <SelectTrigger id="slot" className="h-12 focus:ring-primary">
                        <SelectValue placeholder="Slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {TIMETABLE_SLOTS.map((s) => (
                          <SelectItem key={s.id} value={s.id.toString()}>
                            Slot {s.id} ({s.standard})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  className="w-full h-14 text-lg font-bold gap-3 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
                  disabled={!studentId || !level || !slot || isSearching}
                  onClick={handleSearchTest}
                >
                  {isSearching ? (
                        <span className="flex items-center gap-2">
                          <Clock className="h-5 w-5 animate-spin" />
                          Locating Assessment...
                        </span>
                  ) : (
                    <>
                      <GraduationCap className="h-6 w-6" />
                      Access Test
                    </>
                  )}
                </Button>
              </>
            ) : (
              <div className="space-y-6 animate-in zoom-in-95 duration-300">
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg">{testFound.title}</h4>
                      <p className="text-sm text-muted-foreground">{testFound.subject}</p>
                    </div>
                    <Badge className="bg-primary">{testFound.duration} Mins</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary/10">
                    <div className="text-center">
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Registration ID</p>
                      <p className="font-bold">{studentId}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Assigned Slot</p>
                      <p className="font-bold">Slot {slot}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    className="w-full h-14 text-lg font-bold gap-3 shadow-lg shadow-primary/20 bg-green-600 hover:bg-green-700"
                    onClick={confirmAndBegin}
                  >
                    <Play className="h-6 w-6" />
                    Begin Now
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full h-10 text-muted-foreground"
                    onClick={() => setTestFound(null)}
                  >
                    Go Back
                  </Button>
                </div>
              </div>
            )}
            
            <p className="text-xs text-center text-muted-foreground pt-2">
              The Learners Academy Assessment Environment • Term-Based Access
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
