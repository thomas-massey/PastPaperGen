import client from './libs/prismadb';

const home = async () => {
    const numberOfUsers = (await client.user.findMany({ where: { role: "USER" } })).length;
    const numberOfPapersGenerated = (await client.paper.findMany()).length;
    const numberOfQuestions = (await client.question.findMany()).length;
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