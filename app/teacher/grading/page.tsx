"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight,
  ArrowLeft,
  UserCircle2,
  GraduationCap,
  MessageSquareQuote
} from "lucide-react"
import Link from "next/link"

const MOCK_GRADABLE_TESTS = [
  { id: "t1", title: "Mid-Term Test", level: "Level 4", slot: 1, pending: 8, total: 24, date: "Oct 12, 2026" },
  { id: "t2", title: "Writing Section", level: "Level 6", slot: 2, pending: 3, total: 18, date: "Oct 15, 2026" },
]

export default function GradingListPage() {
  const [filter, setFilter] = useState<"pending" | "all">("pending")

  return (
    <DashboardLayout 
      title="Teacher Grading" 
      subtitle="Grade written answers and provide feedback to students."
    >
      <div className="space-y-8 pb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <Link href="/teacher" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-semibold uppercase tracking-widest">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
          <div className="flex bg-slate-100 p-1 rounded-md">
             <Button 
               size="sm" 
               variant={filter === "pending" ? "default" : "ghost"}
               className={`h-9 px-4 text-[10px] font-semibold uppercase tracking-widest rounded-sm ${filter === "pending" ? 'bg-primary shadow-sm' : 'opacity-60'}`}
               onClick={() => setFilter("pending")}
             >
                Pending Grades ({MOCK_GRADABLE_TESTS.reduce((acc, t) => acc + t.pending, 0)})
             </Button>
             <Button 
               size="sm" 
               variant={filter === "all" ? "default" : "ghost"}
               className={`h-9 px-4 text-[10px] font-semibold uppercase tracking-widest rounded-sm ${filter === "all" ? 'bg-primary shadow-sm' : 'opacity-60'}`}
               onClick={() => setFilter("all")}
             >
                All Tests
             </Button>
          </div>
        </div>

        <div className="space-y-6">
           {MOCK_GRADABLE_TESTS.map((test) => (
             <Card key={test.id} className="border border-border bg-white shadow-sm rounded-lg overflow-hidden group hover:shadow-md transition-all duration-300">
               <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row items-stretch">
                     {/* Left Brand Slot */}
                     <div className="md:w-64 bg-slate-50 p-8 border-b md:border-b-0 md:border-r border-border flex flex-col justify-between">
                        <div>
                           <Badge variant="outline" className="text-[10px] font-semibold border-primary/20 text-primary uppercase tracking-widest px-3 h-6">SLOT {test.slot}</Badge>
                           <h3 className="page-title text-[24px] text-foreground leading-tight mt-4">{test.level}</h3>
                        </div>
                        <p className="text-[11px] font-semibold text-muted-foreground opacity-40 uppercase tracking-[0.2em] mt-8">{test.date}</p>
                     </div>

                     {/* Right Content Slot */}
                     <div className="flex-1 p-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div className="space-y-4">
                           <div className="flex items-center gap-3">
                              <div className="p-2 rounded-md bg-primary/5 text-primary">
                                 <FileText className="h-5 w-5" />
                              </div>
                              <h4 className="text-[18px] font-semibold text-foreground tracking-tight">{test.title}</h4>
                           </div>
                           <div className="flex items-center gap-6">
                              <div className="flex items-center gap-2">
                                 <AlertCircle className="h-4 w-4 text-warning" />
                                 <span className="text-[13px] font-semibold text-foreground tabular-nums">{test.pending} <span className="opacity-40 font-medium">Pending</span></span>
                              </div>
                              <div className="flex items-center gap-2">
                                 <CheckCircle2 className="h-4 w-4 text-success opacity-40" />
                                 <span className="text-[13px] font-semibold text-foreground tabular-nums">{test.total - test.pending}/{test.total} <span className="opacity-40 font-medium">Graded</span></span>
                              </div>
                           </div>
                        </div>

                        <Link href={`/teacher/grading/${test.id}`}>
                           <Button className="btn-primary h-12 px-8 rounded-md gap-3 text-[11px] font-semibold uppercase tracking-widest w-full md:w-auto">
                              Start Grading
                              <ChevronRight className="h-4 w-4" />
                           </Button>
                        </Link>
                     </div>
                  </div>
               </CardContent>
             </Card>
           ))}
        </div>

        {/* Empty State */}
        {MOCK_GRADABLE_TESTS.length === 0 && (
          <div className="text-center py-20 bg-slate-50/50 rounded-lg border-2 border-dashed border-border">
             <div className="p-4 rounded-full bg-white shadow-sm inline-block mb-6 border border-border">
                <GraduationCap className="h-10 w-10 text-muted-foreground opacity-30" />
             </div>
             <h3 className="text-[18px] font-semibold text-foreground">All Grading Complete</h3>
             <p className="micro-text text-muted-foreground mt-2 uppercase tracking-widest opacity-60">All student answers have been graded for this term.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
