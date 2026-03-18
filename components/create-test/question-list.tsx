"use client"

import { Button } from "@/components/ui/button"
import { Edit2, Trash2, GripVertical } from "lucide-react"
import { cn } from "@/lib/utils"

interface Question {
  id: string
  text: string
  options: string[]
  correctAnswer: number
}

interface QuestionListProps {
  questions: Question[]
  onEdit: (question: Question) => void
  onDelete: (id: string) => void
  editingId?: string
}

export function QuestionList({ questions, onEdit, onDelete, editingId }: QuestionListProps) {
  if (questions.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
          <span className="text-2xl text-muted-foreground">?</span>
        </div>
        <p className="text-sm text-muted-foreground">
          No questions added yet.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Use the form to add questions to your test.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
      {questions.map((question, index) => (
        <div
          key={question.id}
          className={cn(
            "group p-3 rounded-lg border transition-all",
            editingId === question.id
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50 hover:bg-muted/50"
          )}
        >
          <div className="flex items-start gap-2">
            <div className="flex items-center gap-1 text-muted-foreground">
              <GripVertical className="h-4 w-4 opacity-0 group-hover:opacity-100 cursor-grab" />
              <span className="text-xs font-medium w-5">{index + 1}.</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground line-clamp-2">
                {question.text}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {question.options.length} options
              </p>
            </div>
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-muted-foreground hover:text-primary"
                onClick={() => onEdit(question)}
              >
                <Edit2 className="h-3.5 w-3.5" />
                <span className="sr-only">Edit question</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-muted-foreground hover:text-destructive"
                onClick={() => onDelete(question.id)}
              >
                <Trash2 className="h-3.5 w-3.5" />
                <span className="sr-only">Delete question</span>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
