import React from 'react'
import Contacts from './Contacts'

function Footer() {
  return (
    // Black and white text
    <footer className='post-absolute bottom-0 w-full bg-black text-white text-center p-4'>
        <p className='text-2xl font-semibold'>
            PastPaperGen
        </p>
        <p className='text-2xl font-semibold'>
            © 2023 by PastPaperGen. Proudly created with Next.js
        </p>
        <Contacts />
    </footer>
  )
}

export default Footer