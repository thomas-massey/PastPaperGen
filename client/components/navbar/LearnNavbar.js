import React from 'react'

function LearnNavbar() {
  return (
    // Returns a centred navbar with options (this is a sub-navbar) enclosed in an outlined box, on hover the values turn to the multicolour gradient
    <div className="flex justify-center items-center h-16 bg-black text-white">
        <nav className="flex justify-between items-center text-xl font-semibold border-4 border-white rounded-lg">
            <a href="/learn" className='p-4 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-red-500 hover:to-pink-500'>Learn</a>
            <a href="/learn/papergeneration" className='p-4 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-red-500 hover:to-pink-500'>Paper Generation</a>
            <a href="/learn/quesion_practice" className='p-4 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-red-500 hover:to-pink-500'>Question Practice</a>
        </nav>
    </div>
  )
}

export default LearnNavbar