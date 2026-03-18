import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FilePlus, Library, FileText, BarChart3, ArrowRight } from "lucide-react"

const actions = [
  {
    title: "Create New Test",
    description: "Build a new MCQ test from scratch",
    icon: FilePlus,
    href: "/create-test",
    variant: "default" as const,
  },
  {
    title: "Question Bank",
    description: "Browse and manage your questions",
    icon: Library,
    href: "/question-bank",
    variant: "outline" as const,
  },
  {
    title: "Take a Test",
    description: "Preview tests as a student",
    icon: FileText,
    href: "/test",
    variant: "outline" as const,
  },
  {
    title: "View Results",
    description: "Analyze test performance",
    icon: BarChart3,
    href: "/results",
    variant: "outline" as const,
  },
]

export function QuickActions() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="font-heading text-lg font-semibold">
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {actions.map((action) => (
          <Link key={action.href} href={action.href}>
            <Button
              variant={action.variant}
              className={`w-full justify-start h-auto p-4 group ${
                action.variant === "default" 
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                  : "hover:bg-secondary hover:border-primary/20"
              }`}
            >
              <div className={`p-2 rounded-lg mr-3 ${
                action.variant === "default" 
                  ? "bg-white/20" 
                  : "bg-primary/10"
              }`}>
                <action.icon className={`h-5 w-5 ${
                  action.variant === "default" 
                    ? "text-white" 
                    : "text-primary"
                }`} />
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium">{action.title}</p>
                <p className={`text-xs ${
                  action.variant === "default" 
                    ? "text-white/70" 
                    : "text-muted-foreground"
                }`}>
                  {action.description}
                </p>
              </div>
              <ArrowRight className={`h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ${
                action.variant === "default" 
                  ? "text-white" 
                  : "text-primary"
              }`} />
            </Button>
          </Link>
        ))}
      </CardContent>
    </Card>
  )
}
