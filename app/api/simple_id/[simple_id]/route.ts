// Determine what type of data is linked to the simple_id

import prismadb from '@/app/libs/prismadb';
import { useRouter } from 'next/router';

export default async function Page({ params }) {
    const router = useRouter();
    let simpleId: string = "";
    simpleId = params.simple_id;
    console.log(simpleId, "SIMPLE_ID");
    const user = await prismadb.user.findUnique({
        where: {
            simpleId,
        },
    });
    if (user) {
        router.push(`/user/${simpleId}`);
    }
    const paper = await prismadb.paper.findUnique({
        where: {
            simpleId,
        },
    });
    if (paper) {
        router.push(`/learn/paper/${simpleId}`);
    }
    const question = await prismadb.question.findUnique({
        where: {
            simpleId,
        },
    });
    if (question) {
        router.push(`/learn/question/${simpleId}`);
    }
    const issue = await prismadb.issue.findUnique({
        where: {
            simpleId,
        },
    });
    if (issue) {
        router.push(`/learn/issue_tracker/${simpleId}`);
    }
}