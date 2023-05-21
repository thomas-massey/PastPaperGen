'use client'

import { useRouter } from "next/navigation";

const IssueTrackInput = () => {
    const router = useRouter();
    return (
        <div>
            <h1 className="text-2xl font-semibold text-black-300">Issue Tracker</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const issueId = e.currentTarget.issueId.value;
                    router.push(`/learn/issue_tracker/track/${issueId}`);
                }}
            >
                <div className="flex flex-col">
                    <label htmlFor="issueId" className="text-sm font-medium text-gray-600">
                        Issue ID
                    </label>
                    <input
                        type="text"
                        name="issueId"
                        id="issueId"
                        className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2 mt-1 text-sm text-gray-300"
                        placeholder="Enter issue ID"
                    />
                </div>
            </form>
        </div>
    );
};

export default IssueTrackInput;