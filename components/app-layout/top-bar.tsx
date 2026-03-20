"use client"

import { Button } from "@/components/ui/button"
import { Bell, Search, Settings, HelpCircle, User, LogOut, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export function TopBar() {
  return (
    <header className="h-20 border-b border-border bg-white px-10 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-10">
        <div className="relative group w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground opacity-40 group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search resources, students, or tests..." 
            className="w-full h-11 pl-12 pr-4 bg-slate-50 border border-transparent rounded-md text-[14px] font-medium focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all outline-none"
          />
        </div>
        
        <nav className="flex items-center gap-8">
          <Link href="/" className="micro-text font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors hidden md:block">Home</Link>
          <Link href="/support" className="micro-text font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors hidden lg:block">Support</Link>
        </nav>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 border-r border-slate-100 pr-6">
          <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border-2 border-white" />
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all">
            <Settings className="h-5 w-5" />
          </Button>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-4 pl-2 pr-1 py-1 rounded-full hover:bg-slate-50 transition-all outline-none group">
              <div className="flex flex-col items-end">
                <span className="text-[13px] font-semibold text-foreground leading-tight tracking-tight">Sir Abbas Ali</span>
                <span className="micro-text font-semibold text-primary opacity-50 uppercase tracking-tighter mt-1">Teacher</span>
              </div>
              <div className="relative">
                <Avatar className="h-10 w-10 border border-border group-hover:border-primary/20 transition-colors">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-slate-50 text-[11px] font-semibold italic">AA</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-white" />
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground opacity-40 group-hover:opacity-100 transition-all" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 mt-2 rounded-md border-border p-2">
            <DropdownMenuLabel className="micro-text font-semibold text-muted-foreground opacity-40 px-3 py-2 uppercase tracking-widest">User Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="p-3 text-[13px] font-semibold gap-3 cursor-pointer rounded-sm hover:bg-slate-50">
              <User className="h-4 w-4 opacity-40" />
              View Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="p-3 text-[13px] font-semibold gap-3 cursor-pointer rounded-sm hover:bg-slate-50">
              <Settings className="h-4 w-4 opacity-40" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="p-3 text-[13px] font-semibold gap-3 cursor-pointer rounded-sm text-destructive focus:text-destructive focus:bg-destructive/5">
              <LogOut className="h-4 w-4 opacity-40" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
