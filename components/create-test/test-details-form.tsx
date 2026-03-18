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
import { ACADEMY_LEVELS, SKILLS, TEACHERS } from "@/lib/constants"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { ShieldCheck, UserCheck, MapPin } from "lucide-react"

interface SkillConfig {
  skillId: string
  marks: number
  questionCount: number
}

interface TestDetails {
  title: string
  subject: string
  teacher: string
  room: string
  duration: number
  description: string
  selectedSkills: SkillConfig[]
  shuffleQuestions: boolean
  shuffleOptions: boolean
  preventTabSwitch: boolean
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="teacher" className="flex items-center gap-2">
              <UserCheck className="h-4 w-4 text-primary" />
              Assigned Teacher
            </Label>
            <Select
              value={details.teacher}
              onValueChange={(value) => onChange({ ...details, teacher: value })}
            >
              <SelectTrigger className="focus:ring-primary">
                <SelectValue placeholder="Select a teacher" />
              </SelectTrigger>
              <SelectContent>
                {TEACHERS.map((teacher) => (
                  <SelectItem key={teacher} value={teacher}>
                    {teacher}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="room" className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Room Number
            </Label>
            <Select
              value={details.room}
              onValueChange={(value) => onChange({ ...details, room: value })}
            >
              <SelectTrigger className="focus:ring-primary">
                <SelectValue placeholder="Select a room" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((room) => (
                  <SelectItem key={room} value={room.toString()}>
                    Room {room}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <Label className="text-lg font-bold">Anti-Cheat Settings</Label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="shuffle-questions" className="font-medium cursor-pointer">Shuffle Questions</Label>
              <Switch 
                id="shuffle-questions"
                checked={details.shuffleQuestions}
                onCheckedChange={(checked) => onChange({ ...details, shuffleQuestions: checked })}
              />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="shuffle-options" className="font-medium cursor-pointer">Shuffle Options</Label>
              <Switch 
                id="shuffle-options"
                checked={details.shuffleOptions}
                onCheckedChange={(checked) => onChange({ ...details, shuffleOptions: checked })}
              />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <div className="space-y-0.5">
                <Label htmlFor="tab-switch" className="font-medium cursor-pointer">Tab-Switch Warning</Label>
                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tight">Prevents tab cheating</p>
              </div>
              <Switch 
                id="tab-switch"
                checked={details.preventTabSwitch}
                onCheckedChange={(checked) => onChange({ ...details, preventTabSwitch: checked })}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-4">
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
