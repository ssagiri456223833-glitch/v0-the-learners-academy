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
    <header className="sticky top-0 z-30 bg-[#1d8ae2] text-white shadow-xl shadow-[#1d8ae2]/10 border-b border-[#1d8ae2]/20">
      <div className="flex items-center justify-between h-16 px-6 lg:px-8">
        {/* Left side - Page title */}
        <div className="flex flex-col pl-12 lg:pl-0">
          <h1 className="font-heading text-xl font-black tracking-tighter uppercase leading-none">{title}</h1>
          {subtitle && (
            <p className="text-xs font-medium text-white/70 mt-0.5">{subtitle}</p>
          )}
        </div>

        {/* Right side - Search, notifications, avatar */}
        <div className="flex items-center gap-4">
          {/* Search - hidden on mobile */}
          <div className="relative hidden md:block group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50 group-focus-within:text-white transition-colors" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-64 pl-10 bg-white/10 hover:bg-white/20 border-0 focus-visible:ring-white/30 text-white placeholder:text-white/40 font-medium transition-all"
            />
          </div>

          {/* Notifications */}
          <Button 
            variant="ghost" 
            size="icon"
            className="relative hover:bg-white/10 text-white"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-white animate-pulse" />
            <span className="sr-only">Notifications</span>
          </Button>

          {/* Avatar */}
          <Avatar className="h-9 w-9 cursor-pointer ring-2 ring-white/20 hover:ring-white transition-all">
            <AvatarImage src="" alt="User" />
            <AvatarFallback className="bg-white/20 text-white font-black text-xs">
              SA
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
