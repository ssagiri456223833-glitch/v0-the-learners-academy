"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  LayoutDashboard, 
  Users, 
  ShieldCheck, 
  GraduationCap, 
  LogOut,
  ChevronRight,
  Database
} from "lucide-react"

const adminNavigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Teachers", href: "/admin/teachers", icon: Users },
  { name: "Classes", href: "/admin/classes", icon: ShieldCheck },
  { name: "Students", href: "/admin/students", icon: GraduationCap },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-72 bg-white border-r border-slate-200 flex flex-col h-screen h-[100dvh] transition-all duration-300">
      {/* Brand Identity */}
      <div className="p-8 border-b border-slate-100 flex items-center gap-4">
        <div className="p-1.5 rounded-md bg-primary text-white">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div className="flex flex-col">
          <span className="text-[15px] font-bold text-[#0F172A] tracking-tighter italic">Learners Academy</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Admin Control</span>
        </div>
      </div>

      <nav className="flex-1 p-6 space-y-8">
        <div className="space-y-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 px-3 mb-4">Operations</p>
          <div className="space-y-1">
            {adminNavigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 h-11 rounded-lg text-sm font-semibold transition-all group",
                    isActive
                      ? "bg-primary/5 text-primary"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <item.icon className={cn(
                    "h-4 w-4 transition-colors",
                    isActive ? "text-primary" : "text-slate-400 group-hover:text-slate-900"
                  )} />
                  <span className="flex-1">{item.name}</span>
                  {isActive && <ChevronRight className="h-3 w-3 text-primary/40" />}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Persistence Interface */}
      <div className="p-6 mt-auto border-t border-slate-100 bg-slate-50/50">
        <button className="flex items-center gap-3 px-3 h-11 w-full text-slate-500 hover:bg-white hover:text-red-600 transition-all rounded-lg group">
          <LogOut className="h-4 w-4 opacity-50 group-hover:opacity-100" />
          <span className="text-sm font-semibold">Terminate Session</span>
        </button>
        
        <div className="mt-6 flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
          <div className="relative">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 absolute -top-0.5 -right-0.5" />
            <div className="p-2 rounded-lg bg-primary/5 text-primary">
              <Database className="h-3.5 w-3.5" />
            </div>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest truncate">Academy V2.4</span>
            <span className="text-[9px] font-semibold text-emerald-600 uppercase tracking-widest mt-0.5">Connected</span>
          </div>
        </div>
      </div>
    </div>
  )
}
