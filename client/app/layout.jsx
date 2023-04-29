import './globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { Analytics } from '@vercel/analytics/react'

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: "--font-montserrat",
})

export const metadata = {
  title: 'PastPaperGen',
  description: 'Tayloried to you',
  image: 'https://pastpapergen.com/next.svg',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${montserrat.className} mx-32 my-12`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
