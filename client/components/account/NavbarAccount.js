import React from 'react'
import Image from 'next/image'
import { signIn, signOut, useSession } from "next-auth/react"

function NavbarAccount() {
  const { data: session } = useSession()
  console.log(session)
  if (session) {
    return (
      <>
        <button onClick={() => signOut()} className='p-4'>Sign out</button>
        <Image src={session.user.image} alt="Profile Picture" width={100} height={100} style={{ borderRadius: 50 }} />
      </>
    )
  }
  return (
      <button onClick={() => signIn()}>Sign in</button>
  )
}

export default NavbarAccount