import React from 'react'
import { useSession, signOut, getSession } from 'next-auth/react'

export default function Account() {
    const { data: session, status } = useSession()
    if (status === 'authenticated') {
        return (
            <>
                <p>Welcome, {session.user.name}!</p>
                <p>Signed in as {session.user.email}</p>
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            <p>Not signed in</p>
        </>
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