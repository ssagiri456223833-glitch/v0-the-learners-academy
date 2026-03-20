"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  FileText, 
  MoreVertical, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  FileEdit,
  BarChart3,
  Search,
  LayoutGrid
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const tests = [
  { id: "TEST-4412", title: "Mid-Term Vocabulary", level: "Level 4", students: 18, status: "completed", date: "2m ago" },
  { id: "TEST-4413", title: "Foundation Grammar", level: "Level 1", students: 24, status: "in-progress", date: "Just now" },
  { id: "TEST-4414", title: "Advanced Syntax", level: "Level 6", students: 12, status: "pending", date: "1h ago" },
]

export function RecentTests() {
  const statusStyles = {
    completed: "bg-success/5 text-success border-success/20",
    "in-progress": "bg-primary/5 text-primary border-primary/20",
    pending: "bg-warning/5 text-warning border-warning/20",
  }

  return (
    <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden">
      <CardHeader className="bg-slate-50 border-b border-border py-8 px-10 flex flex-row items-center justify-between">
        <div className="space-y-1">
          <CardTitle className="page-title text-[28px] flex items-center gap-3">
             Recent Test Activity
          </CardTitle>
          <p className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-60">Verified Historical Live Feed</p>
        </div>
        <div className="flex items-center gap-4">
           <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground opacity-30 group-focus-within:text-primary transition-colors" />
              <input type="text" placeholder="Search Activity..." className="h-9 pl-9 pr-4 bg-white border border-border rounded-md text-[11px] font-semibold uppercase tracking-widest focus:ring-4 focus:ring-primary/5 outline-none transition-all w-48" />
           </div>
           <Button variant="outline" size="icon" className="h-9 w-9 btn-secondary border-border hover:border-primary transition-all">
              <LayoutGrid className="h-4 w-4 opacity-40" />
           </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-slate-50">
          {tests.map((test) => (
            <div key={test.id} className="p-10 flex items-center justify-between transition-colors hover:bg-slate-50/50 group">
              <div className="flex items-center gap-8">
                <div className={`p-4 rounded-md border ${statusStyles[test.status as keyof typeof statusStyles]} group-hover:scale-110 transition-transform duration-500`}>
                  <FileText className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                   <div className="flex items-center gap-3">
                      <h4 className="text-[17px] font-semibold text-foreground tracking-tight underline-offset-4 decoration-primary/10 underline decoration-2">{test.title}</h4>
                      <Badge 
                        variant="outline" 
                        className={`text-[9px] font-semibold uppercase tracking-tighter px-2 h-5 ${statusStyles[test.status as keyof typeof statusStyles]}`}
                      >
                        {test.status.replace('-', ' ')}
                      </Badge>
                   </div>
                   <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                         <span className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-30">Level</span>
                         <span className="text-[13px] font-semibold text-foreground italic">{test.level}</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <span className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-30">Students</span>
                         <span className="text-[13px] font-semibold text-foreground tabular-nums">{test.students}</span>
                      </div>
                      <span className="text-muted-foreground/20 font-black">•</span>
                      <div className="flex items-center gap-2">
                         <Clock className="h-3 w-3 text-muted-foreground opacity-40" />
                         <span className="text-[11px] font-semibold text-muted-foreground tracking-widest uppercase opacity-60 tabular-nums">{test.date}</span>
                      </div>
                   </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                 <div className="flex flex-col items-end gap-1 opacity-10 group-hover:opacity-100 transition-opacity">
                    <span className="micro-text font-semibold uppercase tracking-widest text-muted-foreground italic">Test ID</span>
                    <span className="text-[11px] font-semibold text-foreground tabular-nums tracking-widest select-all">{test.id}</span>
                 </div>
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground opacity-30 group-hover:opacity-100 transition-opacity">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 rounded-md border-border p-2">
                      <DropdownMenuLabel className="micro-text font-semibold text-muted-foreground opacity-40 px-3 py-2 uppercase tracking-widest">Test Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="p-3 text-[13px] font-semibold gap-3 cursor-pointer rounded-sm hover:bg-slate-50 transition-colors">
                        <FileEdit className="h-4 w-4 opacity-40" />
                        Edit Test
                      </DropdownMenuItem>
                      <DropdownMenuItem className="p-3 text-[13px] font-semibold gap-3 cursor-pointer rounded-sm hover:bg-slate-50 transition-colors">
                        <BarChart3 className="h-4 w-4 opacity-40" />
                        Performance Report
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                 </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
