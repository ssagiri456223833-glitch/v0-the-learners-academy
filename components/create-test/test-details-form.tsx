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
import { ShieldCheck, UserCheck, MapPin, Clock, Layout } from "lucide-react"

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
    <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden">
      <CardHeader className="bg-slate-50 border-b border-border py-6 px-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-[18px] font-semibold italic flex items-center gap-3 tracking-tight">
            <Layout className="h-4 w-4 text-primary opacity-60" />
            Core Protocol Configuration
          </CardTitle>
          <Badge 
            variant="outline" 
            className={`text-[10px] font-black uppercase tracking-widest px-4 h-6 ${totalMarks === 100 ? "border-success text-success bg-success/5" : totalMarks > 100 ? "border-destructive text-destructive bg-destructive/5" : "border-border text-muted-foreground opacity-50"}`}
          >
            Aggregate Weight: {totalMarks} / 100
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <Label htmlFor="title" className="micro-text font-black uppercase tracking-widest text-muted-foreground opacity-60">Protocol Title</Label>
            <Input
              id="title"
              placeholder="e.g., Level One Trimester Evaluation"
              value={details.title}
              onChange={(e) => onChange({ ...details, title: e.target.value })}
              className="h-11 rounded-md border-border focus-visible:ring-primary/10 text-[14px] font-medium italic"
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="subject" className="micro-text font-black uppercase tracking-widest text-muted-foreground opacity-60">Institutional Level</Label>
            <Select
              value={details.subject}
              onValueChange={(value) => onChange({ ...details, subject: value })}
            >
              <SelectTrigger className="h-11 rounded-md border-border focus:ring-primary/10 text-[14px] font-medium">
                <SelectValue placeholder="Select Institutional Tier" />
              </SelectTrigger>
              <SelectContent className="rounded-md border-border">
                {ACADEMY_LEVELS.map((level) => (
                  <SelectItem key={level.value} value={level.value} className="text-[14px]">
                    {level.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <Label htmlFor="teacher" className="micro-text font-black uppercase tracking-widest text-muted-foreground opacity-60 flex items-center gap-2">
              <UserCheck className="h-3.5 w-3.5 opacity-40 text-primary" />
              Authenticated Assessor
            </Label>
            <Select
              value={details.teacher}
              onValueChange={(value) => onChange({ ...details, teacher: value })}
            >
              <SelectTrigger className="h-11 rounded-md border-border focus:ring-primary/10 text-[14px] font-medium">
                <SelectValue placeholder="Identify Assessor" />
              </SelectTrigger>
              <SelectContent className="rounded-md border-border">
                {TEACHERS.map((teacher) => (
                  <SelectItem key={teacher} value={teacher} className="text-[14px]">
                    {teacher}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-3">
            <Label htmlFor="room" className="micro-text font-black uppercase tracking-widest text-muted-foreground opacity-60 flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 opacity-40 text-primary" />
              Environment (Room)
            </Label>
            <Select
              value={details.room}
              onValueChange={(value) => onChange({ ...details, room: value })}
            >
              <SelectTrigger className="h-11 rounded-md border-border focus:ring-primary/10 text-[14px] font-medium">
                <SelectValue placeholder="Allocate Space" />
              </SelectTrigger>
              <SelectContent className="rounded-md border-border">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((room) => (
                  <SelectItem key={room} value={room.toString()} className="text-[14px]">
                    Room {room}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Anti-Cheat Deployment */}
        <div className="space-y-6 pt-10 border-t border-border">
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="h-4 w-4 text-primary opacity-60" />
            <h4 className="text-[14px] font-black uppercase tracking-[0.15em] text-foreground">Integrity Protections</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 rounded-md bg-slate-50 border border-border">
            <div className="flex items-center justify-between gap-4">
              <Label htmlFor="shuffle-questions" className="text-[12px] font-bold uppercase tracking-tight text-muted-foreground opacity-80 cursor-pointer">Randomize Items</Label>
              <Switch 
                id="shuffle-questions"
                checked={details.shuffleQuestions}
                onCheckedChange={(checked) => onChange({ ...details, shuffleQuestions: checked })}
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <Label htmlFor="shuffle-options" className="text-[12px] font-bold uppercase tracking-tight text-muted-foreground opacity-80 cursor-pointer">Randomize Options</Label>
              <Switch 
                id="shuffle-options"
                checked={details.shuffleOptions}
                onCheckedChange={(checked) => onChange({ ...details, shuffleOptions: checked })}
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <Label htmlFor="tab-switch" className="text-[12px] font-bold uppercase tracking-tight text-muted-foreground opacity-80 cursor-pointer">Window Guard</Label>
                <p className="micro-text text-muted-foreground font-medium italic opacity-40">Tab-switch detection</p>
              </div>
              <Switch 
                id="tab-switch"
                checked={details.preventTabSwitch}
                onCheckedChange={(checked) => onChange({ ...details, preventTabSwitch: checked })}
              />
            </div>
          </div>
        </div>

        {/* Skill Array Selection */}
        <div className="space-y-6 pt-10 border-t border-border">
          <Label className="text-[14px] font-black uppercase tracking-[0.15em] text-foreground">Skill Domain Selection</Label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SKILLS.map((skill) => (
              <div key={skill.id} className="flex items-center space-x-3 p-3 rounded-md border border-transparent hover:border-border hover:bg-slate-50 transition-all cursor-pointer" onClick={() => toggleSkill(skill.id)}>
                <Checkbox 
                  id={skill.id} 
                  checked={details.selectedSkills.some(s => s.skillId === skill.id)}
                  onCheckedChange={() => toggleSkill(skill.id)}
                  className="rounded-sm border-border"
                />
                <Label htmlFor={skill.id} className="text-[13px] font-bold text-foreground cursor-pointer opacity-80">
                  {skill.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Marks Matrix */}
        {details.selectedSkills.length > 0 && (
          <div className="space-y-6 pt-10 border-t border-border">
            <Label className="text-[14px] font-black uppercase tracking-[0.15em] text-foreground">Weighting Matrix</Label>
            <div className="space-y-4">
              {details.selectedSkills.map((config) => {
                const skillLabel = SKILLS.find(s => s.id === config.skillId)?.label
                return (
                  <div key={config.skillId} className="grid grid-cols-1 md:grid-cols-4 items-center gap-6 p-6 rounded-md bg-slate-50 border border-border">
                    <span className="text-[14px] font-black uppercase tracking-tight text-foreground">{skillLabel}</span>
                    <div className="flex flex-col gap-2">
                      <Label className="micro-text font-black uppercase tracking-widest text-muted-foreground opacity-40">Weight (MRK)</Label>
                      <Input
                        type="number"
                        placeholder="Marks"
                        value={config.marks || ''}
                        onChange={(e) => updateSkill(config.skillId, 'marks', parseInt(e.target.value) || 0)}
                        className="h-9 rounded-md border-border bg-white text-[14px] font-bold"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className="micro-text font-black uppercase tracking-widest text-muted-foreground opacity-40">Item Count (Q)</Label>
                      <Input
                        type="number"
                        placeholder="Q's"
                        value={config.questionCount || ''}
                        onChange={(e) => updateSkill(config.skillId, 'questionCount', parseInt(e.target.value) || 0)}
                        className="h-9 rounded-md border-border bg-white text-[14px] font-bold"
                      />
                    </div>
                    <div className="flex justify-end">
                      <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5 font-black text-[10px] tracking-widest px-4 h-7 uppercase">{config.marks} Units</Badge>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Scheduling Cycle */}
        <div className="space-y-6 pt-10 border-t border-border">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="h-4 w-4 text-primary opacity-60" />
            <h4 className="text-[14px] font-black uppercase tracking-[0.15em] text-foreground">Temporal Parameters</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-md bg-slate-50 border border-border">
            <div className="space-y-4">
              <Label htmlFor="duration" className="text-[12px] font-bold uppercase tracking-tight text-muted-foreground opacity-80">Cycle Duration (Minutes)</Label>
              <Input
                id="duration"
                type="number"
                min={5}
                max={180}
                value={details.duration}
                onChange={(e) => onChange({ ...details, duration: parseInt(e.target.value) || 30 })}
                className="h-11 rounded-md border-border bg-white text-[16px] font-black tabular-nums italic"
              />
              <p className="micro-text text-muted-foreground font-medium italic opacity-40 italic">Standardized environment duration for all candidates.</p>
            </div>
            
            <div className="space-y-4">
              <Label className="text-[12px] font-bold uppercase tracking-tight text-muted-foreground opacity-80">Access Window</Label>
              <div className="flex items-center gap-4">
                <Input type="date" className="h-11 rounded-md border-border bg-white text-[12px] font-bold uppercase tabular-nums" />
                <span className="micro-text font-black opacity-20">TO</span>
                <Input type="date" className="h-11 rounded-md border-border bg-white text-[12px] font-bold uppercase tabular-nums" />
              </div>
              <p className="micro-text text-muted-foreground font-medium italic opacity-40 italic">Authorized login window for evaluation.</p>
            </div>

            <div className="col-span-full pt-6 border-t border-border mt-2">
               <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-[13px] font-bold text-foreground">Individual Override Provision</Label>
                    <p className="micro-text text-muted-foreground font-medium italic opacity-40">Allow specific candidate time expansions (SEN Compliance)</p>
                  </div>
                  <Switch />
               </div>
            </div>
          </div>
        </div>

        <div className="space-y-3 pt-6">
          <Label htmlFor="description" className="micro-text font-black uppercase tracking-widest text-muted-foreground opacity-60">Internal Memo / Assessor Notes</Label>
          <Textarea
            id="description"
            placeholder="Document additional protocol instructions or institutional notes..."
            value={details.description}
            onChange={(e) => onChange({ ...details, description: e.target.value })}
            className="min-h-[100px] rounded-md border-border focus-visible:ring-primary/10 text-[14px] font-medium leading-relaxed italic"
          />
        </div>
      </CardContent>
    </Card>
  )
}
