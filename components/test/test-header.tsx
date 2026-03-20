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

  const isLowTime = timeLeft < 300 // 5 minutes threshold

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm h-16 sm:h-20 flex items-center">
      <div className="px-6 w-full max-w-[1200px] mx-auto">
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
                  <h1 className="text-[17px] font-semibold text-foreground tracking-tight leading-none">
                    {title}
                  </h1>
                  <p className="micro-text text-muted-foreground font-medium uppercase tracking-widest opacity-60 mt-1.5">
                    {level || "General Assessment"}
                  </p>
               </div>
            </div>
          </div>

          {/* Student Info (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-8 px-8 border-l border-r border-border/80 h-10">
            <div className="flex items-center gap-3">
               <User className="h-4 w-4 text-primary opacity-40" />
               <div className="flex flex-col">
                  <span className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-40">Student ID</span>
                  <span className="text-[13px] font-semibold tabular-nums text-foreground">{studentId || "L-0000"}</span>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <ShieldCheck className="h-4 w-4 text-primary opacity-40" />
               <div className="flex flex-col">
                  <span className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-40">Status</span>
                  <span className="text-[11px] font-semibold text-success uppercase tracking-widest">Secure Session</span>
               </div>
            </div>
          </div>

          {/* Timer & Actions */}
          <div className="flex items-center gap-6">
            <div
              className={cn(
                "flex items-center gap-3 px-4 py-2 rounded-md border transition-all duration-300",
                isLowTime 
                  ? "bg-destructive/5 border-destructive/30 text-destructive" 
                  : "bg-slate-50 border-border text-foreground"
              )}
            >
              <Clock className={cn("h-4 w-4", isLowTime ? "text-destructive animate-pulse" : "text-primary opacity-40")} />
              <span className="text-[18px] font-semibold tabular-nums tracking-widest">
                {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
              </span>
            </div>

            <Button
              onClick={onSubmit}
              className="btn-primary gap-3 h-11 px-8 shadow-md"
            >
              <Send className="h-4 w-4 opacity-40" />
              <span className="text-[12px] font-semibold uppercase tracking-widest">Submit Test</span>
            </Button>

            {/* Exit Control */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="ghost" size="icon" className="h-11 w-11 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/5 border border-transparent hover:border-destructive/10 transition-all">
                  <LogOut className="h-4 w-4 opacity-40" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="max-w-md rounded-lg border-border">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-[22px] font-semibold text-foreground">End assessment early?</AlertDialogTitle>
                  <AlertDialogDescription className="text-[15px] font-medium text-muted-foreground leading-relaxed mt-4">
                    If you exit now, your current progress will be lost. This attempt may be marked as incomplete in the system records.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="mt-8 gap-4">
                  <AlertDialogCancel className="btn-secondary h-11 px-6 text-[11px] font-semibold uppercase tracking-widest">Back to Test</AlertDialogCancel>
                  <AlertDialogAction 
                    className="bg-destructive hover:bg-destructive/90 text-white h-11 px-8 text-[11px] font-semibold uppercase tracking-widest shadow-md"
                    onClick={() => router.push('/student')}
                  >
                    Confirm Exit
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
