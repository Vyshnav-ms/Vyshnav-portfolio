"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [animateLines, setAnimateLines] = useState(false)

  useEffect(() => {
    setAnimateLines(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen pt-20 px-4 flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Arc Reactor Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-96 h-96 border-2 border-cyan-400/40 rounded-full animate-arc-pulse"></div>
        <div
          className="absolute w-72 h-72 border-2 border-cyan-500/30 rounded-full animate-arc-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute w-48 h-48 border-2 border-cyan-400/20 rounded-full animate-arc-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Glowing Core */}
        <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 blur-3xl opacity-40 animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${animateLines ? "opacity-100" : "opacity-0"}`}>
          {/* Status Line */}
          <p className="text-cyan-500 text-sm md:text-base mb-4 font-mono animate-hologram-flicker tracking-wide">
            WELCOME
          </p>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-gray-100">Hi, I'm </span>
            <span
              className="text-cyan-500 animate-hologram-flicker drop-shadow-[0_0_20px_#00ffff]"
              style={{
                textShadow:
                  "0 0 30px rgba(0,255,255,1), 0 0 60px rgba(0,255,255,0.6), 0 0 90px rgba(0,255,255,0.3)",
              }}
            >
              Vyshnav M S
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Full Stack Developer • React Specialist • Django Expert • AI Explorer
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            "Crafting elegant solutions through clean code and innovative technology. Building scalable systems that
            make an impact."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {/* Projects Button */}
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white font-bold rounded-lg 
                         border border-cyan-500/50 hover:border-cyan-400 hover:shadow-[0_0_30px_#00ffff80] 
                         hover:shadow-cyan-400/60 transition-all duration-300 group hover:scale-110 hover:-translate-y-1 transform"
            >
              <span className="group-hover:mr-2 transition-all"></span>
              View Projects
            </button>

            {/* Contact Button - Magenta Glow */}
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-gradient-to-r from-pink-600 to-fuchsia-700 text-white font-bold rounded-lg 
                         border border-pink-500/50 hover:border-pink-400 hover:shadow-[0_0_30px_#ff00ff80] 
                         hover:shadow-fuchsia-500/50 transition-all duration-300 group hover:scale-110 hover:-translate-y-1 transform"
            >
              <span className="group-hover:mr-2 transition-all"></span>
              Contact Me
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-cyan-400 w-8 h-8 drop-shadow-[0_0_10px_#00ffff] hover:scale-125 transition-transform duration-300" />
        </div>
      </div>
    </section>
  )
}
