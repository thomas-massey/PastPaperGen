import LearnNavbar from "@/app/components/learn/LearnNavbar";

const paper_generator = () => {
    const levels = [
        "GCSE",
        "A-Level",
        "IB"
    ]
    return (
        <div>
            <LearnNavbar />
            <h1 className="text-4xl font-bold text-center text-gray-800">
                Paper Generator
            </h1>
            <p className="text-center text-gray-600">
                Paper Generator is a tool that allows you to create your own past papers.
            </p>
            {/* What level are you (GCSE, ALEVEL etc) */}
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center py-2">
                    <h1 className="text-2xl font-bold text-center text-gray-800">
                        What level are you?
                    </h1>
                    <p className="text-center text-gray-600">
                        Select the level of the paper you want to create.
                    </p>
                    {levels.map((level) => (
                        <div className="flex flex-col items-center justify-center">
                            {/* In the form of a buttton */}
                            <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                                {level}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default paper_generator;