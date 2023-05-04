import React from 'react'
import { PrismaClient } from '@prisma/client'
import Image from 'next/image'

export default async function see() {
    return (
        <div>
            <h1>See</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <Image src={user.avatar} alt={user.name} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export async function getServersideProps() {
    const prisma = new PrismaClient();
    const users = await prisma.user.findMany();
    return {
        props: {
            users,
        },
    };
}