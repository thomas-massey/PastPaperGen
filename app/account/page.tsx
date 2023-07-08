"use client"

import { useUser } from "@/hooks/useUser";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Account = async () => {
    const { user } = useUser()
    // Get the simple ID of the user via the supabase API
    const router = useRouter()
    const signOutRedirect = () => {
        supabase.auth.signOut()
        // Redirect to home page using the router
        router.push("/")
    }
    return (
        <div className="flex flex-col items-center justify-center py-2">
            <h1 className="text-4xl font-bold">
                Account
            </h1>
            <p className="text-xl">
                Username: {user?.user_metadata.full_name}
            </p>
            <p className="text-xl">
                Email: {user?.email}
            </p>
            <p className="text-xl">
                SimpleID (for sharing): 
            </p>
            <button onClick={signOutRedirect}>Sign Out</button>
            <Image src={user?.user_metadata.avatar_url} alt="Avatar" width={200} height={200} />
        </div>
    );
}

export default account;