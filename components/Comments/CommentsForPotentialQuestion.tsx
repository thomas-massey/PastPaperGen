import { supabase } from "@/lib/supabaseClient";
import UploadCommentInput from "./UploadCommentInput";
import Comment from "./Comment";

const CommentsForPotentialQuestion = async ({issue_simple_id}: any) => {
    // Get all comments for this question from the comments table
    const { data: comments_data, error: comments_error } = await supabase
        .from('comments')
        .select('*')
        .eq('issue_simple_id', issue_simple_id)
        .order('created_at', { ascending: false })
    return (
        <div>
            <div className="flex flex-col items-center text-2xl">
                Comments
            </div>
            <div className="flex flex-col text-2xl">
                {comments_data?.map((comment: any) => (
                    <div key={comment.id}>
                        <Comment comment={comment} />
                    </div>
                ))}
            </div>
            {/* Add a comment - positioned to the left */}
            <div className="flex flex-col justify-center text-2xl">
                <UploadCommentInput issue_simple_id={issue_simple_id}/>
            </div>
        </div>
    );
}

export default CommentsForPotentialQuestion;