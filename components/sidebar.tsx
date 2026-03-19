"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  LayoutDashboard, 
  FilePlus, 
  Library, 
  FileText, 
  BarChart3,
  Menu,
  X,
  BookOpen,
  GraduationCap,
  CalendarDays,
  UserCircle,
  Shapes,
  History,
  LogOut
} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const adminItems = [
  {
    title: "Timetable",
    href: "/admin/timetable",
    icon: CalendarDays,
  },
  {
    title: "Classes",
    href: "/admin/classes",
    icon: Shapes,
  },
  {
    title: "Admin Profile",
    href: "/admin/profile",
    icon: UserCircle,
  },
]

const teacherItems = [
  {
    title: "Dashboard",
    href: "/teacher",
    icon: LayoutDashboard,
  },
  {
    title: "Question Bank",
    href: "/teacher/question-bank",
    icon: Library,
  },
  {
    title: "Create Test",
    href: "/teacher/create-test",
    icon: FilePlus,
  },
  {
    title: "Class Results",
    href: "/teacher/results",
    icon: History,
  },
  {
    title: "My Profile",
    href: "/teacher/profile",
    icon: UserCircle,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = pathname.startsWith('/admin') ? adminItems : teacherItems

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden text-foreground hover:bg-slate-50"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
      >
        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/10 z-30 lg:hidden backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-64 bg-white border-r border-border shadow-sm transition-transform duration-300 ease-in-out lg:translate-x-0 overflow-hidden",
          mobileOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Internal Branding Logo Area */}
          <div className="flex items-center gap-3 px-8 py-10 border-b border-border bg-slate-50/50">
            <div className="p-1 rounded-md bg-white border border-border shadow-sm">
              <Image
                src="/logo.jpeg"
                alt="The Learners Academy"
                width={36}
                height={36}
                className="rounded-sm"
              />
            </div>
            <div className="flex flex-col">
              <span className="page-title text-[18px] leading-none text-foreground tracking-tight underline underline-offset-4 decoration-primary/20">
                Institutional
              </span>
              <span className="micro-text text-muted-foreground font-black mt-1 uppercase tracking-widest opacity-50">
                LTD Environment
              </span>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 px-4 py-8 overflow-y-auto">
            <ul className="space-y-2">
              <li className="px-4 pb-4">
                 <span className="micro-text font-black uppercase tracking-widest text-muted-foreground opacity-30">
                   {pathname.startsWith('/admin') ? "Institutional Admin" : "Assessor Portal"}
                 </span>
              </li>

              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href + "/"))
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center gap-4 px-4 py-3 rounded-md font-semibold transition-all duration-200 group relative",
                        isActive
                          ? "bg-slate-50 text-foreground shadow-sm border border-border"
                          : "text-muted-foreground hover:bg-slate-50/50 hover:text-foreground"
                      )}
                    >
                      {/* Discrete Active Indicator */}
                      {isActive && (
                        <div className="absolute left-0 top-1 bottom-1 w-1 bg-primary rounded-r-md" />
                      )}
                      
                      <item.icon className={cn(
                        "h-4 w-4 transition-colors duration-200",
                        isActive ? "text-primary" : "text-muted-foreground opacity-40 group-hover:opacity-100 group-hover:text-primary"
                      )} />
                      <span className="text-[14px] font-medium tracking-tight tracking-wide">{item.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Institutional Footer Area */}
          <div className="px-6 py-6 border-t border-border mt-auto bg-slate-50/50">
             <Link 
               href="/"
               className="flex items-center gap-4 px-4 py-3 rounded-md font-bold uppercase text-[10px] tracking-widest text-muted-foreground hover:text-destructive hover:bg-destructive/5 transition-all group"
             >
                <LogOut className="h-3 w-3 opacity-40 group-hover:opacity-100 transition-all" />
                <span>Exit Portal</span>
             </Link>
             <p className="text-[9px] font-bold text-muted-foreground opacity-20 text-center mt-6 tracking-widest uppercase">
                © 2026 The Learners Academy LTD
             </p>
          </div>
        </div>
      </aside>
    </>
  )
}
