import SupabaseProvider from '@/providers/supabaseProvider'
import './globals.css'
import { Inter } from 'next/font/google'
import UserProvider from '@/providers/userProvider'
import Navbar from '@/components/Navbar/Navbar'
import NewsTicker from '@/components/Newsticker/NewsTicker'
import ToasterContext from '@/context/ToasterContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PastPaperGen',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SupabaseProvider>
          <UserProvider>
            <NewsTicker text="This site is still under active development. ⚒️" />
            <ToasterContext />
            <Navbar />
            {children}
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
