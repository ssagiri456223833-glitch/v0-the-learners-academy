import { Card, CardContent } from "@/components/ui/card"
import { Plus, BookOpen, GraduationCap, FileText, ChevronRight, Activity } from "lucide-react"
import Link from "next/link"

const actions = [
  {
    title: "Create New Test",
    description: "Launch assessment setup",
    icon: Plus,
    href: "/teacher/create-test",
    color: "bg-primary text-white",
    hoverColor: "group-hover:bg-primary group-hover:text-white"
  },
  {
    title: "Question Bank",
    description: "Manage test questions",
    icon: BookOpen,
    href: "/teacher/question-bank",
    color: "bg-primary/5 text-primary",
    hoverColor: "group-hover:bg-primary group-hover:text-white"
  },
  {
    title: "Student Portal",
    description: "Entrance for students",
    icon: LayoutGrid, // I'll use LayoutGrid if available, but I'll stick to GraduationCap for now or similar
    href: "/student",
    color: "bg-primary/5 text-primary",
    hoverColor: "group-hover:bg-primary group-hover:text-white"
  },
]

import { LayoutGrid } from "lucide-react"

export function QuickActions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {actions.map((action, i) => (
        <Link key={i} href={action.href} className="group h-full">
          <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden group-hover:shadow-md transition-all h-full btn-interactive">
            <CardContent className="p-10 flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className={`p-4 rounded-md border border-transparent shadow-sm ${action.color} group-hover:scale-110 transition-transform duration-500`}>
                  <action.icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-[17px] font-semibold text-foreground tracking-tight underline-offset-4 decoration-primary/10 underline decoration-2">{action.title}</h4>
                  <p className="micro-text text-muted-foreground font-semibold uppercase tracking-widest opacity-40">{action.description}</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
