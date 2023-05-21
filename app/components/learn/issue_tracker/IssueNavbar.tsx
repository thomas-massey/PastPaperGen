import prismadb from '@/app/libs/prismadb';
import Link from 'next/link';

const IssueTrackerNavbar = async () => {
  // Create, track, feel_lucky as links to the respective pages
  const number_of_not_closed_issues = await prismadb.issue.count({
    where: {
      status: {
        not: 'CLOSED'
      }
    }
  })
  const skip = Math.floor(Math.random() * number_of_not_closed_issues)
  const issue_id = await prismadb.issue.findMany({
    take: 1,
    where: {
      status: {
        not: 'CLOSED'
      }
    },
    skip: skip
  })
  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center space-x-4">
            <div className="rounded-md bg-gray-800 px-3 py-2">
              <Link href="/learn/issue_tracker/create">
                <div className="text-sm font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white">
                  Create
                </div>
              </Link>
            </div>
            <div className="rounded-md bg-gray-800 px-3 py-2">
              <Link href="/learn/issue_tracker/track">
                <div className="text-sm font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white">
                  Track
                </div>
              </Link>
            </div>
            <div className="rounded-md bg-gray-800 px-3 py-2">
              <Link href={`/learn/issue_tracker/track/${issue_id[0].simpleId}`}>
                <div className="text-sm font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white">
                  Feel Lucky
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default IssueTrackerNavbar;
