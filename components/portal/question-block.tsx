"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ChevronDown, 
  ChevronUp, 
  Trash2, 
  GripVertical, 
} from "lucide-react"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { QUESTION_TYPES, DIFFICULTY_LEVELS, CATEGORIES } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

export function QuestionBlock({ 
  question, 
  index, 
  onUpdate, 
  onDelete 
}: { 
  question: any
  index: number
  onUpdate: (q: any) => void
  onDelete: () => void
}) {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <Card variant="content" className={cn(
      "relative transition-all duration-300",
      !isExpanded && "hover:border-primary/50 cursor-pointer"
    )} onClick={() => !isExpanded && setIsExpanded(true)}>
      {/* Header / Summary */}
      <div className={cn(
        "p-4 flex items-center gap-4 transition-colors",
        isExpanded ? "bg-slate-50/80 border-b border-slate-100" : "bg-white"
      )}>
        <GripVertical className="h-4 w-4 text-slate-300 cursor-grab" />
        <span className="text-sm font-bold text-slate-400 w-6">#{index + 1}</span>
        
        <div className="flex-1 flex items-center gap-3 overflow-hidden">
          {!isExpanded ? (
            <>
              <span className="text-sm font-bold text-slate-900 truncate">{question.text || "Untitled Question"}</span>
              <Badge variant="outline" className="text-[9px] font-bold uppercase tracking-widest h-5 border-slate-200 text-slate-500">
                {question.type}
              </Badge>
              {question.difficulty && (
                <Badge variant="outline" className={cn("text-[9px] font-bold uppercase tracking-widest h-5", 
                  question.difficulty === 'easy' ? 'text-emerald-600 border-emerald-100 bg-emerald-50' :
                  question.difficulty === 'medium' ? 'text-amber-600 border-amber-100 bg-amber-50' :
                  'text-red-600 border-red-100 bg-red-50'
                )}>
                  {question.difficulty}
                </Badge>
              )}
            </>
          ) : (
             <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Editing Mode</span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {isExpanded && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-slate-400 hover:text-red-500 hover:bg-red-50" 
              onClick={(e) => { e.stopPropagation(); onDelete(); }}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-slate-400" 
            onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
          >
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {isExpanded && (
        <CardContent className="p-8 space-y-8 animate-in slide-in-from-top-2 duration-300">
          {/* Top Config Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Question Type</label>
              <Select value={question.type} onValueChange={(v) => onUpdate({ ...question, type: v })}>
                <SelectTrigger className="h-11 text-xs font-bold border-slate-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="p-2">
                  {QUESTION_TYPES.map(t => <SelectItem key={t.id} value={t.id} className="text-xs font-bold p-3 rounded-lg">{t.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Difficulty</label>
              <Select value={question.difficulty} onValueChange={(v) => onUpdate({ ...question, difficulty: v })}>
                <SelectTrigger className="h-11 text-xs font-bold border-slate-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="p-2">
                   {DIFFICULTY_LEVELS.map(d => <SelectItem key={d.id} value={d.id} className="text-xs font-bold p-3 rounded-lg">{d.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Category</label>
              <Select value={question.category} onValueChange={(v) => onUpdate({ ...question, category: v })}>
                <SelectTrigger className="h-11 text-xs font-bold border-slate-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="p-2">
                   {CATEGORIES.map(c => <SelectItem key={c} value={c} className="text-xs font-bold p-3 rounded-lg">{c}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-2">
             <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Question Title / Prompt</label>
             <Input 
                value={question.text} 
                onChange={(e) => onUpdate({ ...question, text: e.target.value })}
                placeholder="Enter your question here..."
                className="h-12 text-[15px] font-medium border-slate-200 focus:border-primary shadow-sm"
             />
          </div>

          {/* Type Specific Fields */}
          {question.type === 'mcq' && (
            <div className="space-y-4 pt-4 border-t border-slate-50">
               <div className="flex items-center justify-between">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Options & Correct Answer</label>
                  <span className="text-[10px] font-bold text-primary uppercase opacity-60">Click letter to set correct</span>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(question.options || ['', '', '', '']).map((opt: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 group/opt">
                       <button 
                        className={cn(
                          "h-10 w-10 shrink-0 rounded-xl border-2 flex items-center justify-center text-xs font-bold transition-all",
                          question.correctAnswer === i 
                            ? "bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105" 
                            : "border-slate-100 text-slate-400 hover:border-primary/20"
                        )}
                        onClick={() => onUpdate({ ...question, correctAnswer: i })}
                       >
                          {String.fromCharCode(65 + i)}
                       </button>
                       <Input 
                          value={opt} 
                          onChange={(e) => {
                            const newOpts = [...(question.options || ['', '', '', ''])]
                            newOpts[i] = e.target.value
                            onUpdate({ ...question, options: newOpts })
                          }}
                          placeholder={`Option ${String.fromCharCode(65 + i)}`}
                          className={cn(
                            "h-10 text-sm font-medium border-slate-100",
                            question.correctAnswer === i && "border-primary/30 bg-primary/5"
                          )}
                       />
                    </div>
                  ))}
               </div>
            </div>
          )}

          {(question.type === 'short' || question.type === 'paragraph') && (
             <div className="space-y-2 pt-4 border-t border-slate-50">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Model Answer (For Grading Reference)</label>
                <textarea 
                  value={question.sampleAnswer}
                  onChange={(e) => onUpdate({ ...question, sampleAnswer: e.target.value })}
                  placeholder="Enter a reference answer for automated or manual grading..."
                  className="w-full min-h-[120px] p-4 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all shadow-sm"
                />
             </div>
          )}
        </CardContent>
      )}
    </Card>
  )
}
