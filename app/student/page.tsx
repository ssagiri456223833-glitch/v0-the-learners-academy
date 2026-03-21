"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { 
  ShieldCheck, 
  Search, 
  GraduationCap, 
  Clock, 
  Play,
  ArrowRight,
  User 
} from "lucide-react"
import Image from "next/image"
import { ACADEMY_LEVELS, TIMETABLE_SLOTS } from "@/lib/constants"
import { cn } from "@/lib/utils"

export default function StudentPortal() {
  const router = useRouter()
  const [studentId, setStudentId] = useState("")
  const [level, setLevel] = useState("")
  const [slot, setSlot] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [testFound, setTestFound] = useState<any>(null)

  const handleSearchTest = () => {
    if (studentId && level && slot) {
      setIsSearching(true)
      setTimeout(() => {
        setTestFound({
          title: `${level} Proficiency Exam`,
          duration: 45,
          totalQuestions: 15,
          subject: "Grammar & Academic English"
        })
        setIsSearching(false)
      }, 1200)
    }
  }

  const confirmAndBegin = () => {
    router.push(`/test?studentId=${encodeURIComponent(studentId)}&level=${level}&slot=${slot}`)
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 selection:bg-primary/10">
      <div className="max-w-[480px] w-full space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1200">
        
        {/* Gateway Branding */}
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="p-2 rounded-2xl bg-white shadow-2xl shadow-slate-200 border border-slate-100 scale-110">
            <Image
              src="/logo.jpeg"
              alt="The Learners Academy"
              width={80}
              height={80}
              className="rounded-xl"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl font-serif text-slate-900 leading-tight">Student Portal</h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] block">
              Secure Entrance Gateway • Term 2
            </p>
          </div>
        </div>

        <Card variant="content" className="p-0 border-slate-200 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
          
          <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
             <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-primary opacity-60" />
                <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">{testFound ? "Security Verified" : "Verification"}</span>
             </div>
             {testFound && <Badge variant="outline" className="text-[9px] font-bold text-emerald-600 bg-emerald-50 border-emerald-100 uppercase py-1">Ready</Badge>}
          </div>

          <CardContent className="p-10 space-y-8">
            {!testFound ? (
              <div className="space-y-8">
                {/* ID Input */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Student Identification Card ID</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 group-focus-within:text-primary transition-colors" />
                    <Input 
                      placeholder="e.g. L-1025" 
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value.toUpperCase())}
                      className="h-14 pl-12 text-lg font-bold tabular-nums tracking-widest placeholder:text-slate-200"
                    />
                  </div>
                </div>

                {/* Level & Slot Selection */}
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Academic Level</label>
                    <Select onValueChange={setLevel} value={level}>
                      <SelectTrigger className="h-14 text-sm font-bold border-slate-200 rounded-xl">
                        <SelectValue placeholder="Select Class Level" />
                      </SelectTrigger>
                      <SelectContent className="p-2 rounded-2xl">
                        {ACADEMY_LEVELS.map(l => (
                          <SelectItem key={l.value} value={l.label} className="p-4 rounded-xl text-sm font-bold">{l.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Allocated Time Slot</label>
                    <Select onValueChange={setSlot} value={slot}>
                      <SelectTrigger className="h-14 text-sm font-bold border-slate-200 rounded-xl">
                        <SelectValue placeholder="Select Assessment Slot" />
                      </SelectTrigger>
                      <SelectContent className="p-2 rounded-2xl">
                        {TIMETABLE_SLOTS.map(s => (
                          <SelectItem key={s.id} value={s.id.toString()} className="p-4 rounded-xl text-sm font-bold">Slot {s.id} • {s.standard}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  disabled={!studentId || !level || !slot || isSearching}
                  onClick={handleSearchTest}
                  className="w-full h-14 bg-primary hover:bg-primary/95 shadow-xl shadow-primary/20 font-bold uppercase tracking-widest gap-3 rounded-2xl mt-4"
                >
                  {isSearching ? <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Search className="h-5 w-5 opacity-40" />}
                  {isSearching ? "Verifying..." : "Access Test Interface"}
                </Button>
              </div>
            ) : (
              <div className="space-y-10 animate-in zoom-in-95 fade-in duration-500">
                {/* Result Wrapper */}
                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                     <GraduationCap className="h-32 w-32 text-primary" />
                  </div>
                  <div className="flex justify-between items-start border-b border-slate-200 pb-8 relative z-10">
                    <div className="space-y-2">
                       <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Ready to Start</span>
                       <h4 className="text-2xl font-serif text-slate-900">{testFound.title}</h4>
                    </div>
                    <Badge className="bg-slate-900 text-white border-none py-2 px-4 h-auto font-bold tabular-nums">45 MIN</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-8 relative z-10">
                    <div className="space-y-1">
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Candidate ID</p>
                      <p className="text-lg font-bold text-slate-900 tabular-nums">{studentId}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Reserved Slot</p>
                      <p className="text-lg font-bold text-slate-900 tabular-nums">SLOT {slot}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button 
                    className="w-full h-16 bg-primary hover:bg-primary/95 text-lg font-bold uppercase tracking-widest gap-4 shadow-2xl shadow-primary/20 rounded-2xl active:scale-[0.98] transition-all"
                    onClick={confirmAndBegin}
                  >
                    <Play className="h-6 w-6 fill-current" />
                    Begin Assessment
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full h-12 text-slate-400 font-bold uppercase tracking-widest text-[10px] hover:bg-slate-100"
                    onClick={() => setTestFound(null)}
                  >
                    Change Credentials
                  </Button>
                </div>
              </div>
            )}
          </CardContent>

          <div className="p-6 bg-slate-50 border-t border-slate-100 text-center">
             <p className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.3em]">Integrity Protected Session • v2.4</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
