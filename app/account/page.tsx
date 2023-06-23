"use client"

import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import LogoutButton from '@/components/Account/LogoutButton';

export default async () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">Account</h1>
            <h2 className="text-xl font-semibold">Details</h2>
            <p className="text-lg">Name: {session?.user?.name}</p>
            <p className="text-lg">Email: {session?.user?.email}</p>
            {/* <p className="text-lg">Simple ID: {simpleId}</p>
            <p className="text-lg">Tokens: {tokens}</p> */}
            <p className="text-lg">Image: </p>
            {/* If the image is null, use the default profile pic */}
            <Image src={session?.user?.image || '/images/default_profile_picture.png'} width={100} height={100} alt="Profile Picture" />
            <LogoutButton />
        </div>
    );
}