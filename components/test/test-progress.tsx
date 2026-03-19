"use client"

import { Progress } from "@/components/ui/progress"

interface TestProgressProps {
  current: number
  total: number
  answered: number
}

export function TestProgress({ current, total, answered }: TestProgressProps) {
  const progress = (current / total) * 100

  return (
    <div className="space-y-3 institutional-container">
      <div className="flex items-center justify-between micro-text text-muted-foreground font-semibold">
        <span>
          Question {current} of {total}
        </span>
        <span className="text-primary">
          {answered} Total Progress
        </span>
      </div>
      <Progress value={progress} className="h-1.5 rounded-full overflow-hidden bg-slate-100" />
    </div>
  )
}
