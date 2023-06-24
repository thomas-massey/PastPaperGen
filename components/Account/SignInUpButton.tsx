import { useRouter } from "next/navigation";
import Buttons from "@/components/Buttons/Buttons";

const SignInUpButton = () => {
    const router = useRouter();
    return (
        <Buttons onClick={() => router.push("/auth")}>Sign In/Sign Up</Buttons>
    );
}
 
export default SignInUpButton;