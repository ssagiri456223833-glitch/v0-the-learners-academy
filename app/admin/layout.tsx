import { AdminSidebar } from "@/components/portal/admin-sidebar"
import { PortalTopBar } from "@/components/portal/portal-topbar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-slate-50/50">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <PortalTopBar role="Administrator" />
        <main className="flex-1 overflow-y-auto px-10 py-10">
          <div className="max-w-[1240px] mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
