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
import { GraduationCap, BookOpen, Clock, Play, Hash, ShieldCheck, Search, Layout } from "lucide-react"
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
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8 selection:bg-primary/10">
      <div className="max-w-md w-full space-y-12 animate-in fade-in slide-in-from-bottom-2 duration-500">
        {/* Branding Header Area */}
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="p-1 rounded-md bg-white shadow-sm border border-border group hover:border-primary transition-all duration-300">
            <Image
              src="/logo.jpeg"
              alt="The Learners Academy"
              width={64}
              height={64}
              className="rounded-sm"
            />
          </div>
          <div className="space-y-2">
            <h1 className="page-title text-[38px] font-medium text-foreground tracking-tighter leading-none italic underline decoration-primary/20 underline-offset-8">
              Student <span className="opacity-40 not-italic">PORTAL</span>
            </h1>
            <p className="micro-text text-muted-foreground font-black uppercase tracking-[0.25em] opacity-40 mt-4">
              Institutional Evaluation Environment
            </p>
          </div>
        </div>

        <Card className="border border-border bg-white shadow-md rounded-lg overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
          <CardHeader className="text-center pb-8 border-b border-border bg-slate-50/50">
            <CardTitle className="text-[18px] font-semibold text-foreground italic flex items-center justify-center gap-3 tracking-tight">
               <ShieldCheck className="h-4 w-4 text-primary opacity-60" />
              {testFound ? "Assessment Discovery" : "Credential Verification"}
            </CardTitle>
            <CardDescription className="micro-text text-muted-foreground font-black uppercase tracking-widest opacity-40 mt-1">
              {testFound 
                ? "Verify Terminal Protocol"
                : "Term-based Retrieval Protocol"
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 p-10">
            {!testFound ? (
              <div className="space-y-8">
                {/* Student ID */}
                <div className="space-y-3">
                  <Label htmlFor="id" className="micro-text text-muted-foreground font-black uppercase tracking-widest flex items-center gap-2 opacity-60">
                    <Hash className="h-3 w-3 text-primary opacity-40" />
                    Identification ID
                  </Label>
                  <Input
                    id="id"
                    placeholder="e.g., L-1025"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value.toUpperCase())}
                    className="h-11 rounded-md border-border bg-slate-50/50 focus-visible:ring-primary/10 text-[15px] font-black italic tracking-widest tabular-nums"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {/* Level Selection */}
                  <div className="space-y-3">
                    <Label htmlFor="level" className="micro-text text-muted-foreground font-black uppercase tracking-widest flex items-center gap-2 opacity-60">
                      <BookOpen className="h-3 w-3 text-primary opacity-40" />
                      Academic Level
                    </Label>
                    <Select onValueChange={setLevel} value={level}>
                      <SelectTrigger id="level" className="h-11 rounded-md border-border bg-slate-50/50 focus:ring-primary/10 text-[14px] font-bold">
                        <SelectValue placeholder="Identify Level" />
                      </SelectTrigger>
                      <SelectContent className="rounded-md border-border">
                        {ACADEMY_LEVELS.map((l) => (
                          <SelectItem key={l.value} value={l.label} className="text-[14px]">
                            {l.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Time Slot Selection */}
                  <div className="space-y-3">
                    <Label htmlFor="slot" className="micro-text text-muted-foreground font-black uppercase tracking-widest flex items-center gap-2 opacity-60">
                      <Clock className="h-3 w-3 text-primary opacity-40" />
                      Allocation Slot
                    </Label>
                    <Select onValueChange={setSlot} value={slot}>
                      <SelectTrigger id="slot" className="h-11 rounded-md border-border bg-slate-50/50 focus:ring-primary/10 text-[14px] font-bold">
                        <SelectValue placeholder="Select Slot" />
                      </SelectTrigger>
                      <SelectContent className="rounded-md border-border">
                        {TIMETABLE_SLOTS.map((s) => (
                          <SelectItem key={s.id} value={s.id.toString()} className="text-[13px] font-medium">
                            Slot {s.id} <span className="opacity-40 mx-1">•</span> {s.standard}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  className="btn-primary w-full h-12 text-[12px] font-black uppercase tracking-[0.2em] gap-3 shadow-md"
                  disabled={!studentId || !level || !slot || isSearching}
                  onClick={handleSearchTest}
                >
                  {isSearching ? (
                        <span className="flex items-center gap-2">
                          <Clock className="h-4 w-4 animate-spin opacity-40" />
                          Indexing...
                        </span>
                  ) : (
                    <>
                      <Search className="h-4 w-4 opacity-40" />
                      Locate Protocol
                    </>
                  )}
                </Button>
              </div>
            ) : (
              <div className="space-y-8 animate-in zoom-in-95 duration-500">
                <div className="p-8 rounded-md bg-slate-50 border border-border space-y-6">
                  <div className="flex justify-between items-start border-b border-border pb-6">
                    <div className="space-y-1">
                      <h4 className="text-[20px] font-semibold text-foreground italic decoration-primary/20 underline underline-offset-4 decoration-2">{testFound.title}</h4>
                      <p className="micro-text text-muted-foreground font-bold uppercase tracking-widest opacity-40 mt-2">{testFound.subject}</p>
                    </div>
                    <Badge variant="outline" className="border-primary/40 text-primary bg-primary/5 text-[10px] font-black px-3 h-7 tracking-widest uppercase">{testFound.duration} MIN</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-left">
                      <p className="micro-text text-muted-foreground font-black uppercase tracking-widest opacity-40">Candidate ID</p>
                      <p className="text-[15px] font-black tabular-nums mt-1">{studentId}</p>
                    </div>
                    <div className="text-left">
                      <p className="micro-text text-muted-foreground font-black uppercase tracking-widest opacity-40">Allocated Space</p>
                      <p className="text-[15px] font-black tabular-nums mt-1">Slot {slot}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button 
                    className="btn-primary w-full h-14 text-[14px] font-black uppercase tracking-[0.25em] gap-4 shadow-lg active:scale-95 transition-all"
                    onClick={confirmAndBegin}
                  >
                    <Play className="h-4 w-4 fill-current opacity-40" />
                    Enter Assessment
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full micro-text font-black text-muted-foreground uppercase h-10 hover:bg-slate-50 opacity-40 hover:opacity-100 transition-all"
                    onClick={() => setTestFound(null)}
                  >
                    Abort Retrieval
                  </Button>
                </div>
              </div>
            )}
            
            <p className="micro-text text-center text-muted-foreground pt-4 border-t border-border font-black opacity-20 uppercase tracking-[0.1em]">
               Institutional Interface v2.4 | LTD Environment
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
