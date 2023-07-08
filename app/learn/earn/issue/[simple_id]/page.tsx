"use client"

import CopySimpleId from "@/components/Buttons/CopySimpleId";
import CommentsForPotentialQuestion from "@/components/Comments/CommentsForPotentialQuestion";
import LearnNavbar from "@/components/Learn/LearnNavbar";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
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

    // Using supabase storage, get the media for the question
    // Each media is stored in a bucket called potential_question and each is in a folder called either question or mark_scheme
    // Each file is just called the issues simple_id
    // The aim is to get the public URl for each file and then display it
    // The media is either png, jpg, jpeg, pdf
    // If it is an image, display it as an image
    // If it is a pdf, display it as an embeded pdf

    // Get file types
    let { data: file_type_data, error } = await supabase
        .rpc('get_file_types', { simple_id: simple_id })
    let question_file_type = JSON.parse(file_type_data[0].question_mimetype)
    // Get the mimetype of the question
    question_file_type = question_file_type?.mimetype
    let mark_scheme_file_type = JSON.parse(file_type_data[0].mark_scheme_mimetype)
    // Get the mimetype of the mark scheme
    mark_scheme_file_type = mark_scheme_file_type?.mimetype

    // Get public URLs
    let { data: question_data } = await supabase
        .storage
        .from('potential_question')
        .getPublicUrl(`question/${simple_id}`)
    let { data: mark_scheme_data } = await supabase
        .storage
        .from('potential_question')
        .getPublicUrl(`mark_scheme/${simple_id}`)

    const question_url = question_data.publicUrl
    const mark_scheme_url = mark_scheme_data.publicUrl


    // Console output for debugging
    console.log("Data: ")
    console.log(data[0])
    console.log("Question File Type: " + question_file_type)
    console.log("Question URL: " + question_url)
    console.log("Mark Scheme File Type: " + mark_scheme_file_type)
    console.log("Mark Scheme URL: " + mark_scheme_url)

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
            <div className="grid grid-cols-2 gap-4">
                {/* If there is no media on either front, display "No media attached" otherwise render them */}
                {/* Question Media */}
                {
                    question_url == null ?
                        <div className="flex justify-center text-lg border-2 border-gray-300 p-2 m-2">
                            No media attached
                        </div>
                        :
                        <div className="flex justify-center text-lg border-2 border-gray-300 p-2 m-2">
                            {/* TODO: use USEEFFECT */}
                            {
                                question_file_type == "image/png" || question_file_type == "image/jpg" || question_file_type == "image/jpeg" ?
                                // Images are not stretched
                                    <div className="flex justify-center">
                                        <Image
                                            src={question_url}
                                            alt="Question Media"
                                            style={{ objectFit: "contain" }}
                                        />
                                    </div>
                                    :
                                    <div>
                                        Hi
                                        <embed src={question_url} width="500" height="500" type="application/pdf" />
                                    </div>
                            }
                        </div>
                }
                {/* Mark Scheme Media */}
                {
                    mark_scheme_url == null ?
                        <div className="flex justify-center text-lg border-2 border-gray-300 p-2 m-2">
                            No media attached
                        </div>
                        :
                        <div className="flex justify-center text-lg border-2 border-gray-300 p-2 m-2">
                            {
                                mark_scheme_file_type == "image/png" || mark_scheme_file_type == "image/jpg" || mark_scheme_file_type == "image/jpeg" ?
                                    <Image
                                        src={mark_scheme_url}
                                        alt="Mark Scheme Media"
                                    />
                                    :
                                    <embed src={mark_scheme_url} width="500" height="500" type="application/pdf" />
                            }
                        </div>
                }
            </div>
            <div className="flex justify-center text-lg border-2 border-gray-300 p-2 m-2">
                <Link href={`/learn/earn/`}>
                    Back to Learn
                </Link>
            </div>
            <div className="text-lg border-2 border-gray-300 p-2 m-2">
                {/* <CommentsForPotentialQuestion issue_simple_id={simple_id} /> */}
            </div>
            <div className="flex justify-center text-lg border-2 border-gray-300 p-2 m-2">
                <Link href={`/learn/earn/`}>
                    Back to Learn
                </Link>
            </div>
        </div>
    );
}