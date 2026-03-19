import { Suspense } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { ResultsContent } from "@/components/results/results-content"

export default function ResultsPage() {
  return (
    <DashboardLayout 
      title="Performance Evaluation" 
      subtitle="Comprehensive Analysis • Institutional Feedback Cycle"
    >
      <Suspense fallback={<ResultsLoading />}>
        <ResultsContent />
      </Suspense>
    </DashboardLayout>
  )
}

function ResultsLoading() {
  return (
    <div className="flex flex-col items-center justify-center py-32 space-y-6">
      <div className="animate-spin rounded-full h-12 w-12 border-[3px] border-slate-100 border-t-primary" />
      <p className="micro-text text-muted-foreground font-black uppercase tracking-[0.2em] animate-pulse">
        Retrieving Evaluation Protocol...
      </p>
    </div>
  )
}
