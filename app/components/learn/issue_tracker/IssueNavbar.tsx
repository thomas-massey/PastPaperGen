import Link from 'next/link';

const IssueTrackerNavbar = () => {
  // Create, track, feel_lucky as links to the respective pages
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
              <Link href="/learn/issue_tracker/feel_lucky">
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
