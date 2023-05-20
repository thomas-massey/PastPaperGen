import IssueTrackerNavbar from "@/app/components/learn/issue_tracker/IssueNavbar";
import MostRecent from "@/app/components/learn/issue_tracker/MostRecent";

const issue_tracker = () => {
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
                {/* <MostRecent /> */}
                {/* TODO: Add the recent issues component here */}
            </div>
        </div>
    );
}
 
export default issue_tracker;