import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Target, Clock, CheckCircle, BookOpen, Mic2, Headphones, PenTool, Type, HelpCircle, Lightbulb, AlertTriangle, Flame } from "lucide-react"
import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

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
  { name: "Listening", score: 12, total: 20, icon: Headphones, description: "Audio comprehension" },
  { name: "Reading", score: 10, total: 20, icon: BookOpen, description: "Comprehension & context" },
  { name: "Writing", score: 8, total: 20, icon: PenTool, description: "Expression & grammar" },
]

export function ScoreCard({ score, total, percentage }: ScoreCardProps) {
  const getGradeColor = () => {
    if (percentage >= 80) return "text-[#10B981]"
    if (percentage >= 60) return "text-[#F59E0B]"
    return "text-destructive"
  }

  const getGradeBackground = () => {
    if (percentage >= 80) return "from-[#10B981]/20 to-[#10B981]/5"
    if (percentage >= 60) return "from-[#F59E0B]/20 to-[#F59E0B]/5"
    return "from-destructive/20 to-destructive/5"
  }

  const getGrade = () => {
    if (percentage >= 90) return "A+"
    if (percentage >= 80) return "A"
    if (percentage >= 70) return "B"
    if (percentage >= 60) return "C"
    if (percentage >= 50) return "D"
    return "F"
  }

  const getFeedback = (skill: string, score: number, total: number) => {
    const ratio = score / total
    if (ratio >= 0.85) return "Mastered! You're ready for more advanced material."
    if (ratio >= 0.70) return "Solid performance. Regular practice will lead to mastery."
    if (ratio >= 0.50) return "Needs practice. Focus on fundamentals of this topic."
    return "Weak Point: Immediate review recommended with your teacher."
  }

  return (
    <div className="space-y-6">
      <Card className={cn(
        "border-0 shadow-sm overflow-hidden bg-gradient-to-br",
        getGradeBackground()
      )}>
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-card shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className={cn("font-heading text-5xl font-bold", getGradeColor())}>
                    {percentage}%
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Total Score</div>
                </div>
              </div>
              <div className={cn(
                "absolute -top-2 -right-2 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg",
                percentage >= 80 ? "bg-[#10B981]" : percentage >= 60 ? "bg-[#F59E0B]" : "bg-destructive"
              )}>
                {getGrade()}
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Trophy className={cn("h-6 w-6", getGradeColor())} />
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Trimester Test Completed!
                </h2>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                {percentage >= 80 
                  ? "Excellent work! You've mastered this trimester's objectives." 
                  : "Identifying your weak points now will help you build a stronger foundation for the next trimester."}
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-card/80">
                  <CheckCircle className="h-5 w-5 text-[#10B981]" />
                  <div>
                    <p className="text-xs text-muted-foreground">Correct</p>
                    <p className="font-semibold text-foreground">{score}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-card/80">
                  <Target className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Total Marks</p>
                    <p className="font-semibold text-foreground">{total}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-card/80">
                  <BookOpen className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground">Level</p>
                    <p className="font-semibold text-foreground">Level One</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Skill Breakdown */}
        <Card className="border-0 shadow-sm lg:col-span-2">
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center justify-between">
               <h3 className="font-heading text-lg font-bold">Skill Breakdown</h3>
               <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-tighter">Granular Analysis</Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <skill.icon className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm font-semibold">{skill.score}/{skill.total}</span>
                  </div>
                  <Progress value={(skill.score / skill.total) * 100} className="h-2" />
                  <p className="text-[11px] text-muted-foreground italic">Focus: {skill.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Pedagogical Feedback */}
        <Card className="border-0 shadow-sm overflow-hidden border-t-4 border-primary">
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              <h3 className="font-heading text-lg font-bold">Mastery Advice</h3>
            </div>
            <div className="space-y-4">
              {mockSkills.map((skill) => {
                const ratio = skill.score / skill.total
                if (ratio >= 0.7) return null
                return (
                  <div key={skill.name} className="p-3 rounded-xl bg-destructive/5 border border-destructive/10 space-y-1">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-3 w-3 text-destructive" />
                      <span className="text-xs font-bold uppercase text-destructive tracking-tight">Weak Point: {skill.name}</span>
                    </div>
                    <p className="text-xs text-foreground font-medium">
                      {getFeedback(skill.name, skill.score, skill.total)}
                    </p>
                  </div>
                )
              })}
              
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 flex items-start gap-4">
                <Flame className="h-5 w-5 text-primary shrink-0 mt-1" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Consistency is the key to mastering English. Review your weak points and see your teacher for your next study plan.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
