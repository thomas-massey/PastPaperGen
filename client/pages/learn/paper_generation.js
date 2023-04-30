import React from 'react'

export default function paper_generation() {
  return (
    <div>
        <h1 className='text-6xl font-semibold p-9 text-center'>Paper Generation</h1>
        <h2 className='text-4xl font-semibold p-9 text-center'>Latest generated papers:</h2>
        <div className='flex justify-center items-center'>
            <ul>
                <li className='flex justify-center items-center'>
                    <embed src="/paper.pdf" type="application/pdf" width="100%" height="600px" />
                </li>
            </ul>
        </div>
    </div>
  )
}