import LearnNavbar from "@/app/components/learn/LearnNavbar";

const paper_generator = () => {
    return (
        <div>
            <LearnNavbar />
            <h1 className="text-4xl font-bold text-center text-gray-800">
                Paper Generator
            </h1>
            <p className="text-center text-gray-600">
                Paper Generator is a tool that allows you to create your own past papers.
            </p>
        </div>
    );
}
 
export default paper_generator;