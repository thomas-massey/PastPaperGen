"use client"

import toast from "react-hot-toast";

const UploadForm = () => {
    return (
        <form
            className="space-y-8 divide-y divide-gray-200 sm:space-y-5"
            onSubmit={(e) => {
                // Send an API request to /api/learn/upload
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                // Now send the form data to the API
                fetch("/api/learn/earn/upload", {
                    method: "POST",
                    body: formData,
                })
                    .then(() => {
                        console.log("Question uploaded successfully");
                        toast.success("Question uploaded successfully");
                    })
                    .catch((err) => {
                        toast.error("Error uploading question");
                        console.error(err);
                    }
                    );
            }}
        >
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Title
                        </h3>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder='Give your question a title'
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Description
                        </h3>
                        <textarea
                            id="description"
                            name="description"
                            rows={3}
                            placeholder='Give your question a description'
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Level
                        </h3>
                        <select
                            id="level"
                            name="level"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option>Please select a level</option>
                            <option>GCSE</option>
                            <option>A-Level</option>
                            <option>IB</option>
                        </select>
                    </div>
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Subject
                        </h3>
                        <select
                            id="subject"
                            name="subject"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option>Please select a subject</option>
                            <option>Math</option>
                            <option>Science</option>
                            <option>English</option>
                            <option>History</option>
                        </select>
                    </div>
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Exam Board
                        </h3>
                        <select
                            id="examBoard"
                            name="examBoard"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option>Please select an exam board</option>
                            <option>AQA</option>
                            <option>Edexcel</option>
                            <option>OCR</option>
                            <option>WJEC</option>
                        </select>
                    </div>
                    {/* File upload */}
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Question File
                        </h3>
                        <input
                            type="file"
                            name="questionFile"
                            id="questionFile"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Mark Scheme File
                        </h3>
                        <input
                            type="file"
                            name="markSchemeFile"
                            id="markSchemeFile"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Submit
                        </h3>
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default UploadForm;