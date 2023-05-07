import Footer from './components/footer/Footer'
import Bulletin from './components/newsticker/NewsTicker'
import AuthContext from './context/AuthContext'
import ToasterContext from './context/ToasterContext'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PastPaperGen',
  description: 'A tool to generate past papers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <Bulletin text='This is site is still in development ⚒️. Please be patient with us.' />
          <Navbar />
          <ToasterContext />
          {children}
          <Footer />
        </AuthContext>
      </body>
    </html>
  )
}
