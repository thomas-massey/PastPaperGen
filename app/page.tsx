import prismadb from '@/app/libs/prismadb';

const home = async () => {
    const numberOfUsers = await prismadb.user.count();
    const numberOfPapersGenerated = await prismadb.paper.count();
    const numberOfQuestions = await prismadb.question.count();
    return (
        <div>
            <h1 className="text-4xl font-bold text-center text-gray-800">
                Welcome to PastPaperGen!
            </h1>
            <p className="text-center text-gray-600">
                This website gives students the power and tools to create their own past papers.
            </p>
            <p className="text-center text-gray-600 mt-4 text-lg">
                Trusted by {numberOfUsers} users, PastPaperGen has generated {numberOfPapersGenerated} papers with {numberOfQuestions} questions.
            </p>
        </div>
    );
}
 
export default home;