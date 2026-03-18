import { DashboardLayout } from "@/components/dashboard-layout"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { RecentTests } from "@/components/dashboard/recent-tests"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { TimetableGrid } from "@/components/dashboard/timetable-grid"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, UserCheck, GraduationCap, LayoutDashboard, Clock } from "lucide-react"

export default function DashboardPage() {
  return (
    <DashboardLayout 
      title="Academy Overview" 
      subtitle="Welcome back, Administrator. Manage your classes and teachers."
    >
      <div className="space-y-8 pb-10">
        {/* Stats Section */}
        <StatsCards />

        {/* Detailed Timetable Grid - Primary Focus */}
        <div className="space-y-4">
           <div className="flex items-center gap-2">
             <Calendar className="h-5 w-5 text-primary" />
             <h2 className="text-xl font-bold font-heading uppercase tracking-tighter">Timetable & Staff Slots</h2>
           </div>
           <TimetableGrid />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Tests - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-4">
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <LayoutDashboard className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold font-heading uppercase tracking-tighter">Recent Assessments</h2>
                </div>
                <Badge variant="outline" className="text-xs">Live Monitoring Active</Badge>
             </div>
             
             {/* Live Student Progress Mini-Section */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <Card className="border border-primary/20 bg-primary/5 shadow-none">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-primary uppercase">Ali Khan</p>
                      <p className="text-[10px] text-muted-foreground">Level 1 Assessment • Q 4/10</p>
                    </div>
                    <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                  </CardContent>
                </Card>
                <Card className="border border-secondary/20 bg-secondary/5 shadow-none">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-secondary-foreground uppercase">Sarah Ahmed</p>
                      <p className="text-[10px] text-muted-foreground">Level 1 Assessment • Q 8/10</p>
                    </div>
                    <div className="text-xs font-bold text-secondary-foreground">22:15 left</div>
                  </CardContent>
                </Card>
             </div>

             <RecentTests />
          </div>
          
          {/* Quick Actions */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
               <UserCheck className="h-5 w-5 text-primary" />
               <h2 className="text-xl font-bold font-heading uppercase tracking-tighter">Staff Actions</h2>
             </div>
            <QuickActions />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
