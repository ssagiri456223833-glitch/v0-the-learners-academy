"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  ClipboardList, 
  BarChart3, 
  LogOut,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  Settings,
  PlusCircle,
  Shapes
} from "lucide-react"

const teacherNavigation = [
  { name: "My Assessments", href: "/teacher", icon: ClipboardList },
  { name: "Create New Test", href: "/teacher/create-test", icon: PlusCircle },
  { name: "Live Monitoring", href: "/teacher/monitoring", icon: BookOpen },
  { name: "Analytics", href: "/teacher/analytics", icon: BarChart3 },
]

export function TeacherSidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={cn(
      "bg-[#0F172A] flex flex-col h-screen h-[100dvh] transition-all duration-300 relative border-r border-slate-800 shadow-xl z-50",
      isCollapsed ? "w-20" : "w-72"
    )}>
      {/* Brand Identity */}
      <div className={cn(
        "p-8 border-b border-white/5 flex items-center gap-4 transition-all duration-300",
        isCollapsed ? "justify-center" : "justify-start"
      )}>
        <div className="p-1.5 rounded-lg bg-primary text-white shadow-md">
          <ClipboardList className="h-5 w-5" />
        </div>
        {!isCollapsed && (
          <div className="flex flex-col animate-in fade-in duration-300">
            <span className="text-[15px] font-bold text-white tracking-tighter italic">Learners Academy</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Teacher Portal</span>
          </div>
        )}
      </div>

      <nav className="flex-1 p-6 space-y-8 mt-4">
        <div className="space-y-1">
          {!isCollapsed && (
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 px-3 mb-6 animate-in fade-in transition-all">Evaluation</p>
          )}
          <div className="space-y-2">
            {teacherNavigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 h-12 rounded-xl text-sm font-semibold transition-all group",
                    isActive
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <item.icon className={cn(
                    "h-4 w-4 transition-colors",
                    isActive ? "text-white" : "text-slate-500 group-hover:text-white"
                  )} />
                  {!isCollapsed && (
                    <span className="flex-1 animate-in fade-in transition-all opacity-80 group-hover:opacity-100">{item.name}</span>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Collapse Toggle Button */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute bottom-24 -right-3.5 h-7 w-7 rounded-full bg-primary text-white border-2 border-[#0F172A] flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg hover:bg-blue-400"
      >
        {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </button>

      {/* Termination Interface */}
      <div className={cn(
        "p-6 mt-auto border-t border-white/5 bg-black/20 transition-all duration-300",
        isCollapsed ? "items-center" : ""
      )}>
        <button className={cn(
          "flex items-center gap-3 px-3 h-11 w-full text-slate-400 hover:bg-red-500 hover:text-white transition-all rounded-lg group",
          isCollapsed ? "justify-center" : ""
        )}>
          <LogOut className="h-4 w-4 opacity-70 group-hover:opacity-100" />
          {!isCollapsed && <span className="text-sm font-semibold">Terminate Session</span>}
        </button>
      </div>
    </div>
  )
}
