import React from 'react'
import { PrismaClient } from '@prisma/client'
import Image from 'next/image'

export default function see(props) {
    const users_array = props.users_obj.users
    return (
        <div>
            <h1>See</h1>
            <ul>
                {users_array.map((user) => (
                    <li key={user.id}>
                        <Image
                            src={user.avatar}
                            alt="Picture of the author"
                            width={500}
                            height={500}
                        />
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export async function getServerSideProps() {
    const prisma = new PrismaClient();
    const users_obj = await prisma.user.findMany();
    return {
        props: {
            users_obj,
        },
    };
}