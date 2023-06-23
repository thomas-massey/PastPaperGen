import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';
// import supabase from '@/app/libs/supabase';

export async function POST(
    request: Request,
) {
    try {
        const body = await request.json();
        const { email } = body;

        if (!email) {
            return new NextResponse("No email provided", { status: 400 });
        }

        const simpleId = await prismadb.user.findUnique({
            where: { email },
            select: { simpleId: true },
        });

        if (!simpleId) {
            return new NextResponse("No user found", { status: 404 });
        }

        return new NextResponse(JSON.stringify(simpleId), { status: 200 });
    } catch (error) {
        return new NextResponse('Something went wrong - internal server error', { status: 500 });
    }
}