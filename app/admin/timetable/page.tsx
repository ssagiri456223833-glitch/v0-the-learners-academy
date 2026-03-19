"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { TimetableGrid } from "@/components/dashboard/timetable-grid"
import { Button } from "@/components/ui/button"
import { Plus, Download, Filter } from "lucide-react"

export default function AdminTimetable() {
  return (
    <DashboardLayout 
      title="Master Timetable" 
      subtitle="Schedule Operational Slots & Staff Allocations"
    >
      <div className="space-y-10 pb-12">
        {/* Institutional Control Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8">
          <div className="flex flex-wrap gap-4">
             <Button variant="outline" className="btn-secondary h-11 px-6 gap-3 text-[12px] font-bold uppercase tracking-widest">
                <Filter className="h-4 w-4 opacity-50" />
                Filter Slots
             </Button>
             <Button variant="outline" className="btn-secondary h-11 px-6 gap-3 text-[12px] font-bold uppercase tracking-widest">
                <Download className="h-4 w-4 opacity-50" />
                Export Protocol (PDF)
             </Button>
          </div>
          <Button className="btn-primary h-11 px-8 gap-3 text-[12px] font-bold uppercase tracking-widest">
            <Plus className="h-4 w-4" />
            Initialize New Slot
          </Button>
        </div>

        {/* Timetable Environment Summary */}
        <div className="bg-white border border-border shadow-sm rounded-lg overflow-hidden">
          <TimetableGrid />
        </div>

        <div className="pt-8 border-t border-border flex items-center justify-between">
           <p className="micro-text text-muted-foreground font-black uppercase tracking-[0.2em] opacity-30">
              Audit Status: Verified • Cycle T2
           </p>
           <p className="micro-text text-muted-foreground font-bold italic opacity-40">
              Last Global Refresh: 15:42 GMT
           </p>
        </div>
      </div>
    </DashboardLayout>
  )
}
