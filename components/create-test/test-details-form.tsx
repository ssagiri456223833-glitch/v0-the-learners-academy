"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface TestDetails {
  title: string
  subject: string
  duration: number
  description: string
}

interface TestDetailsFormProps {
  details: TestDetails
  onChange: (details: TestDetails) => void
}

const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "History",
  "Geography",
  "Computer Science",
]

export function TestDetailsForm({ details, onChange }: TestDetailsFormProps) {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="font-heading text-lg font-semibold">
          Test Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="title">Test Title</Label>
            <Input
              id="title"
              placeholder="e.g., Mathematics Chapter 5 Quiz"
              value={details.title}
              onChange={(e) => onChange({ ...details, title: e.target.value })}
              className="focus-visible:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Select
              value={details.subject}
              onValueChange={(value) => onChange({ ...details, subject: value })}
            >
              <SelectTrigger className="focus:ring-primary">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((subject) => (
                  <SelectItem key={subject} value={subject}>
                    {subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="duration">Duration (minutes)</Label>
            <Input
              id="duration"
              type="number"
              min={5}
              max={180}
              value={details.duration}
              onChange={(e) => onChange({ ...details, duration: parseInt(e.target.value) || 30 })}
              className="focus-visible:ring-primary"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description (optional)</Label>
          <Textarea
            id="description"
            placeholder="Add instructions or notes for students..."
            value={details.description}
            onChange={(e) => onChange({ ...details, description: e.target.value })}
            className="min-h-[80px] focus-visible:ring-primary"
          />
        </div>
      </CardContent>
    </Card>
  )
}
