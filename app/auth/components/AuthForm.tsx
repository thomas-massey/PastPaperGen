'use client'

import Button from '@/app/components/Buttons'
import Input from '@/app/components/inputs/Input'
import { useEffect, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import AuthSocialButton from './AuthSocialButton'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { signIn, useSession } from 'next-auth/react'
import { useRouter, NextRouter } from 'next/router'

type Varient = 'LOGIN' | 'REGISTER'

const AuthForm = () => {
    const session = useSession()
    const router = useRouter()
    const [varient, setVarient] = useState<Varient>('LOGIN')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (session?.status === 'authenticated') {
            router.push('/users')
        }
    }, [session?.status])

    const toggle = () => {
        if (varient === 'LOGIN') {
            setVarient('REGISTER')
        } else {
            setVarient('LOGIN')
        }
    }

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

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        if (varient === 'REGISTER') {
            axios.post('/api/register', data)
            .then(() => signIn('credentials', data))
            .catch(() => toast.error('Something went wrong'))
            .finally(() => setIsLoading(false))
        }

        if (varient === 'LOGIN') {
            signIn('credentials', {
                ...data,
                redirect: false,
            }).then((callback) => {
                if (callback?.error) {
                    toast.error(callback?.error)
                }

                if (callback?.ok && !callback?.error) {
                    toast.success('Logged in successfully')
                    router.push('/users')
                }
            })
            .finally(() => setIsLoading(false))
        }
    }


    const socialAction = (action: string) => {
        setIsLoading(true)

        signIn(action, {
            redirect: false,
        }).then((callback) => {
            if (callback?.error) {
                toast.error(callback?.error)
            }

            if (callback?.ok && !callback?.error) {
                toast.success('Logged in successfully')
            }
        })
    }

    return (
        <div
            className="
                mt-8
                sm:mx-auto
                sm:w-full
                sm:max-w-md
            "
        >
            <div
                className="
                    bg-white
                    px-4
                    py-8
                    shadow
                    sm-px-10
                "
            >
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {varient === 'REGISTER' && (
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
                    <Input
                        label="Password"
                        id="password"
                        type="password"
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <div>
                        <Button
                            disabled={isLoading}
                            fullWidth
                            type="submit"
                        >{varient === 'LOGIN' ? 'Login' : 'Register'}</Button>
                    </div>
                </form>

                <div className="mt-6 flex justify-center items-center">
                    <div className="w-full border-t border-gray-300" />
                    <div className="px-2 text-gray-500 font-bold whitespace-nowrap">
                        Or continue with
                    </div>
                    <div className="w-full border-t border-gray-300" />
                </div>

                <div className="mt-6 flex gap-2">
                    <AuthSocialButton
                        icon={BsGithub}
                        onClick={() => socialAction('github')}
                    />
                    <AuthSocialButton
                        icon={BsGoogle}
                        onClick={() => socialAction('google')}
                    />
                </div>

                <div className='
                    flex
                    gap-2
                    justify-center
                    text-sm
                    mt-6
                    px-2
                    text-gray-500'>
                    <div>
                        {varient === 'LOGIN' ? 'Don\'t have an account?' : 'Already have an account?'}
                    </div>
                    <div
                        onClick={toggle}
                        className="underline cursor-pointer">
                        {varient === 'LOGIN' ? 'Create an account' : 'Login'}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AuthForm