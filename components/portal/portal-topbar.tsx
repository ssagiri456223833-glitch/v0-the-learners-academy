"use client"

import { Button } from "@/components/ui/button"
import { Bell, Search, Settings, User, ChevronDown } from "lucide-react"
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator 
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function PortalTopBar({ role }: { role: string }) {
  return (
    <header className="h-20 bg-white border-b border-slate-100 px-8 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-4 flex-1 max-w-lg relative group">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
        <input 
          type="text" 
          placeholder="Search resources..." 
          className="w-full h-10 pl-10 pr-4 bg-slate-50 border border-transparent rounded-lg text-sm focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all outline-none"
        />
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="h-10 w-10 text-slate-400 hover:text-primary hover:bg-primary/5 transition-all relative rounded-full">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </Button>
        
        <div className="h-8 w-px bg-slate-100 mx-2" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-full hover:bg-slate-50 transition-all outline-none group text-right">
              <div className="flex flex-col items-end">
                <span className="text-[13px] font-bold text-slate-900 leading-tight">Sir Abbas Ali</span>
                <span className="text-[10px] font-bold text-primary uppercase tracking-tighter mt-0.5 opacity-60">{role}</span>
              </div>
              <Avatar className="h-9 w-9 border border-slate-200 group-hover:border-primary/20 transition-colors">
                <AvatarFallback className="bg-slate-50 text-[11px] font-bold text-slate-400">AA</AvatarFallback>
              </Avatar>
              <ChevronDown className="h-4 w-4 text-slate-400 opacity-40 group-hover:opacity-100 transition-all" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 mt-2 p-2">
             <DropdownMenuItem className="gap-2 cursor-pointer p-3 text-sm font-semibold rounded-lg">
                <User className="h-4 w-4 opacity-40" />
                Profile
             </DropdownMenuItem>
             <DropdownMenuItem className="gap-2 cursor-pointer p-3 text-sm font-semibold rounded-lg">
                <Settings className="h-4 w-4 opacity-40" />
                Settings
             </DropdownMenuItem>
             <DropdownMenuSeparator className="my-2" />
             <DropdownMenuItem className="gap-2 text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer p-3 text-sm font-semibold rounded-lg">
                Sign Out
             </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
