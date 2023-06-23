import bcrypt from 'bcrypt';

import prismadb from '@/lib/prismadb';
import { NextRequest, NextResponse } from 'next/server';
import generateSimpleId from '@/lib/generateSimpleID';

export async function POST(
    request: Request,
) {
    try {
        const body = await request.json();
        const {
            email,
            name,
            password
        }: {
            email: string;
            name: string;
            password: string;
        } = body;

        if (!email) {
            return new NextResponse('Email is required', { status: 400});
        }
        if (!name) {
            return new NextResponse('Name is required', { status: 400});
        }
        if (!password) {
            return new NextResponse('Password is required', { status: 400});
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const simpleId = generateSimpleId();

        console.log(simpleId, "SIMPLE_ID");

        const user = await prismadb.user.create({
            data: {
                email,
                name,
                hashedPassword,
                simpleId,
            }
        });

        return NextResponse.json(user);
    } catch (error) {
        console.log(error, "REGISTRATION_ERROR");
        return new NextResponse('Something went wrong - internal server error', { status: 500});
    }
}