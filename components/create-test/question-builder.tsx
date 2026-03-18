"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Plus, X } from "lucide-react"

interface Question {
  id: string
  text: string
  options: string[]
  correctAnswer: number
}

interface QuestionBuilderProps {
  onAdd: (question: Omit<Question, "id">) => void
  editingQuestion: Question | null
  onCancelEdit: () => void
}

export function QuestionBuilder({ onAdd, editingQuestion, onCancelEdit }: QuestionBuilderProps) {
  const [questionText, setQuestionText] = useState("")
  const [options, setOptions] = useState(["", "", "", ""])
  const [correctAnswer, setCorrectAnswer] = useState(0)

  useEffect(() => {
    if (editingQuestion) {
      setQuestionText(editingQuestion.text)
      setOptions([...editingQuestion.options])
      setCorrectAnswer(editingQuestion.correctAnswer)
    }
  }, [editingQuestion])

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options]
    newOptions[index] = value
    setOptions(newOptions)
  }

  const handleAddOption = () => {
    if (options.length < 6) {
      setOptions([...options, ""])
    }
  }

  const handleRemoveOption = (index: number) => {
    if (options.length > 2) {
      const newOptions = options.filter((_, i) => i !== index)
      setOptions(newOptions)
      if (correctAnswer >= newOptions.length) {
        setCorrectAnswer(0)
      } else if (correctAnswer > index) {
        setCorrectAnswer(correctAnswer - 1)
      }
    }
  }

  const handleSubmit = () => {
    if (questionText.trim() && options.every(opt => opt.trim())) {
      onAdd({
        text: questionText.trim(),
        options: options.map(opt => opt.trim()),
        correctAnswer,
      })
      resetForm()
    }
  }

  const resetForm = () => {
    setQuestionText("")
    setOptions(["", "", "", ""])
    setCorrectAnswer(0)
  }

  const handleCancel = () => {
    resetForm()
    onCancelEdit()
  }

  const isValid = questionText.trim() && options.every(opt => opt.trim())

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="font-heading text-lg font-semibold">
          {editingQuestion ? "Edit Question" : "Add Question"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Question Text */}
        <div className="space-y-2">
          <Label htmlFor="question">Question Text</Label>
          <Input
            id="question"
            placeholder="Enter your question here..."
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            className="focus-visible:ring-primary"
          />
        </div>

        {/* Options */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Answer Options</Label>
            <span className="text-xs text-muted-foreground">
              Select the correct answer
            </span>
          </div>
          
          <RadioGroup
            value={correctAnswer.toString()}
            onValueChange={(value) => setCorrectAnswer(parseInt(value))}
            className="space-y-3"
          >
            {options.map((option, index) => (
              <div key={index} className="flex items-center gap-3">
                <RadioGroupItem
                  value={index.toString()}
                  id={`option-${index}`}
                  className="border-primary text-primary"
                />
                <Input
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  className={`flex-1 focus-visible:ring-primary ${
                    correctAnswer === index ? "border-primary bg-primary/5" : ""
                  }`}
                />
                {options.length > 2 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveOption(index)}
                    className="h-9 w-9 text-muted-foreground hover:text-destructive"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove option</span>
                  </Button>
                )}
              </div>
            ))}
          </RadioGroup>

          {options.length < 6 && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleAddOption}
              className="gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Option
            </Button>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t">
          {editingQuestion && (
            <Button variant="ghost" onClick={handleCancel}>
              Cancel
            </Button>
          )}
          <Button
            onClick={handleSubmit}
            disabled={!isValid}
            className="bg-primary hover:bg-primary/90"
          >
            {editingQuestion ? "Update Question" : "Add Question"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
