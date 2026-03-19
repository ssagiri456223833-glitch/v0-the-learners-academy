"use client"

import { Sidebar } from "@/components/sidebar"
import { Navbar } from "@/components/navbar"

interface DashboardLayoutProps {
  children: React.ReactNode
  title: string
  subtitle?: string
}

export function DashboardLayout({ children, title, subtitle }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50/50 relative selection:bg-primary/10">
      <Sidebar />
      <div className="lg:pl-64 flex flex-col min-h-screen">
        <Navbar title={title} subtitle={subtitle} />
        <main className="flex-1 p-6 lg:p-10 w-full page-entrance">
          <div className="max-w-[1100px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
