import prismadb from '@/app/libs/prismadb';
import { NextRequest, NextResponse } from 'next/server';
import generateSimpleId from '@/app/libs/generateSimpleID';
// import supabase from '@/app/libs/supabase';

export async function POST(
    request: Request,
) {
    try {
        const body = await request.json();
        const mode = body.varient || null;
        console.log(mode, "Mode");
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
            }: {
                title: string,
                description: string,
                subject: string,
                exam_board: string,
                level: string,
                question_file: File,
                mark_scheme_file: File
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

            const issueTracker = await prismadb.issue.create({
                data: {
                    title: title,
                    description: description,
                    subject: subject,
                    simpleId: generateSimpleId() || "00000000000000",
                    authorId: "6466a54855928f83f4a978d7",
                }
            });

            // Save files to bucket
            // supabase.storage.from(process.env.DEPLOYMENT_TYPE || "").upload(`resources/question_files/${question_file.name}`, question_file);
            // supabase.storage.from(process.env.DEPLOYMENT_TYPE || "").upload(`resources/mark_scheme_files/${mark_scheme_file.name}`, mark_scheme_file);

            return new NextResponse("Question tracker created successfully", { status: 200 });
        }
    } catch (error) {
        console.log(error, "Issue tracker create route error");
        return new NextResponse('Something went wrong - internal server error', { status: 500 });
    }
}