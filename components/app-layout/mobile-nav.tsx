"use client"

import { Home, Bell, User, MoreHorizontal, LayoutGrid } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function MobileBottomNav({ onOpenMenu }: { onOpenMenu: () => void }) {
  const pathname = usePathname()
  
  const navItems = [
    { icon: LayoutGrid, label: "Home", href: pathname.includes('admin') ? '/admin' : '/teacher' },
    { icon: Bell, label: "Alerts", href: "#" },
    { icon: User, label: "Profile", href: pathname.includes('admin') ? '/admin/profile' : '/teacher/profile' },
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-[72px] bg-white border-t border-border flex items-center justify-around px-6 z-40 pb-safe shadow-[0_-4px_12px_rgba(0,0,0,0.02)]">
      {navItems.map((item, i) => {
        const isActive = pathname === item.href
        return (
          <Link 
            key={i} 
            href={item.href} 
            className={`flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground opacity-50'}`}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
          </Link>
        )
      })}
      
      {/* "More" Trigger for Sidebar */}
      <button 
        onClick={onOpenMenu}
        className="flex flex-col items-center gap-1 text-muted-foreground opacity-50 hover:text-primary transition-colors"
      >
        <MoreHorizontal className="h-5 w-5" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1d8ae2]">More</span>
      </button>
    </nav>
  )
}
