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
    { title: "Final Grammar Check", level: "Level Six", date: "Mar 05, 2026", avgScore: 71 },
  ]

  return (
    <DashboardLayout 
      title="Class Performance" 
      subtitle="View and export results from recent assessments."
    >
      <div className="space-y-8 page-entrance">
        {/* Performance Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <Card className="premium-card bg-white shadow-xl shadow-[#1d8ae2]/5 overflow-hidden border-0">
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                 <div className="bg-[#1d8ae2]/10 p-4 rounded-[2rem] text-[#1d8ae2] transition-transform hover:scale-110">
                    <TrendingUp className="h-8 w-8" />
                 </div>
                 <div className="space-y-1">
                    <h3 className="font-heading font-black tracking-tighter uppercase text-lg">Overall Avg Score</h3>
                    <p className="text-3xl font-black text-[#1d8ae2] tracking-tighter uppercase leading-none">77%</p>
                 </div>
                 <Badge variant="outline" className="bg-[#1d8ae2]/5 text-[#1d8ae2] border-[#1d8ae2]/20 font-black text-[10px] tracking-widest uppercase">Increase +4.2% Since Feb</Badge>
              </CardContent>
           </Card>

           <Card className="premium-card bg-white shadow-xl shadow-[#1d8ae2]/5 overflow-hidden border-0">
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                 <div className="bg-emerald-500/10 p-4 rounded-[2rem] text-emerald-600 transition-transform hover:scale-110">
                    <FilePieChart className="h-8 w-8" />
                 </div>
                 <div className="space-y-1">
                    <h3 className="font-heading font-black tracking-tighter uppercase text-lg">Participation Rate</h3>
                    <p className="text-3xl font-black text-emerald-600 tracking-tighter uppercase leading-none">94.2%</p>
                 </div>
                 <Badge variant="outline" className="bg-emerald-500/5 text-emerald-600 border-emerald-500/20 font-black text-[10px] tracking-widest uppercase">Target Achieved</Badge>
              </CardContent>
           </Card>

           <Card className="premium-card bg-white shadow-xl shadow-[#1d8ae2]/5 overflow-hidden border-0">
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                 <div className="bg-amber-500/10 p-4 rounded-[2rem] text-amber-600 transition-transform hover:scale-110">
                    <History className="h-8 w-8" />
                 </div>
                 <div className="space-y-1">
                    <h3 className="font-heading font-black tracking-tighter uppercase text-lg">Tests Validated</h3>
                    <p className="text-3xl font-black text-amber-600 tracking-tighter uppercase leading-none">12/12</p>
                 </div>
                 <Badge variant="outline" className="bg-amber-500/5 text-amber-600 border-amber-500/20 font-black text-[10px] tracking-widest uppercase">All Cycles Complete</Badge>
              </CardContent>
           </Card>
        </div>

        {/* Detailed List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <div className="space-y-4">
              <h2 className="text-2xl font-black font-heading uppercase tracking-tighter text-slate-800">Recent Test Logs</h2>
              <div className="space-y-4">
                 {recentTests.map((test, i) => (
                   <div key={i} className="flex items-center justify-between p-5 bg-white shadow-sm border border-slate-100 rounded-3xl transition-all hover:border-[#1d8ae2]/30 hover:shadow-xl group">
                      <div className="flex flex-col">
                         <span className="font-heading font-black uppercase text-sm tracking-tighter">{test.title}</span>
                         <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{test.level} • {test.date}</span>
                      </div>
                      <div className="flex items-center gap-6">
                         <div className="flex flex-col items-end">
                            <span className="text-lg font-black text-[#1d8ae2] tracking-tighter italic">{test.avgScore}%</span>
                            <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Class Avg</span>
                         </div>
                         <Button variant="ghost" size="icon" className="h-10 w-10 rounded-2xl bg-[#1d8ae2]/5 group-hover:bg-[#1d8ae2] group-hover:text-white transition-all text-[#1d8ae2]">
                            <Download className="h-4 w-4" />
                         </Button>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="space-y-4">
              <h2 className="text-2xl font-black font-heading uppercase tracking-tighter text-slate-800">Visual Insights</h2>
              <Card className="premium-card border-0 shadow-2xl p-6 bg-white rounded-[2.5rem]">
                 <PerformanceBreakdown />
              </Card>
           </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
