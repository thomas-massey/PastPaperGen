import React from 'react'
import LearnNavbar from '@/components/navbar/LearnNavbar'
import { getSession } from 'next-auth/react'
import SupportedSubjects from '@/components/learn/SupportedSubjects'

export default function Learn() {
  return (
    <div>
        <LearnNavbar />
        <div className="flex justify-center items-center  bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            <h1 className='text-6xl font-semibold p-9'>Learn</h1>
            <h2 className='text-4xl font-semibold p-9'>
                Welcome to the Learn page. Here you can find all the resources you need to learn.
            </h2>
        </div>
        <div className="flex justify-center items-center h-16 bg-black text-white"></div>
        <SupportedSubjects />
    </div>
  )
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context)
    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }
    return {
        props: {
            session
        }
    }
}