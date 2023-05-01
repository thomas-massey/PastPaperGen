import { Inter } from 'next/font/google'
import GetStartedButton from '../components/index/GetStartedButton'

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
      {/* All on the same lin */}
      <div className='text-9xl font-bold text-center py-5 flex justify-center items-center'>
        <h1>Past</h1><h1 className=''>Paper</h1><h1>Gen</h1>
      </div>
      <h2 className='text-4xl font-semibold text-center py-20'>
        Giving you the power like never before to create your own past papers.
      </h2>
      <div className='flex justify-center items-center'>
        <GetStartedButton />
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
