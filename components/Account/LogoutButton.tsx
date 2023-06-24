import { signOut } from "next-auth/react";
import Button from "@/components/Buttons/Buttons";

const LogoutButton = () => {
    return (
        <Button onClick={() => signOut()}>Sign Out</Button>
    );
}

export default LogoutButton;