"use client"

import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import LogoutButton from './LogoutButton';
import Buttons from '@/components/Buttons/Buttons';
import SignInUpButton from './SignInUpButton';
import GoToAccount from './GoToAccount';

const GetStarted = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    return (
        <div>
            {status === 'authenticated' ? (
                // Box them with a light gray background
                <div className="bg-gray-300 rounded-lg p-4">
                    <div className="flex flex-row space-x-4">
                        <GoToAccount />
                        <LogoutButton />
                    </div>
                </div>
            ) : (
                <div className="flex flex-row space-x-4">
                    <SignInUpButton />
                </div>
            )}
        </div>
    );
}

export default GetStarted;