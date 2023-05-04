import React from 'react'
import { PrismaClient } from '@prisma/client'
import Image from 'next/image'

export default function see(props) {
    const users_array = props.users
    return (
        <div>
            <h1 className="text-4xl text-center font-bold mb-8">
                Users
            </h1>
            <ul>
                {users_array.map((user) => (
                    <li key={user.id}>
                        <p className="text-2xl font-bold">
                            {user.name}
                        </p>
                        <p className="text-xl">
                            {user.email}
                        </p>
                        <Image
                            src={user.avatar}
                            alt="Picture of the author"
                            width={100}
                            height={100}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export async function getServerSideProps() {
    const prisma = new PrismaClient();
    const users = await prisma.user.findMany();
    return {
        props: {
            users,
        },
    };
}