"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { QuestionFilters } from "@/components/question-bank/question-filters"
import { QuestionGrid } from "@/components/question-bank/question-grid"
import { Button } from "@/components/ui/button"
import { Plus, Database } from "lucide-react"
import Link from "next/link"

export default function QuestionBankPage() {
  const [filters, setFilters] = useState({
    subject: "all",
    difficulty: "all",
    search: "",
  })

  return (
    <DashboardLayout 
      title="Institutional Question Bank" 
      subtitle="Comprehensive Repository of Assessment Assets & MCQ Items"
    >
      <div className="space-y-10 pb-12">
        {/* Header Actions & Identification */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-md bg-primary/5 text-primary border border-primary/10">
              <Database className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-[20px] font-semibold text-foreground italic decoration-primary/10 underline underline-offset-8 decoration-2">Asset Inventory</h2>
              <p className="micro-text text-muted-foreground font-bold uppercase tracking-widest mt-2 opacity-50">Filter by Level, Complexity, or Syntax Category</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <QuestionFilters filters={filters} onChange={setFilters} />
            <Link href="/teacher/create-test">
              <Button className="btn-primary gap-3 h-11 px-6">
                <Plus className="h-4 w-4" />
                Initialize New Item
              </Button>
            </Link>
          </div>
        </div>

        {/* Question Grid Deployment */}
        <div className="p-2 bg-slate-50/50 rounded-lg border border-slate-100">
           <QuestionGrid filters={filters} />
        </div>
        
        <div className="pt-8 border-t border-border flex items-center justify-between">
           <p className="micro-text text-muted-foreground font-black uppercase tracking-[0.2em] opacity-30">
              Encryption Protocol: Active • Q-Bank v4.1
           </p>
           <p className="micro-text text-muted-foreground font-bold italic opacity-40">
              Last Synced: 2 Minutes Ago
           </p>
        </div>
      </div>
    </DashboardLayout>
  )
}
