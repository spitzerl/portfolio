"use client"

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
        </div>
      </div>
    </footer>
  )
} 