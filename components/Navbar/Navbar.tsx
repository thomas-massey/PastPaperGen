"use client"

import Link from "next/link";
import Image from "next/image";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const supabaseClient = useSupabaseClient()
    const { user } = useUser()
    const router = useRouter()
    const signOutRedirect = () => {
        supabaseClient.auth.signOut()
        // Redirect to home page using the router
        router.push("/")
    }
    return (
        <div>
            <nav className="flex justify-between items-center py-4 px-10 bg-gray-300 text-black">
                <Link href="/">
                    <Image src="/images/logo_transparent.png" width={150} height={150} alt="PastPaperGen Logo" />
                </Link>

                <ul className="flex justify-end items-center space-x-8">
                    <li>
                        <Link href="/">
                            <div className="font-medium cursor-pointer">Home</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <div className="font-medium cursor-pointer">About</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/learn">
                            <div className="font-medium cursor-pointer">Learn</div>
                        </Link>
                    </li>
                </ul>
                <ul className="flex justify-end items-center space-x-8">
                    <li>
                        {user ? (
                            // Give a rounded background
                            <div className="rounded-full bg-blue-300 p-2 flex space-x-4">
                                <Link href="/account">
                                    <div className="font-medium cursor-pointer">Account</div>
                                </Link>
                                <button onClick={signOutRedirect}>Sign Out</button>
                            </div>
                        ) : (
                            <div className="rounded-full bg-blue-300 p-2">
                                <Link href="/auth">
                                    <div className="font-medium cursor-pointer">Sign in/Sign up</div>
                                </Link>
                            </div>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;