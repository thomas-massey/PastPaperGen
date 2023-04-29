import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: "--font-montserrat",
})

export const metadata = {
  title: 'My website',
  description: 'This is my website',
  image: 'https://example.com/image.png',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${montserrat.className} mx-32 my-12`}>
        <nav>
          <h1>Logo</h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
            <li>
              <a href="/sign-up">Sign up</a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
