"use client"

import { useEffect, useRef, useState } from "react"

export default function Education() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      college: "LEAD College of Management (Autonomous)",
      year: "2023 - 2025",
      description:
        "Specialization in Artificial Intelligence, Machine Learning, and Full Stack Web Development. Focused on building scalable intelligent web applications.",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      college:
        "Sreenarayana College of Technology, Kollam (University of Kerala)",
      year: "2019 - 2022",
      description:
        "Learned the fundamentals of computer science, database systems, and programming with a strong foundation in Python and web technologies.",
    },

  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative min-h-screen bg-black text-white py-20 overflow-hidden"
    >
      {/* Cyan Glow Backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Breathing Title */}
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-6xl font-bold text-cyan-400 drop-shadow-[0_0_25px_#22d3ee] animate-pulse transition-all duration-700 ${isVisible
                ? "opacity-100 scale-105"
                : "opacity-0 scale-90 translate-y-10"
              }`}
          >
            EDUCATION
          </h2>
          <p className="text-gray-400 mt-4 text-lg tracking-wide">
            Building a strong foundation in technology
          </p>
        </div>

        {/* Two stacked cards */}
        <div className="flex flex-col gap-10 items-center">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`group relative w-full max-w-2xl rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-900/10 to-transparent p-[1px] transition-all duration-700 ease-out hover:shadow-[0_0_35px_rgba(34,211,238,0.4)] hover:border-cyan-400/50 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <div className="relative rounded-2xl p-8 bg-black/80 backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-2">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <h3 className="text-2xl font-bold text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-gray-300 font-medium mb-1">{edu.college}</p>
                <p className="text-cyan-400 text-sm mb-4 font-mono">
                  {edu.year}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
