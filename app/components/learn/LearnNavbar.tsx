import Link from 'next/link';

const LearnNavbar = () => {
  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center space-x-4">
            <div className="rounded-md bg-gray-800 px-3 py-2">
              <Link href="/">
                <div className="text-sm font-medium text-white focus:outline-none focus:text-white">
                  Home
                </div>
              </Link>
            </div>
            <div className="rounded-md bg-gray-800 px-3 py-2">
              <Link href="/about">
                <div className="text-sm font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white">
                  About
                </div>
              </Link>
            </div>
            <div className="rounded-md bg-gray-800 px-3 py-2">
              <Link href="/contact">
                <div className="text-sm font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white">
                  Contact
                </div>
              </Link>
            </div>
            <div className="rounded-md bg-gray-800 px-3 py-2">
                <Link href="/learn/issue_tracker">
                    <div className="text-sm font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white">
                        Issue Tracker
                    </div>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LearnNavbar;
