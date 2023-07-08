import LatestPotentialQuestions from "@/components/Learn/Earn/LatestPotentialQuestions";
import LearnNavbar from "@/components/Learn/LearnNavbar";
import Link from "next/link";

export const revalidate = 0;

const page = () => {
    return (
        <div className="flex flex-col items-center justify-center py-2">
            <LearnNavbar />
            <h1 className="text-4xl font-bold">
                Earn
            </h1>
            <Link href="/learn/earn/upload">
                Click here to upload a question
            </Link>
            <p className="text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt suscipit, magni vero, tempore molestias tenetur pariatur, veritatis id ullam magnam deserunt numquam modi libero. Adipisci odio voluptate ut nesciunt omnis.
            </p>
            <LatestPotentialQuestions />
        </div>
    );
}
 
export default page;