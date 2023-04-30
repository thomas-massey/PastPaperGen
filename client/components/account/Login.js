import React from 'react'
import Image from 'next/image'
import { signIn, signOut, useSession } from "next-auth/react"

export default function Login() {
    const { data: session } = useSession()
    if (session) {
        return (
            <div className='flex justify-center items-center'>
                <Image src={session.user.image} alt="Profile Picture" width={100} height={100} style={{ borderRadius: 50 }} />
                <h1 className='text-6xl font-semibold p-9'>
                    You are currently signed in as {session.user.email}.
                </h1>
                <button onClick={() => signOut()} className='p-4'>Sign out</button>
            </div>
        )
    }
    return (
        <div>
            <h1 className='text-6xl font-semibold p-9 text-center'>
                You are currently not signed in. Sign in to continue.
            </h1>
            <div className='flex justify-center items-center'>
                <button onClick={() => signIn()} className='p-4 text-6xl font-semibold'>Sign in</button>
            </div>
        </div>
    )
}