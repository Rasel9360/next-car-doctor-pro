"use client"
import SocialLogIn from '@/components/SocialLogIn/SocialLogIn';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SignUpPage = () => {

    const handleSignUp = async (event) => {
        event.preventDefault();

        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
        }

        const resp = fetch('http://localhost:3000/signup/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })

        console.log(resp);
        event.target.reset();

    }

    return (
        <div className='w-10/12 mx-auto my-12 px-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div>
                <Image src='/assets/images/login/login.svg' alt='login image' width={550} height={550} />
            </div>
            <div className='border-2 p-10 rounded-lg '>
                <h2 className="text-center mb-10 text-3xl font-semibold">Sign Up</h2>
                <form className='space-y-7 '
                    onSubmit={handleSignUp}
                >
                    <div>
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder='enter your name'
                            className='input input-bordered w-full mt-3' />
                    </div>
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
                    <button type='submit' className='btn btn-primary w-full'>Sign Up</button>
                </form>
                <div className="divider mt-10 mb-7">Or Sign In with </div>
                {/* social login */}
                <SocialLogIn />
                <p className="text-center mt-10">Already have an account? Login <Link href={'signin'} className='text-primary font-bold'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUpPage;