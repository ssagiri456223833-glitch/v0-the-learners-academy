import { DashboardLayout } from "@/components/dashboard-layout"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { RecentTests } from "@/components/dashboard/recent-tests"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { TimetableGrid } from "@/components/dashboard/timetable-grid"
import { Calendar, UserCheck, GraduationCap, LayoutDashboard } from "lucide-react"

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
             <div className="flex items-center gap-2">
               <LayoutDashboard className="h-5 w-5 text-primary" />
               <h2 className="text-xl font-bold font-heading uppercase tracking-tighter">Recent Assessments</h2>
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
