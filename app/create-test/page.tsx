"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { TestDetailsForm } from "@/components/create-test/test-details-form"
import { QuestionBuilder } from "@/components/create-test/question-builder"
import { QuestionList } from "@/components/create-test/question-list"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Save, Eye } from "lucide-react"

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
      title="Create Test" 
      subtitle="Build a new MCQ test for your students"
    >
      <div className="space-y-6">
        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3">
          <Button variant="outline" className="gap-2">
            <Eye className="h-4 w-4" />
            Preview
          </Button>
          <Button className="gap-2 bg-primary hover:bg-primary/90">
            <Save className="h-4 w-4" />
            Save Test
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Test Details & Question Builder */}
          <div className="lg:col-span-2 space-y-6">
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

          {/* Right Column - Question List */}
          <div>
            <Card className="border-0 shadow-sm sticky top-24">
              <CardHeader className="pb-4">
                <CardTitle className="font-heading text-lg font-semibold flex items-center justify-between">
                  Questions
                  <span className="text-sm font-normal text-muted-foreground">
                    {questions.length} added
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <QuestionList
                  questions={questions}
                  onEdit={handleEditQuestion}
                  onDelete={handleDeleteQuestion}
                  editingId={editingQuestion?.id}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
