'use client'
import Head from 'next/head';
import axios from 'axios';
import toast from 'react-hot-toast';
import React from 'react';

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
          {/* There is a title, questionID, description, and submit button */}
          <form 
            className="space-y-8 divide-y divide-gray-200"
            onSubmit={
              (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const data = new FormData(form);
                const title = data.get("title") as string;
                const description = data.get("description") as string;
                const subject = data.get("subject") as string;
                axios.post("/api/learn/issue_tracker/create", {
                  title,
                  description,
                  subject
                }).then(() => {
                  toast.success("Issue created!");
                }).catch(
                  (error) => {
                    console.log(error)
                    toast.error(error.response.data);
                  }
                );
              }
            }>
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
              <div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Title
                  </h3>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder='Title of your issue'
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Description
                  </h3>
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    placeholder='Description of your issue'
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Subject
                  </h3>
                  <select
                    id="subject"
                    name="subject"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Please select a subject</option>
                    <option>Bug</option>
                    <option>Feature Request</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Submit
                  </h3>
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default IssueTracker;
