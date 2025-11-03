import type React from "react"
import type { Metadata } from "next"
import { Exo_2, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Vyshnav M S - Full Stack Developer",
  description: "Ironman-inspired portfolio of Vyshnav M S, Full Stack Developer specializing in React & Django",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${exo2.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground cursor-tracker">
        <div id="gradient-overlay" className="fixed inset-0 pointer-events-none z-40"></div>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
