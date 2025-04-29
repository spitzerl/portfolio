"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-6 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm mb-2">
          Fait avec ❤️ par Lucas Spitzer
        </p>
        <div className="flex flex-wrap gap-2 justify-center text-xs text-muted-foreground">
          <span>Technologies utilisées :</span>
          <span>Next.js</span>
          <span>•</span>
          <span>TypeScript</span>
          <span>•</span>
          <span>Tailwind CSS</span>
          <span>•</span>
          <span>ShadcnUI</span>
          <span>•</span>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary transition-colors">
              <span>Pages</span>
              <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem asChild>
                <a href="/glpi" className="cursor-pointer">GLPI</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/veille" className="cursor-pointer">Veille Technologique</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </footer>
  )
} 