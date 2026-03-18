import { Card, CardContent } from "@/components/ui/card"
import { FileText, Users, CheckCircle, Clock } from "lucide-react"

const stats = [
  {
    title: "Total Tests",
    value: "24",
    change: "+3 this week",
    icon: FileText,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Active Students",
    value: "156",
    change: "+12 this month",
    icon: Users,
    iconBg: "bg-[#10B981]/10",
    iconColor: "text-[#10B981]",
  },
  {
    title: "Tests Completed",
    value: "89",
    change: "85% completion rate",
    icon: CheckCircle,
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    title: "Trimester Progress",
    value: "Month 2",
    change: "Cycle: Mar - May",
    icon: Clock,
    iconBg: "bg-[#F59E0B]/10",
    iconColor: "text-[#F59E0B]",
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card 
          key={stat.title} 
          className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm"
        >
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <p className="font-heading text-3xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground">
                  {stat.change}
                </p>
              </div>
              <div className={`p-3 rounded-xl ${stat.iconBg}`}>
                <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
