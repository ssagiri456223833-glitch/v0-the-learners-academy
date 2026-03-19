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
  GraduationCap
} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const navItems = [
  {
    title: "Admin Portal",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Teacher Portal",
    href: "/teacher",
    icon: BookOpen,
  },
  {
    title: "Question Bank",
    href: "/question-bank",
    icon: Library,
  },
  {
    title: "Create Test",
    href: "/create-test",
    icon: FilePlus,
  },
  {
    title: "Student Portal",
    href: "/student",
    icon: GraduationCap,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden text-foreground hover:bg-secondary"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
      >
        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-64 glass-effect transition-transform duration-300 ease-in-out lg:translate-x-0 border-r border-sidebar-border bg-sidebar/95 backdrop-blur-xl shadow-2xl shadow-sidebar/20",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex items-center gap-3 px-6 py-8 border-b border-sidebar-border/30">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:bg-primary/40 transition-all duration-500" />
              <Image
                src="/logo.jpeg"
                alt="The Learners Academy"
                width={48}
                height={48}
                className="rounded-xl relative z-10 shadow-lg shadow-black/20"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-black text-sidebar-foreground leading-tight tracking-tighter uppercase italic">
                The Learners
              </span>
              <span className="font-heading text-xs font-bold text-sidebar-foreground/60 uppercase tracking-widest pt-0.5">
                Academy
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-8 overflow-y-auto custom-scrollbar">
            <ul className="space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
                return (
                  <li key={item.href} className="relative">
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center gap-4 px-5 py-3.5 rounded-2xl font-bold transition-all duration-300 group overflow-hidden relative",
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-lg shadow-primary/20 scale-[1.02]"
                          : "text-sidebar-foreground/60 hover:bg-sidebar-accent/10 hover:text-sidebar-foreground hover:scale-[1.02]"
                      )}
                    >
                      {/* Active Indicator Bar */}
                      {isActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-r-full shadow-lg shadow-primary" />
                      )}
                      
                      <item.icon className={cn(
                        "h-5 w-5 transition-transform duration-300 group-hover:scale-110",
                        isActive ? "text-sidebar-accent-foreground" : "text-sidebar-foreground/40 group-hover:text-primary"
                      )} />
                      <span className="text-sm tracking-tight">{item.title}</span>
                      
                      {isActive && (
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-sidebar-accent-foreground/50 animate-pulse" />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-sidebar-border">
            <p className="text-xs text-sidebar-foreground/60 text-center">
              © 2026 The Learners Academy
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}
