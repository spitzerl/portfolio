"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({
          x: (e.clientX - window.innerWidth / 2) * 0.12,
          y: (e.clientY - window.innerHeight / 2) * 0.12
        })
      }
    }

    const handleScroll = () => {
      setScrollPosition(window.scrollY * 0.15)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [isMobile])

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] sm:w-[500px] sm:h-[300px] md:w-[700px] md:h-[500px] rounded-[40%_60%] bg-gradient-to-r from-amber-400/15 via-orange-400/15 to-pink-400/15 blur-[50px] sm:blur-[75px] md:blur-[100px] animate-gradient transition-transform duration-300 ease-out"
          style={{ 
            transform: `translate(${mousePosition.x}px, ${mousePosition.y + scrollPosition}px) rotate(15deg)`,
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[150px] sm:w-[400px] sm:h-[250px] md:w-[600px] md:h-[400px] rounded-[60%_40%] bg-gradient-to-r from-yellow-400/15 via-pink-400/15 to-amber-400/15 blur-[50px] sm:blur-[75px] md:blur-[100px] animate-gradient transition-transform duration-300 ease-out"
          style={{ 
            transform: `translate(${-mousePosition.x * 0.7}px, ${-mousePosition.y * 0.7 + scrollPosition * 0.5}px) rotate(-15deg)`,
            animationDelay: '-7s',
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[100px] sm:w-[300px] sm:h-[200px] md:w-[500px] md:h-[300px] rounded-[45%_55%] bg-gradient-to-r from-orange-400/15 via-pink-400/15 to-yellow-400/15 blur-[50px] sm:blur-[75px] md:blur-[100px] animate-gradient transition-transform duration-300 ease-out"
          style={{ 
            transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4 + scrollPosition * 0.3}px) rotate(5deg)`,
            animationDelay: '-14s',
          }}
        />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
          Lucas Spitzer
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
          Étudiant en BTS SIO SLAM & Développeur Full Stack
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <a href="#projects">Voir les Projets</a>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
            <a href="#contact">Me Contacter</a>
          </Button>
        </div>
      </div>
    </section>
  )
} 