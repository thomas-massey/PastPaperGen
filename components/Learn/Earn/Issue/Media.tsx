"use client"

import { supabase } from "@/lib/supabaseClient";

interface simple_id_type {
    simple_id: string;
}

const Media = async (passed_simple_id: simple_id_type) => {
    // Using supabase storage, get the media for the question
    // Each media is stored in a bucket called potential_question and each is in a folder called either question or mark_scheme
    // Each file is just called the issues simple_id
    // The aim is to get the public URl for each file and then display it
    // The media is either png, jpg, jpeg, pdf
    // If it is an image, display it as an image
    // If it is a pdf, display it as an embeded pdf
    const simple_id = passed_simple_id.simple_id

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

    // Console log the data
    console.log("Question Data: ")
    console.log(question_data)
    console.log("Mark Scheme Data: ")
    console.log(mark_scheme_data)
    console.log("File Types: ")
    console.log(question_file_type)
    console.log("Mark Scheme File Type:")
    console.log(mark_scheme_file_type)
    console.log("Simple ID: ")
    console.log(simple_id)

    return (
        <div className="grid grid-cols-2 gap-4">
            {/* Question */}
            <div className="flex justify-center">
                {/* TODO: FIX THIS! Not using Image and not actually correct logic */}
                {question_file_type == "image/png" || question_file_type == "image/jpg" || question_file_type == "image/jpeg" ?
                    <img src={question_data?.publicUrl} alt="Question" className="max-w-lg" />
                    :
                    <div>
                        <embed src={question_data?.publicUrl} className="max-w-lg" />
                    </div>
                }
            </div>
            {/* Mark Scheme */}
            <div className="flex justify-center">
                {mark_scheme_file_type == "image/png" || mark_scheme_file_type == "image/jpg" || mark_scheme_file_type == "image/jpeg" ?
                    <img src={mark_scheme_data?.publicUrl} alt="Mark Scheme" className="max-w-lg" />
                    :
                    <embed src={mark_scheme_data?.publicUrl} className="max-w-lg" />
                }
            </div>
        </div>
    );
}

export default Media;