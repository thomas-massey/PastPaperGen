import React from 'react'
import prismadb from '@/app/libs/prismadb';

async function MostRecent() {
    // Get the top 5 most recent issues
    let mostRecentIssues = await prismadb.issue.findMany({
        take: 1,
        orderBy: {
            createdAt: 'desc'
        }
    })

    // Example of what mostRecentIssues looks like
    // [
    //     {
    //       id: '64691569f73683de951f51bc',
    //       simpleId: 'dfdbd3456ed5a',
    //       title: '578',
    //       description: 'asdfadsf',
    //       status: 'OPEN',
    //       subject: 'Feature Request',
    //       authorId: '6466a54855928f83f4a978d7',
    //       createdAt: 2023-05-20T18:46:01.779Z,
    //       updatedAt: 2023-05-20T18:46:01.779Z
    //     }
    // ]

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800">Most Recent</h1>
            {mostRecentIssues.map((issue) => (
                <div key={issue.id}>
                    <h1 className="text-xl font-bold text-gray-800">{issue.title}</h1>
                    <p className="text-gray-600">{issue.description}</p>
                    <p className="text-gray-600">{issue.subject}</p>
                    <p className="text-gray-600">{issue.status}</p>
                    <p className="text-gray-600">{issue.authorId}</p>
                </div>
            ))}
        </div>
    )
}

export default MostRecent