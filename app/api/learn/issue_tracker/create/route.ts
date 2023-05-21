import prismadb from '@/app/libs/prismadb';
import { NextRequest, NextResponse } from 'next/server';
import generateSimpleId from '@/app/libs/generateSimpleID';

export async function POST(
    request: Request,
) {
    try {
        const body = await request.json();
        const mode = body.mode || null;
        if (mode == "ISSUE") {
            const {
                title,
                description,
                subject,
            } = body;

            if (!title) {
                return new NextResponse('Title is required', { status: 400 });
            }
            if (!description) {
                return new NextResponse('Description is required', { status: 400 });
            }
            if (subject == "Please select a subject") {
                return new NextResponse('Subject is required', { status: 400 });
            }
            // TODO: If author has created a issue in the last x minutes, return error (on the user table of the db)

            const issueTracker = await prismadb.issue.create({
                data: {
                    title: title || null,
                    description: description || null,
                    subject: subject || null,
                    simpleId: generateSimpleId() || "00000000000000",
                    authorId: "6466a54855928f83f4a978d7",
                    // TODO: Add authorId
                }
            });
            return new NextResponse("Issue tracker created successfully", { status: 200 });
        }
        else if (mode == "QUESTION") {
            const {
                title,
                description,
                subject,
                exam_board,
                level,
                question_file,
                mark_scheme_file
            } = body;

            if (!title) {
                return new NextResponse('Title is required', { status: 400 });
            }
            if (!description) {
                return new NextResponse('Description is required', { status: 400 });
            }
            if (subject == "Please select a subject") {
                return new NextResponse('Subject is required', { status: 400 });
            }
            // Save file to bucket
        }
    } catch (error) {
        console.log(error, "Issue tracker create route error");
        return new NextResponse('Something went wrong - internal server error', { status: 500 });
    }
}