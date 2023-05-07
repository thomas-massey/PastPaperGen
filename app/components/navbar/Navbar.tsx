'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const session = useSession()
  const router = useRouter()
  return (
    <>
      <nav className="flex justify-between items-center py-4 px-10 bg-gray-300 text-black">
        <Link href="/">
          <Image src="/images/logo_transparent.png" width={150} height={150} alt="PastPaperGen Logo" />
        </Link>

        <ul className="flex justify-end items-center space-x-8">
          <li>
            <Link href="/about">
              <div className="font-medium cursor-pointer">About</div>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <div className="font-medium cursor-pointer">Contact</div>
            </Link>
          </li>
          {!session.data && (
            <li>
              <Link href="/auth">
                <div className="font-medium cursor-pointer">Login</div>
              </Link>
            </li>
          )}
          {session.data && (
            <>
              <li>
                <Link href="/auth">
                  <div className="font-medium cursor-pointer">Logout</div>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <Image src={session?.data?.user?.image ?? '/images/default_profile_picture.png'} width={50} height={50} alt="Profile Picture" />
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  )
}

export default Navbar