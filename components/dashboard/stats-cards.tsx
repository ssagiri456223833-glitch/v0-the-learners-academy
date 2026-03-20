import { Card, CardContent } from "@/components/ui/card"
import { Users, FileText, CheckCircle2, Clock, Activity, FileStack } from "lucide-react"

const stats = [
  {
    title: "Active Students",
    value: "1,284",
    change: "+12.5%",
    icon: Users,
    color: "text-primary",
    bg: "bg-primary/5",
    border: "border-primary/20"
  },
  {
    title: "Tests Conducted",
    value: "42",
    change: "+3.2%",
    icon: FileText,
    color: "text-primary",
    bg: "bg-primary/5",
    border: "border-primary/20"
  },
  {
    title: "Tests Completed",
    value: "892",
    change: "+18.4%",
    icon: CheckCircle2,
    color: "text-success",
    bg: "bg-success/5",
    border: "border-success/20"
  },
  {
    title: "Avg. Duration",
    value: "42m",
    change: "-2.1%",
    icon: Clock,
    color: "text-warning",
    bg: "bg-warning/5",
    border: "border-warning/20"
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <Card key={i} className="border border-border bg-white shadow-sm rounded-lg overflow-hidden group hover:shadow-md transition-all duration-300">
          <CardContent className="p-8 space-y-8">
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-md border ${stat.bg} ${stat.color} ${stat.border} group-hover:scale-110 transition-transform duration-500`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="flex flex-col items-end">
                 <span className={`text-[11px] font-semibold flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-slate-50 ${
                   stat.change.startsWith('+') ? 'text-success' : 'text-destructive'
                 }`}>
                   <Activity className="h-3.5 w-3.5" />
                   {stat.change}
                 </span>
                 <span className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-30 mt-2">Comparison</span>
              </div>
            </div>
            <div>
              <p className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-60 mb-2 truncate">{stat.title}</p>
              <h3 className="text-[32px] font-semibold text-foreground tracking-tight tabular-nums italic decoration-primary/10 underline underline-offset-8 decoration-2">{stat.value}</h3>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
