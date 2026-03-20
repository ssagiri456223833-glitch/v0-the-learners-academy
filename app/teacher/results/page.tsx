"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { PerformanceBreakdown } from "@/components/results/performance-breakdown"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, History, FilePieChart, TrendingUp, Search } from "lucide-react"

export default function TeacherResults() {
  const recentTests = [
    { title: "Mid-Term Review", level: "Level One", date: "Mar 12, 2026", avgScore: 78 },
    { title: "Vocabulary Pop Quiz", level: "Level Three", date: "Mar 10, 2026", avgScore: 84 },
    { title: "Final Grammar Test", level: "Level Six", date: "Mar 05, 2026", avgScore: 71 },
  ]

  return (
    <DashboardLayout 
      title="Test Results" 
      subtitle="Performance Analytics • Student Proficiency Overview • 2026 Term 2"
    >
      <div className="space-y-12 pb-12">
        {/* Institutional Metrics Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden group">
              <CardContent className="p-8 flex flex-col items-center text-center gap-6">
                 <div className="bg-primary/5 p-4 rounded-md border border-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <TrendingUp className="h-6 w-6" />
                 </div>
                  <div className="space-y-2">
                     <h3 className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60">Average Score</h3>
                     <p className="text-4xl font-semibold text-primary tracking-tighter tabular-nums leading-none">77%</p>
                  </div>
                  <Badge variant="outline" className="border-success/30 text-success bg-success/5 font-bold text-[9px] tracking-widest uppercase py-1 px-4">+4.2% Delta</Badge>
              </CardContent>
           </Card>

           <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden group">
              <CardContent className="p-8 flex flex-col items-center text-center gap-6">
                 <div className="bg-success/5 p-4 rounded-md border border-success/10 text-success group-hover:bg-success group-hover:text-white transition-all duration-300">
                    <FilePieChart className="h-6 w-6" />
                 </div>
                  <div className="space-y-2">
                     <h3 className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60">Completion Rate</h3>
                     <p className="text-4xl font-semibold text-success tracking-tighter tabular-nums leading-none">94.2%</p>
                  </div>
                  <Badge variant="outline" className="border-border text-muted-foreground font-bold text-[9px] tracking-widest uppercase py-1 px-4">Academy Target</Badge>
              </CardContent>
           </Card>

           <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden group">
              <CardContent className="p-8 flex flex-col items-center text-center gap-6">
                 <div className="bg-warning/5 p-4 rounded-md border border-warning/10 text-warning group-hover:bg-warning group-hover:text-white transition-all duration-300">
                    <History className="h-6 w-6" />
                 </div>
                  <div className="space-y-2">
                     <h3 className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60">Tests Conducted</h3>
                     <p className="text-4xl font-semibold text-warning tracking-tighter tabular-nums leading-none">12 / 12</p>
                  </div>
                  <Badge variant="outline" className="border-border text-muted-foreground font-bold text-[9px] tracking-widest uppercase py-1 px-4">Term Complete</Badge>
              </CardContent>
           </Card>
        </div>

        {/* Audit Logs & Visual Logic */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           <div className="space-y-8">
               <div className="flex items-center gap-4 border-b border-border pb-6">
                  <History className="h-4 w-4 text-primary opacity-40" />
                  <h2 className="text-[18px] font-semibold text-foreground tracking-tight underline underline-offset-8 decoration-primary/5">Test History</h2>
               </div>
              <div className="space-y-4">
                 {recentTests.map((test, i) => (
                   <div key={i} className="flex items-center justify-between p-6 bg-white border border-border shadow-sm rounded-lg transition-all hover:bg-slate-50 group">
                       <div className="flex flex-col gap-1.5">
                          <span className="text-[14px] font-bold text-foreground leading-none tracking-tight">{test.title}</span>
                          <span className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-60">{test.level} • {test.date}</span>
                       </div>
                      <div className="flex items-center gap-10">
                          <div className="flex flex-col items-end gap-1">
                             <span className="text-[18px] font-semibold text-primary tracking-tighter tabular-nums leading-none">{test.avgScore}%</span>
                             <span className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-30">Average</span>
                          </div>
                         <Button variant="outline" size="icon" className="h-10 w-10 btn-secondary border-border opacity-60 hover:opacity-100 transition-all">
                            <Download className="h-4 w-4" />
                         </Button>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="space-y-8">
               <div className="flex items-center gap-4 border-b border-border pb-6">
                  <FilePieChart className="h-4 w-4 text-primary opacity-40" />
                  <h2 className="text-[18px] font-semibold text-foreground tracking-tight underline underline-offset-8 decoration-primary/5">Performance Breakdown</h2>
               </div>
              <div className="p-2 bg-slate-50/50 rounded-lg border border-slate-100">
                 <PerformanceBreakdown score={77} total={100} />
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
