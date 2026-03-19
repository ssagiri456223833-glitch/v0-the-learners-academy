"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Search, Bell, Menu, User, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TopBar({ onOpenSidebar }: { onOpenSidebar: () => void }) {
  const pathname = usePathname()
  
  // Logic to generate breadcrumbs from pathname
  const pathParts = pathname.split('/').filter(p => p)
  const breadcrumbs = pathParts.map((part, i) => {
    const href = `/${pathParts.slice(0, i + 1).join('/')}`
    const label = part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' ')
    return { label, href, isLast: i === pathParts.length - 1 }
  })

  return (
    <header className="h-16 md:h-20 bg-white border-b border-border flex items-center justify-between px-6 md:px-10 sticky top-0 z-30">
      <div className="flex items-center gap-4">
        {/* Mobile Burger Menu */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden h-10 w-10 text-muted-foreground"
          onClick={onOpenSidebar}
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Breadcrumbs (Desktop Only or Primary Label on Mobile) */}
        <nav className="flex items-center gap-2">
          <Link href="/" className="micro-text font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors hidden md:block">Home</Link>
          {breadcrumbs.map((crumb, i) => (
            <div key={i} className="flex items-center gap-2">
              <ChevronRight className="h-3 w-3 text-muted-foreground opacity-30 hidden md:block" />
              <Link 
                href={crumb.href} 
                className={`text-[12px] md:text-[13px] font-bold uppercase tracking-wide transition-colors ${crumb.isLast ? 'text-foreground cursor-default pointer-events-none' : 'text-muted-foreground hover:text-primary hidden md:block'}`}
              >
                {crumb.label}
              </Link>
            </div>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        {/* Utility Search (Expandable feel) */}
        <div className="relative group hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground opacity-40 group-focus-within:text-primary transition-colors" />
          <Input 
            placeholder="Search Protocol..." 
            className="w-40 md:w-64 h-9 bg-slate-50 border-transparent focus-visible:bg-white focus-visible:ring-primary/10 pl-9 transition-all text-xs" 
          />
        </div>

        {/* Institutional Notifications */}
        <div className="relative">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-md hover:bg-slate-50 relative group">
            <Bell className="h-5 w-5 text-muted-foreground opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="absolute top-2.5 right-2.5 h-1.5 w-1.5 bg-primary rounded-full ring-2 ring-white" />
          </Button>
        </div>

        {/* User Identity Fragment */}
        <div className="flex items-center gap-3 pl-4 border-l border-border h-8">
           <div className="flex flex-col items-end text-right hidden md:flex">
              <span className="text-[12px] font-bold text-foreground leading-none">Abbas Ali</span>
              <span className="micro-text font-black text-primary opacity-50 uppercase tracking-tighter mt-1">Assessor</span>
           </div>
           <Avatar className="h-9 w-9 border border-border cursor-pointer hover:border-primary transition-colors">
              <AvatarImage src="" />
              <AvatarFallback className="bg-slate-50 text-[11px] font-black italic">AA</AvatarFallback>
           </Avatar>
        </div>
      </div>
    </header>
  )
}
