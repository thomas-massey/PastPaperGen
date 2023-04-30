import React from 'react'

export default function paper_generation() {
    return (
        <div>
            <div className="flex justify-center items-center h-16 bg-black text-white">
                <h1 className='text-6xl font-semibold p-9'>Paper Generation</h1>
            </div>
            <div className="flex justify-center items-center h-16 bg-black text-white">
                <h2 className='text-4xl font-semibold p-9'>
                    You have x tokens left.
                </h2>
            </div>
        </div>
    )
}