import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const avatar = req.body.avatar;

    const user = await prisma.user.create({
        data: {
            name,
            email,
            avatar,
        },
    });

    res.status(200).json(user);
}