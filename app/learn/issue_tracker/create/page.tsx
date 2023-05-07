'use client'
import Head from 'next/head';

const IssueTracker = () => {
  return (
    <>
      <Head>
        <title>Issue Tracker | Your App Name</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <h1 className="text-3xl font-bold mb-6">Issue Tracker</h1>
          <p className="mb-4">
            Found a bug or have a suggestion for how we can improve? Let us know
            using the form below.
          </p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-medium mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border-gray-300 rounded-md w-full py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-medium mb-2"
              >
                Description
              </label>
              <textarea
                id="description"    
                name="description"
                className="border-gray-300 rounded-md w-full py-2 px-3"
                />
            </div>
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-gray-700 font-medium mb-2"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                className="border-gray-300 rounded-md w-full py-2 px-3"
              >
                <option value="">Select a category</option>
                <option value="bug">Bug</option>
                <option value="suggestion">Suggestion</option>
                <option value="improvement">Improvement</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default IssueTracker;
