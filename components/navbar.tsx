"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Home", "About", "Education", "Skills", "Projects", "Contact"]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-cyan-400/30 shadow-[0_0_25px_rgba(0,255,255,0.3)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Left Section — Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group cursor-pointer transition-all duration-300"
        >
          <Image
            src="/vysh-logo-1.png"
            alt="Vyshnav Logo"
            width={45}
            height={45}
            className="transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-125 drop-shadow-[0_0_10px_#06b6d4] group-hover:drop-shadow-[0_0_20px_#22d3ee]"
          />
          <span className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-all duration-300 drop-shadow-[0_0_8px_#06b6d4]">
            Vyshnav M S
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-300 uppercase tracking-wide text-sm font-medium transition-all duration-300 hover:text-cyan-400"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-cyan-200 transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Section — Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg border border-cyan-400/60 text-cyan-300 hover:bg-cyan-400/20 hover:text-white transition-all duration-300 text-sm font-semibold shadow-[0_0_10px_rgba(34,211,238,0.3)]"
          >
            Let’s Connect
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-400 hover:text-cyan-300 transition-all duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-400/20 flex flex-col items-center gap-6 py-6 animate-in fade-in duration-300">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 text-base font-medium hover:text-cyan-400 transition-all duration-300"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-2 rounded-lg border border-cyan-400/60 text-cyan-300 hover:bg-cyan-400/20 hover:text-white transition-all duration-300 text-sm font-semibold"
          >
            Let’s Connect
          </a>
        </div>
      )}
    </nav>
  )
}
