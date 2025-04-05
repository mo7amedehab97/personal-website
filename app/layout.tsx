import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mohamed Helles | Frontend Developer",
  description: "Personal portfolio of Mohamed Helles, Frontend Developer",
  generator: 'v0.dev',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: {
      url: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  },
  manifest: '/site.webmanifest',
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