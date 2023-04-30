import React from 'react'
import Contacts from './Contacts'

function Footer() {
  return (
    <div className='flex justify-center items-center h-16 bg-black text-white'>
        <p className='text-2xl font-semibold'>
            PastPaperGen
        </p>
        <p className='text-2xl font-semibold'>
            © 2023 by PastPaperGen. Proudly created with Next.js
        </p>
        <Contacts />
    </div>
  )
}

export default Footer