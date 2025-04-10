import { Inter, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Providers } from '@/components/Providers'
import { CustomCursor } from '@/components/CustomCursor'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata = {
  title: 'Modern Portfolio',
  description: 'A modern portfolio showcasing my work and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 cursor-custom`}>
        <Providers>
          <CustomCursor />
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <ThemeToggle />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
