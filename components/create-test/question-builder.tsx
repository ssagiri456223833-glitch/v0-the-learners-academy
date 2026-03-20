"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { Question } from "@/lib/types"
import { Plus, X, FileEdit } from "lucide-react"

interface QuestionBuilderProps {
  onAdd: (question: Omit<Question, "id">) => void
  editingQuestion: Question | null
  onCancelEdit: () => void
}

export function QuestionBuilder({ onAdd, editingQuestion, onCancelEdit }: QuestionBuilderProps) {
  const [type, setType] = useState<"mcq" | "short">("mcq")
  const [questionText, setQuestionText] = useState("")
  const [options, setOptions] = useState(["", "", "", ""])
  const [correctAnswer, setCorrectAnswer] = useState(0)
  const [sampleAnswer, setSampleAnswer] = useState("")

  useEffect(() => {
    if (editingQuestion) {
      setType(editingQuestion.type)
      setQuestionText(editingQuestion.text)
      setOptions(editingQuestion.options || ["", "", "", ""])
      setCorrectAnswer(editingQuestion.correctAnswer || 0)
      setSampleAnswer(editingQuestion.sampleAnswer || "")
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
    if (questionText.trim()) {
      if (type === "mcq" && options.every(opt => opt.trim())) {
        onAdd({
          type,
          text: questionText.trim(),
          options: options.map(opt => opt.trim()),
          correctAnswer,
        })
        resetForm()
      } else if (type === "short" && sampleAnswer.trim()) {
        onAdd({
          type,
          text: questionText.trim(),
          sampleAnswer: sampleAnswer.trim(),
        })
        resetForm()
      }
    }
  }

  const resetForm = () => {
    setQuestionText("")
    setOptions(["", "", "", ""])
    setCorrectAnswer(0)
    setSampleAnswer("")
    setType("mcq")
  }

  const handleCancel = () => {
    resetForm()
    onCancelEdit()
  }

  const isValid = questionText.trim() && (
    (type === "mcq" && options.every(opt => opt.trim())) ||
    (type === "short" && sampleAnswer.trim())
  )

  return (
    <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden">
      <CardHeader className="bg-slate-50 border-b border-border py-6 px-8 flex flex-row items-center justify-between">
        <CardTitle className="text-[18px] font-semibold italic flex items-center gap-3 tracking-tight">
          <FileEdit className="h-4 w-4 text-primary opacity-60" />
          {editingQuestion ? "Modify Existing Item" : "Initialize Evaluation Item"}
        </CardTitle>
        {editingQuestion && (
          <Badge variant="outline" className="border-warning/30 text-warning bg-warning/5 text-[9px] font-semibold uppercase tracking-widest px-3 h-6">Edit Mode</Badge>
        )}
      </CardHeader>
      <CardContent className="p-8 space-y-10">
        {/* Question Type Selector */}
        <div className="space-y-3">
          <Label className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60">Evaluation Protocol</Label>
          <div className="flex gap-4">
             <Button 
               variant={type === "mcq" ? "default" : "outline"}
               className={`flex-1 h-12 gap-3 text-[11px] font-semibold uppercase tracking-widest transition-all ${type === "mcq" ? "bg-primary shadow-md" : "border-border opacity-60 hover:opacity-100"}`}
               onClick={() => setType("mcq")}
             >
                MCQ Matrix
             </Button>
             <Button 
               variant={type === "short" ? "default" : "outline"}
               className={`flex-1 h-12 gap-3 text-[11px] font-semibold uppercase tracking-widest transition-all ${type === "short" ? "bg-primary shadow-md" : "border-border opacity-60 hover:opacity-100"}`}
               onClick={() => setType("short")}
             >
                Constructed Response
             </Button>
          </div>
        </div>

        {/* Question Text */}
        <div className="space-y-3">
          <Label htmlFor="question" className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60">Item Prompt / Stimulus</Label>
          <Input
            id="question"
            placeholder={type === "mcq" ? "e.g., Identify the correctly conjugated verb..." : "e.g., Explain the role of the past participle in this sentence..."}
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            className="h-11 rounded-md border-border focus-visible:ring-primary/10 text-[15px] font-medium leading-relaxed italic"
          />
        </div>

        {type === "mcq" ? (
          /* Options Matrix */
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <Label className="text-[12px] font-semibold uppercase tracking-[0.15em] text-foreground">Response Matrix</Label>
              <span className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-40">
                Identify Correct Asset
              </span>
            </div>
            
            <RadioGroup
              value={correctAnswer.toString()}
              onValueChange={(value) => setCorrectAnswer(parseInt(value))}
              className="space-y-4"
            >
              {options.map((option, index) => (
                <div key={index} className="flex items-center gap-4 group/opt">
                  <RadioGroupItem
                    value={index.toString()}
                    id={`option-${index}`}
                    className="border-border text-primary"
                  />
                  <div className="flex-1 relative">
                    <Input
                      placeholder={`Response Label ${String.fromCharCode(65 + index)}`}
                      value={option}
                      onChange={(e) => handleOptionChange(index, e.target.value)}
                      className={`h-11 rounded-md border-border focus-visible:ring-primary/10 text-[14px] font-medium pl-10 ${
                        correctAnswer === index ? "border-success/30 bg-success/5 text-success font-semibold" : "bg-white"
                      }`}
                    />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 micro-text font-semibold text-muted-foreground opacity-30 mt-0.5">
                      {String.fromCharCode(65 + index)}
                    </span>
                  </div>
                  {options.length > 2 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveOption(index)}
                      className="h-11 w-11 text-muted-foreground opacity-30 hover:opacity-100 hover:text-destructive hover:bg-destructive/5 transition-all"
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
                className="btn-secondary h-10 px-6 gap-3 text-[11px] font-semibold uppercase tracking-widest mt-2"
              >
                <Plus className="h-4 w-4 opacity-50" />
                Append Response Option
              </Button>
            )}
          </div>
        ) : (
          /* Short Answer Sample Area */
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <Label className="text-[12px] font-semibold uppercase tracking-[0.15em] text-foreground">Reference Architecture</Label>
              <span className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-40">
                Subjective Validation
              </span>
            </div>
            <div className="space-y-3">
               <Label htmlFor="sample" className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60 text-[10px]">Reference / Model Response</Label>
               <Input
                 id="sample"
                 placeholder="Enter the expected or model answer for teacher reference..."
                 value={sampleAnswer}
                 onChange={(e) => setSampleAnswer(e.target.value)}
                 className="h-24 rounded-md border-border focus-visible:ring-primary/10 text-[14px] font-medium"
               />
               <p className="text-[11px] italic text-muted-foreground opacity-70">
                 * This response will be used by evaluators during manual grading to assess student construct validity.
               </p>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-end gap-4 pt-8 border-t border-border">
          {editingQuestion && (
            <Button variant="ghost" onClick={handleCancel} className="text-[12px] font-semibold uppercase tracking-widest opacity-60 hover:bg-slate-50">
              Abort Modification
            </Button>
          )}
          <Button
            onClick={handleSubmit}
            disabled={!isValid}
            className={`btn-primary h-11 px-8 gap-3 text-[12px] font-semibold uppercase tracking-widest ${!isValid ? 'opacity-40 grayscale pointer-events-none' : ''}`}
          >
            {editingQuestion ? "Update Item Protocol" : "Commit Item to List"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
import { Badge } from "@/components/ui/badge"
