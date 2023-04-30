import React from 'react'

export default function SupportedSubjects() {
    const subjects = [
        'Mathematics',
    ]
  return (
    // Mix up the background color of this div
    <div className='bg-gradient-to-r from-blue-400 via-green-500 to-purple-500'>
        <h1 className='text-6xl font-semibold p-9 text-center'>Supported Subjects:</h1>
        <div className='flex justify-center items-center'>
            <ul>
            {subjects.map((subject) => (
                <li key={subject} className='flex justify-center items-center'>
                    <h1 className='text-4xl font-semibold p-9'>{subject}</h1>
                </li>
            ))}
            </ul>
        </div>
    </div>
  )
}