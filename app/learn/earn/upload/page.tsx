import LearnNavbar from "@/components/Learn/LearnNavbar";
import UploadForm from "@/components/Learn/UploadForm";

const page = () => {
    return (
        <div className="flex flex-col items-center justify-center py-2">
            <LearnNavbar />
            <h1 className="text-4xl font-bold">
                Upload
            </h1>
            <UploadForm />
        </div>
    );
}
 
export default page;