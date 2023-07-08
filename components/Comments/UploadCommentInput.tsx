"use client"

import { useState } from "react";
import toast from "react-hot-toast";

const UploadCommentInput = (issue_simple_id) => {
    const [loading, setLoading] = useState(false)
    return (
        <form onSubmit={async (event) => {
            // Disable the button
            setLoading(true)
            // Get the form data
            event.preventDefault()
            const formData = new FormData(event.target as HTMLFormElement)
            // Add the comment to the form data
            formData.append('comment', formData.get('comment') as string)
            // Get the simple_id from the URL slug
            formData.append('issue_simple_id', issue_simple_id.issue_simple_id)
            // Upload the comment to the API
            fetch('/api/learn/earn/upload/comment', {
                method: 'POST',
                body: formData
            }).then(() => {
                toast.success("Comment uploaded successfully")
                // Reset the form
                event.target.reset()
                // Time out for 1 second
                setTimeout(() => {
                    setLoading(false)
                }
                , 2500)
                // Reload the page
                window.location.reload()
            }).catch((err) => {
                toast.error("Error uploading comment")
                console.error(err)
                // Time out for 1 second
                setTimeout(() => {
                    setLoading(false)
                }
                , 2500)
            })            
        }}>
            <div className="flex flex-col text-2xl">
                <div className="flex flex-col text-2xl">
                    Add a comment
                </div>
                <div className="flex flex-col justify-center text-2xl">
                    <input
                        type="text"
                        name="comment"
                        id="comment"
                        placeholder='Enter your comment here'
                        // Make the size a bit bigger
                        className="mt-2 p-2 text-2xl border-2 rounded-lg  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                    />
                </div>
                <div className="flex flex-col justify-center text-2xl">
                    <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Upload comment
                    </button>
                </div>
            </div>
        </form>
    );
}
 
export default UploadCommentInput;