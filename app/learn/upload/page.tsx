import LearnNavbar from "@/components/Navbar/LearnNavbar";

const upload = () => {
    return (
        <div>
            <LearnNavbar />
            <h1>Upload a question</h1>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-12">
                    <h1 className="text-3xl font-bold mb-6">Question Contribution</h1>
                    <p className="mb-4">
                        Add a paper to get tokens.
                    </p>
                    {/* There is a title, questionID, description, and submit button */}
                    <form
                        className="space-y-8 divide-y divide-gray-200 sm:space-y-5"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const title = (document.getElementById('title') as HTMLInputElement).value;
                            const description = (document.getElementById('description') as HTMLInputElement).value;
                            const subject = (document.getElementById('subject') as HTMLInputElement).value;
                            const examBoard = (document.getElementById('examBoard') as HTMLInputElement).value;
                            const level = (document.getElementById('level') as HTMLInputElement).value;
                            const questionFile = (document.getElementById('questionFile') as HTMLInputElement).value;
                            const markSchemeFile = (document.getElementById('markSchemeFile') as HTMLInputElement).value;
                            console.log(title, description, subject, examBoard, level, questionFile, markSchemeFile);
                            }
                        }
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
                </div>
            </div>
        </div>
    );
}

export default upload;