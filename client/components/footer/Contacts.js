import React from 'react'
import Image from 'next/image'

function Contacts() {
  return (
    <div>
        <ul className='text-2xl font-semibold flex justify-center items-center'>
            <li><h1 className='text-2xl font-semibold'>Contact us via:</h1></li>
            <li className='p-4'><a href="https://www.reddit.com/r/pastpapergen/"><Image src="/reddit.png" alt="Reddit" width={50} height={50} /></a></li>
            <li><a href="https://twitter.com/pastpapergen"><Image src="/twitter.png" alt="Twitter" width={50} height={50} /></a></li>
        </ul>
    </div>
  )
}

export default Contacts