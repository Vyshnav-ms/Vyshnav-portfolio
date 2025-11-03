import type React from "react"
import type { Metadata, Viewport } from "next"
import { Exo_2, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// ✅ Load fonts
const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

// ✅ SEO + Metadata Configuration
export const metadata: Metadata = {
  metadataBase: new URL("https://vyshnav-portfolio.vercel.app"),
  title: "Vyshnav M S | Full Stack Developer | AI & Cybersecurity Enthusiast",
  description:
    "Explore the portfolio of Vyshnav M S — Full Stack Developer skilled in React, Django, AI, and Cybersecurity. Discover innovative projects that combine clean design, smart technology, and secure solutions.",
  keywords: [
    "Vyshnav M S",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Django Developer",
    "Python Developer",
    "AI Engineer",
    "Cybersecurity",
    "Machine Learning",
    "Portfolio Website",
    "Tech Innovator",
  ],
  authors: [{ name: "Vyshnav M S", url: "https://vyshnav-portfolio.vercel.app" }],
  creator: "Vyshnav M S",
  publisher: "Vyshnav M S",
  generator: "v0.app",

  // ✅ Open Graph (social preview)
  openGraph: {
    title: "Vyshnav M S | Full Stack Developer | AI & Cybersecurity Enthusiast",
    description:
      "Portfolio of Vyshnav M S — Full Stack Developer with expertise in React, Django, AI, and Cybersecurity.",
    url: "https://vyshnav-portfolio.vercel.app",
    siteName: "Vyshnav M S Portfolio",
    images: [
      {
        url: "/vysh-logo-2.png", // ✅ Place this image inside /public
        width: 2400, // ideal for social preview
        height: 1260,
        alt: "Vyshnav M S Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ Social media cards
  twitter: {
    card: "summary_large_image",
    title: "Vyshnav M S | Full Stack Developer | AI & Cybersecurity Enthusiast",
    description:
      "Check out Vyshnav M S — Full Stack Developer specializing in React, Django, AI, and Cybersecurity.",
    images: ["/vysh-logo-2.png"],
  },

  // ✅ Favicon & app icons (ensure files exist in /public)
  icons: {
    icon: [
      { url: "/vysh-logo-2.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    apple: "/vysh-logo-2.png",
  },
}

// ✅ Theme color (fixes warning)
export const viewport: Viewport = {
  themeColor: "#00ffff",
}

// ✅ Root Layout Component
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
