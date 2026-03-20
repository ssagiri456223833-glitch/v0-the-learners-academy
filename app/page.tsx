import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldAlert, BookOpen, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col items-center justify-center p-6">
      <div className="institutional-container space-y-12 mb-12 relative z-10 page-entrance">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="p-1 rounded-lg bg-white shadow-sm border border-border">
            <Image src="/logo.jpeg" alt="Logo" width={90} height={90} className="rounded-md" />
          </div>
          <div className="space-y-2">
            <h1 className="page-title text-[48px] md:text-[64px] font-medium text-foreground leading-tight tracking-tight">
              The Learners Academy
            </h1>
            <p className="label-text micro-text opacity-70">
               Assessment Portal Gateway
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Admin Portal Card */}
          <Link href="/admin">
            <Card className="border border-border bg-white rounded-lg transition-all duration-300 hover:shadow-md h-full overflow-hidden">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                <div className="p-4 rounded-md bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-white transition-colors">
                  <ShieldAlert className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-[20px] font-semibold text-foreground">Admin Portal</h2>
                  <p className="label-text mt-2 uppercase tracking-wide opacity-70">Term Schedule & Staff Management</p>
                </div>
                <Button className="btn-primary w-full">
                  Open Admin
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Teacher Portal Card */}
          <Link href="/teacher">
            <Card className="border border-border bg-white rounded-lg transition-all duration-300 hover:shadow-md h-full overflow-hidden">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                <div className="p-4 rounded-md bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-white transition-colors">
                  <BookOpen className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-[20px] font-semibold text-foreground">Teacher Portal</h2>
                  <p className="label-text mt-2 uppercase tracking-wide opacity-70">Test Design & Results</p>
                </div>
                <Button variant="outline" className="btn-secondary w-full">
                  Open Dashboard
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Student Access Portal Card */}
          <Link href="/student">
            <Card className="border border-border bg-white rounded-lg transition-all duration-300 hover:shadow-md h-full overflow-hidden">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                <div className="p-4 rounded-md bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-white transition-colors">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-[20px] font-semibold text-foreground">Assessment Gateway</h2>
                  <p className="label-text mt-2 uppercase tracking-wide opacity-70">Academy Assessments</p>
                </div>
                <Button variant="outline" className="btn-secondary w-full hover:bg-primary hover:text-white border-primary text-primary transition-colors">
                  Enter Portal
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
