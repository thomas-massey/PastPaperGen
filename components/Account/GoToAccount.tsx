import { useRouter } from "next/navigation";
import Button from "@/components/Buttons/Buttons";

const GoToAccount = () => {
    const router = useRouter();
    return (
        <Button onClick={() => router.push("/account")}>Go to account</Button>
    );
}
 
export default GoToAccount;