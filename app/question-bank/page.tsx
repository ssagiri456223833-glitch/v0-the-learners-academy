"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { QuestionFilters } from "@/components/question-bank/question-filters"
import { QuestionGrid } from "@/components/question-bank/question-grid"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
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
      subtitle="Browse and manage your question collection"
    >
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex items-center justify-between">
          <QuestionFilters filters={filters} onChange={setFilters} />
          <Link href="/create-test">
            <Button className="gap-2 bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4" />
              Add Question
            </Button>
          </Link>
        </div>

        {/* Question Grid */}
        <QuestionGrid filters={filters} />
      </div>
    </DashboardLayout>
  )
}
