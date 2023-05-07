import IssueTrackerNavbar from "@/app/components/learn/issue_tracker/IssueNavbar";

const issue_tracker = () => {
    return (
        <div>
            <h1>Issue Tracker</h1>
            <IssueTrackerNavbar />
            <p>
                Found a bug or have a suggestion for how we can improve? Let us know
            </p>
        </div>
    );
}
 
export default issue_tracker;