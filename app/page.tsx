import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldAlert, BookOpen, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex flex-col items-center justify-center p-6 bg-slate-900">
      <div className="max-w-4xl w-full space-y-12 mb-12 animate-in fade-in duration-1000">
        <div className="flex flex-col items-center text-center space-y-4">
          <Image src="/logo.jpeg" alt="Logo" width={100} height={100} className="rounded-3xl shadow-2xl" />
          <h1 className="text-4xl md:text-6xl font-black font-heading text-white uppercase tracking-tighter">
            The Learners Academy
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">
             An online assessment specialized environment for the English Lingo Institution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Admin Portal Card */}
          <Link href="/admin">
            <Card className="premium-card group hover:border-primary transition-all duration-500 overflow-hidden bg-white/5 border-white/10 backdrop-blur-md h-full">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-2xl bg-primary/20 text-primary-foreground group-hover:scale-110 transition-transform">
                  <ShieldAlert className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold font-heading text-white">Institutional Admin</h2>
                  <p className="text-sm text-muted-foreground mt-2">Manage term cycles, teachers, and rooms.</p>
                </div>
                <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                  Enter Admin
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Teacher Portal Card */}
          <Link href="/teacher">
            <Card className="premium-card group hover:border-accent transition-all duration-500 overflow-hidden bg-white/5 border-white/10 backdrop-blur-md h-full">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-2xl bg-accent/20 text-accent group-hover:scale-110 transition-transform">
                  <BookOpen className="h-10 w-10 text-accent" />
                </div>
                <div>
                  <h2 className="text-xl font-bold font-heading text-white">Assessor Portal</h2>
                  <p className="text-sm text-muted-foreground mt-2">Create tests, manage Q-Bank, and reviews.</p>
                </div>
                <Button variant="secondary" className="w-full mt-4 bg-accent hover:bg-accent/90 text-white">
                  Enter Teacher
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Student Access Portal Card */}
          <Link href="/student">
            <Card className="premium-card group hover:border-green-500 transition-all duration-500 overflow-hidden bg-white/5 border-white/10 backdrop-blur-md h-full">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-2xl bg-green-500/20 text-green-500 group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-10 w-10 text-green-500" />
                </div>
                <div>
                  <h2 className="text-xl font-bold font-heading text-white">Student Access</h2>
                  <p className="text-sm text-muted-foreground mt-2">Take your on-the-spot assessment.</p>
                </div>
                <Button variant="outline" className="w-full mt-4 border-green-500/50 text-green-500 hover:bg-green-500 hover:text-white transition-colors">
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
