"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { TopBar } from "@/components/app-layout/top-bar"
import { MobileBottomNav } from "@/components/app-layout/mobile-nav"

export function AppLayout({ 
  children, 
  title, 
  subtitle 
}: { 
  children: React.ReactNode
  title: string
  subtitle: string 
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-[100dvh] w-screen overflow-hidden bg-slate-50/50">
      {/* Desktop & Slide-over Sidebar Container */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Administrative Core */}
      <div className="flex flex-1 flex-col overflow-hidden relative">
        <TopBar onOpenSidebar={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto px-6 md:px-12 py-8 md:py-12 pb-24 md:pb-12 scroll-smooth">
          <div className="max-w-[1240px] mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
            {/* Context Heading Fragment */}
            <div className="space-y-3">
              <h1 className="page-title text-[32px] md:text-[44px] text-foreground tracking-tighter leading-none">{title}</h1>
              <p className="text-[14px] md:text-[16px] font-medium text-muted-foreground italic leading-relaxed opacity-60 max-w-2xl">{subtitle}</p>
            </div>

            {/* Application Environment */}
            <div className="min-h-full">
              {children}
            </div>
          </div>
        </main>

        {/* Portable Mobile Tab Bar */}
        <MobileBottomNav onOpenMenu={() => setSidebarOpen(true)} />
      </div>
    </div>
  )
}
