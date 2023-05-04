import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { name, email, avatar } = req.body;

    const user = await prisma.user.create({
        data: {
            name,
            email,
            avatar,
        },
    });

    res.status(200).json(user);
}