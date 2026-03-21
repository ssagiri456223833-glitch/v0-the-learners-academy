"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  PlusCircle, 
  Save, 
  Eye, 
  Settings2,
  FilePlus,
  Rocket
} from "lucide-react"
import { QuestionBlock } from "@/components/portal/question-block"
import { Input } from "@/components/ui/input"
import type { Question } from "@/lib/types"

export default function TeacherCreateTest() {
  const [testTitle, setTestTitle] = useState("")
  const [questions, setQuestions] = useState<any[]>([])

  const addQuestion = () => {
    const newQuestion = {
      id: crypto.randomUUID(),
      type: 'mcq',
      text: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
      difficulty: 'medium',
      category: 'Grammar',
      sampleAnswer: ''
    }
    setQuestions([...questions, newQuestion])
  }

  const updateQuestion = (id: string, updated: any) => {
    setQuestions(questions.map(q => q.id === id ? updated : q))
  }

  const deleteQuestion = (id: string) => {
    setQuestions(questions.filter(q => q.id !== id))
  }

  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-24">
      {/* Builder Header */}
      <Card variant="content" className="p-10 bg-white border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="p-4 rounded-2xl bg-primary text-white shadow-xl shadow-primary/20">
              <FilePlus className="h-7 w-7" />
            </div>
            <div className="space-y-1">
              <Input 
                value={testTitle}
                onChange={(e) => setTestTitle(e.target.value)}
                placeholder="Enter Assessment Title..."
                className="text-2xl font-bold bg-transparent border-transparent px-0 h-auto focus:border-b-primary rounded-none shadow-none focus:ring-0 placeholder:text-slate-300"
              />
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Assessment Builder Mode • Term 2</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2 h-11 px-6 font-bold text-slate-600">
              <Eye className="h-4 w-4" />
              Preview
            </Button>
            <Button className="gap-2 h-11 px-8 font-bold shadow-lg shadow-primary/20">
              <Rocket className="h-4 w-4" />
              Publish Test
            </Button>
          </div>
        </div>
      </Card>

      {/* Main Builder Area */}
      <div className="max-w-[1000px] mx-auto space-y-8">
        <div className="flex items-center justify-between border-b border-slate-100 pb-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
            Question Sequence
            <Badge variant="outline" className="text-[10px] font-bold border-slate-200 px-3">{questions.length} Items</Badge>
          </h2>
          <Button variant="ghost" size="sm" className="gap-2 text-slate-500 font-bold uppercase tracking-widest text-[10px]">
            <Settings2 className="h-3.5 w-3.5" />
            Shuffle Logic
          </Button>
        </div>

        {questions.length === 0 ? (
          <div className="p-20 text-center space-y-6 bg-white border-2 border-dashed border-slate-100 rounded-2xl">
            <div className="h-20 w-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto">
               <PlusCircle className="h-10 w-10 text-slate-200" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900">Start Building Your Assessment</h3>
              <p className="text-sm text-slate-400 font-medium">Add your first question to begin crafting this test.</p>
            </div>
            <Button onClick={addQuestion} className="h-12 px-8 font-bold gap-2">
               <PlusCircle className="h-4 w-4" />
               Add First Question
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {questions.map((q, i) => (
              <QuestionBlock 
                key={q.id}
                index={i}
                question={q}
                onUpdate={(updated) => updateQuestion(q.id, updated)}
                onDelete={() => deleteQuestion(q.id)}
              />
            ))}
            
            <Button 
               onClick={addQuestion}
               variant="outline"
               className="w-full h-16 border-dashed border-2 bg-slate-50/50 hover:bg-slate-50 hover:border-primary/50 text-slate-400 hover:text-primary transition-all rounded-2xl gap-3 font-bold"
            >
               <PlusCircle className="h-5 w-5" />
               Insert New Question Block
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
