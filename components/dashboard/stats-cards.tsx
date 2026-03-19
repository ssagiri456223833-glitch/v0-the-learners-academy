import { Card, CardContent } from "@/components/ui/card"
import { FileText, Users, CheckCircle, Clock } from "lucide-react"

const stats = [
  {
    title: "Assessments Deployed",
    value: "24",
    change: "Term Cycle Week 8",
    icon: FileText,
  },
  {
    title: "Authenticated Students",
    value: "156",
    change: "92% Attendance Rate",
    icon: Users,
  },
  {
    title: "Protocols Completed",
    value: "89",
    change: "Verified & Evaluated",
    icon: CheckCircle,
  },
  {
    title: "Institutional Phase",
    value: "Month 2",
    change: "Audit: Mar - May",
    icon: Clock,
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card 
          key={stat.title} 
          className="border border-border bg-white shadow-sm rounded-lg overflow-hidden transition-all hover:bg-slate-50/50"
        >
          <CardContent className="p-8">
            <div className="flex items-start justify-between">
              <div className="space-y-4">
                <p className="micro-text text-muted-foreground font-bold uppercase tracking-widest opacity-60">
                  {stat.title}
                </p>
                <div className="space-y-1">
                  <p className="page-title text-[32px] font-semibold text-foreground italic decoration-primary/20 underline underline-offset-8 decoration-2">
                    {stat.value}
                  </p>
                  <p className="label-text text-[11px] font-medium text-muted-foreground pt-2">
                    {stat.change}
                  </p>
                </div>
              </div>
              <div className="p-3 rounded-md bg-slate-50 border border-border">
                <stat.icon className="h-4 w-4 text-primary opacity-60" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
