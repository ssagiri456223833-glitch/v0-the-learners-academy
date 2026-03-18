"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Edit2, Trash2, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface Filters {
  subject: string
  difficulty: string
  search: string
}

interface QuestionGridProps {
  filters: Filters
}

const mockQuestions = [
  {
    id: "1",
    text: "Which of the following is the correct past tense of the verb 'run'?",
    subject: "level-one",
    difficulty: "easy",
    options: ["Runs", "Running", "Ran", "Runned"],
    correctAnswer: 2,
    usedIn: 12,
  },
  {
    id: "2",
    text: "Identify the object in the sentence: 'The teacher wrote on the whiteboard.'",
    subject: "pre-foundation",
    difficulty: "easy",
    options: ["Teacher", "Wrote", "Whiteboard", "On"],
    correctAnswer: 2,
    usedIn: 8,
  },
  {
    id: "3",
    text: "Choose the correct synonym for 'Rapid':",
    subject: "level-three",
    difficulty: "medium",
    options: ["Slow", "Fast", "Quiet", "Heavy"],
    correctAnswer: 1,
    usedIn: 15,
  },
  {
    id: "4",
    text: "Which of these is a compound sentence?",
    subject: "level-four",
    difficulty: "hard",
    options: ["I like coffee.", "I like coffee and she likes tea.", "The sun is hot.", "Running is fun."],
    correctAnswer: 1,
    usedIn: 6,
  },
  {
    id: "5",
    text: "Select the correct plural form of 'Child':",
    subject: "foundation-two",
    difficulty: "easy",
    options: ["Childs", "Childrens", "Children", "Childes"],
    correctAnswer: 2,
    usedIn: 9,
  },
  {
    id: "6",
    text: "Complete the sentence: 'He _______ to school every day.'",
    subject: "level-one",
    difficulty: "easy",
    options: ["Go", "Goes", "Going", "Gone"],
    correctAnswer: 1,
    usedIn: 22,
  },
  {
    id: "7",
    text: "In the IELTS test, what does the acronym mean?",
    subject: "ielts-prep",
    difficulty: "medium",
    options: ["International English Language Testing System", "Integrated English Language Test System", "International English Learning Train System", "none of these"],
    correctAnswer: 0,
    usedIn: 4,
  },
  {
    id: "8",
    text: "Identify the preposition: 'The book is under the table.'",
    subject: "foundation-one",
    difficulty: "easy",
    options: ["Book", "Under", "Table", "The"],
    correctAnswer: 1,
    usedIn: 11,
  },
]

const difficultyStyles = {
  easy: "bg-success/10 text-success",
  medium: "bg-warning/10 text-warning",
  hard: "bg-destructive/10 text-destructive",
}

const subjectStyles: Record<string, string> = {
  "level-one": "bg-primary/10 text-primary",
  "level-two": "bg-primary/10 text-primary",
  "level-three": "bg-primary/10 text-primary",
  "level-four": "bg-primary/10 text-primary",
  "pre-foundation": "bg-accent/10 text-accent",
  "foundation-one": "bg-accent/10 text-accent",
  "foundation-two": "bg-accent/10 text-accent",
  "ielts-prep": "bg-purple-500/10 text-purple-600",
  "grammar-speaking": "bg-orange-500/10 text-orange-600",
}

export function QuestionGrid({ filters }: QuestionGridProps) {
  const filteredQuestions = mockQuestions.filter((question) => {
    const matchesSubject = filters.subject === "all" || question.subject === filters.subject
    const matchesDifficulty = filters.difficulty === "all" || question.difficulty === filters.difficulty
    const matchesSearch = question.text.toLowerCase().includes(filters.search.toLowerCase())
    return matchesSubject && matchesDifficulty && matchesSearch
  })

  if (filteredQuestions.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
          <span className="text-3xl text-muted-foreground">?</span>
        </div>
        <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
          No questions found
        </h3>
        <p className="text-sm text-muted-foreground">
          Try adjusting your filters or search term.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {filteredQuestions.map((question) => (
        <Card
          key={question.id}
          className="group border-0 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <CardContent className="p-5">
            {/* Tags */}
            <div className="flex items-center gap-2 mb-3">
              <Badge
                variant="secondary"
                className={cn(
                  "capitalize text-xs",
                  subjectStyles[question.subject as keyof typeof subjectStyles]
                )}
              >
                {question.subject}
              </Badge>
              <Badge
                variant="secondary"
                className={cn(
                  "capitalize text-xs",
                  difficultyStyles[question.difficulty as keyof typeof difficultyStyles]
                )}
              >
                {question.difficulty}
              </Badge>
            </div>

            {/* Question Text */}
            <p className="text-sm font-medium text-foreground line-clamp-2 mb-4 min-h-[40px]">
              {question.text}
            </p>

            {/* Options Preview */}
            <div className="space-y-1.5 mb-4">
              {question.options.slice(0, 2).map((option, index) => (
                <div
                  key={index}
                  className={cn(
                    "text-xs px-2 py-1.5 rounded-md",
                    index === question.correctAnswer
                      ? "bg-[#10B981]/10 text-[#10B981]"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {String.fromCharCode(65 + index)}. {option}
                </div>
              ))}
              {question.options.length > 2 && (
                <p className="text-xs text-muted-foreground pl-2">
                  +{question.options.length - 2} more options
                </p>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-border">
              <span className="text-xs text-muted-foreground">
                Used in {question.usedIn} tests
              </span>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-muted-foreground hover:text-primary"
                >
                  <Eye className="h-3.5 w-3.5" />
                  <span className="sr-only">View</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-muted-foreground hover:text-primary"
                >
                  <Edit2 className="h-3.5 w-3.5" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-muted-foreground hover:text-primary"
                >
                  <Copy className="h-3.5 w-3.5" />
                  <span className="sr-only">Duplicate</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
