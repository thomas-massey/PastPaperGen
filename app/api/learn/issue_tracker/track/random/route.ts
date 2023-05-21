import prismadb from '@/app/libs/prismadb';
import { NextRequest, NextResponse } from 'next/server';

export const revalidate = 10;

export async function GET() {
    try {
        // Get the number of issues in the database
        const count = await prismadb.issue.count(
            { where: { status: { not: "CLOSED" } } }
        );
        const random = Math.floor(Math.random() * count);
        // Get a random issue
        const issue = await prismadb.issue.findFirst({
            where: { status: { not: "CLOSED" } },
            skip: random
        });
        // Get the id of the issue
        const simpleId = issue?.simpleId;
        return new NextResponse(simpleId, { status: 200 });
    } catch (error) {
        return new NextResponse("An error occured", { status: 500 });
    }
}