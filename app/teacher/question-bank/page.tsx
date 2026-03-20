"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Library, Search, Plus, Filter, BookOpen, Layers, Database } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function TeacherQuestionBank() {
  const topics = [
    { title: "Essential Spoken Grammar", count: 124, level: "Beginner" },
    { title: "Vocabulary Refinement", count: 86, level: "Intermediate" },
    { title: "Advanced Phraseology", count: 52, level: "Advanced" },
    { title: "Formal Writing Structure", count: 91, level: "Professional" },
  ]

  return (
    <DashboardLayout 
      title="Question Bank" 
      subtitle="Organized by Topic • High-Quality Assessment Questions"
    >
      <div className="space-y-12 pb-12">
        {/* Search & Action Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-10">
           <div className="relative group w-full md:w-[450px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground opacity-40 group-focus-within:text-primary transition-colors" />
              <Input
                className="pl-10 h-11 border-border bg-white rounded-md text-[14px]"
                placeholder="Search topics, levels, or keywords..."
              />
           </div>
           <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="h-12 w-12 btn-secondary border-border hover:border-primary transition-all">
                 <Filter className="h-4 w-4 opacity-50" />
              </Button>
              <Button className="btn-primary h-11 px-8 gap-3 text-[12px] font-semibold uppercase tracking-widest">
               <Plus className="h-4 w-4" />
               Add New Question
             </Button>
           </div>
        </div>

        {/* Question Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {topics.map((topic, i) => (
             <Card key={i} className="border border-border bg-white shadow-sm rounded-lg overflow-hidden transition-all hover:bg-slate-50 group">
                <CardHeader className="flex flex-row items-center justify-between p-8 bg-slate-50 border-b border-border">
                   <div className="flex items-center gap-4">
                      <div className="p-3 rounded-md bg-white border border-border text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                         <Layers className="h-5 w-5" />
                      </div>
                      <CardTitle className="page-title text-[22px] text-foreground leading-tight">{topic.title}</CardTitle>
                   </div>
                   <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5 font-semibold text-[9px] tracking-widest px-3 h-6 uppercase">{topic.level}</Badge>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                   <p className="text-[14px] font-medium text-muted-foreground italic leading-relaxed opacity-60">
                      Standardized questions categorized for English evaluation. Reviewed and verified for the current academic term.
                   </p>
                   <div className="flex items-center justify-between border-t border-border pt-8 mt-4">
                      <div className="flex items-center gap-3">
                         <span className="text-[13px] font-semibold text-muted-foreground uppercase tracking-tight">Questions:</span>
                         <span className="text-[16px] font-semibold text-primary">{topic.count}</span>
                      </div>
                      <Button variant="ghost" className="text-[12px] font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary hover:bg-transparent gap-3 p-0 h-auto">
                         View Questions
                         <span className="text-[18px] leading-none opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                      </Button>
                   </div>
                </CardContent>
             </Card>
           ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
