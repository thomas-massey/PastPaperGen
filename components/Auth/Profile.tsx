"use client"

import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

const Profile = () => {
    const supabaseClient = useSupabaseClient()
    const { user } = useUser()
    const router = useRouter()
    const signOut = () => {
        supabaseClient.auth.signOut()
        // Redirect to home page using the router
        router.push("/")
    }
    return (
        <div>
            <h1>Profile</h1>
            {user ? (
                <div>
                    <h2>Welcome {user.email}</h2>
                    <button onClick={signOut}>Sign out</button>
                </div>
            ) : (
                <div>
                    <h2>Not signed in</h2>
                </div>
            )}

        </div>
    );
}

export default Profile;