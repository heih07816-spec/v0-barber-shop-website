"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Scissors } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Scissors className="h-6 w-6" />
          <span className="text-xl font-bold">CutzByBigA</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-accent ${
              pathname === "/" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Hjem
          </Link>
          <Link
            href="/tjenester"
            className={`text-sm font-medium transition-colors hover:text-accent ${
              pathname === "/tjenester" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Tjenester
          </Link>
          <Link
            href="/om-oss"
            className={`text-sm font-medium transition-colors hover:text-accent ${
              pathname === "/om-oss" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Om Oss
          </Link>
          <Link href="/booking">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Book Nå</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
