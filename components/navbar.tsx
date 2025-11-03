"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Home", "About", "Education", "Skills", "Projects", "Contact"]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-cyan-400/40 shadow-[0_0_20px_rgba(0,255,255,0.3)]"
          : "bg-gradient-to-b from-black/40 to-transparent border-b border-cyan-400/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-pulse group-hover:shadow-[0_0_20px_#00ffff] group-hover:border-cyan-300 transition-all duration-300"></div>
            <div className="absolute inset-1 rounded-full border border-cyan-500/50 group-hover:border-cyan-300 transition-all duration-300"></div>
            <div className="flex items-center justify-center w-full h-full">
              <span className="text-cyan-400 font-bold text-lg group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300">
                VMS
              </span>
            </div>
          </div>
          <span className="text-white font-bold text-xl hidden sm:inline group-hover:text-cyan-400 transition-all duration-300 drop-shadow-lg">
            Vyshnav M S
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group font-medium text-sm uppercase tracking-wide"
              style={{
                transitionDelay: isScrolled ? `${index * 50}ms` : "0ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <span className="relative inline-block">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 group-hover:w-full transition-all duration-500"></span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-300/30 blur-md group-hover:w-full transition-all duration-500"></span>
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110 relative group"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="absolute inset-0 rounded-lg bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-all duration-300"></div>
          {mobileMenuOpen ? <X className="relative z-10" /> : <Menu className="relative z-10" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-400/30 p-4 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 px-4 py-3 rounded-lg hover:bg-cyan-400/10 border-l-4 border-cyan-400/0 hover:border-cyan-400 font-medium text-sm"
              style={{
                animationDelay: `${index * 50}ms`,
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
