"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RefreshCw, Home, Download, Share2 } from "lucide-react"

export function ResultsActions() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Link href="/test">
        <Button variant="outline" className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Retake Test
        </Button>
      </Link>
      
      <Link href="/dashboard">
        <Button className="gap-2 bg-primary hover:bg-primary/90">
          <Home className="h-4 w-4" />
          Back to Dashboard
        </Button>
      </Link>

      <Button variant="outline" className="gap-2">
        <Download className="h-4 w-4" />
        Download Report
      </Button>

      <Button variant="outline" className="gap-2">
        <Share2 className="h-4 w-4" />
        Share Results
      </Button>
    </div>
  )
}
