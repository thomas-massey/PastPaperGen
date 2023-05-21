import IssueTrackerNavbar from "@/app/components/learn/issue_tracker/IssueNavbar";
import MostRecent from "@/app/components/learn/issue_tracker/MostRecent";
import prismadb from "@/app/libs/prismadb";
import Link from "next/link";

const issue_tracker = async () => {
    const most_recent_issues = await prismadb.issue.findMany({
        take: 3,
        orderBy: {
            createdAt: 'desc'
        }
    })
    return (
        <div>
            <IssueTrackerNavbar />
            <h1 className="text-4xl font-bold text-center text-gray-800">
                Issue Tracker
            </h1>
            <p className="text-center text-gray-600">
                Found a bug or have a suggestion for how we can improve? Let us know
            </p>
            <div className="text-center text-gray-600 mt-4">
                <h1 className="text-2xl font-bold text-gray-800">Most Recent</h1>
                {most_recent_issues.map((issue) => (
                    // Put within a card
                    <Link href={`/learn/issue_tracker/track/${issue.simpleId}`}>
                        <div className="bg-blue-200 shadow overflow-hidden sm:rounded-lg mt-4 w-1/2 mx-auto">
                            <div key={issue.id}>
                                <h1 className="text-xl font-bold text-gray-800">{issue.title}</h1>
                                <p className="text-gray-600">{issue.description}</p>
                                <p className="text-gray-600">{issue.subject}</p>
                                <p className="text-gray-600">{issue.status}</p>
                                <p className="text-gray-600">{issue.authorId}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div >
    );
}

export default issue_tracker;