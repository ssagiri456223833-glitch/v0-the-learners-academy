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
import { LogOut, Clock, Send } from "lucide-react"
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

  const isLowTime = timeLeft < 120 // 2 minutes per instruction

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="institutional-container px-4">
        <div className="flex items-center justify-between h-16">
          {/* Exit Section */}
          <div className="flex items-center gap-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="ghost" size="sm" className="text-secondary-foreground gap-2 hover:bg-slate-50">
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline micro-text">Exit</span>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="page-title text-[24px]">Exit Assessment?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Your current progress will not be saved and you may not be able to resume.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="btn-secondary">Stay & Finish</AlertDialogCancel>
                  <AlertDialogAction 
                    className="bg-destructive hover:bg-destructive/90 text-white"
                    onClick={() => router.push('/student')}
                  >
                    Confirm Exit
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt="Logo"
                width={32}
                height={32}
                className="rounded-md border border-border"
              />
              <div className="hidden sm:block">
                <h1 className="text-[16px] font-semibold text-foreground truncate max-w-[200px] leading-tight">
                  {title}
                </h1>
                <p className="micro-text text-muted-foreground opacity-70">
                  {level || "General Assessment"}
                </p>
              </div>
            </div>
          </div>

          {/* Institutional Info Section */}
          <div className="hidden lg:flex items-center gap-8 px-8 border-l border-r border-border h-full">
            <div className="flex flex-col items-start translate-y-[2px]">
              <span className="micro-text text-muted-foreground opacity-60">Candidate ID</span>
              <span className="text-[14px] font-medium text-foreground">{studentId || "L-0000"}</span>
            </div>
          </div>

          {/* Timer & Submit Section */}
          <div className="flex items-center gap-6">
            <div
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-md border transition-colors",
                isLowTime 
                  ? "bg-destructive/5 border-destructive/50 text-destructive animate-pulse" 
                  : "bg-slate-50 border-border text-foreground"
              )}
            >
              <Clock className={cn("h-4 w-4", isLowTime ? "text-destructive" : "text-primary")} />
              <span className="text-[18px] font-medium tabular-nums">
                {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
              </span>
            </div>

            <Button
              onClick={onSubmit}
              className="btn-primary gap-2 h-10 px-6 py-0 flex items-center justify-center"
            >
              <Send className="h-4 w-4" />
              <span className="text-[14px] font-semibold uppercase tracking-tight">Submit Test</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
