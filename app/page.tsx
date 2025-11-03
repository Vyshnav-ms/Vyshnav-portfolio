"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Education from "@/components/education"

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const overlay = document.getElementById("gradient-overlay")
      if (overlay) {
        const percentX = (e.clientX / window.innerWidth) * 100
        const percentY = (e.clientY / window.innerHeight) * 100
        overlay.style.setProperty("--mouse-x", `${percentX}%`)
        overlay.style.setProperty("--mouse-y", `${percentY}%`)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
