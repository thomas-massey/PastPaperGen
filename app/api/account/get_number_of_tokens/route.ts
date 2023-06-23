import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';
// import supabase from '@/app/libs/supabase';

export async function POST(
    request: Request,
) {
    try {
        const body = await request.json();
        const { simpleId } = body;

        if (!simpleId) {
            return new NextResponse("No simpleId provided", { status: 400 });
        }

        const tokens = await prismadb.user.findUnique({
            where: { simpleId },
            select: { tokens: true },
        });

        if (!tokens) {
            return new NextResponse("No user found", { status: 404 });
        }

        return new NextResponse(JSON.stringify(tokens), { status: 200 });
    } catch (error) {
        return new NextResponse('Something went wrong - internal server error', { status: 500 });
    }
}