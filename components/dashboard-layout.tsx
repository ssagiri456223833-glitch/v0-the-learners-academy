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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Dynamic Brand Mesh Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#1d8ae2]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#1d8ae2]/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>
      
      <Sidebar />
      <div className="lg:pl-64 flex flex-col min-h-screen">
        <Navbar title={title} subtitle={subtitle} />
        <main className="flex-1 p-6 lg:p-8 max-w-7xl mx-auto w-full page-entrance">
          {children}
        </main>
      </div>
    </div>
  )
}
