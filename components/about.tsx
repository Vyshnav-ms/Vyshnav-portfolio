"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative bg-black overflow-hidden"
    >
      {/* Subtle cyan glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-300 drop-shadow-[0_0_12px_#00ffff] animate-pulse">
            About Me
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg tracking-wide">
          Crafting Digital Solutions with Passion
        </p>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column */}
          <div
            className={`transition-all duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)] ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed group hover:text-gray-100 transition-all duration-300 hover:translate-x-2">
                I'm{" "}
                <span className="text-cyan-400 font-bold">Vyshnav M S</span>, a
                passionate full-stack developer dedicated to building innovative
                digital solutions that merge elegant design with powerful
                functionality.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed group hover:text-gray-100 transition-all duration-300 hover:translate-x-2">
                With deep expertise in{" "}
                <span className="text-cyan-400">React, Django, Python</span>, and
                modern web technologies, I create responsive, scalable
                applications that solve real-world challenges. My focus lies in
                delivering user-centric designs combined with robust backend
                architecture.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed group hover:text-gray-100 transition-all duration-300 hover:translate-x-2">
                Currently exploring the frontiers of{" "}
                <span className="text-cyan-400">artificial intelligence</span>{" "}
                and{" "}
                <span className="text-cyan-400">cybersecurity</span>, I'm
                committed to staying at the cutting edge of technology while
                maintaining clean, maintainable code.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                { number: "50+", label: "Projects" },
                { number: "2+", label: "Years Exp" },
                { number: "100%", label: "Dedication" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-effect p-4 rounded-lg border border-cyan-500/30 hover:border-cyan-400/70 text-center transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] group"
                >
                  <p className="text-cyan-400 text-2xl font-bold group-hover:text-cyan-300 transition-colors duration-300">
                    {stat.number}
                  </p>
                  <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div
            className={`transition-all duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)] ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <div className="relative h-96 flex items-center justify-center">
              {/* Pulsing Glow Rings */}
              <div className="absolute w-64 h-64 border-2 border-cyan-500/30 rounded-full animate-pulse"></div>
              <div
                className="absolute w-48 h-48 border-2 border-cyan-400/40 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute w-32 h-32 border-2 border-cyan-300/50 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>

              {/* Center Text */}
              <div className="text-center z-10">
                <div className="text-6xl font-extrabold mb-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-400 drop-shadow-[0_0_15px_#00ffff]">
                    VS
                  </span>
                </div>
                <p className="text-cyan-300 font-mono text-sm tracking-wider">
                  Full Stack Developer
                </p>
              </div>

              {/* Floating Particles */}
              <div
                className="absolute top-0 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="absolute bottom-10 right-10 w-2 h-2 bg-cyan-300 rounded-full animate-bounce"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute bottom-0 left-1/2 w-2 h-2 bg-cyan-500 rounded-full animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
