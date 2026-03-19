import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldAlert, BookOpen, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] relative overflow-hidden flex flex-col items-center justify-center p-6">
      {/* Pure Azure Mesh Gradient Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-primary/10 rounded-full blur-[130px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-primary/15 rounded-full blur-[130px] animate-pulse" />

      <div className="max-w-4xl w-full space-y-12 mb-12 relative z-10 page-entrance">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-1.5 rounded-[2.5rem] bg-white shadow-2xl border border-white/40 ring-4 ring-primary/5">
            <Image src="/logo.jpeg" alt="Logo" width={100} height={100} className="rounded-[2.2rem]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-heading text-slate-950 uppercase tracking-tighter leading-none">
            The Learners Academy
          </h1>
          <p className="text-slate-500 text-lg max-w-xl font-medium">
             An online assessment specialized environment for the English Lingo Institution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Admin Portal Card */}
          <Link href="/admin">
            <Card className="premium-card group transition-all duration-500 overflow-hidden bg-white/60 border border-white h-full relative">
               <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-2xl bg-primary/5 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <ShieldAlert className="h-10 w-10" />
                </div>
                <div>
                  <h2 className="text-xl font-bold font-heading text-slate-900 tracking-tight">Institutional Admin</h2>
                  <p className="text-sm text-slate-500 mt-2 font-medium">Manage term cycles, teachers, and rooms.</p>
                </div>
                <Button className="w-full mt-4 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 font-bold uppercase tracking-widest text-xs py-6">
                  Enter Admin
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Teacher Portal Card */}
          <Link href="/teacher">
            <Card className="premium-card group transition-all duration-500 overflow-hidden bg-white/60 border border-white h-full relative">
               <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-2xl bg-primary/5 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <BookOpen className="h-10 w-10" />
                </div>
                <div>
                  <h2 className="text-xl font-bold font-heading text-slate-900 tracking-tight">Assessor Portal</h2>
                  <p className="text-sm text-slate-500 mt-2 font-medium">Create tests, manage Q-Bank, and reviews.</p>
                </div>
                <Button variant="secondary" className="w-full mt-4 bg-primary/10 hover:bg-primary/20 text-primary shadow-lg shadow-primary/5 font-bold uppercase tracking-widest text-xs py-6 border border-primary/20">
                  Enter Teacher
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Student Access Portal Card */}
          <Link href="/student">
            <Card className="premium-card group transition-all duration-500 overflow-hidden bg-white/60 border border-white h-full relative">
               <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-2xl bg-primary/5 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <GraduationCap className="h-10 w-10" />
                </div>
                <div>
                  <h2 className="text-xl font-bold font-heading text-slate-900 tracking-tight">Student Access</h2>
                  <p className="text-sm text-slate-500 mt-2 font-medium">Take your on-the-spot assessment.</p>
                </div>
                <Button variant="outline" className="w-full mt-4 border-primary/50 text-primary hover:bg-primary hover:text-white transition-all font-bold uppercase tracking-widest text-xs py-6">
                  Take Test
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
