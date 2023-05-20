'use client'

import Link from 'next/link'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
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
            <Link href="/">
              <div className="font-medium cursor-pointer">Home</div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className="font-medium cursor-pointer">About</div>
            </Link>
          </li>
          <li>
            <Link href="/learn">
              <div className="font-medium cursor-pointer">Learn</div>
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
                <button>
                  <div className="font-medium cursor-pointer" onClick={() => signOut()}>Logout</div>
                </button>
              </li>
              <li>
                <Link href="/profile">
                  {session?.data?.user?.image && (
                    <Image src={session.data.user.image} width={50} height={50} alt="Profile Picture" />
                  )}
                  {!session?.data?.user?.image && (
                    <Image src="/images/default_profile_picture.png" width={50} height={50} alt="Profile Picture" />
                  )}
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