"use client"

import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const GetStarted = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    return (
        <div>
            {status === 'authenticated' ? (
                <div className="flex flex-row space-x-4">
                    <button onClick={() => router.push('/account')}>Go to account</button>
                    <button onClick={() => signOut()}>Sign Out</button>
                </div>
            ) : (
                <div>
                    <button onClick={() => router.push("/auth")}>Sign In/Sign Up</button>
                </div>
            )}
        </div>
    );
}

export default GetStarted;