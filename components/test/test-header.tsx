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

  const isLowTime = timeLeft < 300 // 5 minutes threshold for institutional urgency

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm h-16 sm:h-20 flex items-center">
      <div className="institutional-container px-6 w-full max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between">
          {/* Brand & Identity Section */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
               <div className="p-1.5 rounded-md bg-white border border-border shadow-sm">
                  <Image
                    src="/logo.jpeg"
                    alt="The Learners Academy"
                    width={36}
                    height={36}
                    className="rounded-sm"
                  />
               </div>
               <div className="hidden sm:block">
                  <h1 className="page-title text-[18px] text-foreground tracking-tight leading-none italic underline underline-offset-4 decoration-primary/20">
                    {title}
                  </h1>
                  <p className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-40 mt-1.5">
                    {level || "General Assessment Protocol"}
                  </p>
               </div>
            </div>
          </div>

          {/* Central Candidate Matrix (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-10 px-10 border-l border-r border-border/80 h-10">
            <div className="flex items-center gap-3">
               <User className="h-3.5 w-3.5 text-primary opacity-40" />
               <div className="flex flex-col">
                  <span className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-30">Active Candidate</span>
                  <span className="text-[13px] font-semibold tabular-nums text-foreground tracking-widest">{studentId || "L-0000"}</span>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <ShieldCheck className="h-3.5 w-3.5 text-primary opacity-40" />
               <div className="flex flex-col">
                  <span className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-30">Security Protocol</span>
                  <span className="text-[11px] font-bold text-success uppercase tracking-widest">Encrypted Session</span>
               </div>
            </div>
          </div>

          {/* Temporal Control & Actions */}
          <div className="flex items-center gap-6">
            <div
              className={cn(
                "flex items-center gap-3 px-4 py-2 rounded-md border transition-all duration-300",
                isLowTime 
                  ? "bg-destructive/5 border-destructive/30 text-destructive shadow-[0_0_15px_rgba(239,68,68,0.1)]" 
                  : "bg-slate-50 border-border text-foreground"
              )}
            >
              <Clock className={cn("h-4 w-4 transition-transform duration-500", isLowTime ? "text-destructive animate-pulse scale-110" : "text-primary opacity-40")} />
              <span className="text-[18px] font-semibold tabular-nums tracking-widest italic decoration-2">
                {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
              </span>
            </div>

            <Button
              onClick={onSubmit}
              className="btn-primary gap-3 h-11 px-8 shadow-md"
            >
              <Send className="h-4 w-4 opacity-40" />
              <span className="text-[12px] font-black uppercase tracking-[0.15em]">Submit Protocol</span>
            </Button>

            {/* Exit Control (Institutional Guard) */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="ghost" size="icon" className="h-11 w-11 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/5 border border-transparent hover:border-destructive/10 transition-all">
                  <LogOut className="h-4 w-4 opacity-40" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="max-w-md rounded-lg border-border">
                <AlertDialogHeader>
                  <AlertDialogTitle className="page-title text-[24px] text-foreground italic decoration-destructive/20 underline underline-offset-8">Abort Assessment?</AlertDialogTitle>
                  <AlertDialogDescription className="text-[15px] font-medium text-muted-foreground leading-relaxed mt-4">
                    Terminating the session now will discard all unsaved responses. This action is logged in the institutional registry and may invalidate your current attempt.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="mt-8 gap-4">
                  <AlertDialogCancel className="btn-secondary h-11 px-6 text-[11px] font-black uppercase tracking-widest">Return to Protocol</AlertDialogCancel>
                  <AlertDialogAction 
                    className="bg-destructive hover:bg-destructive/90 text-white h-11 px-8 text-[11px] font-black uppercase tracking-widest shadow-md"
                    onClick={() => router.push('/student')}
                  >
                    Confirm Termination
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </header>
  )
}
