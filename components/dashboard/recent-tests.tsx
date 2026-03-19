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
  active: "border-success/30 text-success bg-success/5",
  draft: "border-warning/30 text-warning bg-warning/5",
  completed: "border-slate-200 text-muted-foreground bg-slate-50",
}

export function RecentTests() {
  return (
    <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between py-6 px-8 border-b border-border bg-slate-50">
        <CardTitle className="page-title text-[20px] italic underline underline-offset-4 decoration-primary/10">
          Historical Protocol Feed
        </CardTitle>
        <Button variant="ghost" size="sm" className="btn-secondary h-8 px-4 text-[11px] font-bold uppercase tracking-widest opacity-60 hover:opacity-100">
          Audit All
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {recentTests.map((test) => (
            <div
              key={test.id}
              className="group flex items-center justify-between p-6 hover:bg-slate-50 transition-colors"
            >
              <div className="flex-1 min-w-0 space-y-2">
                <div className="flex items-center gap-4 mb-1">
                  <h3 className="text-[15px] font-bold text-foreground truncate tracking-tight">
                    {test.name}
                  </h3>
                  <Badge 
                    variant="outline" 
                    className={`text-[9px] font-black uppercase tracking-tighter px-2 h-5 ${statusStyles[test.status as keyof typeof statusStyles]}`}
                  >
                    {test.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-6 text-[12px] font-medium text-muted-foreground opacity-60">
                  <span className="flex items-center gap-1.5"><Badge variant="outline" className="h-4 p-0 px-1 border-border opacity-50">{test.subject}</Badge></span>
                  <span>{test.questions} Items</span>
                  <span>{test.duration} Duration</span>
                </div>
              </div>
              <div className="flex items-center gap-8 pl-8">
                <div className="text-right hidden md:block">
                  <p className="text-[13px] font-bold text-foreground leading-none mb-1">
                    {test.submissions} Submissions
                  </p>
                  <p className="micro-text text-muted-foreground font-medium uppercase tracking-tighter opacity-40">{test.created}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-9 w-9 border border-transparent hover:border-border hover:bg-white transition-all">
                      <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="rounded-md border-border shadow-md">
                    <DropdownMenuItem className="cursor-pointer text-[13px] font-medium py-2 px-4 focus:bg-primary/5 focus:text-primary">
                      <Eye className="mr-3 h-4 w-4 opacity-50" />
                      Audit Results
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer text-[13px] font-medium py-2 px-4 focus:bg-primary/5 focus:text-primary">
                      <Edit className="mr-3 h-4 w-4 opacity-50" />
                      Modify Protocol
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer text-[13px] font-medium py-2 px-4 focus:bg-primary/5 focus:text-primary">
                      <Copy className="mr-3 h-4 w-4 opacity-50" />
                      Duplicate Access
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
