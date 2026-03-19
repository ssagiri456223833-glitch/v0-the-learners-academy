"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { TimetableGrid } from "@/components/dashboard/timetable-grid"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, UserCheck, Settings, Save, RotateCcw, Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AdminDashboard() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <DashboardLayout 
      title="Institutional Admin" 
      subtitle="Manage the 3-month term cycle and academy resources."
    >
      <div className="space-y-8 pb-10">
        {/* Term Control Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-primary/5 border border-primary/10">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge className="bg-primary hover:bg-primary">Term 2 (Spring 2026)</Badge>
              <span className="text-xs text-muted-foreground font-medium italic">Ends in 45 days</span>
            </div>
            <h2 className="text-2xl font-bold font-heading">Schedule Management</h2>
            <p className="text-sm text-muted-foreground">Define rooms, teachers, and timings for the active term.</p>
          </div>
          <div className="flex items-center gap-3">
            {isEditing ? (
              <>
                <Button variant="outline" className="gap-2" onClick={() => setIsEditing(false)}>
                  <RotateCcw className="h-4 w-4" />
                  Discard
                </Button>
                <Button className="gap-2 bg-primary shadow-lg shadow-primary/20" onClick={() => setIsEditing(false)}>
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </>
            ) : (
              <Button className="gap-2 shadow-lg" onClick={() => setIsEditing(true)}>
                <Settings className="h-4 w-4" />
                Table Editor
              </Button>
            )}
          </div>
        </div>

        {/* The Live Timetable */}
        <div className="relative">
          {isEditing && (
            <div className="absolute inset-0 bg-primary/5 z-10 rounded-2xl border-2 border-dashed border-primary/30 flex items-center justify-center backdrop-blur-[1px]">
               <Badge className="bg-primary text-lg px-6 py-2 shadow-xl animate-bounce">Live Editing Mode Enabled</Badge>
            </div>
          )}
          <TimetableGrid />
        </div>

        {/* Additional Admin Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-sm border-l-4 border-accent">
            <CardHeader>
              <CardTitle className="text-lg font-heading flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-accent" />
                Staff Attendance Sync
              </CardTitle>
              <CardDescription>Managed externally - View-only sync active</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-xl">
                  <span className="text-sm font-medium uppercase tracking-tight">Today's Present Staff</span>
                  <Badge variant="secondary" className="font-bold">18/22</Badge>
                </div>
                <Button variant="ghost" className="w-full text-xs text-muted-foreground hover:text-primary">View Sync Log</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm border-l-4 border-primary">
            <CardHeader>
              <CardTitle className="text-lg font-heading flex items-center gap-2">
                <Plus className="h-5 w-5 text-primary" />
                Quick Resource Add
              </CardTitle>
              <CardDescription>Add new levels or rooms to the institution</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-3">
              <Button variant="outline" className="flex-1 text-xs">New Level</Button>
              <Button variant="outline" className="flex-1 text-xs">New Teacher</Button>
              <Button variant="outline" className="flex-1 text-xs">New Room</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
