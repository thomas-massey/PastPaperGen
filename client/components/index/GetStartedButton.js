import React from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/react"

export default function GetStartedButton() {
    const { data: session } = useSession()
    console.log(session)
    if (session) {
        return (
            <Link href="/learn" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Get Started
            </Link>
        )
    }
    return (
        <Link href="/pricing" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Get Started
        </Link>
    )
}