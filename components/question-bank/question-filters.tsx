"use client"

import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ACADEMY_LEVELS } from "@/lib/constants"
import { Search } from "lucide-react"

interface Filters {
  subject: string
  difficulty: string
  search: string
}

interface QuestionFiltersProps {
  filters: Filters
  onChange: (filters: Filters) => void
}

const subjects = [
  { value: "all", label: "All Levels" },
  ...ACADEMY_LEVELS.map(level => ({ value: level.value, label: level.label }))
]

const difficulties = [
  { value: "all", label: "All Levels" },
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
]

export function QuestionFilters({ filters, onChange }: QuestionFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search questions..."
          value={filters.search}
          onChange={(e) => onChange({ ...filters, search: e.target.value })}
          className="w-64 pl-10 focus-visible:ring-primary"
        />
      </div>

      {/* Subject Filter */}
      <Select
        value={filters.subject}
        onValueChange={(value) => onChange({ ...filters, subject: value })}
      >
        <SelectTrigger className="w-40 focus:ring-primary">
          <SelectValue placeholder="Subject" />
        </SelectTrigger>
        <SelectContent>
          {subjects.map((subject) => (
            <SelectItem key={subject.value} value={subject.value}>
              {subject.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Difficulty Filter */}
      <Select
        value={filters.difficulty}
        onValueChange={(value) => onChange({ ...filters, difficulty: value })}
      >
        <SelectTrigger className="w-36 focus:ring-primary">
          <SelectValue placeholder="Difficulty" />
        </SelectTrigger>
        <SelectContent>
          {difficulties.map((difficulty) => (
            <SelectItem key={difficulty.value} value={difficulty.value}>
              {difficulty.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
