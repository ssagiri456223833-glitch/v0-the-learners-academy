"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  ShieldCheck, 
  Mail, 
  Calendar 
} from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

const teachers = [
  { id: "STA-001", name: "Abbas Ali", level: "Senior Assessor", classes: ["Level One", "Level Two"], status: "In Session", email: "abbas.ali@academy.edu" },
  { id: "STA-002", name: "Sarah Jennings", level: "Lead Evaluator", classes: ["Level Three"], status: "Available", email: "sarah.j@academy.edu" },
  { id: "STA-003", name: "Michael Chen", level: "Assessor", classes: ["Level One", "Level Four"], status: "On Leave", email: "m.chen@academy.edu" },
  { id: "STA-004", name: "Emma Wilson", level: "Assessor", classes: ["Level Two"], status: "Available", email: "e.wilson@academy.edu" },
  { id: "STA-005", name: "David Stark", level: "Senior Assessor", classes: ["Level Four"], status: "In Session", email: "d.stark@academy.edu" },
]

export default function TeachersPage() {
  return (
    <DashboardLayout 
      title="Teachers" 
      subtitle="Registry of Teachers & Staff allocations"
    >
      <div className="space-y-10 pb-12">
        {/* Institutional Search & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-2">
           <div className="flex items-center gap-4 flex-1 max-w-xl">
              <div className="relative flex-1">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground opacity-40" />
                 <Input className="pl-10 h-11 border-border bg-white rounded-md text-[14px]" placeholder="Search Teachers (ID or Name)..." />
              </div>
              <Button variant="outline" className="h-11 px-5 gap-2 text-[12px] font-bold uppercase tracking-widest opacity-60 hover:opacity-100">
                 <Filter className="h-4 w-4" />
                 Filters
              </Button>
           </div>
           <Button className="btn-primary h-11 px-8 gap-3 text-[12px] font-bold uppercase tracking-widest">
              <Plus className="h-4 w-4" />
              Add New Teacher
           </Button>
        </div>

        {/* High-Density Faculty Registry Table */}
        <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden">
           <CardHeader className="bg-slate-50 border-b border-border py-6 px-10 flex flex-row items-center justify-between">
              <div className="flex items-center gap-3">
                 <ShieldCheck className="h-4 w-4 text-primary opacity-60" />
                 <CardTitle className="text-[18px] font-semibold text-foreground tracking-tight">Active Teachers</CardTitle>
              </div>
              <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5 font-semibold text-[9px] tracking-widest px-3 h-6 uppercase">Total Personnel: {teachers.length}</Badge>
           </CardHeader>
           <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-slate-50/50">
                  <TableRow className="border-b border-border hover:bg-transparent">
                    <TableHead className="w-[120px] pl-10 h-14 micro-text font-semibold text-muted-foreground opacity-60 uppercase tracking-widest">Teacher ID</TableHead>
                    <TableHead className="h-14 micro-text font-semibold text-muted-foreground opacity-60 uppercase tracking-widest">Teacher Name</TableHead>
                    <TableHead className="h-14 micro-text font-semibold text-muted-foreground opacity-60 uppercase tracking-widest text-center">Designation</TableHead>
                    <TableHead className="h-14 micro-text font-semibold text-muted-foreground opacity-60 uppercase tracking-widest">Assigned Levels</TableHead>
                    <TableHead className="h-14 micro-text font-semibold text-muted-foreground opacity-60 uppercase tracking-widest">Status</TableHead>
                    <TableHead className="w-[80px] h-14 pr-10"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teachers.map((teacher) => (
                    <TableRow key={teacher.id} className="border-b border-border group hover:bg-slate-50/50 transition-colors">
                      <TableCell className="pl-10 text-[12px] font-semibold text-muted-foreground opacity-40 tabular-nums">{teacher.id}</TableCell>
                      <TableCell>
                         <div className="flex flex-col py-1">
                            <span className="text-[14px] font-bold text-foreground leading-tight">{teacher.name}</span>
                            <span className="text-[11px] font-medium text-muted-foreground italic flex items-center gap-1.5 mt-0.5">
                               <Mail className="h-3 w-3 opacity-30" />
                               {teacher.email}
                            </span>
                         </div>
                      </TableCell>
                      <TableCell className="text-center">
                         <Badge variant="outline" className="text-[10px] font-bold border-border bg-white text-foreground opacity-60">
                            {teacher.level}
                         </Badge>
                      </TableCell>
                      <TableCell>
                         <div className="flex flex-wrap gap-1.5">
                            {teacher.classes.map((cls, j) => (
                               <span key={j} className="text-[11px] font-bold text-primary bg-primary/5 border border-primary/10 rounded-sm px-2 py-0.5 italic">
                                  {cls}
                               </span>
                            ))}
                         </div>
                      </TableCell>
                      <TableCell>
                         <div className="flex items-center gap-2">
                            <div className={`h-1.5 w-1.5 rounded-full ${
                               teacher.status === 'In Session' ? 'bg-success' : teacher.status === 'Available' ? 'bg-primary' : 'bg-muted-foreground opacity-30'
                            }`} />
                            <span className={`text-[12px] font-bold uppercase tracking-tighter ${
                               teacher.status === 'In Session' ? 'text-success' : teacher.status === 'Available' ? 'text-primary' : 'text-muted-foreground opacity-40'
                            }`}>
                               {teacher.status}
                            </span>
                         </div>
                      </TableCell>
                      <TableCell className="pr-10 text-right">
                         <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                               <Button variant="ghost" size="icon" className="h-8 w-8 opacity-20 group-hover:opacity-100 transition-opacity">
                                  <MoreHorizontal className="h-4 w-4" />
                               </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48 rounded-md border-border">
                               <DropdownMenuLabel className="micro-text font-semibold text-muted-foreground opacity-40 px-3 py-2 uppercase tracking-widest">Actions</DropdownMenuLabel>
                               <DropdownMenuSeparator />
                               <DropdownMenuItem className="text-[13px] font-bold gap-3 px-3 py-2 cursor-pointer">
                                  <Mail className="h-3.5 w-3.5 opacity-40" />
                                  Dispatch Audit
                               </DropdownMenuItem>
                               <DropdownMenuItem className="text-[13px] font-bold gap-3 px-3 py-2 cursor-pointer">
                                  <Calendar className="h-3.5 w-3.5 opacity-40" />
                                  Manual Allocation
                               </DropdownMenuItem>
                               <DropdownMenuSeparator />
                               <DropdownMenuItem className="text-[13px] font-bold gap-3 px-3 py-2 cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/5">
                                  De-authenticate
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                         </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
           </CardContent>
        </Card>

        {/* Page Legend */}
        <div className="pt-8 border-t border-border flex items-center justify-between">
           <p className="micro-text text-muted-foreground font-semibold uppercase tracking-[0.2em] opacity-30">
              Database Connected
           </p>
           <p className="micro-text text-muted-foreground font-semibold opacity-40">
              Term: Spring 2026
           </p>
        </div>
      </div>
    </DashboardLayout>
  )
}
