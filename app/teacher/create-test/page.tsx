"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { TestDetailsForm } from "@/components/create-test/test-details-form"
import { QuestionBuilder } from "@/components/create-test/question-builder"
import { QuestionList } from "@/components/create-test/question-list"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Save, Eye, FilePlus } from "lucide-react"
import type { Question, SkillConfig, TestDetails } from "@/lib/types"


export default function TeacherCreateTest() {
  const [testDetails, setTestDetails] = useState<TestDetails>({
    title: "",
    subject: "",
    teacher: "Sir Abbas Ali",
    room: "",
    duration: 30,
    description: "",
    selectedSkills: [],
    shuffleQuestions: false,
    shuffleOptions: false,
    preventTabSwitch: false,
  })
  const [questions, setQuestions] = useState<Question[]>([])
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null)

  const handleAddQuestion = (question: Omit<Question, "id">) => {
    if (editingQuestion) {
      setQuestions(questions.map(q => 
        q.id === editingQuestion.id 
          ? { ...question, id: editingQuestion.id } 
          : q
      ))
      setEditingQuestion(null)
    } else {
      setQuestions([...questions, { ...question, id: crypto.randomUUID() }])
    }
  }

  const handleEditQuestion = (question: Question) => {
    setEditingQuestion(question)
  }

  const handleDeleteQuestion = (id: string) => {
    setQuestions(questions.filter(q => q.id !== id))
    if (editingQuestion?.id === id) {
      setEditingQuestion(null)
    }
  }

  const handleCancelEdit = () => {
    setEditingQuestion(null)
  }

  return (
    <DashboardLayout 
      title="Create Assessment" 
      subtitle="Assemble an English MCQ test for the term."
    >
      <div className="space-y-8">
        {/* Action Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 bg-white shadow-sm rounded-lg border border-border">
           <div className="flex items-center gap-4">
              <div className="bg-[#1d8ae2] p-3 rounded-2xl text-white shadow-lg shadow-[#1d8ae2]/20">
                 <FilePlus className="h-6 w-6" />
              </div>
               <div>
                  <h2 className="text-[20px] font-semibold text-foreground tracking-tight">Drafting: {testDetails.title || "New Unnamed Test"}</h2>
                  <p className="micro-text text-muted-foreground mt-1 uppercase tracking-widest font-semibold opacity-60">Assessment Mode • 2026 Term 2</p>
               </div>
           </div>
           <div className="flex items-center gap-3">
              <Button variant="outline" className="h-12 px-6 rounded-2xl border-white bg-white hover:bg-slate-50 shadow-sm transition-all gap-2 text-slate-600 font-semibold uppercase text-[10px] tracking-widest">
                <Eye className="h-4 w-4" />
                Live Preview
              </Button>
               <Button className="h-12 px-8 rounded-md bg-primary hover:bg-primary/90 shadow-md gap-3 font-semibold uppercase text-[11px] tracking-widest">
                 <Save className="h-4 w-4" />
                 Save & Publish
               </Button>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            <TestDetailsForm 
              details={testDetails} 
              onChange={setTestDetails} 
            />
            <QuestionBuilder 
              onAdd={handleAddQuestion}
              editingQuestion={editingQuestion}
              onCancelEdit={handleCancelEdit}
            />
          </div>

          {/* Sticky List Column */}
          <div className="space-y-6">
            <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden sticky top-24">
              <CardHeader className="bg-slate-50/50 pb-6 border-b border-white">
                <CardTitle className="text-[14px] font-semibold uppercase tracking-widest text-foreground flex items-center justify-between">
                  Inventory
                  <span className="text-[10px] font-semibold uppercase text-primary tracking-widest bg-primary/5 py-1 px-3 rounded-full">
                    {questions.length} Items
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="max-h-[500px] overflow-y-auto custom-scrollbar p-6">
                   <QuestionList
                     questions={questions}
                     onEdit={handleEditQuestion}
                     onDelete={handleDeleteQuestion}
                     editingId={editingQuestion?.id}
                   />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
