"use client"

import { useEffect, useRef, useState } from "react"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

const projectsData = [
  {
    title: "Lumos Learning App",
    description:
      "Interactive learning application with adaptive difficulty levels and engaging lessons for enhanced user experience",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: "/lumos.png",
    github: "https://github.com/Vyshnav-ms/Lumos-learning-app",
    live: "https://lumos-learning-app.vercel.app/",
  },
  {
    title: "IncubateX",
    description: "Startup tracker for managing incubation projects, progress tracking, and milestone management",
    tech: ["Flutter", "Firebase", "Dart"],
    image: "/startup-management-dashboard.jpg",
    github: "https://github.com/Vyshnav-ms/incubatex-business-incubation-tracker",
    live: "#",
  },
  {
    title: "MentalPal",
    description: "Professional mentor matching platform connecting mentors with mentees based on expertise and goals",
    tech: ["Django", "Python", "SQLite3"],
    image: "/mentor-matching-platform-interface.jpg",
    github: "https://github.com/Vyshnav-ms/Mental-pal",
    live: "#",
  },
    {
    title: "Meet and Travel",
    description: "A web application built with Django that connects people with strangers to plan and travel together.",
    tech: ["Django", "Python", "SQLite3"],
    image: "/mentor-matching-platform-interface.jpg",
    github: "https://github.com/Vyshnav-ms/Meet-and-Travel",
    live: "#",
  },
  {
    title: "Admissions Landing Page",
    description: "Modern responsive landing page with smooth animations and optimal user experience design",
    tech: ["React", "Next.js","TypeScript","Tailwind CSS"],
    image: "/lead.png",
    github: "#",
    live: "https://lead.ac.in/InternationalAdmission/",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern developer portfolio showcasing projects and skills with interactive animations and responsive design",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/dark-theme-ironman-futuristic-portfolio.jpg",
    github: "https://github.com/Vyshnav-ms/Vyshnav-portfolio",
    live: "https://vyshnavms-portfolio.vercel.app/",
  },
]

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="min-h-screen py-20 px-4 relative bg-black overflow-hidden">
      {/* Subtle Cyan Grid Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15)_0%,transparent_70%)]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 animate-pulse drop-shadow-[0_0_10px_#00ffff]">
            PROJECTS
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-16">
          A collection of innovative solutions and professional work
        </p>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={project.title}
              className={`glass-effect-hover group glass-effect rounded-lg border border-cyan-500/30 overflow-hidden h-full transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] transform hover:scale-105 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 60}ms`,
              }}
            >
              {/* Project Image */}
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-cyan-900/20 to-blue-900/20">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500 brightness-90 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-cyan-900/40 group-hover:via-black/40 transition-all duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-black/50 border border-cyan-500/30 rounded text-cyan-300 font-mono hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-200 transition-all duration-300 transform hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-cyan-500/20">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded bg-black/40 hover:bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 transition-all duration-300 group/btn hover:scale-105 transform"
                  >
                    <Github className="w-4 h-4 group-hover/btn:text-cyan-300 group-hover/btn:scale-125 transition-transform duration-300" />
                    <span className="text-xs font-mono">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded bg-black/40 hover:bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 transition-all duration-300 group/btn hover:scale-105 transform"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:text-cyan-300 group-hover/btn:scale-125 transition-transform duration-300" />
                    <span className="text-xs font-mono">Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
