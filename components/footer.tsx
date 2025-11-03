"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/30 bg-gradient-to-t from-black via-cyan-950/20 to-transparent">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left - Copyright */}
          <div className="text-center md:text-left group cursor-default">
            <p className="text-gray-400 text-sm font-mono group-hover:text-gray-300 transition-all duration-300">
              Designed & Coded by{" "}
              <span className="text-cyan-400 font-bold group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-[0_0_6px_#22d3ee]">
                Vyshnav M S
              </span>
            </p>
            <p className="text-gray-500 text-xs mt-1 group-hover:text-gray-400 transition-all duration-300">
              Powered by React + Next.js + Tailwind CSS •{" "}
              <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-[0_0_8px_#22d3ee]">
                Fully Responsive
              </span>
            </p>
          </div>

          {/* Right - Social Links */}
          <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com/Vyshnav-ms", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/vyshnav-m-s", label: "LinkedIn" },
              { icon: Mail, href: "mailto:vyshnams1@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-cyan-500/40 text-cyan-400 hover:border-cyan-300 hover:text-cyan-200 hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 group/icon hover:scale-125 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Hover Glow Layer */}
                <div className="absolute inset-0 rounded-full bg-cyan-600/10 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 blur-sm"></div>
                <Icon className="w-5 h-5 relative z-10" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider Line */}
        <div className="mt-8 pt-8 border-t border-cyan-600/20">
          <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse"></div>
          <p className="text-center text-gray-500 text-xs mt-4 hover:text-gray-400 transition-colors duration-300">
            © 2025 Vyshnav M S. Building exceptional web experiences.
          </p>
        </div>
      </div>
    </footer>
  )
}
