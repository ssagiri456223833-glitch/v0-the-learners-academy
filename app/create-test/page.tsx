"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { TestDetailsForm } from "@/components/create-test/test-details-form"
import { QuestionBuilder } from "@/components/create-test/question-builder"
import { QuestionList } from "@/components/create-test/question-list"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Save, Eye, FilePlus } from "lucide-react"

export interface Question {
  id: string
  text: string
  options: string[]
  correctAnswer: number
}

export interface SkillConfig {
  skillId: string
  marks: number
  questionCount: number
}

export interface TestDetails {
  title: string
  subject: string
  teacher: string
  room: string
  duration: number
  description: string
  selectedSkills: SkillConfig[]
  shuffleQuestions: boolean
  shuffleOptions: boolean
  preventTabSwitch: boolean
}

export default function CreateTestPage() {
  const [testDetails, setTestDetails] = useState<TestDetails>({
    title: "",
    subject: "",
    teacher: "",
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
      title="Create Assessment Protocol" 
      subtitle="Initialize Environment • Configure Skill Overlays • Verify Questions"
    >
      <div className="space-y-10 pb-12">
        {/* Core Header Identification */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-md bg-primary/5 text-primary border border-primary/10">
              <FilePlus className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-[20px] font-semibold text-foreground italic decoration-primary/10 underline underline-offset-8 decoration-2">Deployment Module</h2>
              <p className="micro-text text-muted-foreground font-bold uppercase tracking-widest mt-2 opacity-50">Build an official MCQ evaluation protocol</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="btn-secondary h-11 px-6 gap-2 text-[12px] font-bold uppercase tracking-widest">
              <Eye className="h-4 w-4 opacity-50" />
              Environment Preview
            </Button>
            <Button className="btn-primary h-11 px-8 gap-3 text-[12px] font-bold uppercase tracking-widest">
              <Save className="h-4 w-4" />
              Commit Protocol
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column - Form Interactions */}
          <div className="lg:col-span-2 space-y-10">
            <div className="p-8 bg-white border border-border shadow-sm rounded-lg">
               <TestDetailsForm 
                 details={testDetails} 
                 onChange={setTestDetails} 
               />
            </div>
            
            <div className="p-8 bg-white border border-border shadow-sm rounded-lg">
               <QuestionBuilder 
                 onAdd={handleAddQuestion}
                 editingQuestion={editingQuestion}
                 onCancelEdit={handleCancelEdit}
               />
            </div>
          </div>

          {/* Right Column - Inventory Status */}
          <div className="space-y-6">
            <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden sticky top-24">
              <CardHeader className="bg-slate-50 border-b border-border py-6 px-8 flex flex-row items-center justify-between">
                <CardTitle className="text-[18px] font-semibold italic flex items-center gap-3 tracking-tight">
                   Protocol Inventory
                </CardTitle>
                <Badge variant="outline" className="text-[10px] font-bold opacity-50 px-3 uppercase tracking-tighter">
                   {questions.length} Items Loaded
                </Badge>
              </CardHeader>
              <CardContent className="p-8">
                <QuestionList
                  questions={questions}
                  onEdit={handleEditQuestion}
                  onDelete={handleDeleteQuestion}
                  editingId={editingQuestion?.id}
                />
              </CardContent>
            </Card>
            
            <p className="micro-text text-muted-foreground font-black text-center opacity-30 uppercase tracking-[0.2em] mt-8">
               System Certification: SECURE-7042
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
