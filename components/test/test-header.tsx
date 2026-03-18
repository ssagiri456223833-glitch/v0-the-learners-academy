"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock, Send } from "lucide-react"
import { cn } from "@/lib/utils"

interface TestHeaderProps {
  title: string
  timeLeft: number
  onSubmit: () => void
}

export function TestHeader({ title, timeLeft, onSubmit }: TestHeaderProps) {
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const isLowTime = timeLeft < 300 // Less than 5 minutes

  return (
    <header className="sticky top-0 z-50 bg-sidebar border-b border-sidebar-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Test Title */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo.jpeg"
              alt="The Learners Academy"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div>
              <h1 className="font-heading text-lg font-bold text-sidebar-foreground">
                {title}
              </h1>
              <p className="text-xs text-sidebar-foreground/70">
                The Learners Academy
              </p>
            </div>
          </div>

          {/* Timer & Submit */}
          <div className="flex items-center gap-4">
            {/* Timer */}
            <div
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg",
                isLowTime 
                  ? "bg-destructive/20 text-white animate-pulse" 
                  : "bg-sidebar-accent text-sidebar-accent-foreground"
              )}
            >
              <Clock className="h-5 w-5" />
              <span className="font-mono font-bold text-lg">
                {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
              </span>
            </div>

            {/* Submit Button */}
            <Button
              onClick={onSubmit}
              variant="secondary"
              className="gap-2 bg-white text-primary hover:bg-white/90"
            >
              <Send className="h-4 w-4" />
              Submit
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
