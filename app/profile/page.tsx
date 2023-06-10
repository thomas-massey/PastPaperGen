"use client"

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const profile = () => {
    const session = useSession();
    const router = useRouter();
    if (!session?.data)
    {return router.push('/auth')
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold text-center text-gray-800">
                Profile
            </h1>
            <p className="text-center text-gray-600">
                Profile page
            </p>
            <Image alt="Profile Picture" src={session?.data?.user?.image || "/images/default_profile_picture.png"} width={500} height={500} />
        </div>
    );
}
 
export default profile;