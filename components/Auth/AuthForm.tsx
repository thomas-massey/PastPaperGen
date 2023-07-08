"use client"

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Input from "@/components/Inputs/Input";
import Button from "@/components/Buttons/Buttons";
import AuthSocialButton from "./AuthSocialButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Variant = "SIGNIN" | "SIGNUP" | "EMAIL_ONLY"

const AuthForm = () => {
    const supabaseClient = useSupabaseClient();
    const [isLoading, setIsLoading] = useState(false);
    const [variant, setVariant] = useState<Variant>("SIGNUP");
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit = async (data: FieldValues) => {
        setIsLoading(true);
        if (variant === "SIGNIN") {
            const { error } = await supabaseClient.auth.signInWithPassword({
                email: data.email,
                password: data.password
            });
            if (error) {
                toast.error(error.message);
            } else {
                toast.success("Signed in successfully");
                router.push("/account");
            }
        } else if (variant === "SIGNUP") {
            const { error } = await supabaseClient.auth.signUp({
                email: data.email,
                password: data.password
            });
            if (error) {
                toast.error(error.message);
            } else {
                toast.success("Signed up successfully, please check your email for the confirmation link");
            }
        }
        setIsLoading(false);
    };

    const socialAction = (action: string) => {
        setIsLoading(true);
        if (action === "GOOGLE") {
            supabaseClient.auth.signInWithOAuth({ provider: "google" });
        } else if (action === "GITHUB") {
            supabaseClient.auth.signInWithOAuth({ provider: "github" });
        }
        setIsLoading(false);
    }

    const sendMagicLink = async (email: string) => {
        setIsLoading(true);
        supabaseClient.auth.signInWithOtp({ email });
        toast.success("Please check your email for the magic link");
        setIsLoading(false);
    }
    
    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="text-center mt-1">
                <div className="flex justify-center items-center">
                    <Image src="/images/logo_transparent.png" alt="PastPaperGen Logo" width={250} height={250} />
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 py-4">
                    {variant === "SIGNIN" ? "Sign in to your account" : "Sign up for an account"}
                </h2>
            </div>
            <div className="bg-white px-4 py-8 shadow sm-px-10">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {variant === "SIGNUP" && (
                        <Input
                            label="Name"
                            id="name"
                            register={register}
                            errors={errors}
                            disabled={isLoading}
                        />
                    )}
                    <Input
                        label="Email"
                        id="email"
                        type="email"
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    {variant !== "EMAIL_ONLY" && (
                    <Input
                        label="Password"
                        id="password"
                        type="password"
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    )}
                    <div>
                        <Button
                            disabled={isLoading}
                            fullWidth
                            type="submit"
                        >{variant === "SIGNIN" ? "Sign in" : variant === "SIGNUP" ? "Sign up" : "Send magic link"}</Button>
                    </div>
                </form>

                <div className="mt-6 flex justify-center items-center">
                    <div className="w-full border-t border-gray-300" />
                    <div className="px-2 text-gray-500 font-bold whitespace-nowrap">Or continue with</div>
                    <div className="w-full border-t border-gray-300" />
                </div>

                <div className="mt-6 flex gap-2">
                    <AuthSocialButton
                        icon={BsGithub}
                        onClick={() => socialAction("GITHUB")}
                    />
                    <AuthSocialButton
                        icon={BsGoogle}
                        onClick={() => socialAction("GOOGLE")}
                    />
                </div>

                <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                    <div onClick={() => setVariant("EMAIL_ONLY")} className="underline cursor-pointer">
                        Send a magic link email
                    </div>
                </div>
                <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                    <div>
                        {variant === "SIGNIN" ? "Don't have an account?" : "Already have an account?"}
                    </div>
                    <div className="underline cursor-pointer" onClick={() => setVariant(variant === "SIGNIN" ? "SIGNUP" : "SIGNIN")}>
                        {variant === "SIGNIN" ? "Sign up" : "Sign in"}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AuthForm;