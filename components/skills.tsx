"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
      { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
      { name: "HTML5", logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
      { name: "CSS3", logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
      { name: "Tailwind", logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
      { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
    ],
    gradient: "from-cyan-400",
    borderColor: "border-cyan-400/50",
  },
  {
    category: "Backend",
    skills: [
      { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
      { name: "Django", logo: "https://cdn.worldvectorlogo.com/logos/django.svg" },
      { name: "REST API", logo: "https://cdn.worldvectorlogo.com/logos/postman.svg" },
      { name: "PostgreSQL", logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
      { name: "MySQL", logo: "https://cdn.worldvectorlogo.com/logos/mysql-3.svg" },
      { name: "SQLite", logo: "https://cdn.worldvectorlogo.com/logos/sqlite.svg" },
    ],
    gradient: "from-cyan-500",
    borderColor: "border-cyan-500/50",
  },
  {
    category: "AI & ML",
    skills: [
      { name: "OpenAI", logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
      { name: "ChatGPT", logo: "https://cdn.worldvectorlogo.com/logos/chatgpt-4.svg" },
      { name: "ML", logo: "https://cdn.worldvectorlogo.com/logos/tensorflow.svg" },
      { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
      { name: "NLP", logo: "https://cdn.worldvectorlogo.com/logos/hugging-face.svg" },
      { name: "API", logo: "https://cdn.worldvectorlogo.com/logos/postman.svg" },
    ],
    gradient: "from-cyan-300",
    borderColor: "border-cyan-300/50",
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
      { name: "GitHub", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg" },
      { name: "VS Code", logo: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" },
      { name: "Figma", logo: "https://cdn.worldvectorlogo.com/logos/figma-1.svg" },
      { name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker-4.svg" },
      { name: "Linux", logo: "https://cdn.worldvectorlogo.com/logos/linux-tux.svg" },
    ],
    gradient: "from-cyan-300",
    borderColor: "border-cyan-300/50",
  },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative bg-black overflow-hidden"
    >
      {/* Subtle background glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 animate-pulse drop-shadow-[0_0_10px_#22d3ee]">
            SKILLS
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-16">
          Professional expertise and technical proficiencies
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className={`transition-all duration-700 group hover:scale-105 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${categoryIndex * 100}ms`,
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Category Header */}
              <div
                className={`p-1 rounded-lg border-2 ${category.borderColor} mb-4 transition-all duration-300 cursor-default hover:shadow-lg hover:shadow-cyan-400/30 group-hover:border-cyan-400`}
              >
                <div
                  className={`bg-gradient-to-r ${category.gradient} to-transparent bg-clip-text text-transparent text-xl font-bold p-3`}
                >
                  {category.category}
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`group/skill p-4 rounded-lg border border-gray-600/30 hover:border-cyan-500/60 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/30 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${categoryIndex * 100 + skillIndex * 30}ms`,
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <div className="w-10 h-10 mb-2 relative group-hover/skill:drop-shadow-[0_0_10px_#22d3ee] transition-all duration-300">
                      <Image
                        src={skill.logo || "/placeholder.svg"}
                        alt={skill.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-contain filter brightness-110 group-hover/skill:brightness-150 group-hover/skill:scale-125 transition-all duration-300"
                      />
                    </div>
                    <p className="text-gray-300 text-xs text-center font-mono group-hover/skill:text-cyan-300 transition-colors duration-300">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
