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
import { ACADEMY_LEVELS, SKILLS } from "@/lib/constants"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

interface SkillConfig {
  skillId: string
  marks: number
  questionCount: number
}

interface TestDetails {
  title: string
  subject: string
  duration: number
  description: string
  selectedSkills: SkillConfig[]
}

interface TestDetailsFormProps {
  details: TestDetails
  onChange: (details: TestDetails) => void
}

export function TestDetailsForm({ details, onChange }: TestDetailsFormProps) {
  const toggleSkill = (skillId: string) => {
    const isSelected = details.selectedSkills.some(s => s.skillId === skillId)
    if (isSelected) {
      onChange({
        ...details,
        selectedSkills: details.selectedSkills.filter(s => s.skillId !== skillId)
      })
    } else {
      onChange({
        ...details,
        selectedSkills: [...details.selectedSkills, { skillId, marks: 0, questionCount: 0 }]
      })
    }
  }

  const updateSkill = (skillId: string, field: 'marks' | 'questionCount', value: number) => {
    onChange({
      ...details,
      selectedSkills: details.selectedSkills.map(s => 
        s.skillId === skillId ? { ...s, [field]: value } : s
      )
    })
  }

  const totalMarks = details.selectedSkills.reduce((sum, s) => sum + s.marks, 0)

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="font-heading text-lg font-semibold">
            Test Details
          </CardTitle>
          <Badge variant={totalMarks === 100 ? "default" : "outline"} className={totalMarks > 100 ? "border-destructive text-destructive" : ""}>
            Total Marks: {totalMarks}/100
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="title">Test Title</Label>
            <Input
              id="title"
              placeholder="e.g., Level One Trimester Assessment"
              value={details.title}
              onChange={(e) => onChange({ ...details, title: e.target.value })}
              className="focus-visible:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Academy Level</Label>
            <Select
              value={details.subject}
              onValueChange={(value) => onChange({ ...details, subject: value })}
            >
              <SelectTrigger className="focus:ring-primary">
                <SelectValue placeholder="Select a level" />
              </SelectTrigger>
              <SelectContent>
                {ACADEMY_LEVELS.map((level) => (
                  <SelectItem key={level.value} value={level.value}>
                    {level.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <Label>Select Skills to Include</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SKILLS.map((skill) => (
              <div key={skill.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={skill.id} 
                  checked={details.selectedSkills.some(s => s.skillId === skill.id)}
                  onCheckedChange={() => toggleSkill(skill.id)}
                />
                <Label htmlFor={skill.id} className="cursor-pointer font-normal">
                  {skill.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {details.selectedSkills.length > 0 && (
          <div className="space-y-4 pt-4 border-t">
            <Label>Configure Marks & Questions</Label>
            <div className="space-y-3">
              {details.selectedSkills.map((config) => {
                const skillLabel = SKILLS.find(s => s.id === config.skillId)?.label
                return (
                  <div key={config.skillId} className="grid grid-cols-4 items-center gap-4 p-3 rounded-lg bg-secondary/20">
                    <span className="font-medium text-sm">{skillLabel}</span>
                    <div className="col-span-1 space-y-1">
                      <Label className="text-[10px] uppercase text-muted-foreground">Marks</Label>
                      <Input
                        type="number"
                        placeholder="Marks"
                        value={config.marks || ''}
                        onChange={(e) => updateSkill(config.skillId, 'marks', parseInt(e.target.value) || 0)}
                        className="h-8"
                      />
                    </div>
                    <div className="col-span-1 space-y-1">
                      <Label className="text-[10px] uppercase text-muted-foreground">Questions</Label>
                      <Input
                        type="number"
                        placeholder="Q's"
                        value={config.questionCount || ''}
                        onChange={(e) => updateSkill(config.skillId, 'questionCount', parseInt(e.target.value) || 0)}
                        className="h-8"
                      />
                    </div>
                    <div className="flex justify-end">
                      <Badge variant="secondary">{config.marks} pts</Badge>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

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
