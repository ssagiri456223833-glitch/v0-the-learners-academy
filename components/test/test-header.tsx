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
}

export function TestHeader({ title, timeLeft, onSubmit }: TestHeaderProps) {
  const router = useRouter()
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const isLowTime = timeLeft < 300 // Less than 5 minutes

  return (
    <header className="sticky top-0 z-50 bg-sidebar border-b border-sidebar-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Test Title */}
          <div className="flex items-center gap-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="ghost" size="icon" className="text-sidebar-foreground/70 hover:text-destructive hover:bg-destructive/10">
                  <LogOut className="h-5 w-5" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Exit Assessment?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to leave? Your current progress will not be saved and you may not be able to resume this attempt.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Stay & Finish</AlertDialogCancel>
                  <AlertDialogAction 
                    className="bg-destructive hover:bg-destructive/90"
                    onClick={() => router.push('/student')}
                  >
                    Exit Anyway
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt="The Learners Academy"
                width={36}
                height={36}
                className="rounded-lg shadow-sm"
              />
              <div className="hidden sm:block">
                <h1 className="font-heading text-base font-bold text-sidebar-foreground truncate max-w-[200px]">
                  {title}
                </h1>
                <p className="text-[10px] text-sidebar-foreground/50 uppercase tracking-widest font-bold">
                  The Learners Academy
                </p>
              </div>
            </div>
          </div>

          {/* Timer & Submit */}
          <div className="flex items-center gap-4">
            {/* Timer */}
            <div
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg border",
                isLowTime 
                  ? "bg-destructive/10 border-destructive/50 text-destructive animate-pulse" 
                  : "bg-sidebar-accent border-sidebar-border text-sidebar-accent-foreground"
              )}
            >
              <Clock className={cn("h-4 w-4", isLowTime ? "text-destructive" : "text-primary")} />
              <span className="font-mono font-bold text-lg">
                {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
              </span>
            </div>

            {/* Submit Button */}
            <Button
              onClick={onSubmit}
              variant="default"
              className="gap-2 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
            >
              <Send className="h-4 w-4" />
              <span className="hidden sm:inline">Submit Test</span>
              <span className="sm:hidden">Submit</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
