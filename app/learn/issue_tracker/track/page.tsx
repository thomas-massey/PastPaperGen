'use client'

// import SimpleIdInput from "@/app/components/inputs/SimpleIdInput";
import { useState } from "react";

const IssueTrackInput = () => {
    const [issueId, setIssueId] = useState("");

    return (
        <form>
            <label htmlFor="issueId" className="block text-sm font-medium text-gray-700">
                Enter Issue ID:
            </label>
            <div className="mt-1">
                {/* <SimpleIdInput /> */}
            </div>
        </form>
    );
};

export default IssueTrackInput;