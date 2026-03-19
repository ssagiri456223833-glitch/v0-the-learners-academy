import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldAlert, BookOpen, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] relative overflow-hidden flex flex-col items-center justify-center p-6">
      {/* Pure Brand Mesh Gradient Background Blobs - #1d8ae2 */}
      <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-[#1d8ae2]/10 rounded-full blur-[130px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-[#1d8ae2]/15 rounded-full blur-[130px] animate-pulse" />

      <div className="max-w-4xl w-full space-y-12 mb-12 relative z-10 page-entrance">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="p-2 rounded-[3rem] bg-white shadow-2xl border border-white/60 ring-8 ring-[#1d8ae2]/5 transition-transform hover:scale-110 duration-700">
            <Image src="/logo.jpeg" alt="Logo" width={110} height={110} className="rounded-[2.5rem] shadow-2xl" />
          </div>
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-black font-heading text-[#0F172A] uppercase tracking-tighter leading-none italic">
              The Learners <span className="text-[#1d8ae2] not-italic">Academy</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-xl font-bold uppercase tracking-widest opacity-60">
               Institutional Assessment Gateway
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Admin Portal Card */}
          <Link href="/admin">
            <Card className="premium-card group transition-all duration-700 overflow-hidden bg-white/40 border border-white/60 h-full relative rounded-[2.5rem]">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-10 flex flex-col items-center text-center space-y-6 relative z-10">
                <div className="p-5 rounded-[2rem] bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-[#051930] group-hover:text-white transition-all duration-500 shadow-xl shadow-primary/5">
                  <ShieldAlert className="h-10 w-10" />
                </div>
                <div>
                  <h2 className="text-2xl font-black font-heading text-slate-900 tracking-tighter uppercase italic">Institutional Admin</h2>
                  <p className="text-xs text-slate-500 mt-2 font-bold uppercase tracking-widest opacity-70">Term Cycle & Staff Hub</p>
                </div>
                <Button className="w-full mt-4 bg-primary hover:bg-[#051930] shadow-2xl shadow-primary/20 font-black uppercase tracking-tighter text-xs py-7 rounded-2xl group-hover:translate-y-[-4px] transition-all">
                  Access Core
                  <ArrowRight className="h-4 w-4 ml-2 animate-pulse" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Teacher Portal Card */}
          <Link href="/teacher">
            <Card className="premium-card group transition-all duration-700 overflow-hidden bg-white/40 border border-white/60 h-full relative rounded-[2.5rem]">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-10 flex flex-col items-center text-center space-y-6 relative z-10">
                <div className="p-5 rounded-[2rem] bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-[#051930] group-hover:text-white transition-all duration-500 shadow-xl shadow-primary/5">
                  <BookOpen className="h-10 w-10" />
                </div>
                <div>
                  <h2 className="text-2xl font-black font-heading text-slate-900 tracking-tighter uppercase italic">Assessor Portal</h2>
                  <p className="text-xs text-slate-500 mt-2 font-bold uppercase tracking-widest opacity-70">Test Design & Results</p>
                </div>
                <Button variant="secondary" className="w-full mt-4 bg-primary/5 hover:bg-primary/10 text-primary shadow-xl shadow-primary/5 font-black uppercase tracking-tighter text-xs py-7 rounded-2xl border border-primary/20 group-hover:translate-y-[-4px] transition-all">
                  Open Assessor
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Student Access Portal Card */}
          <Link href="/student">
            <Card className="premium-card group transition-all duration-700 overflow-hidden bg-white/40 border border-white/60 h-full relative rounded-[2.5rem]">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-10 flex flex-col items-center text-center space-y-6 relative z-10">
                <div className="p-5 rounded-[2rem] bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl shadow-primary/5">
                  <GraduationCap className="h-10 w-10" />
                </div>
                <div>
                  <h2 className="text-2xl font-black font-heading text-slate-900 tracking-tighter uppercase italic">Student Access</h2>
                  <p className="text-xs text-slate-500 mt-2 font-bold uppercase tracking-widest opacity-70">On-Site Evaluation</p>
                </div>
                <Button variant="outline" className="w-full mt-4 border-[#1d8ae2]/40 text-primary hover:bg-primary hover:text-white transition-all font-black uppercase tracking-tighter text-xs py-7 rounded-2xl shadow-xl hover:shadow-primary/30 group-hover:translate-y-[-4px]">
                  Initiate Exam
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
