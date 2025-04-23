"use client"

import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Menu, X, Github, Linkedin } from "lucide-react"
import { CVDownloadButton } from "@/components/ui/CVDownloadButton"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar style on scroll
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["home", "about", "experience", "education", "projects", "contact"]
      const navbarHeight = 64 // Height of the navbar (h-16 = 4rem = 64px)
      const offset = navbarHeight + 20 // Add some padding for better detection

      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          const sectionTop = rect.top + window.scrollY
          const sectionBottom = sectionTop + rect.height
          const scrollPosition = window.scrollY + offset

          return scrollPosition >= sectionTop && scrollPosition < sectionBottom
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Call handleScroll once on mount to set initial active section
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Lucas Spitzer" },
    { id: "about", label: "À Propos" },
    { id: "education", label: "Formation" },
    { id: "experience", label: "Expérience" },
    { id: "projects", label: "Projets" },
    { id: "contact", label: "Contact" }
  ]

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="gap-6">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/70 rounded-full transform origin-left transition-transform duration-300" />
                    )}
                  </a>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <CVDownloadButton />
            <a
              href="https://github.com/spitzerl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/lucasspitzer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block px-4 py-3 text-base font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-primary bg-primary/10 border-l-4 border-primary"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
} 