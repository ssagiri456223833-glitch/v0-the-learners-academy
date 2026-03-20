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
import { GraduationCap, BookOpen, Clock, Play, Hash, ShieldCheck, Search, Layout, UserCircle2 } from "lucide-react"
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
          title: `${level} - Term Assessment`,
          duration: 45,
          totalQuestions: 10,
          subject: "Grammar & Syntactic Reasoning"
        })
        setIsSearching(false)
      }, 1500)
    }
  }

  const confirmAndBegin = () => {
    router.push(`/test?studentId=${encodeURIComponent(studentId)}&level=${level}&slot=${slot}`)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-8 selection:bg-primary/10">
      <div className="max-w-md w-full space-y-12 animate-in fade-in slide-in-from-bottom-2 duration-700">
        {/* Institutional Branding Gateway */}
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="p-1.5 rounded-md bg-white shadow-sm border border-[#E2E8F0] group hover:border-primary transition-all duration-500">
            <Image
              src="/logo.jpeg"
              alt="The Learners Academy"
              width={72}
              height={72}
              className="rounded-sm"
            />
          </div>
          <div className="space-y-3">
            <h1 className="page-title text-[42px] font-medium text-[#0F172A] tracking-tighter leading-none">
              Student Portal
            </h1>
            <p className="micro-text text-[#64748B] font-semibold uppercase tracking-[0.3em] opacity-60 mt-6 block">
              Academy Assessment Gateway
            </p>
          </div>
        </div>

        <Card className="border border-[#E2E8F0] bg-white shadow-lg rounded-lg overflow-hidden relative border-t-4 border-t-primary">
          <CardHeader className="text-center pb-8 border-b border-[#E2E8F0] bg-slate-50/50 pt-10">
            <CardTitle className="text-[20px] font-semibold text-[#0F172A] flex items-center justify-center gap-3 tracking-tight">
               <ShieldCheck className="h-4.5 w-4.5 text-primary opacity-60" />
              {testFound ? "Assessment Details" : "Student Verification"}
            </CardTitle>
            <CardDescription className="micro-text text-[#64748B] font-semibold uppercase tracking-widest opacity-60 mt-1.5">
              {testFound 
                ? "Test Identified"
                : "Entry Portal 2026.4"
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-10 p-10 sm:p-12">
            {!testFound ? (
              <div className="space-y-8">
                {/* Candidate Identification */}
                <div className="space-y-4">
                  <Label htmlFor="id" className="micro-text text-[#64748B] font-semibold uppercase tracking-widest flex items-center gap-2 opacity-60">
                    <UserCircle2 className="h-3.5 w-3.5 text-primary opacity-40" />
                    Student ID
                  </Label>
                  <Input
                    id="id"
                    placeholder="e.g., L-1025"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value.toUpperCase())}
                    className="h-12 rounded-md border-[#E2E8F0] bg-slate-50/30 focus-visible:ring-primary/10 text-[16px] font-medium tracking-widest tabular-nums placeholder:italic placeholder:font-medium placeholder:opacity-30"
                  />
                </div>

                <div className="grid grid-cols-1 gap-8">
                  {/* Academic Level Node */}
                  <div className="space-y-4">
                    <Label htmlFor="level" className="micro-text text-[#64748B] font-semibold uppercase tracking-widest flex items-center gap-2 opacity-60">
                      <BookOpen className="h-3.5 w-3.5 text-primary opacity-40" />
                      Class Level
                    </Label>
                    <Select onValueChange={setLevel} value={level}>
                      <SelectTrigger id="level" className="h-12 rounded-md border-[#E2E8F0] bg-slate-50/30 focus:ring-primary/10 text-[15px] font-bold">
                        <SelectValue placeholder="Identify Level" />
                      </SelectTrigger>
                      <SelectContent className="rounded-md border-[#E2E8F0]">
                        {ACADEMY_LEVELS.map((l) => (
                          <SelectItem key={l.value} value={l.label} className="text-[15px] font-medium italic">
                            {l.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Temporal Allocation Slot */}
                  <div className="space-y-4">
                    <Label htmlFor="slot" className="micro-text text-[#64748B] font-semibold uppercase tracking-widest flex items-center gap-2 opacity-60">
                      <Clock className="h-3.5 w-3.5 text-primary opacity-40" />
                      Time Slot
                    </Label>
                    <Select onValueChange={setSlot} value={slot}>
                      <SelectTrigger id="slot" className="h-12 rounded-md border-[#E2E8F0] bg-slate-50/30 focus:ring-primary/10 text-[15px] font-bold">
                        <SelectValue placeholder="Select Slot" />
                      </SelectTrigger>
                      <SelectContent className="rounded-md border-[#E2E8F0]">
                        {TIMETABLE_SLOTS.map((s) => (
                          <SelectItem key={s.id} value={s.id.toString()} className="text-[14px] font-medium italic">
                            Slot {s.id} <span className="opacity-20 mx-1.5">•</span> {s.standard}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  className="btn-primary w-full h-14 text-[13px] font-semibold uppercase tracking-[0.25em] gap-4 shadow-md mt-4 btn-interactive"
                  disabled={!studentId || !level || !slot || isSearching}
                  onClick={handleSearchTest}
                >
                  {isSearching ? (
                        <span className="flex items-center gap-3">
                          <Clock className="h-4.5 w-4.5 animate-spin opacity-40" />
                          Indexing...
                        </span>
                  ) : (
                    <>
                      <Search className="h-4.5 w-4.5 opacity-40" />
                      Verify Student
                    </>
                  )}
                </Button>
              </div>
            ) : (
              <div className="space-y-10 animate-in zoom-in-95 fade-in duration-500">
                <div className="p-10 rounded-md bg-slate-50 border border-[#E2E8F0] space-y-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                     <GraduationCap className="h-20 w-20 text-primary" />
                  </div>
                  <div className="flex justify-between items-start border-b border-[#E2E8F0] pb-8 relative z-10">
                    <div className="space-y-2">
                      <h4 className="text-[24px] font-semibold text-[#0F172A]">{testFound.title}</h4>
                      <p className="micro-text text-[#64748B] font-semibold uppercase tracking-widest opacity-60 mt-3">{testFound.subject}</p>
                    </div>
                    <Badge variant="outline" className="border-primary/40 text-primary bg-primary/5 text-[11px] font-semibold px-4 h-8 tracking-widest uppercase tabular-nums">{testFound.duration} MIN</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-10 relative z-10">
                    <div className="text-left">
                      <p className="micro-text text-[#64748B] font-semibold uppercase tracking-widest opacity-60">Student ID</p>
                      <p className="text-[17px] font-semibold tabular-nums mt-1.5 font-sans">{studentId}</p>
                    </div>
                    <div className="text-left">
                      <p className="micro-text text-[#64748B] font-semibold uppercase tracking-widest opacity-60">Room Assignment</p>
                      <p className="text-[17px] font-semibold tabular-nums mt-1.5 font-sans opacity-80">Slot {slot}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <Button 
                    className="btn-primary w-full h-16 text-[15px] font-semibold uppercase tracking-[0.3em] gap-5 shadow-lg active:scale-95 transition-all btn-interactive"
                    onClick={confirmAndBegin}
                  >
                    <Play className="h-5 w-5 fill-current opacity-40" />
                    Start Assessment
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full micro-text font-semibold text-[#64748B] uppercase h-12 hover:bg-slate-100/50 opacity-60 hover:opacity-100 transition-all tracking-[0.2em]"
                    onClick={() => setTestFound(null)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
            
            <p className="micro-text text-center text-[#64748B] pt-8 border-t border-[#E2E8F0] font-semibold opacity-40 uppercase tracking-[0.15em]">
               Academy Portal v2.4 
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
