"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowLeft, 
  Upload, 
  FileSpreadsheet, 
  CheckCircle2, 
  AlertCircle,
  X,
  Plus,
  Table as TableIcon
} from "lucide-react"
import Link from "next/link"

interface RawStudent {
  name: string
  studentId: string
  level: string
  timing: string
}

export default function BulkUploadPage() {
  const [rawData, setRawData] = useState("")
  const [parsedStudents, setParsedStudents] = useState<RawStudent[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [status, setStatus] = useState<"idle" | "success">("idle")

  const handleParse = () => {
    setIsProcessing(true)
    setTimeout(() => {
      const lines = rawData.split("\n").filter(line => line.trim() !== "")
      const students: RawStudent[] = lines.map(line => {
        const [name, id, level, timing] = line.split(",").map(item => item.trim())
        return {
          name: name || "Unknown",
          studentId: id || "N/A",
          level: level || "Level 1",
          timing: timing || "Slot 1"
        }
      })
      setParsedStudents(students)
      setIsProcessing(false)
    }, 1000)
  }

  const handleCommit = () => {
     setStatus("success")
     setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <DashboardLayout 
      title="Batch Enrollment" 
      subtitle="Registry Management • Direct Data Import Protocol"
    >
      <div className="space-y-8 pb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <Link href="/admin" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-semibold uppercase tracking-widest">
            <ArrowLeft className="h-4 w-4" />
            Registry Overview
          </Link>
          {parsedStudents.length > 0 && (
             <Button 
               onClick={handleCommit}
               className="btn-primary h-12 px-8 gap-3 text-[11px] font-bold uppercase tracking-widest shadow-md"
             >
                <CheckCircle2 className="h-4 w-4" />
                Commit {parsedStudents.length} Records
             </Button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {/* Input Area */}
           <div className="space-y-8">
              <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden">
                 <CardHeader className="bg-slate-50 border-b border-border p-10">
                    <CardTitle className="text-[14px] font-bold uppercase tracking-widest text-foreground flex items-center gap-4">
                       <FileSpreadsheet className="h-4 w-4 text-primary opacity-40" />
                       Data Input Matrix
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-10 space-y-8">
                    <div className="space-y-4">
                       <Label className="micro-text font-semibold uppercase tracking-widest text-muted-foreground opacity-60">CSV / Raw Text Stream</Label>
                       <textarea 
                         placeholder="Name, ID, Level, Timing&#10;Ahmed Khan, L-1021, Level 4, Slot 1&#10;Sara Ahmed, L-1045, Level 4, Slot 2"
                         className="w-full h-64 p-8 rounded-md border border-slate-200 bg-slate-50/30 font-mono text-[13px] leading-relaxed resize-none focus:border-primary/30 focus:ring-primary/5 transition-all"
                         value={rawData}
                         onChange={(e) => setRawData(e.target.value)}
                       />
                       <p className="text-[11px] italic text-muted-foreground opacity-70">
                         * Format: [Full Name], [Student ID], [Level], [Class Slot]
                       </p>
                    </div>

                    <div className="flex gap-4">
                       <Button 
                         variant="outline" 
                         className="flex-1 h-12 border-border text-[11px] font-bold uppercase tracking-widest opacity-60 hover:opacity-100"
                         onClick={() => { setRawData(""); setParsedStudents([]); }}
                       >
                          Clear Stream
                       </Button>
                       <Button 
                         className="btn-primary flex-1 h-12 text-[11px] font-bold uppercase tracking-widest gap-3"
                         disabled={!rawData.trim() || isProcessing}
                         onClick={handleParse}
                       >
                          {isProcessing ? "Processing..." : "Validate Stream"}
                       </Button>
                    </div>
                 </CardContent>
              </Card>

              <Card className="border border-border bg-slate-50/50 shadow-inner rounded-lg overflow-hidden">
                 <CardContent className="p-8 flex items-start gap-6">
                    <div className="p-3 rounded-md bg-white border border-border mt-1">
                       <AlertCircle className="h-5 w-5 text-primary opacity-40" />
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-[14px] font-semibold text-foreground">Validation Protocol</h4>
                       <p className="text-[13px] text-muted-foreground leading-relaxed">
                          Ensure Student IDs match the institutional pattern (e.g., L-XXXX). Duplicate records will be flagged during the global commitment phase.
                       </p>
                    </div>
                 </CardContent>
              </Card>
           </div>

           {/* Preview Area */}
           <div className="space-y-8">
              <Card className="border border-border bg-white shadow-sm rounded-lg overflow-hidden h-full flex flex-col">
                 <CardHeader className="bg-slate-50 border-b border-border p-10 flex flex-row items-center justify-between shrink-0">
                    <CardTitle className="text-[14px] font-bold uppercase tracking-widest text-foreground flex items-center gap-4">
                       <TableIcon className="h-4 w-4 text-primary opacity-40" />
                       Import Preview
                    </CardTitle>
                    <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary text-[10px] font-bold px-3 h-6 uppercase">{parsedStudents.length} Items</Badge>
                 </CardHeader>
                 <CardContent className="p-0 flex-1 overflow-hidden relative">
                    {!parsedStudents.length ? (
                       <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                          <div className="p-4 rounded-full bg-slate-50 border border-slate-100 mb-6">
                             <Upload className="h-8 w-8 text-muted-foreground opacity-20" />
                          </div>
                          <p className="text-[14px] font-medium text-muted-foreground opacity-40 italic">Waiting for validated stream data...</p>
                       </div>
                    ) : (
                       <div className="overflow-auto h-[600px] custom-scrollbar">
                          <table className="w-full text-left border-collapse">
                             <thead className="sticky top-0 bg-white border-b border-border z-10 shadow-sm">
                                <tr>
                                   <th className="p-6 micro-text text-muted-foreground font-bold uppercase opacity-60">Candidate</th>
                                   <th className="p-6 micro-text text-muted-foreground font-bold uppercase opacity-60">Identifier</th>
                                   <th className="p-6 micro-text text-muted-foreground font-bold uppercase opacity-60">Level</th>
                                   <th className="p-6 micro-text text-muted-foreground font-bold uppercase opacity-60">Temporal</th>
                                </tr>
                             </thead>
                             <tbody className="divide-y divide-slate-50">
                                {parsedStudents.map((s, i) => (
                                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                                     <td className="p-6 text-[14px] font-semibold text-foreground tracking-tight">{s.name}</td>
                                     <td className="p-6 text-[13px] font-medium text-muted-foreground tabular-nums opacity-80">{s.studentId}</td>
                                     <td className="p-6">
                                        <Badge variant="secondary" className="text-[9px] font-bold px-2 h-5 uppercase tracking-widest">{s.level}</Badge>
                                     </td>
                                     <td className="p-6 text-[13px] font-medium text-muted-foreground opacity-80 uppercase tracking-widest">{s.timing}</td>
                                  </tr>
                                ))}
                             </tbody>
                          </table>
                       </div>
                    )}
                 </CardContent>
              </Card>
           </div>
        </div>

        {status === "success" && (
           <div className="fixed bottom-12 right-12 animate-in slide-in-from-bottom-4 duration-500 z-50">
              <div className="bg-success text-white px-8 py-4 rounded-md shadow-2xl flex items-center gap-4 border border-success/30">
                 <CheckCircle2 className="h-5 w-5" />
                 <span className="text-[14px] font-bold uppercase tracking-widest">Registry Sync Successful</span>
              </div>
           </div>
        )}
      </div>
    </DashboardLayout>
  )
}
