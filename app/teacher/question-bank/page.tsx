"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Library, Search, Plus, Filter, BookOpen, Layers } from "lucide-react"
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
      title="Question Repository" 
      subtitle="Access and manage the institutional question bank."
    >
      <div className="space-y-8 page-entrance">
        {/* Search and Action Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div className="relative group w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-[#1d8ae2] transition-colors" />
              <Input
                type="search"
                placeholder="Search repository..."
                className="w-full pl-10 bg-white/50 backdrop-blur-xl border-white hover:border-[#1d8ae2]/30 focus-visible:ring-[#1d8ae2]/20 shadow-sm transition-all rounded-2xl h-12"
              />
           </div>
           <div className="flex gap-2">
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl border-white bg-white/30 backdrop-blur shadow-sm hover:border-[#1d8ae2]/30">
                 <Filter className="h-4 w-4 text-[#1d8ae2]" />
              </Button>
              <Button className="h-12 bg-[#1d8ae2] hover:bg-[#1d8ae2]/90 shadow-xl shadow-[#1d8ae2]/20 uppercase font-black tracking-tighter text-xs rounded-2xl gap-2 px-6">
                 <Plus className="h-4 w-4" />
                 Create New Entry
              </Button>
           </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {topics.map((topic, i) => (
             <Card key={i} className="premium-card group border-0 shadow-xl shadow-[#1d8ae2]/5 overflow-hidden transition-all hover:scale-[1.01]">
                <CardHeader className="flex flex-row items-center justify-between pb-4 bg-[#1d8ae2]/5">
                   <div className="flex items-center gap-3">
                      <div className="bg-[#1d8ae2] p-2 rounded-xl text-white shadow-lg shadow-[#1d8ae2]/20 group-hover:scale-110 transition-transform">
                         <Layers className="h-4 w-4" />
                      </div>
                      <CardTitle className="font-heading font-black tracking-tighter uppercase text-lg leading-tight">{topic.title}</CardTitle>
                   </div>
                   <Badge variant="secondary" className="bg-white/80 text-[#1d8ae2] border-[#1d8ae2]/20 uppercase font-black text-[10px] tracking-widest">{topic.level}</Badge>
                </CardHeader>
                <CardContent className="p-6">
                   <p className="text-sm font-sans font-medium text-muted-foreground mb-6">Access categorized grammar points and vocabulary tests for specialized English training.</p>
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#1d8ae2]">
                         <Library className="h-3.5 w-3.5" />
                         <span>{topic.count} Available</span>
                      </div>
                      <Button variant="ghost" className="text-xs font-black uppercase text-muted-foreground hover:text-[#1d8ae2] hover:bg-[#1d8ae2]/5 gap-2 px-0">
                         Open View
                         <span className="text-lg leading-none pt-0.5">→</span>
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
