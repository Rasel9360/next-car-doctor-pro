"use client"
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react'
import React from 'react';
import { useRouter } from 'next/navigation';
import SocialLogIn from '@/components/SocialLogIn/SocialLogIn';

const LoginPage = () => {
    const router = useRouter();

    const handleLogin = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        const resp = await signIn('credentials', {
            email: email,
            password: password,
            redirect: false
        })
        console.log(resp);
        if (resp.status === 200) {
            router.push('/');
        }

        event.target.reset();
    }

    return (
        <div className='w-10/12 mx-auto my-12 px-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div>
                <Image src='/assets/images/login/login.svg' alt='login image' width={550} height={550} />
            </div>
            <div className='border-2 p-10 rounded-lg '>
                <h2 className="text-center mb-10 text-3xl font-semibold">Login</h2>
                <form className='space-y-7 '
                    onSubmit={handleLogin}
                >
                    <div>
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='enter your email'
                            className='input input-bordered w-full mt-3' />
                    </div>
                    <div>
                        <label htmlFor="name">Your Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder='enter your password'
                            className='input input-bordered w-full mt-3' />
                    </div>
                    <button type='submit' className='btn btn-primary w-full'>Sign In</button>
                </form>
                <div className="divider mt-10 mb-7">Or Sign In with </div>
                {/* social login */}
                <SocialLogIn />
                <p className="text-center mt-10">Have an account? <Link href={'signup'} className='text-primary font-bold'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;