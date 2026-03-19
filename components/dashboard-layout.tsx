"use client"

import { AppLayout } from "@/components/app-layout"

interface DashboardLayoutProps {
  children: React.ReactNode
  title: string
  subtitle?: string
}

export function DashboardLayout({ children, title, subtitle }: DashboardLayoutProps) {
  return (
    <AppLayout 
      title={title} 
      subtitle={subtitle || ""}
    >
      {children}
    </AppLayout>
  )
}
