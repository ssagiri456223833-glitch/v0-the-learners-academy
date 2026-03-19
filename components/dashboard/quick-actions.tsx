import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FilePlus, Library, FileText, BarChart3, ArrowRight } from "lucide-react"

const actions = [
  {
    title: "Deploy New Protocol",
    description: "Initialize assessment configuration",
    icon: FilePlus,
    href: "/teacher/create-test",
    primary: true,
  },
  {
    title: "Question Bank Access",
    description: "Manage institutional asset library",
    icon: Library,
    href: "/teacher/question-bank",
    primary: false,
  },
  {
    title: "Simulate Environment",
    description: "Execute protocol as student",
    icon: FileText,
    href: "/test",
    primary: false,
  },
  {
    title: "Evaluation Metrics",
    description: "Aggregate performance analytics",
    icon: BarChart3,
    href: "/teacher/results",
    primary: false,
  },
]

export function QuickActions() {
  return (
    <div className="space-y-4">
      {actions.map((action) => (
        <Link key={action.href} href={action.href} className="block group">
          <Card className={`border border-border bg-white shadow-sm transition-all duration-200 overflow-hidden ${
            action.primary 
              ? "ring-1 ring-primary/20 border-primary/20 hover:shadow-primary/5" 
              : "hover:bg-slate-50 hover:shadow-md"
          }`}>
            <CardContent className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className={`p-3 rounded-md border ${
                  action.primary 
                    ? "bg-primary/5 border-primary/20 text-primary" 
                    : "bg-slate-50 border-border text-muted-foreground group-hover:text-primary group-hover:border-primary/20 group-hover:bg-primary/5 transition-all"
                }`}>
                  <action.icon className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-[14px] font-bold text-foreground leading-tight tracking-tight">
                    {action.title}
                  </p>
                  <p className="micro-text text-muted-foreground font-medium uppercase tracking-tighter opacity-50">
                    {action.description}
                  </p>
                </div>
              </div>
              <ArrowRight className={`h-4 w-4 transition-all opacity-20 group-hover:opacity-100 group-hover:translate-x-1 ${
                action.primary ? "text-primary" : "text-muted-foreground"
              }`} />
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
