import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ADMIN_STATS, SYSTEM_HEALTH } from "@/lib/mock-data"
import { 
  Users, 
  ShieldCheck, 
  Activity, 
  Building2, 
  ArrowUpRight, 
  ArrowRight,
  MonitorPlay
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Page Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Academy Overview</h1>
        <p className="text-slate-500 font-medium">Monitoring system performance and operational metrics.</p>
      </div>

      {/* Primary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ADMIN_STATS.map((stat) => (
          <Card key={stat.label} variant="stat" className="premium-card-hover group">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">{stat.label}</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
                  <span className="text-[11px] font-bold text-emerald-500 flex items-center gap-0.5">
                    {stat.change} <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                {stat.label.includes('Teachers') && <Users className="h-5 w-5" />}
                {stat.label.includes('Classes') && <ShieldCheck className="h-5 w-5" />}
                {stat.label.includes('Sessions') && <MonitorPlay className="h-5 w-5" />}
                {stat.label.includes('Students') && <Building2 className="h-5 w-5" />}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* System Health Analysis */}
        <Card variant="content" className="lg:col-span-2">
          <div className="p-8 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <h3 className="text-lg font-bold text-slate-900">Resource Utilization</h3>
            </div>
            <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-widest text-primary border-primary/20 bg-primary/5">Real-time Data</Badge>
          </div>
          <CardContent className="p-8">
            <div className="space-y-10">
              {/* Teacher Load */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-sm font-bold text-slate-800">Average Teacher Load</span>
                    <p className="text-xs text-slate-500 font-medium italic opacity-60">Optimization target based on Term 2 enrollment.</p>
                  </div>
                  <span className="text-sm font-bold text-primary">{SYSTEM_HEALTH.teacherLoad.ratio}</span>
                </div>
                <Progress value={SYSTEM_HEALTH.teacherLoad.progress} className="h-1.5 bg-slate-100" />
              </div>

              {/* Presence */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-sm font-bold text-slate-800">Faculty Presence</span>
                    <p className="text-xs text-slate-500 font-medium italic opacity-60">Percentage of teaching staff currently active on campus.</p>
                  </div>
                  <span className="text-sm font-bold text-primary">{SYSTEM_HEALTH.teacherPresence.count}</span>
                </div>
                <Progress value={SYSTEM_HEALTH.teacherPresence.progress} className="h-1.5 bg-slate-100" />
              </div>

              {/* Occupancy */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-sm font-bold text-slate-800">Physical Room Occupancy</span>
                    <p className="text-xs text-slate-500 font-medium italic opacity-60">Live feed monitor from wing B and wing C sensors.</p>
                  </div>
                  <span className="text-sm font-bold text-primary">{SYSTEM_HEALTH.roomOccupancy.percentage}</span>
                </div>
                <Progress value={SYSTEM_HEALTH.roomOccupancy.progress} className="h-1.5 bg-slate-100" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Summary / Status */}
        <div className="space-y-6">
          <Card variant="default" className="p-8 bg-primary text-white border-0 shadow-lg shadow-primary/20">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-60 mb-6">Academic Period</h4>
            <div className="space-y-2">
              <span className="text-2xl font-bold">Spring Term 2026</span>
              <p className="text-sm font-medium opacity-80 italic">74% progress through the current term. Mid-assessments finalized.</p>
            </div>
            <div className="mt-10 h-10 w-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <ArrowRight className="h-4 w-4" />
            </div>
          </Card>

          <Card variant="content" className="p-1 border-slate-200">
            <div className="p-6 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">System Notification</span>
              <div className="flex gap-4">
                <div className="h-2 w-2 mt-1.5 rounded-full bg-amber-500 shrink-0" />
                <p className="text-[13px] font-medium text-slate-600 leading-relaxed">System maintenance scheduled for <span className="text-slate-900 font-bold">Sunday, 02:00 AM</span>. Database backups will be performed.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
