"use client"

import CopySimpleId from "@/components/Buttons/CopySimpleId";
import CommentsForPotentialQuestion from "@/components/Comments/CommentsForPotentialQuestion";
import Media from "@/components/Learn/Earn/Issue/Media";
import LearnNavbar from "@/components/Learn/LearnNavbar";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export const revalidate = 0

export default async function Page({ params }: { params: { simple_id: string } }) {
    let simple_id = params.simple_id.toLowerCase();
    const { data } = await supabase
        .from('potential_question')
        .select('*')
        .eq('simple_id', simple_id)
    if (data == null || data.length == 0) {
        return (
            <div>
                <LearnNavbar />
                <h1 className="text-4xl font-bold text-center">
                    This question does not exist
                </h1>
                <div className="flex justify-center text-lg border-2 border-gray-300 p-2 m-2">
                    <Link href={`/learn/earn/`}>
                        Back to Learn
                    </Link>
                </div>
            </div>
        )
    }

    const title = data[0].title;
    const description = data[0].description;
    const created_at = data[0].created_at;

    return (
        <div>
            <LearnNavbar />
            <h1 className="text-4xl font-bold text-center">
                {title}
            </h1>
            <h2 className="text-center">
                <div className="font-bold text-2xl">
                    Description:
                </div>
                {description}
            </h2>
            {/* Make them the same Y-Axis */}
            <h2 className="text-center">
                <div className="font-bold text-2xl">
                    Created At:
                </div>
                {new Date(created_at).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                })}{" "}
                {new Date(created_at).toLocaleDateString([], {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                })}
            </h2>
            <div className="flex justify-end items-center">
                <div className="mr-2">
                    Question's SimpleID:
                </div>
                <div>
                    <CopySimpleId simple_id={simple_id} />
                </div>
            </div>
            <h2 className="text-center font-bold text-2xl">
                Media:
            </h2>
            {/* Divide into two cols with a centred middle */}
            <Media simple_id={params.simple_id} />
            <div className="flex justify-center text-lg border-2 border-gray-300 p-2 m-2">
                <Link href={`/learn/earn/`}>
                    Back to Learn
                </Link>
            </div>
            <div className="text-lg border-2 border-gray-300 p-2 m-2">
                <CommentsForPotentialQuestion issue_simple_id={simple_id} />
            </div>
            <div className="flex justify-center text-lg border-2 border-gray-300 p-2 m-2">
                <Link href={`/learn/earn/`}>
                    Back to Learn
                </Link>
            </div>
        </div>
    );
}