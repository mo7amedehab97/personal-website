import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mohamed Helles | Frontend Developer",
  description: "Personal portfolio of Mohamed Helles, Frontend Developer",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // This outer layout doesn't need styling - that will be handled by the [locale] layout
    // We use suppressHydrationWarning to prevent hydration warnings for dynamic content
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}



import './globals.css'