import LearnNavbar from "@/app/components/learn/LearnNavbar";

const blitz = () => {
    return (
        <div>
            <LearnNavbar />
            <h1 className="text-4xl font-bold text-center text-gray-800">
                Blitz
            </h1>
            <p className="text-center text-gray-600">
                Blitz is a game mode where you have to answer as many questions as possible in a set amount of time.
            </p>
        </div>
    );
}
 
export default blitz;