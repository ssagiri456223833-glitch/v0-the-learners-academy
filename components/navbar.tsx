"use client"

import { Search, Bell } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface NavbarProps {
  title: string
  subtitle?: string
}

export function Navbar({ title, subtitle }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-border shadow-sm">
      <div className="flex items-center justify-between h-18 px-6 lg:px-10">
        {/* Left side - Page title */}
        <div className="flex flex-col pl-12 lg:pl-0">
          <h1 className="page-title text-[24px] text-foreground leading-tight">{title}</h1>
          {subtitle && (
            <p className="micro-text text-muted-foreground font-semibold mt-0.5 uppercase tracking-widest">{subtitle}</p>
          )}
        </div>

        {/* Right side - Search, notifications, avatar */}
        <div className="flex items-center gap-6">
          {/* Search - hidden on mobile */}
          <div className="relative hidden md:block group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground opacity-50 group-focus-within:text-primary transition-colors" />
            <Input
              type="search"
              placeholder="System Search..."
              className="w-72 pl-10 bg-slate-50 border-border focus-visible:ring-primary/20 text-[14px] font-medium transition-all"
            />
          </div>

          {/* Notifications */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              className="relative hover:bg-slate-50 text-muted-foreground"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-2.5 right-2.5 h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="sr-only">Notifications</span>
            </Button>
          </div>

          {/* User Profile Summary */}
          <div className="flex items-center gap-3 pl-4 border-l border-border">
            <div className="hidden lg:flex flex-col text-right">
              <span className="text-[13px] font-bold text-foreground leading-none">Institutional Admin</span>
              <span className="text-[11px] text-muted-foreground font-medium mt-1">ID: ACCESS-8842</span>
            </div>
            <Avatar className="h-9 w-9 cursor-pointer border border-border hover:border-primary transition-colors">
              <AvatarImage src="" alt="User" />
              <AvatarFallback className="bg-slate-100 text-foreground font-bold text-[11px]">
                SA
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  )
}
