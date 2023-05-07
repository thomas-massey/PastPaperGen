import bcrypt from 'bcrypt';

import prismadb from '@/app/libs/prismadb';
import { NextRequest, NextResponse } from 'next/server';

function generateSimpleId() {
    const simpleId: string = Math.random().toString(16).substr(2, 16);
    return simpleId;
}

export async function POST(
    request: Request,
) {
    try {
        const body = await request.json();
        const {
            email,
            name,
            password
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

        // e.g. 24B0-4F0C-8F0D-4F0E

        let validSimpleId = false;
        let simpleId: string = "";

        while (!validSimpleId) {
            simpleId = generateSimpleId();
            console.log(simpleId, "SIMPLE_ID");
            const user = await prismadb.user.findUnique({
                where: {
                    simpleId,
                },
            });
            if (!user) {
                validSimpleId = true;
            }
            const paper = await prismadb.paper.findUnique({
                where: {
                    simpleId,
                },
            });
            if (!paper) {
                validSimpleId = true;
            }
            const question = await prismadb.question.findUnique({
                where: {
                    simpleId,
                },
            });
            if (!question) {
                validSimpleId = true;
            }
            const issue = await prismadb.issue.findUnique({
                where: {
                    simpleId,
                },
            });
            if (!issue) {
                validSimpleId = true;
            }
        }

        console.log(simpleId, "SIMPLE_ID_FINAL");

        const user = await prismadb.user.create({
            data: {
                simpleId,
                email,
                name,
                hashedPassword,
            },
        });

        return NextResponse.json(user);
    } catch (error) {
        console.log(error, "REGISTRATION_ERROR");
        return new NextResponse('Something went wrong - internal server error', { status: 500});
    }
}