"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, ClipboardCheck, Trophy, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const activeTests = [
  {
    id: "1",
    title: "Level One - Trimester Assessment 1",
    duration: 45,
    questions: 10,
    deadline: "Due today, 5:00 PM",
    type: "Assessments"
  },
  {
    id: "2",
    title: "Speaking Proficiency Quiz",
    duration: 15,
    questions: 5,
    deadline: "Available until Friday",
    type: "Practice"
  }
]

const recentResults = [
  {
    id: "r1",
    title: "Weekly Grammar Quiz #4",
    score: 9,
    total: 10,
    date: "2 days ago",
    status: "Excellent"
  },
  {
    id: "r2",
    title: "Vocabulary Checkpoint",
    score: 7,
    total: 10,
    date: "1 week ago",
    status: "Good"
  }
]

export default function StudentDashboard() {
  return (
    <DashboardLayout 
      title="My Learning Dashboard" 
      subtitle="Welcome back! Your tests and progress are listed below."
    >
      <div className="space-y-8 pb-10">
        {/* Welcome Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-sm bg-primary/5">
            <CardContent className="pt-6 flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <ClipboardCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase font-bold tracking-tighter">Tests Taken</p>
                <p className="text-3xl font-heading font-bold">12</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm bg-secondary/5">
            <CardContent className="pt-6 flex items-center gap-4">
              <div className="p-3 bg-secondary/10 rounded-xl text-secondary-foreground">
                <Trophy className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase font-bold tracking-tighter">Avg Score</p>
                <p className="text-3xl font-heading font-bold">88%</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm bg-accent/10">
            <CardContent className="pt-6 flex items-center gap-4">
              <div className="p-3 bg-accent/20 rounded-xl text-accent-foreground">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase font-bold tracking-tighter">Time Spent</p>
                <p className="text-3xl font-heading font-bold">4.2h</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Tests */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Play className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold font-heading uppercase tracking-tighter">Active Assessments</h2>
              </div>
              <Badge variant="outline" className="text-primary border-primary/20">
                {activeTests.length} Pending
              </Badge>
            </div>
            
            <div className="grid gap-4">
              {activeTests.map((test) => (
                <Card key={test.id} className="border-0 shadow-sm hover:shadow-md transition-all group overflow-hidden">
                  <div className="flex items-center p-6 gap-6">
                    <div className="hidden sm:flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform">
                      <Link href="/test">
                        <Play className="h-8 w-8 ml-1" />
                      </Link>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className="text-[10px] h-4 uppercase">{test.type}</Badge>
                        <span className="text-xs text-destructive font-semibold flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {test.deadline}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold font-heading truncate">{test.title}</h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {test.duration} mins</span>
                        <span className="flex items-center gap-1.5"><ClipboardCheck className="h-4 w-4" /> {test.questions} MCQs</span>
                      </div>
                    </div>
                    <Link href="/test">
                      <Button className="shrink-0 gap-2">
                        Enter
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Performance */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold font-heading uppercase tracking-tighter">Recent Scores</h2>
            </div>
            <div className="space-y-3">
              {recentResults.map((result) => (
                <Card key={result.id} className="border-0 shadow-sm bg-card/60">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-semibold truncate pr-2">{result.title}</h4>
                      <Badge variant={result.status === "Excellent" ? "default" : "secondary"} className="text-[10px] h-4">
                        {result.status}
                      </Badge>
                    </div>
                    <div className="flex items-end justify-between">
                      <div className="text-2xl font-heading font-bold">
                        {result.score}<span className="text-muted-foreground text-sm font-normal">/{result.total}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{result.date}</span>
                    </div>
                    <div className="mt-3 h-1.5 w-full bg-secondary/30 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full" 
                        style={{ width: `${(result.score / result.total) * 100}%` }}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button variant="ghost" className="w-full text-xs text-primary font-bold uppercase tracking-widest hover:bg-primary/5">
                View All Results
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
