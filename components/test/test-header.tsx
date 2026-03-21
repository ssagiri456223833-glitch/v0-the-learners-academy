"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import { LogOut, Clock, Send, ShieldCheck, User } from "lucide-react"
import { useRouter } from "next/navigation"

interface TestHeaderProps {
  title: string
  timeLeft: number
  onSubmit: () => void
  studentId?: string
  level?: string
}

export function TestHeader({ title, timeLeft, onSubmit, studentId, level }: TestHeaderProps) {
  const router = useRouter()
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const isLowTime = timeLeft < 300 // 5 mins

  return (
    <header className="h-20 bg-white border-b border-slate-200 sticky top-0 z-50 px-8 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-8">
        {/* Identity */}
        <div className="flex items-center gap-4 border-r border-slate-100 pr-8">
           <div className="p-1 rounded-lg bg-slate-50 border border-slate-100 shadow-sm">
              <Image src="/logo.jpeg" alt="Logo" width={40} height={40} className="rounded-md" />
           </div>
           <div className="space-y-0.5">
              <h1 className="text-lg font-serif text-slate-900 leading-none">{title}</h1>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{level || "Assessment"}</p>
           </div>
        </div>

        {/* Verification */}
        <div className="hidden lg:flex items-center gap-10">
           <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
                 <User className="h-3.5 w-3.5 text-slate-400" />
              </div>
              <div className="space-y-0.5">
                 <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Candidate ID</span>
                 <p className="text-xs font-bold text-slate-900 tabular-nums">{studentId || "L-0000"}</p>
              </div>
           </div>
           
           <div className="flex items-center gap-3">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <div className="space-y-0.5">
                 <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Connection</span>
                 <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Secure Session</p>
              </div>
           </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Timer */}
        <div className={cn(
          "h-12 px-6 rounded-2xl border-2 flex items-center gap-4 transition-all duration-500",
          isLowTime ? "bg-red-50 border-red-200 text-red-600 shadow-lg shadow-red-200" : "bg-slate-50 border-slate-100 text-slate-900"
        )}>
           <Clock className={cn("h-4 w-4 opacity-40", isLowTime && "animate-pulse opacity-100")} />
           <span className="text-xl font-bold tabular-nums tracking-tighter">
             {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
           </span>
        </div>

        {/* Submission */}
        <Button onClick={onSubmit} className="h-12 px-8 bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase tracking-widest text-[11px] gap-3 rounded-2xl shadow-xl shadow-slate-200">
           <Send className="h-3.5 w-3.5" />
           Submit Final
        </Button>

        {/* Emergency Exit */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="ghost" className="h-12 px-4 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-colors">
               <LogOut className="h-4 w-4" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="max-w-md p-8 rounded-3xl">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-2xl font-bold">Abandon Assessment?</AlertDialogTitle>
              <AlertDialogDescription className="text-slate-500 font-medium pt-4">
                If you exit now, your current session will be terminated and all progress will be voided. This action is logged in the proctor records.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="pt-8 gap-4">
              <AlertDialogCancel className="h-12 px-8 font-bold text-slate-400 rounded-2xl border-none">Stay in Test</AlertDialogCancel>
              <AlertDialogAction onClick={() => router.push('/student')} className="h-12 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl border-none shadow-lg shadow-red-100">
                Exit Session
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </header>
  )
}
