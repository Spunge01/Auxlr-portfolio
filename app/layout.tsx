import type React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata = {
  title: "Auxlr - Software Development Firm",
  description: "Transforming ideas into digital reality through innovative software solutions.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
          <FloatingContact />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'