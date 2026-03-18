import { Suspense } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { ResultsContent } from "@/components/results/results-content"

export default function ResultsPage() {
  return (
    <DashboardLayout 
      title="Test Results" 
      subtitle="Review your performance and detailed breakdown"
    >
      <Suspense fallback={<ResultsLoading />}>
        <ResultsContent />
      </Suspense>
    </DashboardLayout>
  )
}

function ResultsLoading() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary" />
    </div>
  )
}
