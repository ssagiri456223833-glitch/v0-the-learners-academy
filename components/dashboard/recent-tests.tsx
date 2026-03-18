import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Eye, Edit, Copy } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const recentTests = [
  {
    id: 1,
    name: "Level One - Grammar Quiz 1",
    subject: "Level One",
    questions: 20,
    duration: "45 mins",
    status: "active",
    submissions: 124,
    created: "2 hours ago",
  },
  {
    id: 2,
    name: "IELTS Listening Practice - Set A",
    subject: "IELTS Course",
    questions: 15,
    duration: "30 mins",
    status: "draft",
    submissions: 0,
    created: "1 day ago",
  },
  {
    id: 3,
    name: "Foundation Three - Speaking Test",
    subject: "Foundation Three",
    questions: 10,
    duration: "15 mins",
    status: "completed",
    submissions: 52,
    created: "3 days ago",
  },
  {
    id: 4,
    name: "Pre-Foundation - Object Naming",
    subject: "Pre-Foundation",
    questions: 30,
    duration: "60 mins",
    status: "active",
    submissions: 89,
    created: "5 days ago",
  },
]

const statusStyles = {
  active: "bg-[#10B981]/10 text-[#10B981] hover:bg-[#10B981]/20",
  draft: "bg-[#F59E0B]/10 text-[#F59E0B] hover:bg-[#F59E0B]/20",
  completed: "bg-muted text-muted-foreground hover:bg-muted",
}

export function RecentTests() {
  return (
    <Card className="premium-card border-0 shadow-sm overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="font-heading text-lg font-semibold">
          Recent Tests
        </CardTitle>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
          View all
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {recentTests.map((test) => (
            <div
              key={test.id}
              className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-medium text-foreground truncate">
                    {test.name}
                  </h3>
                  <Badge 
                    variant="secondary" 
                    className={statusStyles[test.status as keyof typeof statusStyles]}
                  >
                    {test.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{test.subject}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:inline">{test.questions} questions</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:inline">{test.duration}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right hidden md:block">
                  <p className="text-sm font-medium text-foreground">
                    {test.submissions} submissions
                  </p>
                  <p className="text-xs text-muted-foreground">{test.created}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="cursor-pointer">
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Copy className="mr-2 h-4 w-4" />
                      Duplicate
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
