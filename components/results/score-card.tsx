"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Target, Clock, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface ScoreCardProps {
  score: number
  total: number
  percentage: number
}

export function ScoreCard({ score, total, percentage }: ScoreCardProps) {
  const getGradeColor = () => {
    if (percentage >= 80) return "text-[#10B981]"
    if (percentage >= 60) return "text-[#F59E0B]"
    return "text-destructive"
  }

  const getGradeBackground = () => {
    if (percentage >= 80) return "from-[#10B981]/20 to-[#10B981]/5"
    if (percentage >= 60) return "from-[#F59E0B]/20 to-[#F59E0B]/5"
    return "from-destructive/20 to-destructive/5"
  }

  const getGrade = () => {
    if (percentage >= 90) return "A+"
    if (percentage >= 80) return "A"
    if (percentage >= 70) return "B"
    if (percentage >= 60) return "C"
    if (percentage >= 50) return "D"
    return "F"
  }

  const getMessage = () => {
    if (percentage >= 80) return "Excellent work! You've mastered this topic."
    if (percentage >= 60) return "Good effort! Keep practicing to improve."
    return "Don't give up! Review the material and try again."
  }

  return (
    <Card className={cn(
      "border-0 shadow-sm overflow-hidden bg-gradient-to-br",
      getGradeBackground()
    )}>
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Score Circle */}
          <div className="relative">
            <div className="w-40 h-40 rounded-full bg-card shadow-lg flex items-center justify-center">
              <div className="text-center">
                <div className={cn("font-heading text-5xl font-bold", getGradeColor())}>
                  {percentage}%
                </div>
                <div className="text-sm text-muted-foreground mt-1">Score</div>
              </div>
            </div>
            {/* Grade Badge */}
            <div className={cn(
              "absolute -top-2 -right-2 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg",
              percentage >= 80 ? "bg-[#10B981]" : percentage >= 60 ? "bg-[#F59E0B]" : "bg-destructive"
            )}>
              {getGrade()}
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Trophy className={cn("h-6 w-6", getGradeColor())} />
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Test Completed!
              </h2>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              {getMessage()}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card/80">
                <CheckCircle className="h-5 w-5 text-[#10B981]" />
                <div>
                  <p className="text-xs text-muted-foreground">Correct</p>
                  <p className="font-semibold text-foreground">{score}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card/80">
                <Target className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Total</p>
                  <p className="font-semibold text-foreground">{total}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card/80">
                <Clock className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground">Time</p>
                  <p className="font-semibold text-foreground">24:35</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
