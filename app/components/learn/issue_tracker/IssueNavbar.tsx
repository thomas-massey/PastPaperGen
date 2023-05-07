import Link from 'next/link';

const IssueTrackerNavbar = () => {
  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <Link href="/learn/issue_tracker/create">
                  <button className="px-3 py-2 rounded-md text-sm font-medium text-white focus:outline-none focus:text-white">
                    Create
                  </button>
                </Link>
                <Link href="/learn/issue_tracker/track">
                  <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
                    Track
                  </button>
                </Link>
                <Link href="/learn/issue_tracker/lucky">
                  <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
                    Feeling Lucky
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default IssueTrackerNavbar;
