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

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'thomas.a.massey@outlook.com',
        from: body.email,
        subject: `Contact Form Submission from ${body.name}`,
        text: body.message,
        html: `<p>${body.message}</p>`,
    }
    sgMail.send(msg);

    return new NextResponse('OK', { status: 200});
}