import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { supabaseServer } from '@/lib/supabaseServer'
import generateSimpleId from '@/lib/generateSimpleID'
import getUserID from '@/lib/getUserID'

export async function POST(request: Request) {
    // Get the form data
    let form = await request.formData()
    let comment = form.get('comment')
    let issue_simple_id = form.get('issue_simple_id')
    if (comment == "") {
        return new NextResponse("Comment cannot be empty", { status: 400 })
    }
    const supabase = createRouteHandlerClient({ cookies })
    const user = await supabase.auth.getUser()
    const users_id = user?.data?.user?.id
    const { data: users_simple_id_arrayobj, error: users_simple_id_error } = await supabaseServer
        .from('users')
        .select('simple_id')
        .eq('id', users_id)
    const users_simple_id = users_simple_id_arrayobj[0].simple_id
    const { data: comment_data, error: comment_error } = await supabaseServer
        .from('comments')
        .insert(
            {
                "author_simple_id": users_simple_id,
                "comment": comment,
                "issue_simple_id": issue_simple_id,
            },
        )
    if (comment_error) { return NextResponse.error() }
    // Request a page reload
    return NextResponse.redirect(`/learn/earn/upload/${issue_simple_id}`)
}