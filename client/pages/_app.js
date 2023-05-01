import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import Head from 'next/head'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Head><title>PastPaperGen</title></Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  )
}