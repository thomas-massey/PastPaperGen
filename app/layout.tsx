import AuthContext from '@/context/AuthContext'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import NewsTicker from '@/components/Newsticker/NewsTicker'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PastPaperGen',
  description: 'Generate past papers! 📝',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AuthContext>
        <body className={inter.className}>
          <NewsTicker text="This site is still under active development. ⚒️" />
          <Navbar />
          {children}
        </body>
      </AuthContext>
    </html>
  )
}
