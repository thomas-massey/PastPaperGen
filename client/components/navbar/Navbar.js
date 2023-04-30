import React from 'react'
import Image from 'next/image'
import Logo from '@/public/logo.png'
import NavbarAccount from '@/components/account/NavbarAccount'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="flex bg-gradient-to-r bg-ff8400">
            <div className="p-4">
                <Image src="/logo_transparent.png" alt="Logo" width={100} height={100} />
            </div>
            <nav className="flex text-2xl">
                {/* Centre of page */}
                <div className='flex justify-between items-center'>
                    <Link href="/" className='p-4'>Home</Link>
                    <Link href="/about" className='p-4'>About</Link>
                    <Link href="/learn" className='p-4'>Learn</Link>
                    <Link href="/contact" className='p-4'>Contact</Link>
                </div>
                {/* To the right */}
                <div className='flex justify-end items-center'>
                    <NavbarAccount />
                </div>
            </nav>
        </div>
    )
}