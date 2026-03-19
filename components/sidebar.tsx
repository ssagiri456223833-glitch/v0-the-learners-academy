"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  LayoutDashboard, 
  FilePlus, 
  Library, 
  CalendarDays,
  UserCircle,
  Shapes,
  History,
  LogOut,
  X,
  Users
} from "lucide-react"
import { Button } from "@/components/ui/button"

const adminItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Faculty Registry",
    href: "/admin/teachers",
    icon: Users,
  },
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
    title: "Results",
    href: "/teacher/results",
    icon: History,
  },
  {
    title: "My Profile",
    href: "/teacher/profile",
    icon: UserCircle,
  },
]

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()
  const navItems = pathname.startsWith('/admin') ? adminItems : teacherItems

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 z-40 md:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={cn(
          "fixed left-0 top-0 bottom-0 z-50 w-[260px] bg-white border-r border-border transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:h-full",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header Area (Branding) */}
          <div className="flex items-center justify-between px-8 py-10 border-b border-border bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-md bg-white border border-border shadow-sm">
                <Image
                  src="/logo.jpeg"
                  alt="The Learners Academy"
                  width={32}
                  height={32}
                  className="rounded-sm"
                />
              </div>
              <div className="flex flex-col">
                <span className="page-title text-[16px] leading-none text-foreground tracking-tight underline underline-offset-4 decoration-primary/20">
                  Institutional
                </span>
                <span className="micro-text text-muted-foreground font-black mt-1 uppercase tracking-widest opacity-40">
                   {pathname.startsWith('/admin') ? "Admin" : "Teacher"}
                </span>
              </div>
            </div>
            
            {/* Close Button (Mobile Only) */}
            <Button variant="ghost" size="icon" className="md:hidden -mr-2" onClick={onClose}>
              <X className="h-5 w-5 opacity-40" />
            </Button>
          </div>

          {/* Navigation Matrix */}
          <nav className="flex-1 px-4 py-8 overflow-y-auto">
            <ul className="space-y-1.5">
              <li className="px-4 pb-4">
                 <span className="micro-text font-black uppercase tracking-widest text-muted-foreground opacity-30">
                   Navigation Protocol
                 </span>
              </li>

              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "flex items-center gap-4 px-4 py-3.5 rounded-md font-semibold transition-all duration-200 group relative",
                        isActive
                          ? "bg-slate-50 text-primary shadow-sm border border-border/60"
                          : "text-muted-foreground hover:bg-slate-50/50 hover:text-foreground hover:translate-x-1"
                      )}
                    >
                      {/* Active Notch */}
                      {isActive && (
                        <div className="absolute left-0 top-2 bottom-2 w-[3px] bg-primary rounded-r-full" />
                      )}
                      
                      <item.icon className={cn(
                        "h-4 w-4 transition-colors duration-200",
                        isActive ? "text-primary opacity-100 scale-110" : "text-muted-foreground opacity-40 group-hover:opacity-100 group-hover:text-primary"
                      )} />
                      <span className="text-[13px] font-bold tracking-tight uppercase tracking-widest">{item.title}</span>
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
                <LogOut className="h-3.5 w-3.5 opacity-40 group-hover:opacity-100 transition-all" />
                <span>Terminate Session</span>
             </Link>
             <p className="text-[9px] font-bold text-muted-foreground opacity-20 text-center mt-6 tracking-widest uppercase">
                © 2026 Learners Academy
             </p>
          </div>
        </div>
      </aside>
    </>
  )
}
