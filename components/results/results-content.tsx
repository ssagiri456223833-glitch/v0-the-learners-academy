"use client"

import { useSearchParams } from "next/navigation"
import { ScoreCard } from "@/components/results/score-card"
import { PerformanceBreakdown } from "@/components/results/performance-breakdown"
import { QuestionReview } from "@/components/results/question-review"
import { ResultsActions } from "@/components/results/results-actions"

export function ResultsContent() {
  const searchParams = useSearchParams()
  
  const score = parseInt(searchParams.get("score") || "7")
  const total = parseInt(searchParams.get("total") || "10")
  const percentage = parseInt(searchParams.get("percentage") || "70")

  return (
    <div className="space-y-8">
      {/* Score Card */}
      <ScoreCard score={score} total={total} percentage={percentage} />
      
      {/* Performance Breakdown */}
      <PerformanceBreakdown score={score} total={total} />
      
      {/* Question Review */}
      <QuestionReview />
      
      {/* Actions */}
      <ResultsActions />
    </div>
  )
}
