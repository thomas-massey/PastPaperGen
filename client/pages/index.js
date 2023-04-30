import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const meta = {
  title: 'PastPaperGen',
  description: 'Giving you the power like never before to create your own past papers.',
  image: 'https://pastpapergen.com/logo.png'
}

export default function Home() {
  const total_number_of_users = 1000
  const total_number_of_paper = 100000
  return (
    <div className="">
      {/* Make this get smaller depending on the screen size */}
      <h1 className='text-9xl font-bold text-center py-20'>
        PastPaperGen
      </h1>
      <h2 className='text-4xl font-semibold text-center py-20'>
        Giving you the power like never before to create your own past papers.
      </h2>
      <div className='flex justify-center items-center'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Get Started</button>
        {/* If logged in, go to /learn, else go to pricing or login */}
      </div>
      <div className='flex justify-center items-center'>
        <p className='text-2xl font-semibold'>
          Total number of users: STILL TO ADD
        </p>
        <p className='text-2xl font-semibold'>
          Total number of papers: STILL TO ADD
        </p>
      </div>
    </div>
  )
}
