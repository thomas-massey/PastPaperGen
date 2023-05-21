import prismadb from "@/app/libs/prismadb";

const issue = async ({ params }: any) => {
    const issue = await prismadb.issue.findUnique({
        where: {
            simpleId: params.id
        }
    })
    if (!issue) {
        return (
            <div>
                <h1 className="text-4xl font-bold text-center text-gray-800">
                    Issue not found or no longer exists
                </h1>
            </div>
        )
    }
    return (
        <div>
            <h1 className="text-4xl font-bold text-center text-gray-800">
                {issue?.title}
            </h1>
            <p className="text-center text-gray-600">
                {issue?.description}
            </p>
            <p className="text-center text-gray-600">
                {issue?.subject}
            </p>
            <p className="text-center text-gray-600">
                {issue?.status}
            </p>
            <p className="text-center text-gray-600">
                {issue?.authorId}
            </p>
        </div>
    );
}
 
export default issue;