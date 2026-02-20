import { SimpleNavbar } from "@/components/SimpleNavbar"
import { Timeline } from "@/components/Timeline"

export default function VeillePage() {
  return (
    <main className="min-h-screen py-16 sm:py-24 px-4">
      <SimpleNavbar />
      <div className="max-w-6xl mx-auto pt-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3 text-center">
          Veille Technologique
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-8 sm:mb-12">
          Les évolutions des technologies du web
        </p>
        <Timeline />
      </div>
    </main>
  )
} 