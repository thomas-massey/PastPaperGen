import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { name, email, avatar } = req.body;
    console.log("Name : ", name);
    console.log("Email : ", email);
    console.log("Avatar : ", avatar);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            avatar,
        },
    });

    res.status(200).json(user);
}