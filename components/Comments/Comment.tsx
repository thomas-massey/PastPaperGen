import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import Link from "next/link";

const Comment = async ({ comment }: any) => {
    // Includes stuff like author, comment, timestamp, etc.
    // Enclose in a box
    // Get the users name from the simple_id within the db
    const { data: user_data, error: user_error } = await supabase
        .from('users')
        .select('full_name, avatar_url')
        .eq('simple_id', comment.author_simple_id)
    const full_name = user_data?.[0].full_name || "Anonymous";
    const avatar_url = user_data?.[0]?.avatar_url || "/images/default_profile_picture.png";

    // If there is an error, return an error message
    if (user_error) return <div className="text-2xl">Error loading user!</div>
    // If there is no data, return a loading message
    return (
        <div className="flex flex-col text-2xl border-2 border-black p-2 m-2 rounded-lg">
            <Link href={`/u/${comment.author_simple_id}`}>
                <div className="flex flex-row items-center">
                    <Image src={avatar_url} className="w-10 h-10 rounded-full mr-2" alt={`Avatar for ${full_name}`} width={40} height={40} />
                    <div className="text-xl font-bold">
                        {full_name}
                    </div>
                </div>
            </Link>
            <p className="text-2xl">
                {comment.comment}
            </p>
            {/* This post was sent at ... also convert to nice time*/}
            <div className="text-sm text-stone-500">
                This post was sent at{" "}
                {new Date(comment.created_at).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                })}{" "}
                {new Date(comment.created_at).toLocaleDateString([], {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                })}
            </div>

        </div>
    );
}

export default Comment;