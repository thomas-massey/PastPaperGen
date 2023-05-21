"use client"
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default async function IssueTrackerNavbar () {
  const router = useRouter();
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
              <button
                type="button"
                className="text-sm font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white"
                // Router push to the random issue
                onClick={
                  async () => {
                    const id = await axios.get('/api/learn/issue_tracker/track/random')
                    const simpleId = id.data
                    router.push(`/learn/issue_tracker/track/${simpleId}`)
                    // TODO: Using forward and back slows down the page
                  }
                }
              >
                Feel Lucky
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};