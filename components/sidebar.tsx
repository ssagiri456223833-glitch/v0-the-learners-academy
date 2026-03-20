"use client"

import { cn } from "@/lib/utils"
import { 
  BarChart3, 
  BookOpen, 
  Calendar, 
  CheckCircle2, 
  ClipboardList, 
  GraduationCap, 
  LayoutDashboard, 
  LogOut, 
  Settings, 
  ShieldCheck, 
  Users,
  ChevronRight,
  Database
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Global Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Teacher Registry", href: "/admin/teachers", icon: Users },
  { name: "Class Management", href: "/admin/classes", icon: ShieldCheck },
  { name: "Student Records", href: "/admin/students", icon: GraduationCap },
  { name: "Assessment Center", href: "/teacher", icon: ClipboardList },
  { name: "Student Portal", href: "/student", icon: BookOpen },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-80 border-r border-border bg-white flex flex-col sticky top-0 h-screen z-50">
      {/* Academy Brand Identity */}
      <div className="p-10 border-b border-border flex items-center gap-5 group transition-all">
        <div className="p-2.5 rounded-md bg-primary text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
           <ShieldCheck className="h-6 w-6" />
        </div>
        <div>
           <h1 className="text-[20px] font-semibold text-foreground tracking-tighter leading-none italic">Learners Academy</h1>
           <p className="micro-text text-muted-foreground font-semibold uppercase tracking-[0.25em] opacity-40 mt-2">English Excellence</p>
        </div>
      </div>

      <nav className="flex-1 p-8 space-y-10">
        <div className="space-y-3">
          <p className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-30 px-4">Management</p>
          <div className="space-y-1.5">
            {navigation.slice(0, 4).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-4 px-5 h-12 rounded-md text-[14px] font-semibold transition-all group",
                  pathname === item.href
                    ? "bg-primary/5 text-primary border border-primary/10 shadow-sm shadow-primary/5"
                    : "text-muted-foreground hover:bg-slate-50 hover:text-foreground"
                )}
              >
                <item.icon className={cn(
                  "h-4 w-4 transition-colors",
                  pathname === item.href ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                )} />
                <span className="tracking-tight">{item.name}</span>
                {pathname === item.href && (
                   <ChevronRight className="ml-auto h-3.5 w-3.5 text-primary/40 animate-in slide-in-from-left-2" />
                )}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-30 px-4">Evaluation</p>
          <div className="space-y-1.5">
            {navigation.slice(4).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-4 px-5 h-12 rounded-md text-[14px] font-semibold transition-all group",
                  pathname === item.href
                    ? "bg-primary/5 text-primary border border-primary/10 shadow-sm shadow-primary/5"
                    : "text-muted-foreground hover:bg-slate-50 hover:text-foreground"
                )}
              >
                <item.icon className={cn(
                  "h-4 w-4 transition-colors",
                  pathname === item.href ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                )} />
                <span className="tracking-tight">{item.name}</span>
                {pathname === item.href && (
                   <ChevronRight className="ml-auto h-3.5 w-3.5 text-primary/40 animate-in slide-in-from-left-2" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Persistence Interface */}
      <div className="p-8 mt-auto border-t border-border bg-slate-50/50">
        <div className="space-y-2">
           <p className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-30 px-2 mb-3">System</p>
           <button className="flex items-center gap-4 px-5 h-12 w-full text-muted-foreground hover:bg-white hover:text-foreground transition-all rounded-md group">
              <LogOut className="h-4 w-4 opacity-40 group-hover:text-destructive group-hover:opacity-100 transition-colors" />
              <span className="text-[14px] font-semibold tracking-tight group-hover:text-destructive transition-colors">Terminate Session</span>
           </button>
        </div>
        
        <div className="mt-8 flex items-center gap-4 p-5 rounded-md bg-white border border-border shadow-sm">
           <div className="relative">
              <div className="h-2 w-2 rounded-full bg-success absolute -top-1 -right-1 border border-white" />
              <div className="p-2 rounded-md bg-primary/5 text-primary">
                 <Database className="h-4 w-4" />
              </div>
           </div>
           <div className="flex flex-col min-w-0">
              <span className="text-[11px] font-semibold text-foreground uppercase tracking-widest truncate">Academy Mainframe</span>
              <span className="text-[9px] font-semibold text-success uppercase tracking-widest mt-0.5">Live Connection</span>
           </div>
        </div>
      </div>
    </div>
  )
}
