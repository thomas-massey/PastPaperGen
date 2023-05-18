import { NextResponse } from "next/server";

export async function POST(
    request: Request,
) {
    const body = await request.json();
    if (!body.name) {
        return new NextResponse('Name is required', { status: 400});
    }
    if (!body.email) {
        return new NextResponse('Email is required', { status: 400});
    }
    if (body.topic == '_') {
        return new NextResponse('Topic is required', { status: 400});
    }
    if (!body.message) {
        return new NextResponse('Message is required', { status: 400});
    }
    if (!body) {
        return new NextResponse('Body is required', { status: 400});
    }

    // TODO: Send email to admin

    return new NextResponse('OK', { status: 200});
}