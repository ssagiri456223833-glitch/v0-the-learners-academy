import { DashboardLayout } from "@/components/dashboard-layout"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { RecentTests } from "@/components/dashboard/recent-tests"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { TimetableGrid } from "@/components/dashboard/timetable-grid"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, UserCheck, LayoutDashboard, Clock } from "lucide-react"

export default function DashboardPage() {
  return (
    <DashboardLayout 
      title="Academy Overview" 
      subtitle="Operational Status • Term-Based Resource Management"
    >
      <div className="space-y-12 pb-12">
        {/* Institutional Metrics */}
        <StatsCards />

        {/* Master Resource Allocation */}
        <div className="space-y-6">
           <div className="flex items-center gap-3 border-b border-border pb-4">
             <Calendar className="h-4 w-4 text-primary opacity-60" />
             <h2 className="text-[20px] font-semibold text-foreground italic decoration-primary/20 underline underline-offset-8 decoration-2">Timetable & Operational Slots</h2>
           </div>
           <TimetableGrid />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Assessment Monitoring - Primary Column */}
          <div className="lg:col-span-2 space-y-6">
             <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-3">
                  <LayoutDashboard className="h-4 w-4 text-primary opacity-60" />
                  <h2 className="text-[20px] font-semibold text-foreground italic decoration-primary/20 underline underline-offset-8 decoration-2">Live Assessment Feed</h2>
                </div>
                <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-widest opacity-40">Active Protocols</Badge>
             </div>
             
             {/* Dynamic Progress Monitor */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <Card className="border border-border bg-white shadow-sm rounded-md overflow-hidden group hover:border-primary/30 transition-all">
                  <CardContent className="p-5 flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-[13px] font-bold text-foreground uppercase tracking-tight">Ali Khan</p>
                      <p className="micro-text text-muted-foreground font-medium opacity-60 uppercase">LVL 1 • SECTION A • Q 4/10</p>
                    </div>
                    <div className="h-8 w-8 rounded-full border-[3px] border-slate-100 border-t-primary animate-spin" />
                  </CardContent>
                </Card>
                <Card className="border border-border bg-white shadow-sm rounded-md overflow-hidden group hover:border-primary/30 transition-all">
                  <CardContent className="p-5 flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-[13px] font-bold text-foreground uppercase tracking-tight">Sarah Ahmed</p>
                      <p className="micro-text text-muted-foreground font-medium opacity-60 uppercase">LVL 1 • SECTION A • Q 8/10</p>
                    </div>
                    <div className="text-[12px] font-bold text-primary italic">22:15 Left</div>
                  </CardContent>
                </Card>
             </div>

             <RecentTests />
          </div>
          
          {/* Administrative Management */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-border pb-4">
               <UserCheck className="h-4 w-4 text-primary opacity-60" />
               <h2 className="text-[20px] font-semibold text-foreground italic decoration-primary/20 underline underline-offset-8 decoration-2">System Actions</h2>
             </div>
            <QuickActions />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
