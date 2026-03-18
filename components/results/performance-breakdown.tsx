"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface PerformanceBreakdownProps {
  score: number
  total: number
}

const categories = [
  { name: "Algebra", correct: 3, total: 4 },
  { name: "Geometry", correct: 2, total: 3 },
  { name: "Calculus", correct: 1, total: 2 },
  { name: "Arithmetic", correct: 1, total: 1 },
]

export function PerformanceBreakdown({ score, total }: PerformanceBreakdownProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Category Breakdown */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="font-heading text-lg font-semibold">
            Performance by Topic
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {categories.map((category) => {
            const percentage = Math.round((category.correct / category.total) * 100)
            return (
              <div key={category.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">{category.name}</span>
                  <span className="text-muted-foreground">
                    {category.correct}/{category.total} ({percentage}%)
                  </span>
                </div>
                <Progress 
                  value={percentage} 
                  className="h-2"
                />
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* Summary Stats */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="font-heading text-lg font-semibold">
            Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-[#10B981]/10">
              <p className="text-sm text-muted-foreground mb-1">Correct Answers</p>
              <p className="font-heading text-3xl font-bold text-[#10B981]">{score}</p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10">
              <p className="text-sm text-muted-foreground mb-1">Incorrect Answers</p>
              <p className="font-heading text-3xl font-bold text-destructive">{total - score}</p>
            </div>
            <div className="p-4 rounded-lg bg-primary/10">
              <p className="text-sm text-muted-foreground mb-1">Accuracy</p>
              <p className="font-heading text-3xl font-bold text-primary">
                {Math.round((score / total) * 100)}%
              </p>
            </div>
            <div className="p-4 rounded-lg bg-accent/10">
              <p className="text-sm text-muted-foreground mb-1">Rank</p>
              <p className="font-heading text-3xl font-bold text-accent">Top 15%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
