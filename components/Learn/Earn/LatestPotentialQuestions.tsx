"use client"

import { supabase } from "@/lib/supabaseClient";
import Link from 'next/link'
import StatusBadge from "./StatusBadge";

export default async function LatestPotentialQuestions() {
    const { data: potential_questions } = await supabase
        .from('potential_question')
        .select('title, description, simple_id, created_at, status')
        .order('created_at', { ascending: false })
        .limit(5)
    console.log(potential_questions)
    return potential_questions?.map(potential_question => (
        // Give a rounded box to each potential question
        <div key={potential_question.simple_id} className="rounded-md border-2 border-gray-300 p-2 m-2">
            <Link href={`/learn/earn/issue/${potential_question.simple_id}`}>
                <div className="flex flex-row items-center justify-between">
                    <h1 className="text-2xl font-bold">
                        {potential_question.title}
                    </h1>
                    <StatusBadge status={potential_question.status} />
                </div>
                <p className="text-xl">
                    {potential_question.description}
                </p>
            </Link>
        </div>
    ))
}
