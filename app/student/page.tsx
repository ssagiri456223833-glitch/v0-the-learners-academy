"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { GraduationCap, BookOpen, Clock, User } from "lucide-react"
import Image from "next/image"

export default function StudentPortal() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [room, setRoom] = useState("")
  const [testCode, setTestCode] = useState("")

  const handleStartTest = () => {
    if (name && room && testCode) {
      // In a real app, we'd verify the test code. For now, redirect to /test
      router.push(`/test?studentName=${encodeURIComponent(name)}&room=${room}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/10 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Branding */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-24 h-24 mb-4">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-xl animate-pulse" />
            <Image
              src="/logo.jpeg"
              alt="The Learners Academy"
              width={96}
              height={96}
              className="rounded-2xl relative z-10 shadow-2xl"
            />
          </div>
          <h1 className="font-heading text-3xl font-bold text-foreground">
            Student Portal
          </h1>
          <p className="text-muted-foreground mt-2">
            The Learners Academy English Specialized Program
          </p>
        </div>

        <Card className="border-0 shadow-2xl bg-card/80 backdrop-blur-sm overflow-hidden border-t-4 border-primary">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-xl font-bold">Access Your Test</CardTitle>
            <CardDescription>
              Enter your details below to begin the assessment
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-4">
            {/* Student Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                Full Name
              </Label>
              <Input
                id="name"
                placeholder="e.g., Ali Khan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 focus-visible:ring-primary text-lg"
              />
            </div>

            {/* Room Selection */}
            <div className="space-y-2">
              <Label htmlFor="room" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" />
                Room / Class Number
              </Label>
              <Select onValueChange={setRoom}>
                <SelectTrigger id="room" className="h-12 focus:ring-primary text-lg">
                  <SelectValue placeholder="Select your room" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((r) => (
                    <SelectItem key={r} value={r.toString()}>
                      Room {r}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Test Code */}
            <div className="space-y-2">
              <Label htmlFor="testCode" className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Test Access Code
              </Label>
              <Input
                id="testCode"
                placeholder="Enter the code from your teacher"
                value={testCode}
                onChange={(e) => setTestCode(e.target.value)}
                className="h-12 focus-visible:ring-primary text-lg font-mono uppercase tracking-widest text-center"
              />
            </div>

            <Button 
              className="w-full h-14 text-lg font-bold gap-3 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
              disabled={!name || !room || !testCode}
              onClick={handleStartTest}
            >
              <GraduationCap className="h-6 w-6" />
              Begin Assessment
            </Button>
            
            <p className="text-xs text-center text-muted-foreground pt-2">
              By clicking "Begin Assessment", you agree to follow the academy's integrity policy.
            </p>
          </CardContent>
        </Card>

        {/* Support Link */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Having trouble? <span className="text-primary font-semibold cursor-pointer hover:underline">Ask your teacher</span>
          </p>
        </div>
      </div>
    </div>
  )
}
