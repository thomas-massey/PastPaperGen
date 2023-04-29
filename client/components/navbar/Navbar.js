import React from 'react'
import Image from 'next/image'
import Logo from '@/public/logo.png'
import NavbarAccount from '@/components/account/NavbarAccount'
import Link from 'next/link'

function Navbar() {
    return (
        <div className="flex justify-between items-center h-26 bg-white text-black relative shadow-sm font-mono" role="navigation">
            <div className="p-4">
                <Image src="/logo.png" alt="Logo" width={100} height={100} />
            </div>
            <nav className="flex justify-between items-center text-xl font-semibold pr-8">
                <Link href="/" className='p-4'>Home</Link>
                <Link href="/about" className='p-4'>About</Link>
                <Link href="/contact" className='p-4'>Contact</Link>
                <NavbarAccount />
            </nav>
        </div>
    )
}

export default Navbar