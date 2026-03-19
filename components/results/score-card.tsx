import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Target, CheckCircle, BookOpen, PenTool, Type, HelpCircle, Lightbulb, AlertTriangle, Flame } from "lucide-react"
import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"

interface SkillScore {
  name: string
  score: number
  total: number
  icon: any
  description: string
}

interface ScoreCardProps {
  score: number
  total: number
  percentage: number
}

const mockSkills: SkillScore[] = [
  { name: "Grammar", score: 18, total: 20, icon: Type, description: "Sentence structure & tenses" },
  { name: "Vocabulary", score: 15, total: 20, icon: HelpCircle, description: "Word choice & usage" },
  { name: "Syntax", score: 10, total: 20, icon: BookOpen, description: "Structure & context" },
  { name: "Usage", score: 8, total: 20, icon: PenTool, description: "Expression & grammar" },
]

export function ScoreCard({ score, total, percentage }: ScoreCardProps) {
  const getStatusColor = () => {
    if (percentage >= 80) return "text-success"
    if (percentage >= 60) return "text-warning"
    return "text-destructive"
  }

  const getStatusLabel = () => {
    if (percentage >= 90) return "Mastery Level"
    if (percentage >= 80) return "Advanced Professional"
    if (percentage >= 70) return "Intermediate Plus"
    if (percentage >= 60) return "Foundation Level"
    return "Development Required"
  }

  return (
    <div className="space-y-8 institutional-container">
      {/* Primary Score Summary */}
      <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden">
        <CardContent className="p-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative flex-shrink-0">
              <div className="w-48 h-48 rounded-full border-[6px] border-slate-50 flex items-center justify-center bg-white shadow-inner">
                <div className="text-center">
                  <div className={cn("text-[56px] font-semibold leading-none", getStatusColor())}>
                    {percentage}%
                  </div>
                  <div className="micro-text text-muted-foreground mt-2 font-bold tracking-widest text-[11px]">
                    Aggregate Score
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left space-y-6">
              <div className="space-y-2">
                 <h2 className="page-title text-[38px] text-foreground leading-tight">
                  Assessment Protocol <span className="text-primary italic">Complete</span>
                </h2>
                <div className="classification-label text-[22px] text-primary italic">
                  {getStatusLabel()}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2 group transition-all duration-300">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-[14px] font-medium text-foreground">{score} Correct Answers</span>
                </div>
                <div className="flex items-center gap-2 group transition-all duration-300">
                  <Target className="h-4 w-4 text-primary" />
                  <span className="text-[14px] font-medium text-foreground">{total} Evaluation Points</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Core Competencies */}
        <Card className="border border-border bg-white shadow-sm rounded-lg lg:col-span-2">
          <CardContent className="p-8 space-y-8">
            <div className="flex items-center justify-between border-b border-border pb-4">
               <h3 className="text-[20px] font-semibold text-foreground">Competency Breakdown</h3>
               <span className="micro-text text-muted-foreground opacity-60">Objective Analysis</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {mockSkills.map((skill) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <skill.icon className="h-4 w-4 text-primary opacity-70" />
                      <span className="text-[15px] font-medium text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-[14px] font-bold text-foreground opacity-80">{skill.score}/{skill.total}</span>
                  </div>
                  <Progress value={(skill.score / skill.total) * 100} className="h-1.5 rounded-full bg-slate-100" />
                  <p className="label-text text-[12px] italic">{skill.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pedagogical Advice */}
        <Card className="border border-border bg-white shadow-sm rounded-lg border-t-2 border-primary">
          <CardContent className="p-8 space-y-8">
            <div className="flex items-center gap-3">
              <Lightbulb className="h-5 w-5 text-primary" />
              <h3 className="text-[20px] font-semibold text-foreground">Next Steps</h3>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-slate-50 border border-border rounded-md space-y-4">
                <div className="flex items-center gap-2">
                  <Flame className="h-4 w-4 text-primary" />
                  <span className="text-[13px] font-bold uppercase tracking-wider text-primary">Strategic Advice</span>
                </div>
                <p className="text-[14px] leading-[1.6] text-foreground opacity-80">
                  Based on your performance in **Syntax** and **Usage**, we recommend a focus on advanced sentence construction and colloquial linguistic nuances.
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-[12px] font-bold uppercase tracking-widest text-muted-foreground opacity-60">Target Areas</div>
                {mockSkills.slice(2).map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 p-3 border border-border rounded-md hover:bg-slate-50 transition-colors">
                    <AlertTriangle className="h-3 w-3 text-warning" />
                    <span className="text-[13px] font-medium text-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
