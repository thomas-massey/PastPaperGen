import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { supabaseServer } from '@/lib/supabaseServer'
import generateSimpleId from '@/lib/generateSimpleID'

export async function POST(request: Request) {
    let form = await request.formData()
    let title = form.get('title')
    let description = form.get('description')
    let level = form.get('level')
    let exam_board = form.get('exam_board')
    let subject = form.get('subject')
    let questionFile = form.get('questionFile')
    let markSchemeFile = form.get('markSchemeFile')
    const supabase = createRouteHandlerClient({ cookies })
    let data;
    if (title == "") {
        return new NextResponse("Title cannot be blank", { status: 400 })
    }
    if (description == "") {
        return new NextResponse("Description cannot be blank", { status: 400 })
    }
    if (level == "Please select a level") {
        return new NextResponse("Level cannot be blank", { status: 400 })
    }
    if (exam_board == "Please select an exam board") {
        return new NextResponse("Exam board cannot be blank", { status: 400 })
    }
    if (subject == "Please select a subject") {
        return new NextResponse("Subject cannot be blank", { status: 400 })
    }
    if (questionFile == null) {
        return new NextResponse("Question file cannot be blank", { status: 400 })
    }
    if (markSchemeFile == null) {
        return new NextResponse("Mark scheme file cannot be blank", { status: 400 })
    }
    const simpleId = generateSimpleId()
    if (questionFile) {
        // Generate a simple ID
        const { data: question_fileData, error: question_error } = await supabaseServer.storage.from('potential_question').upload(`question/${simpleId}`, questionFile as File)
        if (question_error) { return NextResponse.error() }
        const question_data = question_fileData
        const { data: mark_scheme_fileData, error: mark_scheme_error } = await supabaseServer.storage.from('potential_question').upload(`mark_scheme/${simpleId}`, markSchemeFile as File)
        if (mark_scheme_error) { return NextResponse.error() }
        const mark_scheme_data = mark_scheme_fileData
        const { data: question, error: question_insert_error } = await supabaseServer
            .from('potential_question')
            .insert(
                {
                    "title": title,
                    "description": description,
                    "simple_id": simpleId,
                    "number_of_marks": 0,
                },
            )
        if (question_insert_error) { return NextResponse.error() }
    }
    return NextResponse.redirect(`/learn/earn/issue/${simpleId}`)
}