"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { TimetableGrid } from "@/components/dashboard/timetable-grid"
import { Button } from "@/components/ui/button"
import { Plus, Download, Filter } from "lucide-react"

export default function AdminTimetable() {
  return (
    <DashboardLayout 
      title="Master Timetable" 
      subtitle="Schedule classes, rooms, and teacher assignments."
    >
      <div className="space-y-6 page-entrance">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
             <Button variant="outline" size="sm" className="gap-2 border-[#1d8ae2]/20 text-[#1d8ae2] hover:bg-[#1d8ae2]/5">
                <Filter className="h-4 w-4" />
                Filter Slots
             </Button>
             <Button variant="outline" size="sm" className="gap-2 border-[#1d8ae2]/20 text-[#1d8ae2] hover:bg-[#1d8ae2]/5">
                <Download className="h-4 w-4" />
                Export PDF
             </Button>
          </div>
          <Button className="gap-2 bg-[#1d8ae2] hover:bg-[#1d8ae2]/90 shadow-lg shadow-[#1d8ae2]/20 uppercase font-black tracking-tighter text-xs">
            <Plus className="h-4 w-4" />
            Add New Slot
          </Button>
        </div>

        <div className="premium-card bg-white/50 backdrop-blur-xl border border-white p-6 rounded-3xl shadow-2xl">
          <TimetableGrid />
        </div>
      </div>
    </DashboardLayout>
  )
}
