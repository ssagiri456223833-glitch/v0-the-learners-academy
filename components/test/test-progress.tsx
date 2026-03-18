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
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          Question {current} of {total}
        </span>
        <span className="text-muted-foreground">
          {answered} answered
        </span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  )
}
