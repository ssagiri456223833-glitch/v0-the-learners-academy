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
import { GraduationCap, BookOpen, Clock, Play, Hash } from "lucide-react"
import Image from "next/image"
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
      setTimeout(() => {
        setTestFound({
          title: `${level} - Mid-Term Protocol`,
          duration: 45,
          totalQuestions: 10,
          subject: "Grammar & Vocabulary Focus"
        })
        setIsSearching(false)
      }, 1500)
    }
  }

  const confirmAndBegin = () => {
    router.push(`/test?studentId=${encodeURIComponent(studentId)}&level=${level}&slot=${slot}`)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 selection:bg-primary/10">
      <div className="max-w-md w-full space-y-12 animate-in fade-in slide-in-from-bottom-2 duration-300">
        {/* Branding Header Area */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-1 rounded-lg bg-white shadow-sm border border-border transition-all duration-300">
            <Image
              src="/logo.jpeg"
              alt="Logo"
              width={70}
              height={70}
              className="rounded-md"
            />
          </div>
          <div className="space-y-2">
            <h1 className="page-title text-[38px] font-medium text-foreground tracking-tight leading-none">
              Student <span className="text-primary italic">Portal</span>
            </h1>
            <p className="micro-text text-muted-foreground tracking-widest opacity-60">
              Institutional Assessment Access
            </p>
          </div>
        </div>

        <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden border-t-2 border-primary">
          <CardHeader className="text-center pb-6 border-b border-border bg-slate-50/50">
            <CardTitle className="text-[18px] font-semibold text-foreground italic">
              {testFound ? "Assessment Discovery" : "Credential Verification"}
            </CardTitle>
            <CardDescription className="text-[13px] font-medium text-muted-foreground uppercase tracking-widest">
              {testFound 
                ? "Verify session details"
                : "Term-based Test Retrieval"
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-8">
            {!testFound ? (
              <div className="space-y-8">
                {/* Student ID */}
                <div className="space-y-2">
                  <Label htmlFor="id" className="flex items-center gap-2 micro-text text-muted-foreground font-bold">
                    <Hash className="h-3 w-3 text-primary opacity-70" />
                    Identification Code
                  </Label>
                  <Input
                    id="id"
                    placeholder="e.g., L-1025"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value.toUpperCase())}
                    className="h-12 border-border focus-visible:ring-primary text-[15px] font-medium tracking-wide bg-slate-50/10"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Level Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="level" className="flex items-center gap-2 micro-text text-muted-foreground font-bold">
                      <BookOpen className="h-3 w-3 text-primary opacity-70" />
                      Academic Level
                    </Label>
                    <Select onValueChange={setLevel} value={level}>
                      <SelectTrigger id="level" className="h-12 border-border focus:ring-primary">
                        <SelectValue placeholder="Select" />
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
                    <Label htmlFor="slot" className="flex items-center gap-2 micro-text text-muted-foreground font-bold">
                      <Clock className="h-3 w-3 text-primary opacity-70" />
                      Assigned Slot
                    </Label>
                    <Select onValueChange={setSlot} value={slot}>
                      <SelectTrigger id="slot" className="h-12 border-border focus:ring-primary">
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
                  className="btn-primary w-full h-12 text-[14px] uppercase tracking-wider font-bold gap-3"
                  disabled={!studentId || !level || !slot || isSearching}
                  onClick={handleSearchTest}
                >
                  {isSearching ? (
                        <span className="flex items-center gap-2">
                          <Clock className="h-4 w-4 animate-spin" />
                          Locating Assessment...
                        </span>
                  ) : (
                    <>
                      <GraduationCap className="h-5 w-5" />
                      Locate Protocol
                    </>
                  )}
                </Button>
              </div>
            ) : (
              <div className="space-y-8 animate-in zoom-in-95 duration-300">
                <div className="p-6 rounded-md bg-slate-50 border border-border space-y-4">
                  <div className="flex justify-between items-start border-b border-border pb-4">
                    <div className="space-y-1">
                      <h4 className="text-[18px] font-semibold text-foreground underline underline-offset-4 decoration-primary/30 decoration-2">{testFound.title}</h4>
                      <p className="text-[13px] text-muted-foreground italic font-medium">{testFound.subject}</p>
                    </div>
                    <Badge variant="outline" className="border-primary/40 text-primary text-[11px] font-bold h-7">{testFound.duration} Minutes</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-left">
                      <p className="micro-text text-muted-foreground opacity-60">Identity</p>
                      <p className="text-[14px] font-semibold">{studentId}</p>
                    </div>
                    <div className="text-left">
                      <p className="micro-text text-muted-foreground opacity-60">Protocol Slot</p>
                      <p className="text-[14px] font-semibold">Slot {slot}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    className="btn-primary w-full h-14 text-[16px] uppercase tracking-widest font-bold gap-3"
                    onClick={confirmAndBegin}
                  >
                    <Play className="h-5 w-5 fill-current" />
                    Begin Assessment
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full text-muted-foreground micro-text h-10 hover:bg-slate-50"
                    onClick={() => setTestFound(null)}
                  >
                    Go Back
                  </Button>
                </div>
              </div>
            )}
            
            <p className="micro-text text-center text-muted-foreground pt-4 border-t border-border opacity-50">
               Institutional Portal Version 2.4 | Encrypted Access Enabled
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
