import { Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import type { Metadata } from 'next'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: 'The Learners Academy',
  description: 'Empowering educators with smart MCQ test creation and management tools',
  generator: 'v0.app',
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} font-sans antialiased text-[#0F172A]`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
