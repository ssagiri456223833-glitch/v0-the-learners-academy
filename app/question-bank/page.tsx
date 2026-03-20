"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { QuestionFilters } from "@/components/question-bank/question-filters"
import { QuestionGrid } from "@/components/question-bank/question-grid"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Plus } from "lucide-react"
import Link from "next/link"

export default function QuestionBankPage() {
  const [filters, setFilters] = useState({
    subject: "all",
    difficulty: "all",
    search: "",
  })

  return (
    <DashboardLayout 
      title="Question Bank" 
      subtitle="Organized by Topic • Comprehensive Assessment Items"
    >
      <div className="space-y-12 pb-12">
        {/* Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8">
           <div className="relative group w-full md:w-[450px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground opacity-40 group-focus-within:text-primary transition-colors" />
              <Input className="pl-12 h-12 border-border bg-white rounded-lg text-[14px] font-medium" placeholder="Search questions..." />
           </div>
           <div className="flex items-center gap-4">
              <Button variant="outline" className="h-12 w-12 p-0 border-border hover:border-primary/20 transition-all">
                 <Filter className="h-4 w-4 opacity-50" />
              </Button>
              <Button className="btn-primary h-12 px-8 gap-3 text-[12px] font-bold uppercase tracking-widest">
                 <Plus className="h-4 w-4" />
                 Add New Question
              </Button>
           </div>
        </div>

        {/* Question Grid Deployment */}
        <div className="p-2 bg-slate-50/50 rounded-lg border border-slate-100">
           <QuestionGrid filters={filters} />
        </div>
                <div className="pt-8 border-t border-border flex items-center justify-between">
            <p className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-30">
               Database Connected
            </p>
            <p className="micro-text text-muted-foreground font-semibold opacity-40 uppercase">
               Last Refresh: Live
            </p>
         </div>
      </div>
    </DashboardLayout>
  )
}
