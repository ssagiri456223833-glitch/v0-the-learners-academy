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
    text: "What is the derivative of x² + 3x + 5?",
    subject: "mathematics",
    difficulty: "medium",
    options: ["2x + 3", "x² + 3", "2x + 5", "3x + 3"],
    correctAnswer: 0,
    usedIn: 3,
  },
  {
    id: "2",
    text: "Which law states that for every action, there is an equal and opposite reaction?",
    subject: "physics",
    difficulty: "easy",
    options: ["First Law", "Second Law", "Third Law", "Law of Gravitation"],
    correctAnswer: 2,
    usedIn: 5,
  },
  {
    id: "3",
    text: "What is the chemical formula for sulfuric acid?",
    subject: "chemistry",
    difficulty: "easy",
    options: ["HCl", "H2SO4", "HNO3", "H3PO4"],
    correctAnswer: 1,
    usedIn: 2,
  },
  {
    id: "4",
    text: "In the equation E = mc², what does 'c' represent?",
    subject: "physics",
    difficulty: "medium",
    options: ["Constant", "Charge", "Speed of light", "Capacitance"],
    correctAnswer: 2,
    usedIn: 4,
  },
  {
    id: "5",
    text: "What is the powerhouse of the cell?",
    subject: "biology",
    difficulty: "easy",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
    correctAnswer: 1,
    usedIn: 6,
  },
  {
    id: "6",
    text: "Solve: If 2x + 5 = 15, what is x?",
    subject: "mathematics",
    difficulty: "easy",
    options: ["3", "4", "5", "10"],
    correctAnswer: 2,
    usedIn: 8,
  },
  {
    id: "7",
    text: "What is the integral of cos(x)?",
    subject: "mathematics",
    difficulty: "hard",
    options: ["sin(x) + C", "-sin(x) + C", "cos(x) + C", "-cos(x) + C"],
    correctAnswer: 0,
    usedIn: 2,
  },
  {
    id: "8",
    text: "Which element has the atomic number 79?",
    subject: "chemistry",
    difficulty: "hard",
    options: ["Silver", "Gold", "Platinum", "Copper"],
    correctAnswer: 1,
    usedIn: 1,
  },
]

const difficultyStyles = {
  easy: "bg-[#10B981]/10 text-[#10B981]",
  medium: "bg-[#F59E0B]/10 text-[#F59E0B]",
  hard: "bg-destructive/10 text-destructive",
}

const subjectStyles = {
  mathematics: "bg-primary/10 text-primary",
  physics: "bg-accent/10 text-accent",
  chemistry: "bg-[#8B5CF6]/10 text-[#8B5CF6]",
  biology: "bg-[#10B981]/10 text-[#10B981]",
  english: "bg-[#F59E0B]/10 text-[#F59E0B]",
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
